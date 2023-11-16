import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import NavSectionBox from './HeaderBox';
import Button from '../Generics/Button';
import img_logotype from '../../assets/images/logo_crito.svg';
import SocialMediaIcons from '../Generics/SocialMediaIcons';
import MobileNav from './MobileNav';

export const socialMedias = [
    { url: "https://facebook.com", icon: "fa-brands fa-facebook" },
    { url: "https://twitter.com", icon: "fa-brands fa-x-twitter" },
    { url: "https://instagram.com", icon: "fa-brands fa-instagram" },
    { url: "https://linkedin.com", icon: "fa-brands fa-linkedin" }
];

const Header = () => {
    const contactMethods = [
        { icon: "fa-light fa-phone-volume", info: "+46 (8) 121 470 50" },
        { icon: "fa-light fa-envelope", info: "info@crito.com" },
        { icon: "fa-sharp fa-light fa-location-dot", info: "Sveavägen 31, 111 34 STOCKHOLM" }
    ];
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="nav-section">
            <div className="container">
                <Link to="/"><img src={img_logotype} alt="crito logotype" /></Link>
                {menuOpen ? (<MobileNav />) : <></>}
                <button onClick={() => setMenuOpen(!menuOpen)} className="menu-bars">
                    {!menuOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
                </button>
                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            {
                                contactMethods.map((contact, index) => (
                                    <NavSectionBox key={index} icon={contact.icon} info={contact.info} />
                                ))
                            }
                        </div>
                        <div className="socialmedia">
                            {
                                socialMedias.map((media, index) => (
                                    <SocialMediaIcons key={index} url={media.url} target="_blank" icon={media.icon} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="main-menu">
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contacts">Contacts</NavLink>
                        </nav>
                        <div className="btn-login">
                            <Button type="yellow" title="Login" url="/services/login" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;