import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './CSS/navBar.css'

import BELogo from "../assets/ME/BE-hi.png"



export default function NavBar({scrollToTop}) {
    
    const [navActive, setNavActive] = useState(false);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    };


    const toggleNav = () => {
        setNavActive(!navActive);
    };

    return (
        <div id='main-navigation'>

            <div id='logo'>
                <a href='/#root' className='name-logo' onClick={scrollToTop}>
                    EVAN <br/> D'ALMEIDA
                </a>
                <img className='BE-logo' src={BELogo} alt="Logo" /> 
            </div>




            <div className="hamburger-menu" onClick={toggleNav}>
                <div> OPEN </div>
            </div>
            <div id='nav-nav-bar' className={navActive ? 'nav-active' : ''}>
                <nav>
                    <a href='/#root' onClick={scrollToTop}>HOME</a>
                    <Link to='/projects' onClick={scrollToTop}>PROJECTS</Link>
                    <Link to='/about-me' onClick={scrollToTop}>ABOUT</Link>
                    <Link to='/resume' onClick={scrollToTop}>RESUME</Link>
                    <button onClick={scrollToBottom}>CONTACT ME</button>
                </nav>
            </div>
        </div>
    );
};