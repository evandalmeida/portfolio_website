import pictureOfMe from '../assets/linkedin.jpg'
import './CSS/aboutMe.css'
import {Skills} from './Skills'

export default function AboutMe () {

    return (
        <>
            <div id='about-me-intro'>
                <img className="profile-pic" src={pictureOfMe} alt='profile'/>
                <div className='who-am-i'>
                    <h1>Who am I?</h1>
                    <div className='intro-summary'>
                        <h2>Hello, my is Evan D’Almeida, and I am thrilled to share my portfolio with you.</h2>
                        <h2>I am a dedicated software engineer, my passion lies in collaborating with teams to design and develop innovative solutions that address business challenges. </h2>
                        <h2>I have a strong foundation building projects using Python and JavaScript.</h2>
                    </div>
                </div>
            </div>

            <div>
   
                <Skills/>
            </div>

            <div>
                <h1 className='header'>Soft Skills</h1>
                <div className= "soft-skills">
                <div className="soft-skills-text">
                    <p>Team Player</p>
                    <p>Problem-Solver</p>
                    <p>Innovative</p>
                </div>
                <div className= "soft-skills-text">
                    <p>Detail Oriented</p>
                    <p>Ambitious</p>
                    <p>Critical Thinker</p>
                </div>
            </div>
            </div>

            <div>
                <h1 className='header'>Education</h1>
            </div>
            <div>
                <h1 className='header'>Work Experience</h1>
            </div>
            <div>
                <h1 className='header'>Hobbies</h1>
            </div>
        </>
    )
}