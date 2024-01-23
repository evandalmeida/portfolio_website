import React from  'react';
import {Link} from 'react-router-dom'
import './CSS/navBar.css'

function NavBar() {
    return (
        <nav id='nav-bar'>
            <a href='/#home-div'> Home </a>
            <a href='/#projects'> Projects </a>
            <Link to='/about-me'> About </Link>
            <Link to='/resume'> Resume </Link>
        </nav>
    )
}


export default NavBar;