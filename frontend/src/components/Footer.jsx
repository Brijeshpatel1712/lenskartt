import React from 'react';

const Footer = ({ compact = false }) => {
    return (
        <footer className="footer-container">
            {!compact && (
                <div className="footer-top-description">
                    <h2 className="footer-main-title">Buy Eyewear from Lenskart</h2>
                    <p className="footer-description-text">
                        LENSKART SOLUTIONS LIMITED (Earlier known as Lenskart Solutions Private Limited) is a technology-driven eyewear company, with a belief that clear vision is fundamental to personal development and well-being. Our aim is to build tech-enabled supply and distribution solutions that improve access to affordable and quality Eyewear for All.
                    </p>
                    <p className="footer-description-text">
                        We sell a wide range of eyewear products including prescription <a href="#" className="footer-highlight-link eyeglasses">eyeglasses</a>, <a href="#" className="footer-highlight-link sunglasses">sunglasses</a>, and other products such as <a href="#" className="footer-highlight-link contact-lenses">contact lenses</a> and eyewear accessories. Our brands are designed to be aspirational and appeal to a wide range of customer segments.
                    </p>
                </div>
            )}

            <div className="footer-content">
                <div className="footer-links-grid">
                    {/* Services Section */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Services</h3>
                        <ul className="footer-links">
                            <li><a href="#">Store Locator</a></li>
                            <li><a href="#">Buying Guide</a></li>
                            <li><a href="#">Frame Size</a></li>
                        </ul>
                    </div>

                    {/* About Us Section */}
                    <div className="footer-column">
                        <h3 className="footer-heading">About Us</h3>
                        <ul className="footer-links">
                            <li><a href="#">We Are Hiring</a></li>
                            <li><a href="#">Refer And Earn</a></li>
                            <li><a href="#">Lenskart Coupons</a></li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Help</h3>
                        <ul className="footer-links">
                            <li><a href="#">FAQ's</a></li>
                            <li><a href="#">Grievance Redressal</a></li>
                            <li><a href="#">Cardemi</a></li>
                        </ul>
                    </div>
                </div>

                {/* App Download Section */}
                <div className="footer-app-container">
                    <div className="app-badges-row">
                        <a href="#" className="app-badge">
                            <img src="https://static.lenskart.com/media/desktop/img/play-store.svg" alt="Google Play" />
                        </a>
                        <a href="#" className="app-badge">
                            <img src="https://static.lenskart.com/media/desktop/img/app-store.svg" alt="App Store" />
                        </a>
                    </div>
                    <p className="app-download-text">
                        Download Lenskart App to buy<br />
                        Eyeglasses, Sunglasses and Contact Lenses
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <hr className="footer-horizontal-line" />
            <div className="footer-bottom">
                <div className="footer-legal">
                    <a href="#">T & C</a>
                    <a href="#">Privacy</a>
                    <a href="#">Disclaimer</a>
                    <a href="#">Cookies Settings</a>
                </div>
                <div className="footer-info-social">
                    <span>Version 1.0.0</span>
                    <span className="footer-divider">||</span>
                    <span>Follow Us</span>
                    <div className="social-links">
                        <a href="#" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}

        </footer>
    );
};

export default Footer;
