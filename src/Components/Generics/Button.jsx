import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ type, url, title }) => {

    function getButtonClassName() {
        switch (type) {
            case 'yellow':
                return 'btn-yellow';
            case 'transparent':
                return 'btn-transparent';
            default:
                return 'btn-black';
        }
    }


    return (
        <Link className={getButtonClassName()} to={url}>
            {title}
            <i className="fa-regular fa-arrow-up-right"></i>
        </Link>
    );
}

export default Button;