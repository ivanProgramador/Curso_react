import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

/*
  Transformar o componente principal App em uma classe
  abre novas possibilidades como o uso do state.
  O state é um objeto pre-definido pelo react,ele serve pra 
  controlar o estado da aplicação,dentro dele eu posso criar
  dados para testar os componentes.

*/



class App extends Component {

  /*Dentro do state eu criei um array de comentarios cada comentario esta em forma de objeto */
  state ={
      comentarios:[
        {nome:'João',email:'joao@teste.com',data: new Date(2023, 3, 19),mensagem:'Olá,tudo bem'},
        {nome:'Maria',email:'maria@teste.com',data: new Date(2023, 3, 19),mensagem:'Olá,sim está tudo bem'}
      ]
  }
  
  render(){



     return(
       <div className='App'> 

         <h1>Meu Projeto</h1>

           {
             /*Para pegar os dados desse array eu preciso fazer um loop usando o map
               mas como eu estou dentro de uma classe eu preciso usar o this pra dizer
               oque eu quero dela, no caso eu quero o state.
               
               Depois de pagar o array de comantario de dentro do state eu jogo tudo 
               oque vier dentro da verievel comentario que fica como um parametyro de função
               
               depois eu chamo o meu componente e preecho os dados dele com os dados que vierem
               do loop. gerando um componete para cada objeto encontrado. 

               muito imporatnte não esquecer de adicionar o index que sereve como chave de identificação
               para cada componente gerado na lista  

             */
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

           

         
       </div>
     );
  }
}

export default App;
