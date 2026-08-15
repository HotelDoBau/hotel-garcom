let carrinho = [];

const listaProdutos = document.getElementById("listaProdutos");
const buscar = document.getElementById("buscar");
const qtdItens = document.getElementById("qtdItens");
const totalPedido = document.getElementById("totalPedido");

const numeroMesa = localStorage.getItem("mesaSelecionada");


// ===========================
// VERIFICA MESA
// ===========================

if (!numeroMesa) {

    window.location.href = "index.html";

}


// TÍTULO

document.getElementById("tituloMesa").textContent =
    "Mesa " + String(numeroMesa).padStart(2, "0");


// ===========================
// IMAGENS
// ===========================

function obterImagem(produto) {

    const nome = produto.nome.toLowerCase();


    if (produto.categoria === "Cafeteria") {

        if (
            nome.includes("cappuccino") ||
            nome.includes("frapp") ||
            nome.includes("affogato") ||
            nome.includes("mochac")
        ) {

            return "img/cappuccino-espresso.webp";

        }

        return "img/cafe-espresso.webp";

    }


    if (produto.categoria === "Salgados") {

        return "img/salgados.webp";

    }


    if (produto.categoria === "Lanches") {

        return "img/lanche.webp";

    }


    if (produto.categoria === "Pratos feitos") {

        return "img/pf.webp";

    }


    return "";

}


// ===========================
// CARREGAR PRODUTOS
// ===========================

function carregarProdutos(filtro = "") {

    listaProdutos.innerHTML = "";


    const categorias = [

        ...new Set(
            produtos.map(produto => produto.categoria)
        )

    ];


    const iconesCategoria = {

        "Cafeteria": "☕",
        "Salgados": "🥐",
        "Lanches": "🥪",
        "Pratos feitos": "🍽️"

    };


    categorias.forEach(categoria => {


        const itens = produtos.filter(produto =>

            produto.categoria === categoria &&

            produto.nome
                .toLowerCase()
                .includes(filtro.toLowerCase())

        );


        if (itens.length === 0) {

            return;

        }


        // ===========================
        // CARD DA CATEGORIA
        // ===========================

        const grupo =
            document.createElement("section");


        grupo.className =
            "grupo-categoria";


        // CABEÇALHO

        const titulo =
            document.createElement("button");


        titulo.type = "button";

        titulo.className =
            "categoria-produto";


        titulo.innerHTML = `

            <span>
                ${iconesCategoria[categoria] || "🍴"}
                ${categoria}
            </span>

            <span class="seta-categoria">
                ▼
            </span>

        `;


        // PRODUTOS

        const conteudo =
            document.createElement("div");


        conteudo.className =
            "conteudo-categoria";


        itens.forEach(produto => {


            const itemCarrinho =
                carrinho.find(
                    item => item.id === produto.id
                );


            const quantidade =
                itemCarrinho
                    ? itemCarrinho.quantidade
                    : 0;


            const imagem =
                obterImagem(produto);


            const card =
                document.createElement("div");


            card.className =
                "produto-card";


            card.innerHTML = `

                <img
                    src="${imagem}"
                    alt="${produto.nome}"
                    class="foto-produto"
                >


                <div class="produto-info">

                    <h3>
                        ${produto.nome}
                    </h3>

                    <p>
                        R$ ${produto.preco.toFixed(2)}
                    </p>

                </div>


                <div class="controle-produto">

                    <button
                        type="button"
                        onclick="alterarQuantidade(${produto.id}, -1)">
                        −
                    </button>


                    <strong>
                        ${quantidade}
                    </strong>


                    <button
                        type="button"
                        onclick="alterarQuantidade(${produto.id}, 1)">
                        +
                    </button>

                </div>

            `;


            conteudo.appendChild(card);

        });


        // ===========================
        // ABRIR / FECHAR CATEGORIA
        // ===========================

        titulo.addEventListener(
            "click",
            function () {


                const aberta =
                    conteudo.classList.toggle(
                        "aberta"
                    );


                titulo.classList.toggle(
                    "ativo",
                    aberta
                );

            }
        );


        grupo.appendChild(titulo);

        grupo.appendChild(conteudo);

        listaProdutos.appendChild(grupo);

    });

}


// ===========================
// ALTERAR QUANTIDADE
// ===========================

function alterarQuantidade(id, valor) {

    const produto =
        produtos.find(
            produto => produto.id === id
        );


    let item =
        carrinho.find(
            item => item.id === id
        );


    if (!item && valor > 0) {

        item = {

            ...produto,

            quantidade: 0

        };


        carrinho.push(item);

    }


    if (!item) {

        return;

    }


    item.quantidade += valor;


    if (item.quantidade <= 0) {

        carrinho =
            carrinho.filter(
                item => item.id !== id
            );

    }


    atualizarResumo();

    carregarProdutos(buscar.value);

}


// ===========================
// ATUALIZAR RESUMO
// ===========================

function atualizarResumo() {

    let quantidade = 0;

    let total = 0;


    carrinho.forEach(item => {

        quantidade +=
            item.quantidade;


        total +=
            item.preco *
            item.quantidade;

    });


    qtdItens.textContent =
        quantidade;


    totalPedido.textContent =
        "R$ " +
        total.toFixed(2);

}


// ===========================
// ENVIAR PEDIDO
// ===========================

