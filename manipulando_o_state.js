import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';




class App extends Component {

 
  state ={
      comentarios:[
        {nome:'João',email:'joao@teste.com',data: new Date(2023, 3, 19),mensagem:'Olá,tudo bem'},
        {nome:'Maria',email:'maria@teste.com',data: new Date(2023, 3, 19),mensagem:'Olá,sim está tudo bem'}
      ]
  }

   adicionarComentario =()=>{

    //criando um objeto para adicionar
    const novoComentario = {
      nome:'Camila',
      email:'camila@teste.com',
      data: new Date(2023, 4, 19),
      mensagem:'Olá,pessoal !!!!'
    }
    
    /*
      Embora o state seja um objeto e os comentarios sejam um array 
      ele não pode ser manipoulado por funções simples, para manipular um state 
      é necessario usar uma funcção nativa do react chamda setState.
      
      1 - chamar a função setStaet da classe 
      2 - colocar dentro dela um objeto que vai chamar o array de comentarios 
      3 - para pegar todos os indices usar o operador ...
      4 - e depois e so colocar uma virgula eo nomne do novo objeto
      
    */
    this.setState({comentarios:[ ...this.state.comentarios, novoComentario]});
     
   };
  
  render(){



     return(
       <div className='App'> 

         <h1>Meu Projeto</h1>

           {
             
             this.state.comentarios.map((comentario,index) =>(


               <Comentario
                 key={index}
                 nome={comentario.nome}
                 email={comentario.email}
                 data={comentario.data}
                >           
                 {comentario.mensagem}
               </Comentario>



             ))
           }

           <button onClick={this.adicionarComentario}>adicionar Comentario</button>

         
       </div>
     );
  }
}

export default App;
