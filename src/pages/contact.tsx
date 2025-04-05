import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-4">
      <Navbar />
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | CreativeDuo</title>
        <meta name="description" content="Get in touch with CreativeDuo for your web development, design, and hosting needs. We're here to help bring your digital vision to life." />
        <meta name="keywords" content="contact, web development, design services, hosting, CreativeDuo" />
      </Helmet>
      
      {/* Hero Section */}
        <div className="relative min-h-[50vh] py-16 md:py-24 mt-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse" />
            <div className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse" />
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <motion.div 
            className="absolute top-1/3 left-1/4"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            >
            <Mail className="w-16 h-16 text-primary/20" />
            </motion.div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold gradient-text font-['Playfair_Display'] leading-tight"
            >
                Let's Create Something Remarkable
            </motion.h1>
            
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-['Inter'] leading-relaxed"
            >
                Your vision, our expertise. Share your ideas and let's craft exceptional digital experiences together.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
            >
                <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform"
                asChild
                >
                <Link to="/contact">
                    Begin Your Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-20 w-24 h-24 border-2 border-accent/20 rounded-full animate-spin-slow" />
            <motion.div 
                className="absolute bottom-20 left-32"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <MessageCircle className="w-12 h-12 text-accent/20" />
            </motion.div>
            </div>
        </div>
        </div>
      
      {/* Contact Section */}
      <Contact />
      
      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12 animate-scale-in">
          <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">Frequently Asked Questions</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
            Find answers to common questions about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{animationDelay: '100ms'}}>
            <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">How long does a typical project take?</h3>
            <p className="text-foreground/70">
              Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. We'll provide a detailed timeline during our initial consultation.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">What information do you need to start a project?</h3>
            <p className="text-foreground/70">
              To get started, we'll need your project goals, target audience, design preferences, and any existing brand assets. The more information you provide, the better we can tailor our solution to your needs.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{animationDelay: '300ms'}}>
            <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">Do you offer maintenance after project completion?</h3>
            <p className="text-foreground/70">
              Yes, we offer ongoing maintenance and support packages to keep your website or application running smoothly. Our team is available to handle updates, security patches, and any issues that may arise.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{animationDelay: '400ms'}}>
            <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">What payment methods do you accept?</h3>
            <p className="text-foreground/70">
              We accept various payment methods including bank transfers, M-Pesa, and major credit cards. We typically require a 50% deposit to begin work, with the remaining balance due upon project completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}