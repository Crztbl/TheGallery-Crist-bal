import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Header.css';

import useUser from '../hooks/useUser'

export default function Header () {

    const {isLogged, logout} = useUser()

    const handleClick = e => {
        e.preventDefault()
        console.log('hola')
        logout()
    }
    
    return(
        <header class='navbar navbar-dark bg-dark'>
            {
                isLogged
                    ? <Link to='/' onClick={handleClick}>Logout</Link>
                    : <Link to='/login'>
                        Inicia sesión
                        <Link to="/register">
                            Registrate
                        </Link>
                    </Link>                    
                }
        </header>
    
    );
}

/*

<header class='navbar navbar-dark bg-dark'>
            {
                isLogged
                    ? <Link to='/' onClick={handleClick}>Logout</Link>
                    : <Link to='/login'>
                        Inicia sesión
                        <Link to="/register">
                            Registrate
                        </Link>
                    </Link>                    
                }
        </header>

*/