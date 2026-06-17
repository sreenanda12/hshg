import { useEffect, useRef, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslate } from '../utils/translate';

gsap.registerPlugin(ScrollTrigger);

function Network() {
  const containerRef = useRef(null);
  const { tText, isAr } = useTranslate();

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.gsap-reveal');
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const infraData = useMemo(() => [
    { title: tText('Distribution Network', 'شبكة التوزيع'), icon: '🌐', desc: tText('Comprehensive local grids spanning across the primary market zones.', 'شبكات محلية شاملة تمتد عبر مناطق السوق الأولية.') },
    { title: tText('Warehousing Facilities', 'مرافق التخزين'), icon: '🏢', desc: tText('High-bay centers optimized for diverse and climatic logistics.', 'مراكز عالية الارتفاع محسنة للوجستيات المتنوعة والمناخية.') },
    { title: tText('Logistics Operations', 'العمليات اللوجستية'), icon: '🚛', desc: tText('Active, dynamic cargo dispatch management ensuring precision routing.', 'إدارة نشطة وديناميكية لإرسال الشحنات تضمن دقة التوجيه.') },
    { title: tText('Retail Coverage', 'تغطية التجزئة'), icon: '🏬', desc: tText('Maximum channel penetration into hypermarkets and stable coop blocks.', 'أقصى اختراق للقنوات في الهايبر ماركت والكتل التعاونية المستقرة.') },
    { title: tText('Supply Chain Management', 'إدارة سلسلة التوريد'), icon: '📊', desc: tText('Digital-first logistical alignment tracked end-to-end via ERP.', 'محاذاة لوجستية رقمية تتبع من البداية إلى النهاية عبر ERP.') },
    { title: tText('Fulfillment Integrity', 'نزاهة الإنجاز'), icon: '❄️', desc: tText('Maintaining cold-storage standards strictly during dynamic shipment nodes.', 'الحفاظ على معايير التخزين البارد بصرامة خلال نقاط الشحن الديناميكية.') }
  ], [tText]);

  const infographicSteps = useMemo(() => [
    { node: tText('Manufacturer', 'المُصنّع'), color: '#EEF2F5' },
    { node: tText('HSHG Hub', 'مركز اتش اس اتش جي'), color: 'var(--color-primary)', fontColor: '#fff' },
    { node: tText('Retail Channels', 'قنوات التجزئة'), color: '#EEF2F5' },
    { node: tText('Consumer', 'المستهلك'), color: '#EEF2F5' }
  ], [tText]);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Connected Distribution Network | HSHG United', 'شبكة التوزيع المتصلة | اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Explore HSHG United's fully optimized supply chain grid across Kuwait.", "اكتشف شبكة سلسلة التوريد المحسنة بالكامل من اتش اس اتش جي في الكويت.")} />
      </Helmet>

      <div ref={containerRef} style={{ paddingTop: '0' }}>
        {/* 1. PREMIUM HERO SECTION */}
        <section style={{ height: '65vh', position: 'relative', display: 'flex', alignItems: 'center', background: 'url("/images/pages/distribution_cars.png") center/cover no-repeat' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(7,27,42,0.45), rgba(7,27,42,0.25))' }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 2, color: '#fff', textAlign: 'initial' }}>
            <span className="gsap-reveal" style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              {tText('Supply Chain Grid', 'شبكة سلسلة التوريد')}
            </span>
            <h1 className="gsap-reveal" style={{ color: '#fff', fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 800, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              {tText('Connected Distribution Network', 'شبكة التوزيع المتصلة')}
            </h1>
            <p className="gsap-reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1.5rem 0 0', textShadow: '0 1px 5px rgba(0,0,0,0.4)' }}>
              {tText('Precision logistics and optimized distribution channeling tailored for modern FMCG movement.', 'خدمات لوجستية دقيقة وقنوات توزيع محسنة مصممة لحركة السلع الاستهلاكية الحديثة.')}
            </p>
          </div>
        </section>

        {/* 2. DISTRIBUTION INFRASTRUCTURE SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <div className="gsap-reveal text-center" style={{ marginBottom: '5rem' }}>
              <h2 style={{ fontSize: '2.5rem' }}>{tText('Core Ecosystem Infrastructures', 'البنى التحتية للنظام البيئي الأساسي')}</h2>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>{tText('Robust hardware pipelines that protect brand presence across Kuwait.', 'خطوط أنابيب قوية تحمي وجود العلامة التجارية عبر الكويت.')}</p>
            </div>

            <div className="grid-3" style={{ gap: '2.5rem' }}>
              {infraData.map((item, idx) => (
                <div key={idx} className="card gsap-reveal premium-card hover-lift" style={{ padding: '3rem', textAlign: 'initial' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. NETWORK STATISTICS */}
        <section style={{ backgroundColor: 'var(--color-bg-dark)', padding: '6rem 0', color: '#fff' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', textAlign: 'center' }}>
              {[
                { val: '2,000+', lbl: tText('Outlets Covered', 'منفذ تم تغطيته') },
                { val: '16', lbl: tText('Delivery Vehicles', 'مركبات التوصيل') },
                { val: '10,000+', lbl: tText('CBM Capacity', 'السعة بالمتر المكعب') },
                { val: '50+', lbl: tText('Years Market Legitimacy', 'عاماً من المشروعية في السوق') },
                { val: '100%', lbl: tText('Zones Secured', 'المناطق المؤمنة') }
              ].map((stat, idx) => (
                <div key={idx} className="gsap-reveal">
                  <h2 style={{ color: 'var(--color-primary)', fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>{stat.val}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>{stat.lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE NETWORK FLOW INFOGRAPHIC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container">
            <div className="gsap-reveal text-center" style={{ marginBottom: '6rem' }}>
              <h2 style={{ fontSize: '2.5rem' }}>{tText('Dynamic Market Flow Architecture', 'بنية تدفق السوق الديناميكية')}</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>{tText('Unifying manufacturers and consumers with zero-latency operational continuity.', 'توحيد المصنعين والمستهلكين باستمرارية تشغيلية بدون تأخير.')}</p>
            </div>

            {/* Ensure layout direction flows correctly on desktop */}
            <div className="gsap-reveal flow-diagram-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', padding: '0 2rem', flexDirection: isAr ? 'row-reverse' : 'row' }}>
              <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '2px', borderTop: '2px dashed var(--color-primary)', opacity: 0.3, zIndex: 1 }}></div>
              
              {infographicSteps.map((step, idx) => (
                <div key={idx} style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '50%', 
                    background: step.color, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                    margin: '0 auto 1.5rem auto' 
                  }}>
                    <span style={{ fontWeight: 800, color: step.fontColor || 'var(--color-bg-dark)' }}>0{idx+1}</span>
                  </div>
                  <h4 style={{ color: 'var(--color-bg-dark)', fontSize: '1.1rem' }}>{step.node}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. LOGISTICS EXCELLENCE */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container editorial-grid">
            <div className="gsap-reveal" style={{ textAlign: 'initial' }}>
              <h2 style={{ fontSize: '2.8rem', lineHeight: 1.1 }}>{tText('Persistent Logistic Consistency', 'الاتساق اللوجستي الدائم')}</h2>
              <p style={{ marginTop: '2rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                {tText('Our performance metrics guarantee optimal speed-to-market, ensuring global manufacturer assets retain pure market-value dominance upon landing.', 'تضمن مقاييس أدائنا السرعة المثلى للوصول إلى السوق، مما يضمن احتفاظ أصول المصنعين العالميين بهيمنة القيمة السوقية الخالصة.')}
              </p>
            </div>
            <div className="grid-2 gsap-reveal" style={{ gap: '1.5rem' }}>
              {[
                { h: tText('Supply Efficiency', 'كفاءة التوريد'), p: tText('Minimized loading redundancies.', 'تقليل فائض التحميل.') },
                { h: tText('Live Telemetry', 'القياس عن بُعد المباشر'), p: tText('Tracked assets 24 hours a day.', 'تتبع الأصول 24 ساعة في اليوم.') },
                { h: tText('Stock Longevity', 'طول عمر المخزون'), p: tText('Controlled storage safety zones.', 'مناطق تخزين آمنة ومتحكم بها.') },
                { h: tText('Merchandising', 'الترويج'), p: tText('Clean product shelf alignment.', 'محاذاة رفوف المنتجات النظيفة.') }
              ].map((item, i) => (
                <div key={i} className="card premium-card" style={{ padding: '2rem', background: '#fff', textAlign: 'initial' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{item.h}</h4>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. COVERAGE & REACH */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container text-center">
            <div className="gsap-reveal" style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem' }}>{tText('Regional Visibility Density', 'كثافة الرؤية الإقليمية')}</h2>
              <p style={{ color: 'var(--color-text-muted)' }}>{tText('Mapping full active distribution territories across Kuwait state borders.', 'رسم خرائط مناطق التوزيع النشطة الكاملة عبر حدود دولة الكويت.')}</p>
            </div>
            <div className="gsap-reveal" style={{ height: '400px', width: '100%', background: '#071B2A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2, background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)' }}></div>
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  background: 'var(--color-primary)', 
                  borderRadius: '50%', 
                  margin: '0 auto 1rem', 
                  boxShadow: '0 0 20px var(--color-primary)',
                  animation: 'pulseGlow 2s infinite'
                }}></div>
                <h3 style={{ color: '#fff', fontSize: '1.8rem', margin: 0 }}>{tText('Kuwait Network Node', 'عقدة شبكة الكويت')}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{tText('Primary Operational Anchor: Al Rai District', 'المرتكز التشغيلي الأساسي: منطقة الري')}</p>
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes pulseGlow {
                  0% { box-shadow: 0 0 0 0 rgba(23, 135, 200, 0.7); }
                  70% { box-shadow: 0 0 0 15px rgba(23, 135, 200, 0); }
                  100% { box-shadow: 0 0 0 0 rgba(23, 135, 200, 0); }
                }
                @media (max-width: 768px) {
                  .flow-diagram-container {
                    flex-direction: column !important;
                    gap: 3rem;
                  }
                  .flow-diagram-container > div:first-child { display: none; }
                }
              `}} />
            </div>
          </div>
        </section>

        {/* 7. BUSINESS PARTNERSHIPS */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container text-center">
            <h2 className="gsap-reveal" style={{ fontSize: '2.2rem', marginBottom: '4rem' }}>{tText('Global Brand Integration', 'تكامل العلامات التجارية العالمية')}</h2>
            <div className="grid-3 gsap-reveal" style={{ opacity: 0.6, filter: 'grayscale(100%)', gap: '3rem' }}>
              <div style={{ fontWeight: 900, fontSize: '1.8rem', color: 'var(--color-bg-dark)' }}>TITANIA</div>
              <div style={{ fontWeight: 900, fontSize: '1.8rem', color: 'var(--color-bg-dark)' }}>BIGEN</div>
              <div style={{ fontWeight: 900, fontSize: '1.8rem', color: 'var(--color-bg-dark)' }}>VITADAY</div>
            </div>
          </div>
        </section>

        {/* 8. CTA SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-dark)', color: '#fff' }}>
          <div className="container text-center">
            <h2 className="gsap-reveal" style={{ color: '#fff', fontSize: '2.5rem' }}>{tText('Synchronize Your Brand With Our Grid', 'قم بمزامنة علامتك التجارية مع شبكتنا')}</h2>
            <p className="gsap-reveal" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '1rem auto 3rem' }}>
              {tText("Secure tier-1 distribution velocity in the Gulf by connecting into HSHG's hardened fleet and storage nexus.", "ضمن سرعة توزيع من المستوى الأول في الخليج من خلال الاتصال بأسطول اتش اس اتش جي المحصن ورابط التخزين.")}
            </p>
            <div className="gsap-reveal btn-group" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">{tText('Join Our Network', 'انضم إلى شبكتنا')}</Link>
              <Link to="/contact" className="btn btn-corporate-outline">{tText('Contact Team', 'تواصل مع الفريق')}</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Network;
