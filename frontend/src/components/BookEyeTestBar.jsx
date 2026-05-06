import React from 'react';
import { Link } from 'react-router-dom';
import bookEyeTestImage from '../assets/book-eye-test-section.png';
import hechomeImage from '../assets/hechome11.webp';

const BookEyeTestBar = () => {
    return (
        <div className="book-eye-test-bar">
            <img src={bookEyeTestImage} alt="Book Eye Test at Home" className="book-eye-test-image" />
            <Link to="/home-eye-test">
                <img src={hechomeImage} alt="Home Eye Check" className="book-eye-test-image" style={{ cursor: 'pointer' }} />
            </Link>
        </div>
    );
};

export default BookEyeTestBar;
