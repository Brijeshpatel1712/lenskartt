import React from 'react';
import sunBanner from '../assets/Sun-Banner-web.webp';

const TrendingSunglasses = () => {
    return (
        <div className="section-divider-container">
            <div className="title-with-lines">
                <span className="line"></span>
                <h2 className="section-title">TRENDING SUNGLASSES</h2>
                <span className="line"></span>
            </div>
            <div className="banner-container">
                <img src={sunBanner} alt="Trending Sunglasses Banner" className="turban-banner" />
            </div>
        </div>
    );
};

export default TrendingSunglasses;
