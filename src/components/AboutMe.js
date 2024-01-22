import pictureOfMe from '../assets/linkedin.jpg'

export default function AboutMe () {

    return (
        <>
            <img className="profile-pic" src={pictureOfMe} alt='profile'/>
            <div className='who-am-i'>
                <h2>Who am I?</h2>
                <span>
                    Hello, my is Evan D'almeida, and I am thrilled to share my portfolio with you. As a dedicated software engineer, my passion lies in collaborating with teams to design and develop innovative solutions that address key business challenges. My expertise lies in designing and developing robust solutions by leveraging my strong skills in JavaScript and Python. This portfolio is a showcase of not just my technical abilities, but also my journey in the tech industry. I invite you to explore my portfolio and get to know more about me.
                </span>
            </div>
            <div>
                <h2>Techincal Skills</h2>
            </div>
            <div>
                <h2>Soft Skills</h2>
            </div>
            <div>
                <h2>Education</h2>
            </div>
            <div>
                <h2>Work Experience</h2>
            </div>
            <div>
                <h2>Hobbies</h2>
            </div>
        </>
    )
}