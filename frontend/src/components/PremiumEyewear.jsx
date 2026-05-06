import { Link } from 'react-router-dom';
import g1 from '../assets/Extra_Wide-4eye.webp';
import g2 from '../assets/Extra_Wide-4-1eye.webp';
import g3 from '../assets/Extra_Wide-4-2eye.webp';
import r1 from '../assets/r1.webp';


const PremiumEyewear = ({ showTitle = true }) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '40px',
        marginTop: showTitle ? '0' : '20px'
    };

    return (
        <div className="section-divider-container" style={{ padding: showTitle ? '20px 0' : '0 0 20px', maxWidth: '1440px', margin: '0 auto' }}>
            {showTitle && (
                <div className="title-with-lines" style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '20px' }}>
                    <span className="line" style={{ height: '1px', background: '#e0e0e0', flex: 1 }}></span>
                    <h2 className="section-title" style={{ fontSize: '24px', fontWeight: '400', color: '#000', margin: 0, letterSpacing: '2px', whiteSpace: 'nowrap' }}>PREMIUM EYEWEAR</h2>
                    <span className="line" style={{ height: '1px', background: '#e0e0e0', flex: 1 }}></span>
                </div>
            )}
            <Link to="/premium-eyewear" className="r1-banner-container" style={{ display: 'block', marginBottom: '20px' }}>
                <img src={r1} alt="Premium Banner" style={{ width: '100%' }} />
            </Link>
        </div>
    );
};

export default PremiumEyewear;
