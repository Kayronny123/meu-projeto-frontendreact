// importação das imagens
import Imagem1 from "../Imagens/arma-port.png";
import Imagem2 from "../Imagens/bateria-microverso.jpeg";
import Imagem3 from "../Imagens/caixa-meeseks.jfif";
import Imagem4 from "../Imagens/espaconave-rick.jpg";
import Imagem5 from "../Imagens/robo-passa-manteiga.png";
// estilização do componente
import "../CardProdutos/cardprodutos.sass";

// array de objetos com todos os produtos da loja
const todosProdutos = [
  {
    id: "001",
    nome: " Arma de Portais",
    preco: 6000,
    imagem: Imagem1,
    descricao:
      " A arma de portais, dispara portais em formate redemoinhos verdes. Permitindo que o usuário viaje até outra dimensão ao atravessa-lo."
  },
  {
    id: "002",
    nome: " Bateria de Microverso",
    preco: 4000,
    imagem: Imagem2,
    descricao:
      " É Um mundo que gera energia a partir de dispositivos de movimento mecânico que é realizado pelos micro humanos que habitam nela."
  },
  {
    id: "003",
    nome: "Caixa de Meeseks",
    preco: 2000,
    imagem: Imagem3,
    descricao:
      " A Caixa Meeseek é um gadget que cria um Sr. Meeseeks com o propósito de completar um objetivo específico que você pedir, após cumprir seu objetivo ele desaparece."
  },
  {
    id: "004",
    nome: "Espaçonave",
    preco: 9000,
    imagem: Imagem4,
    descricao:
      " Uma nave  é movida por um elemento chamado ''matéria escura concentrada'', que é capaz de vencer a barreira espaço-tempo sempre que preciso."
  },
  {
    id: "005",
    nome: " Robozinho passa manteiga",
    preco: 1000,
    imagem: Imagem5,
    descricao:
      " Um robô que tem um único objetivo de alcançar a manteiga na mesa do café da manhã."
  }
];

// função de acesso aos produtos no local storage
const acessarProdutos = () => {
  localStorage.setItem("produto", JSON.stringify(todosProdutos));
};
// componente de renderização de produtos
export default function NovosProdutos(props) {
  // filtra os produtos pelo nome e id passados como propriedades
  const produtosFiltrados = todosProdutos.filter(
    ({ nome, id }) =>
      nome.toUpperCase().includes(nome.toUpperCase()) &&
      id.includes(id)
  );

  return (
    <section>
      {/* utiliza a função map para iterar sobre os produtos filtrados */}
      {produtosFiltrados.map(({ id, nome, preco, imagem, descricao }) => (
        <div key={id} className="card-nome">
          {nome}
          <div className="card-imagem">
            <img className="card-imagem" src={imagem} alt="card-imagem" />
            <button onClick={acessarProdutos} className="price-product">
              Adicionar ao carrinho
            </button>
            <p key={id} className="card-descricao">{descricao}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

// // importação dos cards de imagem e estilização do sass
// import Imagem1 from "../Imagens/arma-port.png";
// import Imagem2 from "../Imagens/bateria-micro2.jpg";
// import Imagem3 from "../Imagens/caixa-meeseks1.jfif";
// import Imagem4 from "../Imagens/espaconave-rick.jpg";
// import Imagem5 from "../Imagens/robo-passa-manteiga.png";
// import "../CardProdutos/cardproduto.sass";

// // componente filho de redenrização de produtos
// export default function NovosProdutos(props) {
//   // array de objetos com todos meus produtos da loja
//   const TodosProdutos = [
//     {
//       id: "001",
//       produto: " Arma de Portais",
//       preco: 6000,
//       imagem: Imagem1,
//       descricao:
//         " A arma de portais, dispara portais em formate redemoinhos verdes. Permitindo que o usuário viaje até outra dimensão ao atravessa-lo."
//     },
//     {
//       id: "002",
//       produto: " Bateria de Microverso",
//       preco: 4000,
//       imagem: Imagem2,
//       descricao:
//         " É Um mundo que gera energia a partir de dispositivos de movimento mecânico que é realizado pelos micro humanos que habitam nela."
//     },
//     {
//       id: "003",
//       produto: "Caixa de Meeseks",
//       preco: 2000,
//       imagem: Imagem3,
//       descricao:
//         " A Caixa Meeseek é um gadget que cria um Sr. Meeseeks com o propósito de completar um objetivo específico que você pedir, após cumprir seu objetivo ele desaparece."
//     },
//     {
//       id: "004",
//       produto: "Espaçonave",
//       preco: 9000,
//       imagem: Imagem4,
//       descricao:
//         " Uma nave  é movida por um elemento chamado ''matéria escura concentrada'', que é capaz de vencer a barreira espaço-tempo sempre que preciso."
//     },
//     {
//       id: "005",
//       produto: " Robozinho passa manteiga",
//       preco: 1000,
//       imagem: Imagem5,
//       descricao:
//         " Um robô que tem um único objetivo de alcançar a manteiga na mesa do café da manhã."
//     }
//   ];
//   // testando função de localstorage
//   const acessarProdutos = () => {
//     localStorage.setItem("produto", JSON.stringify(TodosProdutos));
//   };

//   return (
//     <div>
//       {/* criando função de map para redenrizar todos os objetos e filter para redenrizar apenas os objetos de acordo com seu respectivo id, nome ou produto */}
//       {TodosProdutos.filter((cartoes) => {
//         return cartoes.produto
//           .toUpperCase()
//           .includes(props.produto.toUpperCase());
//       })
//         .filter((cartoes) => {
//           return cartoes.id.includes(props.id);
//         })
//         .map((cartoes) => {
//           return (
//             <p className="card-nome">
//               {cartoes.produto}
//               <div className="card-imagem">
//                 <img
//                   className="card-imagem"
//                   src={cartoes.imagem}
//                   alt="card-imagem"
//                 />
//                 <button onClick={acessarProdutos} className="price-product">
//                   Preço: {cartoes.preco}
//                 </button>
//               </div>
//               <p className="description-product">{cartoes.descricao}</p>
//               <p>Id do produto: {cartoes.id}</p>
//             </p>
//           );
//         })}
//     </div>
//   );
// }
