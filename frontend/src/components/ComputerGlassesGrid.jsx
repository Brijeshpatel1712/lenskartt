import React, { useState } from 'react';

const ComputerGlassesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/blue-block-kids-computer-glasses_-black-blue-full-rim-round-kids-(8-12-yrs)-hooper-astra-hooper-c2_kids-glasses_-black-blue-full-rim-round-kids-(8-12-yrs)-hooper-astra-hooper-c2_g_8163_11_03_2022_23_03_2022.webp",
                alt: "Blue Block Kids Computer Glasses"
            },
            {
                id: 2,
                image: "/assets/sky-blue-full-rim-wayfarer-lenskart-extra-narrow-hustlr-computer-eyeglasses_csvfile-1689595048517-hooper-hp-d15011l-c6-eyeglasses_g_8686_04_05_2023.webp",
                alt: "Sky Blue Full Rim Wayfarer"
            },
            {
                id: 3,
                image: "/assets/midnight-blue-full-rim-wayfarer-lenskart-extra-narrow-hustlr-computer-eyeglasses_csvfile-1689594935385-hooper-hp-d15011l-c9-eyeglasses_g_8701_04_05_2023.webp",
                alt: "Midnight Blue Full Rim Wayfarer"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/black-full-rim-wayfarer-lenskart-extra-narrow-hustlr-computer-eyeglasses_csvfile-1689594898001-hooper-hp-d15011l-c8-eyeglasses_g_8694_04_05_2023.webp",
                alt: "Black Full Rim Wayfarer"
            },
            {
                id: 5,
                image: "/assets/lenskart-junior-lkj-e10058ce-c1-eyeglasses_Img1njh6.webp",
                alt: "Lenskart Junior C1"
            },
            {
                id: 6,
                image: "/assets/lenskart-junior-lkj-e10057ce-c3-eyeglasses_Img1njh4.webp",
                alt: "Lenskart Junior C3"
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

export default ComputerGlassesGrid;
