const mongoose = require('mongoose')
const Schema = mongoose.Schema


const contactSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is Required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is Required']
    },
    email: {
        type: String,
        required: [true, 'Email Address required'],
        match: [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, 'Invalid Email Address']
    },
    comment: {
        type: String
    }
})


module.exports = mongoose.model('Contact', contactSchema)