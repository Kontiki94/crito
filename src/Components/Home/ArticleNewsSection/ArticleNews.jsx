import React from 'react';
import './ArticleNews.css';
import { useState, useEffect } from 'react';
import ArticleNewsBox from './ArticleNewsBox';
import Button from '../../Generics/Button';
import SectionTitle from '../../Generics/SectionTitle';
import { useArticles } from '../../../Contexts/ArticleContext';

const ArticleNews = () => {
    const { threeArticles, getThreeArticles } = useArticles();

    useEffect(() => {
            getThreeArticles(3);
    }, [])

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
                        threeArticles.map((article) => (
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

