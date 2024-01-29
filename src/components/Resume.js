import './CSS/resume.css'

import React from 'react';
import resume from '../assets/Resume_2.docx'
import my_resume from '../assets/Resume_2.png'
import download from '../assets/icons/download.png'


export default function Resume() {
    
    return(
        <div className="resume-container">
            <h1 className='resume-header'>MY RESUME</h1>
            <div className="resume-image-container">
                <img className="resume-image" src={my_resume} alt="Resume" />
            </div>
            <div className='resume-end-text'>
                <h2 className='resume-ty'>Thank you for taking a look at my resume. Don't heastiate to reach out if you have any questions.</h2>
                <a className='download-button' href={resume} download="Evan D'Alemida's Resume">
                    <img className='download-img' src={download} alt="download" />
                    <h2 className="resume-download">Click Here to Download</h2>
                </a>
            </div>
        </div>
    );
};