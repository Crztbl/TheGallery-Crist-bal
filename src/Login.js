import React, { useState, useEffect } from 'react'
import login from './services/login'
import useUser from './hooks/useUser'
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
        console.log('estás conectado')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({email, password})
    }
    
    console.log('Correo', email)
    console.log('Contraseña', password)
    console.log(JSON.stringify({email, password}))
    
    return (
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <form class="box" onSubmit={handleSubmit}>
                        <h1>Iniciar sesión</h1>
                        <p class="text-muted"> Ingresa aquí tu correo electrónico y tu contraseña</p> <input type="text" name="" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} value={email}/> <input type="password" name="" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/> <input type="submit" name="" value="Iniciar sesión" href="#"/>
                        <div class="col-md-12">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}