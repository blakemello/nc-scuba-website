const express = require('express')
const Contact = require('../models/contact')
const contactRouter = express.Router()

//Get Contacts
contactRouter.get('/', async (req, res, next) => {
    try {
        const allContacts = await Contact.find()
        return res.status(200).send(allContacts)        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Post New Contact
contactRouter.post('/', async (req, res, next) => {
    try {
        console.log(`Req.body: ${req.body}`)
        const newContact = new Contact(req.body)
        const savedContact = await newContact.save()
        return res.status(200).send(savedContact)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Delete
contactRouter.delete('/:contactId', async (req, res, next) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.contactId)
        return res.status(201).send(`${deletedContact._id} has been deleted`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = contactRouter