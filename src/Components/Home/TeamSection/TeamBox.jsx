import React from 'react';

const TeamBox = ({ img, name, title }) => {
    return (
        <div className="member">
            <img src={img} alt="" />
            <div className="member-info">
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default TeamBox;