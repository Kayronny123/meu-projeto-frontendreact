// importação do react e estilização pelo sass
import React from "react";
import "./header.sass";
// componente filho da barra de busca
export default function Header(props) {
  // onChange de id e nome recebendo os eventos no input respectivamente
  const onChangeId = (e) => {
    props.setId(e.target.value);
  };
  const onChangeProduto = (e) => {
    props.setNome(e.target.value);
  };

  return (
    <div className="search-container">
      {/* input de nome recebendo o onchange */}
      <input
        className="search-name"
        type="text"
        placeholder="Buscar por nome"
        onChange={(e) => onChangeProduto(e)}
      />
      {/* input de id recebendo o onchange */}
      <input
        className="search-id"
        type="number"
        placeholder="Buscar por Id"
        onChange={(e) => onChangeId(e)}
      />
      {/* <input className="search-min" type="text" placeholder="Preço Mínimo" />
      <input className="search-max" type="text" placeholder="Preço Máximo" /> */}
    </div>
  );
}
