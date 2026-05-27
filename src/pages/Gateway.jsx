import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

function Gateway() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('hshg_lang', lang);
    navigate('/home');
  };

  return (
    <>
      <Helmet>
        <title>Welcome | HSHG United</title>
        <meta name="description" content="Select your language to enter HSHG United Trading & Contracting Co." />
      </Helmet>
      
      <div className="gateway-container">
        <div className="gateway-bg"></div>
        <div className="gateway-content fade-in-up">
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#fff' }}>HSHG</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'rgba(255,255,255,0.8)' }}>
            UNITED TRADING & CONTRACTING CO.
          </h2>
          
          <div className="lang-selection">
            <button 
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageSelect('en')}
            >
              English
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'ar' ? 'active' : ''}`}
              onClick={() => handleLanguageSelect('ar')}
              style={{ fontFamily: 'var(--font-ar)' }}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gateway;
