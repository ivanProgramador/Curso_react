import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';




class App extends Component {

 
  state ={
      comentarios:[
        {nome:'João',email:'joao@teste.com',data: new Date(2023, 3, 19),mensagem:'Olá,tudo bem'},
        {nome:'Maria',email:'maria@teste.com',data: new Date(2023, 3, 19),mensagem:'Olá,sim está tudo bem'}
      ],
      novoComentario:{  
          nome:'',
          email:'',
          mensagem:''
      }
   }


  
   adicionarComentario = evento =>{

    evento.preventDefault();

    const novoComentario = {...this.state.novoComentario,data: new Date()}
 
    
    this.setState({
      comentarios:[ ...this.state.comentarios, novoComentario],
      novoComentario:{nome:'',email:'',mensagem:''}
    }); 
   };

   


   digitacao = evento =>{

    

      const{name,value}=evento.target;


      this.setState({novoComentario:{...this.state.novoComentario,[name]:value }})
   }

   removerComentario = comentario => {
     
    // lista recebe o array de comentarios 
     let lista = this.state.comentarios;
   
    // depois ela filtra todos os comatarios que sejam diferentes do comentario
    //que ela recebeu 

    lista = lista.filter(c => c !== comentario);
    
    //agora eu pego a lista que agora não tem mais o comentario recebido 
    //e atualizo o state  

    this.setState({comentarios:lista});

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
                 onRemove = {this.removerComentario.bind(this,comentario)}
                >           
                 {comentario.mensagem}
               </Comentario>



             ))
           }


                    
           <form method='post' onSubmit={this.adicionarComentario}>
             <h2>Adicionar comentario</h2>

             <div>
                <input 
                  type='text'
                  name='nome'
                  placeholder='Digite seu nome'
                  value={this.state.novoComentario.nome}
                  onChange={this.digitacao}
               />
             </div>
             <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Digite seu e-mail'
                  value={this.state.novoComentario.email}
                  onChange={this.digitacao}  
                />
             </div>

             <div>
              <textarea 
                 name='mensagem'
                 rows="4"
                 value={this.state.novoComentario.mensagem}
                 onChange={this.digitacao}   
              ></textarea>
             </div>
              
             <button type='submit'>Adicionar comentario</button>
           </form>

         
       </div>




     );
  }
}

export default App;
