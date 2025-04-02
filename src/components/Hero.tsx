"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Code, Cpu, Database, Globe, Layers, Zap } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateTransform = (baseX, baseY, factor = 0.02) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const deltaX = (mousePosition.x - centerX) * factor
    const deltaY = (mousePosition.y - centerY) * factor

    return `translate(${baseX + deltaX}px, ${baseY + deltaY}px)`
  }

  const icons = [
    { Icon: Code, color: "from-blue-500 to-cyan-500", delay: 0, x: -180, y: -100 },
    { Icon: Database, color: "from-purple-500 to-pink-500", delay: 0.1, x: 180, y: -120 },
    { Icon: Globe, color: "from-green-500 to-emerald-500", delay: 0.2, x: -150, y: 150 },
    { Icon: Cpu, color: "from-orange-500 to-amber-500", delay: 0.3, x: 160, y: 130 },
    { Icon: Layers, color: "from-red-500 to-rose-500", delay: 0.4, x: 0, y: -180 },
    { Icon: Zap, color: "from-yellow-500 to-amber-500", delay: 0.5, x: 0, y: 180 },
  ]

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 custom-gradient opacity-10 -z-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse top-0 -left-48" />
        <div className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse bottom-0 -right-48" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Floating circles */}
        <div className="absolute w-40 h-40 border border-primary/20 rounded-full top-1/4 left-1/4 animate-float [animation-delay:0s]" />
        <div className="absolute w-24 h-24 border border-accent/20 rounded-full bottom-1/3 right-1/4 animate-float [animation-delay:1s]" />
        <div className="absolute w-32 h-32 border border-primary/10 rounded-full top-1/3 right-1/3 animate-float [animation-delay:2s]" />

        {/* Animated dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Floating tech icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {icons.map(({ Icon, color, delay, x, y }, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 transition-transform duration-300 ease-out"
              style={{ transform: calculateTransform(x, y) }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay, duration: 0.5 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-6xl md:text-7xl font-['Playfair_Display'] font-bold mb-6 gradient-text leading-tight">
              Empowering Businesses with Scalable Software Solutions
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-foreground/80 mb-8 leading-relaxed font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We help businesses achieve their goals with full-stack applications, seamless API integrations, and
            custom-designed websites that drive growth and efficiency.
          </motion.p>

          <motion.p
            className="text-lg text-foreground/60 mb-6 leading-relaxed italic font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Tailored digital solutions for businesses of all sizes—because your success is our priority.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center custom-gradient text-white px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center bg-background border-2 border-primary/20 text-foreground px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-1 hover:bg-primary/5 transition-all duration-300"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1 font-['Playfair_Display']">50+</div>
              <div className="text-foreground/60 text-sm font-['Inter']">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1 font-['Playfair_Display']">30+</div>
              <div className="text-foreground/60 text-sm font-['Inter']">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1 font-['Playfair_Display']">5+</div>
              <div className="text-foreground/60 text-sm font-['Inter']">Years Experience</div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow [animation-duration:15s]" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border-2 border-accent/20 rounded-full animate-spin-slow [animation-duration:20s]" />
      </div>
    </section>
  )
}

export default Hero