import React from 'react';
import { useNavigate } from 'react-router-dom';
import hpBanner from '../assets/PLP_WEB-210425.webp';

const HarryPotterPage = () => {
    const navigate = useNavigate();
    return (
        <div className="harry-potter-page">
            <div className="hp-breadcrumbs">
                <span onClick={() => navigate(-1)} style={{ cursor: 'pointer', marginRight: '10px' }}>&larr;</span>
                <span>Eyewear</span> / <span>Eyewear</span> / <span>promotion</span> / <span className="active">Harry Potter</span>
                <span className="hp-contact-support">Problem in placing order ? Give a missed call <span className="highlight">9999899998</span></span>
            </div>

            <div className="hp-collection-banner">
                <img src={hpBanner} alt="Harry Potter Collection" />
            </div>

            <div className="hp-filter-toolbar">
                <div className="hp-toolbar-left">
                    <span className="toolbar-label">FRAME SHAPE</span>
                </div>

                <div className="hp-toolbar-center">
                    <span className="toolbar-main-label">HARRY POTTER</span>
                    <div className="toolbar-toggle-group">
                        <span className="toggle-label">VIEW FRAMES</span>
                        <div className="toggle-switch">
                            <input type="checkbox" id="hp-3d-toggle" />
                            <label htmlFor="hp-3d-toggle"></label>
                        </div>
                        <span className="toggle-label">VIEW 3D TRY ON</span>
                    </div>
                </div>

                <div className="hp-toolbar-right">
                    <div className="hp-sort-group">
                        <span className="sort-label">SORT BY</span>
                        <select className="hp-sort-select">
                            <option>Best Sellers</option>
                            <option>New Arrivals</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="hp-empty-product-grid">
                {/* Product cards would go here */}
            </div>
        </div>
    );
};

export default HarryPotterPage;
