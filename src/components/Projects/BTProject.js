import React from 'react';

import imgURL from '../../assets/demos/bike_tracer_phone_demo.mov';
import '../CSS/projects.css'



export const BTProject = () => {

    return (
        <div className="BTP">
            <div className='demo-cont'>
                <video src={imgURL} alt="demo"></video>
            </div>
            <div className='description'>
                <h1>Bike Tracer</h1>
                <p>description</p>
                <div className='project-block'></div>
                <a href='https://github.com/evandalmeida/bike-tracer-ph2-project' target="_blank" rel="noopener noreferrer">
                    <button className="github-button"> CODE
                    </button>
                </a>
            </div>
        </div>
    );
};
