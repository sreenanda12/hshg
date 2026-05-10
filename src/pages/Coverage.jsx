import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslate } from '../utils/translate';

function Coverage() {
  const { tText, isAr } = useTranslate();

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Market Coverage & Network | HSHG United', 'تغطية السوق والشبكة | اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Discover HSHG United's extensive retail distribution network and Kuwait coverage statistics.", "اكتشف شبكة التوزيع الواسعة لشركة اتش اس اتش جي وإحصاءات التغطية في الكويت.")} />
      </Helmet>

      {/* Page Banner Header with Animated Texture */}
      <section className="section-padding" style={{ 
        position: 'relative',
        backgroundColor: 'var(--color-bg-dark)', 
        color: 'var(--color-white)', 
        paddingTop: '12rem', 
        paddingBottom: '8rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          filter: 'grayscale(0.5)',
          zIndex: 0
        }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
            {tText('Unrivaled Distribution Reach', 'وصول توزيعي لا يضاهى')}
          </span>
          <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {tText('Market Coverage & Network', 'تغطية السوق والشبكة')}
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {tText("Connecting global brands with Kuwait's modern trade pipelines, retail channels, and wholesale networks.", "ربط العلامات التجارية العالمية بخطوط أنابيب التجارة الحديثة وقنوات التجزئة وشبكات الجملة في الكويت.")}
          </p>
        </div>
      </section>

      {/* Kuwait Distribution Network & Map visualization */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'initial' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              {tText('Kuwait Distribution Network', 'شبكة توزيع الكويت')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              {tText('Our commercial distribution network reaches every primary consumer zone in the State of Kuwait. We manage daily deliveries through tailored sales divisions designed to handle Modern Trade, Coops, Traditional Grocery channels, and pharmacies.', 'تصل شبكة التوزيع التجاري الخاصة بنا إلى كل منطقة استهلاكية أساسية في دولة الكويت. نحن ندير عمليات التسليم اليومية من خلال أقسام مبيعات مخصصة للتعامل مع التجارة الحديثة، والتعاونيات، وقنوات البقالة التقليدية، والصيدليات.')}
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
              {tText('Supported by our ', 'مدعومة بـ ')}
              <strong>{tText('10,000 CBM cold-storage facility', 'مرافق التخزين البارد بسعة 10,000 متر مكعب')}</strong>
              {tText(' and specialized transport fleet, HSHG stands as a stable operational force in Gulf commerce.', ' وأسطول النقل المتخصص لدينا، تقف شركة اتش اس اتش جي كقوة تشغيلية مستقرة في تجارة الخليج.')}
            </p>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', height: '400px' }}>
            <img 
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop" 
              alt={tText("Distribution Flow", "تدفق التوزيع")} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ 
              position: 'absolute', bottom: '2rem', right: '2rem', left: '2rem',
              background: 'rgba(255,255,255,0.95)', padding: '1.5rem', 
              borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
              <div style={{ textAlign: 'initial' }}>
                <h4 style={{ margin: 0, color: 'var(--color-bg-dark)', fontSize: '1rem' }}>{tText('State of Kuwait', 'دولة الكويت')}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{tText('2,000+ Active Retail Points', 'أكثر من 2000 نقطة بيع نشطة')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Channels */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>{tText('Serviced Retail Channels', 'قنوات التجزئة المخدومة')}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
              {tText('Comprehensive regional distribution pipelines managing daily shipments.', 'خطوط أنابيب توزيع إقليمية شاملة تدير شحنات يومية.')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { title: tText('Hypermarkets', 'الهايبر ماركت'), desc: tText('Direct corporate partnerships with top-tier multi-national hypermarket groups.', 'شراكات مؤسسية مباشرة مع مجموعات هايبر ماركت متعددة الجنسيات من الدرجة الأولى.') },
              { title: tText('Cooperative Societies', 'الجمعيات التعاونية'), desc: tText('100% active billing coverage across all local Kuwaiti Coop outlets.', 'تغطية فوترة نشطة بنسبة 100% عبر جميع منافذ الجمعيات التعاونية الكويتية المحلية.') },
              { title: tText('Grocery Stores', 'البقالات'), desc: tText('Rapid Direct Sales Distribution (DSD) servicing over 2,000 points of sale.', 'توزيع المبيعات المباشر السريع (DSD) لخدمة أكثر من 2000 نقطة بيع.') },
              { title: tText('Wholesale Markets', 'أسواق الجملة'), desc: tText('High-volume wholesale shipments distributing bulk consumer goods.', 'شحنات جملة كبيرة الحجم توزع السلع الاستهلاكية بكميات كبيرة.') }
            ].map((ch, idx) => (
              <div key={idx} className="card premium-card" style={{ padding: '2.5rem', textAlign: 'initial' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{ch.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0, color: 'var(--color-text-muted)' }}>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Statistics banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="card premium-card" style={{ padding: '4rem', backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-white)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            <div>
              <h4 style={{ fontSize: '2.8rem', color: 'var(--color-primary)', margin: 0 }}>100%</h4>
              <p style={{ margin: '0.5rem 0 0 0', textTransform: 'uppercase', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>
                {tText('Modern Trade Coverage', 'تغطية التجارة الحديثة')}
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '2.8rem', color: 'var(--color-primary)', margin: 0 }}>2,000+</h4>
              <p style={{ margin: '0.5rem 0 0 0', textTransform: 'uppercase', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>
                {tText('Retail Points Reached', 'نقاط التجزئة التي تم الوصول إليها')}
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '2.8rem', color: 'var(--color-primary)', margin: 0 }}>10,000 CBM</h4>
              <p style={{ margin: '0.5rem 0 0 0', textTransform: 'uppercase', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>
                {tText('Cold Warehouse Space', 'مساحة المستودعات المبردة')}
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '2.8rem', color: 'var(--color-primary)', margin: 0 }}>16 {tText('Units', 'وحدة')}</h4>
              <p style={{ margin: '0.5rem 0 0 0', textTransform: 'uppercase', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>
                {tText('Active Refrigerated Fleet', 'أسطول نقل مبرد نشط')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Process Flow */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>{tText('Our Distribution Process', 'عملية التوزيع لدينا')}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
              {tText('From the international port of origin to local consumer shopping baskets.', 'من ميناء المنشأ الدولي إلى سلال تسوق المستهلكين المحليين.')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: tText('Port Clearance', 'التخليص الجمركي'), desc: tText('Secure custom clearance and international transit tracking.', 'تأمين التخليص الجمركي وتتبع النقل الدولي.') },
              { num: '02', title: tText('ERP Sourcing', 'توريد ERP'), desc: tText('Digital SKU tracking and temperature-controlled reception.', 'تتبع رقمي للمنتجات واستقبال يتم التحكم في درجة حرارته.') },
              { num: '03', title: tText('Cold Preservation', 'الحفظ البارد'), desc: tText('Safeguarding products within distinct climate zones.', 'حماية المنتجات داخل مناطق مناخية متميزة.') },
              { num: '04', title: tText('Fleet Shipment', 'شحن الأسطول'), desc: tText('Rapid dispatch using our 16 refrigerated vehicles.', 'إرسال سريع باستخدام مركباتنا المبردة الـ 16.') },
              { num: '05', title: tText('Shelf Merchandising', 'الترويج على الرفوف'), desc: tText('Dedicated teams executing premium product display.', 'فرق مخصصة تنفذ عرض المنتجات المتميز.') }
            ].map((p, idx) => (
              <div key={idx} className="card premium-card" style={{ padding: '2.5rem', textAlign: 'initial' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>{p.num}</span>
                <h4 style={{ margin: '0.5rem 0 0.8rem 0' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.6, color: 'var(--color-text-muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Coverage;
