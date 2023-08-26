import './App.css'
import Pessoa from './components/Pessoa'
import Form from './components/Form'
import Eventos from './components/Eventos'

function App() {

  return (
    <div className="App">

      <Pessoa nome="Dayana" idade="25" profissao="Programadora" foto="https://via.placeholder.com/150"/>
    
      <Eventos numero="1"/>
      
      <Form />

    </div>
  );
}

export default App;
