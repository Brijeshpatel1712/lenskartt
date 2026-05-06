import React from 'react';

const ContactLensesMore = () => {
    return (
        <div className="section-divider-container">
            <div className="title-with-lines">
                <span className="line"></span>
                <h2 className="section-title">CONTACT LENSES & MORE</h2>
                <span className="line"></span>
            </div>
            <div className="buy-it-your-way-grid">
                <div className="buy-card">
                    <img src="/assets/contact-lens-more.webp" alt="Contact Lenses 1" />
                </div>
                <div className="buy-card">
                    <img src="/assets/contact-lens-more-1.webp" alt="Contact Lenses 2" />
                </div>
            </div>
        </div>
    );
};

export default ContactLensesMore;
