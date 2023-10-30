import React from 'react';
import FeaturesBox from './FeaturesBox';
import SectionTitle from '../../Generics/SectionTitle';
import './Features.css';
import Button from '../../Generics/Button';

const Features = () => {
    const features = [
        {icon: "fa-light fa-handshake", title: "Business Advice", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        {icon: "fa-light fa-lightbulb-on", title: "Startup Business", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        {icon: "fa-solid fa-chart-mixed-up-circle-dollar", title: "Financial Advice", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        {icon: "fa-light fa-folder-gear", title: "Risk Management", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ]
    return (
        <div className="trust-us">
            <div className="container trust-us-box">
                <div className="title">
                    <SectionTitle title="Features" description="Our accounting is trusted by thousands of companies" />
                    <Button type="yellow" title="Learn More" url="/features" />
                </div>
                <div className="trust-us-grid">
                    {
                        features.map((feature, index) => (
                            <FeaturesBox key={index} icon={feature.icon} title={feature.title} text={feature.text} />
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Features;