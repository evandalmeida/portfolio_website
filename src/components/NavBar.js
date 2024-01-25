import React from  'react';
import {Link} from 'react-router-dom'
import BELogo from "../assets/BE-hi.png"
import './CSS/navBar.css'

function NavBar({scrollToTop}) {




    return (
        <div id='main-navigation'>
            <div id='logo'>
                <a href='/#root'className='name-logo' onClick={scrollToTop}>EVAN <br/> D'ALMEIDA</a>
                <img className='BE-logo' src={BELogo} alt="ッ"/> 
            </div>
        <nav id='nav-bar'>
            <a href='/#root' onClick={scrollToTop} > HOME </a>
            <Link to='/projects'> PROJECTS </Link>
            <Link to='/about-me' onClick={scrollToTop}> ABOUT </Link>
            <Link to='/resume' onClick={scrollToTop}> RESUME </Link>
        </nav>
        </div>
    )
}


export default NavBar;