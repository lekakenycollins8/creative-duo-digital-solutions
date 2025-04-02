import { Helmet } from "react-helmet-async"
import Navbar from "@/components/Navbar"
import Pricing from "@/components/Pricing"
import { ArrowRight, Check, Shield, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Wallet, Currency } from "lucide-react";
import { motion } from "framer-motion"

const PricingPage = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-background pt-4">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Pricing Plans | CreativeDuo</title>
        <meta
          name="description"
          content="Explore our transparent pricing options tailored to fit your business needs. No hidden fees, just clear value."
        />
        <meta name="keywords" content="pricing, web development, design services, packages, affordable" />
      </Helmet>

      {/* Pricing Section */}
      <div className="relative py-16 md:py-24 mt-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -top-48 -left-48" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <motion.div
            className="absolute bottom-20 left-20"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <Currency className="w-24 h-24 text-accent/15" />
          </motion.div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-5xl font-bold gradient-text font-['Playfair_Display'] leading-tight"
            >
              Value-Driven Investment Plans
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-['Inter']"
            >
              Straightforward pricing meets exceptional value - find the perfect growth partnership for your business.
            </motion.p>
            <div className="absolute top-1/3 right-32 w-16 h-16 border-2 border-primary/20 rounded-full animate-spin-slow" />
            <motion.div
              className="absolute bottom-20 right-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <Wallet className="w-16 h-16 text-accent/20" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <Pricing />

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12 animate-scale-in">
          <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">Why Choose Our Services</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
            We offer flexible solutions designed to meet your unique business requirements with exceptional quality and
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Competitive Rates</h3>
            <p className="text-foreground/70">
              Our pricing is competitive and offers exceptional value for the quality of service we provide.
            </p>
          </div>

          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">No Hidden Fees</h3>
            <p className="text-foreground/70">
              We believe in transparency, which is why our pricing is straightforward with no hidden costs.
            </p>
          </div>

          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Customizable Packages</h3>
            <p className="text-foreground/70">
              We offer customizable packages to meet the unique needs and budget of your business.
            </p>
          </div>

          <div
            className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Inter']">Dedicated Support</h3>
            <p className="text-foreground/70">
              Our team is dedicated to providing exceptional support and ensuring your complete satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 animate-scale-in">
            <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
              Find answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">Do you offer custom pricing?</h3>
              <p className="text-foreground/70">
                Yes, we understand that every project is unique. If our standard packages don't fit your needs, we're
                happy to create a custom quote tailored to your specific requirements.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">
                What payment methods do you accept?
              </h3>
              <p className="text-foreground/70">
                We accept various payment methods including bank transfers, M-Pesa, and major credit cards. We typically
                require a 50% deposit to begin work, with the remaining balance due upon project completion.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "300ms" }}>
              <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">
                Are there any additional costs?
              </h3>
              <p className="text-foreground/70">
                Our pricing is transparent and includes all the services listed. However, additional features or scope
                changes requested during the project may incur extra costs, which we'll always discuss with you
                beforehand.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "400ms" }}>
              <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">
                Do you offer ongoing maintenance?
              </h3>
              <p className="text-foreground/70">
                Yes, we offer ongoing maintenance and support packages to keep your website or application running
                smoothly. These can be purchased separately or included in your initial package.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 relative overflow-hidden animate-scale-in">
          <div className="absolute inset-0 custom-gradient opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">Ready to Get Started?</h2>
              <p className="text-foreground/80 font-['Inter']">
                Contact us today to discuss your project requirements and find the perfect pricing plan for your needs.
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

export default PricingPage