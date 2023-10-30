import React from 'react';
import './ArticleNews.css';
import ArticleNewsBox from './ArticleNewsBox';
import digitalisation from '../../../assets/images/digitalisation.png';
import chat_gtp from '../../../assets/images/chat-gtp.png';
import css_guide from '../../../assets/images/css-guide.png';

const ArticleNews = () => {
    const articles = [
        {img:digitalisation, title:"Business", description:"How To Use Digitalization In The classNameroom", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img:chat_gtp, title:"Business", description:"How To Implement Chat GPT In Your Projects", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {img:css_guide, title:"Business", description:"The Guide To Support Modern CSS Design", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
    ]

    return (
        <div className="articles-news">
            <div className="container">
                <div className="top">
                    <div className="section-title">
                        <p>Articles & News</p>
                        <h2>Get Every Single Article & News</h2>
                    </div>
                    <div className="center-content">
                        <a href="#" className="btn-transparent">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
                <div className="news">
                    {
                        articles.map((article, index) => (
                            <ArticleNewsBox key={index} img={article.img} title={article.title} description={article.description} text={article.text} />
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

export default ArticleNews;