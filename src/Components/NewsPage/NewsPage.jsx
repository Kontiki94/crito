import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './NewsPage.css';

const NewsDetails = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getArticle();
  }, [id])

  const getArticle = async () => {
    if (id !== undefined) {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

      if (result.status === 200) {
        setArticle(await result.json());
      }
    }
  }

  return (
    <div className="article-page">
      <div className="container">
        <div className="left-side">
          <div className="title">
            <h1>{article.title}</h1>
            <p>{article.published} <i className="dot fa-solid fa-circle fa-2xs"></i> {article.category} <i className="dot fa-solid fa-circle fa-2xs"></i> {article.author}</p>
          </div>
          <img src={article.imageUrl} />
          <div className="bread-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium recusandae ducimus quos unde laborum iste, corrupti dicta, modi doloribus odit, quisquam consectetur quasi excepturi nam ullam est amet! Laborum, deserunt at?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas facere aliquam praesentium in magni odio, hic obcaecati necessitatibus ipsam numquam non quaerat. Aperiam nihil earum possimus. Aut fugit doloribus animi iure quis voluptas vero voluptatibus autem, minima modi similique aliquam reprehenderit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio debitis ad ut odio molestiae, animi, distinctio hic beatae asperiores architecto sed nemo pariatur qui. Molestiae dolore voluptatibus voluptate nobis ratione quos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in possimus eum iusto quis odit. Ipsa officia sapiente necessitatibus tempore numquam assumenda.</p>
            <div className="big-text">
              <p>"</p>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam itaque animi libero qui amet ad fugiat molestiae, veritatis hic atque officiis cupiditate voluptas fugit dolorem, dicta illum non!</h2>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam tempora fugit sequi est velit voluptate molestias soluta sed itaque ipsa exercitationem id eos, deserunt earum placeat? Recusandae atque sapiente voluptates nostrum aliquam!</p>
          </div>
          <div className="buttons">
            <button className="btn">Digitalization</button>
            <button className="btn">School</button>
            <button className="btn">IT</button>
            <button className="btn">Design</button>
            <button className="btn">Work</button>
            <button className="btn">Tech</button>
          </div>
        </div>
        <div className="right-side">
          <div className="searchbar">
            <input type="text" placeholder="Type to search..." title="Search article"/>
          </div>
          <div className="recent-posts">
            <div className="title">
              <h3>Recent Posts</h3>
            </div>
            <div className="article">
              <p className="description">How To Blow Through Capital at An Incredible Rate</p>
              <p>jan 14, 2020</p>
            </div>
            <div className="article">
              <p className="description">Design Studios That Everyone Should Know About?</p>
              <p>jan 14, 2020</p>
            </div>
            <div className="article">
              <p className="description">How did we get 1M+ visitors in 30 days without anything!</p>
              <p>jan 14, 2020</p>
            </div>
            <div className="article">
              <p className="description">Figma on Figma: How We Build Our Website Design System</p>
              <p>jan 14, 2020</p>
            </div>
          </div>
          <div className="categories">
            <h3>Categories</h3>
            <p>Technology - <span>20 posts</span></p>
            <p>Freelancing - <span>07 posts</span></p>
            <p>Writing - <span>16 posts</span></p>
            <p>Marketing - <span>11 posts</span></p>
            <p>Business - <span>35 posts</span></p>
            <p>Education - <span>14 posts</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;