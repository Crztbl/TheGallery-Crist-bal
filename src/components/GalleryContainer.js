import React, { useState } from 'react'
import List from './List'
import Upload from './Upload'
import UploadService from '../services/upload.service';


export default class FetchRandomUser extends React.Component {
    state = {
        loading: true, 
        images: []
    };

    async componentDidMount() {
        const respuesta = await UploadService.getImages()
        console.log(respuesta)
        this.setState({images: respuesta, loading: false});
    }
    render() {

        return(
            <div class="container p-4">
                <div class="row">
                        {this.state.images.map(image =>(
                            <div class="card">
                                <img src={image.urlFile} />
                                <p class="card-text">{image.fileName}</p>
                            </div>
                        ))}
                </div>
            </div>
        )
    }
}













/*
export default function GalleryContainer() {

    const[imagenes, setImagenes] = useState([])

    async function obtenerarray() {
        const images = await UploadService.getImages()
        setImagenes(images)
        console.log(images)
        return images
    }

    console.log(imagenes)

    const mostrarimagenes = (imagenes) => {
        const fotillos = imagenes
        console.log(fotillos)
    }


    return (
        <div className="app">
            {mostrarimagenes(imagenes)}


        
        </div>
)
}







/*
const GalleryContainer = () => {

    const creararreglo = arreglo => arreglo.urlFile

    async function obtenerimagenes() {
        const images = await UploadService.getImages()
        console.log(images)
        return images
        //const urlarray = images.map(creararreglo)
        //console.log(urlarray)
        //const imageArray = Array.from(images).map((image)=> URL.createObjectURL(image))
        //    console.log(imageArray)
    }

    const renderPhotos = (source) =>{
        const imagenes = obtenerimagenes()
        return imagenes.forEach(function(image) {
            const URL = image.urlFile
            const caption = image.fileName
            return  <div class="card">
                        <img src={URL} class="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title">Fotillo</h5>
                            <p class="card-text">{caption}</p> 
                        </div> 
                    </div>      
        })
    }

    const imagenes = UploadService.getImages() 
    console.log(imagenes)

    const [ images, setImages ] = useState([])

    return (
        <div className="app" >
            <div className="heading">
                React multiple images preview
            </div>
            <button onClick={obtenerimagenes}></button>
            <div className="result">
                {renderPhotos(obtenerimagenes)}
            </div>  
        
        </div>
    )
}

export default GalleryContainer
*/