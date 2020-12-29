import Login from'./Login';
import Register from './Register'
import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Header from './components/Header'
import Upload from './Upload';
import Home from './Home'

import {UserContextProvider} from './context/UserContext';

import './App.css';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route path='/login' exact>
              <Login />
            </Route>
            <Route path='/register' exact>
              <Register />
            </Route>
            <Route path='/upload'>
              <Upload />
            </Route>
            <Route path='/'>
              <Home />
            </Route>            
          </Switch>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
