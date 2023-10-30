import React from 'react';
import './ContactShowcase.css';
import GenericShowcase from '../../Generics/GenericShowcase';

const ContactShowcase = () => {
    const pages = [
        {url:"/contacts", pageTitle:"Contact", title:"Let's Connect"}
    ]

    return (
        <div className="showcase">
                    {
                        pages.map((page, index) => (
                            <GenericShowcase key={index} url={page.url} pageTitle={page.pageTitle} title={page.title} />
                        ))
                    }
        </div>
    );
}

export default ContactShowcase;