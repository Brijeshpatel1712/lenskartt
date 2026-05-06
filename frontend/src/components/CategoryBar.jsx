import React, { useState } from 'react';
import MegaMenu from './MegaMenu';

const CategoryBar = () => {
    const categories = ["EYEGLASSES", "SCREEN GLASSES", "KIDS GLASSES", "CONTACT LENSES", "SUNGLASSES", "HOME EYE-TEST", "STORE LOCATOR", "SALE"];
    const [clickedCategory, setClickedCategory] = useState(null);

    const handleCategoryClick = (cat) => {
        if (clickedCategory === cat) {
            setClickedCategory(null);
        } else {
            setClickedCategory(cat);
        }
    };

    return (
        <div className="category-bar">
            <div className="categories">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className={`category-item custom-cursor-on-hover ${clickedCategory === cat ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(cat)}
                        onMouseEnter={() => window.innerWidth > 768 && setClickedCategory(cat)}
                        onMouseLeave={() => window.innerWidth > 768 && setClickedCategory(null)}
                    >
                        {cat}
                        {(cat === "EYEGLASSES" || cat === "SCREEN GLASSES" || cat === "KIDS GLASSES" || cat === "CONTACT LENSES" || cat === "SUNGLASSES" || cat === "HOME EYE-TEST" || cat === "STORE LOCATOR") && clickedCategory === cat && (
                            <MegaMenu activeCategory={cat} onClose={() => setClickedCategory(null)} />
                        )}
                    </div>
                ))}
            </div>
            <div className="category-actions">
                <span className="feat-btn try-on">3D TRY ON</span>
                <span className="feat-btn blu">BLU</span>
                <span className="feat-btn gold">GOLD</span>
            </div>
        </div>
    );
};

export default CategoryBar;
