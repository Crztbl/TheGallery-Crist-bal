import React, {useState} from 'react';

const Context = React.createContext({})

export function UserContextProvider ({children}) {

    const[Jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('Jwt')
    )

    return <Context.Provider value={{Jwt, setJWT}}>
        {children}
    </Context.Provider>
}

export default Context;