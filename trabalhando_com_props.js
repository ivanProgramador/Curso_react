import React from "react";
import './Comentario.css';

/* 
  props é um objeto que vem do componente por exemplo nesse componemte eu delarei as propridades
  nome,email,data e ainda coloquei uma mensagem para ser exibida no corpo do componente. 
  
  <Comentario nome="Maria" email="maria@teste.com" data={new Date(2023, 9, 8)} > 
    Olá, tudo bem ?
  Comentario/>

  Embora elas estejam ai preenchidas ela só vão aparecer quaneu declarar um props como paramentro 
  lá na função componente.No exemplo abaixo o porps que vem de lá esta declarado como um componente
  quando isso acontece eu posso distyribuir os dados dele dentro das tags exitenetes no componente
  que eu criei. POr exemplo o atributo nome eu estou exbinbdo em uma div mas ele poderia ser qualquer 
  outra tag, para os dados que preciand ficar literalmente no corpo do componente são cahamdos de filho
  por isso ao inves de usar props.mensagem eu so precisei colocar pors.childrem que ele ja sabe que se 
  trata de uma mensagem,compomnet, elemento que precisa ser mostrado no corpo do componente.    


*/


const Comentario = (props) => (
    <div className="Comentario" >
        <div>{props.nome}</div>
        <p>{props.email}</p>
        <div>{props.children}</div>
        <p>{props.data.toString()}</p>
        
    </div>
);

export default Comentario;
