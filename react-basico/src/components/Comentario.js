import React from "react";
import './Comentario.css';

/*
  Este é um exemplo de componete de função
  sendo estilizado apartor de um codigo css externo
  Vale ressaltar que o arquivo.

  App.css -> controla a estilização geral de todos os compomentes dentro da tag app
  enquanto o arquivo
  
  Comentario.css ->  controla especificamente este componente 
*/


const Comentario = (props) => (
    <div className="Comentario" >
        <div>{props.nome}</div>
        <p>{props.email}</p>
        <div>{props.children}</div>
        <p>{props.data.toString()}</p>
        <button onClick={props.onRemove}>&times;</button>        
    </div>
);

export default Comentario;
