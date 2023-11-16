import React from 'react';
import footer_lines from '../../assets/images/background-lines-white-right.svg';
import white_logo from '../../assets/images/logotype-white.svg';
import { socialMedias } from '../Header/Header';
import SocialMediaIcons from '../Generics/SocialMediaIcons';
import './Footer.css';
import FooterLinks from './FooterLinks';

const Footer = () => {

    const footerLinks = [
        {
            title: "Company",
            links:
                [
                    { text: "About", url: "/" },
                    { text: "Features", url: "/" },
                    { text: "Works", url: "/" },
                    { text: "Career", url: "/" },
                ]
        },
        {
            title: "Help",
            links:
                [
                    { text: "Customer Support", url: "/" },
                    { text: "Delivery Details", url: "/" },
                    { text: "Terms & Conditions", url: "/" },
                    { text: "Privacy Policy", url: "/" },
                ]
        },
        {
            title: "Resources",
            links:
                [
                    { text: "Free eBooks", url: "/" },
                    { text: "Development Tutorial", url: "/" },
                    { text: "How to - Blog", url: "/" },
                    { text: "Youtube Playlist", url: "/" },
                ]
        },
        {
            title: "Link",
            links:
                [
                    { text: "Free eBooks", url: "/" },
                    { text: "Development Tutorial", url: "/" },
                    { text: "How to - Blog", url: "/" },
                    { text: "Youtube Playlist", url: "/" },
                ]
        }
    ];

    return (
        <footer>
            <div className="footer-section">
                <div className="container">
                    <img src={footer_lines} className="penstrokes" alt="" />
                    <div className="left">
                        <div className="logo_crito">
                            <img src={white_logo} alt="" />
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                        </div>
                    </div>
                    <div className="info">
                        {
                            footerLinks.map((link, index) => (
                                <FooterLinks key={index} title={link.title} links={link.links} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="rights-socmedia">
                <div className="container">
                    <div className="rights">
                        <p><i className="fa-regular fa-copyright"></i> 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                    </div>
                    <div className="socialmedia">
                        {
                            socialMedias.map((media, index) => (
                                <SocialMediaIcons key={index} url={media.url} icon={media.icon} target="_blank" />
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;