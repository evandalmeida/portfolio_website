import React from  'react';
import {Link} from 'react-router-dom'
import headerImg from '../assets/BM-hi.png'

function NavBar() {
    return (
        <nav id='nav-bar'>
            <Link to='/'>
                <div className='logo'>
                    <h1 className='logo'> EVAN D'ALMEIDA</h1>
                    <img src={headerImg} alt="Header Img" style={{ maxWidth: '10%' }} />
                </div>
             </Link>

            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/about-me'> About Me </Link>
            <Link to='/resume'> Resume </Link>
            <Link to='/contact'> Contact </Link>
        </nav>
    )
}


export default NavBar;