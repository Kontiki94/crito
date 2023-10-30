import React from 'react';
import img_backgroundlines from '../../../assets/images/background-lines.svg';
import { NavLink } from 'react-router-dom';
import './ContactShowcase.css';

const ContactShowcase = () => {
    return (
        <div className="showcase">
            <div className="penstroke-showcase">
                <img src={img_backgroundlines} alt="penstrokes" />
            </div>
            <div className="container">
                <div className="content">
                    <div className="nav-links">
                        <NavLink className="links" to="/">Home</NavLink>
                        <NavLink className="links" to="/contacts">Contact</NavLink>
                    </div>
                    <div className="title">
                        <h1>Let's Connect</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactShowcase;