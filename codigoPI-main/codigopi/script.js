const produtos = [

  {
    nome:"Arroz",
    emoji:"🍚",
    categoria:"Supermercados",
    itens:[
      {
        marca:"Tio João",
        mercados:[
          { nome:"Varejão Supermercado", preco:22.90 },
          { nome:"Supermercado Rodrigues", preco:21.50 },
          { nome:"Mercadinho Santa Rita", preco:24.90 }
        ]
      },
      {
        marca:"Caçarola",
        mercados:[
          { nome:"JE Varejão", preco:20.90 },
          { nome:"Supermercado Rodrigues", preco:19.99 },
          { nome:"Varejão Supermercado", preco:21.90 }
        ]
      }
    ]
  },

  {
    nome:"Feijão",
    emoji:"😃",
    categoria:"Supermercados",
    itens:[
      {
        marca:"Kicaldo",
        mercados:[
          { nome:"Varejão Supermercado", preco:8.90 },
          { nome:"Supermercado Rodrigues", preco:7.99 },
          { nome:"Mercadinho Santa Rita", preco:9.50 }
        ]
      }
    ]
  },

  {
    nome:"Macarrão",
    emoji:"🍝",
    categoria:"Supermercados",
    itens:[
      {
        marca:"Vitarella",
        mercados:[
          { nome:"Varejão Supermercado", preco:5.99 },
          { nome:"JE Varejão", preco:5.50 },
          { nome:"Mercadinho Santa Rita", preco:6.20 }
        ]
      }
    ]
  },

  {
    nome:"Café",
    emoji:"☕",
    categoria:"Supermercados",
    itens:[
      {
        marca:"Santa Clara",
        mercados:[
          { nome:"Varejão Supermercado", preco:14.90 },
          { nome:"Supermercado Rodrigues", preco:15.20 },
          { nome:"JE Varejão", preco:14.50 }
        ]
      }
    ]
  },

  {
    nome:"Leite",
    emoji:"🥛",
    categoria:"Supermercados",
    itens:[
      {
        marca:"Betânia",
        mercados:[
          { nome:"Varejão Supermercado", preco:6.99 },
          { nome:"Supermercado Rodrigues", preco:7.20 },
          { nome:"Mercadinho Santa Rita", preco:6.80 }
        ]
      }
    ]
  },

  {
    nome:"Dipirona",
    emoji:"💊",
    categoria:"Farmácias",
    itens:[
      {
        marca:"Neo Química",
        mercados:[
          { nome:"Farmácia Chacon", preco:7.50 },
          { nome:"Farmácia Santa Cruz", preco:6.70 },
          { nome:"Farmácia Tradição Rocha", preco:6.99 }
        ]
      }
    ]
  },

  {
    nome:"Paracetamol",
    emoji:"💉",
    categoria:"Farmácias",
    itens:[
      {
        marca:"Tylenol",
        mercados:[
          { nome:"Farmácia Chacon", preco:13.50 },
          { nome:"Farmácia Santa Cruz", preco:11.99 },
          { nome:"Farmácia Tradição Rocha", preco:12.90 }
        ]
      }
    ]
  },

  {
    nome:"Ibuprofeno",
    emoji:"🩺",
    categoria:"Farmácias",
    itens:[
      {
        marca:"Alivium",
        mercados:[
          { nome:"Farmácia Chacon", preco:19.50 },
          { nome:"Farmácia Santa Cruz", preco:17.99 },
          { nome:"Farmácia Tradição Rocha", preco:18.90 }
        ]
      }
    ]
  },

  {
    nome:"Gasolina",
    emoji:"⛽",
    categoria:"Postos",
    itens:[
      {
        marca:"Comum",
        mercados:[
          { nome:"Posto Santa Rita", preco:6.29 },
          { nome:"Posto Apollo 11", preco:6.19 },
          { nome:"Rede StopCar", preco:6.35 }
        ]
      }
    ]
  },

  {
    nome:"Etanol",
    emoji:"🛢️",
    categoria:"Postos",
    itens:[
      {
        marca:"Etanol Comum",
        mercados:[
          { nome:"Posto Santa Rita", preco:4.79 },
          { nome:"Posto Apollo 11", preco:4.69 },
          { nome:"Rede StopCar", preco:4.85 }
        ]
      }
    ]
  }

];

const categorias = [

  {
    nome:"Supermercados",
    locais:[
      "Varejão Supermercado",
      "Supermercado Rodrigues",
      "Mercadinho Santa Rita",
      "JE Varejão"
    ]
  },

  {
    nome:"Farmácias",
    locais:[
      "Farmácia Chacon",
      "Farmácia Santa Cruz",
      "Farmácia Tradição Rocha"
    ]
  },

  {
    nome:"Postos",
    locais:[
      "Posto Santa Rita",
      "Posto Apollo 11",
      "Rede StopCar"
    ]
  }

];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const count = document.getElementById("count");
const clearBtn = document.getElementById("clearBtn");

function mostrarListaProdutos(){

  const lista = document.getElementById("listaProdutos");

  lista.innerHTML = "";

  produtos.forEach(produto => {

    lista.innerHTML += `
      <div class="produtoDisponivel">
        <span>${produto.emoji}</span>
        <span>${produto.nome}</span>
      </div>
    `;

  });

}

function mostrarCategorias(){

  grid.innerHTML = "";

  categorias.forEach(categoria => {

    let locaisHTML = "";

    categoria.locais.forEach(local => {

      locaisHTML += `
        <div class="localCard">

          <h3>${local}</h3>

          <span>${categoria.nome}</span>

        </div>
      `;

    });

    grid.innerHTML += `
      <div class="categoriaBox">

        <h2 class="categoriaTitulo">
          ${categoria.nome}
        </h2>

        <div class="locaisGrid">

          ${locaisHTML}

        </div>

      </div>
    `;

  });

}

function pesquisar(){

  const valor = search.value.toLowerCase().trim();

  if(valor === ""){

    count.innerText = "0";

    mostrarCategorias();

    return;

  }

  grid.innerHTML = "";

  const encontrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(valor)
  );

  count.innerText = encontrados.length;

  if(encontrados.length === 0){

    grid.innerHTML = `
      <div class="empty">
        Nenhum produto encontrado
      </div>
    `;

    return;

  }

  encontrados.forEach(produto => {

    let itensHTML = "";

    produto.itens.forEach(item => {

      let mercadosHTML = "";

      item.mercados.forEach(mercado => {

        mercadosHTML += `
          <div class="mercadoLinha">

            <span>${mercado.nome}</span>

            <strong>
              R$ ${mercado.preco.toFixed(2)}
            </strong>

          </div>
        `;

      });

      itensHTML += `
        <div class="produtoComparacao">

          <div class="marcaTitulo">
            ${item.marca}
          </div>

          ${mercadosHTML}

        </div>
      `;

    });

    grid.innerHTML += `
      <div class="cardPesquisa">

        <div class="pesquisaHeader">

          <span class="emojiGrande">
            ${produto.emoji}
          </span>

          <div>

            <h2>${produto.nome}</h2>

            <span class="categoriaPesquisa">
              ${produto.categoria}
            </span>

          </div>

        </div>

        <div class="comparacoesGrid">

          ${itensHTML}

        </div>

      </div>
    `;

  });

}

search.addEventListener("input", pesquisar);

clearBtn.addEventListener("click", () => {

  search.value = "";

  mostrarCategorias();

});

mostrarCategorias();

mostrarListaProdutos();