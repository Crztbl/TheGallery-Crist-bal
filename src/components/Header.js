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
        <header className='tg-header'>
            {
                isLogged
                    ? <Link to='/' onClick={handleClick}>
                        Logout
                        <Link to='/upload'>
                            Upload
                        </Link>
                    </Link>
                    : <Link to='/login'>
                        Inicia sesión
                    </Link>                    
                }
        </header>


    
    );
}