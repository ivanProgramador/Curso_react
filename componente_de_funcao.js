import React from "react";
import './Comentario.css';

/*
  Este é um exemplo de componete de função
  sendo estilizado apartor de um codigo css externo
  Vale ressaltar que o arquivo.

  App.css -> controla a estilização geral de todos os compomentes dentro da tag app
  enquanto o arquivo
  
  Comentario.css ->  controla especificamente este componente
  
  Executando codigo js dentro de um componente:
  para fazer isso eu poreciso colocar o codigo dentre chaves 
  como eu estou fazendo abaixo pra executar a soma
  isso serve pra fazer um ftche de dados de sub itens ou 
  para fazer alguma manipulação necessaria antes de exibir os itens
*/


const Comentario = () => (
    <div className="Comentario" >
        <div>João</div>
        <div>Olá, tudo bem ?{2+3}</div>
    </div>
);

export default Comentario;
