export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "locale";

export function isLocale(value?: string): value is Locale {
  return value === "en" || value === "ar";
}

export type PricingPlan = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  cta: string;
  features: string[];
  featured?: boolean;
};

export type FooterLink = { label: string; href: string };

export type Dictionary = {
  meta: { title: string; description: string };
  a11y: { skip: string };
  nav: {
    product: string;
    pricing: string;
    faq: string;
    cta: string;
    menu: string;
    primaryAria: string;
    mobileAria: string;
  };
  lang: { switch: string; switchAria: string };
  theme: { toggle: string };
  hero: {
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  mockup: {
    label: string;
    live: string;
    project: string;
    period: string;
    score: string;
    scoreLabel: string;
    lcp: string;
    lcpValue: string;
    inp: string;
    inpValue: string;
    cls: string;
    clsValue: string;
    chartLabel: string;
    healthy: string;
    pagesTitle: string;
    pages: { path: string; lcp: string; trend: string }[];
    alert: string;
    review: string;
  };
  trust: { label: string; logos: string[] };
  stats: { value: string; label: string }[];
  how: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  preview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bullets: string[];
    imageAlt: string;
    caption: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    annual: string;
    save: string;
    perMonth: string;
    monthlyNote: string;
    annualNote: string;
    popular: string;
    note: string;
    plans: PricingPlan[];
  };
  testimonials: {
    title: string;
    items: { quote: string; name: string; role: string; initials: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    note: string;
  };
  footer: {
    tagline: string;
    productTitle: string;
    companyTitle: string;
    productLinks: FooterLink[];
    companyLinks: FooterLink[];
    email: string;
    rights: string;
    status: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "Loadlight: real-user performance monitoring",
    description:
      "Loadlight shows you how real visitors experience your site. Track LCP, INP, and CLS, catch regressions before they hurt revenue, and see the difference every release makes.",
  },
  a11y: { skip: "Skip to content" },
  nav: {
    product: "Product",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Start free trial",
    menu: "Menu",
    primaryAria: "Primary navigation",
    mobileAria: "Mobile navigation",
  },
  lang: { switch: "العربية", switchAria: "Switch language to Arabic" },
  theme: { toggle: "Switch between light and dark mode" },
  hero: {
    titleLead: "See what your users",
    titleAccent: "actually feel.",
    subtitle:
      "Loadlight watches real sessions across your site and turns Core Web Vitals into a short, ranked list of fixes. Slow pages stop quietly costing you customers.",
    primaryCta: "Start free trial",
    secondaryCta: "See live demo",
    note: "No credit card needed. 14-day trial. Setup takes about 5 minutes.",
  },
  mockup: {
    label:
      "Loadlight dashboard preview showing Core Web Vitals and ranked fixes for a live site",
    live: "Live",
    project: "loadlight.dev",
    period: "Last 24 hours",
    score: "98",
    scoreLabel: "Performance score",
    lcp: "LCP",
    lcpValue: "0.8s",
    inp: "INP",
    inpValue: "42ms",
    cls: "CLS",
    clsValue: "0.01",
    chartLabel: "P75 load time",
    healthy: "Everything looks healthy",
    pagesTitle: "Slowest pages",
    pages: [
      { path: "/pricing", lcp: "1.9s", trend: "+12%" },
      { path: "/checkout", lcp: "1.4s", trend: "+6%" },
      { path: "/blog/launch", lcp: "1.1s", trend: "-4%" },
    ],
    alert: "3 regressions found after release 2.4",
    review: "Review fixes",
  },
  trust: {
    label: "Trusted by product teams that ship fast",
    logos: ["Northwind", "Vertexa", "Lumenly", "Orbitstack", "Clearpath"],
  },
  stats: [
    { value: "12k+", label: "Sites monitored" },
    { value: "0.8s", label: "Median LCP" },
    { value: "38%", label: "Fewer slow pages" },
  ],
  how: {
    title: "From first insight to faster releases",
    subtitle:
      "Connect your site once. Loadlight handles the rest in the background.",
    steps: [
      {
        title: "Connect your site",
        description:
          "Add a two-line snippet or point us at your domain. Real-user data starts flowing within minutes.",
      },
      {
        title: "Monitor every session",
        description:
          "We capture LCP, INP, and CLS from real visitors, broken down by device, country, and release.",
      },
      {
        title: "Fix what matters",
        description:
          "Get ranked fixes in plain English and automatic alerts when a release regresses.",
      },
    ],
  },
  features: {
    title: "Everything you need to stay fast",
    subtitle: "A performance toolkit your whole product team can use.",
    items: [
      {
        title: "Real-user monitoring",
        description:
          "Field data from every session, with p75 metrics split by device, country, and route.",
      },
      {
        title: "Regression alerts",
        description:
          "Slack and email alerts when a deploy slows a key page, including the exact release and route.",
      },
      {
        title: "Asset intelligence",
        description:
          "Find oversized images, unused JavaScript, and render-blocking requests before they ship.",
      },
      {
        title: "SEO and i18n audits",
        description:
          "Core Web Vitals, metadata, and right-to-left rendering checks in one weekly report.",
      },
      {
        title: "CI performance gates",
        description:
          "Fail pull requests that break your performance budget, right inside GitHub Actions.",
      },
      {
        title: "Team reporting",
        description:
          "Share clear, client-ready reports and show the impact of every optimization.",
      },
    ],
  },
  preview: {
    eyebrow: "Product tour",
    title: "One dashboard for the full picture",
    subtitle:
      "Loadlight brings field data, release history, and practical fixes into one view. No query language. No data team required.",
    bullets: [
      "Route-level p75 trends from real devices",
      "Release markers with instant regression detection",
      "Ranked fixes with estimated millisecond savings",
      "A weekly digest your stakeholders will actually read",
    ],
    imageAlt:
      "Loadlight product dashboard with performance charts and fix suggestions",
    caption:
      "The Loadlight dashboard with live field data, release markers, and ranked fixes.",
  },
  pricing: {
    title: "Simple pricing that grows with you",
    subtitle:
      "Start free for 14 days. Upgrade when you need more traffic, seats, or history.",
    monthly: "Monthly",
    annual: "Annual",
    save: "Save 20%",
    perMonth: "/mo",
    monthlyNote: "Billed monthly",
    annualNote: "Billed annually",
    popular: "Most popular",
    note: "Every plan includes unlimited users, SSL, and 30 days of data history. Cancel anytime.",
    plans: [
      {
        name: "Starter",
        tagline: "For side projects and single sites",
        monthly: 19,
        annual: 15,
        cta: "Start free trial",
        features: [
          "1 site",
          "50k page views / mo",
          "Real-user Core Web Vitals",
          "Email alerts",
          "7-day history",
        ],
      },
      {
        name: "Growth",
        tagline: "For product teams that ship every week",
        monthly: 49,
        annual: 39,
        cta: "Start free trial",
        featured: true,
        features: [
          "10 sites",
          "500k page views / mo",
          "Slack and email alerts",
          "CI performance gates",
          "90-day history",
          "Team reports",
        ],
      },
      {
        name: "Scale",
        tagline: "For agencies and high-traffic apps",
        monthly: 99,
        annual: 79,
        cta: "Talk to sales",
        features: [
          "Unlimited sites",
          "2M page views / mo",
          "Custom performance budgets",
          "SSO and audit logs",
          "1-year history",
          "Priority support",
        ],
      },
    ],
  },
  testimonials: {
    title: "Teams catch problems before customers do",
    items: [
      {
        quote:
          "We caught a checkout regression 20 minutes after deploy. That used to cost us a weekend of revenue.",
        name: "Maya Chen",
        role: "Head of Product, Northwind",
        initials: "MC",
      },
      {
        quote:
          "The ranked fixes are the first performance reports our designers actually read.",
        name: "Omar Haddad",
        role: "Engineering Lead, Orbitstack",
        initials: "OH",
      },
    ],
  },
  faq: {
    title: "Questions, answered",
    subtitle: "What you need to know before you start your trial.",
    items: [
      {
        question: "How does Loadlight collect real-user data?",
        answer:
          "A tiny script (under 2 KB) measures Core Web Vitals from real sessions and sends aggregated, anonymized metrics to our edge network.",
      },
      {
        question: "Do I need to change my hosting or framework?",
        answer:
          "No. Loadlight works with any stack, including Next.js, WordPress, Shopify, or a custom app, through a script tag or our SDK.",
      },
      {
        question: "What happens after the 14-day trial?",
        answer:
          "You can stay on the free Starter plan for one site or upgrade in one click. You do not need a card to start.",
      },
      {
        question: "Can I monitor staging and preview deploys?",
        answer:
          "Yes. Add the snippet to preview environments and tag releases to get regression alerts before production.",
      },
      {
        question: "Is Loadlight GDPR compliant?",
        answer:
          "We collect aggregated performance timings only. No cookies, no personal data, and your data is stored in the EU by default.",
      },
    ],
  },
  cta: {
    title: "Ready to see what your users feel?",
    subtitle:
      "Start a free 14-day trial and get your first ranked performance report in minutes.",
    primary: "Start free trial",
    secondary: "Book a demo",
    note: "No credit card required.",
  },
  footer: {
    tagline:
      "Real-user performance monitoring for teams that care how fast their site feels.",
    productTitle: "Product",
    companyTitle: "Company",
    productLinks: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Product tour", href: "#preview" },
      { label: "FAQ", href: "#faq" },
    ],
    companyLinks: [
      { label: "Contact", href: "mailto:hello@loadlight.dev" },
      { label: "Start free trial", href: "#pricing" },
      {
        label: "Book a demo",
        href: "mailto:hello@loadlight.dev?subject=Loadlight%20demo",
      },
    ],
    email: "hello@loadlight.dev",
    rights: "All rights reserved.",
    status: "All systems operational",
  },
};

