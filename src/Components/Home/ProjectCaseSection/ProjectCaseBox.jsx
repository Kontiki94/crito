import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCaseBox = ({ img, alt, title, description, icon, url }) => {
    return (
        <Link className="project" to={url}>
            <img src={img} alt={alt} />
            <h3>{title}</h3>
            <div className="readmore">{description} <i className={icon}></i></div>
        </Link>
    );
}

export default ProjectCaseBox;