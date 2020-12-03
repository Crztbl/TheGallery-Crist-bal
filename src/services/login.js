const ENDPOINT = 'http://localhost:3001/usuarios';
import axios from 'axios';

function login({usuario, contraseña}) {
    await axios.get('http://localhost:3001/usuarios', {params: {usuario: usuario, contraseña: contraseña}})
    .then(response=>{
        //console.log(response.data);
    })
    .catch(error=>{
        console.log(error);
    })
}

export default login;