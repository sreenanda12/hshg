import { useEffect, useRef, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';
import { brandsData } from '../data/brandsData';

function BrandDetail() {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const { tText, isAr } = useTranslate();
  const pageRef = useRef(null);

  // Find current brand from data
  const brand = useMemo(() => {
    return brandsData.find(b => b.id === brandId);
  }, [brandId]);

  // Redirect to brands listing if brand not found
  useEffect(() => {
    if (!brand) {
      navigate('/brands');
    }
  }, [brand, navigate]);

  useEffect(() => {
    if (brand) {
      // Staggered entrance animation for page elements
      gsap.fromTo('.brand-reveal-anim',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
      );
      
      // Products stagger animation
      gsap.fromTo('.product-card-anim',
        { opacity: 0, y: 30, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: 'power2.out',
          delay: 0.4
        }
      );
    }
  }, [brand]);

  if (!brand) return null;

  const brandName = isAr ? brand.name.ar : brand.name.en;
  const brandDesc = isAr ? brand.desc.ar : brand.desc.en;
  const brandDetails = isAr ? brand.details.ar : brand.details.en;
  const brandOrigin = isAr ? brand.origin.ar : brand.origin.en;
  const brandLogo = isAr && brand.logo.ar ? brand.logo.ar : brand.logo.en;

  // Group products by category
  const categoriesOfProducts = useMemo(() => {
    const cats = [];
    brand.products.forEach(p => {
      const catName = p.category;
      if (!cats.includes(catName)) {
        cats.push(catName);
      }
    });
    return cats;
  }, [brand.products]);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{`${brandName} | Brand Partner | HSHG United Trading`}</title>
        <meta name="description" content={brandDesc} />
      </Helmet>

      <div ref={pageRef} style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', paddingBottom: '8rem' }}>
        
        {/* 1. Page Header / Hero Banner */}
        <section className="section-padding" style={{ 
          position: 'relative',
          backgroundColor: 'var(--color-bg-dark)', 
          color: 'var(--color-white)', 
          paddingTop: '12rem', 
          paddingBottom: '8rem',
          overflow: 'hidden'
        }}>
          {/* Dotted Background Grid */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' fill='none' stroke='rgba(255,255,255,0.015)' strokeWidth='1'%3E%3Cpath d='M150 150 C 300 80, 500 20, 780 220 M 780 220 L 520 280 C 420 300, 320 260, 150 150' style='stroke-dasharray: 5 5;'/%3E%3Ccircle cx='780' cy='220' r='4' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            opacity: 0.5,
            zIndex: 0,
            pointerEvents: 'none'
          }} />

          {/* Radial Blue Glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%', height: '80%',
            background: 'radial-gradient(circle, rgba(23, 135, 200, 0.14) 0%, transparent 60%)',
            zIndex: 1,
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              
              {/* Back to Brands Link */}
              <Link to="/brands" className="brand-reveal-anim" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-primary)',
                fontWeight: 600,
                fontSize: '0.95rem',
                marginBottom: '2rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {isAr ? '← العودة إلى العلامات التجارية' : '← Back to Brands'}
              </Link>

              {/* Brand Logo Container */}
              <div className="brand-reveal-anim" style={{
                width: '180px',
                height: '110px',
                background: '#ffffff',
                borderRadius: '16px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                marginBottom: '2.5rem'
              }}>
                <img 
                  src={brandLogo} 
                  alt={brandName} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                />
              </div>

              {/* Title */}
              <h1 className="brand-reveal-anim" style={{ 
                color: 'var(--color-white)', 
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
                marginBottom: '1.5rem', 
                fontWeight: 800,
                lineHeight: 1.15
              }}>
                {brandName}
              </h1>

              {/* Subtitle / Short Description */}
              <p className="brand-reveal-anim" style={{ 
                maxWidth: '720px', 
                margin: '0 auto', 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '1.2rem', 
                lineHeight: 1.6 
              }}>
                {brandDesc}
              </p>

            </div>
          </div>
        </section>

        {/* 2. Brand Profile Section */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', paddingBottom: '4rem', paddingTop: '5rem' }}>
          <div className="container">
            <div className="editorial-grid" style={{ gap: '4rem', alignItems: 'flex-start' }}>
              
              {/* Brand Overview */}
              <div className="brand-reveal-anim" style={{ textAlign: 'initial' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
                  {isAr ? 'الملف التعريفي للوكالة' : 'AGENCY PROFILE'}
                </span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
                  {isAr ? `حول علامة ${brandName}` : `About ${brandName}`}
                </h2>
                <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  {brandDetails}
                </p>
              </div>

              {/* Brand Facts Box */}
              <div className="brand-reveal-anim card" style={{ 
                padding: '2.5rem', 
                background: 'var(--color-bg-light)', 
                border: '1px solid var(--color-light-gray)', 
                borderRadius: '16px',
                textAlign: 'initial' 
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-bg-dark)', marginBottom: '1.8rem', borderBottom: '1px solid var(--color-light-gray)', paddingBottom: '0.8rem' }}>
                  {isAr ? 'حقائق سريعة' : 'Quick Facts'}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'block' }}>
                      {isAr ? 'بلد المنشأ' : 'Country of Origin'}
                    </span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-bg-dark)', marginTop: '0.2rem', display: 'block' }}>
                      {brandOrigin}
                    </span>
                  </div>
                  
                  <div>
                    <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'block' }}>
                      {isAr ? 'فئة المنتجات' : 'Product Category'}
                    </span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-bg-dark)', marginTop: '0.2rem', display: 'block', textTransform: 'capitalize' }}>
                      {brand.category === 'food' ? tText('Food & Beverages', 'الأغذية والمشروبات') :
                       brand.category === 'personal' ? tText('Personal Care', 'العناية الشخصية') :
                       brand.category === 'healthcare' ? tText('Healthcare & OTC', 'الرعاية الصحية والأدوية') :
                       brand.category === 'household' ? tText('Household Care', 'المستلزمات المنزلية') :
                       brand.category === 'electronics' ? tText('Electronics', 'الإلكترونيات') :
                       tText(brand.category, brand.category)}
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'block' }}>
                      {isAr ? 'تغطية قنوات التوزيع' : 'Distribution Channels'}
                    </span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-bg-dark)', marginTop: '0.2rem', display: 'block' }}>
                      {brand.category === 'food' ? tText('Co-ops, Hypermarkets, Groceries, Wholesale', 'الجمعيات التعاونية، الهايبر ماركت، البقالات، أسواق الجملة') :
                       brand.category === 'healthcare' ? tText('Pharmacies, Cooperatives, Specialty Retail', 'الصيدليات، الجمعيات التعاونية، المتاجر المتخصصة') :
                       tText('Co-ops, Hypermarkets, Supermarkets, Online Platforms', 'الجمعيات التعاونية، الهايبر ماركت، السوبر ماركت، المنصات الإلكترونية')}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Products Catalog Grid */}
        <section className="container" style={{ marginTop: '2rem' }}>
          
          {/* Section Heading */}
          <div style={{ textAlign: 'initial', marginBottom: '3.5rem', borderBottom: '1px solid var(--color-light-gray)', paddingBottom: '1.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              {isAr ? 'كتالوج المنتجات' : 'PRODUCT CATALOG'}
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-bg-dark)', margin: 0 }}>
              {isAr ? `منتجات ${brandName}` : `${brandName} Products`}
            </h2>
          </div>

          {brand.products.length === 0 ? (
            /* Fallback empty view when no specific product files are uploaded */
            <div style={{ 
              background: 'var(--color-white)', 
              padding: '4rem 2rem', 
              borderRadius: '16px', 
              boxShadow: 'var(--shadow-premium)', 
              textAlign: 'center' 
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-bg-dark)', marginBottom: '0.5rem' }}>
                {isAr ? 'المنتجات متوفرة في المتاجر' : 'Products Available in Stores'}
              </h3>
              <p style={{ maxWidth: '500px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                {isAr ? `تتوفر مجموعة كاملة من منتجات ${brandName} حالياً عبر الجمعيات التعاونية الكبرى والهايبر ماركت في جميع أنحاء الكويت. يرجى الاتصال بقسم المبيعات لدينا للاستفسار عن قائمة المنتجات الكاملة.` : `The full range of ${brandName} products is actively distributed and available in major co-ops and hypermarkets across Kuwait. Please contact our sales division for SKU lists.`}
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                {isAr ? 'استفسار مبيعات' : 'Sales Inquiry'}
              </Link>
            </div>
          ) : (
            /* Products Grid mapping */
            <div className="products-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
              gap: '2rem'
            }}>
              {brand.products.map((product, idx) => {
                const prodName = isAr ? product.name.ar : product.name.en;
                const prodDesc = isAr ? product.desc.ar : product.desc.en;
                
                return (
                  <div 
                    key={idx} 
                    className="product-card-anim premium-product-card hover-lift" 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                      border: '1px solid var(--color-light-gray)',
                      height: '420px',
                      position: 'relative'
                    }}
                  >
                    {/* Hover reflection shine effect */}
                    <div className="product-shine-effect" />

                    {/* Category Tag */}
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      insetInlineStart: '1rem',
                      zIndex: 3,
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(4px)',
                      WebkitBackdropFilter: 'blur(4px)',
                      border: '1px solid var(--color-light-gray)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase'
                    }}>
                      {product.category}
                    </span>

                    {/* Image Wrapper */}
                    <div style={{
                      height: '220px',
                      width: '100%',
                      background: 'linear-gradient(to bottom, #fafafa, #f0f3f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.5rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={product.image} 
                        alt={prodName} 
                        loading="lazy"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        className="product-img-hover"
                      />
                    </div>

                    {/* Info Wrapper */}
                    <div style={{
                      padding: '1.5rem',
                      textAlign: 'initial',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexGrow: 1
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: '1.15rem',
                          color: 'var(--color-bg-dark)',
                          fontWeight: 750,
                          margin: '0 0 0.5rem 0',
                          lineHeight: 1.35,
                          // Limit height to 2 lines
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          height: '3.1rem'
                        }}>
                          {prodName}
                        </h3>
                        <p style={{
                          margin: 0,
                          fontSize: '0.85rem',
                          color: 'var(--color-text-muted)',
                          lineHeight: 1.5,
                          // Limit height to 3 lines
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          height: '3.8rem'
                        }}>
                          {prodDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .premium-product-card:hover {
          transform: translateY(-8px) scale(1.01) !important;
          border-color: rgba(23, 135, 200, 0.2) !important;
          box-shadow: 0 15px 35px rgba(15, 45, 64, 0.05), 0 5px 15px rgba(23, 135, 200, 0.01) !important;
        }
        
        .premium-product-card:hover .product-img-hover {
          transform: scale(1.05) rotate(1deg);
        }

        .product-shine-effect {
          position: absolute;
          top: 0; left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
          transition: none;
          z-index: 5;
          pointer-events: none;
        }
        
        .premium-product-card:hover .product-shine-effect {
          left: 150%;
          transition: all 0.9s ease-in-out;
        }
      `}} />
    </>
  );
}

export default BrandDetail;
