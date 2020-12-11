import React, { useState, useEffect } from 'react'
import axios from 'axios';
import register from './services/register';

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
    }

    console.log('email', email)
    console.log('contraseña', password)
    console.log('Usuario', username)

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Nombre de usuario'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <input
                placeholder='Correo electrónico'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>Crear cuenta</button>
        </form>
    )
}