import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
// import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Pricing from "@/components/Pricing";
import FAQAccordion from "@/components/FAQAccordion/AccordionFAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>CreativeDuo Digital Solutions | Web Development & Design</title>
        <meta name="description" content="CreativeDuo builds professional websites, custom applications, and digital solutions to help your business grow. Based in Nairobi, Kenya." />
        <meta name="keywords" content="web development, web design, digital solutions, Nairobi, Kenya, CreativeDuo" />
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <FAQAccordion />
      <Pricing />
{/*       <About /> */}
      <Contact />
    </div>
  );
};

export default Index;
