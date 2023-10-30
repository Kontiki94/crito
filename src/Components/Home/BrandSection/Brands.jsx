import React from 'react'
import './Brands.css';
import brand_paperz from '../../../assets/images/paperz.svg';
import brand_dorfus from '../../../assets/images/dorfus.svg';
import brand_martino from '../../../assets/images/martino.svg';
import brand_square from '../../../assets/images/square.svg';
import brand_gobona from '../../../assets/images/gobona.svg';
import BrandDisplay from './BrandDisplay';


const Brands = () => {
    const brands = [
        {src: brand_paperz, alt: "paperz brand image"},
        {src: brand_dorfus, alt: "dorfus brand image"},
        {src: brand_martino, alt: "martino brand image"},
        {src: brand_square, alt: "square brand image"},
        {src: brand_gobona, alt: "gobona brand image"}
    ]
    return (
        <div className="brand-images">
            <div className="container brands">
                {
                    brands.map((brand, index) => (
                        <BrandDisplay key={index} src={brand.src} alt={brand.alt} />
                    ))
                }
            </div>
        </div>
    );
}

export default Brands;
