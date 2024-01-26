import React, { useState} from 'react';
import './CSS/aboutMe.css'

// SHOWS
import barry from "../assets/shows/Barry.jpg"
import hh from "../assets/shows/HouseHunters.jpg"
import howItsMade from "../assets/shows/HowItsMade.jpg"
import invincible from "../assets/shows/Invincible.jpg"
import sharkTank from "../assets/shows/SharkTank.jpg"
import theBoys from "../assets/shows/TheBoys.jpg.png"
import theOffice from "../assets/shows/TheOffice.jpg"
import BECycle from "../assets/ME/BE-cycling.PNG"
import BEEating from "../assets/ME/BE-eating.png"



const showList = [theBoys, barry, hh, howItsMade, invincible, sharkTank, theOffice];

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
            <div className='carousel-cont'>
                <h1 className='header-shows' >Favorite Shows</h1>
                <div className='button-cont'>
                    <button className='button-p' onClick={prevShow}></button>
                        <img style={{ width: '13vw', height: 'auto', overflow:'hidden'}} src={showList[current]} alt='Show' />
                    <button className='button-n' onClick={nextShow}></button>
                </div>
            </div>
            <h1 className='header-hobbies'>Hobbies</h1>
            <div>
                <div className='hobbies-cont'>
                    <div className='hobby-img'>
                        <img style={{ width:'5vw', height:'auto'}} src={BECycle} alt='cycling'/>
                        <div className='running'>
                            <h2>Cycling</h2>
                            <h2>Running</h2>
                        </div>
                    </div>
                    <div className='hobby-img'>
                        <div className='music'>
                            <h2 className='live-music'>Live Music</h2>
                            <h2>Trying NEW Food</h2>
                        </div>
                        <img style={{ width:'5vw', height:'auto', padding:'1px 1px 1px 3px'}} src={BEEating} alt='eating'/>
                    </div>
                </div>
            </div>
        </div>
    );
};