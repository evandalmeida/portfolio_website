import './CSS/aboutMe.css'
import BEHappy from '../assets/ME/BE-happy.png'

export default function SoftSkills() {

    return (
        <div className='soft-skills-cont'>
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
    );
};