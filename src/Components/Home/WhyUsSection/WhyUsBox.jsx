import React from 'react';

const WhyUsBox = ({ icon, title, text }) => {
    return (
        <div className="info-text">
            <div className="icon">
                <i className={icon}></i>
            </div>
            <div className="text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default WhyUsBox;