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

           

         
       </div>
     );
  }
}

export default App;
