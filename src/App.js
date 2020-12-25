import Login from'./Login';
import Register from './Register'
import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
