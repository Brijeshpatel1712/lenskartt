import React from 'react';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import CategoryGrid from './components/CategoryGrid';
import Banner from './components/Banner';
import WearTheTrend from './components/WearTheTrend';
import FindThePerfectFit from './components/FindThePerfectFit';

import BogoStrip from './components/BogoStrip';
import Footer from './components/Footer';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LensReplacementPage from './components/LensReplacementPage';
import BogoOfferPage from './components/BogoOfferPage';

import ScrollToTop from './components/ScrollToTop';
import HomeEyeTestPage from './components/HomeEyeTestPage';
import HomeEyeTestHeader from './components/HomeEyeTestHeader';
import TurbanOfferPage from './components/TurbanOfferPage';
import TurbanOfferHeader from './components/TurbanOfferHeader';
// import PremiumEyewearPage from './components/PremiumEyewearPage';




import PromotionStrip from './components/PromotionStrip';
import BuyItYourWay from './components/BuyItYourWay';
import ContactLensesMore from './components/ContactLensesMore';
import OurBrands from './components/OurBrands';
import ProductSectionHeader from './components/ProductSectionHeader';
import EyeglassesGrid from './components/EyeglassesGrid';
import SunglassesGrid from './components/SunglassesGrid';
import BrandBanner from './components/BrandBanner';
import SecondSunglassesGrid from './components/SecondSunglassesGrid';
import AirBanner from './components/AirBanner';
import SecondEyeglassesGrid from './components/SecondEyeglassesGrid';
import OurBrandsBanner from './components/OurBrandsBanner';
import ContactLensesGrid from './components/ContactLensesGrid';
import ColorContactLensesGrid from './components/ColorContactLensesGrid';
import ReachBanner from './components/ReachBanner';
import ThirdEyeglassesGrid from './components/ThirdEyeglassesGrid';
import Banner05 from './components/Banner05';
import ComputerGlassesGrid from './components/ComputerGlassesGrid';
import ZeroPowerComputerGlassesGrid from './components/ZeroPowerComputerGlassesGrid';
import BookEyeTestHeader from './components/BookEyeTestHeader';
import BookEyeTestBar from './components/BookEyeTestBar';
import PremiumEyewear from './components/PremiumEyewear';
import SharkTankPage from './components/SharkTankPage';
import FilterSidebar from './components/FilterSidebar';
import PremiumProductGrid from './components/PremiumProductGrid';


const Home = () => (
  <>
    <div className="home-container">
      <div className="sticky-header">
        <Navbar />
        <CategoryBar />
      </div>
      <CategoryGrid />


      <Banner />
      <div id="wear-the-trend"><WearTheTrend /></div>

      <PromotionStrip />
      <div id="bogo-strip"><BogoStrip /></div>
      <div id="find-the-perfect-fit"><FindThePerfectFit /></div>
      <ContactLensesMore />
      <div id="buy-it-your-way"><BuyItYourWay /></div>
      <OurBrands />
      <div id="sunglasses-section">
        <ProductSectionHeader title="SUNGLASSES" link="/sunglasses" />
        <SunglassesGrid />
      </div>
      <BrandBanner />
      <div id="eyeglasses-section">
        <ProductSectionHeader title="EYEGLASSES" link="/eyeglasses" />
        <EyeglassesGrid />
      </div>
      <ProductSectionHeader title="SUNGLASSES" link="/sunglasses" />
      <SecondSunglassesGrid />
      <AirBanner />
      <ProductSectionHeader title="EYEGLASSES" link="/eyeglasses" />
      <SecondEyeglassesGrid />
      <ProductSectionHeader title="EYEGLASSES" link="/eyeglasses" />
      <ThirdEyeglassesGrid />
      <Banner05 />
      <div id="computer-glasses-section">
        <ProductSectionHeader title="WITH POWER COMPUTER BLU LENSES" link="/computer-glasses" />
        <ComputerGlassesGrid />
      </div>
      <ProductSectionHeader title="WITH ZERO POWER COMPUTER BLU LENSES" link="/computer-glasses" />
      <ZeroPowerComputerGlassesGrid />
      <OurBrandsBanner />
      <div id="contact-lenses-section">
        <ProductSectionHeader title="CONTACT LENSES" link="/contact-lenses" />
        <ContactLensesGrid />
      </div>
      <ProductSectionHeader title="COLOR CONTACT LENSES" link="/color-contact-lenses" />
      <ColorContactLensesGrid />
      <ReachBanner />
      <Footer />
    </div>
  </>
);

const LensReplacementPageWrapper = () => (
  <div className="page-wrapper">
    <div className="sticky-header">
      <Navbar />
      <CategoryBar />
    </div>
    <LensReplacementPage />
    <Footer />
  </div>
);

const BogoOfferPageWrapper = () => (
  <div className="page-wrapper">
    <div className="sticky-header">
      <Navbar />
      <CategoryBar />
    </div>
    <BogoOfferPage />
    <Footer compact={true} />
  </div>
);

const PremiumEyewearPageWrapper = () => (
  <div className="page-wrapper" style={{ paddingTop: '150px' }}>
    <div className="sticky-header">
      <Navbar />
      <CategoryBar />
    </div>
    <div className="main-content" style={{ display: 'flex' }}>
      <FilterSidebar />
      <PremiumProductGrid />
    </div>
  </div>
);

const TurbanOfferPageWrapper = () => (
  <div className="page-wrapper">
    <TurbanOfferHeader />
    <TurbanOfferPage />
  </div>
);



const HomeEyeTestPageWrapper = () => (
  <div className="page-wrapper" style={{ paddingTop: '50px' }}>
    <div className="sticky-header">
      <HomeEyeTestHeader />
    </div>
    <HomeEyeTestPage />
    <Footer compact={true} />
  </div>
);

const SharkTankPageWrapper = () => (
  <div className="page-wrapper" style={{ paddingTop: '150px' }}>
    <div className="sticky-header">
      <Navbar />
      <CategoryBar />
    </div>
    <SharkTankPage />
    <Footer compact={true} />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lens-replacement" element={<LensReplacementPageWrapper />} />
          <Route path="/bogo-offer" element={<BogoOfferPageWrapper />} />
          <Route path="/home-eye-test" element={<HomeEyeTestPageWrapper />} />
          <Route path="/turban-offer" element={<TurbanOfferPageWrapper />} />
          <Route path="/premium-eyewear" element={<PremiumEyewearPageWrapper />} />
          <Route path="/shark-tank" element={<SharkTankPageWrapper />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
