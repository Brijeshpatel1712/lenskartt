import React, { useState } from 'react';

const ContactLensesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/aqualens-10h-dailies_134722_s1_18_12_2025.webp",
                alt: "Aqualens 10H Dailies"
            },
            {
                id: 2,
                image: "/assets/aqualens-daily-disposable-contact-lenses--30-lenses-box_aqualens-daily-disposable-contact-lenses--30-lenses-box_csvfile-1681129631044-134723.webp",
                alt: "Aqualens Daily Disposable"
            },
            {
                id: 3,
                image: "/assets/aqualens-24h-dailies_118538_s1_1.webp",
                alt: "Aqualens 24H Dailies"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/aqualens-24h-toric-dailies_144128_s1_18_12_2025.webp",
                alt: "Aqualens 24H Toric"
            },
            {
                id: 5,
                image: "/assets/aqualens-nxt-monthly_144127_s1_18_12_2025.webp",
                alt: "Aqualens NXT Monthly"
            },
            {
                id: 6,
                image: "/assets/aqualens-10h-monthly_134538-b11.webp",
                alt: "Aqualens 10H Monthly"
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

export default ContactLensesGrid;
