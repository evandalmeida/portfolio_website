import React from 'react';

import imgURL from '../../assets/demos/bike_tracer_phone_demo.mov';
import '../CSS/projects.css'



export const BTProject = () => {

    return (
        <div className="BTP">
            <div className='demo-cont'>
                <video src={imgURL} alt="demo" loop autoPlay></video>
            </div>
            <div className='description'>
                <div className='desc-title-phone'>
                    <h1>Bike Tracer</h1>
                    <a href='https://github.com/evandalmeida/bike-tracer-ph2-project' target="_blank" rel="noopener noreferrer">
                        <button className="github-button">CODE</button>
                    </a>
                </div>
                <div className='project-block'></div>
                <p>Real-time bike ride tracking application, allowing users to view ride metrics and workout routes.</p>
            </div>
        </div>
    );
};
