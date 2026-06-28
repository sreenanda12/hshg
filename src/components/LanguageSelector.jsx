import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const optionsRef = useRef([]);

  const currentLang = i18n.language || 'en';

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' }
  ];

  const currentLangObj = languages.find(l => l.code === currentLang) || languages[0];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('hshg_lang', code);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard interaction on main trigger container
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  const handleOptionKeyDown = (e, index, code) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectLanguage(code);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % languages.length;
      optionsRef.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + languages.length) % languages.length;
      optionsRef.current[prevIndex]?.focus();
    }
  };

  return (
    <div 
      className="lang-selector-container" 
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        className={`lang-selector-trigger ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Language"
        type="button"
      >
        {/* Globe Icon */}
        <svg 
          className="globe-icon" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        
        <span style={{ textTransform: 'uppercase' }}>
          {currentLangObj.code}
        </span>

        {/* Chevron Icon */}
        <svg 
          className="chevron" 
          width="10" 
          height="10" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <ul 
          className="lang-dropdown" 
          role="listbox"
          aria-label="Languages"
        >
          {languages.map((lang, index) => (
            <li role="presentation" key={lang.code}>
              <button
                ref={el => optionsRef.current[index] = el}
                className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
                onClick={() => selectLanguage(lang.code)}
                onKeyDown={(e) => handleOptionKeyDown(e, index, lang.code)}
                role="option"
                aria-selected={currentLang === lang.code}
                tabIndex={0}
                type="button"
              >
                <span className="lang-option-flag" aria-hidden="true">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
