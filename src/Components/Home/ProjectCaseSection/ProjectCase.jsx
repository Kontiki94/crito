import React from 'react';
import './ProjectCase.css';
import SectionTitle from '../../Generics/SectionTitle';
import man_newspaper from '../../../assets/images/man-with-newspaper.png';
import tablet_smartwatch from '../../../assets/images/tablet-glasses.png';
import office_supplies from '../../../assets/images/notebook.png';
import laptop from '../../../assets/images/laptop.png';
import ProjectCaseBox from './ProjectCaseBox';
import Button from '../../Generics/Button';

const ProjectCase = () => {
    const articles = [
        { img: man_newspaper, alt: "Man holding newspaper", title: "Grow your business", description: "Read more", icon: "fa-regular fa-arrow-up-right", url: "/grow-business" },
        { img: tablet_smartwatch, alt: "Apple tablet and smartwatch", title: "Why your client needs a responsive website", description: "Read more", icon: "fa-regular fa-arrow-up-right", url: "/responsive" },
        { img: office_supplies, alt: "Office supplies", title: "Educate your employees to get better results", description: "Read more", icon: "fa-regular fa-arrow-up-right", url: "/educate" },
        { img: laptop, alt: "Laptop on a desk with business program", title: "Business insights is an important piece of your business", description: "Read more", icon: "fa-regular fa-arrow-up-right", url: "/business-insights" }
    ]

    return (
        <div className="project-and-case">
            <div className="container">
                <SectionTitle title="Project & Case Studies" description="Let's look at our global projects" />
                <div className="project-and-cases-grid">
                    {
                        articles.map((article, index) => (
                            <ProjectCaseBox key={index} img={article.img} alt={article.alt} title={article.title} description={article.description} icon={article.icon} url={article.url} />
                        ))
                    }
                </div>
                <div className="center-content">
                    <Button url="/recent-projects" title="All recent projects" />
                </div>
            </div>
        </div>
    );
}

export default ProjectCase;