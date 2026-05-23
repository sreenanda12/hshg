import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Lenis from '@studio-freight/lenis';

// Layout & Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Gateway from './pages/Gateway';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Brands from './pages/Brands';
import Products from './pages/Products';
import Coverage from './pages/Coverage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Network from './pages/Network';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isGateway, setIsGateway] = useState(location.pathname === '/');

  useEffect(() => {
    setIsGateway(location.pathname === '/');
  }, [location]);

  useEffect(() => {
    // Update direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Premium Smooth Scrolling Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
        <title>HSHG United Trading & Contracting Co.</title>
      </Helmet>
      
      {!isGateway && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Gateway />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/products" element={<Products />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/network" element={<Network />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {!isGateway && <Footer />}
    </>
  );
}

export default App;
