export const projects = [
  // 1. KBBF
  {
    title: "Kenyan By Blood Foundation Website",
    description: "A modern nonprofit platform that inspires hope, heritage, and empowerment by connecting Kenyans to life-saving blood donation initiatives.",
    image: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Design & Development",
    details: {
      client: "Kenyan By Blood Foundation",
      duration: "7 weeks",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://iamkenyanbyblood.org/",
      gallery: [
        "https://plus.unsplash.com/premium_photo-1682309704250-6bac0f499665?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1683791895200-201c0c40310f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      challenge:
        "The foundation needed a digital presence that not only educates the public about blood donation but also emotionally engages donors and volunteers while reflecting Kenyan identity.",
      solution:
        "We developed a custom, responsive Next.js website featuring immersive storytelling, powerful CTAs for donating and volunteering, and impactful imagery from the frontlines of blood donation. By using Kenya's national colors (black, red, green, white), motion-driven engagement, and thoughtful design, the site conveys urgency, unity, and hope. SEO-ready structure ensures visibility for Kenyan blood donation keywords.",
    },
  },
  // 2. Safari Centre Mall
  {
    title: "Safari Centre Mall Website",
    description: "A modern commercial hub platform designed to showcase retail outlets, dining experiences, travel amenities, and event activities for one of Naivasha's busiest lifestyle destinations.",
    image: "https://images.unsplash.com/photo-1727950693413-2068d59ea433?fit=crop&crop=faces",
    category: "Commercial & Retail",
    details: {
      client: "Safari Centre Mall",
      duration: "7 Weeks",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Framer Motion", "Node.js"],
      link: "https://www.safaricentres.com",
      gallery: [
        "https://images.unsplash.com/photo-1701278773098-9cfd25e8cde3?fit=crop&crop=faces"
      ],
      challenge: "Safari Centre Mall needed a modern digital presence that could properly position the mall as both a lifestyle destination and a strategic travel stopover along the Nairobi-Nakuru highway. Existing online information was fragmented, making it difficult for travelers and tenants to access store listings, amenities, directions, event updates, and operational details.",
      solution: "The platform was designed with a clean, travel-friendly user experience focused on quick accessibility and mobile responsiveness for users on the move. A scalable content structure was implemented to organize retail outlets, dining brands, wellness services, and event promotions while maintaining strong visual branding aligned with the mall's identity. Performance optimization, intuitive navigation, and responsive layouts ensured smooth browsing across devices, helping improve visibility for tenants and enhancing customer engagement for both local visitors and highway travelers.",
    },
  },
  // 3. ILEWA
  {
    title: "ILEWA Tours & Travel Platform",
    description: "A full-service East African tourism platform combining safari bookings, destination discovery, travel coordination, and cultural e-commerce into one scalable digital experience.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    category: "Tourism & Travel Technology",
    details: {
      client: "ILEWA Tours & Travel",
      duration: "4 Months",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "Node.js",
        "Paystack",
        "REST APIs",
        "Framer Motion",
      ],
      link: "https://ilewatours.com",
      gallery: [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      ],
      challenge: "ILEWA Tours needed a modern platform capable of handling both structured safari packages and flexible custom travel requests across multiple East African destinations. The business also required manual operational coordination for hotels, transport, and equipment rentals while still providing customers with a seamless online booking and payment experience.",
      solution: "The platform was designed as a scalable full-stack tourism system with separate flows for package-based and custom destination bookings. Customers can browse destinations, select accommodation preferences, choose safari services, and complete secure online payments through Paystack. An integrated admin dashboard streamlines booking management, destination updates, operational coordination, and curio shop orders. The interface was optimized for responsiveness, clear navigation, and conversion-focused user experience across desktop and mobile devices.",
    },
  },
  // 4. ThriveWell
  {
    title: "Thrive Well German Nutrition Clinic",
    description: "A clinic website built to convert visitors into booked consultations—clear service pages, insurance billing details upfront, and a frictionless contact experience for a Nairobi-based nutrition practice.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
    category: "Healthcare & Wellness",
    details: {
      client: "Thrive Well German Nutrition Clinic",
      duration: "4 Weeks",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "EmailJS", "Zod", "Radix UI", "Lucide React"],
      link: "https://thrivewellnutritionclinic.com",
      gallery: [
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80"
      ],
      challenge: "The clinic had no web presence and was relying entirely on word-of-mouth referrals. With five distinct service lines—weight management, chronic condition care, sports nutrition, gut health, and corporate wellness—the practice needed a site that communicated each clearly, without overwhelming prospective patients. Insurance and SHA billing acceptance also had to be surfaced prominently, since it directly influenced whether someone would book.",
      solution: "Built a fully responsive site in Next.js 16 with TailwindCSS 4, giving each service its own content-rich section with alternating layouts and a natural color system (leaf greens and warm apricots) matched to the clinic's wellness branding. Consultation requests are handled via a validated EmailJS form with Zod schema enforcement—no backend required. Billing and insurance details are woven into key pages and the global navigation to reduce hesitation before first contact. The result is a fast, accessible site that functions as both a credibility asset and a consistent lead channel.",
    },
  },
  // 5. Business Coaching
  {
    title: "Business Coaching Website",
    description: "Helping entrepreneurs and leaders achieve their goals",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    details: {
      client: "Jackier Training and Development",
      duration: "2 months",
      technologies: ["NextJs", "React", "TailwindCSS", "Shadcn UI"],
      link: "https://jtd-coaching.vercel.app/",
      gallery: [
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Creating a professional and engaging website that effectively communicates the client's coaching services and expertise.",
      solution:
        "We designed a modern, user-friendly website with a focus on clear messaging, testimonials, and easy navigation. The site includes integrated booking and payment systems for coaching sessions.",
    },
  },
  // 6. Nyaore VTC
  {
    title: "Vocational Training Institute Website",
    description:
      "A modern vocational training institute website focused on credibility, practical learning, and student admissions, designed to position the institution as a trusted pathway to employment and self-reliance.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    category: "Education",
    details: {
      client: "St. Joseph's Nyaore Vocational Training Center",
      duration: "6 weeks",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
        "EmailJS",
      ],
      link: "https://nyaore-vocational-and-training-inst.vercel.app/",
      gallery: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "The institution needed a modern digital presence that communicates credibility, practical skills training, and a clear admissions journey while avoiding the outdated appearance common among many vocational school websites.",
      solution:
        "We designed and developed a clean, responsive vocational training website centered around trust, clarity, and conversion-focused user experience. The platform highlights practical learning, institutional credibility, and career-focused programs through structured layouts, branded green-and-black visuals, and strong admissions call-to-actions. Using Next.js, TailwindCSS, and Shadcn UI, the website delivers a modern yet community-rooted experience optimized for both mobile accessibility and future scalability.",
    },
  },
  // 7. CELANI
  {
    title: "CELANI Physiotherapy & Sports Injuries Clinic Website",
    description: "A premium physiotherapy and rehabilitation platform designed to strengthen patient trust, improve local visibility, and streamline appointment inquiries.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop",
    category: "Healthcare",
    details: {
      client: "CELANI Physiotherapy & Sports Injuries Clinic",
      duration: "5 Weeks",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
        "EmailJS",
      ],
      link: "https://celaniphysio.com",
      gallery: [
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop",
      ],
      challenge: "The clinic needed a modern digital presence that reflected the quality of its rehabilitation services while improving trust, mobile usability, and local patient conversions. Their previous branding and online presentation lacked structure, consistency, and clear communication around specialized treatments.",
      solution: "We designed and developed a premium, mobile-first healthcare website focused on clean editorial layouts, clear service architecture, and strong conversion pathways. The platform incorporated SEO-focused service pages, responsive UI systems, WhatsApp and call integrations, and a refined visual identity to position the clinic as a modern rehabilitation and sports injury care provider in Nairobi.",
    },
  },
  // 8. Law Firm
  {
    title: "Law Firm Website",
    description: "Providing legal services with integrity and professionalism",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    category: "Law",
    details: {
      client: "KK Advocates",
      duration: "1 months",
      technologies: ["React", "TailwindCSS", "Material UI"],
      link: "https://kk-law.vercel.app/",
      gallery: [
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1589578228447-e1a4e481c426?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Developing a professional website that reflects the firm's expertise and provides easy access to legal resources for clients.",
      solution:
        "We created a sleek, modern website with a focus on user experience. The site features detailed service descriptions, attorney profiles, and a resource center for clients to access legal information.",
    },
  },
  // 9. Tutor Portfolio
  {
    title: "Tutor Portfolio Website",
    description: "Making learning accessible to everyone",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    category: "Education",
    details: {
      client: "ChivaTutor Hub",
      duration: "2 weeks",
      technologies: ["React", "Next.js"],
      link: "https://www.chivatutorhub.com",
      gallery: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Creating a platform that showcases tutors' expertise while making it easy for students to find and book sessions.",
      solution:
        "We developed a portfolio-style website with payment processing, and admin content management for the website resources relevant for students.",
    },
  },
  // 10. MotionWorks
  {
    title: "Physiotherapy Clinic Website",
    description: "Helping patients recover and regain mobility",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    category: "Health",
    details: {
      client: "MotionWorks Physiotherapy",
      duration: "3 weeks",
      technologies: ["React", "Next.js", "TailwindCSS", "Shadcn UI"],
      link: "https://www.motionworksphysioclinic.com",
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573241330978-2f9a1aeac652?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Creating a user-friendly website that effectively communicates the clinic's services and allows patients to book appointments easily.",
      solution:
        "We designed a clean, modern website with a focus on user experience. The site includes integrated appointment booking, service descriptions, and a way for clients to access the business physiotherapy services.",
    },
  },
  // 11. Blessings
  {
    title: "Blessing Movers & Exhauster — Service Website",
    description: "A responsive marketing website for a multi-county exhauster and transport services company in western Kenya, built to convert visitors into direct service enquiries.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
    category: "Business Website",
    details: {
      client: "Blessing Movers & Exhauster",
      duration: "3 weeks",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Shadcn UI", "Radix UI", "Lucide React"],
      link: "https://blessingsexhauster.co.ke",
      gallery: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
      ],
      challenge: "Blessing Movers & Exhauster had no digital presence despite serving four counties — Kisii, Nyamira, Migori, and Homabay. Customers had no way to verify service coverage, confirm emergency availability, or distinguish the company from informal operators in the area. The client needed a website that built credibility quickly and turned first-time visitors into direct enquiries.",
      solution: "Built a fully responsive single-page site with a structured service catalog covering both exhauster and transport offerings, a county-by-county coverage breakdown, and a multi-channel contact section supporting phone, WhatsApp, and email. TailwindCSS v4 and Shadcn UI components established a clean, trustworthy aesthetic aligned with the brand. Next.js static generation was used for fast load times, while Lucide icons and a clear content hierarchy made the service listing easy to scan on mobile — the primary device for the target audience.",
    },
  },
]
