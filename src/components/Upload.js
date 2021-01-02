import React, { useState } from 'react'
import UploadService from '../services/upload.service'
import './Upload.css'

const Upload = (setImages, images) => {

    const [ name, setName ] = useState("")
    const [ file, setFile ] = useState()
    const [ pathImage, setPathImage ] = useState("http://localhost:4000/upload.png")

    const sendImage = (e) => {
        e.preventDefault()
        UploadService.sendImage(name, file).then((result) => {
            console.log("el resultado : ", result.data.newImage)
            // setName("")
            // setFile()
            // setPathImage("http://localhost:4000/upload.png")
            
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
    )
}

export default Upload