
export default function login ({ email, password}) {
    //console.log(email)
    //console.log(password)
    return fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        if (!res.ok) alert('Response is not ok')
        return res.json();
    }).then(res => {
        const { Jwt } = res
        console.log(Jwt)
        alert('Inicio de sesión exitoso')
        return Jwt        
    })    
};