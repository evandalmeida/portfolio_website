import React, { useState, useEffect } from 'react';
import AllProjects from './AllProjects';

import './CSS/home.css'

export default function Home() {
    const fullText = "I'm a software engineer with a knack for full-stack development and a special love for Python and JavaScript. Scroll down to see my favorite projects.";
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);
    const [loop, setLoop] = useState(0);


    useEffect(() => {
        let timer;

        // typing effect
        if (!isDeleting && displayText.length < fullText.length) {
            timer = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
                setSpeed(50);
            }, speed);
        } 
        // deleting effect
        else if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length - 1));
                setSpeed(30);

            // scroll down after typing out statement
            const projectsElement = document.getElementById('projects');
            if (projectsElement) {
                projectsElement.scrollIntoView({ behavior: 'smooth' });
            }

            }, speed);
        }

        // switch from typing to deleting
        if (!isDeleting && displayText === fullText) {
            timer = setTimeout(() => {
                setIsDeleting(true);
                setSpeed(100);
            }, 5000); // wait so user can read intro 
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setLoop(loop + 1);
            setSpeed(100);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, speed, loop, fullText]);

    return (
        <div id='home-div'>
            <div className='main-div'>
                <div className='intro'>
                    <h1>Hi! I'm Evan[ee-væn],</h1>
                </div>
                <div className='type-text'>
                    <h2>{displayText}</h2>
                </div>
            </div>

            <section id='projects'>
                
                <AllProjects/>
            </section>
        </div>
    
    );
}
