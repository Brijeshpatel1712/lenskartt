import React from 'react';
import { useNavigate } from 'react-router-dom';

const TurbanOfferPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            backgroundColor: 'white',
            minHeight: 'calc(100vh - 60px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: 'sans-serif'
        }}>
            <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                <h1 style={{
                    color: '#000042',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    marginBottom: '40px',
                    lineHeight: '1.1'
                }}>
                    Lenskart Online <br /> Vision Screening
                </h1>

                <button style={{
                    width: '100%',
                    backgroundColor: '#000030',
                    color: 'white',
                    padding: '18px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}>
                    Proceed with online eye test
                </button>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '10px 0 20px 0',
                    width: '100%'
                }}>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
                    <span style={{ padding: '0 15px', color: '#999', fontSize: '14px' }}>OR</span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
                </div>

                <button
                    onClick={() => navigate('/home-eye-test')}
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        color: '#000042',
                        padding: '18px',
                        borderRadius: '8px',
                        border: '1px solid #000042',
                        fontSize: '18px',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}
                >
                    Book home eye test
                </button>
            </div>
        </div>
    );
};

export default TurbanOfferPage;
