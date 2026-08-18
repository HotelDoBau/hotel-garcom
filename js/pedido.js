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


// ===========================
// TÍTULO
// ===========================

document.getElementById("tituloMesa").textContent =
    "Mesa " + String(numeroMesa).padStart(2, "0");


// ===========================
// IMAGENS
// ===========================

function obterImagem(produto) {

    // Se o produto já tem imagem própria no produtos.js,
    // usa essa imagem primeiro.
    if (produto.imagem) {
        return produto.imagem;
    }


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
if (produto.categoria === "Adicionais") {
    return "img/adicionais.webp";
}

if (produto.categoria === "Doces") {
    return "img/doces.webp";
}

if (produto.categoria === "Petiscos") {
    return "img/petiscos.webp";
}

if (produto.categoria === "Drinks") {
    return "img/drinks.webp";
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
    "Pratos feitos": "🍽️",
    "Bebidas": "🥤",
    "Cervejas e Vinhos": "🍺",
    "Adicionais": "➕",
    "Doces": "🍰",
    "Petiscos": "🍟",
    "Drinks": "🍹"

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


        // CARD DA CATEGORIA

        const grupo =
            document.createElement("section");

        grupo.className =
            "grupo-categoria";


        // TÍTULO DA CATEGORIA

        const titulo =
            document.createElement("button");

        titulo.type =
            "button";

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


        // CONTEÚDO DA CATEGORIA

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
                        R$ ${Number(produto.preco).toFixed(2)}
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


        // ABRIR / FECHAR CATEGORIA

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


    if (!produto) {
        return;
    }


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

    carregarProdutos(
        buscar.value
    );

}


// ===========================
// ATUALIZAR RESUMO
// ===========================

function atualizarResumo() {

    let quantidade = 0;
    let total = 0;


    carrinho.forEach(item => {

        quantidade +=
            Number(item.quantidade);


        total +=
            Number(item.preco) *
            Number(item.quantidade);

    });


    qtdItens.textContent =
        quantidade;


    totalPedido.textContent =
        "R$ " +
        total.toFixed(2);

}


// ===========================
// AGUARDAR FIREBASE
// ===========================

async function aguardarFirebase() {

    let tentativas = 0;


    while (
        !window.firebaseHotel &&
        tentativas < 50
    ) {

        await new Promise(
            resolve =>
                setTimeout(resolve, 100)
        );

        tentativas++;

    }


    return !!window.firebaseHotel;

}

// ===========================
// REVISÃO DO PEDIDO
// ===========================

function abrirRevisao() {

    if (carrinho.length === 0) {

        alert(
            "Adicione algum item ao pedido."
        );

        return;

    }


    const modal =
        document.getElementById(
            "modalRevisao"
        );


    const lista =
        document.getElementById(
            "listaRevisao"
        );


    lista.innerHTML = "";


    carrinho.forEach(item => {

        const subtotal =
            Number(item.preco) *
            Number(item.quantidade);


        const div =
            document.createElement("div");


        div.className =
            "item-revisao";


        div.innerHTML = `

            <div class="info-revisao">

                <strong>
                    ${item.nome}
                </strong>

                <small>
                    R$ ${Number(item.preco).toFixed(2)}
                </small>

            </div>


            <div class="controle-revisao">

                <button
                    type="button"
                    onclick="alterarQuantidadeRevisao(${item.id}, -1)">

                    −

                </button>


                <strong>
                    ${item.quantidade}
                </strong>


                <button
                    type="button"
                    onclick="alterarQuantidadeRevisao(${item.id}, 1)">

                    +

                </button>

            </div>


            <strong>
                R$ ${subtotal.toFixed(2)}
            </strong>

        `;


        lista.appendChild(div);

    });


    atualizarTotalRevisao();


    modal.classList.add(
        "mostrar"
    );

}


// ===========================
// ALTERAR QUANTIDADE NA REVISÃO
// ===========================

function alterarQuantidadeRevisao(
    id,
    valor
) {

    const produto =
        produtos.find(
            produto =>
                produto.id === id
        );


    if (!produto) {

        return;

    }


    let item =
        carrinho.find(
            item =>
                item.id === id
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
                item =>
                    item.id !== id
            );

    }


    atualizarResumo();


    if (carrinho.length === 0) {

        fecharRevisao();

        return;

    }


    abrirRevisao();

}


// ===========================
// TOTAL DA REVISÃO
// ===========================

function atualizarTotalRevisao() {

    const total =
        carrinho.reduce(
            (soma, item) =>

                soma +

                Number(item.preco) *
                Number(item.quantidade),

            0
        );


    document.getElementById(
        "totalRevisao"
    ).textContent =
        "R$ " +
        total.toFixed(2);

}


// ===========================
// FECHAR REVISÃO
// ===========================

function fecharRevisao() {

    document.getElementById(
        "modalRevisao"
    ).classList.remove(
        "mostrar"
    );

}
// ===========================
// ENVIAR PEDIDO
// ===========================

async function enviarPedido() {

    if (carrinho.length === 0) {

        alert(
            "Adicione algum item ao pedido."
        );

        return;

    }


    const observacaoCampo =
        document.getElementById(
            "observacao"
        );


    const observacao =
    observacaoCampo.value.trim() ||
    "Nenhuma";


const conectado =
    await aguardarFirebase();


    if (!conectado) {

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


        // NÚMERO DO PEDIDO

        const numeroPedido =
            Date.now();


        // ITENS

        const itensPedido =
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

            }));


        const totalPedidoValor =
            itensPedido.reduce(

                (soma, item) =>
                    soma + item.subtotal,

                0

            );


        // ===========================
        // ENVIA PARA PRODUÇÃO
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
        // ATUALIZA A MESA
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
        // ACUMULA PEDIDO NA MESA
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
        "ERRO FIREBASE:\n\n" +
        erro.code +
        "\n\n" +
        erro.message
    );

}

}


// ===========================
// VOLTAR PARA MESA
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
