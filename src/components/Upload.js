import React, { useState } from 'react'
import UploadService from '../services/upload.service'
import './Upload.css'
import getdatos from '../services/getdatos'
import {UserContextProvider} from '../context/UserContext'

const Upload = (setImages, images) => {

    const [ name, setName ] = useState("")
    const [ file, setFile ] = useState()
    const [ pathImage, setPathImage ] = useState("http://localhost:4000/upload.png")
    const [Jwt, setJWT] = useState("")


    function getData() {

        let Jwt = sessionStorage.getItem('Jwt');
        console.log(Jwt)
        return Jwt
    }


    const sendImage = async (e) => {
        e.preventDefault()
        setJWT(getData())
        console.log(Jwt)
        const info = await getdatos(Jwt)
        const contacto = info.email
        const usuario = info.username
        const infosubida = 
        ' Subido por '+ usuario + 
        '   --Contacto: '+ contacto
        console.log(infosubida)
        UploadService.sendImage(name + infosubida, file).then((result) => {
            console.log("el resultado : ", result.data.newImage)            
        })
    }



    const onFileChange = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            if(file.type.includes("image")) {
                const reader = new FileReader()
                reader.readAsDataURL(file)

                reader.onload = function load() {
                    setPathImage(reader.result)
                }

                setFile(file)
            }else {
                console.log("there was an error")
            }
        }
    }

    return(
        <UserContextProvider>
        <form>
            <div className="input-file">
            <input type="file"
                        placeholder="File"
                        onChange={onFileChange} />
                
                <img className="img-thumbnail" src={pathImage} alt="images" />

            </div>

            <input 
                type="text"
                placeholder="Agrega un comentario" 
                className="pie-foto" 
                onChange={(e) => setName(e.target.value)}
                />

            <br />

            <button type="submit" className="boton" onClick={sendImage}>
                Subir imagen
            </button>
        </form>
        </UserContextProvider>
    )
}

export default Upload