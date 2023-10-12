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


   /*
     quando o formulario chamar essa função usando o onSubmit 
     o post vai dar errado porque setrata de um sistema js 
     então o poreventDefalt() vai evitar que po post seja executado 
     e depois da linha dele eu posso manipulart tudo oque vier 
     do formulario.

     oobjeto novo comentario vai funcionar como se fosse uma classe 
     que vai ser ligada ao formulario 


   */
   adicionarComentario = evento =>{

    evento.preventDefault();

    const novoComentario = {...this.state.novoComentario,data: new Date()}
 
    //adicionando o novo objeto criado e limpando os campos
    this.setState({
      comentarios:[ ...this.state.comentarios, novoComentario],
      novoComentario:{nome:'',email:'',mensagem:''}
    }); 
   };

   /*
    a função digitação e acionada toda vez que o valor de cada campo muda 
    ou seja toda vez que alguma coisa é digitada dentro do campo ela captura
    o atributo value, ela consegue fazer isso por causa da função onchage 
    que é nativa do react que vai acionar a função diugitação toda vez que 
    o valor mudar
    No caso essa função onchange e essecial para o funcionamento do app 
    
    
  */


   digitacao = evento =>{

      // toda vez que ela for acionada o nome do campo que acionou eo valor dele vão ser capturados 
      // as variavel name e value serão preenchidas com oque vier do target

      const{name,value}=evento.target;

      // aqui eu chamo o sset state pra mexer no valor do state 
      //pego tudo oque tiver dentro do state dentro do obejto novo comentario 
      // e adicioinao o campo que vier dentro do name e coloco o value 
      // como todos os campos acionan a mesma função eu so preciso fazer isso 
      //pra pegar tudo qoue tiver dentro deles separadamente 

      this.setState({novoComentario:{...this.state.novoComentario,[name]:value }})
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
