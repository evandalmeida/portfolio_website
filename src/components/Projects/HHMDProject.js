import React from 'react';

import imgURL from '../../assets/demos/HealthHarborMD.gif';
import '../CSS/projects.css'



export const HHMDProject = () => {
    return (
        <div className="HHMDP">
            <img src={imgURL} alt="demo"></img>
            <h4>movieVerse</h4>
            <div className='description'>
                <h4>HealthHarborMD</h4>
                <span>description</span>
            </div>
            <a href='https://github.com/evandalmeida/clinic-portal-ph5-project' target="_blank" rel="noopener noreferrer">
                <button className="github-button"> CODE
                </button>
            </a>
        </div>
    );
};