import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="forms">
            <div className="container">
                <form action="#" method="post" >
                    <div className="title">
                        <h2>Leave us a message</h2>
                        <h2> for any information.</h2>
                    </div>
                    <input type="text" id="name" placeholder="Name*" name="name" title="Enter your name" required autoComplete="off" tabIndex="1" />
                    <input type="email" id="email" placeholder="Email*" name="email" title="Enter your email" required autoComplete="off" tabIndex="2" />
                    <textarea className="textarea" id="message" placeholder="Enter Your Message*" name="message" title="Your message" required autoComplete="off" tabIndex="3"></textarea>
                    <button type="submit" className="btn-yellow" title="Submit the form" tabIndex="4">Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;