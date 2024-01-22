import React from 'react';
import resume from '../assets/Resume_2.pdf'
import my_resume from '../assets/Resume_2.png'
import download from '../assets/icons/download.png'

export const Resume = () => {
    return(
            <div className="resume-container">
                <div className = "resume-download-button">
                    <h2 className="resume-head">My Resume </h2>
                    <a href={resume} download="Evan D'Alemida's Resume">
                        <img className='download' src={download} alt="download" />
                        <button className='download-button'>Download Resume</button>
                    </a>
                </div>
                <div className="resume-image-container">
                    <img className="resume-image" src={my_resume} alt="Resume"/>
                </div>
            </div>
    )
}

export default Resume;