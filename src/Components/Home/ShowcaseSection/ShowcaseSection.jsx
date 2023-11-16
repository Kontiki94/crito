import React from 'react';
import img_backgroundlines from '../../../assets/images/background-lines.svg';
import man_tablet from '../../../assets/images/man_with_tablet.svg';
import Button from '../../Generics/Button';
import './ShowcaseSection.css';


const ShowcaseSection = () => {
    return (
        <section className='showcase-section'>
            <div className="showcase">
                <img className="penstroke-showcase" src={img_backgroundlines} alt="penstrokes" />
                <div className="container">
                    <div className="contents">
                        <h1>We Provide The Best Business Solutions</h1>
                        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                        <Button type="yellow" title="Get Consulting" url="/services/get-consulting" />
                        <Button type="transparent" title="Learn More" url="/services/learn-more" />
                    </div>
                    <img src={man_tablet} alt="showcase image of a man with tablet" />
                </div>
            </div>
        </section>
    );
}

export default ShowcaseSection;