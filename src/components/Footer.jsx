import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslate } from '../utils/translate';

function Footer() {
  const { tText } = useTranslate();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col" style={{ textAlign: 'initial' }}>
            <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>{tText('HSHG', 'اتش اس اتش جي')}</h2>
            <p>{tText('Setting the benchmark for FMCG distribution and logistics in the GCC.', 'وضع معايير توزيع السلع الاستهلاكية والخدمات اللوجستية في دول مجلس التعاون الخليجي.')}</p>
          </div>
          
          <div className="footer-col" style={{ textAlign: 'initial' }}>
            <h4>{tText('About Us', 'من نحن')}</h4>
            <ul className="footer-links">
              <li><Link to="/about">{tText('About Us', 'نبذة عنا')}</Link></li>
              <li><Link to="/careers">{tText('Careers', 'الوظائف')}</Link></li>
              <li><Link to="/home">{tText('Home', 'الرئيسية')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-col" style={{ textAlign: 'initial' }}>
            <h4>{tText('Portfolios', 'المحفظة')}</h4>
            <ul className="footer-links">
              <li><Link to="/coverage">{tText('Who We Serve', 'من نخدم')}</Link></li>
              <li><Link to="/products">{tText('What We Offer', 'ماذا نقدم')}</Link></li>
              <li><Link to="/network">{tText('Our Network', 'شبكتنا')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-col" style={{ textAlign: 'initial' }}>
            <h4>{tText('Contact Us', 'اتصل بنا')}</h4>
            <ul className="footer-links">
              <li><Link to="/contact">{tText('Contact Support', 'دعم الاتصال')}</Link></li>
              <li>info@hshgunited.com</li>
              <li style={{ direction: 'ltr' }}>+965 1845 6789</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{tText('© 2026 HSHG United Trading & Contracting Co. All rights reserved.', '© 2026 شركة اتش اس اتش جي المتحدة للتجارة والمقاولات. جميع الحقوق محفوظة.')}</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/#">{tText('Terms & Conditions', 'الشروط والأحكام')}</Link>
            <Link to="/#">{tText('Privacy Policy', 'سياسة الخصوصية')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
