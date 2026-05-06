import React, { useState, useEffect } from 'react';
import blendImg from '../assets/blend.webp';
import cliponImg from '../assets/clipon.webp';
import airflexImg from '../assets/blend.webp'; // Fallback for missing airflex.webp
import aviatorImg from '../assets/aviator.webp';
import roundImg from '../assets/image179.webp';
import catEyeImg from '../assets/cateeye.webp';
import clubmasterImg from '../assets/clubmaster.webp';
import transparentImg from '../assets/trans.webp';

const WearTheTrend = () => {
    const collections = [
        { name: 'Blend Edit', image: blendImg },
        { name: 'Air Clip On', image: cliponImg },
        { name: 'Air Flex', image: airflexImg },
        { name: 'Retro Aviator', image: aviatorImg },
        { name: 'Round', image: roundImg },
        { name: 'Cat-Eye', image: catEyeImg },
        { name: 'Clubmaster', image: clubmasterImg },
        { name: 'Transparent', image: transparentImg }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        if (startIndex + 4 < collections.length) {
            setStartIndex(startIndex + 1);
        } else {
            setStartIndex(0);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        } else {
            setStartIndex(collections.length - 4);
        }
    };

    return (
        <div className="wear-the-trend-section">
            <div className="trend-content-left">
                <h2 className="trend-title">WEAR THE TREND</h2>
                <p className="trend-subtitle">Our hottest collections</p>
            </div>

            <div className="trend-slider-outer">
                {!isMobile && <button className="trend-arrow prev" onClick={handlePrev}>&#10094;</button>}

                <div className={`trend-slider-container ${isMobile ? 'mobile-scroll' : ''}`}>
                    <div
                        className="trend-track"
                        style={!isMobile ? { transform: `translateX(-${startIndex * 25}%)` } : {}}
                    >
                        {collections.map((item, index) => (
                            <div key={index} className="trend-card-wrapper">
                                <div className="trend-card">
                                    <div className="trend-image-container">
                                        <img src={item.image} alt={item.name} className="trend-image" />
                                    </div>
                                    <h3 className="trend-name">{item.name}</h3>
                                    <button className="explore-btn">Explore</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {!isMobile && <button className="trend-arrow next" onClick={handleNext}>&#10095;</button>}
            </div>
        </div>
    );
};

export default WearTheTrend;
