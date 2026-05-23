import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';

function Brands() {
  const { tText, isAr } = useTranslate();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo('.brands-reveal',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  // Filter content state change animation
  useEffect(() => {
    gsap.fromTo('.brand-card-reveal',
      { opacity: 0, scale: 0.95, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
    );
  }, [activeTab]);

  const brandsData = [
    // Food Brands
    {
      id: 'maeda',
      name: 'Maeda',
      category: 'food',
      origin: tText('Sweden / GCC', 'السويد / الخليج'),
      color: '#E4572E',
      desc: tText('A wide range of food products including rice, canned tuna, edible oils, tomato products, canned vegetables, sardines, grape leaves, and tea products.', 'مجموعة واسعة من المنتجات الغذائية تشمل الأرز، التونة المعلبة، زيوت الطعام، منتجات الطماطم، الخضروات المعلبة، السردين، ورق العنب، ومنتجات الشاي.'),
      icon: '🌾'
    },
    {
      id: 'segafredo',
      name: 'Segafredo',
      category: 'food',
      origin: tText('Italy', 'إيطاليا'),
      color: '#D90429',
      desc: tText('Premium Italian coffee products including capsules, instant coffee, and ground coffee.', 'منتجات قهوة إيطالية فاخرة ومتميزة تشمل الكبسولات، القهوة سريعة الذوبان، والبن المطحون.'),
      icon: '☕'
    },
    {
      id: 'cawells',
      name: 'Cawell’s',
      category: 'food',
      origin: tText('Sweden', 'السويد'),
      color: '#005F73',
      desc: tText('Food supplements and vitamins from Sweden focused on health and wellness.', 'المكملات الغذائية والفيتامينات السويدية المتميزة التي تركز على الصحة والعافية العامة.'),
      icon: '💊'
    },
    {
      id: 'julphar',
      name: 'Julphar',
      category: 'food',
      origin: tText('GCC / UAE', 'الإمارات العربية المتحدة'),
      color: '#0A9396',
      desc: tText('Recognized healthcare products including Adol and Mebo medicines.', 'منتجات وحلول رعاية صحية وطبية معترف بها عالمياً تشمل أدوية أدول وميبو الشهيرة.'),
      icon: '🏥'
    },
    // Non-Food Brands
    {
      id: 'bigen',
      name: 'Bigen',
      category: 'non-food',
      origin: tText('Japan', 'اليابان'),
      color: '#E9C46A',
      desc: tText('Hair dye and hair care products from Japan, recognized as leaders in the men’s segment with an expanding women’s range.', 'صبغات الشعر ومنتجات العناية بالشعر اليابانية، المعترف بها كعلامة رائدة في قطاع الرجال مع تشكيلة متنامية للعناية بالمرأة.'),
      icon: '✨'
    },
    {
      id: 'titania',
      name: 'Titania',
      category: 'non-food',
      origin: tText('Germany', 'ألمانيا'),
      color: '#F4A261',
      desc: tText('Body care and personal care products from Germany.', 'منتجات متميزة وراقية للعناية بالجسم والعناية الشخصية والأدوات التجميلية من ألمانيا.'),
      icon: '🧼'
    },
    {
      id: 'smart',
      name: 'Smart',
      category: 'non-food',
      origin: tText('Turkey', 'تركيا'),
      color: '#2A9D8F',
      desc: tText('Shoe and home care products designed for everyday use.', 'منتجات وحلول العناية بالأحذية والمنزل والمصممة بذكاء للاستخدام اليومي المستمر.'),
      icon: '👞'
    },
    {
      id: 'kodak',
      name: 'Kodak',
      category: 'non-food',
      origin: tText('USA', 'الولايات المتحدة الأمريكية'),
      color: '#E76F51',
      desc: tText('Batteries and power tools delivering trusted performance.', 'بطاريات وحلول طاقة وأدوات كهربائية تقدم أداءً قوياً وموثوقاً لجميع الأجهزة.'),
      icon: '🔋'
    },
    {
      id: 'peros',
      name: 'Peros',
      category: 'non-food',
      origin: tText('Turkey', 'تركيا'),
      color: '#457B9D',
      desc: tText('Laundry detergents, washing capsules, liquid cleaners, and multiuse cleaning solutions.', 'مساحيق غسيل الملابس، كبسولات الغسيل، المنظفات السائلة، وحلول التنظيف متعددة الاستخدامات.'),
      icon: '🫧'
    },
    {
      id: 'asperox',
      name: 'Asperox',
      category: 'non-food',
      origin: tText('Turkey', 'تركيا'),
      color: '#1D3557',
      desc: tText('Highly effective multi-surface grease removers, surface cleaners, and cleaning solutions from Turkey.', 'منظفات ومزيلات دهون عالية الفعالية لجميع الأسطح وحلول تنظيف مبتكرة وسريعة المفعول.'),
      icon: '🧽'
    },
    {
      id: 'sparx',
      name: 'Sparx',
      category: 'non-food',
      origin: tText('Turkey', 'تركيا'),
      color: '#E63946',
      desc: tText('Advanced cleaning supplies, dishwashing liquids, and active household sanitation formulations.', 'مستلزمات تنظيف متطورة، سوائل غسيل الصحون، وتركيبات تعقيم وتطهير منزلية نشطة.'),
      icon: '⚡'
    }
  ];

  const filteredBrands = brandsData.filter(brand => {
    if (activeTab === 'all') return true;
    return brand.category === activeTab;
  });

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Our Brands | Maeda, Segafredo, Bigen, Kodak | HSHG United', 'علاماتنا التجارية | مايدا، سيغافريدو، بيجين، كوداك | اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Discover HSHG United Trading Company's diverse portfolio of leading international Food and Non-Food brands distributed across Kuwait.", "اكتشف محفظة شركة اتش اس اتش جي المتحدة للتجارة المتنوعة من العلامات التجارية العالمية الرائدة للمواد الغذائية وغير الغذائية والموزعة في الكويت.")} />
      </Helmet>

      {/* 1. Page Banner */}
      <section className="section-padding" style={{ 
        position: 'relative',
        backgroundColor: 'var(--color-bg-dark)', 
        color: 'var(--color-white)', 
        paddingTop: '11rem', 
        paddingBottom: '7rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0
        }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="brands-reveal" style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
            {tText('PORTFOLIO OF GLOBAL AGENCIES', 'محفظة الوكالات العالمية')}
          </span>
          <h1 className="brands-reveal" style={{ color: 'var(--color-white)', fontSize: 'clamp(2.8rem, 5vw, 3.8rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
            {tText('Our Brands', 'علاماتنا التجارية')}
          </h1>
          <p className="brands-reveal" style={{ maxWidth: '750px', margin: '0 auto', color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {tText('HSHG United Trading Company proudly represents a portfolio of international Food and Non-Food brands, delivering high-quality products to consumers across Kuwait.', 'تمثل شركة اتش اس اتش جي المتحدة للتجارة بفخر محفظة متميزة من العلامات التجارية العالمية للأغذية وغير الأغذية، وتوفر منتجات عالية الجودة للمستهلكين في الكويت.')}
          </p>
        </div>
      </section>

      {/* 2. Category Filtering Switcher */}
      <section style={{ 
        position: 'sticky', 
        top: '70px', 
        zIndex: 100, 
        backgroundColor: 'rgba(247, 249, 251, 0.95)', 
        backdropFilter: 'blur(12px)', 
        padding: '1.2rem 0', 
        borderBottom: '1px solid var(--color-light-gray)' 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {[
            { id: 'all', label: tText('All Brands', 'جميع العلامات') },
            { id: 'food', label: tText('Food Brands', 'المواد الغذائية') },
            { id: 'non-food', label: tText('Non-Food Brands', 'المواد غير الغذائية') }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.8rem 1.8rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 600,
                fontFamily: 'inherit',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: activeTab === tab.id ? 'var(--color-bg-dark)' : 'var(--color-white)',
                color: activeTab === tab.id ? '#fff' : 'var(--color-bg-dark)',
                border: '1px solid var(--color-light-gray)',
                boxShadow: activeTab === tab.id ? 'var(--shadow-premium)' : '0 2px 10px rgba(0,0,0,0.02)',
                cursor: 'pointer'
              }}
              className="hover-lift"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Brands Grid Layout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {filteredBrands.map((brand) => (
              <div 
                key={brand.id} 
                className="card premium-card hover-lift brand-card-reveal brand-item-card"
                style={{ 
                  padding: '3rem 2.5rem', 
                  background: 'var(--color-white)', 
                  borderRadius: '12px',
                  textAlign: 'initial',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Visual Background Accent Accentuated On Hover */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: '120px', height: '120px',
                  background: `radial-gradient(circle at 100% 0, ${brand.color}12 0%, transparent 70%)`,
                  zIndex: 0
                }}></div>

                <div>
                  {/* Brand Vector Badge Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem', position: 'relative', zIndex: 1 }}>
                    <div className="brand-vector-logo" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      userSelect: 'none'
                    }}>
                      <span style={{ fontSize: '1.8rem' }}>{brand.icon}</span>
                      <span className="brand-title-text" style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 900, 
                        color: 'var(--color-text-muted)', 
                        transition: 'all 0.4s ease', 
                        letterSpacing: '0.5px' 
                      }}>{brand.name}</span>
                    </div>
                    
                    {/* Origin Tag */}
                    <span style={{ 
                      fontSize: '0.75rem', 
                      background: 'var(--color-bg-light)', 
                      border: '1px solid var(--color-light-gray)',
                      padding: '0.3rem 0.8rem', 
                      borderRadius: '50px',
                      fontWeight: 600,
                      color: 'var(--color-text-muted)'
                    }}>
                      {brand.origin}
                    </span>
                  </div>

                  {/* Brand Detailed Copy */}
                  <p style={{ 
                    fontSize: '0.95rem', 
                    lineHeight: 1.7, 
                    color: 'var(--color-text-muted)', 
                    margin: '0 0 2rem 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {brand.desc}
                  </p>
                </div>

                {/* Footer Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-light-gray)', paddingTop: '1.2rem', marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    textTransform: 'uppercase', 
                    fontWeight: 700, 
                    letterSpacing: '1px', 
                    color: 'var(--color-primary)' 
                  }}>
                    {brand.category === 'food' ? tText('Food Segment', 'قطاع الأغذية') : tText('Non-Food Segment', 'القطاع غير الغذائي')}
                  </span>
                  <span className="learn-more-arrow" style={{ 
                    fontSize: '1.2rem', 
                    color: 'var(--color-text-muted)', 
                    transition: 'all 0.3s ease',
                    fontWeight: 'bold'
                  }}>
                    {isAr ? '←' : '→'}
                  </span>
                </div>

                {/* Brand-Specific Custom CSS Hover Logic */}
                <style dangerouslySetInnerHTML={{ __html: `
                  .brand-item-card:hover {
                    border-color: ${brand.color}40 !important;
                    box-shadow: 0 20px 45px ${brand.color}15 !important;
                  }
                  .brand-item-card:hover .brand-title-text {
                    color: ${brand.color} !important;
                  }
                  .brand-item-card:hover .learn-more-arrow {
                    color: ${brand.color} !important;
                    transform: translateX(${isAr ? '-8px' : '8px'});
                  }
                `}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Infinite Scrolling Carousel Slider */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: '3rem' }}>
          <div className="text-center">
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
              {tText('LOOP VIEW', 'عرض متسلسل')}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem' }}>
              {tText('Direct Brand Slider', 'العلامات الممثلة المباشرة')}
            </h2>
          </div>
        </div>

        <div className="brand-marquee-container" style={{ position: 'relative', width: '100%', padding: '1rem 0', display: 'flex', overflow: 'hidden' }}>
          <div className="brand-marquee-scroll" style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', width: 'max-content' }}>
            {brandsData.concat(brandsData).map((brand, idx) => (
              <div key={idx} className="marquee-badge" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.2rem 2.2rem',
                borderRadius: '8px',
                background: 'var(--color-bg-light)',
                border: '1px solid var(--color-light-gray)',
                minWidth: '160px',
                height: '80px',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}>
                <span className="marquee-badge-text" style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-text-muted)', transition: 'all 0.3s ease' }}>{brand.name}</span>
                
                <style dangerouslySetInnerHTML={{ __html: `
                  .marquee-badge:hover {
                    border-color: ${brand.color}33;
                    background: #ffffff;
                    transform: scale(1.05);
                  }
                  .marquee-badge:hover .marquee-badge-text {
                    color: ${brand.color} !important;
                  }
                `}} />
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeScrollBrands {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .brand-marquee-scroll {
            animation: marqueeScrollBrands 25s linear infinite;
          }
          [dir="rtl"] .brand-marquee-scroll {
            animation: marqueeScrollBrands 25s linear infinite reverse;
          }
          .brand-marquee-container:hover .brand-marquee-scroll {
            animation-play-state: paused;
          }
        `}} />
      </section>
    </>
  );
}

export default Brands;
