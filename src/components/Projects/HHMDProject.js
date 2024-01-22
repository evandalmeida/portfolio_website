import React from 'react';
import github from '../../assets/github.bounce.pvg.svg';
import imgURL from '../../assets/HealthHarborMD.gif';

export const HHMDProject = () => {
    return (
        <div className="proj-imgbx">
            <video src={imgURL} alt="demo" controls />
            <div className="proj-txtx">
                <div className="text">
                    <h4>HealthHarborMD</h4>
                    <span>DESCRIPTION</span>
                </div>
                <a href='https://github.com/evandalmeida/clinic-portal-ph5-project' target="_blank" rel="noopener noreferrer">
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
