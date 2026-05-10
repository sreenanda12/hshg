import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslate } from '../utils/translate';

function About() {
  const { tText, isAr } = useTranslate();

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('About Us & Operations | HSHG United', 'نبذة عنا والعمليات | اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Discover HSHG United Trading & Contracting Co.'s corporate heritage, vision, and supply chain.", "اكتشف الإرث المؤسسي لشركة اتش اس اتش جي والرؤية وسلسلة التوريد.")} />
      </Helmet>

      {/* 1. Page Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-white)', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="container text-center">
          <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
            {tText('Heritage & Operations Excellence', 'التراث والتميز التشغيلي')}
          </span>
          <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {tText('About & Operations', 'من نحن والعمليات')}
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {tText('A cornerstone of FMCG, healthcare, and logistics stability across Kuwait since the thirties of the last century.', 'حجر زاوية للسلع الاستهلاكية والرعاية الصحية والاستقرار اللوجستي في الكويت منذ ثلاثينيات القرن الماضي.')}
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container responsive-grid">
          <div style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
              {tText('Corporate Profile', 'الملف المؤسسي')}
            </span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '2rem' }}>
              {tText('Who We Are', 'من نحن')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {tText('Hamad Saleh Al Homaizi Grandsons Pharma Co., with its FMCG affiliate ', 'شركة أحفاد حمد صالح الحميضي للصيدلة، مع الشركة التابعة لها للسلع الاستهلاكية ')}
              <strong>{tText('H.S.H.G United Trading & Contracting Company', 'شركة اتش اس اتش جي المتحدة للتجارة والمقاولات')}</strong>
              {tText(', is a premier private enterprise owned by ', '، هي مؤسسة خاصة رائدة مملوكة من قبل ')}
              <strong>{tText('Mr. Hamad & Saleh Alghanim', 'السيد حمد وصالح الغانم')}</strong>
              {tText(' based in the State of Kuwait.', ' ومقرها دولة الكويت.')}
            </p>
            <p style={{ lineHeight: 1.8 }}>
              {tText("We represent the home of the world's largest, most advanced medical, nutritional, and FMCG manufacturers. Over the past 50 years, our group has developed into a fully-fledged enterprise representing 30 international agencies, over 2,000 product SKUs, and a specialized team of 250 employees.", "نحن نمثل المقر الرئيسي لأكبر وأكثر مصنعي المنتجات الطبية والغذائية والسلع الاستهلاكية تقدماً في العالم. على مدار الخمسين عاماً الماضية، تطورت مجموعتنا إلى مؤسسة متكاملة تمثل 30 وكالة دولية، وأكثر من 2000 منتج، وفريق متخصص يضم 250 موظفاً.")}
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
              alt={tText("HSHG Corporate Boardroom", "قاعة اجتماعات شركة اتش اس اتش جي")} 
              className="premium-img"
              style={{ boxShadow: 'var(--shadow-premium)', width: '100%', borderRadius: '4px' }}
            />
          </div>
        </div>
      </section>

      {/* 3. Company Background & 4. Heritage Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>{tText('Heritage & Growth', 'التراث والنمو')}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
              {tText('Explore our historic milestones and decade-long commitment to GCC distribution.', 'استكشف محطاتنا التاريخية والتزامنا الممتد لعقود في توزيع دول مجلس التعاون الخليجي.')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card premium-card" style={{ padding: '3rem', textAlign: 'initial' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.2rem' }}>{tText('1930s', 'الثلاثينيات')}</span>
              <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>{tText('Foundational Connections', 'علاقات تأسيسية')}</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, color: 'var(--color-text-muted)' }}>
                {tText('Establishment of historic trading roots and commercial networks in Kuwait City.', 'تأسيس الجذور التجارية والشبكات التجارية التاريخية في مدينة الكويت.')}
              </p>
            </div>
            <div className="card premium-card" style={{ padding: '3rem', textAlign: 'initial' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.2rem' }}>{tText('1970s', 'السبعينيات')}</span>
              <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>{tText('AL HOMAIZI PHARMA Affiliate', 'الحميضي فارما')}</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, color: 'var(--color-text-muted)' }}>
                {tText('Establishing pharma ties and introducing state-of-the-art cold-chain storage technologies.', 'تأسيس العلاقات الدوائية وإدخال تقنيات تخزين سلسلة التبريد المتطورة.')}
              </p>
            </div>
            <div className="card premium-card" style={{ padding: '3rem', textAlign: 'initial' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.2rem' }}>{tText('2020s', 'العشرينيات')}</span>
              <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>{tText('Modern FMCG Expansion', 'التوسع الحديث للسلع')}</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, color: 'var(--color-text-muted)' }}>
                {tText('Representing 30 global agencies, distributing 2,000+ products via 16 refrigerated transport units.', 'تمثيل 30 وكالة عالمية، وتوزيع أكثر من 2000 منتج عبر 16 وحدة نقل مبردة.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Vision & Mission */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="responsive-grid" style={{ marginBottom: '8rem' }}>
            <div style={{ textAlign: 'initial' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
                {tText('Strategic DNA', 'الحمض النووي الاستراتيجي')}
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '2rem' }}>
                {tText('Vision & Mission', 'الرؤية والرسالة')}
              </h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                <strong>{tText('Our Vision:', 'رؤيتنا:')}</strong> {tText('Serving delightful and healthy life, every day, everywhere with iconic brands and value products.', 'خدمة حياة صحية وممتعة، كل يوم، في كل مكان بعلامات تجارية أيقونية ومنتجات قيمة.')}
              </p>
              <p style={{ lineHeight: 1.8 }}>
                <strong>{tText('Our Mission:', 'رسالتنا:')}</strong> {tText('Building long-term value creation, operational excellence, and reliable quality service, powered by a strong management system dedicated to total customer satisfaction.', 'بناء خلق قيمة طويلة الأجل، والتميز التشغيلي، والخدمة ذات الجودة الموثوقة، مدعومة بنظام إدارة قوي مكرس لإرضاء العملاء التام.')}
              </p>
            </div>
            <div className="responsive-grid-stats">
              <div className="card premium-card" style={{ padding: '2rem', textAlign: 'initial' }}>
                <h4 style={{ color: 'var(--color-primary)' }}>{tText('Integrity & Trust', 'النزاهة والثقة')}</h4>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>{tText('Honesty in every partnership transaction.', 'الصدق في كل معاملة شراكة.')}</p>
              </div>
              <div className="card premium-card" style={{ padding: '2rem', textAlign: 'initial' }}>
                <h4 style={{ color: 'var(--color-primary)' }}>{tText('Teamwork', 'العمل الجماعي')}</h4>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>{tText('Unified execution towards common objectives.', 'التنفيذ الموحد نحو أهداف مشتركة.')}</p>
              </div>
              <div className="card premium-card" style={{ padding: '2rem', textAlign: 'initial' }}>
                <h4 style={{ color: 'var(--color-primary)' }}>{tText('Dedication', 'التفاني')}</h4>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>{tText('Committed energy dedicated to excellence.', 'طاقة ملتزمة مخصصة للتميز.')}</p>
              </div>
              <div className="card premium-card" style={{ padding: '2rem', textAlign: 'initial' }}>
                <h4 style={{ color: 'var(--color-primary)' }}>{tText('Entrepreneurial Spirit', 'روح ريادة الأعمال')}</h4>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>{tText('Fostering innovative commercial insights.', 'تعزيز الرؤى التجارية المبتكرة.')}</p>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{tText('Our Corporate Values', 'قيمنا المؤسسية')}</h3>
            <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
              {tText("All HSHG achievements are determined by the skills, personal integrity, trust, and dedication of our employees. We continuously work to provide a rewarding experience, empowering individuals to exceed expectations through teamwork and initiative.", "يتم تحديد جميع إنجازات شركة اتش اس اتش جي من خلال مهارات ونزاهة وثقة وتفاني موظفينا. نعمل باستمرار على توفير تجربة مجزية، وتمكين الأفراد من تجاوز التوقعات من خلال العمل الجماعي والمبادرة.")}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Leadership Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container responsive-grid">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop" 
              alt={tText("HSHG Leadership Meetings", "اجتماعات قيادة اتش اس اتش جي")} 
              className="premium-img"
              style={{ boxShadow: 'var(--shadow-premium)', width: '100%', borderRadius: '4px' }}
            />
          </div>
          <div style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
              {tText('Corporate Philosophy', 'الفلسفة المؤسسية')}
            </span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '2rem' }}>
              {tText('Executive Leadership', 'القيادة التنفيذية')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {tText('Under the young, ambitious, and capable leadership of our Chairman and Board of Directors, HSHG ensures its ability to adapt and innovate to reach common commercial goals with its international partners.', 'تحت القيادة الشابة والطموحة والقديرة لرئيس مجلس الإدارة ومجلس الإدارة، تضمن شركة اتش اس اتش جي قدرتها على التكيف والابتكار للوصول إلى الأهداف التجارية المشتركة مع شركائها الدوليين.')}
            </p>
            <p style={{ lineHeight: 1.8 }}>
              {tText('Our philosophy focuses on doing business the right way—creating positive social impact, building professional and ethical workspaces, and maintaining uncompromised quality systems.', 'تركز فلسفتنا على ممارسة الأعمال بالطريقة الصحيحة — خلق تأثير اجتماعي إيجابي، وبناء مساحات عمل مهنية وأخلاقية، والحفاظ على أنظمة جودة لا مثيل لها.')}
            </p>
          </div>
        </div>
      </section>

      {/* Operations & Capabilities Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
              {tText('Competitive Edge', 'ميزة تنافسية')}
            </span>
            <h2 style={{ fontSize: '2.5rem' }}>{tText('Why Choose HSHG', 'لماذا تختار اتش اس اتش جي')}</h2>
            <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--color-text-muted)' }}>
              {tText('Delivering secure and efficient distribution infrastructure trusted by global suppliers.', 'توفير بنية تحتية آمنة وفعالة للتوزيع موثوقة من قبل الموردين العالميين.')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div className="card premium-card hover-lift" style={{ padding: '3rem', textAlign: 'initial' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>1. {tText('Reliable Distribution', 'توزيع موثوق')}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                {tText('Comprehensive local connections securing speed-to-market across every supply channel.', 'اتصالات محلية شاملة تضمن سرعة الوصول إلى السوق عبر كل قناة توريد.')}
              </p>
            </div>
            <div className="card premium-card hover-lift" style={{ padding: '3rem', textAlign: 'initial' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>2. {tText('Warehousing Support', 'دعم المستودعات')}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                {tText('Advanced, modern storage capabilities backed by ERP software tailored to FMCG stability.', 'قدرات تخزين حديثة ومتقدمة مدعومة ببرنامج ERP مصمم لضمان استقرار السلع الاستهلاكية.')}
              </p>
            </div>
            <div className="card premium-card hover-lift" style={{ padding: '3rem', textAlign: 'initial' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>3. {tText('Logistics Excellence', 'التميز اللوجستي')}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                {tText('Professional temperature-regulated supply chain logic maintaining absolute freshness during transportation.', 'منطق سلسلة توريد احترافي منظم درجة الحرارة يحافظ على نضارة مطلقة أثناء النقل.')}
              </p>
            </div>
            <div className="card premium-card hover-lift" style={{ padding: '3rem', textAlign: 'initial' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>4. {tText('Strong Network', 'شبكة قوية')}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                {tText('Immediate logistics leverage utilizing specialized fleet deployment logic across Kuwait state sectors.', 'استغلال فوري للوجستيات باستخدام منطق نشر الأسطول المتخصص عبر قطاعات دولة الكويت.')}
              </p>
            </div>
            <div className="card premium-card hover-lift" style={{ padding: '3rem', textAlign: 'initial' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>5. {tText('Retail Reach', 'الوصول إلى التجزئة')}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                {tText('Direct pipeline integration to 2,000+ prominent POS active zones with 100% Modern Trade coverage.', 'تكامل مباشر للأنابيب مع أكثر من 2000 منطقة نشطة لنقاط البيع البارزة مع تغطية التجارة الحديثة بنسبة 100٪.')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
