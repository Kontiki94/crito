import React from 'react';
import './WhyUs.css';
import WhyUsBox from './WhyUsBox';
import women_talking from '../../../assets/images/two-women-meeting.png';
import SectionTitle from '../../Generics/SectionTitle';

const WhyUs = () => {
    const skills = [
        { icon: "fa-light fa-thumbs-up", title: "Process Excellence", text: "Lorem, ipsum dolor sit amet consectetur." },
        { icon: "fa-solid fa-brain", title: "Strategic Planning", text: "Lorem, ipsum dolor sit amet consectetur." },
        { icon: "fa-light fa-pen-nib", title: "Experience Design", text: "Lorem, ipsum dolor sit amet consectetur." },
        { icon: "fa-regular fa-head-side-gear", title: "Artifical Intelligence", text: "Lorem, ipsum dolor sit amet consectetur." },
    ]

    return (
        <div className="why-us">
            <div className="background-block"></div>
            <div className="container">
                <div className="right">
                    <img src={women_talking} alt="two women talking to eachother" />
                </div>
                <div className="left">
                    <SectionTitle title="Why Choose us" description="Why We Are The Best Business Consulting Agency" />
                    <div className="strengths">
                        {
                            skills.map((skill, index) => (
                                <WhyUsBox key={index} icon={skill.icon} title={skill.title} text={skill.text} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;