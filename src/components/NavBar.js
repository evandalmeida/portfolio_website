import React, {useState, useEffect} from  'react';
import {Link} from 'react-router-dom'
import BELogo from "../assets/ME/BE-hi.png"
import './CSS/navBar.css'



export default function NavBar({ scrollToTop }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleLinkClick = (action) => {
        action(); // Execute scrollToTop or scrollToBottom
        setMobileMenuOpen(false); // Close the mobile menu
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id='nav'>

            <div id='main-navigation'>
                <div id='logo'>
                    <a href='/#root'className='name-logo' onClick={scrollToTop}>EVAN <br/> D'ALMEIDA</a>
                    <img className='BE-logo' src={BELogo} alt="ッ"/> 
                </div>
                <nav className={!isMobile ? "nav-bar" : "hidden" }>
                    <a href='/#root' onClick={scrollToTop} > HOME </a>
                    <Link to='/projects' onClick={scrollToTop}> PROJECTS </Link>
                    <Link to='/about-me' onClick={scrollToTop}> ABOUT </Link>
                    <Link to='/resume' onClick={scrollToTop}> RESUME </Link>
                    <button onClick={scrollToBottom}> CONTACT ME </button>
                </nav>
                <div className={!isMobile ? "hidden" : "hamburger"}>
                    <button className="ham-button" onClick={toggleMobileMenu}> ||| </button>
                </div>
            </div>
            {isMobile && mobileMenuOpen && (
                <nav className="hamburger-nav-bar">
                    <a href='/#root' onClick={() => handleLinkClick(scrollToTop)}>HOME</a>
                    <Link to='/projects' onClick={() => handleLinkClick(scrollToTop)}>PROJECTS</Link>
                    <Link to='/about-me' onClick={() => handleLinkClick(scrollToTop)}>ABOUT</Link>
                    <Link to='/resume' onClick={() => handleLinkClick(scrollToTop)}>RESUME</Link>
                    <button className='hamburger-button' onClick={() => handleLinkClick(scrollToBottom)}>CONTACT ME</button>
                </nav>
            )}
        </div>
    );
};