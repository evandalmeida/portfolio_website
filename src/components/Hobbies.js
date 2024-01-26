import './CSS/aboutMe.css'
import React, { useState} from 'react';

// SHOWS
import barry from "../assets/shows/Barry.jpg"
import hh from "../assets/shows/HouseHunters.jpg"
import howItsMade from "../assets/shows/HowItsMade.jpg"
import invincible from "../assets/shows/Invincible.jpg"
import sharkTank from "../assets/shows/SharkTank.jpg"
import theBoys from "../assets/shows/TheBoys.jpg.png"
import theOffice from "../assets/shows/TheOffice.jpg"
import BECycle from "../assets/BE-cycling.PNG"
// import BERunning from "../assets/BE-running.jpg"
import BEEating from "../assets/BE-eating.png"
// import BEMusic from "../assets/BE-music.jpg"


const showList = [barry, hh, howItsMade, invincible, sharkTank, theBoys, theOffice];

export default function Hobbies() {
    const [current, setCurrent] = useState(0);

    const nextShow = () => {
        setCurrent(current === showList.length - 1 ? 0 : current + 1);
    };

    const prevShow = () => {
        setCurrent(current === 0 ? showList.length - 1 : current - 1);
    };

    return (
        <div className='hobbies'>
            <h1 className='header-hobbies' >Hobbies & Interests</h1>
            <div>
                <div className='hi'>
                    <div className='hobbies-cont'>
                        <div className='hobby-img'>
                            <h2>Cycling</h2>
                            <img style={{ width:'7vw', height:'auto'}} src={BECycle} alt='cycling'/>
                        </div>
                        <div>
                            <h2>Running</h2>
                        </div>
                        <div className='hobby-img'>
                            <h2>Trying NEW Food</h2>
                            <img style={{ width:'5vw', height:'auto'}} src={BEEating} alt='eating'/>
                        </div>
                        <div>
                            <h2>Live Music</h2>
                        </div>
                    </div>
                    <div className='carousel-cont'>
                        <div className='button-cont'>
                            <button className='button-p' onClick={prevShow}></button>
                                <img style={{ width: '20vw', height: 'auto', overflow:'hidden'}} src={showList[current]} alt='Show' />
                            <button className='button-n' onClick={nextShow}></button>
                        </div>
                        <h1>my favorite shows</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
