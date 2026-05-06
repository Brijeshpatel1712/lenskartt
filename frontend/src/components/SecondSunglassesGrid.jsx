import React, { useState } from 'react';

const SecondSunglassesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/blue-grey-transparent-full-rim-wayfarer-john-jacobs-jj-tints-jj-s13313--c1-sunglasses-basalt__dsc2472 (1).webp",
                alt: "Blue Grey Transparent Wayfarer"
            },
            {
                id: 2,
                image: "/assets/Black-Green-Solid-Full-Rim-Wayfarer-John-Jacobs-JJ-Tints-JJ-S13311-C3-Sunglasses_john-jacobs-jj-s13311-c3-sunglasses_sunglasses_g_980618_02_2022 (1).webp",
                alt: "Black Green Solid Wayfarer"
            },
            {
                id: 3,
                image: "/assets/silver-green-solid-full-rim-square-john-jacobs-jj-tints-jj-s11707-c4-sunglasses_john-jacobs-jj-s11707-c4-sunglasses_john-jacobs-jj-s11707-c4-sunglasses_g_2870_05_july23 (1).webp",
                alt: "Silver Green Solid Square"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/grey-gradient-black-full-rim-wayfarer-john-jacobs-jj-tints-jj-s13227-c4-sunglasses_csvfile-1708406002394-img_7007.webp",
                alt: "Grey Gradient Black Wayfarer"
            },
            {
                id: 5,
                image: "/assets/gold-brown-green-full-rim-round-john-jacobs-jj-tints-jj-s12810-c2-polarized-sunglasses-coltrane__dsc8541_07_10_2025.webp",
                alt: "Gold Brown Green Round"
            },
            {
                id: 6,
                image: "/assets/black-grey-full-rim-cat-eye-john-jacobs-jj-tints-jj-s13085-c4-sunglasses_g_5377_08_11_23.webp",
                alt: "Black Grey Cat Eye"
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

export default SecondSunglassesGrid;
