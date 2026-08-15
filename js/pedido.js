let carrinho = [];

const listaProdutos = document.getElementById("listaProdutos");
const buscar = document.getElementById("buscar");
const qtdItens = document.getElementById("qtdItens");
const totalPedido = document.getElementById("totalPedido");

const numeroMesa = localStorage.getItem("mesaSelecionada");


if (!numeroMesa) {
    window.location.href = "index.html";
}


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
        ...new Set(produtos.map(produto => produto.categoria))
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


        const grupo = document.createElement("section");
        grupo.className = "grupo-categoria";


        const titulo = document.createElement("button");
        titulo.className = "categoria-produto";

        titulo.innerHTML = `
            <span>
                ${iconesCategoria[categoria] || "🍴"}
                ${categoria}
            </span>

            <span class="seta-categoria">▼</span>
        `;


        const conteudo = document.createElement("div");
        conteudo.className = "conteudo-categoria";


        itens.forEach(produto => {

            const itemCarrinho =
                carrinho.find(item => item.id === produto.id);

            const quantidade =
                itemCarrinho ? itemCarrinho.quantidade : 0;

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

                    <h3>${produto.nome}</h3>

                    <p>
                        R$ ${produto.preco.toFixed(2)}
                    </p>

                </div>


                <div class="controle-produto">

                    <button onclick="alterarQuantidade(${produto.id}, -1)">
                        −
                    </button>

                    <strong>
                        ${quantidade}
                    </strong>

                    <button onclick="alterarQuantidade(${produto.id}, 1)">
                        +
                    </button>

                </div>

            `;


            conteudo.appendChild(card);

        });


        titulo.addEventListener("click", () => {

            const aberta =
                conteudo.classList.toggle("aberta");

            titulo.classList.toggle(
                "ativo",
                aberta
            );

        });


        grupo.appendChild(titulo);
        grupo.appendChild(conteudo);

        listaProdutos.appendChild(grupo);

    });

}

        function carregarProdutos(filtro = "") {

    listaProdutos.innerHTML = "";

    const categorias = [
        ...new Set(produtos.map(produto => produto.categoria))
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


        // CARD DA CATEGORIA

        const grupo = document.createElement("section");

        grupo.className = "grupo-categoria";


        // CABEÇALHO DA CATEGORIA

        const titulo = document.createElement("button");

        titulo.className = "categoria-produto";

        titulo.innerHTML = `
            <span>
                ${iconesCategoria[categoria] || "🍴"}
                ${categoria}
            </span>

            <span class="seta-categoria">⌄</span>
        `;


        // CONTEÚDO DA CATEGORIA

        const conteudo = document.createElement("div");

        conteudo.className = "conteudo-categoria";


        itens.forEach(produto => {

            const itemCarrinho =
                carrinho.find(item => item.id === produto.id);

            const quantidade =
                itemCarrinho ? itemCarrinho.quantidade : 0;

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

                    <button onclick="alterarQuantidade(${produto.id}, -1)">
                        −
                    </button>

                    <strong>
                        ${quantidade}
                    </strong>

                    <button onclick="alterarQuantidade(${produto.id}, 1)">
                        +
                    </button>

                </div>

            `;


            conteudo.appendChild(card);

        });


        titulo.addEventListener("click", () => {

            conteudo.classList.toggle("aberta");

            titulo.classList.toggle("ativo");

        });


        grupo.appendChild(titulo);

        grupo.appendChild(conteudo);

        listaProdutos.appendChild(grupo);

    });

}


        itens.forEach(produto => {

            const itemCarrinho =
                carrinho.find(item => item.id === produto.id);

            const quantidade =
                itemCarrinho ? itemCarrinho.quantidade : 0;

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

                    <button onclick="alterarQuantidade(${produto.id}, -1)">
                        −
                    </button>

                    <strong>
                        ${quantidade}
                    </strong>

                    <button onclick="alterarQuantidade(${produto.id}, 1)">
                        +
                    </button>

                </div>

            `;


            listaProdutos.appendChild(card);

        });

    });

}


// ===========================
// ALTERAR QUANTIDADE
// ===========================

function alterarQuantidade(id, valor) {

    const produto =
        produtos.find(produto => produto.id === id);


    let item =
        carrinho.find(item => item.id === id);


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
            carrinho.filter(item => item.id !== id);

    }


    atualizarResumo();

    carregarProdutos(buscar.value);

}


// ===========================
// RESUMO
// ===========================

function atualizarResumo() {

    let quantidade = 0;

    let total = 0;


    carrinho.forEach(item => {

        quantidade += item.quantidade;

        total +=
            item.preco * item.quantidade;

    });


    qtdItens.textContent =
        quantidade;


    totalPedido.textContent =
        "R$ " + total.toFixed(2);

}


// ===========================
// ENVIAR PEDIDO
// ===========================

function enviarPedido() {

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


    const chaveMesa =
        "mesa_" + numeroMesa;


    let mesa = JSON.parse(
        localStorage.getItem(chaveMesa)
    );


    if (!mesa) {

        mesa = {
            numero: Number(numeroMesa),
            status: "ocupada",
            pedidos: []
        };

    }


    const numeroPedido =
        Number(
            localStorage.getItem("ultimoNumeroPedido") || 0
        ) + 1;


    localStorage.setItem(
        "ultimoNumeroPedido",
        numeroPedido
    );


    const novoPedido = {

        numeroPedido: numeroPedido,

        dataHora:
            new Date().toISOString(),

        observacao: observacao,

        itens:
            carrinho.map(item => ({

                id: item.id,

                nome: item.nome,

                preco: item.preco,

                quantidade: item.quantidade,

                subtotal:
                    item.preco * item.quantidade

            }))

    };


    mesa.status = "ocupada";

    mesa.pedidos.push(novoPedido);


    localStorage.setItem(
        chaveMesa,
        JSON.stringify(mesa)
    );


    localStorage.setItem(
        "ultimoPedidoProducao",
        JSON.stringify({
            mesa: Number(numeroMesa),
            ...novoPedido
        })
    );


    alert(
        "Pedido #" +
        String(numeroPedido).padStart(4, "0") +
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
// BUSCA
// ===========================

buscar.addEventListener(
    "input",
    () => carregarProdutos(buscar.value)
);


// ===========================
// INICIAR
// ===========================

carregarProdutos();
atualizarResumo();
