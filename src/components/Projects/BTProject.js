import React from 'react';

import imgURL from '../../assets/demos/bike_tracer_phone_demo.mov';
import '../CSS/projects.css'



export const BTProject = () => {

    return (
        <div className="BTP">
            <video src={imgURL} alt="demo"></video>
            <h4>Bike Tracer</h4>
            <div className='description'>
                <h4>DESCRIPTION</h4>
                <span>description</span>
            </div>
            <a href='https://github.com/evandalmeida/bike-tracer-ph2-project' target="_blank" rel="noopener noreferrer">
                <button className="github-button"> CODE
                </button>
            </a>
        </div>
    );
};
