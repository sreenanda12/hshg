// Centralized Brand and Product Data for HSHG United
// Contains English and Arabic translations for pages, brands, and products.

export const brandsData = [
  {
    id: "maeda",
    index: 1,
    name: { en: "Maeda", ar: "مائدة" },
    category: "food",
    logo: { en: "/images/maeda_logo_en.png", ar: "/images/maeda_logo_ar.png" },
    color: "#E4572E",
    origin: { en: "Kuwait", ar: "الكويت" },
    desc: {
      en: "An extensive line of high-quality rice, pantry essentials, canned goods, and tea distributed across all major retail co-ops in Kuwait.",
      ar: "مجموعة واسعة من الأرز عالي الجودة والسلع المعلبة والشاي الموزعة على جميع الجمعيات التعاونية الكبرى في الكويت."
    },
    details: {
      en: "Maeda is a proudly Kuwaiti brand owner, offering premium dry food, grains, oils, and canned goods that are staples in households across the nation. Through close alignment with cooperative networks and modern key accounts, Maeda has achieved deep market penetration.",
      ar: "مائدة هي علامة تجارية كويتية فخورة، تقدم الأغذية الجافة الفاخرة والحبوب والزيوت والمعلبات التي تعد من الأساسيات في المنازل عبر البلاد. ومن خلال التنسيق الوثيق مع شبكات الجمعيات التعاونية والحسابات الرئيسية الحديثة، حققت مائدة انتشاراً عميقاً في السوق."
    },
    products: [
      {
        name: { en: "Maeda Basmati Rice 10KG", ar: "أرز بسمتي مائدة ١٠ كيلو" },
        image: "/images/products/maed_basmati_rice10kg.png",
        desc: { en: "Premium long-grain aromatic Basmati rice, perfectly aged and ideal for traditional regional dishes.", ar: "أرز بسمتي عطري فاخر حبة طويلة، معتق ومثالي للأطباق التقليدية الإقليمية." },
        category: "Dry Food"
      },
      {
        name: { en: "Maeda Basmati Rice 5KG", ar: "أرز بسمتي مائدة ٥ كيلو" },
        image: "/images/products/maed_basmati_rice5kg.png.png",
        desc: { en: "Premium long-grain aromatic Basmati rice, packaged in a convenient 5KG bag.", ar: "أرز بسمتي عطري فاخر حبة طويلة، معبأ في كيس مريح بسعة ٥ كيلو." },
        category: "Dry Food"
      },
      {
        name: { en: "Maeda Calrose Rice", ar: "أرز كالروز مائدة" },
        image: "/images/products/maeda_calrose_rice.png",
        desc: { en: "Premium Calrose rice, known for its soft texture and excellent sticky quality, ideal for daily meals.", ar: "أرز كالروز فاخر، معروف بقوامه الطري وجودته الممتازة، مثالي للوجبات اليومية." },
        category: "Dry Food"
      },
      {
        name: { en: "Maeda Corn Oil", ar: "زيت ذرة مائدة" },
        image: "/images/products/maeda_corn_oil.png",
        desc: { en: "100% pure corn oil, naturally cholesterol-free, perfect for healthy cooking and baking.", ar: "زيت ذرة نقي 100%، خالي من الكوليسترول طبيعياً، مثالي للطهي والخبز الصحي." },
        category: "Edible Oils"
      },
      {
        name: { en: "Maeda Extra Virgin Olive Oil", ar: "زيت زيتون بكر ممتاز مائدة" },
        image: "/images/products/maeda_extra_virgin_olive_oil.png",
        desc: { en: "Cold-pressed extra virgin olive oil of premium quality, bringing rich Mediterranean flavors.", ar: "زيت زيتون بكر ممتاز معصور على البارد بجودة عالية، يضفي نكهات غنية على أطباقك." },
        category: "Edible Oils"
      },
      {
        name: { en: "Maeda Sunflower Oil", ar: "زيت دوار الشمس مائدة" },
        image: "/images/products/maeda_sunflower_oil.png",
        desc: { en: "Pure refined sunflower oil, high in vitamin E, perfect for daily cooking and frying.", ar: "زيت دوار الشمس مكرر ونقي، غني بفيتامين هـ ومثالي للطهي والقلي اليومي." },
        category: "Edible Oils"
      },
      {
        name: { en: "Maeda Grape Leaves", ar: "ورق عنب مائدة" },
        image: "/images/products/maeda_grape_leaves.png",
        desc: { en: "Tender and carefully selected grape leaves, ideal for rolling traditional stuffed vine leaves.", ar: "ورق عنب طري ومختار بعناية، مثالي لتحضير محشي ورق العنب التقليدي." },
        category: "Canned Goods"
      },
      {
        name: { en: "Maeda Ketchup Sauce", ar: "كاتشب طماطم مائدة" },
        image: "/images/products/maeda_ketchup_sauce.png",
        desc: { en: "Rich and tangy tomato ketchup made from vine-ripened tomatoes and select spices.", ar: "كاتشب طماطم غني ولذيذ مصنوع من الطماطم الناضجة والبهارات المختارة." },
        category: "Condiments"
      },
      {
        name: { en: "Maeda Tomato Paste", ar: "معجون طماطم مائدة" },
        image: "/images/products/maeda_tomato_paste.png",
        desc: { en: "Thick, double-concentrated tomato paste made from 100% ripe red tomatoes.", ar: "معجون طماطم سميك ومزدوج التركيز مصنوع 100% من الطماطم الحمراء الناضجة." },
        category: "Canned Goods"
      },
      {
        name: { en: "Maeda Pasta Sauce", ar: "صلصة معكرونة مائدة" },
        image: "/images/products/maeda_pasta_sauce.png",
        desc: { en: "Savory tomato sauce blended with traditional herbs, perfect for creating delicious pasta.", ar: "صلصة طماطم لذيذة ممزوجة بالأعشاب التقليدية، مثالية لتحضير أطباق المعكرونة." },
        category: "Condiments"
      },
      {
        name: { en: "Maeda Pizza Sauce", ar: "صلصة بيتزا مائدة" },
        image: "/images/products/maeda_pizza_sauce.png",
        desc: { en: "Authentic pizza sauce made from crushed tomatoes and Italian herbs.", ar: "صلصة بيتزا أصلية مصنوعة من الطماطم المهروسة والأعشاب الإيطالية." },
        category: "Condiments"
      },
      {
        name: { en: "Maeda Light Meat Tuna in Sunflower Oil", ar: "تونة لحم خفيف مائدة في زيت دوار الشمس" },
        image: "/images/products/maeda_light_meat_tuna_in_sunflower_oil.png",
        desc: { en: "Premium light meat tuna chunks packed in healthy sunflower oil, rich in protein.", ar: "تونة لحم خفيف فاخرة محفوظة في زيت دوار الشمس الصحي، غنية بالبروتين." },
        category: "Canned Seafood"
      },
      {
        name: { en: "Maeda White Meat Tuna Solid in Brine", ar: "تونة لحم أبيض متماسك مائدة في ماء وملح" },
        image: "/images/products/maeda_white_meat_tuna_solid_in_brine_01.png",
        desc: { en: "Premium solid white meat tuna packed in water, ideal for low-calorie diets.", ar: "تونة لحم أبيض متماسك فاخرة محفوظة في الماء والملح، مثالية للأنظمة الغذائية قليلة السعرات." },
        category: "Canned Seafood"
      },
      {
        name: { en: "Maeda White Tuna Solid in Sunflower Oil", ar: "تونة بيضاء متماسكة مائدة في زيت دوار الشمس" },
        image: "/images/products/maeda_white_tuna_solid_in_sunflower_oil.png",
        desc: { en: "Solid white tuna of premium quality, preserved in pure sunflower oil.", ar: "تونة بيضاء متماسكة فاخرة الجودة، محفوظة في زيت دوار الشمس النقي لمذاق غني." },
        category: "Canned Seafood"
      }
    ]
  },
  {
    id: "segafredo",
    index: 2,
    name: { en: "Segafredo Zanetti", ar: "سيجافريدو زانيتي" },
    category: "food",
    logo: { en: "/images/logo.segafredo_01[25].png", ar: "/images/logo.segafredo_01[25].png" },
    color: "#D90429",
    origin: { en: "Italy", ar: "إيطاليا" },
    desc: {
      en: "Renowned Italian espresso capsules and fine ground coffee blends distributed premium retail shelves and select HORECA pipelines.",
      ar: "كبسولات إسبريسو إيطالية شهيرة وخلطات قهوة مطحونة فاخرة موزعة على أرفف التجزئة الفاخرة وقنوات هوريكا."
    },
    details: {
      en: "Segafredo Zanetti is a leading global espresso brand from Italy, famous for its rich taste, high-quality roasting, and premium coffee blends available in ground, beans, and capsule formats.",
      ar: "سيجافريدو زانيتي هي علامة تجارية عالمية رائدة للإسبريسو من إيطاليا، تشتهر بمذاقها الغني، والتحميص عالي الجودة، وخلطات القهوة الفاخرة المتوفرة في شكل قهوة مطحونة وحبوب وكبسولات."
    },
    products: [
      {
        name: { en: "Segafredo Espresso Capsules", ar: "كبسولات إسبريسو سيجافريدو" },
        image: "/images/logo.segafredo_01[25].png",
        desc: { en: "Premium Italian espresso capsules compatible with standard machines.", ar: "كبسولات إسبريسو إيطالية فاخرة متوافقة مع الماكينات القياسية." },
        category: "Coffee"
      },
      {
        name: { en: "Segafredo Intermezzo Ground Coffee", ar: "قهوة مطحونة سيجافريدو إنترمتسو" },
        image: "/images/logo.segafredo_01[25].png",
        desc: { en: "Classic Italian blend of ground coffee with a strong and full-bodied aroma.", ar: "خلطة إيطالية كلاسيكية من القهوة المطحونة برائحة قوية وقوام كامل." },
        category: "Coffee"
      }
    ]
  },
  {
    id: "azime",
    index: 3,
    name: { en: "Azime", ar: "عظيم" },
    category: "food",
    logo: { en: "/images/azime_logo.png", ar: "/images/azime_logo.png" },
    color: "#F4A261",
    origin: { en: "Turkey", ar: "تركيا" },
    desc: {
      en: "High-quality pure sunflower oil, perfect for cooking, baking, and frying, packed in family sizes.",
      ar: "زيت دوار الشمس النقي عالي الجودة، مثالي للطبخ والخبز والقلي، معبأ في أحجام عائلية."
    },
    details: {
      en: "Azime offers premium agricultural and pantry oils from Turkey. Processed using the latest refining technologies to ensure absolute product freshness, flavor neutrality, and high smoke points.",
      ar: "تقدم عظيم زيوت مؤن زراعية فاخرة من تركيا. تمت معالجتها باستخدام أحدث تقنيات التكرير لضمان نضارة المنتج المطلقة ونكهته الحيادية ونقاط الاحتراق العالية."
    },
    products: [
      {
        name: { en: "Azime Sunflower Oil (6x1.5L)", ar: "زيت دوار الشمس عظيم (٦ × ١.٥ لتر)" },
        image: "/images/products/azime_sunflower_oil_(6x1.5l).png",
        desc: { en: "Pure refined sunflower oil packaged in a family-sized pack, perfect for all cooking needs.", ar: "زيت دوار الشمس نقي ومكرر معبأ في عبوة عائلية، مثالي لجميع احتياجات الطهي." },
        category: "Edible Oils"
      }
    ]
  },
  {
    id: "bigen",
    index: 4,
    name: { en: "Bigen", ar: "بيجين" },
    category: "personal",
    logo: { en: "/images/bigen.jpg", ar: "/images/bigen.jpg" },
    color: "#E9C46A",
    origin: { en: "Japan", ar: "اليابان" },
    desc: {
      en: "The market-leading developer of quick hair colorants and dyes, commanding prime shelf space in both modern trade and co-ops.",
      ar: "المنتج الرائد في السوق لصبغات الشعر السريعة، والذي يحتل مساحة رفوف متميزة في كل من التجارة الحديثة والجمعيات."
    },
    details: {
      en: "Bigen, originating from Japan, is a world-class hair dye developer commanding prime shelf space in Kuwait. Highly valued for its quick-acting, nourishing formula that covers grays naturally.",
      ar: "بيجين، التي نشأت في اليابان، هي مطور عالمي لصبغات الشعر تحتل مكانة ممتازة على أرفف التجزئة في الكويت. تحظى بتقدير كبير لتركيبتها سريعة المفعول والمغذية التي تغطي الشعر الأبيض بشكل طبيعي."
    },
    products: [
      {
        name: { en: "Bigen Speedy Hair Color", ar: "صبغة شعر بيجين سريعة المفعول" },
        image: "/images/bigen.jpg",
        desc: { en: "Quick-acting hair dye providing natural gray coverage in minutes, ammonia-free.", ar: "صبغة شعر سريعة المفعول توفر تغطية طبيعية للشعر الأبيض في دقائق، خالية من الأمونيا." },
        category: "Hair Care"
      }
    ]
  },
  {
    id: "kodak",
    index: 5,
    name: { en: "Kodak", ar: "كوداك" },
    category: "electronics",
    logo: { en: "/images/koda.png", ar: "/images/koda.png" },
    color: "#E76F51",
    origin: { en: "USA", ar: "الولايات المتحدة" },
    desc: {
      en: "Trusted global consumer technology providing high-performance alkaline batteries, LED lighting, and consumer utility items.",
      ar: "تقنية استهلاكية عالمية موثوقة توفر بطاريات قلوية عالية الأداء وإضاءة LED وأدوات منزلية مفيدة."
    },
    details: {
      en: "Kodak delivers everyday electrical utility items with solid performance. HSHG distributes Kodak's high-capacity alkaline batteries, zinc batteries, and LED lighting solutions throughout retail stores.",
      ar: "تقدم كوداك أدوات منزلية كهربائية يومية بأداء قوي. تقوم اتش اس اتش جي بتوزيع بطاريات كوداك القلوية عالية السعة، وبطاريات الزنك، وحلول إضاءة LED في متاجر التجزئة."
    },
    products: [
      {
        name: { en: "Kodak Ultra Alkaline AA Batteries", ar: "بطاريات كوداك ألترا قلوية AA" },
        image: "/images/koda.png",
        desc: { en: "Long-lasting high-performance alkaline AA batteries for high-drain devices.", ar: "بطاريات AA قلوية طويلة الأمد وعالية الأداء للأجهزة ذات الاستهلاك العالي." },
        category: "Batteries"
      },
      {
        name: { en: "Kodak LED Bulbs", ar: "لمبات كوداك LED" },
        image: "/images/koda.png",
        desc: { en: "Energy-efficient LED bulbs offering bright illumination and long operating life.", ar: "لمبات LED موفرة للطاقة توفر إضاءة ساطعة وعمراً تشغيلياً طويلاً." },
        category: "Lighting"
      }
    ]
  },
  {
    id: "titania",
    index: 7,
    name: { en: "Titania", ar: "تيتانيا" },
    category: "personal",
    logo: { en: "/images/titania.png", ar: "/images/titania.png" },
    color: "#F4A261",
    origin: { en: "Germany", ar: "ألمانيا" },
    desc: {
      en: "High-grade personal care, cosmetic tools, and daily hygiene accessories representing trusted German quality and utility.",
      ar: "أدوات العناية الشخصية ومستحضرات التجميل عالية الجودة وإكسسوارات النظافة اليومية التي تمثل الجودة والموثوقية الألمانية."
    },
    details: {
      en: "Titania Fabrik Germany manufactures high-precision cosmetic tools, personal hygiene files, pumice stones, and beauty products. Trusted worldwide for durability and ergonomic German craftsmanship.",
      ar: "تنتج شركة تيتانيا فابريك الألمانية أدوات تجميل عالية الدقة، ومبارد النظافة الشخصية، وأحجار الخفاف، ومنتجات التجميل. موثوقة في جميع أنحاء العالم لمتانتها وحرفيتها الألمانية المتقنة."
    },
    products: [
      {
        name: { en: "Titania Nail Files & Buffers", ar: "مبارد وملمعات الأظافر تيتانيا" },
        image: "/images/titania.png",
        desc: { en: "Professional nail grooming and shaping tools made with high-quality abrasive materials.", ar: "أدوات احترافية للعناية بالأظافر وتشكيلها مصنوعة من مواد كاشطة عالية الجودة." },
        category: "Beauty Tools"
      },
      {
        name: { en: "Titania Pumice Stone", ar: "حجر خفاف تيتانيا" },
        image: "/images/titania.png",
        desc: { en: "Natural pumice stone for effective dead skin removal and foot care.", ar: "حجر خفاف طبيعي لإزالة الجلد الميت بفعالية والعناية بالقدمين." },
        category: "Foot Care"
      }
    ]
  },
  {
    id: "mebo",
    index: 9,
    name: { en: "Mebo", ar: "ميبو" },
    category: "healthcare",
    logo: { en: "/images/mebo.png", ar: "/images/mebo.png" },
    color: "#D90429",
    origin: { en: "UAE", ar: "الإمارات" },
    desc: {
      en: "World-renowned skin ointment, healing creams, and scar treatment formulas distributed under strict regulations.",
      ar: "مرهم ميبو الشهير عالمياً لعلاج الحروق والندوب وتجديد خلايا البشرة، موزع بموجب الأنظمة الطبية الصارمة."
    },
    details: {
      en: "Mebo is a clinically established medical ointment brand, specializing in skin regeneration, burn wound healing, and scar tissue management. Highly trusted by healthcare organizations and consumers globally.",
      ar: "ميبو هي علامة تجارية لمرهم طبي معتمد سريرياً، متخصصة في تجديد خلايا الجلد، وعلاج جروح الحروق، والندوب. تحظى بثقة كبيرة من قبل منظمات الرعاية الصحية والمستهلكين على حد سواء."
    },
    products: [
      {
        name: { en: "Mebo Burn Ointment", ar: "مرهم ميبو للحروق" },
        image: "/images/mebo.png",
        desc: { en: "Natural herbal ointment that promotes skin healing and cell regeneration for burns and wounds.", ar: "مرهم عشبي طبيعي يعزز شفاء الجلد وتجديد الخلايا للحروق والجروح." },
        category: "Ointments"
      },
      {
        name: { en: "Mebo Scar Cream", ar: "كريم ميبو للندبات" },
        image: "/images/mebo_scar.png",
        desc: { en: "Specialized scar reduction formula that improves skin texture and restores normal appearance.", ar: "تركيبة متخصصة لتقليل الندوب وتحسين ملمس البشرة واستعادة مظهرها الطبيعي." },
        category: "Ointments"
      }
    ]
  },
  {
    id: "cawells",
    index: 10,
    name: { en: "Cawell’s", ar: "كاويلز" },
    category: "healthcare",
    logo: { en: "/images/cawells_logo.png", ar: "/images/cawells_logo.png" },
    color: "#005F73",
    origin: { en: "Sweden", ar: "السويد" },
    desc: {
      en: "Food supplements and vitamins from Sweden focused on health and wellness, offering premium clean ingredients.",
      ar: "المكملات الغذائية والفيتامينات من السويد التي تركز على الصحة والعافية، وتوفر مكونات نظيفة وممتازة."
    },
    details: {
      en: "Cawell's represents premium Swedish quality, developing pure, high-grade nutritional supplements, multivitamins, and wellness essentials supporting daily health and active lifestyles.",
      ar: "تمثل كاويلز الجودة السويدية الفاخرة، حيث تعمل على تطوير مكملات غذائية نقية وعالية الجودة، وفيتامينات متعددة، وأساسيات صحية تدعم الصحة اليومية وأنماط الحياة النشطة."
    },
    products: [
      {
        name: { en: "Cawell’s Omega-3 Fish Oil", ar: "أوميغا-٣ كاويلز زيت السمك" },
        image: "/images/cawells_logo.png",
        desc: { en: "Premium fish oil capsules containing high levels of EPA and DHA for heart and joint health.", ar: "كبسولات زيت السمك الفاخرة التي تحتوي على مستويات عالية من EPA و DHA لصحة القلب والمفاصل." },
        category: "Supplements"
      },
      {
        name: { en: "Cawell’s Multivitamins", ar: "فيتامينات متعددة كاويلز" },
        image: "/images/cawells_logo.png",
        desc: { en: "Comprehensive daily multivitamins designed to support immune function and energy levels.", ar: "فيتامينات متعددة يومية شاملة مصممة لدعم وظائف المناعة ومستويات الطاقة." },
        category: "Supplements"
      }
    ]
  },
  {
    id: "julphar",
    index: 11,
    name: { en: "Julphar", ar: "جلفار" },
    category: "healthcare",
    logo: { en: "/images/julphar_logo_vector.png", ar: "/images/julphar_logo_vector.png" },
    color: "#0A9396",
    origin: { en: "UAE", ar: "الإمارات" },
    desc: {
      en: "Widely recognized healthcare brands like Adol pain relief and Mebo ointment distributed securely under strict health regulations.",
      ar: "علامات تجارية معترف بها للرعاية الصحية مثل مسكن الآلام أدول ومرهم ميبو الموزعة بأمان بموجب الأنظمة الصحية الصارمة."
    },
    details: {
      en: "Julphar Gulf Pharmaceutical Industries is one of the largest pharmaceutical manufacturers in the Middle East. HSHG handles its premium OTC (Over-the-Counter) division, securing safe and timely access to pharmacies.",
      ar: "صناعات جلفار الخليج الدوائية هي واحدة من أكبر الشركات المصنعة للأدوية في الشرق الأوسط. تدير اتش اس اتش جي قسم المنتجات اللاوصفية (OTC) الفاخرة التابع لها، لضمان وصولها الآمن والسريع إلى الصيدليات."
    },
    products: [
      {
        name: { en: "Adol Pain Relief", ar: "مسكن الآلام أدول" },
        image: "/images/julphar_logo_vector.png",
        desc: { en: "Paracetamol-based pain reliever and fever reducer, trusted by families for generations.", ar: "مسكن للآلام وخافض للحرارة يعتمد على الباراسيتامول، تثق به العائلات منذ أجيال." },
        category: "OTC Medicines"
      }
    ]
  },
  {
    id: "smart",
    index: 12,
    name: { en: "Smart", ar: "سمارت" },
    category: "household",
    logo: { en: "/images/smart_logo.png", ar: "/images/smart_logo.png" },
    color: "#2A9D8F",
    origin: { en: "Turkey", ar: "تركيا" },
    desc: {
      en: "Shoe and home care products designed for everyday use, including active cleaners, air fresheners, and leather polish.",
      ar: "منتجات العناية بالأحذية والمنزل المصممة للاستخدام اليومي، بما في ذلك المنظفات النشطة، معطرات الجو، وملمع الجلود."
    },
    details: {
      en: "Smart develops daily home care products and specialized leather shoe polish formulations. Operating out of advanced manufacturing plants, Smart products are highly regarded for efficiency and value.",
      ar: "تعمل سمارت على تطوير منتجات العناية بالمنزل اليومية وتركيبات ملمع الأحذية الجلدية المتخصصة. وبفضل إنتاجها في مصانع متقدمة، تحظى منتجات سمارت بتقدير كبير لكفاءتها وقيمتها."
    },
    products: [
      {
        name: { en: "Smart Liquid Shoe Polish (Black)", ar: "ملمع أحذية سائل سمارت (أسود)" },
        image: "/images/products/smart_liquid_shoe_polish_black.png",
        desc: { en: "Advanced liquid formula that nourishes leather, restores color, and provides instant shine.", ar: "تركيبة سائلة متطورة تغذي الجلد وتستعيد اللون وتوفر لمعاناً فورياً." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Liquid Shoe Polish (Brown)", ar: "ملمع أحذية سائل سمارت (بني)" },
        image: "/images/products/smart_liquid_shoe_polish_brown.png",
        desc: { en: "Protects and restores brown leather footwear with a quick-drying shine.", ar: "يحمي ويجدد الأحذية الجلدية البنية مع لمعان سريع الجفاف." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Liquid Shoe Polish (Neutral)", ar: "ملمع أحذية سائل سمارت (شفاف)" },
        image: "/images/products/smart_liquid_shoe_polish_neutral.png",
        desc: { en: "Clear self-shining liquid polish suitable for all leather shoe colors.", ar: "ملمع سائل شفاف ذاتي اللمعان مناسب لجميع ألوان الأحذية الجلدية." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Cream Polish Black", ar: "كريم ملمع سمارت أسود" },
        image: "/images/products/smart_cream_black.png",
        desc: { en: "Restorative cream polish that covers scuffs and conditions dry leather.", ar: "كريم ملمع ومجدد يغطي الخدوش ويرطب الجلد الجاف." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Cream Polish Brown", ar: "كريم ملمع سمارت بني" },
        image: "/images/products/smart_cream_brown.png",
        desc: { en: "Deep conditioning cream polish that shields brown leather from water damage.", ar: "كريم ملمع ذو ترطيب عميق يحمي الجلد البني من التلف الناتج عن الماء." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Cream Polish Neutral", ar: "كريم ملمع سمارت شفاف" },
        image: "/images/products/smart_cream_neutral.png",
        desc: { en: "Nourishes and protects all leather shades without altering their original color.", ar: "يغذي ويحمي جميع درجات الجلود دون تغيير لونها الأصلي." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Suede & Nubuck Renovator Black", ar: "مجدد جلد السويدي والنوبوك سمارت أسود" },
        image: "/images/products/smart_suede_&_nubuck_renovator_black.png",
        desc: { en: "Specialized spray that revives color and protects suede and nubuck leather.", ar: "بخاخ متخصص يجدد اللون ويحمي جلد السويد والنوبوك." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Suede & Nubuck Renovator Brown", ar: "مجدد جلد السويدي والنوبوك سمارت بني" },
        image: "/images/products/smart_suede_&_nubuck_renovator_brown_01.png",
        desc: { en: "Revitalizes brown suede fabrics and protects against moisture and dirt.", ar: "يعيد الحيوية لأقمشة السويد البنية ويحميها من الرطوبة والأوساخ." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Suede & Nubuck Renovator Neutral", ar: "مجدد جلد السويدي والنوبوك سمارت شفاف" },
        image: "/images/products/smart_suede_&_nubuck_renovator_neutral.png",
        desc: { en: "Waterproofing spray suitable for all colors of suede and nubuck footwear.", ar: "بخاخ مقاوم للماء مناسب لجميع ألوان أحذية السويد والنوبوك." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Elite Cream Polish Black", ar: "كريم ملمع سمارت إيليت أسود" },
        image: "/images/products/smart_elite_cream_polish_black.png",
        desc: { en: "Ultra-premium cream polish formulated with natural beeswax for elite shine.", ar: "كريم تلميع فائق الجودة يحتوي على شمع العسل الطبيعي للمعان راقٍ." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Extra Size Instant Sponge", ar: "إسفنجة تلميع فوري حجم كبير سمارت" },
        image: "/images/products/smart_extra_size_instant_sponge.png",
        desc: { en: "Large-sized instant self-shining sponge that cleans and shines in seconds.", ar: "إسفنجة تلميع فوري ذات حجم كبير تنظف وتلمع في ثوانٍ." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Hobby Sponge Black", ar: "إسفنجة هوبي سمارت أسود" },
        image: "/images/products/smart_hobby_spongeblack.png",
        desc: { en: "High-density sponge designed for easy application of creams and cleaning.", ar: "إسفنجة عالية الكثافة مصممة لتطبيق الكريمات والتنظيف بسهولة." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Lady's Shoe Shampoo", ar: "شامبو الأحذية النسائية سمارت" },
        image: "/images/products/smart_lady's_shoe_shampoo.png",
        desc: { en: "Gentle cleaning shampoo designed specifically for delicate fabrics and leather.", ar: "شامبو تنظيف لطيف مصمم خصيصاً للأقمشة الحساسة والجلود." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Leather Cleaning & Care Gel", ar: "جل تنظيف ورعاية الجلود سمارت" },
        image: "/images/products/smart_leather_cleaning_&_care_gel.png",
        desc: { en: "Multi-action gel that removes dirt and stains while softening leather.", ar: "جل متعدد المفعول يزيل الأوساخ والبقع مع ترطيب الجلود." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Shoe Deo", ar: "مزيل رائحة الأحذية سمارت" },
        image: "/images/products/smart_shoe_deo.png",
        desc: { en: "Refreshing shoe deodorant spray that eliminates odors instantly.", ar: "بخاخ مزيل لرائحة الأحذية المنعش يقضي على الروائح الكريهة فوراً." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Sneaker Cleaner", ar: "منظف الأحذية الرياضية سمارت" },
        image: "/images/products/smart_sneaker_cleaner.png",
        desc: { en: "Deep cleaning foam spray that removes tough dirt and grass stains.", ar: "رغوة تنظيف عميق تزيل الأوساخ العنيدة وبقع العشب." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Paste Polish Brown", ar: "معجون تلميع سمارت بني" },
        image: "/images/products/smart_paste_brown.png",
        desc: { en: "Traditional wax-rich paste that provides a high-gloss water-resistant coating.", ar: "معجون تقليدي غني بالشمع يوفر طبقة لمعان عالية مقاومة للماء." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Paste Polish Neutral", ar: "معجون تلميع سمارت شفاف" },
        image: "/images/products/smart_paste_neutral.png",
        desc: { en: "Clear paste polish that covers surface scratches and restores high gloss.", ar: "معجون تلميع شفاف يغطي الخدوش السطحية ويعيد اللمعان العالي." },
        category: "Shoe Care"
      },
      {
        name: { en: "Smart Active Cleaner", ar: "منظف سمارت أكتيف" },
        image: "/images/products/smart_active_.png",
        desc: { en: "High-performance multi-surface cleaner that cuts through household grime.", ar: "منظف أسطح متعدد الاستخدامات عالي الأداء يقضي على الأوساخ المنزلية." },
        category: "Household"
      },
      {
        name: { en: "Smart Gel Air Freshener Anti-Tabac", ar: "جل معطر جو سمارت مضاد للتبغ" },
        image: "/images/products/smart_gel_air_fresheneranti_tabac.png",
        desc: { en: "Continuous release gel formula that neutralizes tough tobacco odors.", ar: "جل معطر جو مستمر المفعول يعادل روائح التبغ الكريهة." },
        category: "Air Care"
      },
      {
        name: { en: "Smart Gel Air Freshener Lemon Breeze", ar: "جل معطر جو سمارت نسيم الليمون" },
        image: "/images/products/smart_gel_air_freshenerlemon_breeze.png",
        desc: { en: "Fills your space with a fresh, citrusy fragrance that lasts.", ar: "يملأ مكانك بعطر الحمضيات المنعش الذي يدوم طويلاً." },
        category: "Air Care"
      },
      {
        name: { en: "Smart Gel Air Freshener Chamomile", ar: "جل معطر جو سمارت بابونج" },
        image: "/images/products/smart_gel_air_freshenerrchamomille.png",
        desc: { en: "Calming herbal scent that creates a relaxing atmosphere in the home.", ar: "عطر عشبي مهدئ يضفي جوًا من الاسترخاء في المنزل." },
        category: "Air Care"
      },
      {
        name: { en: "Smart Herbal Cleaner", ar: "منظف سمارت العشبي" },
        image: "/images/products/smart_herbal_cleaner.png",
        desc: { en: "Eco-friendly surface cleaner enriched with natural plant extracts.", ar: "منظف أسطح صديق للبيئة غني بمستخلصات نباتية طبيعية." },
        category: "Household"
      }
    ]
  },
  {
    id: "peros",
    index: 13,
    name: { en: "Peros", ar: "بيروس" },
    category: "household",
    logo: { en: "/images/peros_logo.png", ar: "/images/peros_logo.png" },
    color: "#457B9D",
    origin: { en: "Turkey", ar: "تركيا" },
    desc: {
      en: "Laundry detergents, washing capsules, and liquid cleaners representing high-quality fabric care and fresh scents.",
      ar: "منظفات الغسيل، كبسولات الغسيل، والمنظفات السائلة التي تمثل جودة عالية للعناية بالأقمشة والروائح المنعشة."
    },
    details: {
      en: "Peros manufactures high-volume washing powders, laundry detergents, and softeners. Known across the GCC for fabric safety, stain removal efficiency, and long-lasting freshness.",
      ar: "تنتج بيروس مساحيق الغسيل بكميات كبيرة، والمنظفات السائلة، والمنعمات. معروفة في دول الخليج بسلامتها على الأقمشة، وكفاءتها في إزالة البقع، وانتعاشها الذي يدوم طويلاً."
    },
    products: [
      {
        name: { en: "Peros Liquid Laundry Detergent", ar: "سائل غسيل الملابس بيروس" },
        image: "/images/peros_logo.png",
        desc: { en: "Highly effective liquid detergent that protects colored fabrics and removes stains.", ar: "منظف سائل فعال للغاية يحمي الأقمشة الملونة ويزيل البقع الصعبة." },
        category: "Laundry"
      }
    ]
  },
  {
    id: "asperox",
    index: 14,
    name: { en: "Asperox", ar: "أسبيروكس" },
    category: "household",
    logo: { en: "/images/asperox_logo.png", ar: "/images/asperox_logo.png" },
    color: "#1D3557",
    origin: { en: "Turkey", ar: "تركيا" },
    desc: {
      en: "Multi-use surface cleaners, degreasers, and liquid cleaners providing absolute clean and fresh scents.",
      ar: "منظفات الأسطح متعددة الاستخدامات، ومزيلات الدهون، والمنظفات السائلة التي توفر نظافة مطلقة ورائحة منعشة."
    },
    details: {
      en: "Asperox is Turkey's leading brand of liquid degreasers and multi-use surface sprays. Recognized for dissolving grease, oil, and dust within 5 seconds of application.",
      ar: "أسبيروكس هي العلامة التجارية الرائدة في تركيا لمزيلات الدهون وبخاخات الأسطح متعددة الاستخدام. معروفة بقدرتها على إذابة الدهون والزيوت والغبار في غضون ٥ ثوانٍ فقط من تطبيقها."
    },
    products: [
      {
        name: { en: "Asperox Sarı Güç Degreaser", ar: "مزيل الدهون أسبيروكس القوة الصفراء" },
        image: "/images/asperox_logo.png",
        desc: { en: "High-performance degreaser spray that removes kitchen grease in seconds.", ar: "بخاخ مزيل دهون عالي الأداء يزيل شحوم المطبخ في ثوانٍ معدودة." },
        category: "Cleaning Sprays"
      }
    ]
  },
  {
    id: "sparx",
    index: 15,
    name: { en: "Sparx", ar: "سباركس" },
    category: "household",
    logo: { en: "/images/asperox_sparx_logo.png", ar: "/images/asperox_sparx_logo.png" },
    color: "#E63946",
    origin: { en: "Turkey", ar: "تركيا" },
    desc: {
      en: "Dishwashing liquid cleaners, washing capsules, and multi-use cleaning solutions.",
      ar: "منظفات غسيل الصحون السائلة، كبسولات الغسيل، وحلول التنظيف متعددة الاستخدامات."
    },
    details: {
      en: "Sparx develops concentrated dishwashing liquids and active cleaning tablets. Highly appreciated by consumers for grease-cutting formulas and skin-safe pH levels.",
      ar: "تعمل سباركس على تطوير سوائل غسيل الأطباق المركزة وأقراص التنظيف النشطة. تحظى بتقدير كبير من المستهلكين لتركيبتها الفعالة في إزالة الدهون ومستويات الأس الهيدروجيني الآمنة على الجلد."
    },
    products: [
      {
        name: { en: "Sparx dishwashing liquid", ar: "سائل غسيل الصحون سباركس" },
        image: "/images/asperox_sparx_logo.png",
        desc: { en: "Concentrated dishwashing liquid that cuts through oil and grease instantly.", ar: "سائل غسيل صحون مركز يقضي على الزيوت والشحوم فوراً." },
        category: "Dishwashing"
      }
    ]
  },
  {
    id: "maxsport",
    index: 8,
    name: { en: "Max Sport", ar: "ماكس سبورت" },
    category: "food",
    logo: { en: "/images/logo8.png", ar: "/images/logo8.png" },
    color: "#E63946",
    origin: { en: "Slovakia", ar: "سلوفاكيا" },
    desc: {
      en: "High-protein bars, sports nutrition snacks, and functional food bars supporting active lifestyles.",
      ar: "ألواح غنية بالبروتين، وجبات التغذية الرياضية، وألواح الأغذية الوظيفية التي تدعم أنماط الحياة النشطة."
    },
    details: {
      en: "Max Sport develops advanced protein supplements, keto snacks, and energy bars designed for athletes and active consumers seeking healthy dietary solutions.",
      ar: "تعمل ماكس سبورت على تطوير مكملات البروتين المتقدمة، ووجبات الكيتو الخفيفة، وألواح الطاقة المصممة للرياضيين والمستهلكين النشطين الذين يبحثون عن حلول غذائية صحية."
    },
    products: []
  },
  {
    id: "vitaday",
    index: 6,
    name: { en: "Vitaday", ar: "فيتا داي" },
    category: "food",
    logo: { en: "/images/logo6.png", ar: "/images/logo6.png" },
    color: "#1787C8",
    origin: { en: "Thailand", ar: "تايلاند" },
    desc: {
      en: "Vitamin-infused functional beverages, healthy drinks, and daily wellness shots.",
      ar: "مشروبات وظيفية مدعمة بالفيتامينات، مشروبات صحية، وجرعات العافية اليومية."
    },
    details: {
      en: "Vitaday is a leading wellness beverage manufacturer, bringing vitamin C, B-complex, and functional wellness drinks to consumers looking for daily health replenishment.",
      ar: "فيتا داي هي شركة رائدة في تصنيع المشروبات الصحية، حيث تقدم مشروبات فيتامين سي، وفيتامين ب المركب، والمشروبات الوظيفية للمستهلكين الذين يتطلعون لتجديد نشاطهم اليومي."
    },
    products: []
  }
];

// Generate programmatic brands to sum up to 80
const colors = ['#1787C8', '#0A9396', '#005F73', '#2A9D8F', '#E76F51', '#F4A261', '#E9C46A', '#D90429', '#E4572E'];
const mappedIndices = brandsData.map(b => b.index);

for (let i = 1; i <= 80; i++) {
  if (mappedIndices.includes(i)) continue;
  
  let category = 'food';
  if (i >= 71) category = 'retail';
  else if (i >= 61) category = 'electronics';
  else if (i >= 51) category = 'household';
  else if (i >= 43) category = 'healthcare';
  else if (i >= 31) category = 'personal';
  
  const ext = [13, 20, 23, 25, 27].includes(i) ? 'jpg' : 'png';
  
  brandsData.push({
    id: `brand-logo-${i}`,
    index: i,
    name: { en: `Brand Partner ${i}`, ar: `شريك العلامة ${i}` },
    category: category,
    logo: { en: `/images/logo${i}.${ext}`, ar: `/images/logo${i}.${ext}` },
    color: colors[i % colors.length],
    origin: { en: "Global", ar: "عالمي" },
    desc: {
      en: "A valued international brand partner distributed by HSHG United Trading Company across the State of Kuwait.",
      ar: "شريك علامة تجارية دولي قيم يتم توزيعه بواسطة شركة اتش اس اتش جي المتحدة للتجارة في دولة الكويت."
    },
    details: {
      en: "This brand represents our dedication to bringing high-quality products to the local market through efficient supply chain management.",
      ar: "تمثل هذه العلامة التجارية تفانينا في تقديم منتجات عالية الجودة للسوق المحلي من خلال إدارة سلسلة التوريد الفعالة."
    },
    products: []
  });
}

// Sort brands by index to keep original layout order
brandsData.sort((a, b) => a.index - b.index);
