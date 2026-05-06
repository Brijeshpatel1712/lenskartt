import React, { useState } from 'react';

const ZeroPowerComputerGlassesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allProducts = [
        [
            {
                id: 1,
                image: "/assets/hooper-hp-e10025l-c11-eyeglasses_csvfile-1717417134037-_dsc5674.webp",
                alt: "Hooper HP E10025L C11"
            },
            {
                id: 2,
                image: "/assets/blue-transparent-black-grey-full-rim-rectangle-kids--8-12-yrs--hooper-flexi-hooper-hp-e15084l-c3-eyeglasses_blue-transparent-black-grey-full-rim-rectangle-kids-(8-12-yrs)-hooper-flexi-hooper-hp-e15084l-c3-eyeglasses_.webp",
                alt: "Hooper Flexi HP E15084L C3"
            },
            {
                id: 3,
                image: "/assets/green-transparent-blue-full-rim-rectangle-kids-(8-12-yrs)-hooper-flexi-hooper-hp-e15085l-c1-eyeglasses_g_5328_9_21_22.webp",
                alt: "Hooper Flexi HP E15085L C1"
            }
        ],
        [
            {
                id: 4,
                image: "/assets/kids-glasses_-black-blue-transparent-black-full-rim-rectangle-kids--8-12-yrs--hooper-astra-hooper-hp-e10014l-c4_hooper-hp-e10014l-c4-eyeglasses_g_0981_22_march23.webp",
                alt: "Hooper Astra HP E10014L C4"
            },
            {
                id: 5,
                image: "/assets/kids-glasses_-transparent-full-rim-square-kids-8-12-yrs-hooper-astra-hooper-hp-e10031l-c10_g_1141_09_01_23.webp",
                alt: "Hooper Astra HP E10031L C10"
            },
            {
                id: 6,
                image: "/assets/pink-transparent-purple-pink-tortoise-full-rim-rectangle-kids--5-8-yrs--hooper-tr-flex-hooper-hp-e15084m-c3-eyeglasses_g_5387.webp",
                alt: "Hooper Flexi HP E15084M C3"
            }
        ]
    ];

    const toggleSet = () => {
        if (allProducts.length > 1) {
            setCurrentIndex(prev => (prev === 0 ? 1 : 0));
        }
    };

    return (
        <div className="eyeglasses-grid-container" style={{ marginBottom: '0px' }}>
            <div className="eyeglasses-grid" style={{ position: 'relative' }}>
                {/* Left Arrow */}
                <div
                    className="grid-arrow left"
                    onClick={toggleSet}
                    style={{
                        position: 'absolute',
                        left: 0,
                        zIndex: 10,
                        opacity: currentIndex === 0 ? 0.3 : 1, // Visual indication if desired, or keep hidden logic
                        visibility: currentIndex === 0 ? 'hidden' : 'visible',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                >
                    <span className="arrow-left"></span>
                </div>

                {/* Product Slider Window */}
                <div
                    className="slider-window"
                    style={{
                        overflow: 'hidden',
                        padding: '0 60px' // Keep padding for arrow space
                    }}
                >
                    {/* Sliding Track */}
                    <div
                        className="slider-track"
                        style={{
                            display: 'flex',
                            transition: 'transform 0.5s ease-in-out',
                            transform: `translateX(-${currentIndex * 100}%)`,
                            width: '100%'
                        }}
                    >
                        {allProducts.map((productSet, index) => (
                            <div
                                key={index}
                                className="product-set"
                                style={{
                                    minWidth: '100%',
                                    display: 'flex',
                                    gap: '30px',
                                    justifyContent: 'center'
                                }}
                            >
                                {productSet.map(product => (
                                    <div key={product.id} className="eyeglass-product-card" style={{ flex: '0 0 30%' }}>
                                        <img src={product.image} alt={product.alt} className="product-image" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <div
                    className="grid-arrow right"
                    onClick={toggleSet}
                    style={{
                        position: 'absolute',
                        right: 0,
                        zIndex: 10,
                        visibility: currentIndex >= allProducts.length - 1 ? 'hidden' : 'visible',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                >
                    <span className="arrow-right"></span>
                </div>
            </div>
        </div>
    );
};
export default ZeroPowerComputerGlassesGrid;
