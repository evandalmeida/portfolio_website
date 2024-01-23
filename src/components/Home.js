import React, { useState, useEffect } from 'react';

export default function Home() {
    const fullText =  "I'm Evan D'Almeida ッ";
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);
    const [loop, setLoop] = useState(0);

    useEffect(() => {
        let timer;

        // TYPING SEQEUNCE
        if (!isDeleting && displayText.length < fullText.length) {
            timer = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
                setSpeed(100);
            }, speed);
        } 
        // DELETING SEQEUNCE
        else if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length - 1));
                setSpeed(50);
            }, speed);
        }

        // SWTICH BETWEEN TYPING AND DELETING
        if (!isDeleting && displayText === fullText) {
            timer = setTimeout(() => {
                setIsDeleting(true);
                setSpeed(100);
            }, 2000); 
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setLoop(loop + 1);
            setSpeed(100);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, speed, loop, fullText]);

    return (
        <div id='home-div'>
            <h1>"Hello! {displayText}</h1>
            <h2>I'm a software engineer with a knack for full-stack development and a special love for Python. My experience blends robust technical expertise with an innovative approach to tackling complex challenges.</h2>
        </div>
    );
}
