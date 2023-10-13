/*
  No caso desse projeto  react basico o componete de classe principal App
  esta com todas as funções nele, porem um componete que le renderiza que 
  eo comentario precisa acessar a função de remover comentario para sair 
  da tela quando o usuario clicar no botão remover 
  
  primeiro a função é criada dentro do componente App 
  depois temos que criar um elemento dentro do componente
  comentario que vai chamar essa função eu criei um button
  com uma função onclick que traves do porps aciona um atributo do props
  que o onRemove, esse onRemove eu coloquei no comenetario na hora de renderizar
  essa função onRemove ela chama funcção removerComentario e faz um bind
  que chama o proprio elemento comentario e manda pra ele de volta os dados dele
  levando o onRemove junto assim ele sabe oque fazer quando o onclick for acionado
  pegar a função que ven no onremove e executar ela no porprio elemento que chamou 

  App.js
  --------------------------------------------------------------------------------
  <Comentario
                 key={index}
                 nome={comentario.nome}
                 email={comentario.email}
                 data={comentario.data}
                 onRemove = {this.removerComentario.bind(this,comentario)}
                >           
                 {comentario.mensagem}
   </Comentario>



Comentario.js
-------------------------------------------------------------------------------------
  
  const Comentario = (props) => (
    <div className="Comentario" >
        <div>{props.nome}</div>
        <p>{props.email}</p>
        <div>{props.children}</div>
        <p>{props.data.toString()}</p>
        <button onClick={props.onRemove}>&times;</button>        
    </div>
);






*/