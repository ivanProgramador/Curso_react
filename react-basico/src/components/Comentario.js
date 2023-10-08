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


const Comentario = () => (
    <div className="Comentario" >
        <div>João</div>
        <div>Olá, tudo bem ?</div>
    </div>
);

export default Comentario;
