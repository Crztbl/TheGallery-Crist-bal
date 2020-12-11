import React, { useState, useEffect } from 'react'
import login from './services/login'


export default function Login () {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        const respuesta = login({email, password})
        console.log(respuesta)
    }

    console.log('Correo', email)
    console.log('Contraseña', password)
    console.log(JSON.stringify({email, password}))

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Correo electrónico'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>Login</button>
        </form>
    )
}