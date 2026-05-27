import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';

function Contact() {
  const { tText, isAr } = useTranslate();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Elegant Apple-style entry animations
    gsap.fromTo('.contact-reveal-fade',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );

    gsap.fromTo('.particle-element',
      { y: 'random(-20, 20)', x: 'random(-20, 20)', opacity: 'random(0.2, 0.5)' },
      { 
        y: 'random(-80, 80)', 
        x: 'random(-40, 40)', 
        opacity: 'random(0.4, 0.8)', 
        duration: 'random(6, 12)', 
        repeat: -1, 
        yoyo: true, 
        ease: 'sine.inOut',
        stagger: 0.1
      }
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
        <title>{tText('Let’s Start a Business Conversation | HSHG United', 'لنبدأ محادثة تجارية | شركة اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Connect with HSHG United Trading Company's corporate communications and fleet deployment headquarters in Kuwait's logistics district.", "تواصل مع المقر الرئيسي للاتصالات المؤسسية والعمليات اللوجستية لشركة اتش اس اتش جي المتحدة في الكويت.")} />
      </Helmet>

      {/* Decorative Premium Mesh and Skyline Background Wrapper */}
      <div style={{ 
        position: 'relative', 
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-light)', 
        overflow: 'hidden',
        paddingTop: '6rem' 
      }}>
        
        {/* Very Light Premium Gradient Mesh Background */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at 10% 20%, rgba(23, 135, 200, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 85%, rgba(15, 45, 64, 0.04) 0%, transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        {/* Subtle World Map SVG Grid Pattern Background */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '90%',
          height: '80%',
          opacity: 0.04,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='10' cy='10' r='1' fill='%231787C8'/%3E%3Ccircle cx='30' cy='10' r='1' fill='%231787C8'/%3E%3Ccircle cx='50' cy='10' r='1' fill='%231787C8'/%3E%3Ccircle cx='70' cy='10' r='1' fill='%231787C8'/%3E%3Ccircle cx='90' cy='10' r='1' fill='%231787C8'/%3E%3Ccircle cx='10' cy='30' r='1' fill='%231787C8'/%3E%3Ccircle cx='30' cy='30' r='1' fill='%231787C8'/%3E%3Ccircle cx='50' cy='30' r='1' fill='%231787C8'/%3E%3Ccircle cx='70' cy='30' r='1' fill='%231787C8'/%3E%3Ccircle cx='90' cy='30' r='1' fill='%231787C8'/%3E%3Ccircle cx='10' cy='50' r='1' fill='%231787C8'/%3E%3Ccircle cx='30' cy='50' r='1' fill='%231787C8'/%3E%3Ccircle cx='50' cy='50' r='1' fill='%231787C8'/%3E%3Ccircle cx='70' cy='50' r='1' fill='%231787C8'/%3E%3Ccircle cx='90' cy='50' r='1' fill='%231787C8'/%3E%3Ccircle cx='10' cy='70' r='1' fill='%231787C8'/%3E%3Ccircle cx='30' cy='70' r='1' fill='%231787C8'/%3E%3Ccircle cx='50' cy='70' r='1' fill='%231787C8'/%3E%3Ccircle cx='70' cy='70' r='1' fill='%231787C8'/%3E%3Ccircle cx='90' cy='70' r='1' fill='%231787C8'/%3E%3Ccircle cx='10' cy='90' r='1' fill='%231787C8'/%3E%3Ccircle cx='30' cy='90' r='1' fill='%231787C8'/%3E%3Ccircle cx='50' cy='90' r='1' fill='%231787C8'/%3E%3Ccircle cx='70' cy='90' r='1' fill='%231787C8'/%3E%3Ccircle cx='90' cy='90' r='1' fill='%231787C8'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Kuwait Corporate City Skyline Subtle Background Overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '280px',
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: 0,
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300' fill='%23071B2A'%3E%3Cpath d='M0 300h1200V150h-30v20h-20v-50h-40v40h-25v-90h-30v70h-15v-30h-20v40h-35v-80h-20v50h-40v-100h-30v110h-20V90h-35v40h-15v-60h-30v80h-25v-120h-40v140h-20v-40h-30v50h-45v-90h-20v60h-30v-110h-35v80h-15v-50h-25v30h-40V50h-30v120h-20v-40h-30v60h-45v-90h-20v50h-30v-130h-40v140h-25v-30h-20v50h-35v-70h-15v40h-30v-80h-20v50h-40v-100h-30v110H0v150z'/%3E%3C/svg%3E") bottom center no-repeat`,
          backgroundSize: 'cover'
        }}></div>

        {/* Soft Apple-Style Floating Blur Particles */}
        <div className="particle-element" style={{ position: 'absolute', top: '15%', left: '8%', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', filter: 'blur(3px)', zIndex: 0 }}></div>
        <div className="particle-element" style={{ position: 'absolute', top: '45%', right: '12%', width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'var(--color-steel-blue)', filter: 'blur(4px)', zIndex: 0 }}></div>
        <div className="particle-element" style={{ position: 'absolute', bottom: '25%', left: '15%', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', filter: 'blur(3px)', zIndex: 0 }}></div>
        <div className="particle-element" style={{ position: 'absolute', top: '75%', right: '25%', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-primary-dark)', filter: 'blur(2px)', zIndex: 0 }}></div>

        {/* 1. HERO/TOP CONTACT INTRO */}
        <section className="section-padding" style={{ paddingTop: '5rem', paddingBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
          <div className="container text-center">
            <span className="contact-reveal-fade" style={{ 
              color: 'var(--color-primary)', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              fontSize: '0.85rem', 
              letterSpacing: '3px', 
              display: 'block', 
              marginBottom: '1rem',
              textShadow: '0 2px 10px rgba(23, 135, 200, 0.15)'
            }}>
              {tText('Corporate Communications', 'الاتصالات المؤسسية')}
            </span>
            <h1 className="contact-reveal-fade" style={{ 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', 
              fontWeight: 800, 
              color: 'var(--color-bg-dark)', 
              lineHeight: 1.15,
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '1.2rem',
              marginBottom: '1.8rem'
            }}>
              {tText('Let’s Start a Business Conversation', 'لنبدأ محادثة تجارية')}
              
              {/* Subtle Elegant Underline Anim */}
              <span className="animated-underline-bar" style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)',
                borderRadius: '2px'
              }}></span>
            </h1>
            <p className="contact-reveal-fade" style={{ 
              maxWidth: '820px', 
              margin: '0 auto', 
              color: 'var(--color-text-muted)', 
              fontSize: '1.15rem', 
              lineHeight: 1.75 
            }}>
              {tText('Our corporate administrative and fleet deployment headquarters are strategically located in Kuwait’s logistics district, supporting efficient nationwide distribution operations.', 'يقع مقرنا الإداري المؤسسي الرئيسي وأسطول النقل اللوجستي بشكل استراتيجي في المنطقة اللوجستية في الكويت، مما يضمن كفاءة عمليات التوزيع في جميع أنحاء البلاد.')}
            </p>
          </div>
        </section>

        {/* 2. SPLIT-SCREEN CONTACT & INQUIRY FORM SECTION */}
        <section style={{ position: 'relative', zIndex: 1, paddingBottom: '6rem' }}>
          <div className="container">
            <div className="contact-split-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.1fr 1fr', 
              gap: '4.5rem', 
              alignItems: 'center'
            }}>
              
              {/* LEFT SIDE: Contact Information & Cards */}
              <div className="contact-reveal-fade" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'initial' }}>
                <div>
                  <span style={{ 
                    color: 'var(--color-primary)', 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    fontSize: '0.85rem', 
                    letterSpacing: '2px', 
                    display: 'block', 
                    marginBottom: '0.5rem' 
                  }}>
                    {tText('OFFICE DETAILS', 'معلومات المكاتب')}
                  </span>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.2rem' }}>
                    {tText('HSHG United Headquarters', 'مقر شركة اتش اس اتش جي المتحدة')}
                  </h2>
                  <p style={{ lineHeight: 1.7, color: 'var(--color-text-muted)', fontSize: '1.05rem', margin: 0 }}>
                    {tText("Connect directly with our corporate staff or visit our centralized administrative complex. We secure instant logistics pipelines and downstream commercial reach across all governorates of Kuwait.", "تواصل مباشرة مع موظفينا أو تفضل بزيارة مجمعنا الإداري المركزي. نحن نضمن مسارات لوجستية فورية ووصولاً تجارياً سريعاً لجميع محافظات الكويت.")}
                  </p>
                </div>

                {/* 4 Premium Glassmorphic Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="contact-cards-container">
                  
                  {/* CARD 1: Phone */}
                  <div className="glass-contact-card hover-glow-effect" style={{
                    padding: '2rem 1.8rem',
                    background: 'rgba(255, 255, 255, 0.45)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.65)',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                    willChange: 'transform, box-shadow'
                  }}>
                    <div className="card-icon-wrapper" style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(23, 135, 200, 0.08)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      transition: 'all 0.3s ease'
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
                        {tText('Phone Number', 'رقم الهاتف')}
                      </strong>
                      <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-bg-dark)', dir: 'ltr' }}>
                        +965 1845 6789
                      </span>
                    </div>
                  </div>

                  {/* CARD 2: Email */}
                  <div className="glass-contact-card hover-glow-effect" style={{
                    padding: '2rem 1.8rem',
                    background: 'rgba(255, 255, 255, 0.45)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.65)',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                    willChange: 'transform, box-shadow'
                  }}>
                    <div className="card-icon-wrapper" style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(23, 135, 200, 0.08)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      transition: 'all 0.3s ease'
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
                        {tText('Email Address', 'البريد الإلكتروني')}
                      </strong>
                      <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-bg-dark)' }}>
                        info@hshgunited.com
                      </span>
                    </div>
                  </div>

                  {/* CARD 3: Office Location */}
                  <div className="glass-contact-card hover-glow-effect" style={{
                    padding: '2rem 1.8rem',
                    background: 'rgba(255, 255, 255, 0.45)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.65)',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                    gridColumn: 'span 2',
                    willChange: 'transform, box-shadow'
                  }}>
                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                      <div className="card-icon-wrapper" style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(23, 135, 200, 0.08)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease'
                      }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
                          {tText('Office Location', 'مقر الشركة')}
                        </strong>
                        <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-bg-dark)', lineHeight: 1.4 }}>
                          {tText('Al Rai, Block 1, Street 15, Kuwait City, Kuwait', 'الري، قطعة ١، شارع ١٥، مدينة الكويت، الكويت')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: Working Hours */}
                  <div className="glass-contact-card hover-glow-effect" style={{
                    padding: '2rem 1.8rem',
                    background: 'rgba(255, 255, 255, 0.45)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.65)',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                    gridColumn: 'span 2',
                    willChange: 'transform, box-shadow'
                  }}>
                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                      <div className="card-icon-wrapper" style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(23, 135, 200, 0.08)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease'
                      }}>
                        <svg className="clock-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline className="clock-hands" points="12 6 12 12 16 14" style={{ transformOrigin: '12px 12px', transition: 'transform 0.5s ease' }} />
                        </svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
                          {tText('Working Hours', 'أوقات العمل')}
                        </strong>
                        <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-bg-dark)', lineHeight: 1.4 }}>
                          {tText('Sunday - Thursday: 8:00 AM - 5:00 PM', 'الأحد - الخميس: ٨:٠٠ صباحاً - ٥:٠٠ مساءً')}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT SIDE: Redesigned Premium Glass Inquiry Form */}
              <div className="contact-reveal-fade">
                <div className="premium-form-container-glow" style={{
                  position: 'relative',
                  borderRadius: '24px',
                  padding: '3px',
                  background: 'linear-gradient(135deg, rgba(23, 135, 200, 0.25) 0%, rgba(15, 45, 64, 0.15) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                  animation: 'formBorderGlow 8s linear infinite alternate'
                }}>
                  
                  {/* Inside Glass Card Body */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    padding: '3.5rem 3rem',
                    borderRadius: '21px',
                    textAlign: 'initial'
                  }}>
                    <span style={{ 
                      color: 'var(--color-primary)', 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      fontSize: '0.85rem', 
                      letterSpacing: '2px', 
                      display: 'block', 
                      marginBottom: '0.5rem' 
                    }}>
                      {tText('PARTNERSHIP INQUIRIES', 'طلب شراكة')}
                    </span>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '2rem' }}>
                      {tText('Send Business Inquiry', 'إرسال استفسار تجاري')}
                    </h2>

                    {submitted ? (
                      <div className="form-submit-success" style={{
                        padding: '2.5rem',
                        background: 'rgba(23, 135, 200, 0.06)',
                        border: '1px solid rgba(23, 135, 200, 0.2)',
                        borderRadius: '16px',
                        textAlign: 'center'
                      }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-primary)',
                          color: '#fff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.8rem',
                          marginBottom: '1.2rem'
                        }}>✓</div>
                        <h3 style={{ color: 'var(--color-primary)', fontSize: '1.3rem', margin: '0 0 0.8rem 0', fontWeight: 700 }}>
                          {tText('Inquiry Submitted', 'تم إرسال استفسارك بنجاح')}
                        </h3>
                        <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                          {tText('Thank you. Your business inquiry has been recorded securely. Our corporate account manager will review your agency assets and reach out shortly.', 'شكرًا لك. لقد تم تسجيل استفسارك التجاري بنجاح. سيقوم مدير الحسابات لدينا بمراجعة طلبك والتواصل معك في أقرب وقت ممكن.')}
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.8rem' }}>
                        
                        <div className="form-group-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-bg-dark)' }}>
                              {tText('Full Name', 'الاسم الكامل')}
                            </label>
                            <input 
                              type="text" 
                              required 
                              className="premium-input-field"
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-bg-dark)' }}>
                              {tText('Business Email', 'البريد الإلكتروني للعمل')}
                            </label>
                            <input 
                              type="email" 
                              required 
                              className="premium-input-field"
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-bg-dark)' }}>
                            {tText('Subject', 'الموضوع')}
                          </label>
                          <input 
                            type="text" 
                            required 
                            className="premium-input-field"
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-bg-dark)' }}>
                            {tText('Message / Distribution Interest', 'الرسالة / تفاصيل العلامة التجارية والتوزيع')}
                          </label>
                          <textarea 
                            rows="4" 
                            required 
                            className="premium-input-field"
                            style={{ resize: 'vertical', minHeight: '110px' }}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          />
                        </div>

                        <button type="submit" className="premium-corporate-submit-btn" style={{ 
                          width: '100%',
                          padding: '1.1rem 2.5rem', 
                          border: 'none', 
                          cursor: 'pointer', 
                          borderRadius: '8px', 
                          fontWeight: 700,
                          fontSize: '1rem',
                          fontFamily: 'var(--font-headings)',
                          marginTop: '0.5rem',
                          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-steel-blue) 100%)',
                          color: '#fff',
                          boxShadow: '0 6px 20px rgba(23, 135, 200, 0.25)',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}>
                          {tText('Send Inquiry', 'إرسال الاستفسار')}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. BUSINESS SUPPORT SECTION (NEW) */}
        <section className="section-padding" style={{ 
          backgroundColor: 'rgba(255,255,255,0.7)', 
          borderTop: '1px solid var(--color-light-gray)',
          borderBottom: '1px solid var(--color-light-gray)',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="container">
            <div className="contact-reveal-fade text-center" style={{ marginBottom: '4rem' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
                {tText('DEDICATED PATHWAYS', 'مسارات مخصصة')}
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginTop: '0.5rem' }}>
                {tText('Business Support Channels', 'قنوات دعم الأعمال')}
              </h2>
              <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', color: 'var(--color-text-muted)' }}>
                {tText('Choose the specialized team matching your operational scale and commercial requests.', 'اختر الفريق المتخصص الذي يتوافق مع متطلباتك التشغيلية والتجارية.')}
              </p>
            </div>

            <div className="grid-3" style={{ gap: '2.5rem' }}>
              
              {/* SUPPORT CARD 1 */}
              <div className="card premium-card hover-lift" style={{ 
                padding: '3rem 2.2rem', 
                background: 'var(--color-white)', 
                borderRadius: '16px',
                textAlign: 'initial',
                border: '1px solid rgba(0,0,0,0.02)',
                willChange: 'transform, opacity'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(23, 135, 200, 0.08)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.8rem'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-bg-dark)', marginBottom: '0.8rem' }}>
                  {tText('Distribution Partnerships', 'شراكات التوزيع')}
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {tText('Connect with our team for brand expansion and retail distribution opportunities across Kuwait.', 'تواصل مع فريقنا لفرص التوزيع والتوسع التجاري للعلامات التجارية في جميع أنحاء الكويت.')}
                </p>
              </div>

              {/* SUPPORT CARD 2 */}
              <div className="card premium-card hover-lift" style={{ 
                padding: '3rem 2.2rem', 
                background: 'var(--color-white)', 
                borderRadius: '16px',
                textAlign: 'initial',
                border: '1px solid rgba(0,0,0,0.02)',
                willChange: 'transform, opacity'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(23, 135, 200, 0.08)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.8rem'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-bg-dark)', marginBottom: '0.8rem' }}>
                  {tText('Supplier Relations', 'علاقات الموردين')}
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {tText('Build long-term strategic partnerships with HSHG United Trading Company.', 'ابنِ شراكات استراتيجية طويلة الأجل مع شركة اتش اس اتش جي المتحدة للتجارة.')}
                </p>
              </div>

              {/* SUPPORT CARD 3 */}
              <div className="card premium-card hover-lift" style={{ 
                padding: '3rem 2.2rem', 
                background: 'var(--color-white)', 
                borderRadius: '16px',
                textAlign: 'initial',
                border: '1px solid rgba(0,0,0,0.02)',
                willChange: 'transform, opacity'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(23, 135, 200, 0.08)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.8rem'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-bg-dark)', marginBottom: '0.8rem' }}>
                  {tText('Customer Support', 'دعم العملاء')}
                </h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {tText('Our support team is ready to assist with inquiries and operational coordination.', 'فريق الدعم لدينا مستعد لمساعدتك في الاستفسارات والتنسيق التشغيلي.')}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. PREMIUM MAP AND LOGISTICS LOCATION DETAILS SECTION */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', position: 'relative', zIndex: 1 }}>
          <div className="container">
            
            <div className="map-split-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.3fr',
              gap: '4.5rem',
              alignItems: 'center'
            }}>
              
              {/* Left Side: Logistics HQ Information */}
              <div style={{ textAlign: 'initial' }} className="contact-reveal-fade">
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
                  {tText('STRATEGIC PLACEMENT', 'المركز الاستراتيجي')}
                </span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.5rem' }}>
                  {tText('Logistics Headquarters', 'المقر اللوجستي الرئيسي')}
                </h2>
                <p style={{ lineHeight: 1.7, color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                  {tText('Strategically placed in Kuwait’s premium logistics and industrial hub, facilitating efficient cross-docking and immediate downstream dispatch pipelines.', 'يقع المقر بشكل استراتيجي في المركز الصناعي واللوجستي المتميز في الكويت، مما يسهل عمليات النقل المباشر وتدفق التوزيع الفوري.')}
                </p>

                {/* Logistics Key Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(23, 135, 200, 0.08)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>✓</div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-bg-dark)' }}>
                        {tText('Ghazali Expressway Pipeline', 'اتصال مباشر بطريق الغزالي السريع')}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        {tText('Direct highways for accelerated dispatch times.', 'محاور رئيسية لتقليل زمن وصول المنتجات لأقصى درجة.')}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(23, 135, 200, 0.08)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>✓</div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-bg-dark)' }}>
                        {tText('DSV Logistics Integration', 'التكامل اللوجستي مع DSV')}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        {tText('Affiliation solutions with parent DSV systems.', 'حلول متكاملة ومترابطة مع أنظمة DSV التابعة للشركة الأم.')}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(23, 135, 200, 0.08)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>✓</div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-bg-dark)' }}>
                        {tText('Nationwide Dispatch Under 24h', 'توزيع وطني سريع في أقل من ٢٤ ساعة')}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        {tText('Full fleet availability across all distribution pipelines.', 'توفر الأسطول بشكل كامل لتغطية جميع مسارات التوزيع.')}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Side: Map Container with Dark Tint Frame */}
              <div className="contact-reveal-fade">
                <div className="map-frame-shadow-wrapper" style={{
                  position: 'relative',
                  padding: '8px',
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.06)',
                  borderRadius: '24px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    height: '420px', 
                    borderRadius: '18px', 
                    overflow: 'hidden', 
                    position: 'relative' 
                  }}>
                    
                    {/* Embedded styled Map with native lazy loading */}
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
                    
                    {/* Modern Luxury Map Subtle Dark Overlay tint */}
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      background: 'radial-gradient(circle, rgba(7, 27, 42, 0.05) 0%, rgba(7, 27, 42, 0.15) 100%)',
                      mixBlendMode: 'multiply',
                      pointerEvents: 'none'
                    }}></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>

      {/* 5. FLOATING CONTACT ACTIONS */}
      <div className="floating-actions" style={{
        position: 'fixed',
        bottom: '2rem',
        insetInlineEnd: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 9999,
        willChange: 'transform, opacity',
        transform: 'translate3d(0,0,0)'
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
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            position: 'relative',
            willChange: 'transform, opacity',
            transform: 'translate3d(0,0,0)'
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
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.1)',
            willChange: 'transform, opacity',
            transform: 'translate3d(0,0,0)'
          }}
        >
          <span className="tooltip-text">{tText('Send Email', 'راسلنا إيميل')}</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>

      {/* Embedded High-Performance Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Underline Animation */
        .animated-underline-bar {
          animation: underlinePulse 4s infinite ease-in-out;
        }
        @keyframes underlinePulse {
          0%, 100% { width: 80px; opacity: 0.6; }
          50% { width: 140px; opacity: 1; }
        }

        /* Glass Cards Hover Transitions */
        .glass-contact-card {
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }
        .glass-contact-card:hover {
          transform: translateY(-8px) translate3d(0, 0, 0);
          background: rgba(255, 255, 255, 0.7) !important;
          border-color: rgba(23, 135, 200, 0.4) !important;
          box-shadow: 0 15px 35px rgba(23, 135, 200, 0.08) !important;
        }
        
        .glass-contact-card:hover .card-icon-wrapper {
          background: var(--color-primary) !important;
          color: #fff !important;
          transform: scale(1.08) rotate(-4deg);
        }

        .glass-contact-card:hover .clock-hands {
          transform: rotate(90deg);
        }

        /* Form Premium Glow & Border Animation */
        @keyframes formBorderGlow {
          0% {
            background: linear-gradient(135deg, rgba(23, 135, 200, 0.2) 0%, rgba(15, 45, 64, 0.1) 100%);
            box-shadow: 0 20px 45px rgba(0,0,0,0.03);
          }
          100% {
            background: linear-gradient(135deg, rgba(23, 135, 200, 0.4) 0%, rgba(15, 45, 64, 0.25) 100%);
            box-shadow: 0 20px 45px rgba(23, 135, 200, 0.1);
          }
        }

        /* Input Styling */
        .premium-input-field {
          width: 100%; 
          padding: 1.1rem; 
          border: 1.5px solid rgba(15, 45, 64, 0.12); 
          border-radius: 8px; 
          background: rgba(255, 255, 255, 0.9); 
          font-family: inherit;
          font-size: 1rem;
          color: var(--color-bg-dark);
          transition: all 0.3s ease;
          outline: none;
        }
        .premium-input-field:focus {
          border-color: var(--color-primary);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(23, 135, 200, 0.12), 0 4px 12px rgba(0, 0, 0, 0.02);
        }

        /* Send Inquiry Action Button Glow */
        .premium-corporate-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(23, 135, 200, 0.45) !important;
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-bg-dark) 100%) !important;
        }
        .premium-corporate-submit-btn:active {
          transform: translateY(0);
        }

        /* Floating Tooltips */
        .float-btn:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.15) !important;
        }
        .tooltip-text {
          visibility: hidden;
          width: 120px;
          background-color: var(--color-bg-dark);
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

        /* RTL-safe directional padding and border styling overrides */
        [dir="rtl"] .glass-contact-card {
          text-align: right;
        }

        /* RESPONSIVE LAYOUT ADJUSTMENTS */
        @media (max-width: 992px) {
          .contact-split-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .map-split-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }

        @media (max-width: 576px) {
          .contact-cards-container {
            grid-template-columns: 1fr !important;
          }
          .glass-contact-card {
            grid-column: span 1 !important;
          }
          .form-group-grid {
            grid-template-columns: 1fr !important;
            gap: 1.8rem !important;
          }
        }
      `}} />
    </>
  );
}

export default Contact;
