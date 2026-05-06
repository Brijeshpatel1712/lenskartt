import React, { useState } from 'react';
import './FilterSidebar.css';

// Importing available shape icons
import aviatorIcon from '../assets/aviator.webp';
import catEyeIcon from '../assets/cateeye.webp';
import clubmasterIcon from '../assets/clubmaster.webp';
import roundIcon from '../assets/trans.webp'; // Using trans.webp as a placeholder for round if needed
import squareIcon from '../assets/blend.webp'; // Using blend.webp as placeholder for square

const FilterSidebar = () => {
    const [openSections, setOpenSections] = useState({
        brands: false,
        frameSize: false,
        price: false,
        gender: false,
        material: false,
        weightGroup: false,
        prescriptionType: false,
        supportedPowers: false,
        glassColor: false,
        frameWidth: false,
        countryOfOrigin: false,
        productType: false,
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="filter-sidebar">
            <div className="filter-group">
                <h3 className="filter-title">FRAME TYPE</h3>
                <div className="icon-grid">
                    <div className="icon-item">
                        <div className="icon-box"><span className="placeholder-icon">👓</span></div>
                        <span>Full Rim</span>
                    </div>
                    <div className="icon-item">
                        <div className="icon-box"><span className="placeholder-icon">👓</span></div>
                        <span>Rimless</span>
                    </div>
                    <div className="icon-item">
                        <div className="icon-box"><span className="placeholder-icon">👓</span></div>
                        <span>Half Rim</span>
                    </div>
                </div>
            </div>

            <div className="filter-group">
                <h3 className="filter-title">FRAME SHAPE</h3>
                <div className="icon-grid">
                    <div className="icon-item">
                        <div className="icon-box"><img src={squareIcon} alt="Square" /></div>
                        <span>Square</span>
                    </div>
                    <div className="icon-item">
                        <div className="icon-box"><img src={squareIcon} alt="Rectangle" /></div>
                        <span>Rectangle</span>
                    </div>
                    <div className="icon-item">
                        <div className="icon-box"><img src={roundIcon} alt="Round" /></div>
                        <span>Round</span>
                    </div>
                    <div className="icon-item">
                        <div className="icon-box"><img src={catEyeIcon} alt="Cat Eye" /></div>
                        <span>Cat Eye</span>
                    </div>
                    <div className="icon-item">
                        <div className="icon-box"><img src={aviatorIcon} alt="Aviator" /></div>
                        <span>Aviator</span>
                    </div>
                    <div className="icon-item">
                        <div className="icon-box"><span className="placeholder-icon">📐</span></div>
                        <span>Geometric</span>
                    </div>
                    <div className="icon-item">
                        <div className="icon-box"><img src={clubmasterIcon} alt="Clubmaster" /></div>
                        <span>Clubmaster</span>
                    </div>
                </div>
            </div>

            <div className="filter-group">
                <h3 className="filter-title">FRAME COLOR</h3>
                <div className="checkbox-list scrollable">
                    {['Black(89)', 'Transparent(55)', 'Gold(39)', 'Brown(22)', 'Silver(22)', 'Green(19)', 'Gunmetal(19)', 'Blue(16)', 'Red(4)', 'Pink(3)', 'Purple(3)', 'Grey(2)', 'Yellow(2)'].map(color => (
                        <label key={color} className="checkbox-item">
                            <input type="checkbox" />
                            <span>{color}</span>
                        </label>
                    ))}
                </div>
            </div>

            {[
                { id: 'brands', label: 'BRANDS' },
                { id: 'frameSize', label: 'FRAME SIZE' },
                { id: 'price', label: 'PRICE' },
                { id: 'gender', label: 'GENDER' },
                { id: 'material', label: 'MATERIAL' },
                { id: 'weightGroup', label: 'WEIGHT GROUP' },
                { id: 'prescriptionType', label: 'PRESCRIPTION TYPE' },
                { id: 'supportedPowers', label: 'SUPPORTED POWERS' },
                { id: 'glassColor', label: 'GLASS COLOR' },
                { id: 'frameWidth', label: 'FRAME WIDTH' },
                { id: 'countryOfOrigin', label: 'COUNTRY OF ORIGIN' },
                { id: 'productType', label: 'PRODUCT TYPE' },
            ].map(section => (
                <div key={section.id} className="collapsible-section">
                    <div className="collapsible-header" onClick={() => toggleSection(section.id)}>
                        <span>{section.label}</span>
                        <span className={`arrow ${openSections[section.id] ? 'up' : 'down'}`}>▼</span>
                    </div>
                    {openSections[section.id] && <div className="collapsible-content">Content for {section.label}</div>}
                </div>
            ))}
        </div>
    );
};

export default FilterSidebar;
