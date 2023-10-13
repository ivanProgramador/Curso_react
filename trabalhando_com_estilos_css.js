


/*Colocando os estylo como um objeto direto no componente */

const Comentario = props => {
  
    const estilo ={
       color:'red',
       padding:'10px',
       fontSize:'30px' /*normalmente esse atributo se escere com ifem , mas não pode usar nesse caso so 
                       o camel case */
    }
  
    return <div className="Comentario" >
  
          <div style={estilo}>{props.nome}</div>
          <p>{props.email}</p>
          <div>{props.children}</div>
          <p>{props.data.toString()}</p>
          <button onClick={props.onRemove}>&times;</button>        
    
      </div>
  };
  
  export default Comentario;
