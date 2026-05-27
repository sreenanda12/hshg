import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';

function About() {
  const { tText, isAr } = useTranslate();

  useEffect(() => {
    // Entrance reveal animations
    gsap.fromTo('.about-reveal',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
    );
  }, []);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('About Us | HSHG United Trading Company', 'من نحن | شركة اتش اس اتش جي المتحدة للتجارة')}</title>
        <meta name="description" content={tText("HSHG United Trading Company is a dynamic FMCG distribution company operating across the State of Kuwait. Established in 2020 as an affiliate of Homaizi Pharma.", "شركة اتش اس اتش جي المتحدة للتجارة هي شركة ديناميكية لتوزيع السلع الاستهلاكية تعمل في دولة الكويت. تأسست في عام 2020 كشركة تابعة للحميضي فارما.")} />
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0
        }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="about-reveal" style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
            {tText('FMCG Excellence & Operations', 'التميز في السلع الاستهلاكية والعمليات')}
          </span>
          <h1 className="about-reveal" style={{ color: 'var(--color-white)', fontSize: 'clamp(2.8rem, 5vw, 3.8rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
            {tText('About Us', 'من نحن')}
          </h1>
          <p className="about-reveal" style={{ maxWidth: '750px', margin: '0 auto', color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {tText('Established in 2020 as an affiliation of Homaizi Pharma, HSHG United Trading Company delivers reliable and scalable FMCG distribution across Kuwait.', 'تأسست شركة اتش اس اتش جي المتحدة للتجارة في عام 2020 كشركة تابعة للحميضي فارما، وتقدم خدمات توزيع سلع استهلاكية موثوقة وقابلة للتطوير في الكويت.')}
          </p>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container responsive-grid">
          <div className="about-reveal" style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              {tText('CORPORATE PROFILE', 'الملف التعريفي للشركة')}
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-bg-dark)' }}>
              {tText('About HSHG United Trading Company', 'حول شركة اتش اس اتش جي المتحدة للتجارة')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('HSHG United Trading Company is a dynamic FMCG distribution company operating across the State of Kuwait. Established in 2020 as an affiliate of Homaizi Pharma, the company has rapidly evolved into a trusted distribution partner delivering reliable, scalable, and market-driven solutions across multiple trade channels.', 'تعتبر شركة اتش اس اتش جي المتحدة للتجارة شركة ديناميكية نشطة في مجال توزيع السلع الاستهلاكية وتعمل في جميع أنحاء دولة الكويت. تأسست الشركة في عام 2020 كشركة تابعة للحميضي فارما، وتطورت سريعاً لتصبح شريك توزيع موثوقاً يقدم حلولاً موثوقة وقابلة للتطوير وموجهة نحو السوق عبر قنوات تجارية متعددة.')}
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText('With strong market expertise and a deep understanding of consumer behavior, HSHG United ensures effective market penetration, excellent in-store execution, and sustainable growth for its brand partners while building long-term relationships with the trade and retail sector.', 'بفضل الخبرة القوية في السوق والفهم العميق لسلوك المستهلك، تضمن شركة اتش اس اتش جي المتحدة تحقيق اختراق فعال للسوق، وتنفيذ ممتاز داخل المتاجر، ونمو مستدام لشركائها من العلامات التجارية مع بناء علاقات طويلة الأجل مع قطاع التجارة والتجزئة.')}
            </p>

            {/* Trade Channel Highlights */}
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', color: 'var(--color-bg-dark)', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 700 }}>
                {tText('Active Trade Channels Covered:', 'القنوات التجارية النشطة المغطاة:')}
              </h4>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {[
                  tText('Co-ops', 'الجمعيات التعاونية'),
                  tText('Key Accounts', 'الحسابات الرئيسية'),
                  tText('Supermarkets', 'السوبر ماركت'),
                  tText('Online Platforms', 'المنصات الإلكترونية'),
                  tText('Wholesale', 'أسواق الجملة'),
                  tText('SSS', 'الخدمات الخاصة (SSS)'),
                  tText('Down Trade', 'التجارة التقليدية / التجزئة البسيطة')
                ].map((channel, idx) => (
                  <span key={idx} style={{ 
                    padding: '0.5rem 1.2rem', 
                    background: 'var(--color-bg-light)', 
                    border: '1px solid var(--color-light-gray)', 
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-bg-dark)',
                    transition: 'all 0.3s ease'
                  }} className="hover-lift">
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=1000&auto=format&fit=crop" 
              alt={tText("HSHG Modern Logistics Hub", "مركز لوجستي حديث لاتش اس اتش جي")} 
              className="premium-img"
              style={{ boxShadow: 'var(--shadow-premium)', width: '100%', borderRadius: '8px' }}
            />
            <div className="card" style={{ padding: '2rem', background: 'var(--color-bg-light)', border: '1px solid var(--color-light-gray)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(23,135,200,0.1)', color: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>
                🏢
              </div>
              <div style={{ textAlign: 'initial' }}>
                <h4 style={{ margin: 0, color: 'var(--color-bg-dark)', fontSize: '1.05rem', fontWeight: 700 }}>{tText('Affiliation of Homaizi Pharma', 'تابعة لشركة أحفاد حمد صالح الحميضي للصيدلة')}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>{tText('Securing deep healthcare and commercial standards.', 'تأمين أعلى المعايير التجارية والرعاية الصحية.')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="responsive-grid">
            
            {/* Vision Panel */}
            <div className="about-reveal" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem', textAlign: 'initial' }}>
                {tText('STRATEGIC DNA', 'الحمض النووي الاستراتيجي')}
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '2rem', color: 'var(--color-bg-dark)', textAlign: 'initial' }}>
                {tText('Vision', 'رؤيتنا')}
              </h2>
              <div className="card premium-card hover-lift" style={{ 
                padding: '3.5rem 3rem', 
                background: 'var(--color-bg-dark)', 
                color: '#fff', 
                borderRadius: '12px',
                textAlign: 'initial',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: 'var(--shadow-premium)',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>“</div>
                <p style={{ 
                  fontSize: '1.35rem', 
                  lineHeight: 1.8, 
                  color: 'rgba(255,255,255,0.9)', 
                  fontWeight: 600,
                  margin: 0,
                  fontFamily: 'var(--font-headings)'
                }}>
                  {tText('To become a leading FMCG distribution partner in Kuwait, recognized for operational excellence, strong market execution, sustainable growth, and being a proudly Kuwaiti brand owner.', 'أن نصبح شريك توزيع السلع الاستهلاكية الرائد في الكويت، والمتميز بالتميز التشغيلي، والتنفيذ القوي في السوق، والنمو المستدام، ومالك علامة تجارية كويتية فخورة.')}
                </p>
                <div style={{ textAlign: isAr ? 'left' : 'right', fontSize: '3rem', marginTop: '1rem', color: 'var(--color-primary)', lineHeight: 0.5 }}>”</div>
              </div>
            </div>

            {/* Mission Checklist Panel */}
            <div className="about-reveal" style={{ textAlign: 'initial' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
                {tText('COMMITMENT', 'التزامنا التشغيلي')}
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '2rem', color: 'var(--color-bg-dark)' }}>
                {tText('Mission', 'رسالتنا')}
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                {tText('We are committed to building long-term value, ensuring absolute customer satisfaction, and supporting brands through structured local operations:', 'نحن ملتزمون ببناء قيمة طويلة الأجل، وضمان رضا العملاء التام، ودعم العلامات التجارية من خلال عمليات محلية منظمة:')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  tText('Delivering reliable distribution solutions across all trade channels.', 'تقديم حلول توزيع موثوقة عبر جميع القنوات التجارية.'),
                  tText('Maximizing brand visibility and market reach through strategic placement.', 'زيادة رؤية العلامة التجارية والوصول إلى السوق إلى أقصى حد من خلال الوضع الاستراتيجي.'),
                  tText('Building strong long-term partnerships with the trade and retail sector.', 'بناء شراكات قوية طويلة الأجل مع قطاع التجارة والتجزئة.'),
                  tText('Operating with integrity, accountability, and absolute professionalism.', 'العمل بنزاهة ومسؤولية ومهنية مطلقة.'),
                  tText('Creating sustainable value for our brand partners and local customers.', 'خلق قيمة مستدامة لشركائنا من العلامات التجارية وعملائنا المحليين.')
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '50%', 
                      background: 'rgba(23,135,200,0.1)', 
                      color: 'var(--color-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      marginTop: '0.2rem'
                    }}>
                      ✓
                    </div>
                    <span style={{ fontSize: '1.05rem', color: 'var(--color-text-main)', fontWeight: 500, lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="about-reveal text-center" style={{ marginBottom: '5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
              {tText('CORPORATE PHILOSOPHY', 'الفلسفة المؤسسية')}
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginTop: '0.5rem', fontWeight: 800 }}>
              {tText('Core Values', 'قيمنا الأساسية')}
            </h2>
            <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', color: 'var(--color-text-muted)' }}>
              {tText("All HSHG achievements are determined by the skills, personal integrity, trust, and dedication of our employees.", "تتحدد جميع إنجازات شركة اتش اس اتش جي بالمهارات والنزاهة الشخصية والثقة والتفاني لدى موظفينا.")}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              {
                title: tText('Integrity', 'النزاهة'),
                desc: tText('Honesty, ethical conduct, and transparency in every transaction and commercial partnership.', 'الأمانة والسلوك الأخلاقي والشفافية في كل معاملة وشراكة تجارية.'),
                icon: '⚖️'
              },
              {
                title: tText('Accountability', 'المسؤولية والمحاسبة'),
                desc: tText('Taking ownership of outcomes, fulfilling agreements, and maintaining structural trust.', 'تحمل مسؤولية النتائج، والوفاء بالاتفاقيات، والحفاظ على الثقة الهيكلية.'),
                icon: '🤝'
              },
              {
                title: tText('Operational Excellence', 'التميز التشغيلي'),
                desc: tText('Applying high quality-control standards across climate storage, fleets, and shelf placement.', 'تطبيق معايير رقابة جودة عالية عبر التخزين المبرد والأساطيل والتوزيع على الرفوف.'),
                icon: '🏆'
              },
              {
                title: tText('Responsibility', 'الالتزام والمسؤولية'),
                desc: tText('A commitment to protect brand equity, ensure product freshness, and respect local retail norms.', 'الالتزام بحماية قيمة العلامة التجارية، وضمان نضارة المنتج، واحترام معايير التجزئة المحلية.'),
                icon: '🛡️'
              },
              {
                title: tText('Perseverance', 'المثابرة والإصرار'),
                desc: tText('Focusing on sustainable market growth, overcoming hurdles, and expanding local channel penetration.', 'التركيز على نمو السوق المستدام، وتجاوز العقبات، وتوسيع انتشار القنوات المحلية.'),
                icon: '🚀'
              },
              {
                title: tText('Social Responsibility', 'المسؤولية الاجتماعية'),
                desc: tText('Proudly serving the Kuwaiti community with high-grade food and wellness products.', 'خدمة المجتمع الكويتي بفخر بمنتجات غذائية وصحية عالية الجودة.'),
                icon: '🌱'
              },
              {
                title: tText('Trust & Cohesion', 'الثقة والترابط'),
                desc: tText('Fostering unified teamwork, mutual respect, and absolute coordination across sales divisions.', 'تعزيز العمل الجماعي الموحد، والاحترام المتبادل، والتنسيق المطلق عبر أقسام المبيعات.'),
                icon: '🔗'
              }
            ].map((val, idx) => (
              <div key={idx} className="card premium-card hover-lift about-reveal" style={{ padding: '2.5rem', background: 'var(--color-bg-light)', border: '1px solid var(--color-light-gray)', borderRadius: '8px', textAlign: 'initial' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: 'var(--color-bg-dark)', fontWeight: 700 }}>{val.title}</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Kuwait Market Context Visual Banner */}
      <section style={{ 
        height: '400px', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        background: 'url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat' 
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(7,27,42,0.9), rgba(7,27,42,0.6))', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, color: '#fff', textAlign: 'initial' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '0.8rem' }}>
            {tText('PROUDLY KUWAITI BRAND OWNER', 'مالك علامة تجارية كويتية فخورة')}
          </span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, maxWidth: '650px', lineHeight: 1.2 }}>
            {tText('Serving Delightful and Healthy Life, Every Day, Everywhere Across Kuwait', 'نقدم حياة صحية وممتعة، كل يوم، في كل مكان في جميع أنحاء الكويت')}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '550px', marginTop: '1rem', marginBottom: 0 }}>
            {tText('With a structured commercial setup covering cooperative networks and modern key accounts.', 'من خلال هيكل تجاري منظم يغطي الشبكات التعاونية والحسابات الرئيسية الحديثة.')}
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
