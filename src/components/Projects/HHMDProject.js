import React from 'react';

import imgURL from '../../assets/demos/HealthHarborMD.gif';
import '../CSS/projects.css'



export const HHMDProject = () => {
    return (
        <div className="HHMDP">
            <h1>HealthHarborMD</h1>
            <img src={imgURL} alt="demo"></img>
            <div className='description'>
                <h4>DESCRIPTION</h4>
                <text>description</text>
            </div>
            <a href='https://github.com/evandalmeida/clinic-portal-ph5-project' target="_blank" rel="noopener noreferrer">
                <button className="github-button"> See the CODE!
                </button>
            </a>
        </div>
    );
};