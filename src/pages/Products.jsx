import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';

function Products() {
  const { tText, isAr } = useTranslate();
  const [activeTab, setActiveTab] = useState('fmcg');
  const contentRef = useRef(null);

  // Standardized dynamic dataset defined inside useMemo linked to translation context
  const categories = useMemo(() => [
    { id: 'fmcg', label: tText('FMCG Distribution', 'توزيع السلع الاستهلاكية') },
    { id: 'food', label: tText('Food & Beverage', 'الأغذية والمشروبات') },
    { id: 'otc', label: tText('OTC & Healthcare', 'الرعاية الصحية والطبية') },
    { id: 'cosmetics', label: tText('Cosmetics', 'مستحضرات التجميل') },
    { id: 'household', label: tText('Household Products', 'المنتجات المنزلية') },
    { id: 'warehousing', label: tText('Warehousing', 'التخزين والمستودعات') },
    { id: 'logistics', label: tText('Logistics', 'الخدمات اللوجستية') },
    { id: 'merchandising', label: tText('Merchandising', 'الترويج والتسويق') }
  ], [tText]);

  const contentData = useMemo(() => ({
    fmcg: {
      title: tText('Reliable FMCG Distribution', 'توزيع موثوق للسلع الاستهلاكية'),
      subtitle: tText('Nationwide Supply Management', 'إدارة التوريد على مستوى الدولة'),
      desc: tText('Reliable FMCG distribution solutions across Kuwait, scaling products daily through core market pipelines.', 'حلول توزيع موثوقة للسلع الاستهلاكية في جميع أنحاء الكويت، وتوسيع نطاق المنتجات يومياً من خلال خطوط السوق الأساسية.'),
      mainImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600',
        'https://images.unsplash.com/photo-1516594798240-99a48260d72c?q=80&w=600',
        'https://images.unsplash.com/photo-1534723452862-4c8743311667?q=80&w=600'
      ]
    },
    food: {
      title: tText('Supplying Trusted Brands', 'توريد العلامات التجارية الموثوقة'),
      subtitle: tText('Quality Pantry Solutions', 'حلول خزانة المواد الغذائية عالية الجودة'),
      desc: tText('Supplying trusted food and beverage brands directly into hypermarkets, cafes, and retail grocers.', 'توريد العلامات التجارية الموثوقة للأغذية والمشروبات مباشرة إلى محلات الهايبر ماركت والمقاهي وبائعي البقالة بالتجزئة.'),
      mainImg: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600',
        'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=600'
      ]
    },
    otc: {
      title: tText('Healthcare Infrastructure', 'البنية التحتية للرعاية الصحية'),
      subtitle: tText('Pharma Channel Velocity', 'سرعة قنوات الأدوية'),
      desc: tText('Efficient OTC and healthcare supply chain support, servicing chains, independent pharmacies, and regional clinics.', 'دعم كفء لسلسلة التوريد للأدوية التي لا تستلزم وصفة طبية والرعاية الصحية، وخدمة السلاسل والصيدليات المستقلة والعيادات.'),
      mainImg: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=600',
        'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=600',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600'
      ]
    },
    cosmetics: {
      title: tText('Beauty & Personal Care', 'الجمال والعناية الشخصية'),
      subtitle: tText('Premium Esthetic Representation', 'تمثيل جمالي متميز'),
      desc: tText('Premium beauty and personal care distribution connecting luxury global manufacturers to Gulf consumers.', 'توزيع متميز للجمال والعناية الشخصية يربط الشركات العالمية الفاخرة بالمستهلكين في الخليج.'),
      mainImg: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600',
        'https://images.unsplash.com/photo-1571875257727-256c34da4281?q=80&w=600',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600'
      ]
    },
    household: {
      title: tText('Household Utilities', 'الأدوات المنزلية'),
      subtitle: tText('Daily Essential Velocity', 'السرعة اليومية للمنتجات الأساسية'),
      desc: tText('Everyday household solutions, utilities, and electronics delivered efficiently across core segments.', 'حلول وأدوات وإلكترونيات منزلية يومية يتم توصيلها بكفاءة عبر القطاعات الأساسية.'),
      mainImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600',
        'https://images.unsplash.com/photo-1528740561666-dc2479de08ce?q=80&w=600',
        'https://images.unsplash.com/photo-1550009158-9ebf6d170381?q=80&w=600'
      ]
    },
    warehousing: {
      title: tText('Intelligent Warehousing', 'المستودعات الذكية'),
      subtitle: tText('Climatic Integrity Checks', 'فحوصات النزاهة المناخية'),
      desc: tText('Modern warehousing infrastructure with optimized inventory management, tracking over 10,000 cubic meters.', 'بنية تحتية حديثة للمستودعات مع إدارة محسنة للمخزون وتتبع أكثر من 10,000 متر مكعب.'),
      mainImg: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600',
        'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600',
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600'
      ]
    },
    logistics: {
      title: tText('Fast & Scalable Logistics', 'خدمات لوجستية سريعة وقابلة للتوسع'),
      subtitle: tText('Hardened Supply Velocity', 'سرعة التوريد المدعمة'),
      desc: tText('Scalable logistics operations across Kuwait secured by a temperature-regulated fleet deployment system.', 'عمليات لوجستية قابلة للتوسع في جميع أنحاء الكويت ومؤمنة بنظام نشر أسطول منظم لدرجة الحرارة.'),
      mainImg: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=600',
        'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600',
        'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600'
      ]
    },
    merchandising: {
      title: tText('Strategic Merchandising', 'الترويج الاستراتيجي'),
      subtitle: tText('Maximizing Visual Presence', 'تعظيم الحضور البصري'),
      desc: tText('Dynamic retail solutions ensuring distinct brand visibility and persistent shelf alignment metrics.', 'حلول التجزئة الديناميكية التي تضمن وضوحاً متميزاً للعلامة التجارية ومقاييس توافق الرفوف الدائمة.'),
      mainImg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600',
        'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600',
        'https://images.unsplash.com/photo-1516594798240-99a48260d72c?q=80&w=600'
      ]
    }
  }), [tText]);

  useEffect(() => {
    // Initial hero entry
    gsap.fromTo('.hero-reveal', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
    );
  }, []);

  useEffect(() => {
    // Animate content change
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  const data = contentData[activeTab];

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('What We Offer | Integrated Distribution & Logistics | HSHG', 'ماذا نقدم | التوزيع والخدمات اللوجستية المتكاملة | اتش اس اتش جي')}</title>
        <meta name="description" content={tText("Explore HSHG United's end-to-end distribution and logistics solutions in Kuwait.", "استكشف حلول التوزيع والخدمات اللوجستية المتكاملة من اتش اس اتش جي المتحدة في الكويت.")} />
      </Helmet>

      <div style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
        
        {/* HERO SECTION */}
        <section className="section-padding" style={{ paddingBottom: '4rem', paddingTop: '10rem' }}>
          <div className="container text-center">
            <span className="hero-reveal" style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
              {tText('Our Solutions', 'حلولنا')}
            </span>
            <h1 className="hero-reveal" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
              {tText('Integrated FMCG & Distribution Services', 'خدمات التوزيع المتكاملة والسلع الاستهلاكية')}
            </h1>
            <p className="hero-reveal" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
              {tText('End-to-end distribution, warehousing, merchandising, and retail solutions across Kuwait.', 'حلول متكاملة للتوزيع والتخزين والترويج والبيع بالتجزئة في جميع أنحاء الكويت.')}
            </p>
          </div>
        </section>

        {/* CATEGORY SWITCHER - STICKY */}
        <section style={{ position: 'sticky', top: '70px', zIndex: 100, backgroundColor: 'rgba(247, 249, 251, 0.95)', backdropFilter: 'blur(10px)', padding: '1rem 0', borderBottom: '1px solid var(--color-light-gray)' }}>
          <div className="container">
            <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '5px', justifyContent: 'center' }} className="custom-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease',
                    background: activeTab === cat.id ? 'var(--color-bg-dark)' : '#fff',
                    color: activeTab === cat.id ? '#fff' : 'var(--color-bg-dark)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    border: '1px solid var(--color-light-gray)',
                    cursor: 'pointer'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="section-padding" style={{ paddingTop: '5rem' }} ref={contentRef}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: '6rem' }} className="editorial-grid">
              
              {/* Right Copy (RTL Swapped naturally via grid/flex) */}
              <div style={{ textAlign: 'initial' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                  {data.subtitle}
                </span>
                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, marginTop: '0.8rem', lineHeight: 1.1 }}>
                  {data.title}
                </h2>
                <p style={{ marginTop: '2rem', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  {data.desc}
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2.5rem' }}>
                  {tText('Discuss Integration', 'ناقش التكامل معنا')}
                </Link>
              </div>

              {/* Circular Asset */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="floating-circle" style={{
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  background: `url(${data.mainImg}) center/cover no-repeat`,
                  boxShadow: 'var(--shadow-premium)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom right, rgba(23, 135, 200, 0.1), transparent)'
                  }}></div>
                </div>
              </div>
            </div>

            {/* Gallery Grids / Large Horizontal Rounded Image Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              {data.gallery.map((imgUrl, idx) => (
                <div key={idx} style={{
                  height: '350px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-premium)',
                  background: `url(${imgUrl}) center/cover no-repeat`,
                  transition: 'transform 0.6s ease'
                }} className="gallery-card hover-lift">
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(to top, rgba(7,27,42,0.4), transparent)',
                    transition: 'background 0.4s ease'
                  }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style dangerouslySetInnerHTML={{__html: `
          .custom-scrollbar::-webkit-scrollbar {
            height: 0;
            width: 0;
          }
          .floating-circle {
            animation: floatingAnimation 6s ease-in-out infinite;
          }
          @keyframes floatingAnimation {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .gallery-card:hover {
            transform: scale(1.02);
          }
          @media (max-width: 992px) {
            .editorial-grid {
              grid-template-columns: 1fr !important;
              gap: 4rem !important;
            }
            .floating-circle {
              width: 300px !important;
              height: 300px !important;
            }
          }
        `}} />

      </div>
    </>
  );
}

export default Products;
