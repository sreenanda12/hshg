import { Link } from 'react-router-dom';
import { useTranslate } from '../utils/translate';

function Footer() {
  const { tText, isAr } = useTranslate();

  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-dark)',
      color: 'rgba(255, 255, 255, 0.7)',
      padding: '7rem 0 3rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      zIndex: 10,
      fontFamily: 'var(--font-main)'
    }}>
      
      {/* Subtle background glow effect */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '1px',
        background: 'radial-gradient(circle, rgba(23, 135, 200, 0.4) 0%, transparent 80%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Columns Grid */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '4rem',
          marginBottom: '5rem'
        }}>
          
          {/* HSHG Branding Column */}
          <div className="footer-col-premium" style={{ textAlign: 'initial' }}>
            <Link to="/home" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <img 
                src={isAr ? "/images/logo_final_ar_01.png" : "/images/logo_final_en_01.png"} 
                alt="HSHG United Logo" 
                style={{ 
                  maxHeight: '55px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  display: 'block'
                }} 
              />
            </Link>
            <h2 style={{ 
              color: 'var(--color-white)', 
              fontSize: '1.8rem', 
              fontWeight: 800, 
              fontFamily: 'var(--font-headings)',
              marginBottom: '1.2rem',
              letterSpacing: '0.5px'
            }}>
              {tText('HSHG United', 'اتش اس اتش جي المتحدة')}
            </h2>
            <p style={{ 
              fontSize: '0.95rem', 
              lineHeight: 1.6, 
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '2rem',
              maxWidth: '320px'
            }}>
              {tText('Setting the gold standard for FMCG distribution, cold supply chain logistics, and strategic brand management in Kuwait.', 'وضع المعايير الذهبية لتوزيع السلع الاستهلاكية، الخدمات اللوجستية المبردة، وإدارة العلامات التجارية في الكويت.')}
            </p>

            {/* Premium B2B Vector Social Icons Grid */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-badge"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/96518456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-badge"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@hshgunited.com" 
                className="footer-social-badge"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>

            </div>
          </div>
          
          {/* Column 2: Navigation paths */}
          <div className="footer-col-premium" style={{ textAlign: 'initial' }}>
            <h4 style={{ 
              color: 'var(--color-white)', 
              fontSize: '1rem', 
              fontWeight: 700, 
              fontFamily: 'var(--font-headings)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '1.8rem'
            }}>{tText('Administrative', 'الإدارية')}</h4>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
              <li>
                <Link to="/about" className="footer-link-underline">
                  {tText('About Company', 'نبذة عن الشركة')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link-underline">
                  {tText('Careers & Talent', 'فرص العمل والتوظيف')}
                </Link>
              </li>
              <li>
                <Link to="/home" className="footer-link-underline">
                  {tText('Home Portal', 'بوابة الرئيسية')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Commercial services */}
          <div className="footer-col-premium" style={{ textAlign: 'initial' }}>
            <h4 style={{ 
              color: 'var(--color-white)', 
              fontSize: '1rem', 
              fontWeight: 700, 
              fontFamily: 'var(--font-headings)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '1.8rem'
            }}>{tText('Commercial Paths', 'المسارات التجارية')}</h4>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
              <li>
                <Link to="/coverage" className="footer-link-underline">
                  {tText('Market Penetration', 'قنوات التغطية السوقية')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-underline">
                  {tText('Distribution Services', 'خدمات التوزيع اللوجستية')}
                </Link>
              </li>
              <li>
                <Link to="/brands" className="footer-link-underline">
                  {tText('Brand Portfolios', 'محفظة الوكالات والعلامات')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact details & office hours */}
          <div className="footer-col-premium" style={{ textAlign: 'initial' }}>
            <h4 style={{ 
              color: 'var(--color-white)', 
              fontSize: '1rem', 
              fontWeight: 700, 
              fontFamily: 'var(--font-headings)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '1.8rem'
            }}>{tText('Logistics Headquarters', 'مقر العمليات اللوجستية')}</h4>
            
            <p style={{ fontSize: '0.9rem', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.5)', margin: '0 0 1.2rem 0' }}>
              {tText('Al Rai logistics district, Block 1, Street 15, Kuwait City, Kuwait', 'منطقة الري اللوجستية، قطعة ١، شارع ١٥، مدينة الكويت، الكويت')}
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
              <li>
                <Link to="/contact" className="footer-link-underline" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                  {tText('Become a Retail Partner', 'كن شريكاً في التوزيع')}
                </Link>
              </li>
              <li style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                info@hshgunited.com
              </li>
              <li style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', direction: 'ltr', textAlign: isAr ? 'right' : 'left' }}>
                +965 1845 6789
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom copyright and legal paths */}
        <div className="footer-bottom-premium" style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.45)'
        }}>
          <p style={{ margin: 0 }}>
            {tText('© 2026 HSHG United Trading & Contracting Co. All rights reserved.', '© 2026 شركة اتش اس اتش جي المتحدة للتجارة والمقاولات. جميع الحقوق محفوظة.')}
          </p>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/#" className="footer-link-underline" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {tText('Terms & Conditions', 'الشروط والأحكام')}
            </Link>
            <Link to="/#" className="footer-link-underline" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {tText('Privacy Policy', 'سياسة الخصوصية')}
            </Link>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Hover underline effect */
        .footer-link-underline {
          position: relative;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s ease;
          font-weight: 500;
        }
        .footer-link-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1.5px;
          bottom: -4px;
          inset-inline-start: 0;
          background-color: var(--color-primary);
          transition: width 0.3s ease;
        }
        .footer-link-underline:hover {
          color: var(--color-white);
        }
        .footer-link-underline:hover::after {
          width: 100%;
        }

        /* Social icons hover effects */
        .footer-social-badge:hover {
          background-color: var(--color-primary) !important;
          color: #fff !important;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 5px 15px rgba(23, 135, 200, 0.2);
        }

        /* Responsive stack */
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .footer-col-premium {
            text-align: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-col-premium p {
            max-width: 100% !important;
          }
          .footer-bottom-premium {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}} />
    </footer>
  );
}

export default Footer;
