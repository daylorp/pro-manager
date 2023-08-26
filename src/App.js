import './App.css'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {

const nome = "Maria";
  return (
    <div className="App">

      <Pessoa nome="Dayana" idade="25" profissao="Programadora" foto="https://via.placeholder.com/150"/>
    
      <Frase />

      <List />
      
    </div>
  );
}

export default App;
