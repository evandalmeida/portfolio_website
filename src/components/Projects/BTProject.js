import React from 'react';
import github from '../../assets/github.bounce.pvg.svg';
import imgURL from '../../assets/bike_tracer_phone_demo.mov';

export const BTProject = () => {
    return (
        <div className="proj-imgbx">
            <video src={imgURL} alt="demo" controls />
            <div className="proj-txtx">
                <div className="text">
                    <h4>Bike Tracer</h4>
                    <span>DESCRIPTION</span>
                </div>
                <a href='https://github.com/evandalmeida/bike-tracer-ph2-project' target="_blank" rel="noopener noreferrer">
                    <button className="github-button">
                        <div className="button-content">
                            <img className="github-icon" src={github} alt="GitHub"/>
                            <sm className="text">Github</sm>
                        </div>
                    </button>
                </a>
            </div>
        </div>
    );
};
