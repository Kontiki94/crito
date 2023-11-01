import React, { useEffect, useState } from 'react'
import './ArticlesSection.css';
import ArticleNewsBox from '../Home/ArticleNewsSection/ArticleNewsBox';

const ArticlesSection = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles();
    }, [])

    const getArticles = async () => {
        try {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
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
                    <div className="section-title">
                        <h2>Our News And Articles</h2>
                    </div>
                </div>
                <div className="news">
                    {
                        articles.map((article) => (
                            <ArticleNewsBox key={article.id} id={article.id} title={article.category} description={article.title} text={article.content} img={article.imageUrl} />
                        ))
                    }
                </div>
                <div className="nav-pages">
                    <div className="page-numbers">
                        <div className="page"><i className="fa-solid fa-chevron-left"></i></div>
                        <div className="page">1</div>
                        <div className="page">2</div>
                        <div className="page">3</div>
                        <div className="page">...</div>
                        <div className="page">9</div>
                        <div className="page"><i className="fa-solid fa-chevron-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticlesSection;