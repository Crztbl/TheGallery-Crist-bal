'use strict'

const express = require('express')
const port = (process.env.PORT || 4000)
const path = require('path')
const cors = require('cors')

//Initializations
const app = express()
require('./app/config/connection')

//Middlewares 
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//static files

app.use(express.static(path.join(__dirname, 'app/upload')))

//routes

app.use('/', require('./app/routes/UploadImage'))

//server listening

app.listen(port, (err) => {
    if(err) {
        console.log(`There was an error : ${err}`)
    }else{
        console.log(`server running on port ${port}`)
    }
})