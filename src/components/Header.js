import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Header.css';

import useUser from '../hooks/useUser'

export default function Header () {

    const {isLogged, logout} = useUser()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }
    
    return(
        <header class='navbar navbar-dark bg-dark'>
            <Link to ='/'>Home</Link>
            {
                isLogged
                    ? <Link to='/upload'>
                        Subir imagen
                        <Link to='/' onClick={handleClick}>
                            Cerrar sesión
                        </Link>
                        </Link >
                    : <Link to='/login'>
                        Inicia sesión
                        <Link to='/register'>
                            Regístrate
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