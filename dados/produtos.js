const produtos = [

    // ☕ CAFETERIA

    {
        id: 1,
        nome: "Café expresso DolceGusto 50ml",
        categoria: "Cafeteria",
        preco: 9.00
    },

    {
        id: 2,
        nome: "Café coado",
        categoria: "Cafeteria",
        preco: 8.00
    },

    {
        id: 3,
        nome: "Café espresso DolceGusto Lungo",
        categoria: "Cafeteria",
        preco: 9.00
    },

    {
        id: 4,
        nome: "Café espresso DolceGusto Matinal",
        categoria: "Cafeteria",
        preco: 9.00
    },

    {
        id: 5,
        nome: "Café espresso DolceGusto Doppio",
        categoria: "Cafeteria",
        preco: 9.00
    },

    {
        id: 6,
        nome: "Espresso Latte Nesquik",
        categoria: "Cafeteria",
        preco: 11.00
    },

    {
        id: 7,
        nome: "Espresso Latte KitKat",
        categoria: "Cafeteria",
        preco: 11.00
    },

    {
        id: 8,
        nome: "Espresso Au Lait",
        categoria: "Cafeteria",
        preco: 11.00
    },

    {
        id: 9,
        nome: "Espresso Latte Tea Chai",
        categoria: "Cafeteria",
        preco: 11.00
    },

    {
        id: 10,
        nome: "Espresso Latte Língua de Gato",
        categoria: "Cafeteria",
        preco: 11.00
    },

    {
        id: 11,
        nome: "Cappuccino Tradicional",
        categoria: "Cafeteria",
        preco: 11.00
    },

    {
        id: 12,
        nome: "Cappuccino Caramelo Salgado",
        categoria: "Cafeteria",
        preco: 11.00
    },

    {
        id: 15,
        nome: "Mochacccino de Canela",
        categoria: "Cafeteria",
        preco: 11.00
    },

    {
        id: 16,
        nome: "Cappuccino Borda de Creme de Avelã",
        categoria: "Cafeteria",
        preco: 14.00
    },

    {
        id: 17,
        nome: "Frappé",
        categoria: "Cafeteria",
        preco: 14.00
    },

    {
        id: 18,
        nome: "Affogato",
        categoria: "Cafeteria",
        preco: 12.00
    },


    // 🥐 SALGADOS

    {
        id: 19,
        nome: "Salgado assado tortinha de costela",
        categoria: "Salgados",
        preco: 7.50
    },

    {
        id: 20,
        nome: "Salgado assado esfiha de carne",
        categoria: "Salgados",
        preco: 7.50
    },

    {
        id: 21,
        nome: "Salgado assado esfiha de frango",
        categoria: "Salgados",
        preco: 7.50
    },

    {
        id: 22,
        nome: "Salgado assado ghirella de pizza",
        categoria: "Salgados",
        preco: 7.50
    },

    {
        id: 23,
        nome: "Salgado assado presunto e queijo",
        categoria: "Salgados",
        preco: 7.50
    },

    {
        id: 24,
        nome: "Salgado assado X-Burguer com bacon",
        categoria: "Salgados",
        preco: 10.00
    },

    {
        id: 25,
        nome: "Croissant pizza",
        categoria: "Salgados",
        preco: 7.50
    },

    {
        id: 26,
        nome: "Croissant frango com requeijão",
        categoria: "Salgados",
        preco: 7.50
    },

    {
        id: 27,
        nome: "Croissant de chocolate",
        categoria: "Salgados",
        preco: 7.50
    },

    {
        id: 28,
        nome: "Croissant de doce de leite",
        categoria: "Salgados",
        preco: 7.50
    },


    // 🥪 LANCHES

    {
        id: 29,
        nome: "Lanche de carne louca",
        categoria: "Lanches",
        preco: 23.00
    },

    {
        id: 30,
        nome: "Lanche de ragu",
        categoria: "Lanches",
        preco: 25.00
    },

    {
        id: 31,
        nome: "Lanche de frango empanado",
        categoria: "Lanches",
        preco: 22.00
    },

    {
        id: 32,
        nome: "Lanche natural",
        categoria: "Lanches",
        preco: 14.00
    },

    {
        id: 33,
        nome: "Misto quente",
        categoria: "Lanches",
        preco: 15.00
    },


    // 🍽️ PRATOS FEITOS

    {
        id: 34,
        nome: "Nhoque com molho vermelho",
        categoria: "Pratos feitos",
        preco: 19.90
    },

    {
        id: 35,
        nome: "Nhoque com molho bechamel",
        categoria: "Pratos feitos",
        preco: 19.90
    },

    {
        id: 36,
        nome: "Salada Grande",
        categoria: "Pratos feitos",
        preco: 10.00
    },

    {
        id: 37,
        nome: "Arroz biro-biro",
        categoria: "Pratos feitos",
        preco: 21.90
    },

    {
        id: 38,
        nome: "Arroz carreteiro light",
        categoria: "Pratos feitos",
        preco: 29.90
    },

    {
        id: 39,
        nome: "Estrogonofe de frango",
        categoria: "Pratos feitos",
        preco: 27.90
    },

    {
        id: 40,
        nome: "Estrogonofe de carne",
        categoria: "Pratos feitos",
        preco: 29.90
    },

    {
        id: 41,
        nome: "Arroz com feijão e frango empanado",
        categoria: "Pratos feitos",
        preco: 21.90
    },

    {
        id: 42,
        nome: "Arroz com feijão e ragú ou lagarto",
        categoria: "Pratos feitos",
        preco: 22.90
    },

    {
        id: 43,
        nome: "Arroz com feijão e ovo",
        categoria: "Pratos feitos",
        preco: 19.90
    },


    // 🥤 BEBIDAS

    {
        id: 44,
        nome: "Água Minaura sem gás",
        categoria: "Bebidas",
        preco: 3.00,
        imagem: "img/agua-minaura-sem-gas.webp"
    },

    {
        id: 45,
        nome: "Água Minaura com gás",
        categoria: "Bebidas",
        preco: 4.50,
        imagem: "img/agua-minaura-com-gas.webp"
    },

    {
        id: 46,
        nome: "Água Crystal sem gás",
        categoria: "Bebidas",
        preco: 4.00,
        imagem: "img/agua-crystal-sem-gas.webp"
    },

    {
        id: 47,
        nome: "Água Minalice sem gás",
        categoria: "Bebidas",
        preco: 3.00,
        imagem: "img/agua-minalice-sem-gas.webp"
    },

    {
        id: 48,
        nome: "Água Minalice com gás",
        categoria: "Bebidas",
        preco: 4.50,
        imagem: "img/agua-minalice-com-gas.webp"
    },

    {
        id: 49,
        nome: "Suco Nativo Frutas Cítricas",
        categoria: "Bebidas",
        preco: 4.00,
        imagem: "img/suco-nativo-frutas-citricas.webp"
    },

    {
        id: 50,
        nome: "Suco Nativo Uva",
        categoria: "Bebidas",
        preco: 4.00,
        imagem: "img/suco-nativo-uva.webp"
    },

    {
        id: 51,
        nome: "Suco Nativo Laranja com Acerola",
        categoria: "Bebidas",
        preco: 4.00,
        imagem: "img/suco-nativo-laranja-acerola.webp"
    },

    {
        id: 52,
        nome: "Guaraná Antarctica lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/guarana-antartica-lata.webp"
    },

    {
        id: 53,
        nome: "Guaraná Antarctica Zero lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/guarana-antartica-zero-lata.webp"
    },

    {
        id: 54,
        nome: "Guaraná Antarctica caçulinha 220ml",
        categoria: "Bebidas",
        preco: 5.00,
        imagem: "img/guarana-antartica-caculinha.webp"
    },

    {
        id: 55,
        nome: "Guaraná Antarctica Zero caçulinha 220ml",
        categoria: "Bebidas",
        preco: 5.00,
        imagem: "img/guarana-antartica-zero-caculinha.webp"
    },

    {
        id: 56,
        nome: "Coca-Cola lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/coca-cola-lata.webp"
    },

    {
        id: 57,
        nome: "Coca-Cola Zero lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/coca-cola-zero-lata.webp"
    },

    {
        id: 58,
        nome: "Coca-Cola caçulinha 220ml",
        categoria: "Bebidas",
        preco: 5.00,
        imagem: "img/coca-cola-caculinha.webp"
    },

    {
        id: 59,
        nome: "Coca-Cola Zero caçulinha 220ml",
        categoria: "Bebidas",
        preco: 5.00,
        imagem: "img/coca-cola-zero-caculinha.webp"
    },

    {
        id: 60,
        nome: "Energético Monster Mango Loco 473ml",
        categoria: "Bebidas",
        preco: 13.00,
        imagem: "img/monster-mango-loco.webp"
    },

    {
        id: 61,
        nome: "Energético Monster Tradicional 473ml",
        categoria: "Bebidas",
        preco: 13.00,
        imagem: "img/monster-tradicional.webp"
    },

    {
        id: 62,
        nome: "Fanta Laranja lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/fanta-laranja.webp"
    },

    {
        id: 63,
        nome: "Fanta Uva lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/fanta-uva.webp"
    },

    {
        id: 64,
        nome: "Schweppes Citrus lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/schweppes-citrus.webp"
    },

    {
        id: 65,
        nome: "Schweppes Tônica lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/schweppes-tonica.webp"
    },

    {
        id: 66,
        nome: "Schweppes Tônica Zero lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/schweppes-tonica-zero.webp"
    },

    {
        id: 67,
        nome: "Soda Limonada lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/soda-limonada.webp"
    },

    {
        id: 68,
        nome: "Sprite lata 350ml",
        categoria: "Bebidas",
        preco: 7.00,
        imagem: "img/sprite-lata.webp"
    },


    // 🍺 CERVEJAS E VINHOS

    {
        id: 69,
        nome: "Heineken 600ml",
        categoria: "Cervejas e Vinhos",
        preco: 18.00,
        imagem: "img/heineken-600ml.webp"
    },

    {
        id: 70,
        nome: "Amstel 600ml",
        categoria: "Cervejas e Vinhos",
        preco: 16.00,
        imagem: "img/amstel-600ml.webp"
    },

    {
        id: 71,
        nome: "Original 600ml",
        categoria: "Cervejas e Vinhos",
        preco: 16.00,
        imagem: "img/original-600ml.webp"
    },

    {
        id: 72,
        nome: "Vinho Lunae garrafa",
        categoria: "Cervejas e Vinhos",
        preco: 55.00,
        imagem: "img/vinho-lunae.webp"
    },

    {
        id: 73,
        nome: "Heineken lata",
        categoria: "Cervejas e Vinhos",
        preco: 10.00,
        imagem: "img/heineken-lata.webp"
    },

    {
        id: 74,
        nome: "Amstel lata",
        categoria: "Cervejas e Vinhos",
        preco: 10.00,
        imagem: "img/amstel-lata.webp"
    },
    
    // ➕ ADICIONAIS

    {
        id: 75,
        nome: "Porção de arroz",
        categoria: "Adicionais",
        preco: 8.00
    },

    {
        id: 76,
        nome: "Porção de feijão",
        categoria: "Adicionais",
        preco: 8.00
    },

    {
        id: 77,
        nome: "Porção de ragú ou lagarto",
        categoria: "Adicionais",
        preco: 10.00
    },

    {
        id: 78,
        nome: "Adicional de cupim",
        categoria: "Adicionais",
        preco: 16.00
    },

    {
        id: 79,
        nome: "Adicional de ovo frito",
        categoria: "Adicionais",
        preco: 1.70
    },

    {
        id: 80,
        nome: "Adicional de tomate",
        categoria: "Adicionais",
        preco: 0.80
    },

    {
        id: 81,
        nome: "Adicional de cebola",
        categoria: "Adicionais",
        preco: 0.90
    },

    {
        id: 82,
        nome: "Adicional de mussarela",
        categoria: "Adicionais",
        preco: 1.50
    },


    // 🍰 DOCES

    {
        id: 83,
        nome: "Salada de frutas",
        categoria: "Doces",
        preco: 10.00
    },

    {
        id: 84,
        nome: "Adicional de granola",
        categoria: "Doces",
        preco: 3.45
    },

    {
        id: 85,
        nome: "Adicional de iogurte",
        categoria: "Doces",
        preco: 1.70
    },

    {
        id: 86,
        nome: "Adicional de leite condensado",
        categoria: "Doces",
        preco: 2.00
    },

    {
        id: 87,
        nome: "Adicional de mel",
        categoria: "Doces",
        preco: 2.20
    },

    {
        id: 88,
        nome: "Adicional de geleia",
        categoria: "Doces",
        preco: 1.50
    },

    {
        id: 89,
        nome: "Bolo do dia",
        categoria: "Doces",
        preco: 5.00
    },

    {
        id: 90,
        nome: "Pudim de leite",
        categoria: "Doces",
        preco: 7.00
    },

    {
        id: 91,
        nome: "Banoffe",
        categoria: "Doces",
        preco: 9.00
    },

    {
        id: 92,
        nome: "Bolo gelado de coco",
        categoria: "Doces",
        preco: 10.00
    },

    {
        id: 93,
        nome: "Bolo gelado com sorvete",
        categoria: "Doces",
        preco: 14.00
    },

    {
        id: 94,
        nome: "Bolo gelado completo",
        categoria: "Doces",
        preco: 17.00
    },


    // 🍟 PETISCOS

    {
        id: 95,
        nome: "Batata rústica",
        categoria: "Petiscos",
        preco: 33.00
    },

    {
        id: 96,
        nome: "Calabresa fatiada",
        categoria: "Petiscos",
        preco: 35.00
    },

    {
        id: 97,
        nome: "Pote de salgadinho",
        categoria: "Petiscos",
        preco: 4.00
    },


    // 🍹 DRINKS

    {
        id: 98,
        nome: "Laranjinha",
        categoria: "Drinks",
        preco: 33.00
    },

    {
        id: 99,
        nome: "Mayra Amou",
        categoria: "Drinks",
        preco: 35.00
    },

    {
        id: 100,
        nome: "Gente Fina",
        categoria: "Drinks",
        preco: 31.00
    },

    {
        id: 101,
        nome: "Coice de mula",
        categoria: "Drinks",
        preco: 34.00
    },

    {
        id: 102,
        nome: "Seu Geraldo",
        categoria: "Drinks",
        preco: 32.00
    }
];
