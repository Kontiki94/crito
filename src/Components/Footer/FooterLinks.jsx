import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = ({title, links}) => {
    return (
        <div className="info-row">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="links">
                {
                    links.map((link, index) => (
                        <Link to={link.url} key={index}>{link.text}</Link>
                    ))
                }
            </div>
        </div>
    );
}

export default FooterLinks;