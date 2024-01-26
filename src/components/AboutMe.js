import pictureOfMe from '../assets/linkedin.jpeg'
import './CSS/aboutMe.css'
import TechSkills from './TechSkills'
import Hobbies from './Hobbies'
import Education from './Education'
import SoftSkills from './SoftSkills'

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
         
            <div id='work'>
                <h1 className='work-header'>Experience</h1>
                <div className='jobs'>                    
                    <div className='job-cont'>
                        <div className='job-title'>
                            <div className='job-header'>
                                <h2 className='name'>Clinical Informations Manager</h2>
                                <h2 className='bar'>|</h2>
                                <h2 className='location'>Emergency Department</h2>
                            </div>
                            <h3>11/2021 - 5/2023</h3>
                        </div>
                        <p>Excelled in meticulous documentation, ensuring precision in patient histories, vital for accurate data entry.</p>
                        <p>Applied critical analysis to resolve inconsistencies and homonyms in medical terms by referring to dictionaries, drug references, and other sources on anatomy, physiology, and medicine, enhancing data reliability.</p>
                        <p>Managed patient data in high-pressure environments, showcasing organizational and multitasking capabilities.</p>
                    </div>
                    <div className='job-cont'>
                        <div className='job-title'>
                            <div className='job-header'>
                                <h2 className='name'>Research Assistant</h2>
                                <h2 className='bar'>|</h2>
                                <h2 className='location'>Bishop Laboratory of Movement Disorders </h2>
                            </div>
                            <h3>8/2019 - 5/2021</h3>
                        </div>
                        <p>Collaborated effectively in research teams, communicating intricate data clearly.</p>
                        <p>Conducted precise experimental procedures, demonstrating meticulous attention to detail.</p>
                        <p>Mentored students in research methodologies, highlighting leadership and teaching skills.</p>
                    </div>
                </div>
            </div>
            <div id='hobbies'>
                <Hobbies/>
            </div>
        </div>
    )
}