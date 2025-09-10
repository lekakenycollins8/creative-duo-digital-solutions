"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Terminal, Database, Workflow, Sparkles, Play } from "lucide-react"

const Hero = () => {
  const [activeTerminal, setActiveTerminal] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)

  const terminalCommands = [
    "$ analyzing your business needs...",
    "$ designing your custom solution...", 
    "$ building and testing everything...",
    "$ launching your new system...",
    "✓ your business is now growing faster!"
  ]

  useEffect(() => {
    const command = terminalCommands[currentLine]
    let index = 0
    
    const typeInterval = setInterval(() => {
      if (index < command.length) {
        setTypedText(command.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          if (currentLine < terminalCommands.length - 1) {
            setCurrentLine(currentLine + 1)
            setTypedText("")
          } else {
            setTimeout(() => {
              setCurrentLine(0)
              setTypedText("")
            }, 2000)
          }
        }, 1000)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentLine])

  const codeBlocks = [
    {
      title: "Professional Websites",
      code: `function YourWebsite() {
  return {
    mobileOptimized: true,
    loadSpeed: "lightning-fast",
    customerConversion: "high",
    searchRanking: "top-results"
  }
}`,
      color: "from-sky-400 to-blue-500"
    },
    {
      title: "Business Systems", 
      code: `const streamlineOperations = () => {
  const automated = connectAllSystems()
  const efficiency = eliminateManualWork()
  return timeAndMoneySaved(thousands)
}`,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Custom Applications",
      code: `class YourBusinessApp {
  constructor() {
    this.userExperience = "intuitive"
    this.performance = "reliable"
    this.growth = "unlimited"
  }
}`,
      color: "from-sky-500 to-cyan-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-800 relative overflow-hidden">
      {/* Animated code rain background */}
      <div className="absolute inset-0 opacity-15">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-sky-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {['{}', '[]', '<>', '()', '//', '==', '=>', '&&'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Light orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Terminal header */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-sky-200 shadow-2xl">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                <span className="text-slate-600 text-sm ml-4">business-growth.app</span>
              </div>
              <div className="font-mono text-sky-600 h-6">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>

          {/* Main content in creative layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 text-sky-600 font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>// Technology that grows your business</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-none">
                <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Solutions That
                </span>
                <br />
                <span className="text-slate-800 relative">
                  Scale Your
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-blue-500 transform skew-x-12"></div>
                </span>
                <br />
                <span className="text-slate-600">Business</span>
              </h1>

              <div className="space-y-4 text-xl text-slate-600 font-light max-w-lg">
                <p>We create digital tools that work.</p>
                <p>Custom websites. Streamlined systems. Real results.</p>
                <p className="text-sky-600 font-medium">Every solution is built to increase your revenue and efficiency.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center bg-white border-2 border-sky-300 text-slate-700 px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-1 hover:bg-sky-50 transition-all duration-300"
                >
                  View Our Work
                </a>
              </div>

              {/* Stats in terminal style - using your original stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { label: "Projects Completed", value: "20+" },
                  { label: "Happy Clients", value: "10+" },
                  { label: "Years Experience", value: "3+" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-mono text-2xl font-bold text-sky-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Interactive code blocks */}
            <div className="space-y-6">
              {codeBlocks.map((block, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur border border-sky-200 rounded-lg p-6 hover:bg-white/80 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`font-bold bg-gradient-to-r ${block.color} bg-clip-text text-transparent`}>
                      {block.title}
                    </h3>
                    <Sparkles className={`w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors`} />
                  </div>
                  
                  <pre className="text-sm text-slate-700 font-mono overflow-x-auto">
                    <code>{block.code}</code>
                  </pre>

                  <div className="mt-4 flex space-x-1">
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section with unique approach */}
          <div className="text-center">
            <div className="inline-block bg-white/80 backdrop-blur border border-sky-200 rounded-full px-8 py-3 mb-8 shadow-lg">
              <span className="text-sky-600 font-mono text-sm">
                &lt;/&gt; Trusted by businesses. Built for growth. Made simple.
              </span>
            </div>
            
            <p className="text-slate-600 max-w-2xl mx-auto">
              We turn complex technology into simple solutions that help your business thrive. 
              No tech jargon. Just results that matter to your bottom line.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-sky-400/30 rounded-full animate-spin [animation-duration:20s]"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-blue-500/30 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]"></div>
      </div>
    </div>
  )
}

export default Hero;
