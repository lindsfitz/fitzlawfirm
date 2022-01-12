import React, { useState } from "react";

export default function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
   
    return (
        <div id='contact-us'>
            <h6>CONTACT US</h6>
            <h1>Talk with an Advisor</h1>
            <p>Please fill out the following form to request your consultation.</p>
            <div id='contact-box'>
                <form id='contact-form'>
                    <div id='name-container' style={{display:'flex', width:'auto'}}>
                        <div style={{display:'flex',flexDirection:'column', flex:'1'}}>
                            <label for='firstName'>FIRST NAME</label>
                            <input type="text" id='firstName' defaultValue={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div style={{display:'flex',flexDirection:'column', flex:'1'}}>
                            <label for='lastName'>LAST NAME</label>
                            <input type="text" id='lastName' defaultValue={lastName} onChange={e => setLastName(e.target.value)} /><br />
                        </div>

                    </div>

                    <label for='conEmail'>EMAIL</label>
                    <input type="email" id='conEmail' defaultValue={email} onChange={e => setEmail(e.target.value)} /><br />

                    <label for='phone'>PHONE</label>
                    <input type="tel" id='phone' defaultValue={phone} onChange={e => setPhone(e.target.value)} /><br />

                    <label for='message'>MESSAGE</label>
                    <textarea type="text" id='message' rows='10' defaultValue={message}
                        onChange={e => setMessage(e.target.value)}></textarea>
                </form>
                <br />
                <button type="submit" className="contact-btn" id="send-message-btn">SEND MESSAGE</button>

            </div>

        </div>
    )
}