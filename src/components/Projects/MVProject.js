import React from 'react';

import imgURL from '../../assets/demos/movieVerse Tutorial for Version 1.1.gif';
import '../CSS/projects.css'



export const MVProject = () => {
    return (
        <div className="MVP">
            <h1>movieVerse</h1>
            <img src={imgURL} alt="demo"></img>
            <div className='description'>
                <h4>DESCRIPTION</h4>
                <text>description</text>
            </div>
            <a href='https://github.com/evandalmeida/movieVerse-ph1-project' target="_blank" rel="noopener noreferrer">
                <button className="github-button"> CODE
                </button>
            </a>
        </div>
    );
};
