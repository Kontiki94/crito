import React from 'react';
import './Testimonial.css';
import Button from '../../Generics/Button';
import SectionTitle from '../../Generics/SectionTitle';
import cassandra from '../../../assets/images/cassandra-warren.png';
import amanda from '../../../assets/images/amanda-tulling.png';
import jack from '../../../assets/images/jack-mcdogglas.png';
import TestimonialBox from './TestimonialBox';

const Testimonial = () => {
    const clients = [
        {rating: 5, review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", img:cassandra, name:"Cassandra Warren", title:"Business Manager, Dorfus"},
        {rating: 5, review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", img:amanda, name:"Amanda Tulling", title:"Senior Developer, Square"},
        {rating: 5, review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", img:jack, name:"Jack McDogglas", title:"Key Account Manager, Gobona"},
    ]

    return (
        <div className="testimonial">
            <div className="container">
                <div className="title">
                    <SectionTitle title="Testimonial" description="What Our Clients Say" />
                </div>
                <div className="client-rating">
                    {
                        clients.map((client, index) =>(
                            <TestimonialBox key={index} rating={client.rating} review={client.review} img={client.img} name={client.name} title={client.title} />
                        ))
                    }
                </div>
                <div className="center-content">
                    <Button title="All Reviews" />
                </div>
            </div>
        </div>
    );
}

export default Testimonial;