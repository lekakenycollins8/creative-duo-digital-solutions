export const SITE = {
  name: "CreativeDuo Digital Solutions",
  shortName: "CreativeDuo",
  url: "https://www.creativeduodigitalsolutions.com",
  description:
    "CreativeDuo builds custom websites, web applications, and business systems for startups, NGOs, and enterprises across Kenya and East Africa. Based in Nairobi.",
  logo: "/duo.svg",
  ogImage: "/og-image.jpg",
  twitterHandle: "@CreativeDuoKE",
  email: "lekakenycollins8@gmail.com",
  phone: "+254702274352",
  address: {
    streetAddress: "Nairobi",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    postalCode: "00100",
    addressCountry: "KE",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}${SITE.logo}`,
    contentUrl: `${SITE.url}${SITE.logo}`,
  },
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.addressLocality,
    addressRegion: SITE.address.addressRegion,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.addressCountry,
  },
  email: SITE.email,
  telephone: SITE.phone,
  founder: [
    {
      "@type": "Person",
      name: "Gideon Lemiso",
      jobTitle: "Full-Stack Software Developer",
      worksFor: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "Person",
      name: "Collins Lekakeny",
      jobTitle: "Full-Stack Software Developer",
      worksFor: { "@id": `${SITE.url}/#organization` },
    },
  ],
  areaServed: [
    { "@type": "City", name: "Nairobi" },
    { "@type": "Country", name: "Kenya" },
    { "@type": "Place", name: "East Africa" },
  ],
  knowsAbout: [
    "Web Development",
    "Full-Stack Application Development",
    "React Development",
    "Next.js",
    "Node.js",
    "API Integration",
    "Custom Business Software",
    "Website Design",
    "Mobile App Development",
    "Software Engineering",
    "Digital Solutions Kenya",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/portfolio?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE.url}/#localbusiness`,
  name: SITE.name,
  image: `${SITE.url}/og-image.jpg`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "KSh",
  currenciesAccepted: "KES",
  paymentAccepted: "Bank Transfer, M-Pesa, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.addressLocality,
    addressRegion: SITE.address.addressRegion,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.286389,
    longitude: 36.817223,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Nairobi" },
    { "@type": "Country", name: "Kenya" },
    { "@type": "Place", name: "East Africa" },
  ],
  description: SITE.description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Stack Web Application Development",
          description:
            "End-to-end web application development using React, Next.js, Node.js, and PostgreSQL. Built for scale, performance, and long-term maintainability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Professional Website Design & Development",
          description:
            "Custom, mobile-first websites designed to convert visitors into customers. Crafted with modern UI frameworks and performance-first architecture.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API Integration & Development",
          description:
            "Seamless third-party integrations — M-Pesa Daraja API, Paystack, Stripe, ERP systems, CRMs, and custom REST APIs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Business Systems",
          description:
            "Bespoke management systems, dashboards, and automation tools that eliminate manual processes and drive operational efficiency.",
        },
      },
    ],
  },
};

export const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CreativeDuo Digital Solutions — Services",
  description:
    "Professional web development and software engineering services for businesses in Nairobi, Kenya and East Africa.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        "@id": `${SITE.url}/services#fullstack`,
        name: "Full-Stack Application Development",
        description:
          "Robust, scalable web applications tailored to your business needs. We cover the full technology stack — from database architecture and server-side logic to responsive, accessible front-end interfaces.",
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "Kenya",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        "@id": `${SITE.url}/services#webdesign`,
        name: "Web Design & Development",
        description:
          "Visually compelling, performance-optimised websites that convert first-time visitors into loyal customers. Mobile-first, SEO-ready, and built for speed.",
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "Kenya",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        "@id": `${SITE.url}/services#api`,
        name: "API Integration & Development",
        description:
          "Connect your platforms with payment gateways, CRMs, ERPs, and custom data pipelines. We design and build reliable, documented APIs that power your business workflows.",
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "Kenya",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        "@id": `${SITE.url}/services#support`,
        name: "Website Maintenance & Support",
        description:
          "Proactive maintenance, security updates, performance monitoring, and dedicated technical support to keep your digital products running at peak performance.",
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "Kenya",
      },
    },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const generalFaqs = [
  {
    question: "What services does CreativeDuo Digital Solutions offer?",
    answer:
      "CreativeDuo offers full-stack web application development, professional website design and development, API integration and custom API development, custom business management systems, website maintenance and support, and managed web hosting. We serve startups, NGOs, personal brands, and established businesses across Nairobi and Kenya.",
  },
  {
    question: "How much does it cost to build a website in Kenya?",
    answer:
      "Website development costs in Kenya vary by scope. A professional business website typically starts from KSh 30,000. A full-featured web application or e-commerce platform ranges from KSh 80,000 to KSh 300,000+. Enterprise systems are quoted based on detailed requirements. We provide transparent, itemized quotes with no hidden fees.",
  },
  {
    question: "How long does web development take?",
    answer:
      "A professional business website typically takes 2–5 weeks. Complex web applications or custom business systems may take 6–16 weeks depending on features, integrations, and content requirements. We provide a detailed project timeline during the initial discovery session and deliver regular milestone updates throughout the project.",
  },
  {
    question: "Do you work with clients outside Nairobi?",
    answer:
      "Yes. While we are based in Nairobi, Kenya, we work with clients across Kenya, East Africa, and internationally. Our remote collaboration process uses regular video calls, shared project management tools, and milestone-based delivery to ensure seamless communication regardless of location.",
  },
  {
    question: "What technologies does CreativeDuo use?",
    answer:
      "Our primary stack includes React, Next.js, TypeScript, Node.js, Express, Python, Django, PostgreSQL, MongoDB, MySQL, and TailwindCSS. For integrations, we work with M-Pesa Daraja API, Paystack, Stripe, and various third-party platforms. Deployments are handled via AWS, Vercel, and Netlify.",
  },
  {
    question: "Do you provide maintenance after project completion?",
    answer:
      "Yes. We offer ongoing maintenance and support packages covering security patches, performance monitoring, content updates, and technical support. Monthly maintenance plans start from KSh 5,000 depending on platform complexity. Every project also includes a standard 30-day post-launch support period at no additional cost.",
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer:
      "Yes. We assist with domain registration, DNS configuration, SSL certificate setup, and managed web hosting. Our hosting plans start from KSh 350/month and include SSD storage, free SSL, 99.9% uptime guarantee, and dedicated technical support.",
  },
  {
    question: "How do I pay for a web development project?",
    answer:
      "We accept M-Pesa, bank transfer, and major credit cards. Projects typically require a 50% deposit to begin work, with the remaining balance due upon completion. For larger or phased projects, we structure milestone-based payment schedules aligned with deliverables.",
  },
];

