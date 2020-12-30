import React, { useState } from 'react'
import UploadService from '../services/upload.service'
import UploadContainer from './UploadContainer'


const ListImage = () => {

    async function obtenerimagenes() {
        const images = await UploadService.getImages()
        console.log(images)
        return images
    }

    return(
        <div className="col-12">
            <div className="row">
                <div className="col-4">
                    <div>
                        <button className='btn btn-outline-primary btn-lg btn-block' onClick={obtenerimagenes}> Mostar fotos</button>
                        <img className="img-fluid img-thumbnail image" alt="images" />
                    </div>
                    <div className='fotos'>
                    </div>
                    <span> </span>
                </div>
            </div>
        </div>
    )
}

export default ListImage