import { useState, useEffect, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';
import { imagesConfig, getFallbackPlaceholder } from '../config/images';

function Products() {
  const { tText, isAr } = useTranslate();
  const [activeTab, setActiveTab] = useState('dryfood');
  const contentRef = useRef(null);

  // Standardized dynamic dataset defined inside useMemo linked to translation context
  const categories = useMemo(() => [
    { id: 'dryfood', label: tText('Dry Food & Groceries', 'المواد الغذائية الجافة') },
    { id: 'cosmetics', label: tText('Cosmetics', 'مستحضرات التجميل') },
    { id: 'bodycare', label: tText('Body Care', 'العناية بالجسم') },
    { id: 'electronics', label: tText('Electronics', 'الإلكترونيات') },
    { id: 'otc', label: tText('OTC Products', 'المنتجات الطبية') },
    { id: 'shoecare', label: tText('Shoe Care', 'العناية بالأحذية') },
    { id: 'household', label: tText('Household Products', 'المنتجات المنزلية') }
  ], [tText]);

  const getProdData = (key, title, subtitle, desc, brands, label) => {
    const cfg = imagesConfig.products[key] || {};
    return {
      title,
      subtitle,
      desc,
      brands,
      mainImg: cfg.mainImg || getFallbackPlaceholder(label),
      gallery: cfg.gallery && cfg.gallery.length > 0 ? cfg.gallery : [getFallbackPlaceholder(`${label} Gallery 1`), getFallbackPlaceholder(`${label} Gallery 2`)]
    };
  };

  const contentData = useMemo(() => ({
    dryfood: getProdData('dryfood', tText('Dry Food & Groceries', 'المواد الغذائية الجافة والبقالة'), tText('Pantry Essentials', 'أساسيات خزانة الطعام'), tText('High-frequency distribution supplying high-demand food items to hypermarkets and groceries.', 'توزيع متكرر يزود الهايبر ماركت ومحلات البقالة بالمواد الغذائية عالية الطلب.'), ['VITADAY', 'MAX SPORT', 'CAWELLS'], 'Dry Food'),
    cosmetics: getProdData('cosmetics', tText('Premium Cosmetics', 'مستحضرات التجميل المتميزة'), tText('Beauty Representation', 'تمثيل الجمال'), tText('Exclusive representation of international beauty products designed for luxury appeal.', 'تمثيل حصري لمنتجات التجميل العالمية المصممة للجاذبية الفاخرة.'), ['TITANIA', 'BIGEN', 'FASHY'], 'Premium Cosmetics'),
    bodycare: getProdData('bodycare', tText('Personal Body Care', 'العناية بالجسم الشخصية'), tText('Daily Hygiene Maintenance', 'الحفاظ على النظافة اليومية'), tText('High-grade skincare and cleaning solutions for modern family daily regimens.', 'حلول عالية الجودة للعناية بالبشرة والتنظيف للأنظمة اليومية للعائلات الحديثة.'), ['JULPHAR', 'TITANIA', 'CAWELLS'], 'Body Care'),
    electronics: getProdData('electronics', tText('Electronics & Utilities', 'الإلكترونيات والأدوات المساعدة'), tText('Connected Utility Tech', 'تقنية المرافق المتصلة'), tText('Curated selection of tech consumables and reliable accessories delivered straight to retail shelves.', 'مجموعة مختارة من المستهلكات التقنية والملحقات الموثوقة التي يتم تسليمها مباشرة إلى أرفف البيع بالتجزئة.'), ['KODAK', 'VITADAY'], 'Electronics'),
    otc: getProdData('otc', tText('OTC Products', 'المنتجات التي لا تستلزم وصفة طبية'), tText('Accessible Pharmaceuticals', 'أدوية يسهل الوصول إليها'), tText('Ensuring stability and immediate availability of core non-prescription health necessities.', 'ضمان الاستقرار والتوافر الفوري للاحتياجات الصحية الأساسية غير الموصوفة.'), ['JULPHAR', 'CAWELLS'], 'OTC Products'),
    shoecare: getProdData('shoecare', tText('Advanced Shoe Care', 'العناية المتقدمة بالأحذية'), tText('Polishing & Preservation', 'التلميع والحفاظ'), tText('Premium solutions for fabric care, preservation, and leather aesthetics.', 'حلول متميزة للعناية بالأقمشة والحفاظ عليها وجماليات الجلود.'), ['TITANIA', 'FASHY'], 'Shoe Care'),
    household: getProdData('household', tText('Household Solutions', 'حلول منزلية'), tText('Daily Utility Items', 'العناصر المساعدة اليومية'), tText('Broad portfolio of utility products built for residential maintenance and daily comfort.', 'محفظة واسعة من منتجات المرافق المبنية للصيانة السكنية والراحة اليومية.'), ['BIGEN', 'KODAK', 'FASHY'], 'Household')
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
            <div style={{ marginBottom: '6rem' }} className="editorial-grid">
              
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

            {/* LOGO GRID - INTEGRATED REVEAL */}
            <div style={{ marginTop: '6rem', borderTop: '1px solid var(--color-light-gray)', paddingTop: '4rem' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', display: 'block', textAlign: 'center', marginBottom: '2rem' }}>
                {tText('Represented Category Brands', 'العلامات التجارية الممثلة للفئة')}
              </span>
              <div style={{ 
                display: 'grid', 
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }} className="brand-logo-grid">
                {(data.brands || []).map((brand, idx) => (
                  <div key={idx} className="card hover-lift" style={{ 
                    background: '#fff', 
                    padding: '2rem 1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    boxShadow: '0 5px 20px rgba(0,0,0,0.02)',
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                  }}>
                    <div style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '1px', color: 'var(--color-bg-dark)', opacity: 0.9 }}>
                      {brand}
                    </div>
                  </div>
                ))}
              </div>
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
          .brand-logo-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          @media (min-width: 992px) {
            .brand-logo-grid {
              grid-template-columns: repeat(6, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .brand-logo-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          .brand-logo-grid .hover-lift:hover {
            transform: translateY(-5px) scale(1.03);
            box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          }
        `}} />

      </div>
    </>
  );
}

export default Products;
