import Login from'./Login';
import Register from './Register'
import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <router>
    <div className="App">
      <header className="App-header">
        <h1 className='titular'>Bienvenido a The Gallery</h1>
        <button className='boton_creador'>Acceder Creador</button>
        <button className='boton_registrarse'>Registrate aquí</button>
        <Register/>
      </header>
    </div>
    </router>
  );
}

export default App;
