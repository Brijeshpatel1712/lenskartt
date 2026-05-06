import React from 'react';
import './PremiumProductGrid.css';

// Importing actual product images from src/assets/premium
import p1 from '../assets/premium/transparent-full-rim-square-john-jacobs-rich-acetate-jj-e10235-c7-eyeglasses-chandler_g_2374_30_9_2025.webp';
import p2 from '../assets/premium/black-full-rim-aviator-john-jacobs-rich-acetate-jj-e13346---c2-eyeglasses-celeste_cc_dsc4734.webp';
import p3 from '../assets/premium/black-blue-full-rim-square-john-jacobs-rich-acetate-jj-e10232--c4-eyeglasses-francisco_dsc0370_27_10_2025.webp';
import p4 from '../assets/premium/gunmetal--black-full-rim-rectangle-john-jacobs-supreme-steel-jj-e11540-c6-eyeglasses_g_7769_25_04_2023.webp';
import p5 from '../assets/premium/green-brown-full-rim-rectangle-john-jacobs-tr-flex-jj-e16847-c1-eyeglasses__dsc5067_23_04_2024.webp';
import p6 from '../assets/premium/john-jacobs-jj-e13343-c2-eyeglasses_g_5786.webp';

const products = [
    {
        id: 1,
        brand: "John Jacobs",
        name: "Size: Medium • John Jacobs",
        image: p1,
        rating: 4.8,
        ratingCount: 2192,
        price: 3100,
        mrp: 3900,
        discount: "21% OFF",
        colors: ['#eee', '#000']
    },
    {
        id: 2,
        brand: "John Jacobs",
        name: "Size: Medium • John Jacobs",
        image: p2,
        rating: 4.8,
        ratingCount: 2087,
        price: 3100,
        mrp: 3900,
        discount: "21% OFF",
        colors: ['#000']
    },
    {
        id: 3,
        brand: "John Jacobs",
        name: "Size: Wide •",
        image: p3,
        rating: 4.9,
        ratingCount: 2588,
        price: 3100,
        mrp: 3900,
        discount: "21% OFF",
        colors: ['#000', '#0000ff']
    },
    {
        id: 4,
        brand: "John Jacobs",
        name: "Size: Medium • John Jacobs",
        image: p4,
        rating: 4.8,
        ratingCount: 2640,
        price: 4100,
        mrp: 4900,
        discount: "16% OFF",
        colors: ['#333', '#000']
    },
    {
        id: 5,
        brand: "John Jacobs",
        name: "Size: Medium • John Jacobs",
        image: p5,
        rating: 4.9,
        ratingCount: 1036,
        price: 3100,
        mrp: 3900,
        discount: "21% OFF",
        colors: ['#006400', '#8b4513']
    },
    {
        id: 6,
        brand: "John Jacobs",
        name: "Size: Wide •",
        image: p6,
        rating: 4.8,
        ratingCount: 1739,
        price: 3100,
        mrp: 3900,
        discount: "21% OFF",
        colors: ['#000']
    }
];

const PremiumProductGrid = () => {
    return (
        <div className="premium-product-grid-container">
            <div className="grid-toolbar">
                <div className="toolbar-left">
                    <span className="breadcrumb-title">BESTSELLERS PREMIUM EYEGLASSES</span>
                </div>
                <div className="toolbar-right">
                    <div className="view-toggle">
                        <span>VIEW FRAMES</span>
                        <div className="toggle-switch">
                            <span className="toggle-thumb"></span>
                        </div>
                        <span>VIEW 3D TRY ON</span>
                    </div>
                    <div className="sort-by">
                        <span>⇅ SORT BY</span>
                        <select>
                            <option>Best Sellers</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="results-count">
                Showing 30 of 331 Results
            </div>

            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="wishlist-icon">♡</div>
                        <div className="product-image-container">
                            <img src={product.image} alt={product.brand} />
                        </div>
                        <div className="product-info">
                            <div className="rating-badge">
                                <span className="rating-value">{product.rating}</span>
                                <span className="rating-star">★</span>
                                <span className="rating-count">{product.ratingCount}</span>
                            </div>
                            <h3 className="product-brand">{product.brand}</h3>
                            <p className="product-name">{product.name}</p>
                            <div className="product-price-section">
                                <span className="current-price">₹{product.price}</span>
                                <span className="mrp">₹{product.mrp}</span>
                                <span className="discount">({product.discount})</span>
                            </div>
                        </div>
                        {product.colors && (
                            <div className="color-swatches">
                                {product.colors.map((color, index) => (
                                    <span
                                        key={index}
                                        className="color-dot"
                                        style={{ backgroundColor: color }}
                                    ></span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumProductGrid;
