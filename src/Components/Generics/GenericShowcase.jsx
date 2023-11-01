import React from 'react';
import {NavLink} from 'react-router-dom';
import './GenericShowcase.css';
import img_backgroundlines from '../../assets/images/background-lines.svg';

const GenericShowcase = ({url, pageTitle, title}) => {
    return (
        <div className="showcase">
            <div className="penstroke-showcase">
                <img src={img_backgroundlines} alt="penstrokes" />
            </div>
            <div className="container">
                <div className="content">
                    <div className="nav-links">
                        <NavLink className="links" to="/">Home</NavLink>
                        <NavLink className="links" to={url}>{pageTitle}</NavLink>
                    </div>
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenericShowcase;