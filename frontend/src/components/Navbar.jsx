import React, { useState, useEffect, useRef } from 'react';
import SignInModal from './SignInModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ topBarStyle = {} }) => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef(null);

    const searchableItems = [
        { title: "BUY IT YOUR WAY", id: "buy-it-your-way", category: "Section" },
        { title: "SUNGLASSES", id: "sunglasses-section", category: "Products" },
        { title: "EYEGLASSES", id: "eyeglasses-section", category: "Products" },
        { title: "CONTACT LENSES", id: "contact-lenses-section", category: "Products" },
        { title: "COMPUTER GLASSES", id: "computer-glasses-section", category: "Products" },
        { title: "WEAR THE TREND", id: "wear-the-trend", category: "Section" },
        { title: "FIND THE PERFECT FIT", id: "find-the-perfect-fit", category: "Section" },
        { title: "BOGO OFFER", id: "bogo-strip", category: "Offer" },
        { title: "LENS REPLACEMENT", path: "/lens-replacement", category: "Service" },
        { title: "HOME EYE TEST", path: "/home-eye-test", category: "Service" },
        { title: "SHARK TANK", path: "/shark-tank", category: "Collection" }
    ];

    const openSignIn = () => setIsSignInOpen(true);
    const closeSignIn = () => setIsSignInOpen(false);

    const isHome = location.pathname === '/';

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        const filtered = searchableItems.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSuggestions(filtered);
        setShowSuggestions(true);
    }, [searchQuery]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSuggestionClick = (item) => {
        setSearchQuery('');
        setShowSuggestions(false);

        if (item.path) {
            navigate(item.path);
        } else if (item.id) {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    scrollToId(item.id);
                }, 100);
            } else {
                scrollToId(item.id);
            }
        }
    };

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -150; // Offset for sticky header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar-container">
            <div className="top-bar" style={topBarStyle}>
                <div className="left-links">
                    <span>Corporate</span> | <span>StoreLocator</span> | <span>Singapore</span> | <span>UAE</span> | <span>John Jacobs</span> | <span>Aqualens</span> | <span>Cobrowsing</span> | <span>Engineering Blog</span> | <span>Partner With Us</span>
                </div>
                <div className="right-links">
                    <span>Contact Us</span>
                </div>
            </div>
            <div className="main-nav">
                <div className="logo-section">
                    {!isHome && (
                        <span
                            className="back-arrow"
                            onClick={() => navigate(-1)}
                            style={{
                                cursor: 'pointer',
                                fontSize: '28px',
                                marginRight: '15px',
                                color: '#000042',
                                transition: 'color 0.2s'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#329c92'}
                            onMouseOut={(e) => e.target.style.color = '#000042'}
                        >
                            &larr;
                        </span>
                    )}
                    <Link to="/">
                        <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="Lenskart" className="logo" />
                    </Link>
                    <span className="phone">99998 99998</span>
                </div>
                <div className="search-bar" ref={searchRef} style={{ position: 'relative' }}>
                    <input 
                        type="text" 
                        placeholder="What are you looking for?" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => searchQuery && setShowSuggestions(true)}
                    />
                    {showSuggestions && suggestions.length > 0 && (
                        <div className="search-suggestions" style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: '#fff',
                            border: '1px solid #eee',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                            maxHeight: '300px',
                            overflowY: 'auto',
                            borderRadius: '0 0 4px 4px'
                        }}>
                            {suggestions.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="suggestion-item"
                                    onClick={() => handleSuggestionClick(item)}
                                    style={{
                                        padding: '12px 15px',
                                        cursor: 'pointer',
                                        borderBottom: '1px solid #f9f9f9',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <span style={{ fontSize: '10px', color: '#999', display: 'block', textTransform: 'uppercase' }}>{item.category}</span>
                                    <span style={{ fontSize: '14px', color: '#000042', fontWeight: '500' }}>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="user-actions">
                    <span>Track Order</span>
                    <span onClick={openSignIn} style={{ cursor: 'pointer' }}>Sign In & Sign Up</span>
                    <span className="icon-link">♡ Wishlist</span>
                    <span className="icon-link">🛒 Cart</span>
                </div>
            </div>
            <SignInModal isOpen={isSignInOpen} onClose={closeSignIn} />
        </div>
    );
};

export default Navbar;
