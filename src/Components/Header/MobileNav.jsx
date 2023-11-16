import React from 'react';
import './MobileNav.css';
import { NavLink } from 'react-router-dom';


const MobileNav = () => {

    return (
        <div className="nav-menu">
            <nav className="menu-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>
        </div>
    );
}

export default MobileNav;