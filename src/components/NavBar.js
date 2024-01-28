import React from  'react';
import {Link} from 'react-router-dom'
import BELogo from "../assets/ME/BE-hi.png"
import './CSS/navBar.css'



export default function NavBar({scrollToTop}) {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    };

    return (
        <div id='main-navigation'>
            <div id='logo'>
                <a href='/#root'className='name-logo' onClick={scrollToTop}>EVAN <br/> D'ALMEIDA</a>
                <img className='BE-logo' src={BELogo} alt="ッ"/> 
            </div>
            <nav id='nav-bar'>
                <a href='/#root' onClick={scrollToTop} > HOME </a>
                <Link to='/projects' onClick={scrollToTop}> PROJECTS </Link>
                <Link to='/about-me' onClick={scrollToTop}> ABOUT </Link>
                <Link to='/resume' onClick={scrollToTop}> RESUME </Link>
                <button onClick={scrollToBottom}> CONTACT ME </button>
            </nav>
        </div>
    );
};