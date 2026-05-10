import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslate } from '../utils/translate';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const { tText, isAr } = useTranslate();

  const cardsConfig = [
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
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsConfig.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

    // Scroll reveal animations
    const revealElements = containerRef.current.querySelectorAll('.gsap-reveal');
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
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
        <meta name="description" content={tText("Reliable FMCG, OTC, cosmetics, and food distribution across Kuwait.", "توزيع موثوق للسلع الاستهلاكية والطبية والأدوية ومستحضرات التجميل في الكويت.")} />
      </Helmet>

      <div ref={containerRef}>
        {/* 1. PREMIUM SPLIT HERO SECTION */}
        <section className="hero split-hero" ref={heroRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
          {/* Cinematic Background Zoom/Pan layer */}
          <div className="hero-bg-zoom-layer" style={{
            backgroundImage: `url(${cardsConfig[activeIndex].heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            animation: 'cinematicPan 20s infinite alternate ease-in-out',
            transition: 'background-image 1.5s ease-in-out'
          }}></div>
          
          {/* Enhanced Navy Gradient Layer & Radial Glow */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            background: isAr ? 'radial-gradient(circle at 70% 50%, rgba(23, 135, 200, 0.15), transparent 60%), linear-gradient(to left, rgba(7, 27, 42, 0.95) 40%, rgba(7, 27, 42, 0.6) 100%)' : 'radial-gradient(circle at 30% 50%, rgba(23, 135, 200, 0.15), transparent 60%), linear-gradient(to right, rgba(7, 27, 42, 0.95) 40%, rgba(7, 27, 42, 0.6) 100%)',
            zIndex: 1
          }}></div>

          <div className="container hero-content-split" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
            {/* Left/Right Side: Structured Text & Glass CTAs */}
            <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'initial' }}>
              <span className="hero-anim" style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2.5px', display: 'block', marginBottom: '1.2rem', textShadow: '0 0 20px rgba(23, 135, 200, 0.4)' }}>
                {tText('TRUSTED FMCG DISTRIBUTION', 'توزيع السلع الاستهلاكية الموثوق')}
              </span>
              <h1 className="hero-anim" style={{ fontSize: 'clamp(3rem, 5vw, 4.2rem)', lineHeight: 1.05, fontWeight: 800, marginBottom: '1.5rem', color: '#fff' }}>
                {tText('Reliable Distribution Across Kuwait', 'توزيع موثوق في جميع أنحاء الكويت')}
              </h1>
              <p className="hero-anim" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.8rem', maxWidth: '550px', lineHeight: 1.6 }}>
                {tText('Integrated FMCG, logistics, warehousing, and retail supply solutions.', 'حلول متكاملة للسلع الاستهلاكية، اللوجستيات، التخزين، وسلاسل توريد التجزئة.')}
              </p>
              <div className="hero-anim" style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
                <Link to="/products" className="premium-glass-btn glow-on-hover">{tText('Explore Services', 'استكشاف الخدمات')}</Link>
                <Link to="/contact" className="premium-outline-btn">{tText('Contact Team', 'تواصل معنا')}</Link>
              </div>

              {/* Static Stats Array */}
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[
                  { num: '2000+', sub: tText('Products', 'منتج') },
                  { num: '250+', sub: tText('Employees', 'موظف') },
                  { num: '30+', sub: tText('Distribution Partners', 'شريك توزيع') },
                  { num: '50+', sub: tText('Years Experience', 'عاماً من الخبرة') }
                ].map((item, i) => (
                  <div key={i} className="hero-anim" style={{ borderInlineStart: '1px solid rgba(255,255,255,0.15)', paddingInlineStart: '1.5rem' }}>
                    <h4 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>{item.num}</h4>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.sub}</span>
                  </div>
                ))}
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
                    animationDelay: `${index * 0.2}s`,
                    cursor: 'pointer'
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

          {/* Inline styling block for Slim Vertical Mini-Cards */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes cinematicPan {
              0% { transform: scale(1.05) translate(0, 0); }
              100% { transform: scale(1.15) translate(-10px, -10px); }
            }
            .premium-glass-btn {
              background: var(--color-primary); color: #fff;
              padding: 1.1rem 2.2rem; border-radius: 4px;
              font-weight: 700; font-family: var(--font-headings); text-decoration: none;
              transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(23, 135, 200, 0.3);
            }
            .premium-glass-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(23, 135, 200, 0.5); }
            .premium-outline-btn {
              border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);
              backdrop-filter: blur(8px); color: #fff;
              padding: 1.1rem 2.2rem; border-radius: 4px;
              font-weight: 700; font-family: var(--font-headings); text-decoration: none;
              transition: all 0.3s ease;
            }
            .premium-outline-btn:hover { background: #fff; color: var(--color-bg-dark); }
            
            /* SLIM FLOATING MINI-CARDS LOGIC */
            .hero-slim-card {
              position: relative;
              width: 120px;
              height: 180px;
              border-radius: 24px;
              overflow: hidden;
              border: 1px solid rgba(255,255,255,0.1);
              background: rgba(7,27,42,0.5);
              backdrop-filter: blur(4px);
              transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
              box-shadow: 0 15px 35px rgba(0,0,0,0.3);
              animation: cardFloat 6s ease-in-out infinite;
            }
            .hero-slim-card.active {
              width: 160px;
              height: 220px;
              border-color: rgba(23, 135, 200, 0.5);
              box-shadow: 0 20px 45px rgba(23, 135, 200, 0.3);
            }
            .hero-slim-card:hover {
              transform: translateY(-10px) scale(1.02);
              box-shadow: 0 20px 50px rgba(23, 135, 200, 0.4);
            }
            .slim-card-bg {
              position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              background-size: cover; background-position: center;
              opacity: 0.6;
              transition: transform 0.8s ease, opacity 0.5s ease;
            }
            .hero-slim-card.active .slim-card-bg { opacity: 1; transform: scale(1.05); }
            .hero-slim-card:hover .slim-card-bg { transform: scale(1.1); opacity: 1; }

            .slim-card-overlay {
              position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              background: linear-gradient(to bottom, transparent 40%, rgba(7,27,42,0.9) 100%);
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
              50% { transform: translateY(-8px); }
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
              .hero-slim-card { width: 100px; height: 160px; }
              .hero-slim-card.active { width: 130px; height: 190px; }
              .hero-content-split { 
                flex-direction: column; 
                padding-top: 120px !important; 
                text-align: center !important;
              }
            }
          `}} />
        </section>

        {/* 2. TRUSTED BRANDS SECTION */}
        <section style={{ backgroundColor: 'var(--color-white)', overflow: 'hidden' }}>
          <div className="marquee-container">
            <div className="marquee-content">
              {['VITADAY', 'BIGEN', 'TITANIA', 'JULPHAR', 'CAWELLS', 'MAX SPORT', 'FASHY', 'KODAK', 'VITADAY', 'BIGEN', 'TITANIA', 'JULPHAR', 'CAWELLS', 'MAX SPORT', 'FASHY', 'KODAK'].map((brand, idx) => (
                <div key={idx} className="marquee-item">{brand}</div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHO WE SERVE SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container editorial-grid">
            <div className="gsap-reveal">
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                {tText('Who We Serve', 'من نخدم')}
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginTop: '1rem', lineHeight: 1.1 }}>
                {tText('Comprehensive Retail & Consumer Pipeline Coverage', 'تغطية شاملة لقطاع التجزئة وخطوط المستهلكين')}
              </h2>
              <p style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                {tText("HSHG guarantees complete operational fulfillment across Kuwait's primary sales segments, ensuring active billing ratios and uncompromised brand representation.", "تضمن شركة اتش اس اتش جي الوفاء التشغيلي الكامل عبر قطاعات المبيعات الأولية في الكويت، مما يضمن معدلات فوترة نشطة وتمثيل لا مثيل له للعلامة التجارية.")}
              </p>
            </div>
            <div className="grid-2 gsap-reveal" style={{ gap: '1.5rem' }}>
              {[
                tText('Retail Chains', 'سلاسل التجزئة'), 
                tText('Hypermarkets', 'الهايبر ماركت'), 
                tText('Grocery Stores', 'البقالات'), 
                tText('Restaurants', 'المطاعم'), 
                tText('Wholesale Markets', 'أسواق الجملة'), 
                tText('Institutional Supply', 'التوريد المؤسسي')
              ].map((item, idx) => (
                <div key={idx} className="card premium-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', borderInlineStart: '3px solid var(--color-primary)' }}>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OPERATIONS SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div className="gsap-reveal">
              <img 
                src="/images/warehouse.png" 
                alt={tText("Warehouse Operations", "عمليات المستودعات")} 
                className="premium-img"
                style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-premium)' }}
              />
            </div>
            <div className="gsap-reveal">
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                {tText('Operations', 'العمليات')}
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                {tText('Engineered for Operational Excellence', 'هندسة التميز التشغيلي')}
              </h2>
              <p style={{ lineHeight: 1.8, margin: '2rem 0' }}>
                {tText('Our 10,000 CBM climate zones protect raw items, medical equipment, and consumer goods, allowing quick fulfillment via our 16 temperature-regulated transport units.', 'تحمي المناطق المناخية التي تبلغ مساحتها 10,000 متر مكعب المواد الخام والمعدات الطبية والسلع الاستهلاكية، مما يتيح الاستجابة السريعة عبر 16 وحدة نقل مُبردة.')}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', margin: 0 }}>10,000+</h3>
                  <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>
                    {tText('CBM Storage Capacity', 'سعة التخزين بالمتر المكعب')}
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', margin: 0 }}>16</h3>
                  <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>
                    {tText('Refrigerated Vehicles', 'وحدة مركبة مبردة')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARKET PRESENCE SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container editorial-grid">
            <div className="gsap-reveal">
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                {tText('Presence', 'التواجد')}
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
                {tText('Unrivaled Distribution Network', 'شبكة توزيع منقطعة النظير')}
              </h2>
              <p style={{ lineHeight: 1.8, marginTop: '2rem', color: 'var(--color-text-muted)' }}>
                {tText('From strategic warehouse hubs in Al Rai to active daily fulfillment across Kuwait’s hypermarkets, co-ops, and grocery chains.', 'من مراكز المستودعات الاستراتيجية في منطقة الري إلى الإنجاز اليومي النشط عبر محلات الهايبر ماركت والجمعيات التعاونية وسلاسل البقالة في الكويت.')}
              </p>
              <Link to="/coverage" className="btn btn-primary" style={{ marginTop: '2.5rem' }}>
                {tText('View Coverage Map', 'عرض خريطة التغطية')}
              </Link>
            </div>
            <div className="gsap-reveal" style={{ background: 'var(--color-bg-light)', height: '320px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-light-gray)' }}>
              <div style={{ textAlign: 'center' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" style={{ marginBottom: '1rem' }}><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                <h4 style={{ color: 'var(--color-bg-dark)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tText('State of Kuwait', 'دولة الكويت')}</h4>
                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-muted)' }}>{tText('2,000+ Active Retail Points', 'أكثر من 2000 نقطة بيع نشطة')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <div className="gsap-reveal text-center" style={{ marginBottom: '5rem' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                {tText('What We Offer', 'ماذا نقدم')}
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
                {tText('Brand & Product Segments', 'شرائح العلامات التجارية والمنتجات')}
              </h2>
            </div>

            <div className="grid-3" style={{ gap: '2rem' }}>
              {[
                { title: tText('FMCG Products', 'منتجات السلع الاستهلاكية'), desc: tText('Maeda Pasta, Snacks, healthy life ingredients.', 'معكرونة مايدا، الوجبات الخفيفة، مكونات الحياة الصحية.') },
                { title: tText('OTC Healthcare', 'الرعاية الصحية'), desc: tText('Adol, Mebo, Cawells pharmacy support.', 'أدول، ميبو، ودعم صيدلية كاويلز.') },
                { title: tText('Cosmetics & Beauty', 'مستحضرات التجميل والجمال'), desc: tText('Bigen aesthetic care products.', 'منتجات بيجين للعناية التجميلية.') },
                { title: tText('Beverage & Juices', 'المشروبات والعصائر'), desc: tText('Vitaday, Frugo healthy liquids.', 'فيتا داي، سوائل فروجو الصحية.') },
                { title: tText('Household Utilities', 'المنتجات المنزلية'), desc: tText('Kodak Battery, Kodak LED, durable electronics.', 'بطارية كوداك، مصابيح كوداك ليد، الإلكترونيات المتينة.') }
              ].map((prod, idx) => (
                <div key={idx} className="card premium-card gsap-reveal hover-lift" style={{ padding: '3rem' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>{tText('Segment', 'القطاع')} 0{idx + 1}</span>
                  <h3 style={{ margin: '1rem 0' }}>{prod.title}</h3>
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--color-text-muted)' }}>{prod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREERS SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container text-center" style={{ maxWidth: '800px' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
              {tText('Careers', 'الوظائف')}
            </span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
              {tText('Join the HSHG Corporate Family', 'انضم إلى عائلة اتش اس اتش جي المؤسسية')}
            </h2>
            <p style={{ lineHeight: 1.8, margin: '2rem 0', color: 'var(--color-text-muted)' }}>
              {tText("We continuously cultivate high-grade professional environments designed to reward integrity, teamwork, and entrepreneurial initiative. Build your commercial career with Kuwait's leading supply chain affiliate.", "نحن نعمل باستمرار على تطوير بيئات مهنية رفيعة المستوى مصممة لمكافأة النزاهة والعمل الجماعي والمبادرة الريادية. ابنِ مسيرتك التجارية مع الشركة الرائدة في مجال سلسلة التوريد في الكويت.")}
            </p>
            <Link to="/careers" className="btn btn-primary">{tText('View Open Opportunities', 'عرض الفرص المتاحة')}</Link>
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-dark)', color: '#fff' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem' }}>
            <div style={{ textAlign: 'initial' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                {tText('Get in Touch', 'اتصل بنا')}
              </span>
              <h2 style={{ color: '#fff', fontSize: '2.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
                {tText('Corporate Offices', 'المكاتب المؤسسية')}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '3rem' }}>
                {tText("Establish contact with Mr. Hamad & Saleh Alghanim's executive board to review distribution representation capabilities.", "تواصل مع المجلس التنفيذي للسيد حمد وصالح الغانم لمراجعة إمكانيات تمثيل التوزيع.")}
              </p>

              <div style={{ display: 'grid', gap: '2rem' }}>
                <div>
                  <strong style={{ color: 'var(--color-primary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', display: 'block' }}>{tText('Hotline Support', 'دعم الخط الساخن')}</strong>
                  <span style={{ fontSize: '1.2rem', color: '#fff', direction: 'ltr', display: 'inline-block' }}>+965 1845 6789</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-primary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', display: 'block' }}>{tText('Email Support', 'دعم البريد الإلكتروني')}</strong>
                  <span style={{ fontSize: '1.2rem', color: '#fff' }}>info@hshgunited.com</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'initial' }}>
              <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>{tText('Send Business Inquiry', 'إرسال استفسار تجاري')}</h3>
              <form style={{ display: 'grid', gap: '1.5rem' }}>
                <input type="text" placeholder={tText('Your Name', 'الاسم الكامل')} required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', fontFamily: 'inherit' }} />
                <input type="email" placeholder={tText('Business Email', 'البريد الإلكتروني للأعمال')} required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', fontFamily: 'inherit' }} />
                <textarea rows="4" placeholder={tText('Corporate message...', 'الرسالة المؤسسية...')} required style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', resize: 'vertical', fontFamily: 'inherit' }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>{tText('Send Inquiry', 'إرسال الطلب')}</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
