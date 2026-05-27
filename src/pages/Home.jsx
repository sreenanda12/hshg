import { useEffect, useRef, useMemo, useState, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslate } from '../utils/translate';

gsap.registerPlugin(ScrollTrigger);

// 1. ISOLATED MEMOIZED HERO SLIDER SECTION (Eliminates full-page re-renders)
const HeroSliderSection = memo(({ tText, isAr }) => {
  const heroRef = useRef(null);
  
  const cardsConfig = useMemo(() => [
    { 
      name: tText('FMCG', 'السلع الاستهلاكية'), 
      heroBg: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop",
      link: '/products'
    },
    { 
      name: tText('Warehousing', 'التخزين'), 
      heroBg: "/images/warehouse.png",
      link: '/network'
    },
    { 
      name: tText('Logistics', 'الخدمات اللوجستية'), 
      heroBg: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
      link: '/network'
    },
    { 
      name: tText('Retail', 'التجزئة'), 
      heroBg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
      link: '/coverage'
    }
  ], [tText]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsConfig.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [cardsConfig.length]);

  useEffect(() => {
    // Entrance animations for Hero
    const heroElements = heroRef.current.querySelectorAll('.hero-anim');
    gsap.fromTo(
      heroElements,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
    );

    // Floating service cards subtle entrance
    gsap.fromTo(
      '.floating-card',
      { opacity: 0, y: 30, rotationY: 8 },
      { opacity: 1, y: 0, rotationY: 0, duration: 1, stagger: 0.1, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  return (
    <section className="hero split-hero" ref={heroRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
      {/* Cinematic Background Zoom/Pan layer - hardware accelerated */}
      <div className="hero-bg-zoom-layer" style={{
        backgroundImage: `url(${cardsConfig[activeIndex].heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        animation: 'cinematicPan 20s infinite alternate ease-in-out',
        transition: 'background-image 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        filter: 'brightness(1.15) contrast(1.05) saturate(1.08)',
        willChange: 'transform, opacity'
      }}></div>
      
      {/* Enhanced Navy Gradient Layer & Radial Glow */}
      <div style={{ 
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
        background: isAr ? 'radial-gradient(circle at 70% 50%, rgba(23, 135, 200, 0.18), transparent 60%), linear-gradient(to left, rgba(0, 20, 40, 0.8) 30%, rgba(0, 20, 40, 0.4) 100%)' : 'radial-gradient(circle at 30% 50%, rgba(23, 135, 200, 0.18), transparent 60%), linear-gradient(to right, rgba(0, 20, 40, 0.8) 30%, rgba(0, 20, 40, 0.4) 100%)',
        zIndex: 1
      }}></div>

      <div className="container hero-content-split" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {/* Left/Right Side: Structured Text & Glass CTAs */}
        <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'initial' }}>
          <span className="hero-anim" style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2.5px', display: 'block', marginBottom: '1.2rem', textShadow: '0 0 20px rgba(23, 135, 200, 0.4)' }}>
            {tText('TRUSTED FMCG DISTRIBUTION', 'توزيع السلع الاستهلاكية الموثوق')}
          </span>
          <h1 className="hero-anim" style={{ fontSize: 'clamp(3rem, 5vw, 4.2rem)', lineHeight: 1.05, fontWeight: 800, marginBottom: '1.5rem', color: '#fff' }}>
            {tText('Driving FMCG Distribution Excellence Across Kuwait', 'قيادة التميز في توزيع السلع الاستهلاكية في جميع أنحاء الكويت')}
          </h1>
          <p className="hero-anim" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.8rem', maxWidth: '550px', lineHeight: 1.6 }}>
            {tText('HSHG United Trading Company delivers reliable and scalable FMCG distribution solutions across modern and traditional trade channels in Kuwait, supporting international brands with strong market execution and operational excellence.', 'تقدم شركة اتش اس اتش جي المتحدة للتجارة حلول توزيع سلع استهلاكية موثوقة وقابلة للتطوير عبر قنوات التجارة الحديثة والتقليدية في الكويت، وتدعم العلامات التجارية العالمية بتنفيذ قوي في السوق وتميز تشغيلي.')}
          </p>
          <div className="hero-anim hero-buttons" style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/brands" className="premium-glass-btn glow-on-hover">{tText('Our Brands', 'علاماتنا التجارية')}</Link>
            <Link to="/contact" className="premium-outline-btn">{tText('Contact Us', 'اتصل بنا')}</Link>
          </div>
        </div>

        {/* Bottom Corner Slim Dynamic Float Cards */}
        <div className="hero-slim-cards-wrapper" style={{
          position: 'absolute', bottom: '4rem', insetInlineEnd: '0',
          display: 'flex', gap: '1rem', alignItems: 'flex-end'
        }}>
          {cardsConfig.map((c, index) => (
            <div 
              key={index} 
              onClick={() => setActiveIndex(index)}
              className={`floating-card hero-slim-card ${activeIndex === index ? 'active' : ''}`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                cursor: 'pointer',
                willChange: 'transform, opacity'
              }}
            >
              <div className="slim-card-bg" style={{ backgroundImage: `url(${c.heroBg})` }}></div>
              <div className="slim-card-overlay"></div>
              <div className="slim-card-border-anim"></div>
              <div className="slim-card-content">
                <h4>{c.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cinematicPan {
          0% { transform: scale(1.03) translate(0, 0); }
          100% { transform: scale(1.08) translate(-6px, -6px); }
        }
        .premium-glass-btn {
          background: var(--color-primary); color: #fff;
          padding: 1.1rem 2.2rem; border-radius: 4px;
          font-weight: 700; font-family: var(--font-headings); text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 10px 30px rgba(23, 135, 200, 0.3);
        }
        .premium-glass-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(23, 135, 200, 0.5); }
        .premium-outline-btn {
          border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px); color: #fff;
          padding: 1.1rem 2.2rem; border-radius: 4px;
          font-weight: 700; font-family: var(--font-headings); text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-outline-btn:hover { background: #fff; color: var(--color-bg-dark); }
        
        /* SLIM FLOATING MINI-CARDS LOGIC */
        .hero-slim-card {
          position: relative;
          width: 120px;
          height: 180px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0, 20, 40, 0.4);
          backdrop-filter: blur(4px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          animation: cardFloat 6s ease-in-out infinite;
        }
        .hero-slim-card::after {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15), transparent);
          transform: skewX(-25deg);
          transition: 0.7s;
          z-index: 3;
        }
        .hero-slim-card:hover::after {
          left: 125%;
        }
        .hero-slim-card.active {
          width: 160px;
          height: 220px;
          border-color: rgba(23, 135, 200, 0.4);
          box-shadow: 0 20px 45px rgba(23, 135, 200, 0.25);
        }
        .hero-slim-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(23, 135, 200, 0.3);
        }
        .slim-card-bg {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-size: cover; background-position: center;
          opacity: 0.65;
          filter: brightness(1.1) contrast(1.05) saturate(1.05);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
        }
        .hero-slim-card.active .slim-card-bg { opacity: 1; transform: scale(1.03); }
        .hero-slim-card:hover .slim-card-bg { transform: scale(1.05); opacity: 1; }

        .slim-card-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(0, 20, 40, 0.7) 100%);
          z-index: 1;
        }
        
        .slim-card-content {
          position: absolute; bottom: 1.5rem; left: 0; right: 0;
          z-index: 2; text-align: center; padding: 0 0.5rem;
        }
        .slim-card-content h4 {
          color: #fff; font-size: 0.85rem; margin: 0; text-transform: uppercase; letter-spacing: 1.5px;
          font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .hero-slim-card.active .slim-card-content h4 {
          font-size: 1rem; color: var(--color-primary); text-shadow: none;
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @media (max-width: 992px) {
          .hero-slim-cards-wrapper {
            position: relative !important;
            inset-block-end: auto !important;
            inset-inline-end: auto !important;
            justify-content: center;
            width: 100%;
            margin-top: 4rem;
            padding-bottom: 2rem;
          }
          .hero-slim-card { width: 90px; height: 140px; }
          .hero-slim-card.active { width: 120px; height: 170px; }
          .hero-left {
            padding: 2rem 0;
            text-align: center !important;
            align-items: center !important;
          }
          .split-hero {
            height: auto !important;
            min-height: 100vh;
            padding: 120px 0 60px 0;
          }
        }
      `}} />
    </section>
  );
});

// 2. HIGH PERFORMANCE REACT COUNTER COMPONENT (GPU ACCELERATED & INTERSECTION OBSERVED)
const StatCounter = ({ target, label, desc, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let start = null;
    let animationFrame = null;
    const targetValue = parseInt(target.replace(/[^0-9]/g, ''), 10);
    const duration = 1800; // Snappier count speed

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / duration, 1);
      
      // Easing out cubic
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
        observer.disconnect(); // Count only once on entry
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
    <div ref={elementRef} className="card premium-card hover-lift" style={{ 
      padding: '2rem', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      borderInlineStart: '4px solid var(--color-primary)', 
      background: 'var(--color-bg-light)',
      willChange: 'transform, opacity'
    }}>
      <h3 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--color-bg-dark)', fontWeight: 800 }}>
        {count.toLocaleString()}{suffix}
      </h3>
      <h4 style={{ margin: '0.4rem 0 0.2rem 0', fontSize: '1.05rem', color: 'var(--color-primary)' }}>{label}</h4>
      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>{desc}</p>
    </div>
  );
};

function Home() {
  const containerRef = useRef(null);
  const { tText, isAr } = useTranslate();

  useEffect(() => {
    // Scroll reveal animations
    const revealElements = containerRef.current.querySelectorAll('.gsap-reveal');
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('HSHG United Trading & Contracting Co. | Home', 'شركة اتش اس اتش جي المتحدة للتجارة والمقاولات | الرئيسية')}</title>
        <meta name="description" content={tText("Reliable FMCG, OTC, cosmetics, and food distribution across Kuwait.", "توزيع موثوق للسلع الاستهلاكية والطبية والأدوية ومستحظرات التجميل في الكويت.")} />
      </Helmet>

      <div ref={containerRef}>
        
        {/* Render isolated Hero section */}
        <HeroSliderSection tText={tText} isAr={isAr} />

        {/* ABOUT HSHG SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-light-gray)' }}>
          <div className="container editorial-grid">
            <div className="gsap-reveal" style={{ textAlign: 'initial' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
                {tText('ABOUT HSHG UNITED', 'نبذة عن اتش اس اتش جي المتحدة')}
              </span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginTop: '0.5rem', lineHeight: 1.15, fontWeight: 800 }}>
                {tText('Driving FMCG Distribution Excellence Across Kuwait', 'قيادة التميز في توزيع السلع الاستهلاكية في جميع أنحاء الكويت')}
              </h2>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                {tText('HSHG United Trading Company is a fast-growing FMCG distribution company established in 2020 as an affiliation of Homaizi Pharma. The company specializes in the distribution of Food and Non-Food products across Kuwait through a structured network covering both Modern Trade and Traditional Trade channels.', 'تعتبر شركة اتش اس اتش جي المتحدة للتجارة شركة سريعة النمو في مجال توزيع السلع الاستهلاكية، تأسست في عام 2020 كشركة تابعة للحميضي فارما. وتتخصص الشركة في توزيع المنتجات الغذائية وغير الغذائية في جميع أنحاء الكويت من خلال شبكة منظمة تغطي قنوات التجارة الحديثة والتجارة التقليدية.')}
              </p>
              <p style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                {tText('With a strong understanding of the Kuwaiti retail market, HSHG United focuses on efficient distribution, excellent in-store execution, and building long-term partnerships with international brands and retailers.', 'من خلال الفهم القوي لسوق التجزئة الكويتي، تركز شركة اتش اس اتش جي المتحدة على التوزيع الفعال والتنفيذ المتميز داخل المتاجر وبناء شراكات طويلة الأجل مع العلامات التجارية وتجار التجزئة الدوليين.')}
              </p>
            </div>
            
            {/* Optimized React Counters Grid */}
            <div className="grid-2 gsap-reveal" style={{ gap: '1.5rem' }}>
              <StatCounter 
                target="2020" 
                label={tText('Established', 'تأسست عام')} 
                desc={tText('Affiliation of Homaizi Pharma', 'تابعة لشركة الحميضي فارما')} 
              />
              <StatCounter 
                target="2" 
                label={tText('FMCG Segments', 'أقسام السلع الاستهلاكية')} 
                desc={tText('Food & Non-Food Distribution', 'توزيع المواد الغذائية وغير الغذائية')} 
              />
              <StatCounter 
                target="100" 
                label={tText('Coverage Across Kuwait', 'التغطية في الكويت')} 
                desc={tText('Every governorate covered', 'تغطية كامل المحافظات بنسبة 100%')} 
                suffix="%"
              />
              <StatCounter 
                target="7" 
                label={tText('Trade Channels', 'القنوات التجارية')} 
                desc={tText('Modern & Traditional Trade', 'التجارة الحديثة والتقليدية')} 
              />
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <div className="gsap-reveal text-center" style={{ marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
                {tText('CORE CAPABILITIES', 'القدرات الأساسية')}
              </span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginTop: '0.5rem', fontWeight: 800 }}>
                {tText('Our Services', 'خدماتنا')}
              </h2>
              <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', color: 'var(--color-text-muted)' }}>
                {tText('Providing end-to-end distribution and commercial support for international brands.', 'تقديم خدمات توزيع متكاملة ودعم تجاري للعلامات التجارية العالمية.')}
              </p>
            </div>

            <div className="grid-2" style={{ gap: '2rem' }}>
              {[
                {
                  title: tText('FMCG Distribution', 'توزيع السلع الاستهلاكية'),
                  desc: tText('Reliable product distribution across all trade channels including modern key accounts and traditional trade.', 'توزيع موثوق للمنتجات عبر جميع القنوات التجارية بما في ذلك الحسابات الرئيسية الحديثة والتجارة التقليدية.'),
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  )
                },
                {
                  title: tText('Sales & Market Execution', 'المبيعات وتنفيذ السوق'),
                  desc: tText('Strong retail execution, expert merchandising, strategic shelf placement, and maximum brand visibility.', 'تنفيذ قوي للتجزئة، وترويج احترافي، ووضع استراتيجي على الرفوف، وأقصى قدر من الرؤية للعلامة التجارية.'),
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  )
                },
                {
                  title: tText('Logistics & Warehousing', 'الخدمات اللوجستية والتخزين'),
                  desc: tText('Efficient climate-controlled warehousing, inventory control, automated picking, and reliable fleet delivery.', 'تخزين مبرد وفعال، ومراقبة المخزون، والتقاط تلقائي، وتوصيل موثوق عبر أسطول مخصص.'),
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  )
                },
                {
                  title: tText('Strategic Partnerships', 'الشراكات الاستراتيجية'),
                  desc: tText('Long-term growth-focused alliances with global suppliers and local retail cooperations.', 'تحالفات تركز على النمو طويل الأجل مع الموردين العالميين والجمعيات التعاونية المحلية بالتجزئة.'),
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )
                }
              ].map((serv, idx) => (
                <div key={idx} className="card premium-card hover-lift gsap-reveal" style={{ padding: '2.5rem', background: 'var(--color-white)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', willChange: 'transform, opacity' }}>
                  <div className="card-icon" style={{ flexShrink: 0, margin: 0, background: 'rgba(23,135,200,0.08)', color: 'var(--color-primary)', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {serv.icon}
                  </div>
                  <div style={{ textAlign: 'initial' }}>
                    <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.5rem 0', color: 'var(--color-bg-dark)' }}>{serv.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{serv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARKET COVERAGE SECTION (Lazy-loaded responsive images replacing div CSS backdrops) */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-dark)', color: '#fff' }}>
          <div className="container">
            <div className="gsap-reveal text-center" style={{ marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
                {tText('RETAIL PENETRATION', 'تغطية السوق')}
              </span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginTop: '0.5rem', color: '#fff', fontWeight: 800 }}>
                {tText('Market Coverage', 'التغطية السوقية')}
              </h2>
              <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', color: 'rgba(255,255,255,0.7)' }}>
                {tText('Complete commercial grid and shelf placement across all key sectors in Kuwait.', 'شبكة تجارية متكاملة ووضع على الرفوف في جميع القطاعات الرئيسية في الكويت.')}
              </p>
            </div>

            <div className="grid-3" style={{ gap: '2rem' }}>
              {[
                { 
                  title: tText('Hypermarkets & Supermarkets', 'الهايبر ماركت والسوبر ماركت'), 
                  desc: tText('Carrefour, Lulu, and major private supermarket chains.', 'كارفور، لولو، وسلاسل السوبر ماركت الخاصة الكبرى.'),
                  img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600'
                },
                { 
                  title: tText('Cooperative Societies', 'الجمعيات التعاونية'), 
                  desc: tText('Direct pipelines and billing with all Kuwaiti Co-ops.', 'عقود وفواتير مباشرة مع جميع الجمعيات التعاونية الكويتية.'),
                  img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600'
                },
                { 
                  title: tText('Grocery Stores & Mini Markets', 'البقالات والأسواق الصغيرة'), 
                  desc: tText('Traditional trade channels and neighborhood corner stores.', 'قنوات التجارة التقليدية والمحلات التجارية المجاورة.'),
                  img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600'
                },
                { 
                  title: tText('Specialty Retailers', 'المتاجر المتخصصة'), 
                  desc: tText('Cosmetic boutiques, pharmacy groups, and niche stores.', 'صالونات التجميل، مجموعات الصيدليات، والمتاجر المتخصصة.'),
                  img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600'
                },
                { 
                  title: tText('Wholesale Channels', 'أسواق الجملة'), 
                  desc: tText('High-volume bulk sales and commercial wholesale hubs.', 'مبيعات الجملة بكميات كبيرة ومراكز البيع بالجملة التجارية.'),
                  img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=600'
                },
                { 
                  title: tText('Online Platforms', 'المنصات الرقمية والتطبيقات'), 
                  desc: tText('E-commerce platforms, quick-commerce delivery apps.', 'منصات التجارة الإلكترونية، وتطبيقات التوصيل السريع.'),
                  img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600'
                }
              ].map((cov, idx) => (
                <div key={idx} className="card premium-card hover-lift gsap-reveal" style={{ padding: 0, overflow: 'hidden', background: 'var(--color-steel-blue)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', height: '360px', display: 'flex', flexDirection: 'column', willChange: 'transform, opacity' }}>
                  <div style={{ height: '180px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={cov.img} 
                      alt={cov.title} 
                      loading="lazy" 
                      decoding="async" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ padding: '2rem', textAlign: 'initial', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: '0 0 0.5rem 0' }}>{cov.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{cov.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRANDS PREVIEW SECTION (INFINITE SCROLLING CAROUSEL WITH GPU composite promote) */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', overflow: 'hidden', borderBottom: '1px solid var(--color-light-gray)' }}>
          <div className="container" style={{ marginBottom: '3rem' }}>
            <div className="gsap-reveal text-center">
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
                {tText('OUR PORTFOLIO', 'حقيبتنا التجارية')}
              </span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginTop: '0.5rem', fontWeight: 800 }}>
                {tText('Represented Brands', 'العلامات التجارية الممثلة')}
              </h2>
              <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', color: 'var(--color-text-muted)' }}>
                {tText('Partnering with major international Food and Non-Food brands across Kuwait.', 'الشراكة مع كبرى العلامات التجارية العالمية للأغذية وغير الأغذية في الكويت.')}
              </p>
            </div>
          </div>

          <div className="brand-marquee-container" style={{ position: 'relative', width: '100%', padding: '1.5rem 0', display: 'flex', overflow: 'hidden' }}>
            <div className="brand-marquee-scroll" style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', width: 'max-content', willChange: 'transform' }}>
              {[
                { name: 'Maeda', type: 'Food', color: '#E4572E', logo: '/images/logo1.png' },
                { name: 'Segafredo', type: 'Food', color: '#D90429', logo: '/images/logo2.png' },
                { name: 'Cawell’s', type: 'Food', color: '#005F73', logo: '/images/logo10.png' },
                { name: 'Julphar', type: 'Food', color: '#0A9396', logo: '/images/logo11.png' },
                { name: 'Bigen', type: 'Non-Food', color: '#E9C46A', logo: '/images/logo4.png' },
                { name: 'Titania', type: 'Non-Food', color: '#F4A261', logo: '/images/logo7.png' },
                { name: 'Smart', type: 'Non-Food', color: '#2A9D8F', logo: '/images/logo12.png' },
                { name: 'Kodak', type: 'Non-Food', color: '#E76F51', logo: '/images/logo5.png' },
                { name: 'Peros', type: 'Non-Food', color: '#457B9D', logo: '/images/logo13.jpg' },
                { name: 'Asperox', type: 'Non-Food', color: '#1D3557', logo: '/images/logo14.png' },
                { name: 'Sparx', type: 'Non-Food', color: '#E63946', logo: '/images/logo15.png' },
                // Duplicate for infinite loop
                { name: 'Maeda', type: 'Food', color: '#E4572E', logo: '/images/logo1.png' },
                { name: 'Segafredo', type: 'Food', color: '#D90429', logo: '/images/logo2.png' },
                { name: 'Cawell’s', type: 'Food', color: '#005F73', logo: '/images/logo10.png' },
                { name: 'Julphar', type: 'Food', color: '#0A9396', logo: '/images/logo11.png' },
                { name: 'Bigen', type: 'Non-Food', color: '#E9C46A', logo: '/images/logo4.png' },
                { name: 'Titania', type: 'Non-Food', color: '#F4A261', logo: '/images/logo7.png' },
                { name: 'Smart', type: 'Non-Food', color: '#2A9D8F', logo: '/images/logo12.png' },
                { name: 'Kodak', type: 'Non-Food', color: '#E76F51', logo: '/images/logo5.png' },
                { name: 'Peros', type: 'Non-Food', color: '#457B9D', logo: '/images/logo13.jpg' },
                { name: 'Asperox', type: 'Non-Food', color: '#1D3557', logo: '/images/logo14.png' },
                { name: 'Sparx', type: 'Non-Food', color: '#E63946', logo: '/images/logo15.png' }
              ].map((brand, idx) => (
                <div key={idx} className="brand-logo-badge" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem 2.5rem',
                  borderRadius: '12px',
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-light-gray)',
                  minWidth: '180px',
                  height: '110px',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none',
                  willChange: 'transform, opacity'
                }}>
                  <span className="brand-text" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-text-muted)', transition: 'all 0.3s ease', letterSpacing: '0.5px' }}>{brand.name}</span>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, marginTop: '0.2rem', letterSpacing: '1px' }}>{brand.type}</span>
                  
                  <style dangerouslySetInnerHTML={{ __html: `
                    .brand-logo-badge:hover {
                      border-color: ${brand.color}33;
                      background: #ffffff;
                      transform: translateY(-5px);
                      box-shadow: 0 10px 25px ${brand.color}12;
                    }
                    .brand-logo-badge:hover .brand-text {
                      color: ${brand.color} !important;
                      text-shadow: 0 0 10px ${brand.color}12;
                    }
                  `}} />
                </div>
              ))}
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marqueeScroll {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .brand-marquee-scroll {
              animation: marqueeScroll 25s linear infinite;
            }
            [dir="rtl"] .brand-marquee-scroll {
              animation: marqueeScroll 25s linear infinite reverse;
            }
            .brand-marquee-container:hover .brand-marquee-scroll {
              animation-play-state: paused;
            }
          `}} />
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <div className="gsap-reveal text-center" style={{ marginBottom: '4.5rem' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
                {tText('OPERATIONAL STABILITY', 'الاستقرار التشغيلي')}
              </span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginTop: '0.5rem', fontWeight: 800 }}>
                {tText('Why Choose Us', 'لماذا تختارنا')}
              </h2>
              <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', color: 'var(--color-text-muted)' }}>
                {tText('We provide a robust distribution setup backed by structural retail capability.', 'نحن نوفر بنية توزيع قوية مدعومة بقدرة تجزئة هيكلية.')}
              </p>
            </div>

            <div className="grid-3" style={{ gap: '2rem' }}>
              {[
                {
                  title: tText('Expanding Distribution Network', 'شبكة توزيع متوسعة وقوية'),
                  desc: tText('Continuous channel penetration across modern trade, cooperative societies, and local traditional routes.', 'اختراق مستمر للقنوات عبر التجارة الحديثة، والجمعيات التعاونية، والمسارات التقليدية المحلية.')
                },
                {
                  title: tText('Professional Sales Team', 'فريق مبيعات محترف'),
                  desc: tText('Fully-trained commercial team executing direct route planning, merchandising, and client support.', 'فريق تجاري مدرب بالكامل ينفذ تخطيط الطرق المباشر والترويج ودعم العملاء.')
                },
                {
                  title: tText('Efficient Logistics Operations', 'عمليات لوجستية فعالة'),
                  desc: tText('Secure climate control warehousing and fully fleet deployment across Kuwait state sectors.', 'تخزين آمن ومبرد ومرافق أسطول توصيل متطورة في جميع أنحاء الكويت.')
                },
                {
                  title: tText('Deep Understanding of Kuwait Market', 'فهم عميق لسوق الكويت'),
                  desc: tText('Decade-long strategic insights and regional relations with top cooperations and retailers.', 'رؤى استراتيجية ممتدة لعقود وعلاقات إقليمية مع كبار المتعاونين وتجار التجزئة.')
                },
                {
                  title: tText('Long-Term Growth Approach', 'نهج نمو طويل الأجل'),
                  desc: tText('Value-creation partnerships securing stable downstream reach and scalable brand success.', 'شراكات خلق القيمة تضمن وصولاً مستقراً في السوق ونجاحاً قابلاً للتطوير للعلامات التجارية.')
                },
                {
                  title: tText('Reliable Market Execution', 'تنفيذ موثوق في السوق'),
                  desc: tText('Strict compliance with SKU tracking, temperature integrity, and product shelf representation.', 'التزام صارم بتتبع السلع وتكامل درجات الحرارة وعرض المنتجات على الرفوف.')
                }
              ].map((point, idx) => (
                <div key={idx} className="card premium-card hover-lift gsap-reveal" style={{ padding: '2.5rem', background: 'var(--color-white)', border: '1px solid var(--color-light-gray)', borderRadius: '8px', textAlign: 'initial', willChange: 'transform, opacity' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(23,135,200,0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      ✓
                    </div>
                    <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--color-bg-dark)', fontWeight: 700 }}>{point.title}</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="section-padding" style={{
          position: 'relative',
          backgroundColor: 'var(--color-bg-dark)',
          color: '#fff',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'radial-gradient(circle at 80% 20%, rgba(23, 135, 200, 0.15), transparent 50%)',
            zIndex: 0
          }}></div>
          
          <div className="container text-center" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2.5px', display: 'block', marginBottom: '1rem' }}>
              {tText('PARTNER WITH US', 'شراكة المبيعات')}
            </span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
              {tText('Let’s Grow Together', 'لننمو معاً')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>
              {tText('Partner with HSHG United Trading Company and expand your brand presence across Kuwait through reliable distribution and strong market execution.', 'كن شريكاً لشركة اتش اس اتش جي المتحدة للتجارة ووسّع تواجد علامتك التجارية في جميع أنحاء الكويت من خلال شبكة توزيع موثوقة وتنفيذ قوي في السوق.')}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="premium-glass-btn glow-on-hover" style={{ padding: '1.2rem 2.5rem' }}>
                {tText('Contact Us', 'اتصل بنا')}
              </Link>
              <Link to="/contact?partner=true" className="premium-outline-btn" style={{ padding: '1.2rem 2.5rem' }}>
                {tText('Become a Partner', 'كن شريكاً تجارياً')}
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;
