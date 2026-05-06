import React, { useState } from 'react';

const EyeglassesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/transparent-full-rim-square-john-jacobs-rich-acetate-jj-e10235-c7-eyeglasses-chandler_g_2374_30_9_2025.webp",
                alt: "Transparent Full Rim Square"
            },
            {
                id: 2,
                image: "/assets/green-brown-full-rim-rectangle-john-jacobs-tr-flex-jj-e16847-c1-eyeglasses__dsc5067_23_04_2024.webp",
                alt: "Green Brown Full Rim Rectangle"
            },
            {
                id: 3,
                image: "/assets/john-jacobs-jj-e13343-c2-eyeglasses_g_5786.webp",
                alt: "John Jacobs Round"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/black-full-rim-aviator-john-jacobs-rich-acetate-jj-e13346---c2-eyeglasses-celeste_cc_dsc4734.webp",
                alt: "Black Full Rim Aviator"
            },
            {
                id: 5,
                image: "/assets/john-jacobs-jj-e16385-c2-eyeglasses_img_0265_26_10_2023.webp",
                alt: "John Jacobs Rectangular"
            },
            {
                id: 6,
                image: "/assets/grey-transparent-grey-full-rim-square-john-jacobs-rich-acetate-jj-e11727--c6-eyeglasses_img_7072_01_10_2025.webp",
                alt: "Grey Transparent Full Rim Square"
            }
        ]
    ];

    const toggleSet = () => {
        setCurrentIndex(prev => (prev === 0 ? 1 : 0));
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
                        padding: '0 60px' // Add padding to avoid overlap with absolute arrows
                    }}
                >
                    {allProducts[currentIndex].map(product => (
                        <div key={product.id} className="eyeglass-product-card" style={{ flex: '0 0 30%' }}>
                            {/* Fixed width base to ensure equal sizing */}
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

export default EyeglassesGrid;
