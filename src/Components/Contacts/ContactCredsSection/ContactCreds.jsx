import React from 'react';
import ContactCredsBox from './ContactCredsBox';
import './ContactCreds.css';

const ContactCreds = () => {
    const contactMethods = [
        { icon: "fa-solid fa-circle-location-arrow", title: "Visit us", rowOne: "Sveavägen 31", rowTwo: "111 34 STOCKHOLM" },
        { icon: "fa-solid fa-circle-phone", title: "Call Us", rowOne: "+46 (8) 121 470 50", rowTwo: "+46 (8) 121 470 51" },
        { icon: "fa-sharp fa-solid fa-circle-envelope", title: "Email Us", rowOne: "info@crito.com", rowTwo: "support@crito.com" }
    ];

    return (
        <div className="connect">
            <div className="container">
                {
                    contactMethods.map((contactMethod, index) => (
                        <ContactCredsBox key={index} icon={contactMethod.icon} title={contactMethod.title} rowOne={contactMethod.rowOne} rowTwo={contactMethod.rowTwo} />
                    ))
                }
            </div>
        </div>
    );
}

export default ContactCreds;