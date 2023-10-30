import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import '../../App.css';
import Footer from '../Footer/Footer';

const NotFound = () => {
  return (
    <>
      <div class="wrapper-grid">
        <Link to="/" className="btn-black">Take me back!</Link>
        <i class="fa-regular fa-face-frown page"></i>
        <p>404 Page not found</p>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;