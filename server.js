// Dependencies
const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require("express-jwt")
const path = require('path')

// for using dotenv file
process.env.SECRET

// Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'client', 'dist')))

// Connect to Database
async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log('Connected to DataBase')
    } catch (err) {
        console.log(err)
    }
}

connectToDb()

//Routes
app.get("/", (req, res) => {
    res.send('Test Contact pls ignore')
})
app.use('/contact-us', require('./routes/contactRouter.js'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html')))

app.listen(process.env.PORT, () => {
    console.log(`The server is running on Port ${process.env.PORT}, Hell yeah`)
})