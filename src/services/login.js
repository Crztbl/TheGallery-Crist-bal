
export default function login ({ email, password}) {
    console.log(email)
    console.log(password)
    return fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            "Authorization": 'Basic Y3Jpc3RvYmFsOmFsdmFyZXo='
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
        console.log('hoasdasd')
    }).then(res => {
        const { jwt } = res
        return jwt
        
    })    
};