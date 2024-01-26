import Carousel from 'react-multi-carousel';
import './CSS/aboutMe.css'
import barry from "../assets/shows/Barry.jpeg"
import hh from "../assets/shows/HouseHunters.jpeg"
import howItsMade from "../assets/shows/HowItsMade.jpg"
import invincible from "../assets/shows/Invincible.jpg"
import sharkTank from "../assets/shows/SharkTank.jpg"
import theBoys from "../assets/shows/TheBoys.jpg.webp"
import theOffice from "../assets/shows/TheOffice.jpg"


export default function Hobbies() {

    const myShows = [
        <div><img src={barry} alt='Barry'/></div>,
        <div><img src={hh} alt='house hunters'/></div>,
        <div><img src={howItsMade} alt='how its made'/></div>,
        <div><img src={invincible} alt='invincble'/></div>,
        <div><img src={sharkTank} alt='shark tank'/></div>,
        <div><img src={theBoys} alt='the boys'/></div>,
        <div><img src={theOffice} alt='the office'/></div>,
    ]

    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        },
    };

    return (
        <div className='intrests'>

            <div className='hobbies'>

            </div>

            <div className='show-car'>
                <p>
                    When I'm not coding or cycling, I like to watch these shows:
                </p>
                <div>
                    <Carousel responsive={responsive} infinite={true} className = "carousel">{myShows}</Carousel>
                </div>
            </div>


        </div>

    );
}