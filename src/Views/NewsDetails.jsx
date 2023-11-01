import React from 'react';
import '../App.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ArticleNews from '../Components/Home/ArticleNewsSection/ArticleNews';
import NewsPage from '../Components/NewsPage/NewsPage';
import ArticleShowcase from '../Components/News/ArticlesShowcase';

const NewsDetails = () => {
  return (
    <>
      <Header />
      <ArticleShowcase />
      <NewsPage />
      <div className="color">
        <ArticleNews />
      </div>
      <Footer />
    </>
  );
}

export default NewsDetails;