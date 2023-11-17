import React from 'react';
import background_lines from '../../../assets/images/background-wavy-lines.svg';
import './NewsLetter.css';
import Button from '../Button';

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <img className="background-wavy-lines" src={background_lines} alt="penstrokes" />
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form>
                    <input type="text" placeholder="username@domain.com" />
                    <Button type="yellow" title="Subscribe"/>
                </form>
            </div>
        </div>
    );
}

export default NewsLetter;