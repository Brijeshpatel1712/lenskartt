import React from 'react';
import { Link } from 'react-router-dom';
import bogoImage from '../assets/1920x520-desktop-banner.jpg';
import turbanBanner from '../assets/Turban-DesktopBanner (1).webp';
import sunBanner from '../assets/Sun-Banner-web.webp';
import hechomeBanner from '../assets/hechome11.webp';

// Grids
import PremiumEyewear from './PremiumEyewear';
import s1 from '../assets/Extra_Wide-4eye.webp';
import s2 from '../assets/Extra_Wide-4-1eye.webp';
import s3 from '../assets/Extra_Wide-4-2eye.webp';



const BogoStrip = () => {
    return (
        <div className="bogo-section">
            <div className="promotion-strip-container" style={{ padding: '20px 20px' }}>
                <div className="promotion-strip">
                    <span className="promotion-line"></span>
                    <h2 className="promotion-text">BUY ONE GET ONE FREE</h2>
                    <span className="promotion-line"></span>
                </div>
            </div>
            <Link to="/bogo-offer" className="bogo-banner-wrapper">
                <img src={bogoImage} alt="Buy 1 Get 1 Free - Lenskart Gold Max Membership" className="bogo-banner-img" />
            </Link>

            <div className="promotion-strip-container" style={{ padding: '20px 20px 10px' }}>
                <div className="promotion-strip">
                    <span className="promotion-line"></span>
                    <h2 className="promotion-text">BOOK EYE TEST AT HOME</h2>
                    <span className="promotion-line"></span>
                </div>
            </div>

            <div className="bogo-banner-wrapper">
                <Link to="/home-eye-test">
                    <img src={hechomeBanner} alt="Book Eye Test at Home" className="bogo-banner-img" />
                </Link>
            </div>

            <div className="promotion-strip-container" style={{ padding: '20px 20px 10px' }}>
                <div className="promotion-strip">
                    <span className="promotion-line"></span>
                    <h2 className="promotion-text">FREE ONLINE EYE TEST</h2>
                    <span className="promotion-line"></span>
                </div>
            </div>
            <div className="bogo-banner-wrapper">
                <Link to="/turban-offer">
                    <img src={turbanBanner} alt="Free Online Eye Test" className="bogo-banner-img" />
                </Link>
            </div>

            <div className="promotion-strip-container" style={{ padding: '20px 20px 10px' }}>
                <div className="promotion-strip">
                    <span className="promotion-line"></span>
                    <h2 className="promotion-text">PREMIUM EYEWEAR</h2>
                    <span className="promotion-line"></span>
                </div>
            </div>

            <PremiumEyewear showTitle={false} />



            <div className="promotion-strip-container" style={{ padding: '20px 20px 10px' }}>
                <div className="promotion-strip">
                    <span className="promotion-line"></span>
                    <h2 className="promotion-text">TRENDING SUNGLASSES</h2>
                    <span className="promotion-line"></span>
                </div>
            </div>

            <div className="bogo-banner-wrapper">
                <img src={sunBanner} alt="Trending Sunglasses" className="bogo-banner-img" />
            </div>

        </div>
    );
};

export default BogoStrip;

