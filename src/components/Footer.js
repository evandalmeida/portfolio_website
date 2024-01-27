import React, { useRef, useState } from 'react';
import "./CSS/footer.css"

import emailjs from '@emailjs/browser';
import MsgModal from './MsgModal';

import linkedin from '../assets/icons/linkedinlogo.png'
import github from '../assets/icons/githublogo.png'



export default function Footer ({scrollToTop}) {
    const form = useRef();
    const [show, setShow] = useState(false);

    const serviceKey = process.env.REACT_APP_PUBLIC_KEY;
    const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
    const id = process.env.REACT_APP_ID;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceKey, templateKey, form.current, id)
        .then((result) => {
            console.log(result.text);
            setShow(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='footer-cont'>
            <div className='block'></div>
            <div className="footer">
                <div id='footer-main-div' className="form-container">
                    <h2 className="footer-header">SEND ME AN EMAIL TO GET IN TOUCH</h2>
                    <form className="form"ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Plese enter your name" />
                        <input type="email" name="user_email" placeholder="Please enter your email"/>
                        <textarea name="message"placeholder="Write your email here :)"/>
                        <input className='submit' type="submit" value="SEND" />
                    </form>
                    <div className="logos-container">
                        <h3> Check these out too: </h3>
                        <a href="https://github.com/evandalmeida">
                            <img className="github-logo" src={github} alt="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/evan-d-almeida/">
                            <img className="linkedin-logo" src={linkedin} alt="linkedin"/>
                        </a>
                    </div>
                </div>
            </div>
                <MsgModal show={show} onHide={() => setShow(false)} /> 
            <button className='top' onClick={scrollToTop}> BACK TO THE TOP </button>
        </div>
    );
};