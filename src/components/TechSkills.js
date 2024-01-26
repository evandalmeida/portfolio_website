import js from '../assets/icons/icons8-javascript.svg'
import react from '../assets/icons/react.svg'
import tailwind from '../assets/icons/tailwind.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import python from '../assets/icons/python.svg'
import flask from '../assets/icons/flask.svg'
import git from '../assets/icons/git.svg'
import sql from '../assets/icons/sql.png'
import json from '../assets/icons/json-web-token.svg'
import vsCode from '../assets/icons/vscode.svg'
import mac from '../assets/icons/macos.svg'

import "./CSS/aboutMe.css"


export default function TechSkills() {

    return (
        <div className='tech-skills-cont'>
            <div>
                <h1 className='header-tech-skills' >Techincal Skills</h1>
            </div>

            <div className='all-skills-cont'>
                <div className='tech-skills-heading'>
                    <h2>Front-End</h2>
                    <table className='skills-table'>     
                        <tbody>
                            <tr>
                                <td>
                                    <div className="skill-box">
                                        <img src={js} alt="javascript" />
                                        <p className="skill-name">JavaScript</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="skill-box">
                                        <img src={react} alt="React"/>
                                        <p className="skill-name">React</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="spec-box">
                                        <img src={tailwind} alt="tailwind"/>
                                        <p className="skill-name">Tailwind</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="spec-box">
                                        <img src={bootstrap} alt="bootstrap"/>
                                        <p className="skill-name">Bootstrap</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="skill-box">
                                        <img src={html} alt="html"/>
                                        <p className="skill-name">HTML 5</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="skill-box">
                                        <img src={css} alt="css"/>
                                        <p className="skill-name">CSS 3 </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='tech-skills-heading'>
                    <h2>Back-End</h2>
                    <table className='skills-table'>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="skill-box">
                                        <img src={python} alt="python"/>
                                        <p className="skill-name">Python</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="spec-box">
                                        <img src={flask} alt="Flask"/>
                                        <p className="skill-name">Flask</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="skill-box">
                                        <img src={sql} alt="SQL"/>
                                        <p className="skill-name">SQL</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        
            
                <div className='tech-skills-heading'>
                    <h2>Developemntal Skills</h2>

                    <table >
                        <tbody>
                            <tr>
                                <td>
                                    <div className="tool-box">
                                        <img src={git} alt="git"/>
                                        <p className="skill-name">Git</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="tool-box">
                                        <img src={json} alt="JWT"/>
                                        <p className="skill-name">JSON Web Token</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tool-box">
                                        <img src={vsCode} alt="vsCode"/>
                                        <p className="skill-name">Visual Studio Code</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="tool-box">
                                        <img src={mac} alt="macOS"/>
                                        <p className="skill-name">MacOS</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};