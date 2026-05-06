import React from 'react';
import { Link } from 'react-router-dom';

const ProductSectionHeader = ({ title, link }) => {
    return (
        <div className="product-section-header">
            <h2 className="section-title-left">{title}</h2>
            <Link to={link || '#'} className="view-range-link">View Range</Link>
        </div>
    );
};

export default ProductSectionHeader;
