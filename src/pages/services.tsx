import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Clock, Code, Cpu, Globe, HeartHandshake, Zap } from "lucide-react"
import { Database, Cloud, Rocket } from "lucide-react"
import { motion } from "framer-motion"

import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Our team creates a detailed roadmap and strategy tailored to your specific needs.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build your solution using the latest technologies and best practices.",
  },
  {
    number: "04",
    title: "Testing",
    description: "Rigorous testing ensures your product is bug-free and performs optimally.",
  },
  {
    number: "05",
    title: "Deployment",
    description: "We launch your product and ensure everything runs smoothly.",
  },
  {
    number: "06",
    title: "Support",
    description: "Our team provides ongoing maintenance and support to keep your solution running perfectly.",
  },
]

const technologies = [
  { name: "React", icon: Code },
  { name: "Node.js", icon: Cpu },
  { name: "Next.js", icon: Zap },
  { name: "Tailwind CSS", icon: Globe },
  { name: "MongoDB", icon: Database },
  { name: "AWS", icon: Cloud },
]

const ServicesPage = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-background pt-4">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Services | CreativeDuo</title>
        <meta
          name="description"
          content="Explore our comprehensive range of web development and design services tailored to help your business grow."
        />
        <meta name="keywords" content="web development, app development, API integration, web design, maintenance" />
      </Helmet>

      {/* Hero Section */}
      {/* Services Section */}
      <div className="relative py-16 md:py-24 mt-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
          <motion.div 
            className="absolute top-1/4 right-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Rocket className="w-24 h-24 text-primary/15" />
          </motion.div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-bold gradient-text font-['Playfair_Display'] leading-tight"
            >
              Transformative Digital Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-['Inter']"
            >
              Powering business evolution through cutting-edge technology strategies and human-centered design.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-primary to-accent p-[2px] rounded-full shadow-lg"
            >
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 group font-['Inter']"
                asChild
              >
                <Link to="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <div className="mt-24 animate-fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">Why Choose Us?</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
              We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-scale interactive-element animate-fade-up" style={{ animationDelay: "100ms" }}>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We work efficiently to deliver your projects on time without compromising quality.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale interactive-element animate-fade-up" style={{ animationDelay: "200ms" }}>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Rigorous testing and quality control processes ensure flawless execution.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale interactive-element animate-fade-up" style={{ animationDelay: "300ms" }}>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Client-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Your success is our priority. We work closely with you to achieve your goals.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale interactive-element animate-fade-up" style={{ animationDelay: "400ms" }}>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Innovative Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We leverage the latest technologies to create forward-thinking solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Process Section */}
        <div className="mt-24 animate-fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text font-['Playfair_Display']">Our Process</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
              A structured approach that ensures successful project delivery from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 border border-border rounded-xl bg-card/50 backdrop-blur-sm hover-scale interactive-element animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3 mt-2 font-['Inter']">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-card rounded-2xl p-8 md:p-12 relative overflow-hidden animate-scale-in">
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

export default ServicesPage;