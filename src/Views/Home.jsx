import React from 'react';
import AboutCompany from '../Components/Home/AboutCompanySection/AboutCompany';
import ArticleNews from '../Components/Home/ArticleNewsSection/ArticleNews';
import Brands from '../Components/Home/BrandSection/Brands';
import Features from '../Components/Home/FeatureSection/Features';
import NewsLetter from '../Components/Home/NewsLetterSection/NewsLetter';
import OurServices from '../Components/Home/OurServicesSection/OurServices';
import ProjectCase from '../Components/Home/ProjectCaseSection/ProjectCase';
import ShowcaseSection from '../Components/Home/ShowcaseSection/ShowcaseSection';
import Team from '../Components/Home/TeamSection/Team';
import Testimonial from '../Components/Home/TestimonialSection/Testimonial';
import WhyUs from '../Components/Home/WhyUsSection/WhyUs';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <ShowcaseSection />
      <Brands />
      <Features />
      <AboutCompany />
      <OurServices />
      <WhyUs />
      <ProjectCase />
      <Team />
      <Testimonial />
      <ArticleNews />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;