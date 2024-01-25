import React from 'react';

import imgURL from '../../assets/demos/movieVerse Tutorial for Version 1.1.gif';
import '../CSS/projects.css'



export const MVProject = () => {
    return (
        <div className="MVP">
            <div className='demo-cont'>
                <img src={imgURL} alt="demo"></img>
            </div>
            <div className='description'>
                <h1>movieVerse</h1>
                <p>description</p>
            </div>
            <div className='project-block'></div>
            <a href='https://github.com/evandalmeida/movieVerse-ph1-project' target="_blank" rel="noopener noreferrer">
                <button className="github-button"> CODE
                </button>
            </a>
        </div>
    );
};
