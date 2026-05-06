import React, { useState } from 'react';

const ColorContactLensesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/aquacolor-dusk-blue-premium-zero-power-monthly_151322_dusk_blue_s1_18_12_2025.jpg",
                alt: "Aquacolor Dusk Blue"
            },
            {
                id: 2,
                image: "/assets/aquacolor-gray-premium-zero-power-monthly_151323_gray_s1_18_12_2025.jpg",
                alt: "Aquacolor Gray"
            },
            {
                id: 3,
                image: "/assets/aquacolor-silver-gray-premium-zero-power-monthly_151324_silver_gray_s1_18_12_2025.jpg",
                alt: "Aquacolor Silver Gray"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/aquacolor-turquoise-premium-zero-power-monthly_151326_tricky_turquoise_s1_18_12_2025.jpg",
                alt: "Aquacolor Turquoise"
            },
            {
                id: 5,
                image: "/assets/aquacolor-emerald-premium-powered-monthly-1lp_nw-153141_emerald.jpg",
                alt: "Aquacolor Emerald"
            },
            {
                id: 6,
                image: "/assets/aquacolor-turquoise-premium-powered-monthly-1lp_153142_tricky_turquosie_s1_18_12_2025.jpg",
                alt: "Aquacolor Turquoise Powered"
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

export default ColorContactLensesGrid;
