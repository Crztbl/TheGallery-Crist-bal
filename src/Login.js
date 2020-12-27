import React, { useState, useEffect } from 'react'
import login from './components/login'
import useUser from './components/useUser'
import {useLocation} from "wouter"
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";


import './Login.css';


export default function Login () {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const {login, isLogged} = useUser()

    useEffect(() => {
        if (isLogged) 
        <Link to="/"></Link>
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({email, password})
    }
    /*
    console.log('Correo', email)
    console.log('Contraseña', password)
    console.log(JSON.stringify({email, password}))
    */
    return (
        <div className='Tg-login-container'>
            <h1> Iniciar sesión</h1>
            <form className='Tg-login' onSubmit={handleSubmit}>
                <h6>
                <input
                    placeholder='Correo electrónico'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </h6>
                <h6>
                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </h6>
                <button className ='boton-login'>Login</button>
            </form>
        </div>
    )
}