import React from 'react';
import './Team.css';
import kristine from '../../../assets/images/kristine-palmer.png';
import mark from '../../../assets/images/mark-aubri.png';
import kimberly from '../../../assets/images/kimberly-hansen.png';
import justin from '../../../assets/images/justin-willoman.png';
import TeamBox from './TeamBox';
import SectionTitle from '../../Generics/SectionTitle';
import Button from '../../Generics/Button';

const Team = () => {
    const members = [
        { img: kristine, name: "Kristine Palmer", title: "Chief Operation Officer" },
        { img: mark, name: "Mark Aubri", title: "Senior Consultant" },
        { img: kimberly, name: "Kimberly Hansen", title: "Senior Consultant" },
        { img: justin, name: "Justin Willoman", title: "Senior Tech Consultant" }
    ]

    return (
        <div className="meet-team">
            <div className="container">
                <div className="top">
                    <SectionTitle title="Meet Our Team" description="Experience Team Members" />
                    <Button url="/browse-team" type="yellow" title="Browse Team" />
                </div>
                <div className="team-members">
                    {
                        members.map((member, index) => (
                            <TeamBox key={index} img={member.img} name={member.name} title={member.title} />
                        ))
                    }
                </div>
                <div className="nav-dots">
                    <div className="chev"><i className="fa-solid fa-chevron-left"></i></div>
                    <div className="page-dots">
                        <div className="dot-1"><i className="fa-solid fa-circle"></i></div>
                        <div className="dot-2"><i className="dot-2 fa-solid fa-circle"></i></div>
                        <div className="dot-3"><i className="fa-solid fa-circle"></i></div>
                        <div className="dot-4"><i className="fa-solid fa-circle"></i></div>
                        <div className="dot-5"><i className="fa-solid fa-circle"></i></div>
                    </div>
                    <div className="chev"><i className="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    );
}

export default Team;