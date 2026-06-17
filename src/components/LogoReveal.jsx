import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function LogoReveal({ onComplete }) {
  const revealRef = useRef(null);
  const ambientLightRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoImgRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const sweepRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Fade out the entire reveal screen and run onComplete callback
          gsap.to(revealRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
              if (revealRef.current) revealRef.current.style.display = 'none';
              if (onComplete) onComplete();
            }
          });
        }
      });

      // 1. Initial State Setup
      gsap.set(ambientLightRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(logoContainerRef.current, { opacity: 0, scale: 0.92 });
      gsap.set(sweepRef.current, { x: '-110%' });
      gsap.set([nameRef.current, taglineRef.current, dividerRef.current], { opacity: 0, y: 15 });

      // 2. Ambient light gradually illuminates the center
      tl.to(ambientLightRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power2.out'
      }, 0.2);

      // 3. HSHG Logo slowly emerges with a smooth fade-in and subtle scale-up
      tl.to(logoContainerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: 'power3.out'
      }, 0.6);

      // 4. Subtle metallic light sweep moves across the logo
      tl.to(sweepRef.current, {
        x: '110%',
        duration: 1.2,
        ease: 'power2.inOut'
      }, 1.9);

      // 5. Logo gently settles with refined motion
      tl.to(logoImgRef.current, {
        scale: 1.02,
        duration: 0.8,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut'
      }, 2.0);

      // 6. Company name appears below with elegant typography
      tl.to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 2.4);

      // 7. Divider line grows
      tl.to(dividerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, 2.7);

      // 8. Tagline fades in smoothly
      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, 3.0);

      // 9. Short, elegant pause to hold the corporate branding presentation
      tl.to({}, { duration: 1.6 }, 3.5);

    }, revealRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={revealRef}
      id="hshg-corporate-reveal"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#061526', // Deep corporate navy background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Soft ambient lighting center glow */}
      <div
        ref={ambientLightRef}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,128,182,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          transformOrigin: 'center center'
        }}
      />

      {/* Main branding container */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Polished Logo Container */}
        <div
          ref={logoContainerRef}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '6px',
            padding: '4px 12px',
            marginBottom: '2rem',
            transformOrigin: 'center center'
          }}
        >
          <img
            ref={logoImgRef}
            src="/images/logo_white.png"
            alt="HSHG United"
            style={{
              height: 'clamp(70px, 9vw, 95px)',
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.35)) drop-shadow(0 0 15px rgba(22,128,182,0.25))',
              transformOrigin: 'center center'
            }}
          />
          {/* Metallic light sweep */}
          <div
            ref={sweepRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '70%',
              height: '100%',
              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Company name typography */}
        <div ref={nameRef} style={{ marginBottom: '0.8rem' }}>
          <div style={{
            fontSize: 'clamp(1.8rem, 4.2vw, 2.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.14em',
            fontFamily: 'var(--font-headings, "Inter", sans-serif)',
            lineHeight: 1.1,
          }}>
            HSHG
          </div>
          <div style={{
            fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
            fontWeight: 500,
            color: 'rgba(22, 128, 182, 0.95)',
            letterSpacing: '0.24em',
            marginTop: '0.5rem',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-headings, "Inter", sans-serif)',
          }}>
            UNITED TRADING &amp; CONTRACTING CO.
          </div>
        </div>

        {/* Divider Line */}
        <div 
          ref={dividerRef}
          style={{
            width: '45px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(22, 128, 182, 0.55), transparent)',
            marginBottom: '0.65rem'
          }}
        />

        {/* Corporate tagline */}
        <p 
          ref={taglineRef}
          style={{
            fontSize: 'clamp(0.68rem, 1.4vw, 0.78rem)',
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.22em',
            fontWeight: 400,
            margin: 0,
            textTransform: 'uppercase',
            fontFamily: 'var(--font-headings, "Inter", sans-serif)',
          }}
        >
          Building Trust. Delivering Excellence.
        </p>
      </div>
    </div>
  );
}

export default LogoReveal;
