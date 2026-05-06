import React from 'react';
import bogoBanner from '../assets/1920x520-desktop-banner.jpg';
import whyItWorks from '../assets/BUY2ndLater-LP-non-gold-why-it-works-for-you-heading_12062025_rat.webp';
import whyItWorksUpdated from '../assets/Non_gold-Why_It_Works_for_You-new-updated.webp';
import howItWorksHeading from '../assets/how-it-works-heading.png';
import howItWorksSteps from '../assets/BUY2ndLater-LP-gold-why-it-works-for-you-steps_2.webp';
import shopButton from '../assets/Buy2ndlater-shop-button-1.webp';
import goldHowItWorksHeading from '../assets/BUY2ndLater-LP-gold-how-it-works-heading-1_12062025_rat.webp';
import cashback from '../assets/BUY2ndLater-LP-non-gold-cashback.webp';
import freeService from '../assets/BUY2ndLater-LP-non-gold-free-service.webp';
import freeEyeTest from '../assets/BUY2ndLater-LP-non-gold-free-eye-test.webp';
import freeAqualens from '../assets/BUY2ndLater-LP-non-gold-free-aqualens.webp';
import moreReasonToBuy from '../assets/BUY2ndLater-LP-non-gold-More_reason_to_buy-combined.webp';
import faqHeading from '../assets/BUY2ndLater-LP-non-gold-FAQ-heading.webp';
import faqContent from '../assets/faq-content.png';
import faqContent2 from '../assets/faq-content-2.png';
import pageFooter from '../assets/BUY2ndLater-LP-non-gold-l1page-footer.webp';

const BogoOfferPage = () => {
    return (
        <div className="bogo-offer-page">
            <div className="bogo-images-container">
                <img src={bogoBanner} alt="Buy 1 Get 1 Free - Lenskart Gold Max Membership" className="bogo-full-image" />

                <h2 className="bogo-section-heading">Why It Works For You</h2>
                <img src={whyItWorks} alt="Why It Works For You" className="bogo-full-image" />
                <img src={whyItWorksUpdated} alt="Why It Works For You - Updated" className="bogo-full-image" />

                <img src={howItWorksHeading} alt="How it works" className="bogo-full-image" />
                <img src={howItWorksSteps} alt="How it works - Steps" className="bogo-full-image" />
                <img src={shopButton} alt="Shop Now" className="bogo-full-image" />
                <img src={goldHowItWorksHeading} alt="How it works - Gold" className="bogo-full-image" />
                <img src={cashback} alt="Cashback" className="bogo-full-image" />
                <img src={freeService} alt="Free Service" className="bogo-full-image" />
                <img src={freeEyeTest} alt="Free Eye Test" className="bogo-full-image" />
                <img src={freeAqualens} alt="Free Aqualens" className="bogo-full-image" />
                <img src={shopButton} alt="Shop Now" className="bogo-full-image" />
                <img src={moreReasonToBuy} alt="More Reason to Buy" className="bogo-full-image" />
                <img src={faqHeading} alt="FAQ" className="bogo-full-image" />
                <img src={faqContent} alt="FAQ Content" className="bogo-full-image" />
                <img src={faqContent2} alt="FAQ Content 2" className="bogo-full-image" />
                <img src={pageFooter} alt="Page Footer" className="bogo-full-image" />
            </div>
        </div>
    );
};

export default BogoOfferPage;
