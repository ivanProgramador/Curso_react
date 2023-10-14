/*
 Para estilizar data eu usei a biblioteca date-fns 
 abaixo mostra como ela é importada e como ela é usada em aum componente
*/

import React from "react";
import { formatRelative } from "date-fns";
import './Comentario.css';
import imagemUsuario from './user.png';



const Comentario = (props) => (

    <div className="Comentario" >
        <img class="avatar" src={imagemUsuario} alt="props.nome"></img>

        <div class="conteudo">
        <div class="nome" >{props.nome}</div>
        
            <p   class="email">{props.email}</p>
            <div class="mensagem" >{props.children}</div>
            <p   class="data" >{formatRelative(props.data, new Date())}</p>

            <button onClick={props.onRemove}>&times;</button>  
        </div>

            
    </div>

);

export default Comentario;