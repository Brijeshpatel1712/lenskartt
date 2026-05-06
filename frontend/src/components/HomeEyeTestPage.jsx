import React from 'react';
import eyeTestVideo from '../assets/EyeTest-Square-LK@Home.mp4';

const HomeEyeTestPage = () => {
    const [openFaqIndex, setOpenFaqIndex] = React.useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const [isTermsOpen, setIsTermsOpen] = React.useState(false);

    const faqs = [
        "What is Lenskart Home Eye Test?",
        "Why Should I Opt for the LensKart Home Eye Test?",
        "What Cities Is this Service Available In?",
        "Where to Go for an Eye Check-Up?",
        "How Much Does the Lenskart Eye Check Up Cost?",
        "How to Test Eye Power at Home?",
        "How to Check Your Eyesight at Home?",
        "How to Check the Eye Number at Home?"
    ];

    return (
        <div style={{ backgroundColor: '#f5f5f5', minHeight: 'calc(100vh - 60px)', padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', maxWidth: '1200px', margin: '0 auto', alignItems: 'flex-start' }}>

                {/* Left Side Container */}
                <div style={{ flex: '1', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '30px' }}>

                    {/* Video Section */}
                    <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        <video
                            src={eyeTestVideo}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>

                    {/* Signs Section */}
                    <div style={{ backgroundColor: '#fff5f0', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0px', marginBottom: '20px' }}>
                            <span style={{ fontSize: '80px', fontWeight: 'bold', lineHeight: '0.8', color: '#000042' }}>6</span>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px' }}>
                                <span style={{ fontSize: '32px', color: '#000042', lineHeight: '1.1' }}>Signs you</span>
                                <span style={{ fontSize: '32px', color: '#000042', fontWeight: 'bold', lineHeight: '1.1' }}>need an eyetest</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '15px' }}>
                            {/* Card 1 */}
                            <div style={{ flex: 1, backgroundColor: 'white', padding: '15px 10px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center' }}>
                                <div style={{ width: '50px', height: '30px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#000042" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                </div>
                                <span style={{ color: '#000042', fontSize: '14px', fontWeight: '500' }}>Hazy <br /> Vision</span>
                            </div>

                            {/* Card 2 */}
                            <div style={{ flex: 1, backgroundColor: 'white', padding: '15px 10px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center' }}>
                                <div style={{ width: '50px', height: '30px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#000042" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="3" fill="#000042" /></svg>
                                </div>
                                <span style={{ color: '#000042', fontSize: '14px', fontWeight: '500' }}>Bright Light <br /> Discomfort</span>
                            </div>

                            {/* Card 3 */}
                            <div style={{ flex: 1, backgroundColor: 'white', padding: '15px 10px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center' }}>
                                <div style={{ width: '50px', height: '30px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#000042" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /><path d="M12 16l2 4l-4 0z" /></svg>
                                </div>
                                <span style={{ color: '#000042', fontSize: '14px', fontWeight: '500' }}>Water Eyes <br /> Discomfort</span>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: '20px', fontFamily: 'sans-serif' }}>FAQs About Home Eye Tests</h2>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {faqs.map((question, index) => (
                                <div key={index} style={{ borderBottom: '1px solid #eee' }}>
                                    <div
                                        onClick={() => toggleFaq(index)}
                                        style={{ padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                                    >
                                        <span style={{ fontSize: '16px', color: '#333', fontFamily: 'sans-serif' }}>{question}</span>
                                        <span style={{ color: '#666', transform: openFaqIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
                                    </div>
                                    {openFaqIndex === index && (
                                        <div style={{ paddingBottom: '15px', color: '#666', fontSize: '14px', fontFamily: 'sans-serif' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px' }}>
                            <span style={{ fontSize: '16px', color: '#333', fontFamily: 'sans-serif' }}>Need more help</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                                <span style={{ fontSize: '16px', color: '#000', fontFamily: 'sans-serif' }}>Chat with us</span>
                                <span>&gt;</span>
                            </div>
                        </div>
                    </div>

                    {/* Rating & Reviews Section */}
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontFamily: 'sans-serif' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000042', marginBottom: '20px' }}>Rating & Reviews</h2>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}>
                            <span style={{ color: '#00bfa5', fontSize: '24px' }}>★★★★☆</span>
                            <span style={{ fontWeight: 'bold', color: '#333', fontSize: '24px' }}>4.9</span>
                            <span style={{ color: '#666', fontSize: '18px' }}>(17k)</span>
                        </div>

                        {/* Review 1 */}
                        <div style={{ marginBottom: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                <div style={{ backgroundColor: '#ced4da', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg viewBox="0 0 24 24" fill="white" width="40" height="40"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                </div>
                                <div>
                                    <div style={{ color: '#00bfa5', fontSize: '18px', marginBottom: '3px' }}>★★★★★</div>
                                    <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#000' }}>Neha Kapoor</div>
                                </div>
                            </div>
                            <p style={{ color: '#333', fontSize: '16px', margin: '0' }}>Top-notch service, convenient and accurate.</p>
                        </div>

                        {/* Review 2 */}
                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                <div style={{ backgroundColor: '#ced4da', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg viewBox="0 0 24 24" fill="white" width="40" height="40"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                </div>
                                <div>
                                    <div style={{ color: '#00bfa5', fontSize: '18px', marginBottom: '3px' }}>★★★★☆</div>
                                    <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#000' }}>Mohan Joshi</div>
                                </div>
                            </div>
                            <p style={{ color: '#333', fontSize: '16px', margin: '0' }}>Quality check-up at home. Highly recommended!</p>
                        </div>

                        <div style={{ marginTop: '20px', color: '#333', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>Load More Reviews...</div>
                    </div>

                    {/* Terms and Conditions Section */}
                    <div style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontFamily: 'sans-serif' }}>
                        <div
                            onClick={() => setIsTermsOpen(!isTermsOpen)}
                            style={{ padding: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                        >
                            <span style={{ fontSize: '18px', color: '#333', fontWeight: '500' }}>Terms and conditions</span>
                            <span style={{ color: '#666', transform: isTermsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
                        </div>
                        {isTermsOpen && (
                            <div style={{ padding: '0 30px 20px 30px', color: '#666', fontSize: '14px' }}>
                                <p>1. Subscription is valid for one year from the date of purchase.</p>
                                <p>2. Benefits cannot be clubbed with other offers.</p>
                                <p>3. Service is subject to availability in your city.</p>
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Side - Booking Card */}
                <div style={{
                    flex: '1',
                    maxWidth: '500px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    fontFamily: 'sans-serif',
                    position: 'sticky',
                    top: '20px',
                    height: 'fit-content'
                }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 10px 0', color: '#000' }}>Lenskart at Home</h1>
                    <p style={{ fontSize: '16px', color: '#000042', margin: '0 0 15px 0' }}>Eye Test & Frame Trial Service</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
                        <span style={{ color: '#00bfa5', fontSize: '18px' }}>★★★★☆</span>
                        <span style={{ fontWeight: 'bold', color: '#333' }}>4.9</span>
                        <span style={{ color: '#666', fontSize: '14px', textDecoration: 'underline' }}>(17k)</span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 15px 0', color: '#000042' }}>Eye test eligibility</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '24px', height: '24px', backgroundColor: '#e0f2f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: '#00bfa5', fontSize: '14px' }}>✔</span>
                            </div>
                            <span style={{ color: '#444', fontSize: '15px' }}>A well-lit room with 10 ft space is required</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '24px', height: '24px', backgroundColor: '#e0f2f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: '#00bfa5', fontSize: '14px' }}>✔</span>
                            </div>
                            <span style={{ color: '#444', fontSize: '15px' }}>Required age for eye test is 14 - 75 years</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                            <div style={{ minWidth: '24px', height: '24px', backgroundColor: '#ffebee', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: '#d32f2f', fontSize: '14px' }}>✖</span>
                            </div>
                            <span style={{ color: '#444', fontSize: '15px' }}>Not for Diabetics or those with High BP (Clinical eye test is required)</span>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px dashed #ddd', margin: '20px 0' }}></div>

                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#000042' }}>What to expect?</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#000042" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="2" /></svg></div>
                            <span style={{ color: '#444', fontSize: '15px' }}>12 Step Eye Checkup by certified professionals</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#000042" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg></div>
                            <span style={{ color: '#444', fontSize: '15px' }}>Latest Eye Test Equipments</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px' }}><svg viewBox="0 0 24 24" fill="none" stroke="#000042" strokeWidth="2"><circle cx="6" cy="12" r="4" /><circle cx="18" cy="12" r="4" /><line x1="10" y1="12" x2="14" y2="12" /></svg></div>
                            <span style={{ color: '#444', fontSize: '15px' }}>Try 150+ frames at home</span>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px dashed #ddd', margin: '20px 0' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#000' }}>Lenskart at Home</span>
                        <div>
                            <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '10px' }}>₹120</span>
                            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>₹99</span>
                        </div>
                    </div>

                    <button style={{
                        width: '100%',
                        backgroundColor: '#000042',
                        color: 'white',
                        padding: '15px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        BOOK APPOINTMENT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeEyeTestPage;
