import { useEffect, useRef, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';
import { brandsData } from '../data/brandsData';

// Animated Stat Counter Component
const StatCounter = ({ target, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let start = null;
    let animationFrame = null;
    const targetValue = parseInt(target.replace(/[^0-9]/g, ''), 10);
    const duration = 1800; // Easing over 1.8s

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / duration, 1);
      
      const easeRatio = 1 - Math.pow(1 - ratio, 3);
      setCount(Math.floor(easeRatio * targetValue));

      if (ratio < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrame = requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [target]);

  return (
    <div ref={elementRef} className="brand-stat-card hover-lift" style={{ 
      padding: '2.5rem 2rem', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      borderInlineStart: '4px solid var(--color-primary)', 
      background: 'rgba(255, 255, 255, 0.06)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      minWidth: '240px',
      flex: 1,
      textAlign: 'center',
      willChange: 'transform, opacity',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <h3 style={{ margin: 0, fontSize: '3.2rem', color: '#ffffff', fontWeight: 800, fontFamily: 'var(--font-headings)' }}>
        {count.toLocaleString()}{suffix}
      </h3>
      <h4 style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2.5px', fontWeight: 700 }}>
        {label}
      </h4>
    </div>
  );
};

function Brands() {
  const { tText, isAr } = useTranslate();
  const [activeTab, setActiveTab] = useState('food');

  // Mapped list of 80 logo brands represented in the repository, loaded from centralized brandsData
  const allLogos = useMemo(() => {
    return brandsData.map((b) => ({
      id: b.id,
      src: isAr && b.logo.ar ? b.logo.ar : b.logo.en || b.logo,
      name: isAr ? b.name.ar : b.name.en,
      category: b.category,
      color: b.color
    }));
  }, [isAr]);

  const categories = useMemo(() => [
    { id: 'food', label: tText('Food & Beverages', 'الأغذية والمشروبات') },
    { id: 'personal', label: tText('Personal Care', 'العناية الشخصية') },
    { id: 'healthcare', label: tText('Healthcare & OTC', 'الرعاية الصحية والأدوية اللاوصفية') },
    { id: 'household', label: tText('Household', 'المستلزمات المنزلية') },
    { id: 'electronics', label: tText('Electronics', 'الإلكترونيات') },
    { id: 'retail', label: tText('Retail Partners', 'شركاء التجزئة') }
  ], [tText]);

  const featuredPartnerships = useMemo(() => [
    {
      id: 'maeda',
      name: tText('Maeda', 'مايدا'),
      category: tText('Food & Beverages', 'الأغذية والمشروبات'),
      logo: isAr ? '/images/maeda_logo_ar.png' : '/images/maeda_logo_en.png',
      origin: tText('Global Brand', 'علامة تجارية عالمية'),
      desc: tText('An extensive line of high-quality rice, pantry essentials, canned goods, and tea distributed across all major retail co-ops in Kuwait.', 'مجموعة واسعة من الأرز عالي الجودة والسلع المعلبة والشاي الموزعة على جميع التعاونيات الكبرى في الكويت.')
    },
    {
      id: 'segafredo',
      name: tText('Segafredo Zanetti', 'سيجافريدو زانيتي'),
      category: tText('Food & Beverages', 'الأغذية والمشروبات'),
      logo: '/images/logo.segafredo_01[25].png',
      origin: tText('Italy', 'إيطاليا'),
      desc: tText('Renowned Italian espresso capsules and fine ground coffee blends distributed premium retail shelves and select HORECA pipelines.', 'كبسولات إسبريسو إيطالية شهيرة وخلطات قهوة مطحونة فاخرة موزعة على أرفف التجزئة الفاخرة وقنوات هوريكا.')
    },
    {
      id: 'bigen',
      name: tText('Bigen', 'بيجين'),
      category: tText('Personal Care', 'العناية الشخصية'),
      logo: '/images/bigen.jpg',
      origin: tText('Japan', 'اليابان'),
      desc: tText('The market-leading developer of quick hair colorants and dyes, commanding prime shelf space in both modern trade and co-ops.', 'المنتج الرائد في السوق لصبغات الشعر السريعة، والذي يحتل مساحة رفوف متميزة في كل من التجارة الحديثة والجمعيات.')
    },
    {
      id: 'titania',
      name: tText('Titania', 'تيتانيا'),
      category: tText('Personal Care', 'العناية الشخصية'),
      logo: '/images/titania.png',
      origin: tText('Germany', 'ألمانيا'),
      desc: tText('High-grade personal care, cosmetic tools, and daily hygiene accessories representing trusted German quality and utility.', 'أدوات العناية الشخصية ومستحضرات التجميل عالية الجودة وإكسسوارات النظافة اليومية التي تمثل الجودة والموثوقية الألمانية.')
    },
    {
      id: 'julphar',
      name: tText('Julphar Pharmaceuticals', 'جلفار للأدوية'),
      category: tText('Healthcare & OTC', 'الرعاية الصحية والأدوية اللاوصفية'),
      logo: '/images/julphar_logo_vector.png',
      origin: tText('UAE / Regional', 'الإمارات / إقليمي'),
      desc: tText('Widely recognized healthcare brands like Adol pain relief and Mebo ointment distributed securely under strict health regulations.', 'علامات تجارية معترف بها للرعاية الصحية مثل مسكن الآلام أدول ومرهم ميبو الموزعة بأمان بموجب الأنظمة الصحية.')
    },
    {
      id: 'kodak',
      name: tText('Kodak', 'كوداك'),
      category: tText('Household & Electronics', 'المستلزمات المنزلية والإلكترونيات'),
      logo: '/images/koda.png',
      origin: tText('USA', 'الولايات المتحدة'),
      desc: tText('Trusted global consumer technology providing high-performance alkaline batteries, LED lighting, and consumer utility items.', 'تقنية استهلاكية عالمية موثوقة توفر بطاريات قلوية عالية الأداء وإضاءة LED وأدوات منزلية مفيدة.')
    }
  ], [tText, isAr]);

  const trustStrengths = useMemo(() => [
    {
      title: tText('Strategic Market Penetration', 'الوصول الاستراتيجي للسوق'),
      desc: tText('Direct pipeline to 2,000+ points of sale including cooperative societies, hypermarket chains, convenience stores, and online platforms.', 'خط مباشر لأكثر من 2000 نقطة بيع تشمل الجمعيات التعاونية وسلاسل الهايبر ماركت والمنصات الرقمية والبقالات.'),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: tText('Cold Chain & Logistics', 'سلسلة التبريد والخدمات اللوجستية'),
      desc: tText('Robust warehousing of over 10,000 CBM climate-controlled space and a fleet of 16+ temperature-controlled trucks providing speed to market.', 'تخزين قوي في مساحة مبردة تزيد عن 10,000 متر مكعب وأسطول مكون من 16+ شاحنة مبردة توفر سرعة الوصول.'),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      title: tText('Dedicated Channel Merchandising', 'ترويج القنوات المخصص'),
      desc: tText('Sales and merchandising forces divided by trade channels, ensuring products are placed on key shelves with ideal visibility and stock control.', 'فرق المبيعات والترويج مقسمة حسب القنوات التجارية، مما يضمن عرض المنتجات على الرفوف بوضوح تام ودوران نشط.'),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      title: tText('Fifty Years of Legacy', 'إرث يمتد لخمسين عاماً'),
      desc: tText('An affiliation of Homaizi Pharma, HSHG stands on a solid foundation of local business networks dating back decades, guaranteeing stability.', 'بصفتها شركة تابعة للحميضي فارما، تقف اتش اس اتش جي على أساس متين من شبكات الأعمال المحلية الممتدة لعقود.'),
      icon: (
         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
         </svg>
      )
    }
  ], [tText]);

  const activeLogos = useMemo(() => {
    return allLogos.filter((logo) => logo.category === activeTab);
  }, [allLogos, activeTab]);

  useEffect(() => {
    // Fade-in animation for header elements
    gsap.fromTo('.header-reveal-anim',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    // Elegant staggered entrance animation for logo cards when category tab changes
    gsap.fromTo('.brand-logo-card-anim',
      { opacity: 0, y: 20, scale: 0.96 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.4, 
        stagger: 0.012, 
        ease: 'power2.out'
      }
    );
  }, [activeTab]);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Our Brand Partners | HSHG United Trading', 'شركاء علامتنا التجارية | اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Explore HSHG United's extensive portfolio of international brand partners distributed across Kuwait.", "استكشف محفظة اتش اس اتش جي المتحدة الواسعة التي تضم 80 شريكاً من العلامات التجارية العالمية الموزعة في الكويت.")} />
      </Helmet>

      {/* 1. HERO SECTION WITH RADIAL GLOW & STAT COUNTERS */}
      <section className="section-padding brands-page-hero" style={{ 
        position: 'relative',
        backgroundColor: 'var(--color-bg-dark)', 
        color: 'var(--color-white)', 
        paddingTop: '13rem', 
        paddingBottom: '8rem',
        overflow: 'hidden',
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Cinematic Radial Blue Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '90%',
          background: 'radial-gradient(circle, rgba(23, 135, 200, 0.16) 0%, transparent 60%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        {/* Subtle World Map Dotted Texture in Background */}
        <div style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' fill='none' stroke='rgba(255,255,255,0.02)' strokeWidth='1'%3E%3Cpath d='M150 150 C 300 80, 500 20, 780 220 M 780 220 L 520 280 C 420 300, 320 260, 150 150' style='stroke-dasharray: 5 5; fill: rgba(255,255,255,0.003)'/%3E%3Ccircle cx='780' cy='220' r='6' fill='%231787C8' opacity='0.2'/%3E%3Ccircle cx='150' cy='150' r='4' fill='rgba(255,255,255,0.1)'/%3E%3Ccircle cx='520' cy='280' r='4' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        {/* Bottom border accent */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)',
          zIndex: 2
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
          <div className="text-center" style={{ marginBottom: '4.5rem' }}>
            {/* Top Premium Badge */}
            <div className="header-reveal-anim" style={{ display: 'inline-block', marginBottom: '1.8rem' }}>
              <span className="premium-top-badge" style={{ 
                color: 'var(--color-primary)', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                fontSize: '0.8rem', 
                letterSpacing: '4px', 
                display: 'block', 
                background: 'rgba(23, 135, 200, 0.12)',
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                border: '1px solid rgba(23, 135, 200, 0.25)',
                boxShadow: '0 0 25px rgba(23, 135, 200, 0.15)',
                fontFamily: 'var(--font-headings)'
              }}>
                {tText('AUTHORIZED BRAND PORTFOLIO', 'محفظة الوكالات والعلامات المعتمدة')}
              </span>
            </div>

            {/* Title */}
            <h1 className="header-reveal-anim" style={{ 
              color: 'var(--color-white)', 
              fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', 
              marginBottom: '1.5rem', 
              fontWeight: 800,
              lineHeight: 1.15,
              fontFamily: 'var(--font-headings)'
            }}>
              {tText('Trusted Brands. ', 'العلامات الموثوقة. ')}
              <span className="premium-gradient-text" style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #00B4D8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {tText('Strong Partnerships.', 'شراكات قوية.')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="header-reveal-anim" style={{ 
              maxWidth: '820px', 
              margin: '0 auto', 
              color: 'rgba(255,255,255,0.85)', 
              fontSize: '1.25rem', 
              lineHeight: 1.7,
              fontFamily: 'var(--font-main)'
            }}>
              {tText('HSHG United Trading represents leading global brands across the Kuwaiti market. We leverage a robust commercial grid, cold chain warehousing, and specialized sales channels to ensure premium placement and growth.', 'تمثل شركة اتش اس اتش جي المتحدة علامات تجارية عالمية رائدة في السوق الكويتي. نحن نستغل شبكة تجارية قوية، وتخزيناً مبرداً، وقنوات مبيعات متخصصة لضمان مكانة متميزة ونمو مستمر.')}
            </p>
          </div>

          {/* Stat Counters Grid */}
          <div className="header-reveal-anim" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '3rem'
          }}>
            <StatCounter target="80" label={tText('Brands Represented', 'ماركة تجارية ممثلة')} suffix="+" />
            <StatCounter target="2000" label={tText('Retail POS Outlets', 'منفذ بيع بالتجزئة')} suffix="+" />
            <StatCounter target="50" label={tText('Years of Legacy', 'عاماً من الخبرة والإرث')} suffix="+" />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SWITCHER & 3. PREMIUM LOGO GRID */}
      <section style={{
        background: 'linear-gradient(to bottom, #f7fafc 0%, #eef3f8 100%)',
        padding: '6rem 0 8rem 0',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Soft background radial waves */}
        <div style={{
          position: 'absolute', top: '10%', left: '-5%', width: '45vw', height: '45vw',
          background: 'radial-gradient(circle, rgba(23, 135, 200, 0.02) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '-5%', width: '45vw', height: '45vw',
          background: 'radial-gradient(circle, rgba(10, 147, 150, 0.02) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Sticky Tab Switcher */}
          <div style={{
            position: 'sticky',
            top: '70px',
            zIndex: 100,
            backgroundColor: 'rgba(247, 249, 251, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '1.2rem 1rem',
            borderRadius: '40px',
            border: '1px solid rgba(15, 45, 64, 0.05)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
            marginBottom: '4.5rem',
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <div style={{ 
              display: 'flex', 
              gap: '0.8rem', 
              overflowX: 'auto', 
              whiteSpace: 'nowrap',
              width: '100%',
              justifyContent: 'center',
              padding: '2px'
            }} className="custom-scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    padding: '0.8rem 1.6rem',
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    fontWeight: 650,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    background: activeTab === cat.id ? 'var(--color-bg-dark)' : 'rgba(255,255,255,0.7)',
                    color: activeTab === cat.id ? '#ffffff' : 'var(--color-text-muted)',
                    border: '1px solid rgba(15, 45, 64, 0.05)',
                    cursor: 'pointer',
                    boxShadow: activeTab === cat.id ? '0 10px 20px rgba(7, 27, 42, 0.15)' : 'none'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Premium Logo Grid */}
          <div className="premium-logos-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '1.8rem',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {activeLogos.map((logo) => (
              <Link 
                key={logo.id} 
                to={`/brands/${logo.id}`}
                className="brand-logo-card-anim premium-logo-grid-card hover-lift"
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 10px 25px rgba(15, 45, 64, 0.02)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  height: '130px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  cursor: 'pointer'
                }}
              >
                {/* Sweep reflection effect */}
                <div className="card-shine-sweep" />

                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  loading="lazy"
                  draggable={false}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.015))'
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PARTNERSHIPS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', position: 'relative' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2.5px', display: 'block', marginBottom: '0.8rem' }}>
              {tText('STRATEGIC ALLIANCES', 'التحالفات الاستراتيجية')}
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
              {tText('Featured Brand Partnerships', 'شراكات العلامات التجارية المتميزة')}
            </h2>
            <p style={{ maxWidth: '620px', margin: '0.5rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              {tText('Showcasing global market leaders distributed and represented by HSHG across Kuwait.', 'نستعرض قادة السوق العالميين الموزعين والممثلين من قبل اتش اس اتش جي في الكويت.')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2.5rem'
          }}>
            {featuredPartnerships.map((p, idx) => (
              <Link key={idx} to={`/brands/${p.id}`} className="card hover-lift" style={{
                background: 'var(--color-bg-light)',
                borderRadius: '24px',
                padding: '2.5rem',
                border: '1px solid var(--color-light-gray)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer'
              }}>
                <div>
                  {/* Top Bar with Category and Country */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      color: 'var(--color-primary)',
                      background: 'rgba(23, 135, 200, 0.08)',
                      padding: '0.4rem 1rem',
                      borderRadius: '50px'
                    }}>
                      {p.category}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 550 }}>
                      {p.origin}
                    </span>
                  </div>

                  {/* Brand Logo & Name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.8rem' }}>
                    <div style={{
                      width: '90px',
                      height: '60px',
                      background: '#ffffff',
                      borderRadius: '12px',
                      padding: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(15, 45, 64, 0.05)'
                    }}>
                      <img src={p.logo} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', margin: 0, fontWeight: 700, color: 'var(--color-bg-dark)' }}>{p.name}</h3>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--color-text-muted)', margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRUST SECTION: WHY LEADING BRANDS CHOOSE HSHG */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-light-gray)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2.5px', display: 'block', marginBottom: '0.8rem' }}>
              {tText('CORPORATE CAPABILITIES', 'القدرات المؤسسية')}
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
              {tText('Why Leading Brands Choose HSHG', 'لماذا تختار العلامات التجارية الرائدة HSHG')}
            </h2>
            <p style={{ maxWidth: '640px', margin: '0.5rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              {tText('Delivering operational superiority, network stability, and robust market growth in the region.', 'تقديم تفوق تشغيلي، واستقرار الشبكة، ونمو قوي في السوق في المنطقة.')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}>
            {trustStrengths.map((strength, idx) => (
              <div key={idx} className="card premium-card hover-lift" style={{ 
                padding: '3rem 2.2rem', 
                background: 'var(--color-white)', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderRadius: '24px',
                border: '1px solid rgba(15, 45, 64, 0.02)',
                willChange: 'transform, opacity' 
              }}>
                <div className="card-icon" style={{ 
                  margin: '0 0 1.8rem 0', 
                  background: 'rgba(23,135,200,0.08)', 
                  color: 'var(--color-primary)', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {strength.icon}
                </div>
                <div style={{ textAlign: 'initial' }}>
                  <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.8rem 0', color: 'var(--color-bg-dark)', fontWeight: 700 }}>
                    {strength.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {strength.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="section-padding dark-section" style={{ 
        backgroundColor: 'var(--color-bg-dark)', 
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle radial backdrop glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(23, 135, 200, 0.12) 0%, transparent 60%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', color: '#ffffff', fontWeight: 800, marginBottom: '1.5rem' }}>
              {tText('Become Our Next Success Story', 'كن قصة نجاحنا التالية')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '3rem' }}>
              {tText('Partner with HSHG United Trading Company and expand your brand footprint across Kuwait. Our structured distribution network and logistics infrastructure ensure swift scale and long-term success.', 'شارك مع شركة اتش اس اتش جي المتحدة للتجارة ووسع حضور علامتك التجارية في الكويت. شبكة توزيعنا المنظمة وبنيتنا اللوجستية تضمن النمو السريع والنجاح طويل الأمد.')}
            </p>
            <Link to="/contact" className="btn btn-primary" style={{
              borderRadius: '50px',
              padding: '1.1rem 3rem',
              fontWeight: 700,
              fontSize: '1.05rem',
              boxShadow: '0 12px 30px rgba(23, 135, 200, 0.35)'
            }}>
              {tText('Partner With Us', 'شراكة معنا')}
            </Link>
          </div>
        </div>
      </section>

      {/* Styles Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Gradient Heading styling */
        .premium-gradient-text {
          background: linear-gradient(135deg, var(--color-primary) 0%, #00B4D8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .premium-logo-grid-card:hover {
          transform: translateY(-8px) scale(1.03) !important;
          border-color: rgba(23, 135, 200, 0.25) !important;
          box-shadow: 0 15px 35px rgba(15, 45, 64, 0.06), 0 5px 15px rgba(23, 135, 200, 0.02) !important;
          background: #ffffff !important;
        }

        /* Shine sweep reflection effect */
        .card-shine-sweep {
          position: absolute;
          top: 0; left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
          transform: skewX(-25deg);
          transition: none;
          z-index: 5;
          pointer-events: none;
        }
        
        .premium-logo-grid-card:hover .card-shine-sweep {
          left: 150%;
          transition: all 0.8s ease-in-out;
        }

        .custom-scrollbar-hide::-webkit-scrollbar {
          height: 0;
          width: 0;
          display: none;
        }
        .custom-scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* Responsive Grid Overrides */
        @media (max-width: 1200px) {
          .premium-logos-grid {
            grid-template-columns: repeat(5, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 992px) {
          .premium-logos-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .premium-logos-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.2rem !important;
          }
        }

        @media (max-width: 576px) {
          .premium-logos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .premium-logo-grid-card {
            height: 110px !important;
            padding: 1rem !important;
            border-radius: 20px !important;
          }
        }
      `}} />
    </>
  );
}

export default Brands;
