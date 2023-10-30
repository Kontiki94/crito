import React from 'react';

const Button = ({type, url, title}) => {

    function getButtonClassName () {
        switch(type) {
            case 'yellow':
                return 'btn-yellow';
            case 'transparent':
                return 'btn-transparent';
            default:
                return 'btn-black';
        }
    }


    return (
        <a className={getButtonClassName()} href={url}>
            {title}
            <i className="fa-regular fa-arrow-up-right"></i>
        </a>
    );
}

export default Button;