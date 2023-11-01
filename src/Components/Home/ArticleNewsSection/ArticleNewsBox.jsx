import React from 'react';
import { Link } from 'react-router-dom';

const ArticleNewsBox = ({img, title, description, text, id}) => {
    return (
        <Link to={`/news/${id}`} className="article">
            <img src={img} alt="" />
            <p>{title}</p>
            <h3>{description}</h3>
            <p>{text}</p>
        </Link>
    );
}

export default ArticleNewsBox;

