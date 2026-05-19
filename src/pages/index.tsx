import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Pricing from "@/components/Pricing";
import FAQAccordion from "@/components/FAQAccordion/AccordionFAQ";
import SEOHead from "@/components/SEOHead";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Custom Web Development & Software Solutions in Nairobi, Kenya"
        description="CreativeDuo builds custom websites, web applications, and business systems for startups, NGOs, and enterprises across Kenya. Expert full-stack development — based in Nairobi, serving East Africa."
        canonical="/"
        keywords="web development Kenya, web developer Nairobi, full-stack developer Kenya, custom software Nairobi, website design Kenya, API integration Kenya, business systems development, React developer Kenya, Next.js developer Nairobi"
        schema={[organizationSchema, websiteSchema, localBusinessSchema]}
      />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <FAQAccordion />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Index;
