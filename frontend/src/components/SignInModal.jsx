import React, { useState } from 'react';
import './SignInModal.css';
import bannerImg from '../assets/signin-model.png';

const SignInModal = ({ isOpen, onClose }) => {
    const [view, setView] = useState('signup'); // 'signin' or 'signup'
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Sign In State
    const [signInData, setSignInData] = useState({ identifier: '', password: '' });

    // Sign Up State
    const [signUpData, setSignUpData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: ''
    });

    if (!isOpen) return null;

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:5000/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signInData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage({ type: 'success', text: 'Logged in successfully!' });
                setTimeout(() => {
                    onClose();
                    setMessage({ type: '', text: '' });
                }, 1500);
            } else {
                setMessage({ type: 'error', text: data.message });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Something went wrong' });
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signUpData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage({ type: 'success', text: 'Account created successfully!' });
                setTimeout(() => {
                    setView('signin');
                    setMessage({ type: '', text: '' });
                }, 1500);
            } else {
                setMessage({ type: 'error', text: data.message });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Something went wrong' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={`modal-content ${view === 'signup' ? 'signup-mode' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>

                <div className="modal-body">
                    {view === 'signin' && (
                        <div className="banner-section">
                            <img src={bannerImg} alt="Sign In Banner" className="banner-image" />
                        </div>
                    )}

                    <div className="form-section">
                        <div className="form-container">
                            {message.text && (
                                <div className={`auth-message ${message.type}`} style={{ 
                                    padding: '10px', 
                                    marginBottom: '10px', 
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                    backgroundColor: message.type === 'success' ? '#e7f7ed' : '#feecef',
                                    color: message.type === 'success' ? '#0a7c3f' : '#d32f2f'
                                }}>
                                    {message.text}
                                </div>
                            )}

                            {view === 'signin' ? (
                                <form onSubmit={handleSignIn}>
                                    <h2>Sign In</h2>
                                    <div className="input-group">
                                        <input 
                                            type="text" 
                                            placeholder="Mobile / Email" 
                                            className="input-field" 
                                            required
                                            value={signInData.identifier}
                                            onChange={(e) => setSignInData({ ...signInData, identifier: e.target.value })}
                                        />
                                        <input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="input-field" 
                                            required
                                            style={{ marginTop: '10px' }}
                                            value={signInData.password}
                                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                                        />
                                    </div>
                                    <label className="checkbox-group">
                                        <input type="checkbox" defaultChecked />
                                        <span>Get updates on Whatsapp</span>
                                        <span className="whatsapp-icon">📱</span>
                                    </label>
                                    <button type="submit" className="submit-button" disabled={loading}>
                                        {loading ? 'Processing...' : 'Sign In'}
                                    </button>
                                    <div className="create-account">
                                        New member? <a href="#" onClick={(e) => { e.preventDefault(); setView('signup'); setMessage({ type: '', text: '' }); }}>Create an Account</a>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleSignUp}>
                                    <h2>Create an Account</h2>
                                    <div className="input-group">
                                        <input 
                                            type="text" 
                                            placeholder="First Name*" 
                                            className="input-field" 
                                            style={{ marginBottom: '10px' }} 
                                            required
                                            value={signUpData.firstName}
                                            onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })}
                                        />
                                        <input 
                                            type="text" 
                                            placeholder="Last Name" 
                                            className="input-field" 
                                            style={{ marginBottom: '10px' }}
                                            value={signUpData.lastName}
                                            onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })}
                                        />
                                        <div className="mobile-group">
                                            <span className="prefix-box">+91</span>
                                            <input 
                                                type="text" 
                                                placeholder="Mobile*" 
                                                className="input-field" 
                                                style={{ flex: 1 }} 
                                                required
                                                value={signUpData.mobile}
                                                onChange={(e) => setSignUpData({ ...signUpData, mobile: e.target.value })}
                                            />
                                        </div>
                                        <input 
                                            type="email" 
                                            placeholder="Email*" 
                                            className="input-field" 
                                            style={{ marginBottom: '10px', marginTop: '10px' }} 
                                            required
                                            value={signUpData.email}
                                            onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                                        />
                                        <input 
                                            type="password" 
                                            placeholder="Password*" 
                                            className="input-field" 
                                            style={{ marginBottom: '10px' }} 
                                            required
                                            value={signUpData.password}
                                            onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                                        />
                                    </div>

                                    <label className="checkbox-group">
                                        <input type="checkbox" defaultChecked />
                                        <span>Get updates on Whatsapp</span>
                                        <span className="whatsapp-icon">📱</span>
                                    </label>

                                    <button type="submit" className="submit-button" disabled={loading}>
                                        {loading ? 'Creating...' : 'Create an Account'}
                                    </button>
                                    <div className="create-account">
                                        Have an account? <a href="#" onClick={(e) => { e.preventDefault(); setView('signin'); setMessage({ type: '', text: '' }); }}>Sign In</a>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
