//will contain the nav, a header, and the about us section 
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
    let navigate = useNavigate();


    const practiceStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 10% 0 10%',
        padding: '30px 30px 100px 30px',
        textAlign:'center'
    }



    return (
        <main>
            <div id='about-container'>
                <h6>ABOUT US</h6>
                <div id='about-us'>
                    <img src="./assets/about-us.jpeg" width='450px' height='300px' alt="client-meeting" />
                    <div style={{ padding: '0 20px 0 20px' }}>
                        <h2>Estate Planning Services and Management</h2>
                        <p>Our clients face serious legal issues that present challenges to the success of their families. These include premature death, disability and incapacity. In these scenarios, they take comfort in knowing that they prepared for the best care available for themselves and their loved ones. Making time and decisions in the present lead to better solutions when life happens. Though many times there are no perfect solutions when life throws a curveball, well thought out and professionally constructed plans lead to superior outcomes.</p>
                        <p>
                            These plans protect our clients, their children and the legacy which reflects a lifetime of hard work.
                        </p>
                        <button type="button" className="hollow-btn" onClick={() => navigate('/attorney')}>
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ background: '#f3f2ee' }}>
                <div id="practice" style={practiceStyle}>
                    <div>
                        <h6>WHAT WE DO</h6>
                        <h2>Our Focus</h2>
                    </div>
                    <div id='practice-info'>
                        <h4>The philosophy of our firm is to encourage our clients to proactively plan for the events that otherwise destroy families and finances.
                            Our goal is to build a wall of protection around what is important to you and use modern legal solutions to reduce the risks to your family's finances, health and welfare.
                        </h4>
                        <br />
                    </div>
                    <div id="practice-container">
                        <div className="practice-areas">
                            <h5>WILLS</h5>
                            <p>Having a well-written will ensures that your assets will be preserved, managed, and distributed in a way that honors your legacy and adequately provides for the ones you love most.</p>
                            <br />
                            <button type="button" className="hollow-btn" onClick={() => navigate('/estate')}>READ MORE</button>
                        </div>


                        <div className="practice-areas">
                            <h5>TRUSTS</h5>
                            <p>A trust becomes active immediately upon signing. Setting up a trust can allow you to continue managing your assets, while simultaneously preparing for a worst-case scenario.</p>
                            <br />
                            <button type="button" className="hollow-btn" onClick={() => navigate('/estate')}>READ MORE</button>

                        </div>

                        <div className="practice-areas">
                            <h5>TAX STRATEGIES</h5>
                            <p>Approaching investments strategically can help maximize retirement income, while planning ahead can significantly reduce the potential stress of Estate Taxes on your beneficiaries.</p>
                            <br />
                            <button type="button" className="hollow-btn" onClick={() => navigate('/estate')}>READ MORE</button>
                        </div>
                    </div>
                    <br />
                    <div id="practice-questions">
                        <h2>Questions in other areas?</h2>
                        <p>Let Tim find the answers you need!</p>
                        <button type="button" className="contact-btn" onClick={() => navigate('/contact')}>CONTACT TIM</button>
                    </div>
                </div>
            </div>
        </main>
    )
}