import React from 'react';

import imgURL from '../../assets/demos/HealthHarborMD.gif';
import '../CSS/projects.css'



export const HHMDProject = () => {

    return (
        <div className="HHMDP">
            <div className='demo-cont'>
                <img src={imgURL} alt="demo"></img>
            </div>
            <div className='description'>
                <div className='desc-title'>
                    <h1>HealthHarborMD</h1>
                    <a href='https://github.com/evandalmeida/clinic-portal-ph5-project' target="_blank" rel="noopener noreferrer">
                        <button className="github-button">CODE</button>
                    </a>
                </div>
                <div className='project-block'></div>
                <p>Secure portal connecting patients and clinics for efficient visit management.</p>
            </div>
        </div>
    );
};