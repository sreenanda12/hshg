import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslate } from '../utils/translate';

function Navbar() {
  const { i18n } = useTranslation();
  const { tText, isAr } = useTranslate();
  const location = useLocation();
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
  }, []);

  return (
    <>
      <nav className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/home" className="logo-link">
            <h2 style={{ margin: 0, fontWeight: 800, color: 'var(--color-bg-dark)', letterSpacing: '0.5px' }}>
              {tText('HSHG', 'اتش اس اتش جي')}
            </h2>
          </Link>
          
          <ul className="nav-links">
            <li>
              <Link to="/about" className="nav-link-alyasra">{tText('About', 'من نحن')}</Link>
            </li>
            
            {/* 1. WHO WE SERVE MEGA MENU */}
            <li className="mega-menu-trigger">
              <span className="nav-link-alyasra dropdown-arrow">{tText('Who We Serve', 'من نخدم')}</span>
              <div className="mega-menu-dropdown">
                <div className="mega-grid">
                  <div className="mega-left">
                    <h3>{tText('Who We Serve', 'من نخدم')}</h3>
                    <p>{tText('Trusted FMCG and distribution solutions across Kuwait.', 'حلول توزيع وسلع استهلاكية موثوقة في جميع أنحاء الكويت.')}</p>
                  </div>
                  <div className="mega-right-links">
                    <Link to="/coverage" className="mega-sub-link">{tText('Hypermarkets', 'الهايبر ماركت')}</Link>
                    <Link to="/coverage" className="mega-sub-link">{tText('Retail Chains', 'سلاسل التجزئة')}</Link>
                    <Link to="/coverage" className="mega-sub-link">{tText('Grocery Stores', 'البقالات')}</Link>
                    <Link to="/coverage" className="mega-sub-link">{tText('Restaurants', 'المطاعم')}</Link>
                    <Link to="/coverage" className="mega-sub-link">{tText('Cafes', 'المقاهي')}</Link>
                    <Link to="/coverage" className="mega-sub-link">{tText('Institutional Supply', 'التوريد المؤسسي')}</Link>
                    <Link to="/coverage" className="mega-sub-link">{tText('Wholesale Markets', 'أسواق الجملة')}</Link>
                    <Link to="/coverage" className="mega-sub-link">{tText('Hospitality Sector', 'قطاع الضيافة')}</Link>
                  </div>
                </div>
                <div className="mega-bottom-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop")' }}>
                  <div className="banner-overlay"></div>
                  <div className="banner-content">
                    <h4>{tText("Serving Kuwait's Premier Retail Channels", "خدمة قنوات البيع بالتجزئة الرائدة في الكويت")}</h4>
                    <Link to="/coverage" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                      {tText('Explore Coverage', 'استكشاف التغطية')}
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* 2. WHAT WE OFFER MEGA MENU */}
            <li className="mega-menu-trigger">
              <span className="nav-link-alyasra dropdown-arrow">{tText('What We Offer', 'ماذا نقدم')}</span>
              <div className="mega-menu-dropdown">
                <div className="mega-grid">
                  <div className="mega-left">
                    <h3>{tText('What We Offer', 'ماذا نقدم')}</h3>
                    <p>{tText('Comprehensive portfolio management and logistics pipelines.', 'إدارة شاملة للمحفظة وخطوط اللوجستيات.')}</p>
                  </div>
                  <div className="mega-right-links">
                    <Link to="/products" className="mega-sub-link">{tText('FMCG Distribution', 'توزيع السلع الاستهلاكية')}</Link>
                    <Link to="/products" className="mega-sub-link">{tText('OTC & Healthcare', 'الرعاية الصحية')}</Link>
                    <Link to="/products" className="mega-sub-link">{tText('Food & Beverage', 'الأغذية والمشروبات')}</Link>
                    <Link to="/products" className="mega-sub-link">{tText('Cosmetics', 'مستحضرات التجميل')}</Link>
                    <Link to="/products" className="mega-sub-link">{tText('Household Products', 'المنتجات المنزلية')}</Link>
                    <Link to="/about" className="mega-sub-link">{tText('Warehousing', 'التخزين')}</Link>
                    <Link to="/about" className="mega-sub-link">{tText('Logistics', 'الخدمات اللوجستية')}</Link>
                    <Link to="/about" className="mega-sub-link">{tText('Merchandising', 'الترويج التجاري')}</Link>
                  </div>
                </div>
                <div className="mega-bottom-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=800&auto=format&fit=crop")' }}>
                  <div className="banner-overlay"></div>
                  <div className="banner-content">
                    <h4>{tText('World-Class Logistical Infrastructures', 'بنية تحتية لوجستية عالمية المستوى')}</h4>
                    <Link to="/products" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                      {tText('View Offerings', 'عرض العروض')}
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* 3. OUR NETWORK MEGA MENU */}
            <li className="mega-menu-trigger">
              <span className="nav-link-alyasra dropdown-arrow">{tText('Our Network', 'شبكتنا')}</span>
              <div className="mega-menu-dropdown" style={{ minWidth: '420px' }}>
                <div className="presence-grid" style={{ padding: '2.5rem' }}>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>{tText('Supply Infrastructure', 'البنية التحتية للتوريد')}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{tText('Our comprehensive logistics & distribution grid.', 'شبكة الخدمات اللوجستية والتوزيع الشاملة لدينا.')}</p>
                  <div style={{ display: 'grid', gap: '0.8rem' }}>
                    <Link to="/network" className="mega-sub-link">{tText('Strategic Warehousing', 'التخزين الاستراتيجي')}</Link>
                    <Link to="/network" className="mega-sub-link">{tText('Refrigerated Fleet', 'الأسطول المبرد')}</Link>
                    <Link to="/network" className="mega-sub-link">{tText('Distribution Zones', 'مناطق التوزيع')}</Link>
                    <Link to="/network" className="mega-sub-link">{tText('Network Flow Analytics', 'تحليلات تدفق الشبكة')}</Link>
                  </div>
                  <Link to="/network" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '0.8rem', fontSize: '0.9rem' }}>
                    {tText('View Network Grid', 'عرض شبكة التوزيع')}
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link to="/careers" className="nav-link-alyasra">{tText('Careers', 'الوظائف')}</Link>
            </li>
          </ul>

          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button className="lang-switch-alyasra" onClick={toggleLanguage} style={{ color: 'var(--color-bg-dark)', fontWeight: 600, fontFamily: isAr ? 'var(--font-en)' : 'var(--font-ar)' }}>
              {isAr ? 'English' : 'العربية'}
            </button>
            
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', borderRadius: '4px', backgroundColor: 'var(--color-bg-dark)', color: '#fff' }}>
              {tText('Contact Us', 'اتصل بنا')}
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
        <Link to="/about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('About', 'من نحن')}</Link>
        <Link to="/coverage" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('Who We Serve', 'من نخدم')}</Link>
        <Link to="/products" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('What We Offer', 'ماذا نقدم')}</Link>
        <Link to="/network" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('Our Network', 'شبكتنا')}</Link>
        <Link to="/careers" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{tText('Careers', 'الوظائف')}</Link>
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
        .dropdown-arrow::after {
          content: ' ▾';
          font-size: 0.8rem;
          margin-inline-start: 4px;
        }
        
        /* MEGA MENU dropdown classes */
        .mega-menu-trigger {
          position: relative;
          padding-bottom: 1rem; /* Extend trigger downwards to avoid hover gap */
        }
        .mega-menu-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          background: var(--color-white);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          border-radius: 8px;
          min-width: 700px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none; /* Stop hidden overlap interaction */
          transition: all 0.4s ease;
          z-index: 2000; /* Force super-high layering above cards/hero */
          overflow: hidden;
          border: 1px solid var(--color-light-gray);
          padding: 0;
          margin-top: 0.5rem;
        }

        [dir="rtl"] .mega-menu-dropdown {
           transform: translateX(50%) translateY(20px);
        }
        
        /* Transparent hover bridge to keep the menu open during traversal */
        .mega-menu-dropdown::before {
          content: '';
          position: absolute;
          top: -30px;
          left: 0;
          width: 100%;
          height: 30px;
          background: transparent;
          z-index: -1;
        }

        .mega-menu-trigger:hover .mega-menu-dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto; /* Enable interaction when active */
          transform: translateX(-50%) translateY(0);
        }
        [dir="rtl"] .mega-menu-trigger:hover .mega-menu-dropdown {
          transform: translateX(50%) translateY(0);
        }

        .mega-grid {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          padding: 3rem;
        }
        .mega-left {
          border-inline-end: 1px solid var(--color-light-gray);
          padding-inline-end: 2.5rem;
        }
        .mega-left h3 {
          font-family: var(--font-headings);
          font-size: 1.6rem;
          margin-bottom: 0.8rem;
          color: var(--color-bg-dark);
        }
        .mega-left p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }
        .mega-right-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          padding-inline-start: 2.5rem;
          align-content: center;
        }
        .mega-sub-link {
          font-family: var(--font-headings);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-bg-dark);
          transition: color 0.3s ease;
        }
        .mega-sub-link:hover {
          color: var(--color-primary);
        }
        .mega-bottom-banner {
          background-size: cover;
          background-position: center;
          height: 150px;
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 3rem;
        }
        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(7, 27, 42, 0.7);
        }
        .banner-content {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .banner-content h4 {
          color: #fff;
          font-family: var(--font-headings);
          font-size: 1.2rem;
          margin: 0;
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
      `}} />
    </>
  );
}

export default Navbar;
