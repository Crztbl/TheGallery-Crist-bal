
import React, {useState} from 'react;'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='titular'>Bienvenido a The Gallery</h1>
        <button className='boton_creador'>Acceder Creador</button>
        <button ClassName='boton_invitado'>Acceder Invitado</button>
      </header>
    </div>
  );
}

export default App;
