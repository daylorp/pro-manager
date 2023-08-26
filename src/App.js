import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

const nome = "Maria";
  return (
    <div className="App">
      <SayMyName nome={nome}/>
      <Pessoa nome="Dayana" idade="25" profissao="Programadora" foto="https://via.placeholder.com/150"/>
    
      <Frase />

    </div>
  );
}

export default App;