async function enviarPedido() {

    if (carrinho.length === 0) {

        alert("Adicione algum item ao pedido.");
        return;

    }


    const observacaoCampo =
        document.getElementById("observacao");

    const observacao =
        observacaoCampo.value.trim() || "Nenhuma";


    const confirmar = confirm(
        "Deseja enviar este pedido para produção?"
    );


    if (!confirmar) {

        return;

    }


    // ===========================
    // AGUARDA FIREBASE
    // ===========================

    let tentativas = 0;

    while (
        !window.firebaseHotel &&
        tentativas < 50
    ) {

        await new Promise(
            resolve => setTimeout(resolve, 100)
        );

        tentativas++;

    }


    if (!window.firebaseHotel) {

        alert(
            "Não foi possível conectar ao sistema. Tente novamente."
        );

        return;

    }


    try {

        const {

            db,
            collection,
            addDoc,
            doc,
            setDoc,
            serverTimestamp

        } = window.firebaseHotel;


        // ===========================
        // NÚMERO DO PEDIDO
        // ===========================

        const numeroPedido =
            Date.now();


        // ===========================
        // ITENS
        // ===========================

        const itensPedido =
            carrinho.map(item => ({

                id: item.id,

                nome: item.nome,

                preco: Number(item.preco),

                quantidade:
                    Number(item.quantidade),

                subtotal:
                    Number(item.preco) *
                    Number(item.quantidade)

            }));


        const totalPedidoValor =
            itensPedido.reduce(
                (soma, item) =>
                    soma + item.subtotal,
                0
            );


        // ===========================
        // PEDIDO PARA PRODUÇÃO
        // ===========================

        await addDoc(

            collection(
                db,
                "pedidos_producao"
            ),

            {

                numeroPedido:
                    numeroPedido,

                mesa:
                    Number(numeroMesa),

                itens:
                    itensPedido,

                observacao:
                    observacao,

                total:
                    totalPedidoValor,

                status:
                    "novo",

                criadoEm:
                    serverTimestamp(),

                dataHora:
                    new Date()
                        .toLocaleString("pt-BR")

            }

        );


        // ===========================
        // SALVA / ATUALIZA A MESA
        // ===========================

        const referenciaMesa =
            doc(
                db,
                "mesas",
                "mesa_" +
                String(numeroMesa)
                    .padStart(2, "0")
            );


        await setDoc(

            referenciaMesa,

            {

                numero:
                    Number(numeroMesa),

                status:
                    "ocupada",

                atualizadoEm:
                    serverTimestamp()

            },

            {
                merge: true
            }

        );


        // ===========================
        // SALVA PEDIDO DENTRO DA MESA
        // ===========================

        await addDoc(

            collection(
                referenciaMesa,
                "pedidos"
            ),

            {

                numeroPedido:
                    numeroPedido,

                itens:
                    itensPedido,

                observacao:
                    observacao,

                total:
                    totalPedidoValor,

                criadoEm:
                    serverTimestamp(),

                dataHora:
                    new Date()
                        .toLocaleString("pt-BR")

            }

        );


        // ===========================
        // SUCESSO
        // ===========================

        alert(
            "Pedido enviado para produção."
        );


        carrinho = [];

        atualizarResumo();


        window.location.href =
            "mesa.html";

    }

    catch (erro) {

        console.error(
            "Erro ao enviar pedido:",
            erro
        );


        alert(
            "Não foi possível enviar o pedido."
        );

    }

}


    // ===========================
    // NÚMERO DO PEDIDO
    // ===========================

    const numeroPedido =

        Number(
            localStorage.getItem(
                "ultimoNumeroPedido"
            ) || 0
        ) + 1;


    localStorage.setItem(

        "ultimoNumeroPedido",

        numeroPedido

    );


    // ===========================
    // NOVO PEDIDO
    // ===========================

    const novoPedido = {

        numeroPedido:
            numeroPedido,

        dataHora:
            new Date().toISOString(),

        observacao:
            observacao,

        itens:
            carrinho.map(item => ({

                id:
                    item.id,

                nome:
                    item.nome,

                preco:
                    Number(item.preco),

                quantidade:
                    Number(item.quantidade),

                subtotal:
                    Number(item.preco) *
                    Number(item.quantidade)

            }))

    };


    // ===========================
    // ACUMULA NA MESA
    // ===========================

    mesa.status =
        "ocupada";


    mesa.pedidos.push(
        novoPedido
    );


    localStorage.setItem(

        chaveMesa,

        JSON.stringify(mesa)

    );


    // ===========================
    // PEDIDO PARA PRODUÇÃO
    // ===========================

    localStorage.setItem(

        "ultimoPedidoProducao",

        JSON.stringify({

            mesa:
                Number(numeroMesa),

            ...novoPedido

        })

    );


    alert(

        "Pedido #" +

        String(numeroPedido)
            .padStart(4, "0") +

        " enviado para produção."

    );


    window.location.href =
        "mesa.html";

}


// ===========================
// VOLTAR
// ===========================

function voltarMesa() {

    window.location.href =
        "mesa.html";

}


// ===========================
// PESQUISA
// ===========================

buscar.addEventListener(
    "input",
    function () {

        carregarProdutos(
            buscar.value
        );

    }
);


// ===========================
// INICIAR
// ===========================

carregarProdutos();

atualizarResumo();
