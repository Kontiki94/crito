import React from 'react';
import './AboutCompany.css';
import samantha_picture from '../../../assets/images/founder-walking-in-hallway.png';
import penstroke from '../../../assets/images/samantha-line.svg';
import Button from '../../Generics/Button';


const AboutCompany = () => {
    return (
        <div className="container about-company">
            <div className="founder">
                <img src={samantha_picture} className="samantha-picture" alt="founder walking in hallway" />
                <img src={penstroke} className="penstroke" alt="penstroke line for samantha" />
                <div className="founder-info">
                    <h3>Samantha Brown,<span> Founder</span></h3>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="about-company-text">
                <div className="title">
                    <p>About Company</p>
                    <h3>We Are Business Consulting & Credit Repair Experts</h3>
                </div>
                <div className="bodytext-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                </div>
                <div className="bodytext-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                </div>
                <div className="buttons">
                    <Button href="/about-company" title="Learn More" />
                    <a href="#" className="intro-video"><i className="fa-thin fa-circle-play"></i> <span> Intro Video</span></a>
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;