const ar: Dictionary = {
  meta: {
    title: "لودلايت: مراقبة أداء المستخدمين الحقيقيين",
    description:
      "يعرض لك Loadlight كيف يعيش الزوار موقعك فعلاً. راقب LCP وINP وCLS، واكتشف أي تراجع قبل أن يؤثر على إيراداتك، واعرف أثر كل إصدار.",
  },
  a11y: { skip: "انتقل إلى المحتوى" },
  nav: {
    product: "المنتج",
    pricing: "الأسعار",
    faq: "الأسئلة الشائعة",
    cta: "ابدأ التجربة المجانية",
    menu: "القائمة",
    primaryAria: "التنقل الرئيسي",
    mobileAria: "تنقل الجوال",
  },
  lang: { switch: "English", switchAria: "تغيير اللغة إلى الإنجليزية" },
  theme: { toggle: "التبديل بين الوضع الفاتح والداكن" },
  hero: {
    titleLead: "شاهد ما يشعر به",
    titleAccent: "مستخدموك فعلاً.",
    subtitle:
      "يراقب Loadlight الجلسات الحقيقية على موقعك ويحوّل مؤشرات الأداء الأساسية إلى قائمة إصلاحات قصيرة ومرتبة. هكذا تتوقف الصفحات البطيئة عن خسارة عملائك من دون أن تلاحظ.",
    primaryCta: "ابدأ التجربة المجانية",
    secondaryCta: "شاهد العرض التوضيحي",
    note: "لا حاجة إلى بطاقة بنكية. تجربة 14 يومًا. الإعداد يستغرق نحو 5 دقائق.",
  },
  mockup: {
    label:
      "معاينة لوحة Loadlight تعرض مؤشرات الأداء الأساسية والإصلاحات المرتبة لموقع مباشر",
    live: "مباشر",
    project: "loadlight.dev",
    period: "آخر 24 ساعة",
    score: "98",
    scoreLabel: "درجة الأداء",
    lcp: "LCP",
    lcpValue: "0.8s",
    inp: "INP",
    inpValue: "42ms",
    cls: "CLS",
    clsValue: "0.01",
    chartLabel: "زمن التحميل P75",
    healthy: "كل الأنظمة تعمل",
    pagesTitle: "أبطأ الصفحات",
    pages: [
      { path: "/pricing", lcp: "1.9s", trend: "+12%" },
      { path: "/checkout", lcp: "1.4s", trend: "+6%" },
      { path: "/blog/launch", lcp: "1.1s", trend: "-4%" },
    ],
    alert: "رُصدت 3 تراجعات بعد الإصدار 2.4",
    review: "راجع الإصلاحات",
  },
  trust: {
    label: "تثق بها فرق منتجات تنشر بسرعة",
    logos: ["Northwind", "Vertexa", "Lumenly", "Orbitstack", "Clearpath"],
  },
  stats: [
    { value: "12k+", label: "موقعًا تحت المراقبة" },
    { value: "0.8s", label: "وسيط LCP" },
    { value: "38%", label: "صفحات بطيئة أقل" },
  ],
  how: {
    title: "من أول رؤية إلى إصدارات أسرع",
    subtitle: "اربط موقعك مرة واحدة، ويتولى Loadlight الباقي في الخلفية.",
    steps: [
      {
        title: "اربط موقعك",
        description:
          "أضف سطرًا برمجيًا قصيرًا أو وجّهنا إلى نطاقك، وتبدأ بيانات المستخدمين الحقيقيين بالتدفق خلال دقائق.",
      },
      {
        title: "راقب كل جلسة",
        description:
          "نجمع LCP وINP وCLS من الزوار الفعليين، مقسّمة حسب الجهاز والدولة والإصدار.",
      },
      {
        title: "أصلح الأهم",
        description:
          "احصل على إصلاحات مرتبة بلغة واضحة وتنبيهات تلقائية عندما يتراجع أي إصدار.",
      },
    ],
  },
  features: {
    title: "كل ما تحتاجه لتبقى سريعًا",
    subtitle: "صندوق أدوات أداء يستطيع فريق المنتج كله استخدامه.",
    items: [
      {
        title: "مراقبة المستخدمين الحقيقيين",
        description:
          "بيانات ميدانية من كل جلسة، بمؤشرات p75 مقسّمة حسب الجهاز والدولة والمسار.",
      },
      {
        title: "تنبيهات التراجع",
        description:
          "تنبيهات Slack والبريد عند إبطاء أي صفحة رئيسية، مع الإصدار والمسار المحددين.",
      },
      {
        title: "ذكاء الأصول",
        description:
          "اكتشف الصور الضخمة وجافاسكريبت غير المستخدمة والطلبات المعيقة قبل النشر.",
      },
      {
        title: "تدقيق SEO والتدويل",
        description:
          "مؤشرات الأداء الأساسية والبيانات الوصفية والعرض من اليمين إلى اليسار في تقرير أسبوعي واحد.",
      },
      {
        title: "بوابات الأداء في CI",
        description:
          "أوقف طلبات الدمج التي تكسر ميزانية الأداء مباشرة في GitHub Actions.",
      },
      {
        title: "تقارير الفريق",
        description:
          "شارك تقارير واضحة جاهزة للعميل وأثبت أثر كل تحسين.",
      },
    ],
  },
  preview: {
    eyebrow: "جولة المنتج",
    title: "لوحة واحدة تعرض الصورة كاملة",
    subtitle:
      "يجمع Loadlight البيانات الميدانية وسجل الإصدارات والإصلاحات العملية في عرض واحد. بلا لغة استعلام وبلا حاجة إلى فريق بيانات.",
    bullets: [
      "اتجاهات p75 على مستوى المسار من أجهزة حقيقية",
      "علامات الإصدارات مع كشف فوري للتراجع",
      "إصلاحات مرتبة مع تقدير التوفير بالمللي ثانية",
      "ملخص أسبوعي يقرأه أصحاب المصلحة فعلاً",
    ],
    imageAlt: "لوحة منتج Loadlight مع مخططات أداء واقتراحات إصلاح",
    caption:
      "لوحة Loadlight مع بيانات ميدانية مباشرة وعلامات إصدارات وإصلاحات مرتبة.",
  },
  pricing: {
    title: "أسعار بسيطة تنمو معك",
    subtitle:
      "ابدأ مجانًا 14 يومًا، وترقَّ عندما تحتاج مزيدًا من الزيارات أو المقاعد أو السجل.",
    monthly: "شهري",
    annual: "سنوي",
    save: "وفّر 20%",
    perMonth: "/شهر",
    monthlyNote: "تُدفع شهريًا",
    annualNote: "تُدفع سنويًا",
    popular: "الأكثر اختيارًا",
    note: "تشمل كل الخطط مستخدمين غير محدودين وشهادة SSL واحتفاظًا بالبيانات 30 يومًا. ألغِ في أي وقت.",
    plans: [
      {
        name: "Starter",
        tagline: "للمشاريع الجانبية والموقع الواحد",
        monthly: 19,
        annual: 15,
        cta: "ابدأ التجربة المجانية",
        features: [
          "موقع واحد",
          "50 ألف مشاهدة شهريًا",
          "مؤشرات الأداء من المستخدمين الحقيقيين",
          "تنبيهات بالبريد",
          "سجل 7 أيام",
        ],
      },
      {
        name: "Growth",
        tagline: "لفرق المنتجات التي تنشر كل أسبوع",
        monthly: 49,
        annual: 39,
        cta: "ابدأ التجربة المجانية",
        featured: true,
        features: [
          "10 مواقع",
          "500 ألف مشاهدة شهريًا",
          "تنبيهات Slack والبريد",
          "بوابات الأداء في CI",
          "سجل 90 يومًا",
          "تقارير الفريق",
        ],
      },
      {
        name: "Scale",
        tagline: "للوكالات والتطبيقات عالية الزيارات",
        monthly: 99,
        annual: 79,
        cta: "تحدث مع المبيعات",
        features: [
          "مواقع غير محدودة",
          "مليونا مشاهدة شهريًا",
          "ميزانيات أداء مخصصة",
          "SSO وسجلات تدقيق",
          "سجل سنة كاملة",
          "دعم ذو أولوية",
        ],
      },
    ],
  },
  testimonials: {
    title: "فرق تكتشف المشكلات قبل أن يلاحظها العملاء",
    items: [
      {
        quote:
          "اكتشفنا تراجعًا في صفحة الدفع بعد 20 دقيقة من النشر. في السابق كان ذلك يكلفنا عطلة كاملة من الإيرادات.",
        name: "مايا تشين",
        role: "رئيسة المنتج، Northwind",
        initials: "MC",
      },
      {
        quote:
          "تقارير الإصلاحات المرتبة هي أول تقارير أداء يقرأها فريق التصميم فعلاً.",
        name: "عمر حداد",
        role: "قائد الهندسة، Orbitstack",
        initials: "OH",
      },
    ],
  },
  faq: {
    title: "أسئلة نجيب عنها",
    subtitle: "كل ما تحتاج معرفته قبل بدء التجربة.",
    items: [
      {
        question: "كيف يجمع Loadlight بيانات المستخدمين الحقيقيين؟",
        answer:
          "سكربت صغير (أقل من 2 كيلوبايت) يقيس مؤشرات الأداء من الجلسات الفعلية ويرسل بيانات مجمعة ومجهولة الهوية إلى شبكتنا الطرفية.",
      },
      {
        question: "هل أحتاج إلى تغيير الاستضافة أو الإطار؟",
        answer:
          "لا. يعمل Loadlight مع أي تقنية، مثل Next.js أو WordPress أو Shopify أو تطبيق مخصص، عبر وسم سكربت أو حزمة SDK.",
      },
      {
        question: "ماذا يحدث بعد التجربة المجانية؟",
        answer:
          "يمكنك الاستمرار في خطة Starter المجانية لموقع واحد أو الترقية بنقرة واحدة. لا تحتاج إلى بطاقة للبدء.",
      },
      {
        question: "هل يمكنني مراقبة بيئات الاختبار والمعاينات؟",
        answer:
          "نعم. أضف السكربت إلى بيئات المعاينة ووسم الإصدارات لتصلك تنبيهات التراجع قبل الإنتاج.",
      },
      {
        question: "هل Loadlight متوافق مع GDPR؟",
        answer:
          "نجمع توقيتات أداء مجمعة فقط. بلا ملفات تعريف ارتباط وبلا بيانات شخصية، وتُخزّن البيانات في الاتحاد الأوروبي افتراضيًا.",
      },
    ],
  },
  cta: {
    title: "جاهز لترى ما يشعر به مستخدموك؟",
    subtitle:
      "ابدأ تجربة مجانية 14 يومًا واحصل على أول تقرير أداء مرتب خلال دقائق.",
    primary: "ابدأ التجربة المجانية",
    secondary: "احجز عرضًا توضيحيًا",
    note: "بدون بطاقة بنكية.",
  },
  footer: {
    tagline:
      "مراقبة أداء المستخدمين الحقيقيين لفرق تهتم بمدى سرعة موقعها.",
    productTitle: "المنتج",
    companyTitle: "الشركة",
    productLinks: [
      { label: "المزايا", href: "#features" },
      { label: "الأسعار", href: "#pricing" },
      { label: "جولة المنتج", href: "#preview" },
      { label: "الأسئلة الشائعة", href: "#faq" },
    ],
    companyLinks: [
      { label: "تواصل معنا", href: "mailto:hello@loadlight.dev" },
      { label: "ابدأ التجربة", href: "#pricing" },
      {
        label: "احجز عرضًا",
        href: "mailto:hello@loadlight.dev?subject=Loadlight%20demo",
      },
    ],
    email: "hello@loadlight.dev",
    rights: "جميع الحقوق محفوظة.",
    status: "كل الأنظمة تعمل",
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "ar" ? ar : en;
}

export function getLocaleFromCookie(value?: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
