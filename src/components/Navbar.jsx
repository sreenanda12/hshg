import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslate } from '../scripts/utils/translate';
import LanguageSelector from './LanguageSelector';

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

  return (
    <>
      <nav className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/logos/logo.png"
              alt="HSHG United Logo" 
              style={{ 
                maxHeight: '44px', 
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
            <LanguageSelector />
            
            <Link to="/contact" className="navbar-partner-btn">
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
        
        {/* Become a Partner Button inside the drawer */}
        <Link to="/contact" className="navbar-partner-btn mobile-drawer-btn" onClick={() => setMobileMenuOpen(false)}>
          {tText('Become a Partner', 'كن شريكاً')}
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .premium-navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: #ffffff;
          padding: 0.45rem 0;
          transition: all 0.4s ease;
          border-bottom: 1px solid var(--color-light-gray);
          box-shadow: 0 6px 24px rgba(0,0,0,0.05);
        }
        .premium-navbar.scrolled {
          padding: 0.3rem 0;
          box-shadow: 0 6px 24px rgba(0,0,0,0.05);
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
          gap: 4.2rem;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .nav-link-alyasra {
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-bg-dark);
          position: relative;
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .nav-link-alyasra:hover {
          color: #178BFF;
        }

        .navbar-partner-btn {
          padding: 0.32rem 1.15rem;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: 8px;
          background: linear-gradient(135deg, #178BFF 0%, #11699c 100%);
          color: #ffffff !important;
          border: none;
          box-shadow: 0 6px 15px rgba(23, 139, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .navbar-partner-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(23, 139, 255, 0.3);
          filter: brightness(1.05);
        }

        .lang-selector-trigger {
          padding: 0.4rem 0.8rem !important;
          font-size: 0.85rem !important;
        }

        .mobile-drawer-btn {
          margin-top: 2rem;
          padding: 0.8rem 2.5rem;
          font-size: 1rem;
          width: calc(100% - 4rem);
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
          .nav-actions .navbar-partner-btn {
            padding: 0.5rem 1rem !important;
            font-size: 0.8rem !important;
          }
        }
        @media (max-width: 420px) {
          .nav-actions .navbar-partner-btn {
            display: none !important; /* Hide button on very narrow screens to prevent crowding */
          }
        }
      `}} />
    </>
  );
}

export default Navbar;
