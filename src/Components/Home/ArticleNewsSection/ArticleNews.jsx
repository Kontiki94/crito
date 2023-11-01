import React from 'react';
import './ArticleNews.css';
import { useState, useEffect } from 'react';
import ArticleNewsBox from './ArticleNewsBox';
import digitalisation from '../../../assets/images/digitalisation.png';
import chat_gtp from '../../../assets/images/chat-gtp.png';
import css_guide from '../../../assets/images/css-guide.png';
import Button from '../../Generics/Button';
import SectionTitle from '../../Generics/SectionTitle';

const ArticleNews = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles();
    }, [])

    const getArticles = async () => {
        try {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=3');
            setArticles(await result.json());
        }
        catch {
            console.error('Could not fetch article');
        }
    }

    return (
        <div className="articles-news">
            <div className="container">
                <div className="top">
                        <SectionTitle title="Articles & News" description="Get Every Single Article & News" />
                    <div className="center-content">
                        <Button type="transparent" title="Browse Articles" url="/news" />
                    </div>
                </div>
                <div className="news">
                    {
                        articles.map((article) => (
                            <ArticleNewsBox key={article.id} id={article.id} title={article.category} description={article.title} text={article.content} img={article.imageUrl} />
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