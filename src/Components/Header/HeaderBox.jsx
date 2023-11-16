import React from 'react'

const HeaderBox = ({ icon, info }) => {
    return (
        <div className="content-box">
            <i className={icon}></i>
            {info}
        </div>
    );
}

export default HeaderBox;