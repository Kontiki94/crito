import React from 'react';
import GenericShowcase from '../Generics/GenericShowcase';

const ArticlesShowcase = () => {
    const newsPages = [
        { url: "/news", pageTitle: "News", title: "News & Articles" }
    ]
    return (
        newsPages.map((page, index) => (
            <GenericShowcase key={index} url={page.url} pageTitle={page.pageTitle} title={page.title} />
        ))
    );
}

export default ArticlesShowcase;