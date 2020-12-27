
export default function login ({ email, password}) {
    //console.log(email)
    //console.log(password)
    return fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            //"Authorization": 'Basic Y3Jpc3RvYmFsOmFsdmFyZXo=',
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        if (!res.ok) alert('Response is not ok')
        return res.json();
    }).then(res => {
        const { Jwt } = res
        return Jwt        
    })    
};