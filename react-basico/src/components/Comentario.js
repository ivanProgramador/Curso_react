import React from "react";
import './Comentario.css';
import imagemUsuario from './user.png';



const Comentario = (props) => (

    <div className="Comentario" >
        <img class="avatar" src={imagemUsuario} alt="props.nome"></img>

        <div class="conteudo">
        <div class="nome" >{props.nome}</div>
        
            <p   class="email">{props.email}</p>
            <div class="mensagem" >{props.children}</div>
            <p   class="data" >{props.data.toString()}</p>

            <button onClick={props.onRemove}>&times;</button>  
        </div>

            
    </div>

);

export default Comentario;