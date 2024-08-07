import React, { useState, useContext } from "react";

export default function ContactUs(){

    const [message, setMessage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comment: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setMessage(prevMessage => ({
            ...prevMessage,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage({
            firstName: '',
            lastName: '',
            email: '',
            comment: '', 
        })
    }




    return(
        <div className='contact-page'>
            <h2>Contact US</h2>
            <br></br>
            <form>
                <p style={{color: 'red'}}><b style={{color: 'black'}}>Name</b> *</p>
                <input 
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    value={message.firstName}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    value={message.lastName}
                    onChange={handleChange}
                />
                <br></br>
                <p style={{color: 'red'}}><b style={{color: 'black'}}>Email</b> *</p>
                <input 
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={message.email}
                    onChange={handleChange}
                />
                <br></br>
                <p><b>Comment or Message</b></p>
                <textarea 
                    type='text'
                    name='comment'
                    value={message.comment}
                    onChange={handleChange}
                    rows='5'
                    cols='100'
                />
                <br></br>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}