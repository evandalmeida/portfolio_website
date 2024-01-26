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
                <div className='desc-title'>
                    <h1>movieVerse</h1>
                    <a href='https://github.com/evandalmeida/movieVerse-ph1-project' target="_blank" rel="noopener noreferrer">
                        <button className="github-button"> CODE
                        </button>
                    </a>
                </div>
                <div className='project-block'></div>
                <p>Platform for browsing, learning, and managing a personal movie watchlist.</p>
            </div>

        </div>
    );
};
