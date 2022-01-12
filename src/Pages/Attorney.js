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

                    <p>Tim Fitzgeralds unique background provides him the prospective to help his clients solve their unique
                        problems.
                        He provides professional estate planning services to individuals and families in the Conjeo Valley and throughout California.
                        His candid legal advice encourages them to proactively address the known trust, estate and legacy issues we all face their most daunting legal problems with candid, honest advice. As an attorney focused on providing professional estate planning services to individuals and families in the Conejo Valley, Tim counsels his clients to plan their future in the present while they are able to tackle the most complex of issues.
                    </p>


                    <button type="button" className="contact-btn" onClick={() => navigate('/contact')}>
                        CONTACT US
                    </button>
                    <br />
                </div>
                <br />
                <div style={{display:'flex',flexDirection:'column'}}>
                    <img id='headshot' src="./assets/small-headshot.png" alt="headshot-logo" width='400px' /><br />
                    <img id='wc-logo' src='./assets/wealthcounsel.png' alt='wealthcounsel-member' width='400px' />
                </div>
            </div>
        </div>
    )
}