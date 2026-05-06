import React, { useState } from 'react';

const SunglassesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/silver-grey-full-rim-round-vincent-chase-polarized-met-effect-vc-s15398-c2-sunglasses_g_0998_02_02_23.webp",
                alt: "Silver Grey Full Rim Round"
            },
            {
                id: 2,
                image: "/assets/gunmetal-blue-full-rim-round-vincent-chase-the-metal-edit-vc-s13137-c3-sunglasses_vincent-chase-vc-s13137-c3-c3-sunglasses_sunglasses_g_8708_5july23.webp",
                alt: "Gunmetal Blue Full Rim Round"
            },
            {
                id: 3,
                image: "/assets/Gold-Black-Grey-Gradient-Full-Rim-Square-Vincent-Chase-Polarized-VINTAGE-VC-S11748-C4-Polarized-Sunglasses_vincent-chase-vc-s11748-c4-sunglasses_sunglasses_G_126118_02_2022.webp",
                alt: "Gold Black Grey Gradient Full Rim Square"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/blue-grey-transparent-full-rim-wayfarer-john-jacobs-jj-tints-jj-s13313--c1-sunglasses-basalt__dsc2472.webp",
                alt: "Blue Grey Transparent Full Rim Wayfarer"
            },
            {
                id: 5,
                image: "/assets/Black-Green-Solid-Full-Rim-Wayfarer-John-Jacobs-JJ-Tints-JJ-S13311-C3-Sunglasses_john-jacobs-jj-s13311-c3-sunglasses_sunglasses_g_980618_02_2022.webp",
                alt: "Black Green Solid Full Rim Wayfarer"
            },
            {
                id: 6,
                image: "/assets/silver-green-solid-full-rim-square-john-jacobs-jj-tints-jj-s11707-c4-sunglasses_john-jacobs-jj-s11707-c4-sunglasses_john-jacobs-jj-s11707-c4-sunglasses_g_2870_05_july23.webp",
                alt: "Silver Green Solid Full Rim Square"
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

export default SunglassesGrid;
