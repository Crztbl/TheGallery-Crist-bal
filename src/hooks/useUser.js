import Context from '../context/UserContext'
import {useCallback, useContext} from 'react'
import loginService from '../services/login'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function useUser () {
    
    const {Jwt, setJWT} = useContext(Context)

    const login = useCallback(({email, password}) => {
        loginService({email, password})
            .then(Jwt => {
                window.sessionStorage.setItem('Jwt', Jwt)
                const hola = sessionStorage.getItem('Jwt')
                console.log(hola)
                console.log(Jwt)
                console.log('hoasdasdasd')
                setJWT(Jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('Jwt')
                console.error(err) 
            })
    },      [setJWT])

    const logout = useCallback(() => {
        setJWT(null);
        //console.log(Jwt)
    }, [setJWT])
    
    return {
        isLogged: Boolean(Jwt),
        login,
        logout,

    }
}