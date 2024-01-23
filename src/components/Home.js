import React, { useState, useEffect } from 'react';
import BELogo from "../assets/BM-hi.png"
import './CSS/home.css'

export default function Home() {
    const fullText = "I'm Evan D'Almeida";
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);
    const [loop, setLoop] = useState(0);

    useEffect(() => {
        let timer;

        // Typing effect
        if (!isDeleting && displayText.length < fullText.length) {
            timer = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
                setSpeed(100);
            }, speed);
        } 
        // Deleting effect
        else if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length - 1));
                setSpeed(50);
            }, speed);
        }

        // Switch between typing and deleting
        if (!isDeleting && displayText === fullText) {
            timer = setTimeout(() => {
                setIsDeleting(true);
                setSpeed(100);
            }, 2000); // Wait a bit before starting to delete
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setLoop(loop + 1);
            setSpeed(100);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, speed, loop, fullText]);

    return (
        <div id='home-div'>
            <h1>Hello! {displayText}{displayText === fullText && <img className='BE-logo' src={BELogo} alt="ッ" />}</h1>
            <h2>I'm a software engineer with a knack for full-stack development and a special love for Python. My experience blends robust technical expertise with an innovative approach to tackling complex challenges.</h2>
        </div>
    );
}
