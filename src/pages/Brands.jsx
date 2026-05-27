import { useState, useEffect, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';

// High-Precision Intersection Observed React Counter for Stats Section
const StatCounterCard = ({ target, label, suffix = "", icon }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let start = null;
    let animationFrame = null;
    const targetValue = parseInt(target.replace(/[^0-9]/g, ''), 10);
    const duration = 2000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / duration, 1);
      const easeRatio = 1 - Math.pow(1 - ratio, 3); // Cubic out
      setCount(Math.floor(easeRatio * targetValue));

      if (ratio < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrame = requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [target]);

  return (
    <div ref={elementRef} className="premium-stat-card hover-lift" style={{
      textAlign: 'center',
      padding: '2.5rem 2rem',
      background: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '24px',
      boxShadow: '0 20px 40px rgba(15, 45, 64, 0.03)',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      position: 'relative',
      overflow: 'hidden',
      flex: '1 1 calc(25% - 1.5rem)',
      minWidth: '220px'
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem', filter: 'drop-shadow(0 4px 10px rgba(23, 135, 200, 0.15))' }}>{icon}</div>
      <h3 style={{ margin: 0, fontSize: '2.6rem', color: 'var(--color-primary)', fontWeight: 800, fontFamily: 'Poppins, sans-serif' }}>
        {count.toLocaleString()}{suffix}
      </h3>
      <span style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-bg-dark)', marginTop: '0.6rem', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px' }}>
        {label}
      </span>
      <div className="stat-card-glow" />
    </div>
  );
};

