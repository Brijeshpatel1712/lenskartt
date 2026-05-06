import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeEyeTestHeader = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            backgroundColor: '#000042',
            padding: '10px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            height: '50px',
            position: 'relative',
            zIndex: 2001
        }}>
            {/* Left side - Branding & Back Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span
                    onClick={() => navigate(-1)}
                    style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}
                >
                    &larr;
                </span>
                <div className="logo-container" style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                    lenskart <span style={{ fontWeight: 'normal' }}>at home</span>
                </div>
            </div>

            {/* Right side - Contact Info */}
            <div className="contact-info" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 'bold' }}>
                <span className="phone-icon" style={{
                    backgroundColor: 'white',
                    color: '#000042',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px'
                }}>📞</span>
                <span>+919021340340</span>
            </div>
        </div>
    );
};

export default HomeEyeTestHeader;
