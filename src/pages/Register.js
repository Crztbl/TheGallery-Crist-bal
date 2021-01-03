import React, { useState, useEffect } from 'react'
import register from '../services/register';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

export default function Register () {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        const respuesta = register({username, email, password})
        console.log(respuesta)
        alert('Usuario creado exitosamente')
    }

    console.log('email', email)
    console.log('contraseña', password)
    console.log('Usuario', username)

    return (
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <form class="box" onSubmit={handleSubmit}>
                        <h1>Crea tu cuenta</h1>
                        <p class="text-muted"> Ingrese aquí sus datos</p> <input type='text' name="" placeholder='Nombre de usuario' onChange={(e) => setUsername(e.target.value)} value={username}/> <input type="text" name="" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} value={email}/> <input type="password" name="" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/> <input type="submit" name="" value="Crear cuenta" href="#" />
                        <div class="col-md-12">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}