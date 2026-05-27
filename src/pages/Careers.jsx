import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslate } from '../utils/translate';

function Careers() {
  const { tText, isAr } = useTranslate();

  const roles = useMemo(() => [
    { title: tText('Warehouse Operations Supervisor', 'مشرف عمليات المستودعات'), dept: tText('Logistics Division', 'قسم الخدمات اللوجستية') },
    { title: tText('FMCG Brand Merchandiser', 'مروج العلامة التجارية للسلع الاستهلاكية'), dept: tText('Retail Operations', 'العمليات بالتجزئة') }
  ], [tText]);

  const news = useMemo(() => [
    { 
      date: tText('May 2026', 'مايو ٢٠٢٦'), 
      title: tText('Expanded Warehousing Capacity', 'توسيع سعة التخزين'), 
      desc: tText('HSHG United completes expansion of state-of-the-art cold chain storage facility, increasing logistics performance.', 'أكملت اتش اس اتش جي المتحدة توسيع منشأة تخزين سلسلة التبريد المتطورة، مما زاد من الأداء اللوجستي.') 
    },
    { 
      date: tText('April 2026', 'أبريل ٢٠٢٦'), 
      title: tText('New Global Brand Partnerships', 'شراكات جديدة لعلامات تجارية عالمية'), 
      desc: tText('HSHG signs exclusive distribution contracts to bring premium personal wellness items to Kuwait pharmacies.', 'توقع اتش اس اتش جي عقود توزيع حصرية لجلب منتجات العناية الشخصية المتميزة إلى صيدليات الكويت.') 
    },
    { 
      date: tText('March 2026', 'مارس ٢٠٢٦'), 
      title: tText('Safety Compliance Milestone', 'إنجاز الامتثال للسلامة'), 
      desc: tText('HSHG successfully clears independent health audit for high-quality food safety distribution across GCC retail.', 'اجتازت اتش اس اتش جي بنجاح تدقيقاً صحياً مستقلاً لتوزيع سلامة الأغذية عالية الجودة عبر منافذ البيع في الخليج.') 
    }
  ], [tText]);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Careers & News | HSHG United', 'الوظائف والأخبار | اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Join our team or stay up to date with HSHG United's latest corporate news.", "انضم إلى فريقنا أو ابق على اطلاع بأحدث الأخبار المؤسسية لشركة اتش اس اتش جي المتحدة.")} />
      </Helmet>

      {/* Sub-Hero Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-white)', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="container text-center">
          <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {tText('Careers & News', 'الوظائف والأخبار')}
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {tText('Build your professional future with HSHG United and keep up with our latest organizational milestones.', 'ابنِ مستقبلك المهني مع شركة اتش اس اتش جي المتحدة وواكب أحدث محطاتنا التنظيمية.')}
          </p>
        </div>
      </section>

      {/* Employee Culture */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container responsive-grid">
          <div style={{ textAlign: 'initial' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              {tText('Corporate Culture', 'الثقافة المؤسسية')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {tText('At HSHG United Trading & Contracting Co., our employees are our greatest asset. We foster a highly professional environment focused on operational integrity, continuous training, safety, and operational excellence.', 'في شركة اتش اس اتش جي المتحدة للتجارة والمقاولات، موظفونا هم أعظم أصولنا. نحن نرعى بيئة مهنية عالية تركز على النزاهة التشغيلية، التدريب المستمر، السلامة، والتميز التشغيلي.')}
            </p>
            <p style={{ lineHeight: 1.8 }}>
              {tText('We offer competitive pathways, robust career training, and a supportive, structured environment built to secure long-term industrial success.', 'نحن نقدم مسارات تنافسية وتدريباً مهنياً قوياً وبيئة داعمة ومنظمة مبنية لتأمين النجاح الصناعي على المدى الطويل.')}
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
              alt={tText("HSHG Team Culture", "ثقافة فريق اتش اس اتش جي")} 
              className="premium-img"
              style={{ boxShadow: 'var(--shadow-premium)', width: '100%', borderRadius: '4px' }}
            />
          </div>
        </div>
      </section>

      {/* Employee Benefits / Environment */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-dark)', color: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ color: '#fff' }}>{tText('Why Grow With Us', 'لماذا تنمو معنا')}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
              {tText('Fostering development and professional excellence within a corporate landscape.', 'تعزيز التنمية والتميز المهني داخل المشهد المؤسسي.')}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { t: tText('Employee Growth', 'نمو الموظفين'), d: tText('Continuous pathway advancement structures.', 'هياكل تقدم المسار المستمر.') },
              { t: tText('Team Environment', 'بيئة الفريق'), d: tText('Structured, ethical, and supportive network.', 'شبكة منظمة وأخلاقية وداعمة.') },
              { t: tText('Training Systems', 'أنظمة التدريب'), d: tText('Hands-on logistical and operational modules.', 'وحدات لوجستية وتشغيلية عملية.') },
              { t: tText('Broad Opportunities', 'فرص واسعة'), d: tText('Stable career diversity across multiple corporate arms.', 'تنوع مهني مستقر عبر أذرع مؤسسية متعددة.') }
            ].map((b, i) => (
              <div key={i} className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', textAlign: 'initial', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{b.t}</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2>{tText('Current Openings', 'الوظائف الشاغرة الحالية')}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
              {tText('Explore career paths within our warehousing, logistics, merchandising, and administrative divisions.', 'استكشف المسارات المهنية داخل أقسام التخزين والخدمات اللوجستية والترويج والإدارة لدينا.')}
            </p>
          </div>

          <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {roles.map((role, idx) => (
              <div key={idx} className="card premium-card job-listing-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2.5rem' }}>
                <div style={{ textAlign: 'initial' }}>
                  <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{role.title}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase' }}>{role.dept}</span>
                </div>
                <button className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                  {tText('Apply Now', 'قدّم الآن')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate News & Milestones */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2>{tText('Latest Corporate News', 'أحدث الأخبار المؤسسية')}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
              {tText('Stay informed with our latest announcements and distribution partnerships.', 'ابق على اطلاع بأحدث إعلاناتنا وشراكات التوزيع الخاصة بنا.')}
            </p>
          </div>

          <div className="grid-3">
            {news.map((item, i) => (
              <div key={i} className="card premium-card" style={{ padding: '2.5rem', textAlign: 'initial' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.date}</span>
                <h3 style={{ fontSize: '1.3rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .job-listing-card {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .job-listing-card div { text-align: center !important; }
        }
      `}} />
    </>
  );
}

export default Careers;
