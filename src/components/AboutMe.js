import pictureOfMe from '../assets/linkedin.jpg'
import './CSS/aboutMe.css'
import {Skills} from './Skills'
import {Hobbies} from './Hobbies'
import BEHappy from '../assets/BE-happy.png'
import flatrion from '../assets/flatiron.png'
import bing from '../assets/bing.png'

export default function AboutMe () {

    return (
        <div>
            <div id='about-me-intro'>
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

            
            <Skills/>
            
            <div className='ed-ss'>

                <div>
                    <h1 className='header-ed'>Education</h1>
                    <div className= "ed">
                        <div className='schools'>
                            <img className="flatiron" src={flatrion} alt="flatiron"/>
                            <p>Full-Stack Software Engineering Program</p>
                        </div>
                        <div className='schools'>
                            <img className="bing"src={bing} alt="binghamton logo"/>
                            <div className="bing-text">
                                <p>Binghamton University, SUNY</p>
                                <p>Bachelor of Science in Neuroscience</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='header-ss'>Soft Skills</h1>
                    <div className= "soft-skills">
                        <div className="soft-skills-text">
                            <p>Team Player</p>
                            <p>Problem-Solver</p>
                            <p>Innovative</p>
                        </div>
                        <img className='BE-happy' src={BEHappy} alt='BE-happy'/>
                        <div className= "soft-skills-text">
                            <p>Detail Oriented</p>
                            <p>Ambitious</p>
                            <p>Critical Thinker</p>
                        </div>
                    </div>
                </div>
            </div>
         
            <div>
                <h1 className='header'>Work Experience</h1>
            </div>
            <Hobbies/>
        </div>
    )
}