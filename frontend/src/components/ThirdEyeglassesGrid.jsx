import React, { useState } from 'react';

const ThirdEyeglassesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/black-black-full-rim-rectangle-lenskart-readers-lr-e11058-only-for-2-5-prefitted-powers__dsc9422_10_10_2025.webp",
                alt: "Lenskart Readers Power 2.5"
            },
            {
                id: 2,
                image: "/assets/black-black-full-rim-rectangle-lenskart-readers-lr-e11058-only-for-2-prefitted-powers__dsc9405_10_10_2025.webp",
                alt: "Lenskart Readers Power 2.0"
            },
            {
                id: 3,
                image: "/assets/black-black-full-rim-rectangle-lenskart-readers-lr-e11058-only-for-1-5-prefitted-powers__dsc9413_10_10_2025.webp",
                alt: "Lenskart Readers Power 1.5"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/black-full-rim-rectangle-lenskart-readers-lr-e11058-c4-a-reading-eyeglasses-(only-for--1.webp",
                alt: "Lenskart Readers Option 4"
            },
            {
                id: 5,
                image: "/assets/black-full-rim-rectangle-lenskart-readers-lr-e11058-c4-b-reading-eyeglass-(only-for--1.webp",
                alt: "Lenskart Readers Option 5"
            },
            {
                id: 6,
                image: "/assets/black-rectangle-lenskart-readers-lr-e11058-c3a-reading-eyeglass-(only-for--1.webp",
                alt: "Lenskart Readers Option 6"
            }
        ]
    ];

    const toggleSet = () => {
        if (allProducts.length > 1) {
            setCurrentIndex(prev => (prev === 0 ? 1 : 0));
        }
    };

    return (
        <div className="eyeglasses-grid-container">
            <div className="eyeglasses-grid" style={{ position: 'relative' }}>
                {/* Left Arrow */}
                {currentIndex > 0 && (
                    <div
                        className="grid-arrow left"
                        onClick={toggleSet}
                        style={{ position: 'absolute', left: 0, zIndex: 10 }}
                    >
                        <span className="arrow-left"></span>
                    </div>
                )}

                {/* Product Container */}
                <div
                    className="products-container"
                    style={{
                        display: 'flex',
                        gap: '30px',
                        flex: 1,
                        justifyContent: 'center',
                        padding: '0 60px'
                    }}
                >
                    {allProducts[currentIndex].map(product => (
                        <div key={product.id} className="eyeglass-product-card" style={{ flex: '0 0 30%' }}>
                            <img src={product.image} alt={product.alt} className="product-image" />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                {currentIndex < allProducts.length - 1 && (
                    <div
                        className="grid-arrow right"
                        onClick={toggleSet}
                        style={{ position: 'absolute', right: 0, zIndex: 10 }}
                    >
                        <span className="arrow-right"></span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThirdEyeglassesGrid;
