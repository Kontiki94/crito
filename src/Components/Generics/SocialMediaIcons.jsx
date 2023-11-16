import React from 'react';

const SocialMediaIcons = ({ url, icon }) => {
    return (
        <a href={url} target="_blank">
            <i className={icon}></i>
        </a>
    );
}

export default SocialMediaIcons;