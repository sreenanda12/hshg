import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';

function Contact() {
  const { tText, isAr } = useTranslate();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Entrance animations
    gsap.fromTo('.contact-reveal',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Contact Us | HSHG United Trading Company', 'اتصل بنا | شركة اتش اس اتش جي المتحدة للتجارة')}</title>
        <meta name="description" content={tText("Get in touch with HSHG United Trading Company for business inquiries, partnerships, and FMCG distribution in Kuwait.", "تواصل مع شركة اتش اس اتش جي المتحدة للتجارة للاستفسارات التجارية، الشراكات، وتوزيع السلع الاستهلاكية في الكويت.")} />
      </Helmet>

      {/* 1. Page Banner with Premium Overlay */}
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
          <span className="contact-reveal" style={{ color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
            {tText('CONNECT WITH US', 'تواصل مع فريقنا')}
          </span>
          <h1 className="contact-reveal" style={{ color: 'var(--color-white)', fontSize: 'clamp(2.8rem, 5vw, 3.8rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
            {tText('Contact Us', 'اتصل بنا')}
          </h1>
          <p className="contact-reveal" style={{ maxWidth: '750px', margin: '0 auto', color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {tText('We are always ready to support our partners and customers. Contact HSHG United Trading Company for business inquiries, partnerships, and distribution opportunities across Kuwait.', 'نحن مستعدون دائماً لدعم شركائنا وعملائنا. اتصل بشركة اتش اس اتش جي المتحدة للتجارة للاستفسارات التجارية، والشراكات، وفرص التوزيع في جميع أنحاء الكويت.')}
          </p>
        </div>
      </section>

      {/* 2. Structured Contact Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container responsive-grid-shifted">
          
          {/* Details & Working Hours */}
          <div className="contact-reveal" style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              {tText('OFFICE DETAILS', 'معلومات المكاتب')}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
              {tText('Corporate Communications', 'الاتصالات المؤسسية')}
            </h2>
            <p style={{ lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {tText("Our corporate administrative and fleet deployment headquarters are strategically located in Al Rai's main logistics district, securing instant downstream transit pipelines across Kuwait.", "يقع مقرنا الإداري المؤسسي الرئيسي وأسطول النقل اللوجستي بشكل استراتيجي في منطقة الري اللوجستية، مما يضمن تدفقاً فورياً وسريعاً للبضائع في جميع أنحاء الكويت.")}
            </p>

            {/* Premium Info Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--color-bg-light)', border: '1px solid var(--color-light-gray)', borderRadius: '8px' }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}>📞</span>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Phone Number', 'رقم الهاتف')}
                </strong>
                <span style={{ fontSize: '1rem', marginTop: '0.2rem', display: 'block', fontWeight: 600, color: 'var(--color-bg-dark)' }}>
                  +965 1845 6789
                </span>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--color-bg-light)', border: '1px solid var(--color-light-gray)', borderRadius: '8px' }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}>✉️</span>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Email Address', 'البريد الإلكتروني')}
                </strong>
                <span style={{ fontSize: '1rem', marginTop: '0.2rem', display: 'block', fontWeight: 600, color: 'var(--color-bg-dark)' }}>
                  info@hshgunited.com
                </span>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--color-bg-light)', border: '1px solid var(--color-light-gray)', borderRadius: '8px' }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}>📍</span>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Office Location', 'مقر الشركة')}
                </strong>
                <span style={{ fontSize: '0.9rem', marginTop: '0.2rem', display: 'block', fontWeight: 600, color: 'var(--color-bg-dark)' }}>
                  {tText('Al Rai, Block 1, Street 15, Kuwait City, Kuwait', 'الري، قطعة ١، شارع ١٥، مدينة الكويت، الكويت')}
                </span>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--color-bg-light)', border: '1px solid var(--color-light-gray)', borderRadius: '8px' }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}>⏰</span>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Working Hours', 'أوقات العمل')}
                </strong>
                <span style={{ fontSize: '0.9rem', marginTop: '0.2rem', display: 'block', fontWeight: 600, color: 'var(--color-bg-dark)' }}>
                  {tText('Sunday - Thursday: 8:00 AM - 5:00 PM', 'الأحد - الخميس: ٨:٠٠ صباحاً - ٥:٠٠ مساءً')}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="contact-reveal" style={{ textAlign: 'initial' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
              {tText('PARTNERSHIP INQUIRIES', 'طلب شراكة')}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
              {tText('Send Business Inquiry', 'إرسال استفسار تجاري')}
            </h2>
            
            {submitted ? (
              <div className="card premium-card" style={{ padding: '3rem', border: '1px solid var(--color-primary)', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--color-primary)', margin: '0 0 1rem 0' }}>
                  {tText('Inquiry Submitted', 'تم إرسال استفسارك بنجاح')}
                </h3>
                <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--color-text-muted)' }}>
                  {tText('Thank you. Your business inquiry has been recorded securely. Our corporate account manager will review your agency assets and reach out shortly.', 'شكرًا لك. لقد تم تسجيل استفسارك التجاري بنجاح. سيقوم مدير الحسابات لدينا بمراجعة طلبك والتواصل معك في أقرب وقت ممكن.')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-bg-dark)' }}>
                      {tText('Full Name', 'الاسم الكامل')}
                    </label>
                    <input 
                      type="text" 
                      required 
                      style={{ width: '100%', padding: '0.9rem', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--color-bg-light)', fontFamily: 'inherit' }}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-bg-dark)' }}>
                      {tText('Business Email', 'البريد الإلكتروني للعمل')}
                    </label>
                    <input 
                      type="email" 
                      required 
                      style={{ width: '100%', padding: '0.9rem', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--color-bg-light)', fontFamily: 'inherit' }}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-bg-dark)' }}>
                    {tText('Subject', 'الموضوع')}
                  </label>
                  <input 
                    type="text" 
                    required 
                    style={{ width: '100%', padding: '0.9rem', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--color-bg-light)', fontFamily: 'inherit' }}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-bg-dark)' }}>
                    {tText('Message / Distribution Interest', 'الرسالة / تفاصيل العلامة التجارية والتوزيع')}
                  </label>
                  <textarea 
                    rows="4" 
                    required 
                    style={{ width: '100%', padding: '0.9rem', border: '1px solid var(--color-border)', borderRadius: '4px', background: 'var(--color-bg-light)', fontFamily: 'inherit', resize: 'vertical' }}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem 2rem', border: 'none', cursor: 'pointer', borderRadius: '4px', marginTop: '0.5rem' }}>
                  {tText('Send Inquiry', 'إرسال الاستفسار')}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Google Maps Interactive Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', paddingTop: 0 }}>
        <div className="container">
          <div className="card" style={{ height: '450px', position: 'relative', overflow: 'hidden', padding: 0, borderRadius: '12px', border: '1px solid var(--color-light-gray)', boxShadow: 'var(--shadow-premium)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.118944837568!2d47.9405626!3d29.324222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5367cf57d59b7%3A0xc3f58a368d1847e1!2sAl%20Rai%2C%20Kuwait!5e0!3m2!1sen!2skw!4v1700000000000!5m2!1sen!2skw"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="HSHG United Office Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. FLOATING CONTACT ACTIONS */}
      <div className="floating-actions" style={{
        position: 'fixed',
        bottom: '2rem',
        insetInlineEnd: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 9999
      }}>
        {/* WhatsApp Float */}
        <a 
          href="https://wa.me/96518456789" 
          target="_blank" 
          rel="noopener noreferrer"
          className="float-btn whatsapp-float"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
        >
          <span className="tooltip-text">{tText('Chat WhatsApp', 'راسلنا واتساب')}</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>

        {/* Email Float */}
        <a 
          href="mailto:info@hshgunited.com" 
          className="float-btn email-float"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-bg-dark)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            boxShadow: '0 8px 24px rgba(7,27,42,0.3)',
            transition: 'all 0.3s ease',
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <span className="tooltip-text">{tText('Send Email', 'راسلنا إيميل')}</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .float-btn:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.15) !important;
        }
        
        /* Tooltip text styling */
        .tooltip-text {
          visibility: hidden;
          width: 120px;
          background-color: #333;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 1;
          inset-inline-end: 75px;
          opacity: 0;
          transition: opacity 0.3s;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .float-btn:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
        }
      `}} />
    </>
  );
}

export default Contact;
