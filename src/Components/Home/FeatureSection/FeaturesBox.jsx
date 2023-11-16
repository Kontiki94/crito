import React from 'react';

const FeaturesBox = ({ icon, title, text }) => {
    return (
        <div>
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default FeaturesBox;