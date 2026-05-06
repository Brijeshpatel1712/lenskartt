import React from 'react';

const FindThePerfectFit = () => {
    return (
        <div className="section-divider-container">
            <div className="title-with-lines">
                <span className="line"></span>
                <h2 className="section-title">FIND THE PERFECT FIT</h2>
                <span className="line"></span>
            </div>

            <div className="perfect-fit-grid">
                {/* Left Column with two blocks */}
                <div className="perfect-fit-left">
                    <div className="perfect-fit-card small">
                        <img src="/assets/eye-square10.webp" alt="Eyeglasses" />
                    </div>
                    <div className="perfect-fit-card small">
                        <img src="/assets/power-sun-square.webp" alt="Power Sun Glasses" />
                    </div>
                </div>

                {/* Right Column with three blocks */}
                <div className="perfect-fit-right">
                    <div className="perfect-fit-card small">
                        <img src="/assets/ce-square.webp" alt="Blu Computer Glasses" />
                    </div>
                    <div className="perfect-fit-card small">
                        <img src="/assets/sun-square.webp" alt="Sunglasses" />
                    </div>
                    <div className="perfect-fit-card small">
                        <img src="/assets/Banner03_TileDesktop.webp" alt="Progressive Glasses" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindThePerfectFit;
