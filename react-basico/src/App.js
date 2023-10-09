import './App.css';
import Comentario from './components/Comentario';



function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <hr/>
      <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2023, 9, 10)}>
        Olá, tudo bem  
      </Comentario>   

        <Comentario nome="José" email="josé@gmail.com" data={new Date(2023, 9, 10)}>
        Tudo bem ,sim   
      </Comentario>     
    </div>
  );
}

export default App;
