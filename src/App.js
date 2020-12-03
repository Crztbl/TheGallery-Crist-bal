import Login from'./Login';
import Register from './Register'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='titular'>Bienvenido a The Gallery</h1>
        <Login/>
        <button className='boton_creador'>Acceder Creador</button>
        <button ClassName='boton_invitado'>Acceder Invitado</button>
      </header>
    </div>
  );
}

export default App;
