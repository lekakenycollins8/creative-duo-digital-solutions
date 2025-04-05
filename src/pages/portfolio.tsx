import { Helmet } from "react-helmet-async"
import Navbar from "@/components/Navbar"
import Portfolio from "@/components/Portfolio"
import { ArrowRight, Palette } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const PortfolioPage = () => {
  return (
    <>
    <Navbar />
    {/* Main Container */}
    <div className="min-h-screen bg-background pt-4">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Portfolio | CreativeDuo</title>
        <meta
          name="description"
          content="Explore our diverse range of projects that showcase our expertise in web development, design, and digital solutions."
        />
        <meta name="keywords" content="portfolio, web development, design, projects, case studies" />
      </Helmet>

    {/* Portfolio Section */}
    <div className="relative min-h-[40vh] py-12 md:py-24 overflow-hidden">
       <div className="absolute inset-0 -z-10">
      <div className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse" />
      <div className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      {/* Added multiple floating elements */}
      <motion.div 
        className="absolute top-1/3 left-1/4"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Palette className="w-16 h-16 text-primary/20" />
      </motion.div>
      {/* Added geometric shapes */}
      <div className="absolute top-1/4 left-3/4 w-32 h-32 border-2 border-primary/20 rotate-45 animate-bounce-slow" />
      <div className="absolute bottom-1/4 left-1/6 w-16 h-16 bg-accent/10 rounded-lg animate-float" />
       </div>
       <div className="container mx-auto px-4 max-w-6xl">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-2 gradient-text font-['Playfair_Display'] leading-tight"
        >
          Creative Showcase Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-['Inter'] leading-relaxed"
        >
          Explore our digital canvas of innovation - where technology meets artistic vision to create remarkable digital experiences.
        </motion.p>
        {/* Added stats section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mt-8"
        >
          <div className="text-center">
         <h3 className="text-3xl font-bold gradient-text">50+</h3>
         <p className="text-sm text-foreground/70">Projects Completed</p>
          </div>
          <div className="text-center">
         <h3 className="text-3xl font-bold gradient-text">98%</h3>
         <p className="text-sm text-foreground/70">Client Satisfaction</p>
          </div>
          <div className="text-center">
         <h3 className="text-3xl font-bold gradient-text">5+</h3>
         <p className="text-sm text-foreground/70">Years Experience</p>
          </div>
        </motion.div>
        <div className="absolute top-1/4 right-20 w-24 h-24 border-2 border-accent/20 rounded-full animate-spin-slow" />
      </div>
       </div>
     </div>
      {/* Portfolio Section */}
      <Portfolio />

      {/* Project Highlights Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12 animate-scale-in">
          <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">Project Highlights</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
            Our work is defined by attention to detail, innovative thinking, and a commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Innovative Design</h3>
            <p className="text-foreground/70">
              Our design solutions are tailored to meet the unique needs of each client, ensuring a memorable user
              experience.
            </p>
          </div>

          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Client-Centric Approach</h3>
            <p className="text-foreground/70">
              We work closely with our clients to understand their goals and deliver solutions that exceed expectations.
            </p>
          </div>

          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Seamless Experiences</h3>
            <p className="text-foreground/70">
              Our projects focus on creating seamless and intuitive experiences for users across all platforms.
            </p>
          </div>

          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Cutting-Edge Technology</h3>
            <p className="text-foreground/70">
              We leverage the latest technologies to deliver innovative solutions that drive business success.
            </p>
          </div>

          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Award-Winning Projects</h3>
            <p className="text-foreground/70">
              Our portfolio includes award-winning projects that have been recognized for their creativity and impact.
            </p>
          </div>

          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Sustainable Design</h3>
            <p className="text-foreground/70">
              We are committed to sustainable design practices that minimize environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 relative overflow-hidden animate-scale-in">
          <div className="absolute inset-0 custom-gradient opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">
                Ready to Start Your Project?
              </h2>
              <p className="text-foreground/80 font-['Inter']">
                Let's discuss how we can help you achieve your business goals with our tailored digital solutions.
              </p>
            </div>
            <Button size="lg" asChild className="interactive-element">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PortfolioPage;