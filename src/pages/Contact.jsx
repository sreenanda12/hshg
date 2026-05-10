import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslate } from '../utils/translate';

function Contact() {
  const { tText, isAr } = useTranslate();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Contact Us | HSHG United', 'اتصل بنا | اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Reach out to HSHG United's corporate office in Kuwait for distribution inquiries.", "تواصل مع المكتب المؤسسي لشركة اتش اس اتش جي المتحدة في الكويت للاستفسارات المتعلقة بالتوزيع.")} />
      </Helmet>

      {/* 1. Page Banner with Cinematic Overlay */}
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0
        }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
            {tText('Corporate Communications', 'الاتصالات المؤسسية')}
          </span>
          <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {tText('Contact Us', 'اتصل بنا')}
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {tText("Partner with Mr. Hamad & Saleh Alghanim's premier FMCG and pharmaceutical affiliate.", "شراكة مع الشركة التابعة للسلع الاستهلاكية والأدوية الرائدة للسيد حمد وصالح الغانم.")}
          </p>
        </div>
      </section>

      {/* Left -> Contact details & Social Links | Right -> Inquiry Form */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem' }}>
          
          {/* 2. Office Details & Social Media Links */}
          <div style={{ textAlign: 'initial' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
              {tText('Get in Touch', 'ابقى على تواصل')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--color-text-muted)' }}>
              {tText("Our executive administrative headquarters are strategically located in Al Rai's main logistics district, securing instant transit pipeline coordination.", "يقع مقرنا الإداري التنفيذي الاستراتيجي في منطقة الري اللوجستية الرئيسية، مما يضمن تنسيقاً فورياً لخطوط النقل.")}
            </p>

            <div style={{ display: 'grid', gap: '2rem', marginBottom: '3.5rem' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Corporate Address', 'عنوان الشركة')}
                </strong>
                <span style={{ fontSize: '1.1rem', marginTop: '0.2rem', display: 'block' }}>
                  {tText('Al Rai, Block 1, Street 15, Kuwait City, State of Kuwait', 'الري، قطعة ١، شارع ١٥، مدينة الكويت، دولة الكويت')}
                </span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Support Hotline', 'الخط الساخن للدعم')}
                </strong>
                <span style={{ fontSize: '1.1rem', marginTop: '0.2rem', display: 'block' }}>+965 1845 6789</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Inquiries Email', 'البريد الإلكتروني للاستفسارات')}
                </strong>
                <span style={{ fontSize: '1.1rem', marginTop: '0.2rem', display: 'block' }}>info@hshgunited.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                {tText('Connect With Us', 'تواصل معنا')}
              </h4>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#linkedin" className="link-hover" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>LinkedIn</a>
                <a href="#twitter" className="link-hover" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Twitter</a>
                <a href="#facebook" className="link-hover" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Facebook</a>
              </div>
            </div>
          </div>

          {/* 3. Inquiry Form */}
          <div style={{ textAlign: 'initial' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
              {tText('Inquiry Form', 'نموذج الاستفسار')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              {tText('Submit your distribution or supply chain details below.', 'أرسل تفاصيل التوزيع أو سلسلة التوريد الخاصة بك أدناه.')}
            </p>
            
            {submitted ? (
              <div className="card premium-card" style={{ padding: '3rem', border: '1px solid var(--color-primary)' }}>
                <h3 style={{ color: 'var(--color-primary)' }}>
                  {tText('Inquiry Submitted', 'تم إرسال الاستفسار')}
                </h3>
                <p style={{ margin: 0, marginTop: '1rem', lineHeight: 1.7 }}>
                  {tText('Your business inquiry has been recorded securely. Our corporate account manager will review your agency assets and reach out shortly.', 'لقد تم تسجيل استفسارك التجاري بأمان. سيقوم مدير حسابات شركتنا بمراجعة أصول وكالتك والاتصال بك قريباً.')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-bg-dark)' }}>
                    {tText('Name', 'الاسم')}
                  </label>
                  <input 
                    type="text" 
                    required 
                    style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--color-bg-light)', fontFamily: 'inherit' }}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-bg-dark)' }}>
                    {tText('Business Email', 'البريد الإلكتروني للعمل')}
                  </label>
                  <input 
                    type="email" 
                    required 
                    style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--color-bg-light)', fontFamily: 'inherit' }}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-bg-dark)' }}>
                    {tText('Subject', 'الموضوع')}
                  </label>
                  <input 
                    type="text" 
                    required 
                    style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--color-bg-light)', fontFamily: 'inherit' }}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-bg-dark)' }}>
                    {tText('Message', 'الرسالة')}
                  </label>
                  <textarea 
                    rows="5" 
                    required 
                    style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--color-bg-light)', fontFamily: 'inherit', resize: 'vertical' }}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem 2rem', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                  {tText('Submit Inquiry', 'إرسال الاستفسار')}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. Realistic Map Representation Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', paddingTop: 0 }}>
        <div className="container">
          <div className="card premium-card" style={{ height: '400px', position: 'relative', overflow: 'hidden', padding: 0 }}>
            <div style={{ 
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
              backgroundImage: 'url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)'
            }}></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(7,27,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <div style={{ textAlign: 'center', color: '#fff' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" style={{ marginBottom: '1rem' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>
                  {tText('Al Rai Logistics District, Block 1', 'منطقة الري اللوجستية، قطعة ١')}
                </p>
                <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                  {tText('Kuwait City, State of Kuwait', 'مدينة الكويت، دولة الكويت')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .container[style*="grid-template-columns: 1fr 1.2fr"] {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}} />
    </>
  );
}

export default Contact;
