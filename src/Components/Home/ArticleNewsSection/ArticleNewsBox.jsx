import React from 'react';
import { Link } from 'react-router-dom';
import formatPublishedDate from '../../Generics/FormatDate';

const ArticleNewsBox = ({ img, title, description, text, id, published }) => {
    const formattedDate = formatPublishedDate(published);
    return (
        <Link to={`/news/${id}`} className="article">
            <div className="img-holder">
                <img src={img} alt="" />
                <div className="banner">{formattedDate}</div>
            </div>
            <div className="text-holder">
                <p>{title}</p>
                <h3>{description}</h3>
                <p>{text}</p>
            </div>
        </Link>
    );
}

export default ArticleNewsBox;

