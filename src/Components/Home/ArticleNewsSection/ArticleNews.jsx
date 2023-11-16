import React from 'react';
import './ArticleNews.css';
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from 'react';
import { useArticles } from '../../../Contexts/ArticleContext';
import ArticleNewsBox from './ArticleNewsBox';
import Button from '../../Generics/Button';
import SectionTitle from '../../Generics/SectionTitle';
import Carousel from 'react-multi-carousel';

const ArticleNews = () => {
    const { multipleArticles, getMultipleArticles } = useArticles();

    useEffect(() => {
        getMultipleArticles(6);
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    }

    return (
        <div className="articles-news">
            <div className="container">
                <div className="top">
                    <SectionTitle title="Articles & News" description="Get Every Single Article & News" />
                    <div className="center-content">
                        <Button className="btn-browse" type="transparent" title="Browse Articles" url="/news" />
                    </div>
                </div>
                <div>
                    <Carousel
                        itemClass="news carousel"
                        responsive={responsive}
                        removeArrowOnDeviceType={["mobile"]}
                    >
                        {
                            multipleArticles.map((article) => (
                                <ArticleNewsBox key={article.id} id={article.id} published={article.published} title={article.category} description={article.title} text={article.content} img={article.imageUrl} />
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default ArticleNews;