export const contactFaqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple business website takes 2–3 weeks, a feature-rich web application takes 6–12 weeks, and a complex enterprise system may take 3–5 months. We provide a detailed timeline during our initial consultation and maintain transparent communication at every milestone.",
  },
  {
    question: "What information do you need to start a project?",
    answer:
      "To get started, we need your project goals, target audience, design preferences (brand colours, references), and any existing brand assets. The more context you provide, the better we can tailor our solution. A discovery call is always the best first step.",
  },
  {
    question: "Do you offer maintenance after project completion?",
    answer:
      "Yes. We offer ongoing maintenance and support packages to keep your website or application running smoothly — security patches, performance optimisation, content updates, and technical support. Maintenance plans start from KSh 5,000/month.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, bank transfers, and major credit cards. We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. Milestone-based payment schedules are available for larger projects.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    answer:
      "Absolutely. We regularly take on website redesigns, performance overhauls, and feature additions for existing platforms. We'll audit your current site, identify weaknesses, and propose improvements that increase speed, conversion, and search visibility.",
  },
  {
    question: "Do you sign NDAs or contracts?",
    answer:
      "Yes. We provide a clear project contract outlining deliverables, timelines, payment terms, and IP ownership before any work begins. We are also happy to sign NDAs for sensitive or proprietary projects.",
  },
];

export const pricingFaqs = [
  {
    question: "Do you offer custom pricing?",
    answer:
      "Yes. Every project is unique. If our standard packages don't match your requirements, we provide custom quotes tailored to your scope, timeline, and budget. Contact us for a detailed estimate.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, bank transfers, and major credit cards. Projects require a 50% deposit to begin, with the balance due upon completion. Milestone-based payment schedules are available for larger engagements.",
  },
  {
    question: "Are there any additional costs beyond the quoted price?",
    answer:
      "Our pricing is transparent and includes all listed services. Scope changes or additional features requested mid-project may incur extra costs, which we always discuss and agree upon with you before proceeding.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. We offer monthly maintenance and support plans to keep your website or application performing optimally. These can be added to any package or purchased separately after project completion.",
  },
  {
    question: "What is the typical cost of a website in Kenya?",
    answer:
      "A professional business website in Kenya typically starts from KSh 30,000. E-commerce sites and web applications range from KSh 80,000 to KSh 300,000+. Enterprise platforms are quoted per requirements. All prices are transparent with no hidden fees.",
  },
];

export const hostingFaqs = [
  {
    question: "What is SSD storage and why does it matter?",
    answer:
      "SSD (Solid State Drive) storage uses flash memory, delivering significantly faster read/write speeds than traditional hard drives. This directly improves website load times, which is a Google ranking factor and a key driver of user experience and conversion rates.",
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Yes. You can upgrade your hosting plan at any time. The transition is seamless with zero downtime during the upgrade process. We handle all migrations and configuration changes on your behalf.",
  },
  {
    question: "What is included with the free SSL certificate?",
    answer:
      "Every plan includes a free Let's Encrypt SSL certificate, which encrypts all data exchanged between your website and visitors. This is essential for Google ranking, PCI compliance, and building visitor trust (shown as the padlock in browser address bars).",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes. We offer a 30-day money-back guarantee on all hosting plans. If you are not satisfied with the service within the first 30 days, you can request a full refund — no questions asked.",
  },
  {
    question: "Do you provide website migration from another host?",
    answer:
      "Yes. We offer free website migration for new hosting customers. Our technical team handles the full transfer of files, databases, and DNS configuration to ensure a smooth, zero-downtime transition.",
  },
];
