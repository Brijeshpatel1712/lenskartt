import React, { useEffect, useState } from 'react';
import eyeImg from '../assets/image_2815eye.webp';
import zpImg from '../assets/Frame_1991634409zp.webp';
import clImg from '../assets/image_2817-cl.webp';
import kidsImg from '../assets/image_2818-kids.webp';
import sunImg from '../assets/image_2816-sun.webp';
import progImg from '../assets/image-Prog.webp';
import squareImg from '../assets/Extra_Wide-4eye.webp';
import rectangleImg from '../assets/Extra_Wide-4-1eye.webp';
import roundImg from '../assets/Extra_Wide-4-2eye.webp';
import geometricImg from '../assets/Extra_Wide-4-3eye.webp';

// Zero Power Hover Images
import zpMen from '../assets/Extra_Wide-4zp.webp';
import zpWomen from '../assets/Extra_Wide-4-1zp (1).jpg';
import zpKids from '../assets/Extra_Wide-4-2zp.webp';

// Kids Glasses Hover Images
import kidsAge1 from '../assets/Extra_Wide-4-kids.webp';
import kidsAge2 from '../assets/Extra_Wide-4-1-kids.webp';
import kidsAge3 from '../assets/Extra_Wide-4-2-kids.webp';
import kidsAge4 from '../assets/Extra_Wide-4-3-kids.webp';

// Contact Lenses Hover Images
import clImg1 from '../assets/Extra_Wide-4-cl.webp';
import clImg2 from '../assets/Extra_Wide-4-cl (1).webp';
import clImg3 from '../assets/Extra_Wide-4-2-cl.webp';
import clImg4 from '../assets/Extra_Wide-4-3-cl.webp';

// Sunglasses Hover Images
import sunSquare from '../assets/Extra_Wide-4-sun.webp';
import sunRectangle from '../assets/Extra_Wide-4-1-sun.webp';
import sunAviator from '../assets/Extra_Wide-4-2-sun.webp';
import sunGeometric from '../assets/Extra_Wide-4-4-sun.webp';

const ShapeDropdown = () => {
    const shapes = [
        { name: 'Square', image: squareImg },
        { name: 'Rectangle', image: rectangleImg },
        { name: 'Round', image: roundImg },
        { name: 'Geometric', image: geometricImg }
    ];

    return (
        <div className="shape-dropdown eyeglasses-dropdown">
            {shapes.map((shape, index) => (
                <div key={index} className={`shape-item custom-cursor-on-hover ${index !== shapes.length - 1 ? 'zp-border' : ''}`}>
                    <img src={shape.image} alt={shape.name} className="shape-icon-large" />
                    <span className="shape-name-bold">{shape.name}</span>
                </div>
            ))}
            <div className="view-all-shapes">
                View all shapes
            </div>
        </div>
    );
};

const ZeroPowerDropdown = () => {
    const categories = [
        { name: 'Men', image: zpMen },
        { name: 'Women', image: zpWomen },
        { name: 'Kids', image: zpKids }
    ];

    return (
        <div className="shape-dropdown zp-dropdown">
            {categories.map((cat, index) => (
                <div
                    key={index}
                    className={`zp-card-item-simple custom-cursor-on-hover ${index !== categories.length - 1 ? 'zp-border' : ''}`}
                >
                    <img src={cat.image} alt={cat.name} className="zp-image-only" />
                </div>
            ))}
        </div>
    );
};

const ContactLensesDropdown = () => {
    const items = [
        { name: 'CL 1', image: clImg1 },
        { name: 'CL 2', image: clImg2 },
        { name: 'CL 3', image: clImg3 },
        { name: 'CL 4', image: clImg4 }
    ];

    return (
        <div className="shape-dropdown eyeglasses-dropdown">
            {items.map((item, index) => (
                <div key={index} className={`zp-card-item-simple custom-cursor-on-hover ${index !== items.length - 1 ? 'zp-border' : ''}`}>
                    <img src={item.image} alt={item.name} className="zp-image-only" />
                </div>
            ))}
        </div>
    );
};

const KidsGlassesDropdown = () => {
    const items = [
        { name: 'Kids 1', image: kidsAge1 },
        { name: 'Kids 2', image: kidsAge2 },
        { name: 'Kids 3', image: kidsAge3 },
        { name: 'Kids 4', image: kidsAge4 }
    ];

    return (
        <div className="shape-dropdown eyeglasses-dropdown">
            {items.map((item, index) => (
                <div key={index} className={`zp-card-item-simple custom-cursor-on-hover ${index !== items.length - 1 ? 'zp-border' : ''}`}>
                    <img src={item.image} alt={item.name} className="zp-image-only" />
                </div>
            ))}
        </div>
    );
};

const SunglassesDropdown = () => {
    const items = [
        { name: 'Sun 1', image: sunSquare },
        { name: 'Sun 2', image: sunRectangle },
        { name: 'Sun 3', image: sunAviator },
        { name: 'Sun 4', image: sunGeometric }
    ];

    return (
        <div className="shape-dropdown eyeglasses-dropdown">
            {items.map((item, index) => (
                <div key={index} className={`zp-card-item-simple custom-cursor-on-hover ${index !== items.length - 1 ? 'zp-border' : ''}`}>
                    <img src={item.image} alt={item.name} className="zp-image-only" />
                </div>
            ))}
        </div>
    );
};

const CategoryGrid = () => {
    const categories = [
        { id: 1, name: "Eyeglasses", image: "/assets/image_2815eye.webp" },
        { id: 2, name: "Zero Power", image: "/assets/Frame_1991634409zp.webp" },
        { id: 3, name: "Contact Lenses", image: "/assets/image_2817-cl.webp" },
        { id: 4, name: "Kids Glasses", image: "/assets/image_2818-kids.webp" },
        { id: 5, name: "Sunglasses", image: "/assets/image_2816-sun.webp" },
        { id: 6, name: "Progressive", image: "/assets/image-Prog.webp" }
    ];

    const [hoveredCategory, setHoveredCategory] = useState(null);

    return (
        <div className="category-grid-container">
            {categories.map((cat) => (
                <div
                    key={cat.id}
                    className={`grid-item ${hoveredCategory === cat.name ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredCategory(cat.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                >
                    <div className="image-wrapper">
                        <img src={cat.image} alt={cat.name} />
                    </div>
                    <div className="cat-name">{cat.name}</div>

                    {cat.name === 'Eyeglasses' && hoveredCategory === 'Eyeglasses' && (
                        <ShapeDropdown />
                    )}

                    {cat.name === 'Zero Power' && hoveredCategory === 'Zero Power' && (
                        <ZeroPowerDropdown />
                    )}

                    {cat.name === 'Contact Lenses' && hoveredCategory === 'Contact Lenses' && (
                        <ContactLensesDropdown />
                    )}

                    {cat.name === 'Kids Glasses' && hoveredCategory === 'Kids Glasses' && (
                        <KidsGlassesDropdown />
                    )}

                    {cat.name === 'Sunglasses' && hoveredCategory === 'Sunglasses' && (
                        <SunglassesDropdown />
                    )}
                </div>
            ))}
        </div>
    );
};

export default CategoryGrid;
