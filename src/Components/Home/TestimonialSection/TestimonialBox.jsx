import React from 'react';

const TestimonialBox = ({ rating, review, img, name, title }) => {
    return (
        <div className="client-box">
            <div className="rating">
                {
                    Array.from({ length: rating }).map((_, index) => (
                        <i key={index} className="fa-solid fa-star"></i>
                    ))
                }
            </div>
            <div className="review">
                <p>{review}</p>
            </div>
            <div className="client">
                <img src={img} alt="picture of client" />
                <div className="client-info">
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialBox;