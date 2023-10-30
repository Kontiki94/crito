import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import NewsLetter from '../Components/Generics/NewsLetterSection/NewsLetter';
import ArticlesSection from '../Components/News/ArticlesSection';
import ArticlesShowcase from '../Components/News/ArticlesShowcase';

const News = () => {
  return (
    <>
      <Header />
      <ArticlesShowcase />
      <ArticlesSection />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default News;