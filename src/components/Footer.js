import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MsgModal from './MsgModal';
import linkedin from '../assets/icons/linkedinlogo.png'
import github from '../assets/icons/githublogo.png'
import "./CSS/footer.css"

const Footer = () => {
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
        <div className="footer">
            <div className="form-container">
                <h2 className="header">SEND ME AN EMAIL TO GET IN TOUCH</h2>
                <form className="form"ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Plese enter your name" />

                    <input type="email" name="user_email" placeholder="Please enter your email"/>

                    <textarea name="message"placeholder="Write your emaail here :)"/>

                    <input type="submit" value="SEND" />

                </form>

                <div className="logos-container">
                    <h3> Check these out too: </h3>
                    <a href="https://www.linkedin.com/in/evan-d-almeida/" target="_blank">
                        <img className="linkedin-logo" src={linkedin} alt="linkedin"/>
                    </a>
                    <a href="https://github.com/evandalmeida"  target="_blank">
                        <img className="github-logo" src={github} alt="github"/>
                    </a>
                </div>
            
            </div>
            <MsgModal show={show} onHide={() => setShow(false)} /> 
        </div>
    );
};

export default Footer;