import flatrion from '../assets/flatiron.png'
import bing from '../assets/bing.png'
import './CSS/aboutMe.css'

export default function Education() {
    return (
        <div className='ed-cont'>
            <h1 className='header-ed'>Education</h1>
            <div className= "ed">
                <div className='schools'>
                    <img className="flatiron" src={flatrion} alt="flatiron"/>
                    <h2>Full-Stack Software Engineering Program</h2>
                </div>
                <div className='schools'>
                    <img className="bing"src={bing} alt="binghamton logo"/>
                    <div className="bing-text">
                        <h2>Binghamton University, SUNY</h2>
                        <h3>Bachelor of Science in Neuroscience</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};