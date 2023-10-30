import React from 'react';
import { Link } from 'react-router-dom';


const ServiceBox = ({ title, description, url }) => {
    return (
        <div className="outer-box">
            <Link className="link-box" to={url}>
                <div className="box">
                    <div className="border-top"></div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="arrow">
                        <i className="fa-sharp fa-solid fa-circle-arrow-right"></i>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ServiceBox;