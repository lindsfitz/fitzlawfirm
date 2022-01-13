import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Attorney() {

    let navigate = useNavigate();

    const attorneyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5% 10% 5% 10%',
        padding: '30px',
    }

    return (
        <div style={attorneyStyle}>
            <h6>MEET THE ATTORNEY</h6>
            <div id='meet-attorney'>
                <div id="meet-info" style={{ padding: '0 20px 0 30px' }}>
                    <h1>Timothy M. FitzGerald</h1>
                    <p>
                        Tim FitzGerald’s background provides him a unique perspective that provides value to assist his clients in solving the challenges they face. He has worked with individuals, families and corporations in diverse industries, always seeking to improve performance, increase returns and prepare his clients for greater success in life.
                    </p>
                    <p>
                        Tim provides professional estate planning services to individuals and families in the Conjeo Valley and throughout California. His candid legal advice encourages them to proactively address the known trust, estate and legacy issues we all face and prepare for their most daunting legal problems. </p>
                    <p>
                        The future is always unclear and presents unexpected roadblocks to each of us. Smart people plan for these to the greatest extent possible and are typically better prepared to deal with challenges to their health, to their finances and to their families. Ultimately our goal is to plan for each of these possible issues in the present before duress can weigh heavily on important decisions. There is no perfect plan but one that is well thought out and constructed can have dramatic effects in crucial ways.

                    </p>
                    <button type="button" className="contact-btn" onClick={() => navigate('/contact')}>
                        CONTACT US
                    </button>
                    <br />
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img id='headshot' src="./assets/small-headshot.png" alt="headshot-logo" width='400px' /><br />
                    <img id='wc-logo' src='./assets/wealthcounsel.png' alt='wealthcounsel-member' width='400px' />
                </div>
            </div>
        </div>
    )
}