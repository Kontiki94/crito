import React from 'react'
import './Brands.css';

const BrandDisplay = ({src, alt}) => {
    return (
            <img src={src} alt={alt} />
    )
}

export default BrandDisplay