import React from "react";
import {  BsGeoAlt, BsEnvelope, BsTelephone } from "react-icons/bs";

export default function Footer() {

    const footerNav = {
        display: 'flex',
        justifyContent: 'center',
        margin: '2% 10% 2% 10%'
    }

    const footerInfo = {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '2% 10% 2% 10%',
        textAlign: 'center',
        borderTop: 'solid 1px #007baf',
        borderBottom: 'solid 1px #007baf',
        padding: '20px'
    }


    return (
        <div id='footer' style={{ background: '#002e46', padding: '30px' }}>
            <div id='footer-nav'>
                <a href="/">HOME</a>
                <a href="/attorney">MEET THE ATTORNEY</a>
                <a href="/estate">ESTATE PLANNING</a>
                <a href="/contact">CONTACT US</a>
            </div>

            <div id='footer-info'>
                <div className='footerSections'>
                    <h6>OUR OFFICE</h6>
                    <BsGeoAlt />
                    <p>
                        Oak Park, CA 91377
                    </p>
                </div>

                <div className='footerSections'>
                    <h6>CONTACT FITZLAWFIRM</h6>
                    <a href='tel:8186744441'><BsTelephone /> 818-674-4441</a><br /><br />
                    <a href="mailto:tim@fitzlawfirm.com"><BsEnvelope /> tim@fitzlawfirm.com</a>
                </div>

            </div>

        </div>
    )
}