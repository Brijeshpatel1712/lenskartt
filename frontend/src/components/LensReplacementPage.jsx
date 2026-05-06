import React from 'react';
import voucherImg from '../assets/voucher-for-free-lens-replacement-(on-any-frame)_freelensreplacement-2.webp';
import visualImg from '../assets/lens-replacement-at-store_key_visual_-_square_(1)_2.webp';
import howItWorksImg from '../assets/lens-replacement-at-store_lens-replacement-pdp-catalog-611.webp';
import highQualityImg from '../assets/lens-replacement-at-store_lens-replacement-pdp-catalog-2.webp';
import perfectFittingImg from '../assets/lens-replacement-at-store_lens-replacement-pdp-catalog-3.webp';
import hugeSavingsImg from '../assets/lens-replacement-at-store_lens-replacement-pdp-catalog-4.webp';

const LensReplacementPage = () => {
    return (
        <div className="lens-page-container">
            <div className="lens-content-wrapper">
                {/* Left Side: Cards Grid */}
                <div className="lens-main-grid">
                    <div className="lens-card-row">
                        <div className="lens-card">
                            <img src={voucherImg} alt="Voucher" />
                        </div>
                        <div className="lens-card no-padding">
                            <img src={visualImg} alt="Visual Banner" />
                        </div>
                    </div>
                    <div className="lens-card-row">
                        <div className="lens-card no-padding">
                            <img src={howItWorksImg} alt="How it works" />
                        </div>
                        <div className="lens-card no-padding">
                            <img src={highQualityImg} alt="High Quality Lenses" />
                        </div>
                    </div>
                    <div className="lens-card-row">
                        <div className="lens-card no-padding">
                            <img src={perfectFittingImg} alt="Perfect Fitting" />
                        </div>
                        <div className="lens-card no-padding">
                            <img src={hugeSavingsImg} alt="Huge Savings" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Sidebar */}
                <div className="lens-sidebar">
                    <div className="sidebar-product-top">
                        <span className="brand-name">Lenskart</span>
                        <h1 className="product-title">Voucher For Free Lens Replacement (On Any Frame)</h1>
                        <div className="size-info">
                            Size : <span className="info-icon">ⓘ</span>
                        </div>
                        <div className="price-section">
                            <span className="price">₹199</span>
                            <span className="gst-info">(₹199 with GST)</span>
                        </div>
                        <button className="buy-now-btn">BUY NOW</button>
                    </div>

                    <div className="sidebar-tech-info">
                        <div className="tech-header-row">
                            <h3>Technical information</h3>
                            <span className="tech-toggle">▲</span>
                        </div>

                        <div className="tech-details-grid">
                            <div className="tech-item">
                                <span className="tech-label">Product id</span>
                                <span className="tech-value">236191</span>
                            </div>
                            <div className="tech-item">
                                <span className="tech-label">Model No.</span>
                                <span className="tech-value">Voucher for Free Lens Replacement (on any frame)</span>
                            </div>
                            <div className="tech-item">
                                <span className="tech-label">Suited For</span>
                                <span className="tech-value"></span>
                            </div>
                            <div className="tech-item">
                                <span className="tech-label">Weight</span>
                                <span className="tech-value"><span className="help-icon">?</span></span>
                            </div>
                            <div className="tech-item">
                                <span className="tech-label">Prescription Type</span>
                                <span className="tech-value"></span>
                            </div>
                            <div className="tech-item">
                                <span className="tech-label">Collection</span>
                                <span className="tech-value"></span>
                            </div>
                        </div>

                        <div className="show-all-link">Show All Information</div>

                        <div className="sidebar-accordions">
                            <div className="accordion-row">
                                <span>Visit Nearby Store</span>
                                <span className="chevron">▼</span>
                            </div>
                            <div className="accordion-row">
                                <span>Check Delivery Options</span>
                                <span className="chevron">▼</span>
                            </div>
                            <div className="accordion-row">
                                <span>Review(0)</span>
                                <span className="chevron">▼</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Icon */}
            <div className="whatsapp-float">
                <img src="https://static.lenskart.com/media/desktop/img/Feb22/Whatsapp.png" alt="Whatsapp" />
            </div>
        </div>
    );
};

export default LensReplacementPage;
