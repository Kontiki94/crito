import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ArticleNews from '../Components/Home/ArticleNewsSection/ArticleNews';
import NewsPage from '../Components/NewsPage/NewsPage';
import ArticleShowcase from '../Components/News/ArticlesShowcase';

const NewsDetails = () => {
  return (
    <>
      <Header />
      <ArticleShowcase />
      <NewsPage />
      <ArticleNews />
      <Footer />
    </>
  )
}

export default NewsDetails