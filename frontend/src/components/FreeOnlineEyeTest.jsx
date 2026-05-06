import React from 'react';
import turbanBanner from '../assets/Turban-DesktopBanner.webp';

const FreeOnlineEyeTest = () => {
    return (
        <div className="section-divider-container">
            <div className="title-with-lines">
                <span className="line"></span>
                <h2 className="section-title">FREE ONLINE EYE TEST</h2>
                <span className="line"></span>
            </div>
            <div className="banner-container">
                <img src={turbanBanner} alt="Turban Desktop Banner" className="turban-banner" />
            </div>
        </div>
    );
};

export default FreeOnlineEyeTest;
