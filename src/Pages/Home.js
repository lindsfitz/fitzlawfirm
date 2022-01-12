//will contain the nav, a header, and the about us section 
import React from "react";
import { useNavigate } from 'react-router-dom';
import AboutUs from "./AboutUs";

export default function Home() {

    let navigate = useNavigate();

    const header = {
        postion: 'relative',
    }

    const tagline = {
        position: 'absolute',
        left: 20,
        bottom: '400px',
        maxWidth: '25%'
    }

    return (
        <div>
            <div style={{position:'relative'}}>
                <img src="./assets/head-fam.png" alt="happy-family" height='auto' width='100%' />
                <div id='tagline'>
                    <h1>Find Solutions To Protect What Matters Most.</h1>
                    <h3>Tim FitzGerald works with local parents and families to protect their children, their assets and their legacies.</h3>
                    <button type="button" class="contact-btn" onClick={() => navigate('/contact')}>CONTACT US</button>
                </div>
            </div>

            <AboutUs />

        </div>

    )
}