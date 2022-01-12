import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

export default function Login() {

    // let navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div id='login'>
            <h1>Welcome Back!</h1>
            <h5>Login to see your customer dashboard.</h5>
            <div id='login-container'>
                <form id='login-form'>
                    <label for='email'>EMAIL</label>
                    <input type='email' id='email' defaultValue={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
                    <br />

                    <label for='password'>PASSWORD</label>
                    <input type='password' id='password' defaultValue={password} onChange={e => setPassword(e.target.value)} />
                    <br />

                    <button type='submit' className="hollow-btn">Login</button>
                    <br />
                </form>
                <a href='/signup'>New Client? Create an account.</a>
            </div>

        </div>
    )
}