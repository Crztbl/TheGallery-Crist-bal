export default function register ({ username, email, password}) {

    console.log(JSON.stringify({username, email, password}))
    
    return fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, password})
    }).then(res => {
        return res.json()
    })
    .catch(err => {
        console.log('Error, datos del usuario no han podido ser cargados correctamente');
    });
    
};