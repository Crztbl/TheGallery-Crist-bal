'use strict'

const router = require('express').Router()
const image = require('../models/Image')
const storage = require('../config/multer')
const multer = require('multer')

const uploader = multer({storage})

router.post('/upload', uploader.single('file'), async(req, res) => {
    const { file, body } = req

    if(file && body) {
        const newImage = new Image({
            filename : body.name,
            urlfile : `http://localhost:500/${file.filename}`
        })

        await newImage.save()
        res.json({
            newImage: newImage
        })
    }
})

router.get('/download', async(req, res) => {
    const images = await Image.find()
    res.json(images)
})

module.exports = router