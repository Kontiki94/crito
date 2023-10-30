import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div class="forms">
            <div class="container">
                <form action="#" method="post" >
                    <div class="title">
                        <h2>Leave us a message</h2>
                        <h2> for any information.</h2>
                    </div>
                    <input type="text" id="name" placeholder="Name*" name="name" title="Enter your name" required autocomplete="off" tabindex="1" />
                    <input type="email" id="email" placeholder="Email*" name="email" title="Enter your email" required autocomplete="off" tabindex="2" />
                    <textarea class="textarea" id="message" placeholder="Enter Your Message*" name="message" title="Your message" required autocomplete="off" tabindex="3"></textarea>
                    <button type="submit" class="btn-yellow" title="Submit the form" tabindex="4">Send Message<i class="fa-solid fa-arrow-up-right"></i></button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;