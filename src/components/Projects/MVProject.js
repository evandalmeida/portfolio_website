import React from 'react';

import imgURL from '../../assets/demos/movieVerse Tutorial for Version 1.1.gif';
import '../CSS/projects.css'



export const MVProject = () => {
    return (
        <div className="MVP">
            <img src={imgURL} alt="demo"></img>
            <h4>movieVerse</h4>
            <div className='description'>
                <h4>DESCRIPTION</h4>
                <span>description</span>
            </div>
            <a href='https://github.com/evandalmeida/movieVerse-ph1-project' target="_blank" rel="noopener noreferrer">
                <button className="github-button"> CODE
                </button>
            </a>
        </div>
    );
};
