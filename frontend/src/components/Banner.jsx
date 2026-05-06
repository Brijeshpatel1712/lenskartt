import React, { useState, useEffect } from 'react';
import slide1 from '../assets/Desktop-v2-topbanner-harrypotter-16sep25.webp';
import slide2 from '../assets/Desktop-v2-topbanner-postcard-16sep25.webp';
import slide3 from '../assets/Desktop_Cyborg_16092025.webp';
import slide4 from '../assets/WEB_hero_BANNER_hip_hop.webp';
import slide5 from '../assets/Desktop_Banner_Bidri-131125-gta.webp';
import slide6 from '../assets/Frame_1991634538.webp';
import slide7 from '../assets/Frame_1991634539-5454.webp';
import slide8 from '../assets/IMG_1375_(2)-4321.webp';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, image: slide1 },
        { id: 2, image: slide2 },
        { id: 3, image: slide3 },
        { id: 4, image: slide4 },
        { id: 5, image: slide5 },
        { id: 6, image: slide6 },
        { id: 7, image: slide7 },
        { id: 8, image: slide8 },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="banner-slider">
            <div className="slider-container">
                <button className="banner-arrow prev" onClick={prevSlide}>&#10094;</button>
                <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="slide"
                        >
                            <img src={slide.image} alt={`Banner ${slide.id}`} className="banner-image" />
                        </div>
                    ))}
                </div>
                <button className="banner-arrow next" onClick={nextSlide}>&#10095;</button>

                <div className="banner-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
