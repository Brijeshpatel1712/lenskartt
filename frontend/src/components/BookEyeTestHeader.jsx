import React from 'react';

const BookEyeTestHeader = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px 0 20px',
            padding: '0 20px'
        }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }}></div>
            <h2 style={{
                margin: '0 20px',
                fontSize: '28px',
                color: '#333',
                fontWeight: '400',
                letterSpacing: '0.5px',
                textAlign: 'center'
            }}>
                BOOK EYE TEST AT HOME
            </h2>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }}></div>
        </div>
    );
};

export default BookEyeTestHeader;
