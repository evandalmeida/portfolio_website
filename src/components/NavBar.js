import React from  'react';
import {Link} from 'react-router-dom'
import headerImg from '../assets/BM-hi.png'
import './CSS/navBar.css'

function NavBar() {
    return (
        <nav id='nav-bar'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/about-me'> About Me </Link>
            <Link to='/resume'> Resume </Link>
            <Link to='/contact'> Contact </Link>
        </nav>
    )
}


export default NavBar;