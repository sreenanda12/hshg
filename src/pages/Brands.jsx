import { useState, useEffect, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useTranslate } from '../utils/translate';

// High-Precision Intersection Observed React Counter for Hero Section
const HeroStatCounter = ({ target, label, suffix = "" }) => {
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
    <div ref={elementRef} className="hero-counter-box" style={{
      textAlign: 'center',
      padding: '1.5rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderRadius: '16px',
      minWidth: '160px',
      willChange: 'transform, opacity'
    }}>
      <h3 style={{ margin: 0, fontSize: '2.2rem', color: 'var(--color-primary)', fontWeight: 800 }}>
        {count.toLocaleString()}{suffix}
      </h3>
      <span style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.4rem', fontWeight: 600 }}>
        {label}
      </span>
    </div>
  );
};

function Brands() {
  const { tText, isAr } = useTranslate();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Apple-style entrance scroll reveal animations
    gsap.fromTo('.brands-reveal-fade',
      { opacity: 0, y: 45 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    );

    // Subtle floating particles animation
    gsap.fromTo('.brand-floating-particle',
      { y: 'random(-10, 10)', x: 'random(-10, 10)', opacity: 'random(0.3, 0.6)' },
      { 
        y: 'random(-60, 60)', 
        x: 'random(-30, 30)', 
        opacity: 'random(0.5, 0.9)', 
        duration: 'random(8, 14)', 
        repeat: -1, 
        yoyo: true, 
        ease: 'sine.inOut',
        stagger: 0.1
      }
    );
  }, []);

  // Filter content trigger smooth fade scaling
  useEffect(() => {
    gsap.fromTo('.showcase-card-anim',
      { opacity: 0, scale: 0.96, y: 25 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
    );
  }, [activeTab]);

  // Brand detailed structured dataset
  const brandsData = useMemo(() => [
    {
      id: 'maeda',
      name: 'Maeda',
      category: 'food',
      flag: '🇸🇪',
      country: tText('Sweden / GCC', 'السويد / الخليج'),
      color: '#E4572E',
      icon: '🌾',
      logo: '/images/logo1.png',
      desc: tText('High-quality premium Swedish and GCC grains and staples designed for modern healthy family homes.', 'منتجات وحبوب سويدية وخليجية عالية الجودة مصممة لتناسب المنازل العائلية الحديثة والصحية.'),
      story: tText('Maeda has established an esteemed standard in modern dry food distribution, supplying carefully selected food products that secure high customer retention and direct retail shelf dominance.', 'نجحت مايدا في إرساء معيار رفيع في توزيع المواد الغذائية الجافة، لتضمن ولاءً متميزاً للمستهلكين وهيمنة كاملة على رفوف التجزئة.'),
      products: [
        tText('Premium Basmati Rice', 'أرز بسمتي فاخر مميز'),
        tText('Canned Light Tuna', 'تونة خفيفة معلبة فاخرة'),
        tText('Pure Vegetable Oils', 'زيوت نباتية نقية وصحية'),
        tText('Concentrated Tomato Paste', 'معجون طماطم مركز'),
        tText('Canned Fresh Vegetables', 'خضروات معلبة طازجة'),
        tText('Sardines & Canned Seafood', 'سردين ومأكولات بحرية معلبة'),
        tText('Selected Grape Leaves', 'ورق عنب منتقى بعناية'),
        tText('Premium Ceylon Tea', 'شاي سيلاني فاخر')
      ],
      styleTheme: 'food-groceries',
      bgImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600'
    },
    {
      id: 'segafredo',
      name: 'Segafredo',
      category: 'food',
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
        tText('Classic Italian Ground Coffee', 'بن مطحون على الطريقة الإيطالية')
      ],
      styleTheme: 'premium-coffee',
      bgImg: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600'
    },
    {
      id: 'azime',
      name: 'Azime',
      category: 'food',
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
      ],
      styleTheme: 'food-groceries',
      bgImg: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600'
    },
    {
      id: 'julphar',
      name: 'Julphar',
      category: 'healthcare',
      flag: '🇦🇪',
      country: tText('UAE / GCC', 'الإمارات العربية المتحدة'),
      color: '#0A9396',
      icon: '🏥',
      logo: '/images/logo11.png',
      desc: tText('One of the largest pharmaceutical manufacturers in the GCC, offering trusted OTC and clinical products.', 'واحدة من أكبر الشركات المصنعة للأدوية في الخليج، وتقدم منتجات طبية موثوقة.'),
      story: tText('Julphar stands as a cornerstone of healthcare in the Middle East. Through direct corporate pipelines with pharmacy networks, HSHG United distributes their essential OTC products ensuring continuous availability.', 'تعتبر جلفار ركيزة أساسية للرعاية الصحية في الشرق الأوسط. ومن خلال قنواتنا المباشرة مع الصيدليات، نقوم بتوزيع منتجاتها الطبية الضرورية بكفاءة.'),
      products: [
        tText('Adol Analgesics & Remedies', 'مسكنات أدول الشهيرة وعلاجاتها'),
        tText('Mebo Specialized Ointment', 'مرهم ميبو المتخصص لعلاج الحروق')
      ],
      styleTheme: 'healthcare-otc',
      bgImg: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600'
    },
    {
      id: 'cawells',
      name: 'Cawell’s',
      category: 'healthcare',
      flag: '🇸🇪',
      country: tText('Sweden', 'السويد'),
      color: '#005F73',
      icon: '💊',
      logo: '/images/logo10.png',
      desc: tText('Premium wellness vitamins and health supplements direct from clinical Scandinavian labs.', 'فيتامينات ومكملات صحية متميزة تأتي مباشرة من المختبرات السويدية السريرية.'),
      story: tText('Embodying Scandinavian purity and advanced scientific formulations, Cawell’s delivers supplements built to support active lifestyles, mental wellness, and preventative healthcare standards.', 'تجسد كاويلز النقاء الاسكندنافي والتركيبات العلمية المتقدمة لتدعم أنماط الحياة النشطة والرعاية الصحية الوقائية.'),
      products: [
        tText('Multi-Vitamins & Minerals', 'فيتامينات متعددة ومعادن متكاملة'),
        tText('Organic Supplements & Omega', 'مكملات غذائية عضوية وأوميغا عالية النقاء'),
        tText('Daily Wellness Formulations', 'تركيبات العافية اليومية المتخصصة')
      ],
      styleTheme: 'healthcare-otc',
      bgImg: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600'
    },
    {
      id: 'meboscar',
      name: 'Mebo Scar',
      category: 'healthcare',
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
      ],
      styleTheme: 'healthcare-otc',
      bgImg: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600'
    },
    {
      id: 'bigen',
      name: 'Bigen',
      category: 'beauty',
      flag: '🇯🇵',
      country: tText('Japan', 'اليابان'),
      color: '#E9C46A',
      icon: '✨',
      logo: '/images/logo4.png',
      desc: tText('The global leader in men’s hair color solutions with a rapidly expanding, gentle female hair care portfolio.', 'العلامة الرائدة عالمياً في صبغ شعر الرجال مع مجموعة عناية لطيفة ومتنامية للنساء.'),
      story: tText('Engineered in Japan for gentle, high-precision results, Bigen uses natural extracts and ammonia-free formulas. It holds the leading market share in Kuwait’s male dye sector and continues expanding its female salon range.', 'تم تطوير بيجين في اليابان بدقة عالية، وتعتمد تركيبات خالية من الأمونيا وغنية بالخلاصات الطبيعية لتستحوذ على الحصة السوقية الأكبر في الكويت.'),
      products: [
        tText('Speedy Hair Color for Men', 'صبغة الشعر السريعة للرجال'),
        tText('Gentle Ammonia-Free Women Dye', 'صبغات شعر لطيفة خالية من الأمونيا'),
        tText('Premium Conditioning Hair Oils', 'زيوت ومنعمات الشعر الفاخرة')
      ],
      styleTheme: 'beauty-cosmetics',
      bgImg: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600'
    },
    {
      id: 'titania',
      name: 'Titania',
      category: 'beauty',
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
      ],
      styleTheme: 'beauty-cosmetics',
      bgImg: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600'
    },
    {
      id: 'smart',
      name: 'Smart',
      category: 'shoecare',
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
      ],
      styleTheme: 'shoecare-household',
      bgImg: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600'
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
      ],
      styleTheme: 'shoecare-household',
      bgImg: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=600'
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
      ],
      styleTheme: 'electronics-power',
      bgImg: 'https://images.unsplash.com/photo-1595556628563-0488f41f4f89?q=80&w=600'
    }
  ], [tText]);

  // Compute filtered brands elegantly using react useMemo
  const filteredBrands = useMemo(() => {
    return brandsData.filter(brand => {
      if (activeTab === 'all') return true;
      if (activeTab === 'food') return brand.category === 'food';
      if (activeTab === 'healthcare') return brand.category === 'healthcare';
      if (activeTab === 'beauty') return brand.category === 'beauty';
      if (activeTab === 'household') return brand.category === 'household';
      if (activeTab === 'electronics') return brand.category === 'electronics';
      if (activeTab === 'shoecare') return brand.category === 'shoecare';
      return true;
    });
  }, [brandsData, activeTab]);

  return (
    <>
      <Helmet>
        <html lang={isAr ? "ar" : "en"} />
        <title>{tText('Our Global Brand Showcase | HSHG United Trading', 'محفظة العلامات التجارية العالمية | شركة اتش اس اتش جي المتحدة')}</title>
        <meta name="description" content={tText("Explore HSHG United's premium brand portfolio across Kuwait, representing Maeda, Segafredo, Julphar, Bigen, and Kodak.", "استكشف محفظة العلامات التجارية لشركة اتش اس اتش جي المتحدة في الكويت، والتي تمثل مايدا، سيغافريدو، جلفار، بيجين، وكوداك.")} />
      </Helmet>

      {/* LUXURIOUS CINEMATIC HERO SECTION */}
      <section className="section-padding" style={{ 
        position: 'relative',
        backgroundColor: 'var(--color-bg-dark)', 
        color: 'var(--color-white)', 
        paddingTop: '13rem', 
        paddingBottom: '8rem',
        overflow: 'hidden',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Cinematic Zoom & Pan Background */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'cinematicHeroBG 25s infinite alternate ease-in-out',
          opacity: 0.12,
          zIndex: 0,
          willChange: 'transform'
        }}></div>

        {/* Navy Gradient Radial Glow overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(23, 135, 200, 0.22) 0%, transparent 70%), linear-gradient(to bottom, rgba(7, 27, 42, 0.95), rgba(7, 27, 42, 0.85))',
          zIndex: 0
        }}></div>

        {/* Soft Product Particles Floating */}
        <div className="brand-floating-particle" style={{ position: 'absolute', top: '20%', left: '10%', fontSize: '1.8rem', zIndex: 0 }}>🌾</div>
        <div className="brand-floating-particle" style={{ position: 'absolute', top: '60%', right: '8%', fontSize: '1.8rem', zIndex: 0 }}>☕</div>
        <div className="brand-floating-particle" style={{ position: 'absolute', bottom: '15%', left: '20%', fontSize: '1.8rem', zIndex: 0 }}>✨</div>
        <div className="brand-floating-particle" style={{ position: 'absolute', top: '40%', right: '25%', fontSize: '1.8rem', zIndex: 0 }}>🔋</div>
        <div className="brand-floating-particle" style={{ position: 'absolute', bottom: '30%', right: '30%', fontSize: '1.8rem', zIndex: 0 }}>🫧</div>

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="brands-reveal-fade text-center">
            <span style={{ 
              color: 'var(--color-primary)', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              fontSize: '0.85rem', 
              letterSpacing: '4px', 
              display: 'block', 
              marginBottom: '1rem',
              textShadow: '0 0 20px rgba(23, 135, 200, 0.3)'
            }}>
              {tText('FMCG REPRESENTATION EXCELLENCE', 'تميز تمثيل السلع الاستهلاكية')}
            </span>
            <h1 style={{ 
              color: 'var(--color-white)', 
              fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', 
              marginBottom: '1.5rem', 
              fontWeight: 800,
              lineHeight: 1.05
            }}>
              {tText('Our Global Brand Portfolio', 'محفظة علاماتنا التجارية العالمية')}
            </h1>
            <p style={{ 
              maxWidth: '800px', 
              margin: '0 auto 3.5rem', 
              color: 'rgba(255,255,255,0.82)', 
              fontSize: '1.25rem', 
              lineHeight: 1.7 
            }}>
              {tText('HSHG United Trading Company proudly partners with internationally recognized FMCG, healthcare, beauty, electronics, and household brands across Kuwait.', 'تفخر شركة اتش اس اتش جي المتحدة للتجارة بالشراكة مع علامات تجارية عالمية مرموقة في مجالات السلع الاستهلاكية، الرعاية الصحية، التجميل، الإلكترونيات، والمستلزمات المنزلية في الكويت.')}
            </p>

            {/* Premium Animated Counters Grid */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <HeroStatCounter target="15" label={tText('Global Brands', 'علامات تجارية عالمية')} suffix="+" />
              <HeroStatCounter target="1000" label={tText('Retail Touchpoints', 'نقطة بيع بالتجزئة')} suffix="+" />
              <HeroStatCounter target="100" label={tText('Kuwait-Wide Dispatch', 'توزيع كامل في الكويت')} suffix="%" />
              <HeroStatCounter target="7" label={tText('Market Channels', 'قنوات مبيعات نشطة')} suffix="" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. PREMIUM STICKY BRAND FILTER SECTION */}
      <section className="sticky-brand-filter-bar" style={{ 
        position: 'sticky', 
        top: '70px', 
        zIndex: 100, 
        backgroundColor: 'rgba(247, 249, 251, 0.95)', 
        backdropFilter: 'blur(12px)', 
        WebkitBackdropFilter: 'blur(12px)',
        padding: '1.2rem 0', 
        borderBottom: '1px solid var(--color-light-gray)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          
          {/* Horizontal Scroll Pill switcher */}
          <div className="filter-scroll-wrapper" style={{ 
            display: 'flex', 
            gap: '0.8rem', 
            overflowX: 'auto',
            paddingBottom: '4px',
            maxWidth: '100%',
            scrollbarWidth: 'none'
          }}>
            {[
              { id: 'all', label: tText('All Brands', 'جميع العلامات') },
              { id: 'food', label: tText('Food & Grocery', 'المواد الغذائية') },
              { id: 'healthcare', label: tText('Healthcare & OTC', 'الرعاية الصحية') },
              { id: 'beauty', label: tText('Beauty & Cosmetics', 'التجميل والعناية') },
              { id: 'household', label: tText('Household', 'المستلزمات المنزلية') },
              { id: 'electronics', label: tText('Electronics', 'الإلكترونيات') },
              { id: 'shoecare', label: tText('Shoe Care', 'العناية بالأحذية') }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`glass-filter-pill ${activeTab === tab.id ? 'active' : ''}`}
                style={{
                  padding: '0.8rem 1.8rem',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-headings)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: '1.5px solid rgba(15, 45, 64, 0.08)',
                  background: activeTab === tab.id ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-steel-blue) 100%)' : 'rgba(255, 255, 255, 0.7)',
                  color: activeTab === tab.id ? '#fff' : 'var(--color-bg-dark)',
                  boxShadow: activeTab === tab.id ? '0 8px 20px rgba(23, 135, 200, 0.25)' : '0 2px 8px rgba(0,0,0,0.01)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PREMIUM ALTERNATING SHOWCASE CARDS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {filteredBrands.map((brand, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={brand.id}
                className="showcase-card-anim premium-showcase-grid-card hover-glow-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                  background: 'var(--color-white)',
                  borderRadius: '24px',
                  padding: '4rem 3.5rem',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.03)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  textAlign: 'initial',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                
                {/* Left/Right Text Content (Based on Odd/Even for dynamic variety) */}
                <div style={{ order: isEven ? 0 : 1, display: 'flex', flexDirection: 'column', gap: '1.8rem', position: 'relative', zIndex: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    {brand.logo ? (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
                          {brand.name}
                        </h2>
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          style={{ 
                            maxHeight: '60px', 
                            maxWidth: '180px', 
                            objectFit: 'contain',
                            background: '#fff',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(15, 45, 64, 0.08)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)'
                          }} 
                        />
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{ fontSize: '2rem' }}>{brand.icon}</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-bg-dark)', margin: 0 }}>
                          {brand.name}
                        </h2>
                      </div>
                    )}
                    <span style={{ 
                      fontSize: '0.8rem', 
                      background: 'rgba(23, 135, 200, 0.08)', 
                      color: 'var(--color-primary)', 
                      padding: '0.4rem 1.1rem', 
                      borderRadius: '50px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {brand.category === 'food' ? tText('Food & Grocery', 'المواد الغذائية') : 
                       brand.category === 'healthcare' ? tText('Healthcare & OTC', 'الرعاية الصحية') : 
                       brand.category === 'beauty' ? tText('Beauty', 'التجميل والعناية') : 
                       brand.category === 'household' ? tText('Household', 'مستلزمات منزلية') : 
                       brand.category === 'electronics' ? tText('Electronics', 'الإلكترونيات') : 
                       tText('Shoe Care', 'العناية بالأحذية')}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.2rem' }}>{brand.flag}</span>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {tText('Origin:', 'المنشأ:')} {brand.country}
                    </strong>
                  </div>

                  <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>
                    {brand.desc}
                  </p>
                  
                  <blockquote style={{ 
                    borderInlineStart: `4px solid ${brand.color}`, 
                    paddingInlineStart: '1.2rem', 
                    margin: 0,
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6
                  }}>
                    {brand.story}
                  </blockquote>

                  {/* Distributed Across Kuwait Badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(15, 45, 64, 0.04)', padding: '0.5rem 1rem', borderRadius: '8px', alignSelf: 'flex-start' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-steel-blue)' }}>
                      {tText('Distributed Across Kuwait Networks', 'موزع في جميع شبكات الكويت')}
                    </span>
                  </div>
                </div>

                {/* Right/Left Image & Product Mockups Side */}
                <div style={{ order: isEven ? 1 : 0, position: 'relative', height: '100%', minHeight: '350px', borderRadius: '16px', overflow: 'hidden' }}>
                  
                  {/* Backdrop visual image */}
                  <img 
                    src={brand.bgImg} 
                    alt={brand.name} 
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0, left: 0,
                      opacity: 0.25,
                      filter: 'grayscale(30%) blur(2px)',
                      transition: 'transform 0.8s ease'
                    }}
                    className="card-bg-visual-img"
                  />

                  {/* Color Overlay Mesh */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: `linear-gradient(135deg, ${brand.color}15 0%, rgba(7, 27, 42, 0.95) 100%)`,
                    zIndex: 1
                  }}></div>

                  {/* Clean Visual Presentation Overlay */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '3rem 2.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: '#fff'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: brand.color, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.6rem' }}>
                        {tText('REPRESENTED PRODUCTS', 'المنتجات الممثلة')}
                      </span>
                      <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
                        {tText('Core Portfolio', 'المحفظة الأساسية')}
                      </h4>
                    </div>

                    {/* Product Bullet Grid List */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '0.8rem',
                      marginTop: '2rem',
                      marginBottom: '2rem'
                    }}>
                      {brand.products.map((prod, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                          <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: brand.color,
                            display: 'inline-block',
                            flexShrink: 0
                          }}></span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                            {prod}
                          </span>
                        </div>
                      ))}
                    </div>

                    <span style={{
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'rgba(255,255,255,0.5)',
                      fontWeight: 700
                    }}>
                      {tText('HSHG United Supply Chain', 'سلسلة توريد اتش اس اتش جي')}
                    </span>
                  </div>

                </div>

                {/* Card-Specific Interactive Custom Styling */}
                <style dangerouslySetInnerHTML={{ __html: `
                  .premium-showcase-grid-card:hover {
                    border-color: ${brand.color}40 !important;
                    box-shadow: 0 30px 60px ${brand.color}0c !important;
                  }
                  .premium-showcase-grid-card:hover .card-bg-visual-img {
                    transform: scale(1.05);
                    opacity: 0.35 !important;
                  }
                `}} />

              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PRODUCT SHOWCASE CAROUSEL SECTION */}
      <section className="section-padding" style={{ 
        backgroundColor: 'var(--color-white)', 
        overflow: 'hidden',
        borderTop: '1px solid var(--color-light-gray)',
        borderBottom: '1px solid var(--color-light-gray)'
      }}>
        <div className="container" style={{ marginBottom: '4rem' }}>
          <div className="text-center">
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
              {tText('PORTFOLIO MOCKUPS', 'نماذج المنتجات')}
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginTop: '0.5rem' }}>
              {tText('Product Visual Showcase', 'معرض المنتجات المرئي')}
            </h2>
            <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', color: 'var(--color-text-muted)' }}>
              {tText('A visual preview of represented food, health, cosmetics, and household products distributed to retail shelves.', 'عرض مرئي للمنتجات الغذائية والصحية والتجميلية والمنزلية الموزعة على رفوف التجزئة.')}
            </p>
          </div>
        </div>

        {/* Cinematic Auto Scroll product mockups */}
        <div className="product-showcase-marquee-container" style={{ position: 'relative', width: '100%', padding: '1rem 0', display: 'flex', overflow: 'hidden' }}>
          <div className="product-showcase-scroll" style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap', width: 'max-content', willChange: 'transform' }}>
            {[
              { title: tText('Basmati Rice Pack', 'أرز بسمتي فاخر'), cat: 'Maeda', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400' },
              { title: tText('Italian Coffee Ground', 'قهوة إيطالية مطحونة'), cat: 'Segafredo', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400' },
              { title: tText('OTC Clinical Remedies', 'أدوية علاجية موثوقة'), cat: 'Julphar', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400' },
              { title: tText('Japanese Hair Dye Speedy', 'صبغة الشعر اليابانية'), cat: 'Bigen', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400' },
              { title: tText('Industrial Heavy Power', 'بطاريات طاقة صناعية'), cat: 'Kodak', img: 'https://images.unsplash.com/photo-1595556628563-0488f41f4f89?q=80&w=400' },
              { title: tText('Concentrated Detergents', 'منظفات غسيل مركزة'), cat: 'Peros', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=400' },
              { title: tText('Body Care Essentials', 'أدوات العناية الشخصية'), cat: 'Titania', img: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=400' },
              { title: tText('Organic Food Supplements', 'مكملات غذائية عضوية'), cat: 'Cawell’s', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400' },
              // Duplicate for infinite loop
              { title: tText('Basmati Rice Pack', 'أرز بسمتي فاخر'), cat: 'Maeda', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400' },
              { title: tText('Italian Coffee Ground', 'قهوة إيطالية مطحونة'), cat: 'Segafredo', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400' },
              { title: tText('OTC Clinical Remedies', 'أدوية علاجية موثوقة'), cat: 'Julphar', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400' },
              { title: tText('Japanese Hair Dye Speedy', 'صبغة الشعر اليابانية'), cat: 'Bigen', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400' },
              { title: tText('Industrial Heavy Power', 'بطاريات طاقة صناعية'), cat: 'Kodak', img: 'https://images.unsplash.com/photo-1595556628563-0488f41f4f89?q=80&w=400' },
              { title: tText('Concentrated Detergents', 'منظفات غسيل مركزة'), cat: 'Peros', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=400' },
              { title: tText('Body Care Essentials', 'أدوات العناية الشخصية'), cat: 'Titania', img: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=400' },
              { title: tText('Organic Food Supplements', 'مكملات غذائية عضوية'), cat: 'Cawell’s', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400' }
            ].map((p, idx) => (
              <div key={idx} className="product-carousel-card hover-lift" style={{
                width: '280px',
                height: '340px',
                borderRadius: '16px',
                background: 'var(--color-bg-light)',
                border: '1px solid var(--color-light-gray)',
                padding: '0.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ height: '220px', width: '100%', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    loading="lazy" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} 
                    className="product-card-hover-zoom-img"
                  />
                </div>
                <div style={{ padding: '0.6rem 0.2rem', textAlign: 'initial' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
                    {p.cat}
                  </span>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-bg-dark)', whiteSpace: 'normal' }}>
                    {p.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes productMarqueeScroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .product-showcase-scroll {
            animation: productMarqueeScroll 35s linear infinite;
          }
          [dir="rtl"] .product-showcase-scroll {
            animation: productMarqueeScroll 35s linear infinite reverse;
          }
          .product-showcase-marquee-container:hover .product-showcase-scroll {
            animation-play-state: paused;
          }
          .product-carousel-card:hover .product-card-hover-zoom-img {
            transform: scale(1.06);
          }
        `}} />
      </section>

      {/* 5. DISTRIBUTION CHANNEL SECTION (MARKET PRESENCE) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px' }}>
              {tText('RETAIL PENETRATION', 'تغطية منافذ التجزئة')}
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginTop: '0.5rem' }}>
              {tText('Trusted Across Kuwait’s Leading Retail Networks', 'شريك موثوق لدى كبرى شبكات التجزئة في الكويت')}
            </h2>
            <p style={{ maxWidth: '700px', margin: '0.8rem auto 0', color: 'var(--color-text-muted)' }}>
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
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.2rem' }}>
                {tText('Kuwait Market Domination', 'الهيمنة على السوق الكويتي')}
              </h3>
              <p style={{ lineHeight: 1.7, color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                {tText('Our fleet deployment and direct store delivery (DSD) model secure product placement across the entire geography of Kuwait. From Jahra to Fahaheel, we keep shelves stocked.', 'يضمن نموذج التوصيل المباشر للمتاجر وأسطولنا المخصص توزيع المنتجات جغرافياً في جميع أنحاء الكويت، من الجهراء إلى الفحيحيل.')}
              </p>

              {/* Graphic Vector Representation of Kuwait coverage map */}
              <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(23, 135, 200, 0.08) 0%, rgba(15, 45, 64, 0.04) 100%)',
                border: '1px solid rgba(23, 135, 200, 0.1)',
                padding: '2.5rem',
                borderRadius: '20px',
                textAlign: 'center'
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
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>6+</span>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{tText('Governorates Covered', 'محافظات مغطاة بالكامل')}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>100%</span>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{tText('Direct Hypermarkets', 'هايبرماركتس مباشرة')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Animated Lists of actual Retailers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="brands-reveal-fade">
              
              {/* Category 1: Modern Trade */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,0,0,0.03)',
                padding: '2.2rem',
                borderRadius: '16px',
                textAlign: 'initial'
              }}>
                <h4 style={{ margin: '0 0 1.2rem 0', color: 'var(--color-primary)', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Modern Trade Hypermarkets', 'التجارة الحديثة والهايبرماركت')}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {[
                    'Lulu', 'Sultan Center', 'HyperMax', 'City Star', 'City Hyper Market', 
                    'Dukkan', 'Oncost', 'Grand Hyper', 'Nesto', 'Ramez', 'Mark & Save', 
                    'Monoprix', 'Meem Market'
                  ].map((store, sIdx) => (
                    <span key={sIdx} style={{
                      padding: '0.4rem 0.9rem',
                      background: 'var(--color-white)',
                      border: '1px solid var(--color-light-gray)',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-bg-dark)',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.01)'
                    }}>
                      {store}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: Online & Convenience Stores */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,0,0,0.03)',
                padding: '2.2rem',
                borderRadius: '16px',
                textAlign: 'initial'
              }}>
                <h4 style={{ margin: '0 0 1.2rem 0', color: 'var(--color-primary)', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Online & Convenience Stores', 'المنصات الرقمية والتسوق السريع')}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {[
                    'Trolley', 'Drops', 'Jameia', 'Taw9eel', 'Ninja'
                  ].map((app, aIdx) => (
                    <span key={aIdx} style={{
                      padding: '0.4rem 0.9rem',
                      background: 'var(--color-white)',
                      border: '1px solid var(--color-light-gray)',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-bg-dark)',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.01)'
                    }}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Co-operative Societies */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,0,0,0.03)',
                padding: '2.2rem',
                borderRadius: '16px',
                textAlign: 'initial'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: 'var(--color-primary)', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tText('Kuwaiti Co-operative Societies', 'الجمعيات التعاونية الكويتية')}
                </h4>
                <p style={{ margin: '0 0 1.2rem 0', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
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
                      padding: '0.4rem 0.9rem',
                      background: 'rgba(23, 135, 200, 0.06)',
                      border: '1px solid rgba(23, 135, 200, 0.1)',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)'
                    }}>
                      {coop}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes radarPulse {
            0% { transform: scale(0.6); opacity: 0.8; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          
          /* Horizontal filter pills responsive hides */
          .filter-scroll-wrapper::-webkit-scrollbar {
            display: none;
          }
          
          @media (max-width: 992px) {
            .premium-showcase-grid-card {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
              padding: 3rem 2rem !important;
            }
            .market-presence-split {
              grid-template-columns: 1fr !important;
              gap: 3.5rem !important;
            }
          }
          
          @media (max-width: 576px) {
            .hero-counter-box {
              min-width: 130px !important;
              padding: 1rem !important;
            }
            .premium-showcase-grid-card h2 {
              font-size: 2rem !important;
            }
          }
        `}} />
      </section>

      {/* 6. BRAND STORY SECTION (WITH WORLD MAP BRIDGE) */}
      <section className="section-padding" style={{ 
        backgroundColor: 'var(--color-bg-dark)', 
        color: 'var(--color-white)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* World Map vector overlay path */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' fill='none' stroke='rgba(255,255,255,0.03)' strokeWidth='1'%3E%3Cpath d='M150 150 C 300 80, 500 20, 780 220 M 780 220 L 520 280 C 420 300, 320 260, 150 150' style='stroke-dasharray: 5 5; fill: rgba(255,255,255,0.005)'/%3E%3Ccircle cx='780' cy='220' r='6' fill='%231787C8'/%3E%3Ccircle cx='150' cy='150' r='4' fill='rgba(255,255,255,0.3)'/%3E%3Ccircle cx='520' cy='280' r='4' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          opacity: 0.8,
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="brands-reveal-fade text-center" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
              {tText('STRATEGIC ALIGNMENTS', 'التحالفات الاستراتيجية')}
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-white)', marginBottom: '1.8rem' }}>
              {tText('Built Through Strategic Partnerships', 'بُنيت من خلال الشراكات الاستراتيجية')}
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.75)' }}>
              {tText('HSHG United Trading Company collaborates with globally recognized brands to deliver quality products across Kuwait through strong retail execution, modern logistics, and market expertise.', 'تتعاون شركة اتش اس اتش جي المتحدة للتجارة مع علامات تجارية مرموقة عالمياً لتقديم منتجات عالية الجودة في جميع أنحاء الكويت من خلال التنفيذ القوي في السوق، والخدمات اللوجستية الحديثة، والخبرة الواسعة.')}
            </p>
          </div>
        </div>
      </section>

      {/* 7. PREMIUM B2B CTA SECTION */}
      <section className="section-padding" style={{ 
        position: 'relative',
        background: 'radial-gradient(circle at 10% 20%, rgba(23, 135, 200, 0.05) 0%, transparent 40%), var(--color-bg-light)',
        borderTop: '1px solid var(--color-light-gray)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="brands-reveal-fade text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--color-bg-dark)', marginBottom: '1.2rem' }}>
              {tText('Expand Your Brand Across Kuwait', 'وسع نطاق علامتك التجارية في الكويت')}
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2.8rem' }}>
              {tText('Partner with HSHG United Trading Company for reliable FMCG distribution, retail penetration, and market growth.', 'شيد نجاحك معنا. شارك شركة اتش اس اتش جي المتحدة للتجارة لضمان كفاءة توزيع السلع الاستهلاكية، والانتشار السريع في السوق، والنمو المستدام.')}
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="premium-corporate-button glow-glow" style={{
                padding: '1.1rem 2.2rem',
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-steel-blue) 100%)',
                color: '#fff',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                fontFamily: 'var(--font-headings)',
                boxShadow: '0 8px 24px rgba(23, 135, 200, 0.25)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}>
                {tText('Become a Partner', 'كن شريكاً لنا')}
              </Link>
              <Link to="/contact" className="premium-corporate-outline-button" style={{
                padding: '1.1rem 2.2rem',
                background: 'rgba(255,255,255,0.8)',
                border: '1.5px solid var(--color-bg-dark)',
                color: 'var(--color-bg-dark)',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                fontFamily: 'var(--font-headings)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}>
                {tText('Contact Distribution Team', 'اتصل بفريق التوزيع')}
              </Link>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .premium-corporate-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(23, 135, 200, 0.45) !important;
          }
          .premium-corporate-outline-button:hover {
            background: var(--color-bg-dark) !important;
            color: #fff !important;
            transform: translateY(-3px);
          }
        `}} />
      </section>
    </>
  );
}

export default Brands;