// Premium Interactive Draggable & Swipeable Brand Logo Slider Marquee
const BrandCarousel = ({ tText, isAr }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const requestRef = useRef(null);
  
  // Physics & Animation state refs
  const stateRef = useRef({
    currentX: 0,
    isDragging: false,
    startX: 0,
    dragStartOffset: 0,
    speed: isAr ? 0.75 : -0.75, // Direction based on text alignment
    targetSpeed: isAr ? 0.75 : -0.75,
    velocity: 0,
    lastX: 0,
    widthU: 0,
    isHovered: false
  });

  const [isReady, setIsReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Mapped list of 80 logo brands
  const logoItems = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => {
      const num = i + 1;
      const ext = [13, 20, 23, 25, 27].includes(num) ? 'jpg' : 'png';
      return {
        id: `carousel-logo-${num}`,
        src: `/images/logo${num}.${ext}`,
        alt: `Brand Partner ${num}`
      };
    });
  }, []);

  // Triple items for gapless wrapping
  const itemsToRender = useMemo(() => {
    return [...logoItems, ...logoItems, ...logoItems];
  }, [logoItems]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measureWidth = () => {
      const children = Array.from(track.children);
      if (children.length === 0) return;
      
      let uniqueWidth = 0;
      const count = 80;
      
      const style = window.getComputedStyle(children[0]);
      const marginRight = parseFloat(style.marginRight) || 0;
      
      for (let i = 0; i < Math.min(count, children.length); i++) {
        uniqueWidth += children[i].offsetWidth + marginRight;
      }
      
      stateRef.current.widthU = uniqueWidth || (track.scrollWidth / 3);
      setIsReady(true);
    };

    const timer = setTimeout(measureWidth, 600);
    window.addEventListener('resize', measureWidth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureWidth);
    };
  }, [logoItems]);

  useEffect(() => {
    if (!isReady) return;

    const state = stateRef.current;

    const animate = () => {
      if (!trackRef.current) return;

      const U = state.widthU;
      if (U > 0) {
        if (state.currentX <= -U) {
          state.currentX += U;
          if (state.isDragging) state.dragStartOffset += U;
        }
        if (state.currentX >= 0) {
          state.currentX -= U;
          if (state.isDragging) state.dragStartOffset -= U;
        }
      }

      if (state.isDragging) {
        // Position set directly by drag events
      } else {
        if (Math.abs(state.velocity) > 0.05) {
          state.currentX += state.velocity;
          state.velocity *= 0.95; // Momentum decay
        } else {
          // Normal marquee movement (pauses on hover)
          const currentSpeed = state.isHovered ? 0 : state.speed;
          state.currentX += currentSpeed;
        }
      }

      trackRef.current.style.transform = `translate3d(${state.currentX}px, 0, 0)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isReady]);

  const handleStart = (clientX) => {
    const state = stateRef.current;
    state.isDragging = true;
    setIsDragging(true);
    state.startX = clientX;
    state.dragStartOffset = state.currentX;
    state.lastX = clientX;
    state.velocity = 0;
  };

  const handleMove = (clientX) => {
    const state = stateRef.current;
    if (!state.isDragging) return;

    const deltaX = clientX - state.startX;
    state.currentX = state.dragStartOffset + deltaX;

    state.velocity = clientX - state.lastX;
    state.lastX = clientX;
  };

  const handleEnd = () => {
    const state = stateRef.current;
    state.isDragging = false;
    setIsDragging(false);
    state.velocity = Math.max(Math.min(state.velocity, 20), -20);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e) => {
      handleMove(e.clientX);
    };

    const onMouseUp = () => {
      handleEnd();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (e) => {
      if (e.button !== 0) return; // Left click only
      handleStart(e.clientX);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const onTouchEnd = () => {
      handleEnd();
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };

    const onTouchStart = (e) => {
      if (e.touches.length > 0) {
        handleStart(e.touches[0].clientX);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
      }
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('touchstart', onTouchStart, { passive: true });

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div style={{ padding: '3.5rem 0 2rem 0', background: 'transparent', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="premium-top-badge" style={{ 
          color: 'var(--color-primary)', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          fontSize: '0.8rem', 
          letterSpacing: '4px', 
          display: 'inline-block', 
          background: 'rgba(23, 135, 200, 0.08)',
          padding: '0.5rem 1.5rem',
          borderRadius: '50px',
          border: '1px solid rgba(23, 135, 200, 0.15)',
          boxShadow: '0 0 20px rgba(23, 135, 200, 0.1)',
          marginBottom: '1rem',
          fontFamily: 'Poppins, sans-serif'
        }}>
          {tText('TRUSTED GLOBAL BRANDS', 'شريك العلامات التجارية العالمية')}
        </span>
        <h2 style={{ 
          fontSize: '2.1rem', 
          fontWeight: 800, 
          color: 'var(--color-bg-dark)', 
          fontFamily: 'Poppins, sans-serif',
          margin: 0
        }}>
          {tText('Partnering with ', 'شريك مع ')}
          <span className="premium-gradient-text">
            {tText('Leading International Brands', 'أبرز العلامات التجارية العالمية')}
          </span>
        </h2>
      </div>

      <div 
        ref={containerRef}
        onMouseEnter={() => { stateRef.current.isHovered = true; }}
        onMouseLeave={() => { stateRef.current.isHovered = false; }}
        style={{
          width: '100%',
          overflow: 'hidden',
          padding: '1.2rem 0',
          cursor: isDragging ? 'grabbing' : 'grab',
          position: 'relative',
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      >
        {/* Soft edge-blending luxury gradients */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '12%',
          background: 'linear-gradient(to right, #f7fafc 0%, transparent 100%)',
          zIndex: 5, pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: '12%',
          background: 'linear-gradient(to left, #f7fafc 0%, transparent 100%)',
          zIndex: 5, pointerEvents: 'none'
        }} />

        <div 
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'max-content',
            willChange: 'transform',
            transition: isDragging ? 'none' : 'transform 0.1s linear'
          }}
        >
          {itemsToRender.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`}
              style={{
                width: '130px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 10px 25px rgba(15, 45, 64, 0.02)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.8rem',
                flexShrink: 0,
                transition: 'all 0.4s ease'
              }}
              className="carousel-logo-card"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                loading="lazy"
                draggable={false}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  pointerEvents: 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Brands() {
  const { tText, isAr } = useTranslate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Elegant page entrance animations
    gsap.fromTo('.brands-reveal-fade',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 1.0, stagger: 0.12, ease: 'power3.out' }
    );

    // Dynamic background visual floats
    gsap.fromTo('.brand-floating-shape',
      { y: 'random(-10, 10)', x: 'random(-10, 10)', opacity: 'random(0.2, 0.4)' },
      { 
        y: 'random(-40, 40)', 
        x: 'random(-20, 20)', 
        opacity: 'random(0.3, 0.6)', 
        duration: 'random(10, 18)', 
        repeat: -1, 
        yoyo: true, 
        ease: 'sine.inOut',
        stagger: 0.1
      }
    );
  }, []);

  // Filter triggers smooth scale and reveal stagger on grid items
  useEffect(() => {
    gsap.fromTo('.showcase-card-grid-anim',
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
    );
  }, [activeTab]);

  // Brand detailed structured dataset representing all 13 PDF brands
  const brandsData = useMemo(() => [
    {
      id: 'maeda',
      name: 'Maeda',
      category: 'dry-food',
      flag: '🇸🇪',
      country: tText('Sweden / GCC', 'السويد / الخليج'),
      color: '#E4572E',
      icon: '🌾',
      logo: '/images/logo1.png',
      desc: tText('High-quality premium Swedish and GCC grains and staples designed for modern healthy family homes.', 'منتجات وحبوب سويدية وخليجية عالية الجودة مصممة لتناسب المنازل العائلية الحديثة والصحية.'),
      story: tText('Maeda has established an esteemed standard in modern dry food distribution, supplying carefully selected food products that secure high customer retention and retail shelf dominance.', 'نجحت مايدا في إرساء معيار رفيع في توزيع المواد الغذائية الجافة، لتضمن ولاءً متميزاً للمستهلكين وهيمنة كاملة على رفوف التجزئة في الكويت.'),
      products: [
        tText('Premium Basmati Rice', 'أرز بسمتي فاخر مميز'),
        tText('Canned Light Tuna', 'تونة خفيفة معلبة فاخرة'),
        tText('Pure Vegetable Oils', 'زيوت نباتية نقية وصحية'),
        tText('Concentrated Tomato Paste', 'معجون طماطم مركز'),
        tText('Canned Fresh Vegetables', 'خضروات معلبة طازجة'),
        tText('Sardines & Canned Seafood', 'سردين ومأكولات بحرية معلبة'),
        tText('Selected Grape Leaves', 'ورق عنب منتقى بعناية'),
        tText('Premium Ceylon Tea', 'شاي سيلاني فاخر')
      ]
    },
    {
      id: 'segafredo',
      name: 'Segafredo',
      category: 'dry-food',
      flag: '🇮🇹',
      country: tText('Italy', 'إيطاليا'),
      color: '#D90429',
      icon: '☕',
      logo: '/images/logo2.png',
      desc: tText('Premium espresso and coffee craft from Italy delivering world-recognized gourmet coffee solutions.', 'إسبريسو وقهوة إيطالية فاخرة تقدم حلول قهوة راقية ومعترف بها عالمياً.'),
      story: tText('As a globally recognized ambassador of Italian espresso culture, Segafredo offers high-end B2B and retail coffee supplies that satisfy premium hotels, corporate environments, and gourmet retail channels.', 'بصفتها سفيراً عالمياً لثقافة الإسبريسو الإيطالية، تقدم سيغافريدو إمدادات قهوة متميزة تلبي تطلعات الفنادق الراقية ومنافذ التجزئة الفاخرة.'),
      products: [
        tText('Compatibles Coffee Capsules', 'كبسولات قهوة متوافقة فاخرة'),
        tText('Premium Instant Coffee', 'قهوة سريعة التحضير غنية'),
        tText('Classic Ground Coffee', 'بن مطحون على الطريقة الإيطالية')
      ]
    },
    {
      id: 'azime',
      name: 'Azime',
      category: 'dry-food',
      flag: '🇹🇷',
      country: tText('Turkey', 'تركيا'),
      color: '#F4A261',
      icon: '🥗',
      logo: '/images/logo3.png',
      desc: tText('Modern Turkish food products sourced directly to bring authentic culinary experiences to Kuwait.', 'منتجات غذائية تركية حديثة مصممة لنقل التجربة التركية الأصيلة إلى السوق الكويتي.'),
      story: tText('Azime focuses on high-quality agricultural sources, selecting premium raw foods processed through organic Turkish channels to serve Modern Trade hypermarkets with authentic delicacies.', 'تركز عزيمة على المصادر الزراعية عالية الجودة، وتختار الأطعمة الخام الممتازة المصنعة عضوياً لتقدم أشهى المأكولات للهايبرماركتس الحديثة.'),
      products: [
        tText('Turkish Legumes & Grains', 'حبوب وبقوليات تركية منتقاة'),
        tText('Authentic Canned Beans', 'فاصوليا معلبة على الطريقة التركية'),
        tText('Cold Pressed Olive Oils', 'زيوت زيتون معصورة على البارد')
      ]
    },
    {
      id: 'bigen',
      name: 'Bigen',
      category: 'cosmetics',
      flag: '🇯🇵',
      country: tText('Japan', 'اليابان'),
      color: '#E9C46A',
      icon: '✨',
      logo: '/images/logo4.png',
      desc: tText('The global leader in hair color solutions with a gentle hair care portfolio.', 'العلامة الرائدة عالمياً في صبغ الشعر مع مجموعة عناية لطيفة بالبشرة والشعر.'),
      story: tText('Engineered in Japan for gentle, high-precision results, Bigen uses natural extracts and ammonia-free formulas. It holds the leading market share in Kuwait’s male dye sector and continues expanding its female salon range.', 'تم تطوير بيجين في اليابان بدقة عالية، وتعتمد تركيبات خالية من الأمونيا وغنية بالخلاصات الطبيعية لتستحوذ على الحصة السوقية الأكبر في الكويت.'),
      products: [
        tText('Speedy Hair Color for Men', 'صبغة الشعر السريعة للرجال'),
        tText('Gentle Ammonia-Free Women Dye', 'صبغات شعر لطيفة خالية من الأمونيا'),
        tText('Premium Conditioning Hair Oils', 'زيوت ومنعمات الشعر الفاخرة')
      ]
    },
    {
      id: 'kodak',
      name: 'Kodak',
      category: 'electronics',
      flag: '🇺🇸',
      country: tText('USA', 'الولايات المتحدة الأمريكية'),
      color: '#E76F51',
      icon: '🔋',
      logo: '/images/logo5.png',
      desc: tText('High-capacity industrial batteries and household power solutions engineered for heavy drain devices.', 'بطاريات صناعية وحلول طاقة منزلية عالية السعة مصممة للأجهزة الشرهة للطاقة.'),
      story: tText('Kodak is a household name worldwide. HSHG United Trading Company is proud to serve as their verified national distributor, placing long-lasting Kodak power solutions in convenience stores and tech centers.', 'تعتبر كوداك اسماً غنياً عن التعريف عالمياً. وتفخر شركة اتش اس اتش جي المتحدة بالتجارة بأن تكون الموزع الوطني المعتمد لمنتجات الطاقة من كوداك.'),
      products: [
        tText('High-Capacity Alkaline Batteries', 'بطاريات قلوية (Alkaline) عالية الكثافة'),
        tText('Zinc-Carbon General Use Cells', 'بطاريات كربون الزنك للاستخدام العام'),
        tText('Industrial Heavy Duty Power Packs', 'حزم طاقة صناعية شديدة التحمل')
      ]
    },
    {
      id: 'titania',
      name: 'Titania',
      category: 'body-care',
      flag: '🇩🇪',
      country: tText('Germany', 'ألمانيا'),
      color: '#F4A261',
      icon: '🧼',
      logo: '/images/logo7.png',
      desc: tText('Luxury German body care, cosmetic accessories, and self-care tools crafted to highest standards.', 'أدوات عناية بالجسم وإكسسوارات تجميل ألمانية فاخرة مصممة بأعلى معايير الجودة.'),
      story: tText('From professional manicure tools to luxury organic personal care brushes, Titania represents German engineering in self-care, securing deep distribution in hypermarkets and retail cosmetic outlets.', 'من أدوات العناية بالأظافر الاحترافية إلى الفراش التجميلية العضوية، تمثل تيتانيا الهندسة الألمانية في العناية الشخصية الراقية.'),
      products: [
        tText('Self-Care & Foot Care Tools', 'أدوات العناية الشخصية والعناية بالقدم'),
        tText('Professional Styling Brushes', 'فراش شعر تجميلية احترافية'),
        tText('Luxury Organic Bath Sponges', 'إسفنج استحمام عضوي فاخر')
      ]
    },
    {
      id: 'cavells',
      name: 'Cavell’s',
      category: 'health-otc',
      flag: '🇸🇪',
      country: tText('Sweden', 'السويد'),
      color: '#005F73',
      icon: '💊',
      logo: '/images/logo10.png',
      desc: tText('Premium wellness vitamins and health supplements direct from clinical Scandinavian labs.', 'فيتامينات ومكملات صحية متميزة تأتي مباشرة من المختبرات السويدية السريرية.'),
      story: tText('Embodying Scandinavian purity and advanced scientific formulations, Cavell’s delivers supplements built to support active lifestyles, mental wellness, and preventative healthcare standards.', 'تجسد كافيلز النقاء الاسكندنافي والتركيبات العلمية المتقدمة لتدعم أنماط الحياة النشطة والرعاية الصحية الوقائية.'),
      products: [
        tText('Multi-Vitamins & Minerals', 'فيتامينات متعددة ومعادن متكاملة'),
        tText('Organic Supplements & Omega', 'مكملات غذائية عضوية وأوميغا عالية النقاء'),
        tText('Daily Wellness Formulations', 'تركيبات العافية اليومية المتخصصة')
      ]
    },
    {
      id: 'julphar',
      name: 'Julphar',
      category: 'health-otc',
      flag: '🇦🇪',
      country: tText('UAE / GCC', 'الإمارات العربية المتحدة'),
      color: '#0A9396',
      icon: '🏥',
      logo: '/images/logo11.png',
      desc: tText('One of the largest pharmaceutical manufacturers in the GCC, offering trusted OTC and clinical products.', 'واحدة من أكبر الشركات المصنعة للأدوية في الخليج، وتقدم منتجات طبية موثوقة.'),
      story: tText('Julphar stands as a cornerstone of healthcare in the Middle East. Through direct corporate pipelines with pharmacy networks, HSHG United distributes their essential OTC products ensuring continuous availability.', 'تعتبر جلفار ركيزة أساسية للرعاية الصحية في الشرق الأوسط. ومن خلال قنواتنا المباشرة مع الصيدليات، نقوم بتوزيع منتجاتها الطبية الضرورية بكفاءة.'),
      products: [
        tText('Adol Analgesics & Remedies', 'مسكنات أدول الشهيرة وعلاجاتها'),
        tText('Clofen OTC Skin Gel', 'جل كلوفين الطبي لتسكين آلام المفاصل'),
        tText('Julphar Daily Medical Supps', 'مكملات طبية يومية من جلفار')
      ]
    },
    {
      id: 'mebo',
      name: 'Mebo',
      category: 'health-otc',
      flag: '🇦🇪',
      country: tText('UAE / GCC', 'الإمارات العربية المتحدة'),
      color: '#0A9396',
      icon: '🩹',
      logo: '/images/logo8.png',
      desc: tText('The gold standard in clinical burn care and active skin healing ointment, trusted globally.', 'المرهم الموثوق والأول عالمياً لعلاج الحروق وترميم أنسجة الجلد بشكل طبيعي وسريع.'),
      story: tText('Mebo Specialized Ointment utilizes highly effective beta-sitosterol and sesame oil formulations, highly recommended by global clinical dermatologists and distributed extensively in Kuwait.', 'يعتمد مرهم ميبو على تركيبات فعالة للغاية، ويوصى به بشدة أطباء الجلدية والسريريين في جميع أنحاء العالم، ويمثل التغطية الطبية الأوسع في الكويت.'),
      products: [
        tText('Mebo Specialized Burn Ointment', 'مرهم ميبو المتخصص لعلاج الحروق'),
        tText('Mebo Wound & Ulcer Care', 'عناية ميبو بالجروح والقروح'),
        tText('Mebo Soothing Skin Formula', 'تركيبة ميبو المهدئة للبشرة الحساسة')
      ]
    },
    {
      id: 'meboscar',
      name: 'Mebo Scar',
      category: 'health-otc',
      flag: '🇦🇪',
      country: tText('UAE / GCC', 'الإمارات العربية المتحدة'),
      color: '#00B4D8',
      icon: '🩹',
      logo: '/images/logo9.png',
      desc: tText('Advanced skin recovery and scar reduction ointment backed by leading medical trials.', 'مرهم متطور لترميم البشرة والحد من آثار الندبات مدعوم بتجارب سريرية رائدة.'),
      story: tText('Mebo Scar provides specialized regenerative formulations designed for clinical skin recovery, recommended by leading dermatologists and pharmaceutical committees throughout the Gulf region.', 'يقدم ميبو سكار تركيبات متطورة ومصممة لترميم الجلد واستعادة نضارته، ويوصى به كبار أطباء الجلدية وصيادلة الخليج.'),
      products: [
        tText('Scar Treatment Ointment', 'مرهم متطور لعلاج آثار الندبات'),
        tText('Skin Regenerative Gel', 'جل ترميم وتجديد خلايا البشرة')
      ]
    },
    {
      id: 'smart',
      name: 'Smart',
      category: 'shoe-care',
      flag: '🇹🇷',
      country: tText('Turkey', 'تركيا'),
      color: '#2A9D8F',
      icon: '👞',
      logo: '/images/logo12.png',
      desc: tText('Professional shoe care creams and home accessories designed for leather protection and shine.', 'كريمات تلميع الأحذية الاحترافية وإكسسوارات منزلية لحماية الجلود الفاخرة.'),
      story: tText('Smart utilizes advanced silicone-blend formulas that protect and waterproof leather. It serves as a high-volume B2B commodity distributed extensively across supermarket networks and dry cleaners in Kuwait.', 'تستخدم سمارت تركيبات متطورة من السيليكون لحماية الجلود من المياه والأتربة، وهي سلعة رائجة وموزعة على نطاق واسع في الجمعيات والأسواق.'),
      products: [
        tText('Instant Shoe Polish & Creams', 'ملمع وكريمات الأحذية الفورية'),
        tText('Premium Leather Protector Spray', 'بخاخ حماية الجلود الفاخرة'),
        tText('Multi-Surface Cleaner Sponge', 'إسفنج تنظيف وتلميع متعدد الأسطح')
      ]
    },
    {
      id: 'peros',
      name: 'Peros',
      category: 'household',
      flag: '🇹🇷',
      country: tText('Turkey', 'تركيا'),
      color: '#457B9D',
      icon: '🫧',
      logo: '/images/logo13.jpg',
      desc: tText('Highly concentrated detergents and active laundry capsules designed with deep-clean tech.', 'منظفات عالية التركيز وكبسولات غسيل نشطة مصممة بتقنية التنظيف العميق.'),
      story: tText('Peros has revolutionized the detergent category with micro-capsule fragrance technology. Our logistics fleet distributes Peros in bulk volumes directly to Kuwaiti Co-operative Societies and wholesale markets.', 'أحدثت بيروس ثورة في عالم المنظفات بفضل تكنولوجيا الكبسولات العطرية الدقيقة. ويقوم أسطولنا بتوزيعها بكميات ضخمة للجمعيات التعاونية.'),
      products: [
        tText('Concentrated Laundry Detergents', 'منظفات ومساحيق الغسيل المركزة'),
        tText('High-Active Washing Capsules', 'كبسولات غسيل الملابس فائقة النشاط'),
        tText('Fabric Softeners & Cleaners', 'منعمات الأقمشة والمنظفات السائلة')
      ]
    },
    {
      id: 'smartcollection',
      name: 'Smart Collection',
      category: 'household',
      flag: '🇹🇷',
      country: tText('Turkey', 'تركيا'),
      color: '#0A9396',
      icon: '🧽',
      logo: '/images/logo14.png',
      desc: tText('Professional surface cleaners and heavy degreasers for pristine household hygiene.', 'منظفات أسطح متخصصة ومذيبات دهون فائقة القوة لنظافة منزلية لا تشوبها شائبة.'),
      story: tText('Smart Collection brings leading household brands like Asperox and Sparx to Kuwait, distributing highly effective surface degreasers and sanitizing agents to modern retail segments.', 'يقدم سمارت كولكشن علامات تجارية منزلية رائدة مثل أسبروكس وسباركس للكويت، وتقوم بتوزيع مذيبات دهون ومطهرات أسطح عالية الفعالية للجمعيات والهايبرماركتس.'),
      products: [
        tText('Asperox Heavy Degreaser Spray', 'بخاخ أسبروكس لإزالة الدهون المتراكمة'),
        tText('Sparx Multi-Surface Cleaner', 'منظف سباركس المتعدد الأسطح'),
        tText('Premium Glass & Tile Sprays', 'بخاخات تلميع الزجاج والسيراميك')
      ]
    }
  ], [tText]);

  // High-Fidelity represented FMCG Products detailed dataset
  const productsData = useMemo(() => [
    {
      id: 'maeda-basmati',
      name: tText('Maeda Premium Basmati Rice', 'أرز بسمتي مايدا الفاخر'),
      brand: 'Maeda',
      logo: '/images/logo1.png',
      category: 'dry-food',
      icon: '🌾',
      img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600',
      desc: tText('Aromatic long-grain basmati rice representing premium Swedish and GCC standards.', 'أرز بسمتي هندي طويل الحبة عطري فاخر يمثل الجودة السويدية والخليجية.'),
      subtitle: tText('Premium grains & staple distribution', 'توزيع الحبوب والمواد الغذائية الأساسية'),
      details: tText('Cultivated in selected rich fields, this premium rice offers non-sticky, long, fluffy grains perfect for family gourmet meals. Sourced with direct retail dominance in mind.', 'يزرع in حقول غنية مختارة، ويقدم حبات طويلة غير لاصقة ورقيقة، مثالية للوجبات العائلية الفاخرة. مستورد بأعلى معايير الجودة.')
    },
    {
      id: 'segafredo-espresso',
      name: tText('Segafredo Espresso Casa', 'بن إسبريسو كازا من سيغافريدو'),
      brand: 'Segafredo',
      logo: '/images/logo2.png',
      category: 'dry-food',
      icon: '☕',
      img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600',
      desc: tText('Classic Italian ground espresso coffee blend with rich aroma and thick crema.', 'خلطة قهوة إسبريسو إيطالية مطحونة كلاسيكية برائحة غنية ونكهة قوية وكريمة كثيفة.'),
      subtitle: tText('Authentic Italian Espresso Craft', 'صناعة الإسبريسو الإيطالي الأصيل'),
      details: tText('Directly sourced from premium Italian roasting houses, Segafredo Espresso Casa offers a full-bodied taste designed to satisfy premium hotels, cafes, and gourmet retail channels.', 'مستوردة مباشرة من محامص إيطالية فاخرة، تقدم سيغافريدو إسبريسو كازا نكهة قوية وقواماً غنياً يلبي تطلعات الفنادق الراقية ومنافذ التجزئة الفاخرة.')
    },
    {
      id: 'azime-olive-oil',
      name: tText('Azime Virgin Olive Oil', 'زيت زيتون بكر ممتاز من عزيمة'),
      brand: 'Azime',
      logo: '/images/logo3.png',
      category: 'dry-food',
      icon: '🥗',
      img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600',
      desc: tText('Cold-pressed organic Turkish virgin olive oil sourced from natural groves.', 'زيت زيتون تركي بكر ممتاز معصور على البارد من مزارع تركية طبيعية وعضوية.'),
      subtitle: tText('Cold-pressed organic Turkish oils', 'زيوت تركية عضوية معصورة على البارد'),
      details: tText('Processed through organic Turkish channels to serve Modern Trade hypermarkets with authentic, antioxidant-rich, cold-pressed delicacies.', 'معصور على البارد وعضوي بالكامل للحفاظ على مضادات الأكسدة والفوائد الصحية، وهو مثالي للهايبرماركتس الحديثة والجمعيات.')
    },
    {
      id: 'bigen-hair-color',
      name: tText('Bigen Men’s Speedy Color', 'صبغة شعر بيجين السريعة للرجال'),
      brand: 'Bigen',
      logo: '/images/logo4.png',
      category: 'cosmetics',
      icon: '✨',
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600',
      desc: tText('Japanese ammonia-free rapid hair color solution for perfect grey coverage.', 'صبغة شعر يابانية سريعة وخالية من الأمونيا لتغطية الشيب بالكامل بدقة عالية.'),
      subtitle: tText('Japanese advanced hair color tech', 'تكنولوجيا يابانية متطورة لصبغ الشعر'),
      details: tText('The global leader in men’s hair color solutions. Engineered in Japan, this gentle formula colors in 5 minutes with natural extracts, securing leading market share in Kuwait.', 'الرائد عالمياً في صبغ شعر الرجال. تركيبة مطورة في اليابان تصبغ الشعر في ٥ دقائق مع تغذية كاملة بالخلاصة الطبيعية وبدون روائح مزعجة.')
    },
    {
      id: 'kodak-batteries',
      name: tText('Kodak Max Alkaline Power', 'بطاريات كوداك ماكس القلوية'),
      brand: 'Kodak',
      logo: '/images/logo5.png',
      category: 'electronics',
      icon: '🔋',
      img: 'https://images.unsplash.com/photo-1595556628563-0488f41f4f89?q=80&w=600',
      desc: tText('USA engineered heavy-drain industrial alkaline power batteries.', 'بطاريات قلوية (Alkaline) أمريكية الصنع عالية السعة ومصممة للأجهزة المنزلية الثقيلة.'),
      subtitle: tText('High-performance energy solutions', 'حلول طاقة عالية الأداء'),
      details: tText('Kodak is a global household name. HSHG United Trading is proud to serve as their verified national distributor, delivering long-lasting energy cells to Kuwait retail channels.', 'تعتبر كوداك اسماً غنياً عن التعريف عالمياً. وتفخر شركة اتش اس اتش جي المتحدة بالتجارة بأن تكون الموزع الوطني المعتمد لمنتجات الطاقة الموثوقة من كوداك.')
    },
    {
      id: 'titania-hair-brush',
      name: tText('Titania Professional Brush', 'فرشاة شعر احترافية من تيتانيا'),
      brand: 'Titania',
      logo: '/images/logo7.png',
      category: 'body-care',
      icon: '🧼',
      img: 'https://images.unsplash.com/photo-1527799822367-a05eb5741a5e?q=80&w=600',
      desc: tText('German engineered grooming brush for high-shine styling and scalp protection.', 'فرشاة تصفيف شعر احترافية مصممة بأعلى معايير الهندسة الألمانية للعناية واللمعان الطبيعي.'),
      subtitle: tText('German precision personal care tools', 'أدوات عناية شخصية بدقة ألمانية'),
      details: tText('From professional grooming lines, Titania represents German engineering in self-care, securing deep distribution in hypermarkets and premium cosmetic outlets.', 'تمثل تيتانيا الهندسة الألمانية المتقدمة في العناية الشخصية وأدوات التجميل الراقية، مما يضمن تواجداً قوياً في الصيدليات ومراكز التجميل.')
    },
    {
      id: 'cawells-vitamins',
      name: tText('Cavell’s Multivitamins', 'فيتامينات كافيلز المتكاملة'),
      brand: 'Cavell’s',
      logo: '/images/logo10.png',
      category: 'health-otc',
      icon: '🏥',
      img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600',
      desc: tText('Scandinavian vitamins and daily mineral supplements direct from Swedish labs.', 'فيتامينات ومعادن يومية اسكندنافية لدعم النشاط المناعي وحيوية الجسم طوال اليوم.'),
      subtitle: tText('Pure Scandinavian clinical supplements', 'مكملات غذائية اسكندنافية نقية وسريرية'),
      details: tText('Embodying Scandinavian purity and advanced scientific formulations, Cavell’s delivers supplements built to support active lifestyles, immunity, and mental wellness.', 'تجسد كافيلز النقاء الاسكندنافي الفريد والتركيبات العلمية المتقدمة لتدعم أنماط الحياة النشطة والرعاية الصحية الوقائية المتكاملة.')
    },
    {
      id: 'adol-pain-relief',
      name: tText('Adol Paracetamol 500mg', 'أدول مسكن للألم وخافض حرارة'),
      brand: 'Julphar',
      logo: '/images/logo11.png',
      category: 'health-otc',
      icon: '💊',
      img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600',
      desc: tText('Effective pain relief and fever reducer trusted by GCC clinical clinics.', 'مسكن آمن وخافض للحرارة فعال للغاية، وموثوق به سريرياً لدى ملايين العائلات الخليجية.'),
      subtitle: tText('Trusted GCC clinical analgesics', 'مسكنات طبية موثوقة في الخليج'),
      details: tText('One of the most trusted paracetamol remedies produced by Julphar, GCC’s pharmaceutical giant, distributed widely across all Kuwait pharmacy networks.', 'من إنتاج شركة جلفار العملاقة، وهو مسكن لطيف على المعدة ومثالي لتخفيف الصداع وآلام الجسم، متوفر بكثرة في صيدليات ومستشفيات الكويت.')
    },
    {
      id: 'mebo-burn-cream',
      name: tText('Mebo Burn Ointment', 'مرهم ميبو لعلاج الحروق'),
      brand: 'Mebo',
      logo: '/images/logo8.png',
      category: 'health-otc',
      icon: '🩹',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600',
      desc: tText('The globally trusted clinical burn care and active skin healing ointment.', 'مرهم ميبو الطبي المعتمد عالمياً لتسريع التئام الجروح وحروق الجلد المختلفة.'),
      subtitle: tText('Global gold standard burn ointment', 'المعيار الذهبي العالمي لعلاج الحروق'),
      details: tText('Mebo Specialized Burn Ointment provides an optimal physiological environment for skin regeneration. Sourced directly from Julphar and distributed through premium pharmacy networks.', 'يوفر مرهم ميبو بيئة فسيولوجية مثالية لتجديد خلايا الجلد التالفة. مستورد مباشرة من جلفار وموزع على نطاق واسع في صيدليات الكويت.')
    },
    {
      id: 'mebo-scar-cream',
      name: tText('Mebo Scar Recovery Ointment', 'مرهم ميبو سكار لترميم الندبات'),
      brand: 'Mebo Scar',
      logo: '/images/logo9.png',
      category: 'health-otc',
      icon: '🩹',
      img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600',
      desc: tText('Advanced skin recovery cream backed by leading clinical Middle East trials.', 'كريم متطور سريرياً لترميم أنسجة الجلد والحد من آثار الندبات والجروح العميقة.'),
      subtitle: tText('Regenerative scar reduction therapy', 'علاج متطور للحد من آثار الندبات'),
      details: tText('Mebo Scar provides specialized regenerative formulations designed for skin recovery, recommended by leading dermatologists and pharmaceutical committees.', 'يقدم ميبو سكار تركيبات متطورة ومصممة لترميم الجلد واستعادة نضارته، وهو الخيار الأول الموصى به من قبل أطباء الجلدية والتجميل.')
    },
    {
      id: 'smart-shoe-polish',
      name: tText('Smart Instant Shine Polish', 'ملمع الأحذية الفوري من سمارت'),
      brand: 'Smart',
      logo: '/images/logo12.png',
      category: 'shoe-care',
      icon: '👞',
      img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600',
      desc: tText('Instant silicone-blend professional cream designed for premium leather.', 'ملمع وكريم شمعي احترافي بالسيليكون لحماية الجلود الفاخرة وتغذيتها بشكل فوري.'),
      subtitle: tText('Professional leather care solutions', 'حلول احترافية للعناية بالجلود'),
      details: tText('Smart utilizes advanced silicone-blend formulas that protect and waterproof leather. Distributed extensively across Kuwait hypermarkets and dry-cleaning services.', 'تركيبة متطورة تحمي الجلود الفاخرة من الرطوبة والمياه مع إعطاء مظهر متجدد وبريق فوري يبرز جودة وخامة الأحذية والحقائب.')
    },
    {
      id: 'peros-detergent',
      name: tText('Peros Laundry Detergent', 'منظف ومسحوق غسيل بيروس'),
      brand: 'Peros',
      logo: '/images/logo13.jpg',
      category: 'household',
      icon: '🫧',
      img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=600',
      desc: tText('Highly concentrated liquid detergent with advanced micro-capsule perfume.', 'منظف غسيل مركز للغاية معزز بتكنولوجيا كبسولات العطر الدقيقة فائقة الثبات.'),
      subtitle: tText('Highly concentrated deep-clean detergents', 'منظفات غسيل عالية التركيز والفعالية'),
      details: tText('Peros has revolutionized the household laundry category with active oxygen stain lifters. Distributed directly to Kuwaiti Co-operative Societies in bulk volumes.', 'منظف غسيل متكامل ومبتكر يذوب بسرعة في الماء ليقضي على أصعب البقع مع حماية تامة للألياف والألوان وتعطير يدوم لأسابيع.')
    },
    {
      id: 'asperox-degreaser',
      name: tText('Asperox Heavy Degreaser', 'مزيل دهون فائق القوة من أسبروكس'),
      brand: 'Smart Collection',
      logo: '/images/logo14.png',
      category: 'household',
      icon: '🧽',
      img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600',
      desc: tText('Instant heavy grease remover spray for pristine household cleaning.', 'بخاخ أسبروكس فائق القوة لإزالة الدهون والزيوت والاتساخات الصعبة من الأسطح فوراً.'),
      subtitle: tText('Ultra-active multi-purpose degreasers', 'مزيلات دهون فائقة الفعالية للأسطح'),
      details: tText('An instant multi-purpose deep degreaser and surface cleaner with organic ingredients, engineered to clean kitchen grease in less than 5 seconds without leaving residues.', 'أقوى مطهر ومذيب للزيوت والدهون المتراكمة، يقضي على البقع الصعبة فور رشه مما يوفر نظافة مثالية وبريقاً براقاً للأسطح المنزلية.')
    },
    {
      id: 'sparx-cleaner',
      name: tText('Sparx Surface Cleaner', 'منظف ومطهر الأسطح من سباركس'),
      brand: 'Smart Collection',
      logo: '/images/logo15.png',
      category: 'household',
      icon: '🧼',
      img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=600',
      desc: tText('Professional surface sanitizing and glass cleaner with refreshing fragrance.', 'مطهر ومنظف أسطح احترافي متعدد الأغراض يمنح لمعاناً فائقاً وعطراً منعشاً يدوم.'),
      subtitle: tText('Professional surface sanitation products', 'مطهرات ومعقمات أسطح احترافية'),
      details: tText('Sparx represents the absolute standard in multi-surface cleanliness, disinfecting and polishing wood, tile, and marble surfaces instantly while leaving a refreshing scent.', 'يقدم سباركس حلاً متكاملاً لتنظيف وتطهير مختلف الأسطح والزجاج وتلميعها، مع القضاء التام على الجراثيم والأتربة وتعطير المنزل.')
    }
  ], [tText]);

  // Compute dynamic filtered products using react useMemo
  const filteredProducts = useMemo(() => {
    return productsData.filter(prod => {
      if (activeTab === 'all') return true;
      return prod.category.toLowerCase() === activeTab.toLowerCase();
    });
  }, [productsData, activeTab]);

  // Find currently selected brand story object for details modal
  const selectedBrandDetails = useMemo(() => {
    if (!selectedProduct) return null;
    return brandsData.find(b => b.name.toLowerCase() === selectedProduct.brand.toLowerCase());
  }, [selectedProduct, brandsData]);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Product Visual Showcase | HSHG United Trading', 'معرض المنتجات المرئي | شركة اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Explore HSHG United's premium brand portfolio across Kuwait, representing Maeda, Segafredo, Julphar, Bigen, and Kodak.", "استكشف محفظة العلامات التجارية لشركة اتش اس اتش جي المتحدة في الكويت، والتي تمثل مايدا، سيغافريدو، جلفار، بيجين، وكوداك.")} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      {/* LUXURIOUS CINEMATIC HERO SECTION */}
      <section className="section-padding brands-page-hero" style={{ 
        position: 'relative',
        backgroundColor: 'var(--color-bg-dark)', 
        color: 'var(--color-white)', 
        paddingTop: '13rem', 
        paddingBottom: '8rem',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Soft Radial Blue Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(23, 135, 200, 0.22) 0%, transparent 60%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        {/* Light World Map Texture in Background */}
        <div style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' fill='none' stroke='rgba(255,255,255,0.02)' strokeWidth='1'%3E%3Cpath d='M150 150 C 300 80, 500 20, 780 220 M 780 220 L 520 280 C 420 300, 320 260, 150 150' style='stroke-dasharray: 5 5; fill: rgba(255,255,255,0.003)'/%3E%3Ccircle cx='780' cy='220' r='6' fill='%231787C8' opacity='0.2'/%3E%3Ccircle cx='150' cy='150' r='4' fill='rgba(255,255,255,0.1)'/%3E%3Ccircle cx='520' cy='280' r='4' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        {/* Floating Gradient Shapes */}
        <div className="brand-floating-shape" style={{
          position: 'absolute', top: '15%', left: '8%',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(23, 135, 200, 0.15) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }} />
        <div className="brand-floating-shape" style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10, 147, 150, 0.12) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
          filter: 'blur(40px)'
        }} />

        {/* Thin animated business-style lines */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)',
          zIndex: 2
        }} />
        <div className="hero-accent-line-vertical" style={{
          position: 'absolute',
          left: '15%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)',
          zIndex: 1
        }} />
        <div className="hero-accent-line-vertical" style={{
          position: 'absolute',
          right: '15%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
          <div className="brands-reveal-fade text-center">
            
            {/* Top Premium Badge */}
            <div style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <span className="premium-top-badge" style={{ 
                color: 'var(--color-primary)', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                fontSize: '0.8rem', 
                letterSpacing: '4px', 
                display: 'block', 
                background: 'rgba(23, 135, 200, 0.12)',
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                border: '1px solid rgba(23, 135, 200, 0.25)',
                boxShadow: '0 0 25px rgba(23, 135, 200, 0.2)'
              }}>
                {tText('GLOBAL BRAND PORTFOLIO', 'محفظة العلامات التجارية العالمية')}
              </span>
            </div>

            {/* Redesigned Poppins Header */}
            <h1 style={{ 
              color: 'var(--color-white)', 
              fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)', 
              marginBottom: '1.5rem', 
              fontWeight: 800,
              lineHeight: 1.1,
              fontFamily: 'Poppins, sans-serif'
            }}>
              {tText('Product ', 'المنتجات ')}
              <span className="premium-gradient-text">
                {tText('Visual Showcase', 'المعرض المرئي')}
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{ 
              maxWidth: '850px', 
              margin: '0 auto 3rem', 
              color: 'rgba(255,255,255,0.85)', 
              fontSize: '1.25rem', 
              lineHeight: 1.8,
              fontFamily: 'Inter, sans-serif'
            }}>
              {tText('A visual preview of represented food, health, cosmetics, household, and consumer brands distributed across Kuwait.', 'عرض مرئي للماركات الغذائية والصحية والتجميلية والمنزلية والاستهلاكية الموزعة في جميع أنحاء الكويت.')}
            </p>
          </div>
        </div>
      </section>

      {/* BACKGROUND DECORATIONS FOR MAIN CONTENT AREA */}
      <div style={{
        background: 'linear-gradient(to bottom, #f7fafc 0%, #eef3f8 100%)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {/* Soft abstract curved waves */}
        <div style={{
          position: 'absolute', top: '5%', left: '-10%', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(23, 135, 200, 0.04) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '-10%', width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(10, 147, 150, 0.03) 0%, transparent 65%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        {/* 1. PREMIUM STICKY BRAND FILTER SECTION */}
        <section className="sticky-brand-filter-bar" style={{ 
          position: 'sticky', 
          top: '70px', 
          zIndex: 100, 
          backgroundColor: 'rgba(247, 249, 251, 0.85)', 
          backdropFilter: 'blur(20px)', 
          WebkitBackdropFilter: 'blur(20px)',
          padding: '1.2rem 0', 
          borderBottom: '1px solid rgba(15, 45, 64, 0.05)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.01)'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            
            {/* Horizontal Scroll Pill switcher */}
            <div className="filter-scroll-wrapper" style={{ 
              display: 'flex', 
              gap: '0.8rem', 
              overflowX: 'auto',
              padding: '6px',
              maxWidth: '100%',
              scrollbarWidth: 'none',
              background: 'rgba(255, 255, 255, 0.45)',
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.01)'
            }}>
              {[
                { id: 'all', label: tText('All Products', 'جميع المنتجات') },
                { id: 'dry-food', label: tText('Dry Food', 'المواد الغذائية') },
                { id: 'cosmetics', label: tText('Cosmetics', 'التجميل') },
                { id: 'electronics', label: tText('Electronics', 'الإلكترونيات') },
                { id: 'body-care', label: tText('Body Care', 'العناية بالجسم') },
                { id: 'health-otc', label: tText('Health / OTC', 'الرعاية الصحية') },
                { id: 'shoe-care', label: tText('Shoe Care', 'العناية بالأحذية') },
                { id: 'household', label: tText('Household', 'المستلزمات المنزلية') }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`glass-filter-pill ${activeTab === tab.id ? 'active' : ''}`}
                  style={{
                    padding: '0.8rem 2rem',
                    borderRadius: '50px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    fontFamily: 'Poppins, sans-serif',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    border: '1.5px solid transparent',
                    background: activeTab === tab.id ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-steel-blue) 100%)' : 'transparent',
                    color: activeTab === tab.id ? '#fff' : 'var(--color-bg-dark)',
                    boxShadow: activeTab === tab.id ? '0 10px 25px rgba(23, 135, 200, 0.35)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* 3. PREMIUM REDESIGNED PRODUCT SHOWCASE GRID */}
        <section className="section-padding" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '6rem' }}>
          <div className="container">
            <div className="product-showcase-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.5rem',
              alignItems: 'stretch'
            }}>
              {filteredProducts.map((prod) => (
                <div 
                  key={prod.id}
                  className="showcase-card-grid-anim premium-product-showcase-card hover-glow-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.55)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '28px',
                    padding: '1.8rem',
                    boxShadow: '0 20px 45px rgba(15, 45, 64, 0.03), 0 1px 3px rgba(0, 0, 0, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedProduct(prod)}
                >
                  {/* Sweep light effect (Shine) */}
                  <div className="card-shine-sweep" />

                  <div>
                    {/* Top row: circular brand logo watermarked & category badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                      <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(15, 45, 64, 0.08)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                        overflow: 'hidden',
                        padding: '0.2rem'
                      }}>
                        <img 
                          src={prod.logo} 
                          alt={prod.brand} 
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        />
                      </div>

                      {/* Styled Category Badge */}
                      <span className={`prod-cat-badge badge-${prod.category.toLowerCase()}`} style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        letterSpacing: '1px',
                        fontFamily: 'Poppins, sans-serif'
                      }}>
                        {prod.category === 'dry-food' ? tText('Dry Food', 'أغذية جافة') :
                         prod.category === 'cosmetics' ? tText('Cosmetics', 'تجميل') :
                         prod.category === 'electronics' ? tText('Electronics', 'إلكترونيات') :
                         prod.category === 'body-care' ? tText('Body Care', 'عناية بالجسم') :
                         prod.category === 'health-otc' ? tText('Health / OTC', 'رعاية صحية') :
                         prod.category === 'shoe-care' ? tText('Shoe Care', 'عناية بالأحذية') :
                         prod.category === 'household' ? tText('Household', 'منزلي') : prod.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Large centered product image with glow hover */}
                    <div style={{ 
                      height: '220px', 
                      borderRadius: '20px', 
                      overflow: 'hidden', 
                      background: 'rgba(15, 45, 64, 0.02)',
                      marginBottom: '1.5rem',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={prod.img} 
                        alt={prod.name} 
                        loading="lazy"
                        className="product-grid-main-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(7, 27, 42, 0.25) 100%)'
                      }} />
                    </div>

                    {/* Brand Name Small text */}
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.4rem',
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      {prod.brand}
                    </span>

                    {/* Product Name */}
                    <h3 style={{
                      margin: '0 0 0.4rem 0',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--color-bg-dark)',
                      fontFamily: 'Poppins, sans-serif',
                      lineHeight: 1.3
                    }}>
                      {prod.name}
                    </h3>

                    {/* Small Professional Subtitle */}
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--color-steel-blue)',
                      display: 'block',
                      marginBottom: '0.8rem',
                      fontFamily: 'Inter, sans-serif',
                      fontStyle: 'italic'
                    }}>
                      {prod.subtitle}
                    </span>

                    {/* Small description */}
                    <p style={{
                      margin: '0 0 1.5rem 0',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      color: 'var(--color-text-muted)',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      {prod.desc}
                    </p>
                  </div>

                  {/* View Details Button at Bottom with animated slide-in */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(15, 45, 64, 0.05)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '1rem' }}>{prod.icon}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-steel-blue)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        {prod.category === 'dry-food' ? tText('FMCG Food', 'سلع غذائية') : tText('Represented Brand', 'ماركة ممثلة')}
                      </span>
                    </div>

                    <button 
                      className="premium-arrow-button"
                      style={{
                        padding: '0.55rem 1.2rem',
                        background: 'transparent',
                        border: '1.5px solid rgba(23, 135, 200, 0.15)',
                        borderRadius: '50px',
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        fontFamily: 'Poppins, sans-serif',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(prod);
                      }}
                    >
                      {tText('View Details', 'عرض التفاصيل')}
                      <span style={{ transition: 'transform 0.3s ease' }} className="arrow-span">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND LOGO SHOWCASE CAROUSEL MOUNTED BELOW THE PRODUCT GRID */}
        <BrandCarousel tText={tText} isAr={isAr} />

        {/* 2. PREMIUM B2B STATS GRID */}
        <section className="section-padding" style={{ 
          position: 'relative', 
          zIndex: 1, 
          paddingTop: '3rem', 
          paddingBottom: '6rem',
          borderTop: '1px solid rgba(15, 45, 64, 0.04)'
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center'
            }} className="brands-reveal-fade">
              <StatCounterCard icon="🤝" target="50" label={tText('Global Brands Represented', 'علامة تجارية عالمية')} suffix="+" />
              <StatCounterCard icon="📦" target="1000" label={tText('Retail Products Managed', 'منتج تجزئة نشط')} suffix="+" />
              <StatCounterCard icon="🇰🇼" target="100" label={tText('Trusted Across Kuwait Network', 'تغطية كاملة في الكويت')} suffix="%" />
              <StatCounterCard icon="⚡" target="24" label={tText('Hour Delivery Response', 'استجابة توزيع متواصلة')} suffix="h" />
            </div>
          </div>
        </section>

        {/* 5. DISTRIBUTION CHANNEL SECTION (MARKET PRESENCE) */}
        <section className="section-padding" style={{ position: 'relative', zIndex: 1, paddingBottom: '8rem' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '4.5rem' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', fontFamily: 'Poppins, sans-serif' }}>
                {tText('RETAIL PENETRATION', 'تغطية منافذ التجزئة')}
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginTop: '0.5rem', fontFamily: 'Poppins, sans-serif' }}>
                {tText('Trusted Across Kuwait’s Leading Retail Networks', 'شريك موثوق لدى كبرى شبكات التجزئة في الكويت')}
              </h2>
              <p style={{ maxWidth: '700px', margin: '0.8rem auto 0', color: 'var(--color-text-muted)', fontFamily: 'Inter, sans-serif', fontSize: '1.05rem' }}>
                {tText('HSHG United supplies daily commodities to Kuwait’s premium hypermarkets, modern convenience chains, and neighborhood Co-operative Societies.', 'تقوم شركة اتش اس اتش جي المتحدة بتوريد السلع اليومية لكبرى الهايبرماركتس وسلاسل البقالات الحديثة والجمعيات التعاونية في الكويت.')}
              </p>
            </div>

            {/* Market Presence Split Grid (Left Info/Vector Map, Right Retailers Lists) */}
            <div className="market-presence-split" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '4.5rem',
              alignItems: 'center'
            }}>
              
              {/* Left Side: Map graphic representation & highlights */}
              <div style={{ textAlign: 'initial' }} className="brands-reveal-fade">
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.2rem', fontFamily: 'Poppins, sans-serif' }}>
                  {tText('Kuwait Market Domination', 'الهيمنة على السوق الكويتي')}
                </h3>
                <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem', fontFamily: 'Inter, sans-serif' }}>
                  {tText('Our fleet deployment and direct store delivery (DSD) model secure product placement across the entire geography of Kuwait. From Jahra to Fahaheel, we keep shelves stocked.', 'يضمن نموذج التوصيل المباشر للمتاجر وأسطولنا المخصص توزيع المنتجات جغرافياً في جميع أنحاء الكويت، من الجهراء إلى الفحيحيل.')}
                </p>

                {/* Graphic Vector Representation of Kuwait coverage map */}
                <div style={{
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.45)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  padding: '2.5rem',
                  borderRadius: '24px',
                  textAlign: 'center',
                  boxShadow: '0 20px 40px rgba(15, 45, 64, 0.02)'
                }}>
                  
                  {/* SVG representation of Map overlay radar */}
                  <div style={{ display: 'inline-flex', justifyContent: 'center', position: 'relative' }}>
                    <svg width="180" height="180" viewBox="0 0 100 100" fill="none" stroke="var(--color-primary)" strokeWidth="1.2">
                      <polygon points="40,10 70,20 85,55 70,85 50,90 25,75 20,40" style={{ fill: 'rgba(23, 135, 200, 0.05)', strokeDasharray: '4 2' }} />
                      <circle cx="50" cy="50" r="3" fill="var(--color-primary)" />
                      {/* Concentric expanding ripples representing distribution dispatch points */}
                      <circle cx="50" cy="50" r="15" style={{ strokeDasharray: '2 2', animation: 'radarPulse 3s infinite linear' }} />
                      <circle cx="50" cy="50" r="30" style={{ strokeDasharray: '4 4', animation: 'radarPulse 4s infinite linear' }} />
                      <circle cx="35" cy="40" r="1.5" fill="var(--color-steel-blue)" />
                      <circle cx="65" cy="45" r="1.5" fill="var(--color-steel-blue)" />
                      <circle cx="55" cy="70" r="1.5" fill="var(--color-steel-blue)" />
                    </svg>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginTop: '1.8rem', textAlign: 'initial' }}>
                    <div>
                      <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'Poppins, sans-serif' }}>6+</span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)', fontFamily: 'Inter, sans-serif' }}>{tText('Governorates Covered', 'محافظات مغطاة بالكامل')}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'Poppins, sans-serif' }}>100%</span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)', fontFamily: 'Inter, sans-serif' }}>{tText('Direct Hypermarkets', 'هايبرماركتس مباشرة')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Animated Lists of actual Retailers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="brands-reveal-fade">
                
                {/* Category 1: Modern Trade */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.45)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  padding: '2.2rem',
                  borderRadius: '20px',
                  textAlign: 'initial',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.01)'
                }}>
                  <h4 style={{ margin: '0 0 1.2rem 0', color: 'var(--color-primary)', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Poppins, sans-serif' }}>
                    {tText('Modern Trade Hypermarkets', 'التجارة الحديثة والهايبرماركت')}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {[
                      'Lulu', 'Sultan Center', 'HyperMax', 'City Star', 'City Hyper Market', 
                      'Dukkan', 'Oncost', 'Grand Hyper', 'Nesto', 'Ramez', 'Mark & Save', 
                      'Monoprix', 'Meem Market'
                    ].map((store, sIdx) => (
                      <span key={sIdx} style={{
                        padding: '0.45rem 1rem',
                        background: 'var(--color-white)',
                        border: '1px solid rgba(15, 45, 64, 0.05)',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--color-bg-dark)',
                        fontFamily: 'Inter, sans-serif',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.01)'
                      }}>
                        {store}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category 2: Online & Convenience Stores */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.45)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  padding: '2.2rem',
                  borderRadius: '20px',
                  textAlign: 'initial',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.01)'
                }}>
                  <h4 style={{ margin: '0 0 1.2rem 0', color: 'var(--color-primary)', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Poppins, sans-serif' }}>
                    {tText('Online & Convenience Stores', 'المنصات الرقمية والتسوق السريع')}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {[
                      'Trolley', 'Drops', 'Jameia', 'Taw9eel', 'Ninja'
                    ].map((app, aIdx) => (
                      <span key={aIdx} style={{
                        padding: '0.45rem 1rem',
                        background: 'var(--color-white)',
                        border: '1px solid rgba(15, 45, 64, 0.05)',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--color-bg-dark)',
                        fontFamily: 'Inter, sans-serif',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.01)'
                      }}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category 3: Co-operative Societies */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.45)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  padding: '2.2rem',
                  borderRadius: '20px',
                  textAlign: 'initial',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.01)'
                }}>
                  <h4 style={{ margin: '0 0 1rem 0', color: 'var(--color-primary)', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Poppins, sans-serif' }}>
                    {tText('Kuwaiti Co-operative Societies', 'الجمعيات التعاونية الكويتية')}
                  </h4>
                  <p style={{ margin: '0 0 1.2rem 0', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>
                    {tText('Full billing pipelines and shelf allocation inside every major Kuwaiti cooperative society.', 'توزيع كامل وتخصيص للأرفف والجمعيات في جميع المحافظات.')}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {[
                      tText('Rawda Co-op', 'جمعية الروضة'),
                      tText('Nuzha Co-op', 'جمعية النزهة'),
                      tText('Mishref Co-op', 'جمعية مشرف'),
                      tText('Salmiya Co-op', 'جمعية السالمية'),
                      tText('Shamiya Co-op', 'جمعية الشامية'),
                      tText('Jabriya Co-op', 'جمعية الجابرية'),
                      tText('Kaifan Co-op', 'جمعية كيفان')
                    ].map((coop, cIdx) => (
                      <span key={cIdx} style={{
                        padding: '0.45rem 1rem',
                        background: 'rgba(23, 135, 200, 0.06)',
                        border: '1px solid rgba(23, 135, 200, 0.1)',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--color-primary)',
                        fontFamily: 'Inter, sans-serif'
                      }}>
                        {coop}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </div>

      {/* 6. BRAND STORY SECTION (WITH WORLD MAP BRIDGE) */}
      <section className="section-padding" style={{ 
        backgroundColor: 'var(--color-bg-dark)', 
        color: 'var(--color-white)',
        position: 'relative',
        overflow: 'hidden',
        padding: '7rem 0'
      }}>
        {/* World Map vector overlay path */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' fill='none' stroke='rgba(255,255,255,0.03)' strokeWidth='1'%3E%3Cpath d='M150 150 C 300 80, 500 20, 780 220 M 780 220 L 520 280 C 420 300, 320 260, 150 150' style='stroke-dasharray: 5 5; fill: rgba(255,255,255,0.005)'/%3E%3Ccircle cx='780' cy='220' r='6' fill='%231787C8'/%3E%3Ccircle cx='150' cy='150' r='4' fill='rgba(255,255,255,0.3)'/%3E%3Ccircle cx='520' cy='280' r='4' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          opacity: 0.8,
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="brands-reveal-fade text-center" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>
              {tText('STRATEGIC ALIGNMENTS', 'التحالفات الاستراتيجية')}
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-white)', marginBottom: '1.8rem', fontFamily: 'Poppins, sans-serif' }}>
              {tText('Built Through Strategic Partnerships', 'بُنيت من خلال الشراكات الاستراتيجية')}
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'Inter, sans-serif' }}>
              {tText('HSHG United Trading Company collaborates with globally recognized brands to deliver quality products across Kuwait through strong retail execution, modern logistics, and market expertise.', 'تتعاون شركة اتش اس اتش جي المتحدة للتجارة مع علامات تجارية مرموقة عالمياً لتقديم منتجات عالية الجودة في جميع أنحاء الكويت من خلال التنفيذ القوي في السوق، والخدمات اللوجستية الحديثة، والخبرة الواسعة.')}
            </p>
          </div>
        </div>
      </section>

      {/* 7. PREMIUM B2B CTA SECTION */}
      <section className="section-padding" style={{ 
        position: 'relative',
        background: 'radial-gradient(circle at 10% 20%, rgba(23, 135, 200, 0.05) 0%, transparent 40%), var(--color-bg-light)',
        borderTop: '1px solid rgba(15, 45, 64, 0.04)',
        overflow: 'hidden',
        padding: '8rem 0'
      }}>
        {/* Curved blue waves bg for CTA */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(23, 135, 200, 0.04) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="brands-reveal-fade text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.2rem', fontFamily: 'Poppins, sans-serif' }}>
              {tText('Looking to Partner With Us?', 'هل تبحث عن الشراكة معنا؟')}
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2.8rem', fontFamily: 'Inter, sans-serif' }}>
              {tText('Expand your brand presence across Kuwait through our trusted distribution network.', 'وسع نطاق حضور علامتك التجارية في السوق الكويتي من خلال شبكتنا اللوجستية وتغطيتنا للتجزئة الموثوقة.')}
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="premium-corporate-button glow-glow" style={{
                padding: '1.1rem 2.2rem',
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-steel-blue) 100%)',
                color: '#fff',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 8px 24px rgba(23, 135, 200, 0.25)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                textDecoration: 'none'
              }}>
                {tText('Become a Partner', 'كن شريكاً لنا')}
              </Link>
              <Link to="/contact" className="premium-corporate-outline-button" style={{
                padding: '1.1rem 2.2rem',
                background: 'rgba(255,255,255,0.85)',
                border: '1.5px solid var(--color-bg-dark)',
                color: 'var(--color-bg-dark)',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                fontFamily: 'Poppins, sans-serif',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                textDecoration: 'none'
              }}>
                {tText('Contact Our Team', 'اتصل بفريقنا')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURIOUS INTERACTIVE OVERLAY BRAND DETAIL MODAL */}
      {selectedProduct && selectedBrandDetails && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(7, 27, 42, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          animation: 'modalFadeIn 0.4s ease-out'
        }} onClick={() => setSelectedProduct(null)}>
          
          {/* Modal Container */}
          <div style={{
            background: 'var(--color-white)',
            borderRadius: '28px',
            maxWidth: '950px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            animation: 'modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            direction: isAr ? 'rtl' : 'ltr',
            textAlign: 'initial'
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: isAr ? 'auto' : '1.5rem',
                left: isAr ? '1.5rem' : 'auto',
                background: 'rgba(15, 45, 64, 0.05)',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-bg-dark)',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              className="modal-close-hover"
            >
              ✕
            </button>

            {/* Left side: Premium image and overlays */}
            <div style={{
              position: 'relative',
              minHeight: '350px',
              height: '100%',
              overflow: 'hidden',
              background: 'var(--color-bg-dark)'
            }} className="modal-img-container">
              
              {/* Product background image */}
              <img 
                src={selectedProduct.img} 
                alt={selectedProduct.name} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.35,
                  filter: 'blur(3px)'
                }}
              />

              {/* Central Focused product visual */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                zIndex: 2
              }}>
                <img 
                  src={selectedProduct.img} 
                  alt={selectedProduct.name} 
                  style={{
                    maxHeight: '260px',
                    maxWidth: '85%',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                    border: '3px solid rgba(255,255,255,0.15)'
                  }}
                />
              </div>

              {/* Solid gradient mesh overlay */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: `linear-gradient(135deg, ${selectedBrandDetails.color}35 0%, rgba(7, 27, 42, 0.96) 100%)`,
                zIndex: 1
              }} />

              {/* Watermark circular brand logo overlay */}
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: isAr ? 'auto' : '2rem',
                right: isAr ? '2rem' : 'auto',
                background: '#fff',
                padding: '0.6rem',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                zIndex: 3
              }}>
                <img 
                  src={selectedProduct.logo} 
                  alt={selectedProduct.brand} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Right side: Detailed Brand & Product text content */}
            <div style={{ padding: '3.5rem 3rem 3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                <span className={`prod-cat-badge badge-${selectedProduct.category.toLowerCase()}`} style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.4rem 1.1rem',
                  borderRadius: '50px',
                  letterSpacing: '1px',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {selectedProduct.category === 'dry-food' ? tText('Dry Food', 'أغذية جافة') :
                   selectedProduct.category === 'cosmetics' ? tText('Cosmetics', 'تجميل') :
                   selectedProduct.category === 'electronics' ? tText('Electronics', 'إلكترونيات') :
                   selectedProduct.category === 'body-care' ? tText('Body Care', 'العناية بالجسم') :
                   selectedProduct.category === 'health-otc' ? tText('Health / OTC', 'الرعاية الصحية') :
                   selectedProduct.category === 'shoe-care' ? tText('Shoe Care', 'العناية بالأحذية') :
                   selectedProduct.category === 'household' ? tText('Household', 'منزلي') : selectedProduct.category.toUpperCase()}
                </span>

                {/* Country Flag and Origin */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(15, 45, 64, 0.04)', padding: '0.4rem 1rem', borderRadius: '50px' }}>
                  <span style={{ fontSize: '1.1rem' }}>{selectedBrandDetails.flag}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'Poppins, sans-serif' }}>
                    {tText('Origin:', 'المنشأ:') } {selectedBrandDetails.country}
                  </span>
                </div>
              </div>

              {/* Product and Brand Name */}
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: selectedBrandDetails.color,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {selectedProduct.brand} {tText('Representation', 'تمثيل رسمي')}
              </span>

              <h2 style={{
                fontSize: '2rem',
                fontWeight: 900,
                color: 'var(--color-bg-dark)',
                margin: '0 0 1rem',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1.2
              }}>
                {selectedProduct.name}
              </h2>

              {/* Long Product Details */}
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--color-text-muted)',
                marginBottom: '2rem',
                fontFamily: 'Inter, sans-serif'
              }}>
                {selectedProduct.details}
              </p>

              {/* Brand Story blockquote with brand color */}
              <div style={{
                borderInlineStart: `4px solid ${selectedBrandDetails.color}`,
                paddingInlineStart: '1.2rem',
                margin: '0 0 2rem 0',
                backgroundColor: 'rgba(15, 45, 64, 0.02)',
                padding: '1rem 1.2rem',
                borderRadius: '0 12px 12px 0'
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  display: 'block',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.3rem',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {tText('Brand Strategic Vision', 'الرؤية الاستراتيجية للعلامة')}
                </span>
                <p style={{
                  margin: 0,
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {selectedBrandDetails.story}
                </p>
              </div>

              {/* Product Core Portfolio lists */}
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                color: 'var(--color-bg-dark)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: '0 0 0.8rem 0',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {tText('Core Represented Portfolio', 'المحفظة الأساسية الممثلة في الكويت')}
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.6rem 1.5rem',
                marginBottom: '2.5rem'
              }}>
                {selectedBrandDetails.products.map((pName, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: selectedBrandDetails.color,
                      flexShrink: 0
                    }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-muted)', fontFamily: 'Inter, sans-serif' }}>
                      {pName}
                    </span>
                  </div>
                ))}
              </div>

              {/* B2B Inquire button */}
              <Link
                to="/contact"
                onClick={() => setSelectedProduct(null)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-steel-blue) 100%)',
                  color: '#fff',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 8px 20px rgba(23, 135, 200, 0.25)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                className="modal-cta-btn"
              >
                {tText('Partner Inquiry / Order', 'طلب شراكة / استفسار تجاري')}
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>
      )}

      {/* CARD AND PAGE CUSTOM ANIMATION INJECTOR */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Typography overrides */
        .premium-top-badge, 
        .premium-stat-card h3,
        .premium-product-showcase-card h3,
        .premium-product-showcase-card span,
        .premium-arrow-button,
        .premium-corporate-button,
        .premium-corporate-outline-button,
        .premium-gradient-text,
        .modal-cta-btn,
        .glass-filter-pill {
          font-family: 'Poppins', sans-serif !important;
        }
        
        .premium-gradient-text {
          background: linear-gradient(135deg, var(--color-primary) 0%, #00B4D8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        /* Glass pill filter */
        .glass-filter-pill:hover {
          background: rgba(15, 45, 64, 0.04) !important;
          border-color: rgba(15, 45, 64, 0.15) !important;
        }
        .glass-filter-pill.active:hover {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-steel-blue) 100%) !important;
          border-color: transparent !important;
        }

        /* Premium stat card styling */
        .premium-stat-card:hover {
          border-color: rgba(23, 135, 200, 0.3) !important;
          box-shadow: 0 30px 60px rgba(15, 45, 64, 0.08) !important;
        }

        /* Responsive grid showcase card */
        .premium-product-showcase-card:hover {
          transform: translateY(-10px) scale(1.015);
          border-color: rgba(23, 135, 200, 0.28) !important;
          box-shadow: 0 30px 60px rgba(15, 45, 64, 0.08), 0 5px 15px rgba(23, 135, 200, 0.03) !important;
        }
        .premium-product-showcase-card:hover .product-grid-main-img {
          transform: scale(1.06);
        }
        .premium-product-showcase-card:hover .premium-arrow-button {
          background: var(--color-primary) !important;
          color: #fff !important;
          border-color: transparent !important;
          box-shadow: 0 6px 15px rgba(23, 135, 200, 0.25);
        }
        .premium-product-showcase-card:hover .premium-arrow-button .arrow-span {
          transform: translateX(4px);
        }

        /* Shine sweep reflection effect */
        .card-shine-sweep {
          position: absolute;
          top: 0; left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
          transform: skewX(-25deg);
          transition: none;
          z-index: 5;
          pointer-events: none;
        }
        .premium-product-showcase-card:hover .card-shine-sweep {
          left: 150%;
          transition: all 0.9s ease-in-out;
        }

        /* Category badge theme styling */
        .badge-dry-food {
          color: #E4572E !important;
          background: rgba(228, 87, 46, 0.08) !important;
        }
        .badge-cosmetics {
          color: #D90429 !important;
          background: rgba(217, 4, 41, 0.08) !important;
        }
        .badge-electronics {
          color: #E76F51 !important;
          background: rgba(231, 111, 81, 0.08) !important;
        }
        .badge-body-care {
          color: #E9C46A !important;
          background: rgba(233, 196, 106, 0.08) !important;
        }
        .badge-health-otc {
          color: #0A9396 !important;
          background: rgba(10, 147, 150, 0.08) !important;
        }
        .badge-shoe-care {
          color: #2A9D8F !important;
          background: rgba(42, 157, 143, 0.08) !important;
        }
        .badge-household {
          color: #457B9D !important;
          background: rgba(69, 123, 157, 0.08) !important;
        }

        /* B2B CTA Button styling */
        .premium-corporate-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(23, 135, 200, 0.45) !important;
        }
        .premium-corporate-outline-button:hover {
          background: var(--color-bg-dark) !important;
          color: #fff !important;
          transform: translateY(-3px);
        }

        /* Modal animations */
        @keyframes modalFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes modalSlideUp {
          0% { transform: translateY(30px) scale(0.98); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .modal-close-hover:hover {
          background: rgba(15, 45, 64, 0.1) !important;
          transform: scale(1.05);
        }
        .modal-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(23, 135, 200, 0.45) !important;
        }

        @keyframes radarPulse {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        
        .filter-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        /* Explicit 3, 2, 1 responsive grid override rules */
        .product-showcase-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 2.5rem !important;
        }
        
        @media (max-width: 992px) {
          .product-showcase-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .market-presence-split {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .modal-img-container {
            min-height: 250px !important;
          }
        }

        @media (max-width: 768px) {
          .modal-img-container {
            height: 240px !important;
          }
          .modal-close-hover {
            top: 1rem !important;
            right: 1rem !important;
            background: #fff !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
          }
          .premium-stat-card {
            flex: 1 1 calc(50% - 1rem) !important;
          }
        }
        
        @media (max-width: 576px) {
          .product-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .premium-stat-card {
            flex: 1 1 100% !important;
          }
        }
      `}} />
    </>
  );
}

export default Brands;
