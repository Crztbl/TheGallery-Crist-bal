import React from 'react'
import UploadService from '../services/upload.service'


const ListImage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const imagenes = UploadService.getImages()
        console.log(imagenes)
    }


    return(
        <div className="col-12">
            <div className="row">
                <div className="col-4">
                    <div>
                        <button className='botonxd' onClick={handleSubmit}></button>
                        <img className="img-fluid img-thumbnail image" alt="images" />
                    </div>
                    <span> Imagen 1 </span>
                </div>
            </div>
        </div>
    )
}

export default ListImage