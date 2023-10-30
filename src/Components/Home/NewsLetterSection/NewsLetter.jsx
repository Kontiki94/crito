import React from 'react';
import background_lines from '../../../assets/images/background-wavy-lines.svg';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <img className="background-wavy-lines" src={background_lines} alt="penstrokes" />
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form>
                    <input type="text" placeholder="username@domain.com" />
                    <button className="btn-yellow">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </div>
    );
}

export default NewsLetter;