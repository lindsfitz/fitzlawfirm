import React, { useState } from "react";

export default function Signup() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [signupEmail, setSignupEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    return (
        <div id='login'>
            <h1>Create a New Client Account.</h1>
            <h5>Welcome to FitzLawFirm!</h5>
            <div id='login-container'>
                <form id='login-form'>
                    <label for='firstName'>FIRST NAME</label>
                    <input type="text" id='firstName' defaultValue={firstName} onChange={e => setFirstName(e.target.value)} /><br />

                    <label for='lastName'>LAST NAME</label>
                    <input type="text" id='lastName' defaultValue={lastName} onChange={e => setLastName(e.target.value)} /><br />

                    <label for='email'>EMAIL</label>
                    <input type='email' id='email' defaultValue={signupEmail} onChange={e => setSignupEmail(e.target.value)} />
                    <br />

                    <label for='password'>PASSWORD</label>
                    <input type='password' id='password' defaultValue={newPassword} onChange={e => setNewPassword(e.target.value)} />
                    <br />

                    <button type='submit' className="hollow-btn">Create Account</button>
                    <br />
                </form>
                <a href='/login'>Already have an account? Log In.</a>
            </div>

        </div>
    )
}