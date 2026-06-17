import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Lenis from '@studio-freight/lenis';

// Layout & Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogoReveal from './components/LogoReveal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Brands from './pages/Brands';
import BrandDetail from './pages/BrandDetail';
import Products from './pages/Products';
import Coverage from './pages/Coverage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Network from './pages/Network';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  // Show logo reveal only on first visit of the session
  const [showReveal, setShowReveal] = useState(() => {
    return !sessionStorage.getItem('hshg_visited');
  });

  const handleRevealComplete = () => {
    sessionStorage.setItem('hshg_visited', '1');
    setShowReveal(false);
  };

  useEffect(() => {
    // Update direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Hydrate saved language preference
  useEffect(() => {
    const stored = localStorage.getItem('hshg_lang');
    if (stored && stored !== i18n.language) {
      i18n.changeLanguage(stored);
    }
  }, [i18n]);

  // Premium Smooth Scrolling Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.95,
      smoothTouch: false,
      touchMultiplier: 1.5,
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
        <title>HSHG United Trading &amp; Contracting Co.</title>
      </Helmet>

      {/* Premium Logo Reveal — first session visit only */}
      {showReveal && <LogoReveal onComplete={handleRevealComplete} />}

      <Navbar />

      <main style={{ opacity: showReveal ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:brandId" element={<BrandDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/network" element={<Network />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer style={{ opacity: showReveal ? 0 : 1, transition: 'opacity 0.6s ease' }} />
    </>
  );
}

export default App;
