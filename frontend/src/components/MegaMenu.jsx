import React, { useState } from 'react';
import './MegaMenu.css';
import menImg from '../assets/a2.png';
import womenImg from '../assets/women_pic.png';
import kidsImg from '../assets/kid_pic.png';

// Kids Menu Images
import kidsEyeImg from '../assets/kids-eye.png.webp';
import kidsScreenImg from '../assets/kids-screen.png.webp';
import kidsSunImg from '../assets/kids-sun.png.webp';

// Home Eye Test Image
import homeEyeTestImg from '../assets/home-eye-test.jpg.webp';

// City Images
import delhiImg from '../assets/Delhi1.webp';
import bangaloreImg from '../assets/Banglore1.webp';
import mumbaiImg from '../assets/Mumbai1.webp';
import ahmedabadImg from '../assets/Ahmedabad1.webp';
import chennaiImg from '../assets/Chennai1.webp';
// Using Bangalore as placeholder for Hyderabad since image is pending
import hyderabadImg from '../assets/Banglore1.webp';

const MegaMenu = ({ activeCategory, onClose }) => {
    const [subCategory, setSubCategory] = useState('Men');

    const items = [
        { name: 'Men', id: 'men', img: menImg },
        { name: 'Women', id: 'women', img: womenImg },
        { name: 'Kids', id: 'kids', img: kidsImg }
    ];

    const shapeItems = [
        { name: 'Square', id: 'square', img: 'https://static.lenskart.com/media/desktop/img/Sep21/square.png' },
        { name: 'Rectangle', id: 'rectangle', img: 'https://static.lenskart.com/media/desktop/img/Sep21/rectangle.png' },
        { name: 'Round', id: 'round', img: 'https://static.lenskart.com/media/desktop/img/Sep21/round.png' },
        { name: 'Geometric', id: 'geometric', img: 'https://static.lenskart.com/media/desktop/img/Sep21/geometric.png' }
    ];

    const renderContent = () => {
        if (activeCategory === 'STORE LOCATOR') {
            return (
                <div className="store-menu-layout">
                    <div className="store-left-section">
                        <h2 className="store-title">Over 2500+ Lenskart Store</h2>
                        <p className="store-subtitle">Experience eyewear in a whole new way: Visit your nearest store<br />and treat yourself to our range of eyewear styles</p>
                        <button className="store-button">Locate a Store</button>
                    </div>
                    <div className="store-right-section">
                        <div className="city-item">
                            <img src={delhiImg} alt="Delhi" className="city-icon" />
                            <span className="city-name">Delhi</span>
                        </div>
                        <div className="city-item">
                            <img src={bangaloreImg} alt="Bangalore" className="city-icon" />
                            <span className="city-name">Bangalore</span>
                        </div>
                        <div className="city-item">
                            <img src={mumbaiImg} alt="Mumbai" className="city-icon" />
                            <span className="city-name">Mumbai</span>
                        </div>
                        <div className="city-item">
                            <img src={ahmedabadImg} alt="Ahmedabad" className="city-icon" />
                            <span className="city-name">Ahmedabad</span>
                        </div>
                        <div className="city-item">
                            <img src={chennaiImg} alt="Chennai" className="city-icon" />
                            <span className="city-name">Chennai</span>
                        </div>
                        <div className="city-item">
                            <img src={hyderabadImg} alt="Hyderabad" className="city-icon" />
                            <span className="city-name">Hyderabad</span>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeCategory === 'HOME EYE-TEST') {
            return (
                <div className="home-eye-test-layout">
                    <div className="het-image-section">
                        <img src={homeEyeTestImg} alt="Home Eye Test" className="het-big-image" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="het-content-section">
                        <h2 className="het-title">Get your eyes checked at home</h2>
                        <p className="het-subtitle">A certified refractionist will visit you with latest eye testing machines & trial frames</p>
                        <button className="het-button">Book appointment</button>
                    </div>
                </div>
            );
        }

        if (activeCategory === 'SUNGLASSES') {
            return (
                <>
                    <div className="menu-column" style={{ flex: 1.2 }}>
                        <div className="column-title">SELECT CATEGORY</div>

                        <div className="featured-item">
                            <span className="featured-title">CLASSIC SUNGLASSES</span>
                            <span className="featured-price">Starting From ₹1500</span>
                        </div>
                        <div className="featured-item">
                            <span className="featured-title">PREMIUM SUNGLASSES</span>
                            <span className="featured-price">Starting From ₹4000</span>
                        </div>
                    </div>

                    <div className="menu-column">
                        <div className="column-title">Our Top Picks</div>
                        <span className="menu-link">Lenskart Boost</span>
                        <span className="menu-link">New Arrivals</span>
                        <span className="menu-link">Power Sunglasses</span>
                    </div>

                    <div className="menu-column">
                        <div className="column-title">Shape</div>
                        <span className="menu-link">Aviator</span>
                        <span className="menu-link">Rounders</span>
                        <span className="menu-link">Square</span>
                        <span className="menu-link">Rectangle</span>
                        <span className="menu-link">Hexagon</span>
                        <span className="menu-link">Cat-Eye</span>
                        <span className="menu-link">Clubmaster</span>
                    </div>

                    <div className="menu-column">
                        <div className="column-title">Collection</div>
                        <span className="menu-link">Harry Potter</span>
                        <span className="menu-link">Sports Wear</span>
                        <span className="menu-link">Lenskart Hustlr</span>
                        <span className="menu-link">Cruise Edit</span>
                        <span className="menu-link">Havana</span>
                        <span className="menu-link">Wedding Edit</span>
                        <span className="menu-link">Holiday Edit</span>
                        <span className="menu-link">Pilot</span>
                    </div>

                    <div className="menu-column">
                        <div className="column-title">Brands</div>
                        <span className="menu-link">Vincent Chase</span>
                        <span className="menu-link">Lenskart Boost</span>
                    </div>
                </>
            );
        }

        if (activeCategory === 'CONTACT LENSES') {
            return (
                <>
                    <div className="menu-column">
                        <div className="column-title">Brands</div>
                        <span className="menu-link">Aqualens</span>
                        <span className="menu-link">Bausch Lomb</span>
                        <span className="menu-link">Soflens</span>
                        <span className="menu-link">Acuvue</span>
                        <span className="menu-link">Iconnect</span>
                        <span className="menu-link">Alcon</span>
                    </div>
                    <div className="menu-column">
                        <div className="column-title">Explore By Disposability</div>
                        <span className="menu-link">Monthly</span>
                        <span className="menu-link">Day & Night</span>
                        <span className="menu-link">Daily</span>
                        <span className="menu-link">Yearly</span>
                        <span className="menu-link">Bi-weekly</span>
                    </div>
                    <div className="menu-column">
                        <div className="column-title">Explore By Power</div>
                        <span className="menu-link">Spherical - (CYL&lt;0.5)</span>
                        <span className="menu-link">Spherical + (CYL&lt;0.5)</span>
                        <span className="menu-link">Cylindrical Power(&gt;0.75)</span>
                        <span className="menu-link">Toric Power</span>
                    </div>
                    <div className="menu-column">
                        <div className="column-title">Explore By Color</div>
                        <span className="menu-link">Green</span>
                        <span className="menu-link">Blue</span>
                        <span className="menu-link">Brown</span>
                        <span className="menu-link">Turquoise</span>
                        <span className="menu-link">View all colors</span>
                    </div>
                    <div className="menu-column">
                        <div className="column-title">Solution</div>
                        <span className="menu-link">Small</span>
                        <span className="menu-link">Large</span>
                        <span className="menu-link">View all solutions</span>
                    </div>
                </>
            );
        }

        if (activeCategory === 'KIDS GLASSES') {
            return (
                <div className="kids-menu-layout">
                    <div className="kids-card">
                        <div className="kids-icon-wrapper">
                            <img src={kidsEyeImg} alt="Eyeglasses" className="kids-icon" />
                        </div>
                        <span className="kids-card-title">Eyeglasses</span>
                    </div>
                    <div className="kids-card">
                        <div className="kids-icon-wrapper">
                            <img src={kidsScreenImg} alt="Zero Power Screen Glasses" className="kids-icon" />
                        </div>
                        <span className="kids-card-title">Zero Power Screen Glasses</span>
                    </div>
                    <div className="kids-card">
                        <div className="kids-icon-wrapper">
                            <img src={kidsSunImg} alt="Sunglasses" className="kids-icon" />
                        </div>
                        <span className="kids-card-title">Sunglasses</span>
                    </div>
                </div>
            );
        }

        if (activeCategory === 'SCREEN GLASSES') {
            return (
                <>
                    <div className="menu-column" style={{ flex: 1 }}>
                        <div className="column-title">Select Category</div>
                        <div className="featured-item">
                            <span className="featured-title">Screen Glasses</span>
                            <span className="featured-price">Starting From ₹600</span>
                        </div>
                    </div>
                    {/* Empty columns to maintain layout or just reduced content */}
                    <div className="menu-column"></div>
                    <div className="menu-column"></div>
                    <div className="menu-column"></div>
                    <div className="menu-column"></div>
                </>
            );
        }

        // EYEGLASSES content - 5 column layout as per new reference image
        if (activeCategory === 'EYEGLASSES' || activeCategory === 'SCREEN GLASSES') {
            return (
                <>
                    <div className="menu-column" style={{ flex: 1.5 }}>
                        <div className="column-title">SELECT CATEGORY</div>

                        <div className="featured-item active-featured">
                            <div className="featured-content">
                                <span className="featured-title">CLASSIC EYEGLASSES</span>
                                <span className="featured-price">Starting From ₹1900</span>
                            </div>
                            <span className="arrow-icon">›</span>
                        </div>
                        <div className="featured-item">
                            <div className="featured-content">
                                <span className="featured-title">PREMIUM EYEGLASSES</span>
                                <span className="featured-price">Starting From ₹3900</span>
                            </div>
                            <span className="arrow-icon">›</span>
                        </div>
                        <div className="featured-item">
                            <div className="featured-content">
                                <span className="featured-title">SCREEN EYEGLASSES</span>
                                <span className="featured-price">Starting From ₹600</span>
                            </div>
                            <span className="arrow-icon">›</span>
                        </div>
                    </div>

                    <div className="menu-column">
                        <div className="column-title">Our Top Picks</div>
                        <span className="menu-link">New Arrivals</span>
                        <span className="menu-link">Best Seller</span>
                        <span className="menu-link">Lenskart BLU Lenses</span>
                        <span className="menu-link">Progressive Eyeglasses</span>
                    </div>

                    <div className="menu-column">
                        <div className="column-title">Frame Type</div>
                        <span className="menu-link">Rectangle Frames</span>
                        <span className="menu-link">Square Frames</span>
                        <span className="menu-link">Round Frames</span>
                        <span className="menu-link">Aviator Frames</span>
                        <span className="menu-link">Cat-Eye Frames</span>
                        <span className="menu-link">Rimless Frames</span>
                        <span className="menu-link">Halfrim Frames</span>
                        <span className="menu-link">Geometric Frames</span>
                    </div>

                    <div className="menu-column">
                        <div className="column-title">Collection</div>
                        <span className="menu-link">Harry Potter</span>
                        <span className="menu-link">Aao Twyst Karein</span>
                        <span className="menu-link">Hustlr - As Seen on Shark Tank</span>
                        <span className="menu-link">Switch - Magnetic Clips-On</span>
                        <span className="menu-link">Patriot</span>
                        <span className="menu-link">Hip Hop</span>
                        <span className="menu-link">Turban Edit</span>
                        <span className="menu-link">Classic Acetates</span>
                    </div>

                    <div className="menu-column">
                        <div className="column-title">Brands</div>
                        <span className="menu-link">Vincent Chase</span>
                        <span className="menu-link">Lenskart Air</span>
                        <span className="menu-link">Lenskart STUDIO</span>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="mega-menu-container">
            {/* Mobile Back Button */}
            <div className="mobile-menu-header" onClick={(e) => { e.stopPropagation(); onClose(); }}>
                <span>&larr; Back to Categories</span>
            </div>

            {/* Sidebar - Hide for Kids Glasses, Contact Lenses, Home Eye-Test, and Store Locator */}
            {activeCategory !== 'KIDS GLASSES' && activeCategory !== 'CONTACT LENSES' && activeCategory !== 'HOME EYE-TEST' && activeCategory !== 'STORE LOCATOR' && (
                <div className="mega-menu-sidebar">
                    {items
                        .map(item => (
                            <div
                                key={item.id}
                                className={`sidebar-item ${subCategory === item.name ? 'active' : ''}`}
                                onMouseEnter={() => setSubCategory(item.name)}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={item.img} alt={item.name} className="sidebar-icon-img" />
                                    {item.name}
                                </div>
                                <span>›</span>
                            </div>
                        ))}
                </div>
            )}

            {/* Content Area */}
            <div className="mega-menu-content" style={(activeCategory === 'KIDS GLASSES' || activeCategory === 'CONTACT LENSES' || activeCategory === 'HOME EYE-TEST' || activeCategory === 'STORE LOCATOR') ? { padding: 0 } : {}}>
                {renderContent()}
            </div>
        </div>
    );
};

export default MegaMenu;
