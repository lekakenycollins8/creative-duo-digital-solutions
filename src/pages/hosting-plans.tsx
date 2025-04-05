"use client"

import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { Check, ChevronRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { Server, Cloud, Rocket, Database, Zap, Shield } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/Navbar"

const hostingPlans = [
  {
    name: "Starter Plan",
    price: {
      monthly: "350",
      yearly: "3,500",
    },
    description: "Perfect for personal websites and small projects",
    features: [
      "5GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "5 Email Accounts",
      "Basic Support",
      "1 Website",
    ],
  },
  {
    name: "Basic Plan",
    price: {
      monthly: "700",
      yearly: "7,000",
    },
    description: "Great for small businesses and growing websites",
    features: [
      "20GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "Priority Support",
      "5 Websites",
    ],
  },
  {
    name: "Business Plan",
    popular: true,
    price: {
      monthly: "1,200",
      yearly: "12,000",
    },
    description: "Ideal for established businesses with multiple sites",
    features: [
      "50GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "24/7 Support",
      "Unlimited Websites",
      "Free Domain Name",
    ],
  },
  {
    name: "Enterprise Plan",
    price: {
      monthly: "1,700",
      yearly: "17,000",
    },
    description: "Advanced solution for high-traffic websites and applications",
    features: [
      "100GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "24/7 Premium Support",
      "Unlimited Websites",
      "Free Domain Name",
      "Dedicated IP",
    ],
  },
]

export default function HostingPlans() {
  const [billingCycle, setBillingCycle] = useState("yearly")

  return (
    <>
      <Navbar />
      {/* SEO Meta Tags */}
      <br></br><br></br>
      <Helmet>
        <title>Hosting Plans | CreativeDuo</title>
        <meta
          name="description"
          content="Choose from our range of hosting plans designed to meet your website needs. From starter to enterprise solutions."
        />
        <meta name="keywords" content="web hosting, hosting plans, website hosting, cloud hosting" />
      </Helmet>

      {/* Main Content Container */}
      <div className="pt-20 min-h-screen bg-background">
        {/* Hero Section */}
        <div className="absolute inset-0 -z-10 min-h-[60vh] py-16 md:py-24 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Floating icons */}
        <motion.div 
          className="absolute top-1/4 left-1/4"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Server className="w-16 h-16 text-primary/30" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Cloud className="w-16 h-16 text-accent/30" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 gradient-text leading-tight">
              Choose Your Perfect Hosting Plan
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 leading-relaxed font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We offer flexible hosting solutions to help you get your website up and running quickly. Select the plan
            that best fits your needs.
          </motion.p>

          {/* Feature icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { icon: <Rocket className="w-6 h-6" />, text: "Instant Deployment" },
              { icon: <Database className="w-6 h-6" />, text: "99.9% Uptime" },
              { icon: <Zap className="w-6 h-6" />, text: "SSD Storage" },
              { icon: <Shield className="w-6 h-6" />, text: "Free SSL" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-full border border-border hover:border-primary/30 transition-colors"
              >
                {feature.icon}
                <span className="text-sm font-['Inter']">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-primary/20 rounded-full animate-spin-slow" />
          <div className="absolute bottom-1/4 right-10 w-24 h-24 border-2 border-accent/20 rounded-full animate-spin-slow [animation-duration:20s]" />
        </div>
      </div>

        {/* Pricing Section */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-12 animate-scale-in">
            <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">
              Simple, Transparent Pricing
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
              No hidden fees or surprise charges. Choose the plan that works for you and upgrade anytime as your needs
              grow.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 mb-12">
              <Tabs
                defaultValue="yearly"
                value={billingCycle}
                onValueChange={setBillingCycle}
                className="inline-flex mx-auto"
              >
                <TabsList className="grid w-full grid-cols-2 max-w-xs mx-auto">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">
                    Yearly
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-secondary/20 text-secondary-foreground hover:bg-secondary/20"
                    >
                      Save 15%
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Hosting Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {hostingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover-scale interactive-element ${
                  plan.popular ? "border-secondary shadow-lg" : "border-border shadow-md"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      POPULAR
                    </div>
                  </div>
                )}
                <CardHeader className={`pb-4 ${plan.popular ? "bg-secondary/10" : ""}`}>
                  <CardTitle className="text-xl font-bold font-['Inter']">{plan.name}</CardTitle>
                  <CardDescription className="mt-1.5">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-primary font-['Inter']">
                        Ksh {billingCycle === "yearly" ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        /{billingCycle === "yearly" ? "year" : "month"}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    <Link to="/contact">
                      Get Started
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-up">
            <h3 className="text-xl font-semibold mb-3 gradient-text font-['Playfair_Display']">
              Need a custom solution?
            </h3>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-6 font-['Inter']">
              We offer tailored hosting solutions for large enterprises and special requirements. Contact our sales team
              to discuss your specific needs.
            </p>
            <Button variant="outline" asChild className="interactive-element">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-muted py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12 animate-scale-in">
              <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">All Plans Include</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
                Every hosting plan comes with these essential features to ensure your website runs smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground font-['Inter']">Free SSL Certificates</h3>
                <p className="text-foreground/70">
                  Secure your website with free SSL certificates that encrypt data and build visitor trust.
                </p>
              </div>

              <div
                className="bg-card p-6 rounded-xl shadow-md hover-scale animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground font-['Inter']">High Performance</h3>
                <p className="text-foreground/70">
                  Enjoy blazing-fast load times with our SSD storage and optimized server configurations.
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
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground font-['Inter']">24/7 Support</h3>
                <p className="text-foreground/70">
                  Our technical support team is available around the clock to help with any issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-12 animate-scale-in">
            <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
              Find answers to common questions about our hosting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">What is SSD storage?</h3>
              <p className="text-foreground/70">
                SSD (Solid State Drive) storage uses flash memory to deliver superior performance and reliability. SSDs
                are faster, more durable, and consume less power than traditional hard drives.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">Can I upgrade my plan later?</h3>
              <p className="text-foreground/70">
                Yes, you can upgrade your hosting plan at any time. The transition is seamless and there's no downtime
                during the upgrade process.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "300ms" }}>
              <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">
                What is a free SSL certificate?
              </h3>
              <p className="text-foreground/70">
                An SSL certificate encrypts data between your website and visitors, showing a padlock icon in browsers.
                This builds trust and is essential for SEO and security.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: "400ms" }}>
              <h3 className="text-lg font-semibold mb-2 text-primary font-['Inter']">Do you offer refunds?</h3>
              <p className="text-foreground/70">
                Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our
                service, you can request a full refund within the first 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}