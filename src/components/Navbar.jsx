import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslate } from '../utils/translate';

function Navbar() {
  const { i18n } = useTranslation();
  const { tText, isAr } = useTranslate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('hshg_lang', newLang); // Persist user language
  };

  // Hydrate language from localstorage on boot
  useEffect(() => {
    const stored = localStorage.getItem('hshg_lang');
    if(stored && stored !== i18n.language) {
      i18n.changeLanguage(stored);
    }
  }, [i18n]);

  return (
    <>
      <nav className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/home" className="logo-link" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/logo.png" 
              alt="HSHG United Logo" 
              style={{ 
                maxHeight: '55px', 
                width: 'auto', 
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </Link>
          
          <ul className="nav-links">
            <li>
              <Link to="/home" className="nav-link-alyasra">{tText('Home', 'الرئيسية')}</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link-alyasra">{tText('About Us', 'من نحن')}</Link>
            </li>
            <li>
              <Link to="/services" className="nav-link-alyasra">{tText('Services', 'الخدمات')}</Link>
            </li>
            <li>
              <Link to="/brands" className="nav-link-alyasra">{tText('Brands', 'العلامات التجارية')}</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link-alyasra">{tText('Contact Us', 'اتصل بنا')}</Link>
            </li>
          </ul>

          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button className="lang-switch-alyasra" onClick={toggleLanguage} style={{ color: 'var(--color-bg-dark)', fontWeight: 600, fontFamily: isAr ? 'var(--font-en)' : 'var(--font-ar)' }}>
              {isAr ? 'English' : 'العربية'}
            </button>
            
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', borderRadius: '4px', backgroundColor: 'var(--color-bg-dark)', color: '#fff' }}>
              {tText('Become a Partner', 'كن شريكاً')}
            </Link>

            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--color-bg-dark)', fontSize: '1.5rem', cursor: 'pointer' }}>
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <button onClick={() => setMobileMenuOpen(false)} style={{ position: 'absolute', top: '2rem', insetInlineEnd: '2rem', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: 'var(--color-bg-dark)' }}>
          ✕
        </button>
        <Link to="/home" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('Home', 'الرئيسية')}</Link>
        <Link to="/about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('About Us', 'من نحن')}</Link>
        <Link to="/services" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('Services', 'الخدمات')}</Link>
        <Link to="/brands" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('Brands', 'العلامات التجارية')}</Link>
        <Link to="/contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('Contact Us', 'اتصل بنا')}</Link>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .premium-navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: var(--color-white);
          padding: 1.5rem 0;
          transition: all 0.4s ease;
          border-bottom: 1px solid var(--color-light-gray);
        }
        .premium-navbar.scrolled {
          padding: 1rem 0;
          box-shadow: var(--shadow-premium);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .nav-link-alyasra {
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-bg-dark);
          position: relative;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .nav-link-alyasra:hover {
          color: var(--color-primary);
        }

        /* Presence styles */
        .presence-stat-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-light-gray);
          padding-bottom: 0.8rem;
        }
        .stat-num {
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--color-primary);
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        @media (max-width: 992px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (max-width: 576px) {
          .nav-actions .btn-primary {
            display: none !important; /* Hide big button to clear space on narrow phones */
          }
        }
      `}} />
    </>
  );
}

export default Navbar;
