import React from 'react';

const BuyItYourWay = () => {
    return (
        <div className="section-divider-container">
            <div className="title-with-lines">
                <span className="line"></span>
                <h2 className="section-title">BUY IT YOUR WAY</h2>
                <span className="line"></span>
            </div>
            <div className="buy-it-your-way-grid">
                <div className="buy-card">
                    <img src="/assets/bbbgt6.webp" alt="BBB GT6" />
                </div>
                <div className="buy-card">
                    <img src="/assets/bochat1.webp" alt="Bo Chat 1" />
                </div>
            </div>
            <div className="buy-it-your-way-grid" style={{ marginTop: '20px' }}>
                <div className="buy-card">
                    <img src="/assets/hto.webp" alt="HTO" />
                </div>
                <div className="buy-card">
                    <img src="/assets/stores.webp" alt="Stores" />
                </div>
            </div>
        </div>
    );
};

export default BuyItYourWay;
