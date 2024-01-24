import React from 'react';
import resume from '../assets/Resume_2.docx'
import my_resume from '../assets/Resume_2.png'
import download from '../assets/icons/download.png'
import './CSS/resume.css'

export const Resume = () => {
    return(
            <div className="resume-container">
                <div className = "resume-download-button">
                    <h2 className="resume-head">Download my resume </h2>
                    <a href={resume} download="Evan D'Alemida's Resume">
                        <img className='download' src={download} alt="download" />
                    </a>
                </div>
                <div className="resume-image-container">
                    <img className="resume-image" src={my_resume} alt="Resume" />
                </div>
                <div className='.resume-container-text '>
                    <h2>Thank you for taking a look at my resume, don't heastiate to reach out if you have any questions.</h2>
                </div>
            </div>
    )
}

export default Resume;