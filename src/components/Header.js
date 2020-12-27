import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Header.css';

import useUser from './useUser'

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
                    ? <Link href='#' onClick={handleClick}>
                        Logout
                    </Link>
                    : <Link to='/login'>
                        Registrate
                    </Link>
                }
        </header>


    
    );
}