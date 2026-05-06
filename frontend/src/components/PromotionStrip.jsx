import promoBanner from '../assets/Desktop-v2-topbanner-hustlrswitch-GJ-150525 (1).jpg';
import { Link } from 'react-router-dom';

const PromotionStrip = () => {
    return (
        <div className="promotion-strip-container">
            <div className="promotion-strip">
                <span className="promotion-line"></span>
                <h2 className="promotion-text">FREE LENS REPLACEMENT AT STORES</h2>
                <span className="promotion-line"></span>
            </div>
            <div className="promotion-banner-wrapper">
                <Link to="/lens-replacement">
                    <img src={promoBanner} alt="Promotion Banner" className="promotion-banner-img" />
                </Link>
            </div>
        </div>
    );
};

export default PromotionStrip;
