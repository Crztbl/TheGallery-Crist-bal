import axios from 'axios'

export default function getdatos (Jwt) {
    return axios.get('http://localhost:3001/me', {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": Jwt
        }
    }).then(res => {
        return res
    }).then(res => {
        return res.data
    })
}