import Context from './UserContext'
import {useCallback, useContext} from 'react'
import loginService from './login'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function useUser () {
    
    const {Jwt, setJWT} = useContext(Context)

    const login = useCallback(({email, password}) => {
        loginService({email, password})
            .then(Jwt => {
                console.log(Jwt)
                setJWT(Jwt)
            })
            .catch(err => {
               console.error(err) 
            })
    },      [setJWT])

    const logout = useCallback(() => {
        setJWT(null);
        <Link to='/'></Link>
    }, [setJWT])
    
    return {
        isLogged: Boolean(Jwt),
        login,
        logout
    }
}