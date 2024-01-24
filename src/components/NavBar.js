import React from  'react';
import {Link} from 'react-router-dom'
import BELogo from "../assets/BE-hi.png"
import './CSS/navBar.css'

function NavBar() {
    return (
        <div id='main-navigation'>
            <div id='logo'>
                <Link className='name-logo' to='/'>EVAN <br/> D'ALMEIDA</Link>
                <img className='BE-logo' src={BELogo} alt="ッ"/> 
            </div>
        <nav id='nav-bar'>
            <Link to='/'> HOME </Link>
            <a href='/#projects'> PROJECTS </a>
            <Link to='/about-me'> ABOUT </Link>
            <Link to='/resume'> RESUME </Link>
        </nav>
        </div>
    )
}


export default NavBar;