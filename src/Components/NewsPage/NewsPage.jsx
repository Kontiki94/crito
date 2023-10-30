import React from 'react';
import './NewsPage.css';
import digitalisation from '../../assets/images/digitalisation-news.jpg';
import Button from '../Generics/Button';


const NewsDetails = () => {
  return (
    <div className="article-page">
      <div className="container ">
        <div className="left-side">
          <div className="title">
            <h1>How To Use Digitalization In The Classroom</h1>
            <p>date start title star author</p>
          </div>
          <img src={digitalisation} />
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
            <button className="btn">ajsdfa</button>
            <button className="btn">asdfasdf</button>
            <button className="btn">E</button>
            <button className="btn">dasd</button>
            <button className="btn">adsf</button>
            <button className="btn">asdfadsf</button>
          </div>
        </div>
        <div className="right-side">
          <div className="searchbar">
            <input type="text" placeholder="Type to search..." title="Search article" autoComplete="off" tabIndex="1" />
          </div>
          <div className="recent-posts">
            <div className="title">
              <h3>Recent Posts</h3>
            </div>
            <div className="article">
              <h3>asdfasdfasdfasdfasdf</h3>
              <p>jan 14, 2023</p>
            </div>
            <div className="article">
              <h3>asdfasdfasdfasdfasdf</h3>
              <p>jan 14, 2023</p>
            </div>
            <div className="article">
              <h3>asdfasdfasdfasdfasdf</h3>
              <p>jan 14, 2023</p>
            </div>
            <div className="article">
              <h3>asdfasdfasdfasdfasdf</h3>
              <p>jan 14, 2023</p>
            </div>
          </div>
          <div className="categories">

          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;