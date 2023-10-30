import React from 'react';
import ServiceBox from './ServiceBox';
import './OurServices.css';
import SectionTitle from '../../Generics/SectionTitle';
import Button from '../../Generics/Button';
import img_backgroundlines_right from '../../../assets/images/background-lines-right.svg';

const OurServices = () => {

    const services = [
        {title:"Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/business-advice"},
        {title:"Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/start-up-business"},
        {title:"Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/financial-advice"},
        {title:"Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/risk-management"}
    ]

    return (
        <section>
            <div className="our-services">
                <div className="container">
                    <div className="penstroke">
                        <img src={img_backgroundlines_right} alt="penstrokes" />
                    </div>
                    <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting"/>
                    <div className="services">
                        {
                            services.map((service, index) => (
                                <ServiceBox key={index} title={service.title} description={service.description} url={service.url} />
                            )) 
                        }
                    </div>
                    <div className="center-content">
                        <Button type="transparent" title="Browse Services" url="/services" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
