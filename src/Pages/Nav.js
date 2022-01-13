import React, { useEffect, useState } from "react";
import { BsTelephone, BsList, BsX } from "react-icons/bs";



export default function Nav() {

    const [mobileNav, setMobileNav] = useState(false)
    const [navOpen, setNavOpen] = useState(false)
    const handleToggle = () => {
        setNavOpen(prev => !prev)
    }



    const setNavigation = () => {
        if (window.innerWidth < 540) {
            setMobileNav(true)
        } else { setMobileNav(false) }
    }

    useEffect(() => {
        window.addEventListener('load', setNavigation)
    })

    const menu = {
        border: 'none',
        background: 'transparent'
    }

    const close = {
        position: "absolute",
        right: 0,
        border: 'none',
        color: '#002e46'
    }
    return (
        <div>
            <nav>
                <div>
                    <img id='nav-logo' src='./assets/skinnylogo.png' width='350px'
                        alt='logo' />
                </div>
                {!mobileNav && <div id='navlinks'>
                    <a href="/">HOME</a>
                    <a href="/attorney">MEET THE ATTORNEY</a>
                    <a href="/estate">ESTATE PLANNING</a>
                    <a href="/contact">CONTACT US</a>
                </div>}
                {mobileNav && <div>
                    <a href='tel:8186744441'>
                        <button id='nav-call-btn' className="hollow-btn"><BsTelephone /> 818-674-4441</button></a>
                    <button style={menu} onClick={handleToggle}><BsList /></button>
                </div>
                }
                {navOpen && <div id='mobilenav'>
                    <button style={close} onClick={() => setNavOpen(false)}><BsX /></button><br />
                    <a href="/">HOME</a><br /><br />
                    <a href="/attorney">MEET THE ATTORNEY</a><br /><br />
                    <a href="/estate">ESTATE PLANNING</a><br /><br />
                    <a href="/contact">CONTACT US</a><br /><br />
                    <a href='/login'>Login</a><br /><br />
                </div>}

                {!mobileNav && <div>
                    <a href='tel:8186744441'>
                        <button id='nav-call-btn' className="hollow-btn"><BsTelephone /> 818-674-4441</button></a>
                    <a href='/login'>Login</a>
                </div>}
            </nav>
        </div>
    )
}