import React, { useState } from 'react';

const SecondEyeglassesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/vincent-chase-vc-e12947-c2-eyeglasses_vincent-chase-vc-e12947-c2-eyeglasses_G_1969_1.webp",
                alt: "Vincent Chase Round"
            },
            {
                id: 2,
                image: "/assets/vincent-chase-vc-e11273-c1-eyeglasses_m_1496_1_1.webp",
                alt: "Vincent Chase Rectangular"
            },
            {
                id: 3,
                image: "/assets/vincent-chase-vc-e12852-c1-eyeglasses_vincent-chase-vc-e12852-c1-eyeglasses_g_1089_1.webp",
                alt: "Vincent Chase Square"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/vincent-chase-vc-e12852-c1-eyeglasses_vincent-chase-vc-e12852-c1-eyeglasses_g_1089_1.webp",
                alt: "Vincent Chase Variant 1"
            },
            {
                id: 5,
                image: "/assets/vincent-chase-vc-e12852-c1-eyeglasses_vincent-chase-vc-e12852-c1-eyeglasses_g_1089_1 (1).webp",
                alt: "Vincent Chase Variant 2"
            },
            {
                id: 6,
                image: "/assets/Black-Full-Rim-Rectangle-Lenskart-AIR-Flex-LA-E12852-C2-Eyeglasses_vincent-chase-vc-e12852-c2-eyeglasses_2eyeglasses_G_2091_10_02_2022.webp",
                alt: "Lenskart Air Flex"
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

export default SecondEyeglassesGrid;
