import './CSS/aboutMe.css'

import flatrion from '../assets/flatiron.png'
import bing from '../assets/bing.png'



export default function Education() {
    
    return (
        <div className='ed-cont'>
            <h1 className='header-ed'>Education</h1>
            <div className= "ed">
                <div id='flatiron' className='schools'>
                    <div className="flatiron">
                        <img src={flatrion} alt="flatiron"/>
                    </div>
                    <h2>Full-Stack Software Engineering Program</h2>
                </div>
                <div className='schools'>
                    <div className="bing">
                        <img src={bing} alt="binghamton logo"/>
                    </div>
                    <div className="bing-text">
                        <h2>Binghamton University, SUNY</h2>
                        <h3>Bachelor of Science in Neuroscience</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};