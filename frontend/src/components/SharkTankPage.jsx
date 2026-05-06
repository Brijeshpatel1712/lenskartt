import React from 'react';

// Use some existing assets for products
import p1 from '../assets/Extra_Wide-4eye.webp';
import p2 from '../assets/Extra_Wide-4-1eye.webp';
import p3 from '../assets/Extra_Wide-4-2eye.webp';
import p4 from '../assets/Extra_Wide-4-3eye.webp';
import p5 from '../assets/Frame_1991634409zp.webp';
import p6 from '../assets/clipon.webp';

const SharkTankPage = () => {
    const products = [
        {
            id: 1,
            name: "Lenskart Hustlr",
            image: p1,
            rating: "4.8",
            ratingCount: "26416",
            size: "Size: Medium •",
            price: "1400",
            mrp: "1900",
            discount: "26% OFF",
            colors: ['#add8e6', '#ffa500', '#a52a2a', '#00008b'],
            extraColors: "+26",
            powered: true
        },
        {
            id: 2,
            name: "Lenskart Hustlr",
            image: p2,
            rating: "4.8",
            ratingCount: "26416",
            size: "Size: Wide •",
            price: "1400",
            mrp: "1900",
            discount: "26% OFF",
            colors: ['#222', '#ffa500', '#a52a2a', '#00008b'],
            extraColors: "+26",
            powered: true
        },
        {
            id: 3,
            name: "Lenskart Hustlr",
            image: p3,
            rating: "4.8",
            ratingCount: "26416",
            size: "Size: Medium •",
            price: "1400",
            mrp: "1900",
            discount: "26% OFF",
            colors: ['#eee', '#ffa500', '#a52a2a', '#00008b'],
            extraColors: "+27",
            powered: true
        },
        {
            id: 4,
            name: "Lenskart Hustlr",
            image: p4,
            rating: "4.8",
            ratingCount: "26416",
            size: "Size: Medium •",
            price: "1400",
            mrp: "1900",
            discount: "26% OFF",
            colors: ['#333', '#888'],
            powered: false
        },
        {
            id: 5,
            name: "Lenskart Hustlr",
            image: p5,
            rating: "4.8",
            ratingCount: "26416",
            size: "Size: Medium •",
            price: "1400",
            mrp: "1900",
            discount: "26% OFF",
            colors: ['#8b4513', '#d2b48c', '#222'],
            extraColors: "+26",
            powered: true
        },
        {
            id: 6,
            name: "Lenskart Hustlr",
            image: p6,
            rating: "4.8",
            ratingCount: "26416",
            size: "Size: Medium •",
            price: "1400",
            mrp: "1900",
            discount: "26% OFF",
            colors: ['#eee', '#222'],
            extraColors: "+27",
            isClipOn: true
        }
    ];

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'sans-serif', padding: '15px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                {/* Sidebar */}
                <div style={{ width: '220px', flexShrink: 0 }}>
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '12px', color: '#333' }}>FRAME TYPE</h4>
                        <div style={{ border: '1px solid #eee', padding: '10px', textAlign: 'center', width: '80px', borderRadius: '4px' }}>
                            <div style={{ fontSize: '20px', marginBottom: '5px' }}>👓</div>
                            <div style={{ fontSize: '11px' }}>Full Rim</div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '12px', color: '#333' }}>FRAME SHAPE</h4>
                        <div style={{ border: '1px solid #eee', padding: '10px', textAlign: 'center', width: '80px', borderRadius: '4px' }}>
                            <div style={{ fontSize: '20px', marginBottom: '5px' }}>⬜</div>
                            <div style={{ fontSize: '11px' }}>Square</div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '12px', color: '#333' }}>FRAME COLOR</h4>
                        <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input type="checkbox" /> Green(1)
                        </div>
                    </div>

                    {['FRAME SIZE', 'PRICE', 'GENDER', 'MATERIAL', 'WEIGHT GROUP', 'PRESCRIPTION TYPE', 'SUPPORTED POWERS'].map(filter => (
                        <div key={filter} style={{ marginBottom: '20px' }}>
                            <h4 style={{ fontSize: '13px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '8px', color: '#333', display: 'flex', justifyContent: 'space-between' }}>
                                {filter} <span style={{ fontSize: '10px' }}>▼</span>
                            </h4>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div style={{ flex: 1 }}>
                    {/* Toolbar */}
                    <div style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontSize: '12px', color: '#666', fontWeight: '500', letterSpacing: '1px' }}>AS SEEN ON SHARK TANK EYEGLASSES</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                                VIEW FRAMES <div style={{ width: '34px', height: '18px', backgroundColor: '#329c92', borderRadius: '10px', position: 'relative' }}><div style={{ width: '14px', height: '14px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div></div> VIEW 3D TRY ON
                            </div>
                            <div style={{ fontSize: '12px', color: '#333' }}>
                                <span style={{ color: '#666' }}>↕ SORT BY</span> <select style={{ border: '1px solid #ccc', borderRadius: '3px', padding: '2px 5px', fontSize: '11px' }}><option>Best Sellers</option></select>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', fontSize: '11px', color: '#666', marginBottom: '20px' }}>
                        Showing 60 of 155 Results
                    </div>

                    {/* Product Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                        {products.map(product => (
                            <div key={product.id} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '15px', position: 'relative', backgroundColor: '#fff' }}>
                                <div style={{ position: 'absolute', right: '15px', top: '15px', fontSize: '18px', color: '#ccc', cursor: 'pointer' }}>♡</div>

                                {product.powered && (
                                    <div style={{ position: 'absolute', left: '15px', top: '15px', backgroundColor: '#afeeee', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', color: '#333' }}>POWERED</div>
                                )}

                                <div style={{ padding: '20px 0', textAlign: 'center' }}>
                                    <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '220px', objectFit: 'contain' }} />
                                    {product.isClipOn && (
                                        <div style={{ fontSize: '10px', color: '#666', marginTop: '5px' }}>Magnetic Clip-on Glasses<br />Two functions in one pair!</div>
                                    )}
                                </div>

                                <div style={{ backgroundColor: '#f0f0ff', padding: '4px 10px', borderRadius: '20px', display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#000042' }}>{product.rating}</span>
                                    <span style={{ color: '#329c92', fontSize: '14px' }}>★</span>
                                    <span style={{ fontSize: '12px', color: '#666' }}>{product.ratingCount}</span>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <div>
                                        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#333', margin: '0 0 4px 0' }}>{product.name}</h3>
                                        <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>{product.size}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#329c92' }}>₹{product.price}</span>
                                            <span style={{ fontSize: '11px', textDecoration: 'line-through', color: '#ccc' }}>₹{product.mrp}</span>
                                            <span style={{ fontSize: '11px', color: '#329c92', fontWeight: 'bold' }}>({product.discount})</span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '5px' }}>
                                        {product.colors.map((color, idx) => (
                                            <span key={idx} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: color, border: '1px solid #eee' }}></span>
                                        ))}
                                        {product.extraColors && <span style={{ fontSize: '10px', color: '#666', marginLeft: '2px' }}>{product.extraColors}</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharkTankPage;
