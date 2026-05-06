import React from 'react';
import sharkTankBanner from '../assets/Homepage-Banner-web.webp';

const AsSeenOnSharkTank = () => {
    return (
        <div className="section-divider-container">
            <div className="title-with-lines">
                <span className="line"></span>
                <h2 className="section-title">AS SEEN ON SHARK TANK</h2>
                <span className="line"></span>
            </div>
            <div className="banner-container">
                <img src={sharkTankBanner} alt="Shark Tank Banner" className="turban-banner" />
            </div>
        </div>
    );
};

export default AsSeenOnSharkTank;
