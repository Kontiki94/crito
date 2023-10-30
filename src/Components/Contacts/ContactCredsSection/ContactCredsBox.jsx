import React from 'react';

const ContactCredsBox = ({ icon, title, rowOne, rowTwo }) => {
    return (
        <div className="information">
            <div className="icon">
                <i className={icon}></i>
            </div>
            <div className="info-text">
                <h3>{title}</h3>
                <p>{rowOne}</p>
                <p>{rowTwo}</p>
            </div>
        </div>
    );
}

export default ContactCredsBox;