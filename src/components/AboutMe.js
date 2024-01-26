import './CSS/aboutMe.css'

import pictureOfMe from '../assets/linkedin.jpeg'
import TechSkills from './TechSkills'
import Hobbies from './Hobbies'
import Education from './Education'
import SoftSkills from './SoftSkills'
import Work from './Work.js'



export default function AboutMe () {

    return (
        <div id='about-me'>
            <div className='about-me-intro'>
                <img className="profile-pic" src={pictureOfMe} alt='profile'/>
                <div className='who-am-i'>
                    <h1>Who am I?</h1>
                    <div className='intro-summary'>
                        <h2>Hello, my name is Evan D’Almeida, and I am thrilled to share my portfolio with you.</h2>
                        <h2>I am a dedicated software engineer, my passion lies in collaborating with teams to design and develop innovative solutions that address business challenges. </h2>
                        <h2>I have a strong foundation building projects using Python and JavaScript.</h2>
                    </div>
                </div>
            </div>
            <div id='tech-skills'><TechSkills/></div>
            <div id='ed-ss'>
                <Education/>
                <SoftSkills/>
            </div>
            <div id='work-hobbies'>
                <div id='work'><Work/></div>
                <div id='hobbies'><Hobbies/></div>
            </div>
        </div>
    );
};