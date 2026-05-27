import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';

function Services() {
  const { tText, isAr } = useTranslate();

  useEffect(() => {
    // Reveal animation for all service-reveal targets
    gsap.fromTo('.service-reveal',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
    );
  }, []);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Our Services | FMCG Distribution & Logistics | HSHG United', 'خدماتنا | توزيع السلع الاستهلاكية والخدمات اللوجستية | اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Explore HSHG United Trading Company's professional distribution, market execution, logistics, warehousing, and comprehensive market coverage across Kuwait.", "اكتشف خدمات التوزيع الاحترافية، وتنفيذ السوق، والخدمات اللوجستية، والتخزين، وتغطية السوق الشاملة لشركة اتش اس اتش جي المتحدة في الكويت.")} />
      </Helmet>

      {/* 1. Page Banner Header with Premium Overlay */}
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0
        }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="service-reveal" style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
            {tText('WHAT WE DELIVER', 'ما نقدمه لعلامتك التجارية')}
          </span>
          <h1 className="service-reveal" style={{ color: 'var(--color-white)', fontSize: 'clamp(2.8rem, 5vw, 3.8rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
            {tText('Our Services', 'خدماتنا')}
          </h1>
          <p className="service-reveal" style={{ maxWidth: '750px', margin: '0 auto', color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {tText('HSHG United provides end-to-end distribution, route-to-market execution, warehousing, and commercial alignment built for sustainable brand growth.', 'تقدم شركة اتش اس اتش جي المتحدة للتجارة خدمات توزيع متكاملة، وتنفيذاً في السوق، وتخزيناً مبرداً، وتوافقاً تجارياً مصمماً لتحقيق نمو مستدام للعلامة التجارية.')}
          </p>
        </div>
      </section>

      {/* 2. Alternating Service Details Sections */}
      
      {/* SECTION 1: FMCG Distribution (Left: Text, Right: Image) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container responsive-grid">
          <div className="service-reveal" style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              {tText('COMMERCIAL SUPPLY CHAIN', 'سلسلة التوريد التجارية')}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
              {tText('FMCG Distribution', 'توزيع السلع الاستهلاكية (FMCG)')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('We distribute a wide portfolio of fast-moving consumer goods across Kuwait, including Food, Beverages, Personal Care, Household, and Consumer products.', 'نحن ندير توزيع مجموعة واسعة ومتنوعة من السلع الاستهلاكية سريعة الدوران في جميع أنحاء الكويت، بما في ذلك المواد الغذائية والمشروبات ومنتجات العناية الشخصية والمنظفات المنزلية والمنتجات الاستهلاكية المتنوعة.')}
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('Our structured distribution model ensures product availability, optimized stock rotation, and efficient supply chain management across all modern and traditional trade channels.', 'يضمن نموذج التوزيع المنظم والفعال لدينا توافر المنتجات بشكل مستمر، وتدوير المخزون بشكل مثالي (FEFO/FIFO)، وإدارة سلسلة التوريد بكفاءة عبر جميع القنوات التجارية الحديثة والتقليدية.')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{tText('Food & Beverages', 'المواد الغذائية والمشروبات')}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{tText('Personal & Body Care', 'العناية الشخصية والعناية بالجسم')}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{tText('Household Cleansers', 'المنظفات والحلول المنزلية')}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{tText('Consumer Commodities', 'السلع الاستهلاكية المتنوعة')}</span>
              </div>
            </div>
          </div>
          <div className="service-reveal" style={{ willChange: 'transform, opacity' }}>
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000" 
              alt={tText("FMCG Products and Shelves", "منتجات السلع الاستهلاكية والرفوف")} 
              className="premium-img"
              loading="lazy"
              decoding="async"
              style={{ boxShadow: 'var(--shadow-premium)', width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Direct Sales & Market Execution (Left: Image, Right: Text) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container responsive-grid">
          <div className="service-reveal" style={{ order: isAr ? 1 : 0, willChange: 'transform, opacity' }}>
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000" 
              alt={tText("Market Execution and Retail Visits", "تنفيذ السوق والزيارات الميدانية للتجزئة")} 
              className="premium-img"
              loading="lazy"
              decoding="async"
              style={{ boxShadow: 'var(--shadow-premium)', width: '100%', borderRadius: '8px' }}
            />
          </div>
          <div className="service-reveal" style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              {tText('SHELF REPRESENTATION', 'التمثيل على الأرفف والتنفيذ')}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
              {tText('Direct Sales & Market Execution', 'المبيعات المباشرة وتنفيذ السوق')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('Our trained sales force operates through structured route planning and regular market visits to ensure strong shelf visibility, merchandising standards, order generation, and effective trade relationship management.', 'يعمل فريق المبيعات المدرب لدينا من خلال تخطيط منظم للمسارات وزيارات ميدانية منتظمة للسوق لضمان ظهور قوي على الرفوف، وتطبيق أعلى معايير الترويج، وتوليد الطلبات بكفاءة، وإدارة العلاقات التجارية بفعالية.')}
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('Our sales network serves all major trade channels, including Modern Trade, Hypermarkets, Supermarkets, Cooperative Societies, Grocery Stores, and Down Trade outlets, ensuring extensive market reach and customer engagement across Kuwait.', 'تخدم شبكة مبيعاتنا جميع القنوات التجارية الرئيسية بما في ذلك التجارة الحديثة، والهايبر ماركت، والسوبر ماركت، والجمعيات التعاونية، ومحلات البقالة، وقنوات التجزئة التقليدية، مما يضمن وصولاً مكثفاً للسوق وتفاعلاً رائعاً مع العملاء في الكويت.')}
            </p>
            <div style={{ background: 'var(--color-white)', padding: '1.5rem', border: '1px solid var(--color-light-gray)', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-primary)', fontWeight: 700 }}>{tText('Active Route Planning', 'تخطيط المسارات النشط واليومي')}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                {tText('Securing optimal call frequency rates and minimizing stockouts on priority outlets.', 'تأمين معدلات زيارة مثالية وتقليل احتمالات نفاد المخزون في المنافذ ذات الأولوية.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Logistics & Supply Chain (Left: Text, Right: Image) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container responsive-grid">
          <div className="service-reveal" style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              {tText('INBOUND & OUTBOUND OPERATIONS', 'العمليات اللوجستية والواردة والصادرة')}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
              {tText('Logistics & Supply Chain', 'الخدمات اللوجستية وسلسلة التوريد')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('Our logistics infrastructure includes warehousing facilities, inventory monitoring systems, temperature-controlled storage, and a dedicated delivery fleet. We ensure speed, accuracy, product integrity, and reliable distribution performance throughout the supply chain.', 'تشمل بنيتنا التحتية اللوجستية مرافق مستودعات متطورة، وأنظمة تتبع رقمية للمخزون، وتخزيناً يتم التحكم بدرجة حرارته، وأسطول نقل مبرد مخصص. نحن نضمن السرعة والدقة وسلامة المنتجات وأداء توزيع موثوق في جميع مراحل سلسلة التوريد.')}
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('Our mother company, Homaizi Pharma, also operates a specialized DSV division focused on warehousing and logistics solutions for non-food items, offering seamless logistics coordination for durable commodities.', 'كما تدير شركتنا الأم، الحميضي فارما، قسماً متخصصاً بالتعاون مع DSV يركز على حلول التخزين والخدمات اللوجستية للمواد غير الغذائية، مما يوفر تنسيقاً لوجستياً سلساً للسلع الاستهلاكية المتينة.')}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--color-primary)', fontWeight: 800 }}>10,000+</h3>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{tText('CBM Cold Capacity', 'سعة تخزين باردة بالمتر المكعب')}</span>
              </div>
              <div style={{ width: '1px', background: 'var(--color-light-gray)' }}></div>
              <div>
                <h3 style={{ margin: 0, fontSize: '2rem', color: 'var(--color-primary)', fontWeight: 800 }}>16</h3>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{tText('Regulated Fleet Vehicles', 'مركبات أسطول مبردة نشطة')}</span>
              </div>
            </div>
          </div>
          <div className="service-reveal" style={{ willChange: 'transform, opacity' }}>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=1000" 
              alt={tText("Logistics and Climate Warehousing", "الخدمات اللوجستية والمستودعات المكيفة")} 
              className="premium-img"
              loading="lazy"
              decoding="async"
              style={{ boxShadow: 'var(--shadow-premium)', width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Market Coverage (Left: Image, Right: Text) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container responsive-grid">
          <div className="service-reveal" style={{ order: isAr ? 1 : 0, willChange: 'transform, opacity' }}>
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000" 
              alt={tText("Kuwait Retail Market Map Reach", "وصول خريطة سوق التجزئة الكويتي")} 
              className="premium-img"
              loading="lazy"
              decoding="async"
              style={{ boxShadow: 'var(--shadow-premium)', width: '100%', borderRadius: '8px' }}
            />
          </div>
          <div className="service-reveal" style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              {tText('GEOGRAPHIC REACH', 'التغطية الجغرافية والقنوات')}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
              {tText('Market Coverage', 'التغطية السوقية الشاملة')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('We serve all major trade sectors across Kuwait, including Hypermarkets, Supermarkets, Cooperative Societies, Grocery Stores, Specialty Retailers, Wholesale Channels, and Online Platforms.', 'نحن نغطي ونخدم جميع القطاعات التجارية الرئيسية في الكويت، بما في ذلك الهايبر ماركت، والسوبر ماركت، والجمعيات التعاونية، ومحلات البقالة، والمتاجر المتخصصة، وقنوات البيع بالجملة، والمنصات والتطبيقات الرقمية.')}
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('Our extensive market coverage enables brands to achieve strong visibility, wider consumer reach, and sustainable growth across the Kuwaiti market.', 'تتيح تغطيتنا الواسعة للسوق للعلامات التجارية تحقيق حضور بارز ورؤية قوية للمستهلكين، والوصول إلى قاعدة عملاء عريضة، وتحقيق نمو مستدام في السوق الكويتي.')}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                tText('100% Co-ops Active Coverage', 'تغطية الجمعيات التعاونية بنسبة 100%'),
                tText('Key Accounts Integration', 'تكامل تام مع الحسابات الرئيسية'),
                tText('Wholesale Bulk Freight', 'شحن مبيعات الجملة الكبيرة'),
                tText('Q-commerce Delivery Sourcing', 'التوريد لتطبيقات التوصيل السريع')
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-bg-dark)', fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-dark)', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(23,135,200,0.1) 0%, transparent 60%)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{tText('Ready to Secure Scalable Kuwaiti Distribution?', 'هل أنت جاهز لتأمين شبكة توزيع كويتية قابلة للتطوير؟')}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            {tText("Partner with HSHG United Trading Company and leverage Mr. Hamad & Saleh Alghanim's premium logistics and retail distribution network.", "تواصل معنا في شركة اتش اس اتش جي المتحدة واستفد من شبكة الخدمات اللوجستية وتوزيع التجزئة الرائدة للسيد حمد وصالح الغانم.")}
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center' }}>
            <Link to="/contact" className="premium-glass-btn glow-on-hover">{tText('Partner With Us', 'شراكة تجارية')}</Link>
            <Link to="/contact" className="premium-outline-btn">{tText('Contact Team', 'تواصل مع الفريق')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
