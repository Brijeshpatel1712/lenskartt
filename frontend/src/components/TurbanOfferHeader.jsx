import React from 'react';
import { useNavigate } from 'react-router-dom';

const TurbanOfferHeader = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            height: '60px',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderBottom: '1px solid #e0e0e0',
            padding: '0 30px'
        }}>
            {/* Centered Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                    alt="Lenskart"
                    style={{ height: '35px' }}
                />
            </div>

            {/* Right side Close Button */}
            <div
                onClick={() => navigate(-1)}
                style={{
                    position: 'absolute',
                    right: '30px',
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px'
                }}
            >
                ✕
            </div>
        </div>
    );
};

export default TurbanOfferHeader;
