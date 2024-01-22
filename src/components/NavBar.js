import React from  'react';
import { Link} from 'react-router-dom'

export default function NavBar() {

    return (
        <nav id='nav-bar'>
            <Link to='/'> EVAN D'ALMEIDA </Link>

            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/about-me'> About Me </Link>
            <Link to='/resume'> Resume </Link>
            <Link to='/contact'> Contact </Link>
        </nav>
    )
}