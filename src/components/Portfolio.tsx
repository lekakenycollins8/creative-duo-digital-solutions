"use client"

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowUpRight, Eye } from "lucide-react"

const projects = [
  {
    title: "Micro-finance Platform",
    description: "A modern microfinance solution with seamless user experience",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    details: {
      client: "Brighter-World Programme",
      duration: "4 months",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://brighter-programme.vercel.app",
      gallery: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "The client needed a secure and user-friendly platform to manage microloans and track repayments for small businesses.",
      solution:
        "We developed a custom platform with real-time analytics, automated payment reminders, and a responsive dashboard for both administrators and borrowers.",
    },
  },
  {
    title: "Mobile Banking App",
    description: "Innovative banking solution for the digital age",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    category: "App Design",
    details: {
      client: "Power Learn Project",
      duration: "1 months",
      technologies: ["Dart with Flutter", "Firebase", "Redux"],
      link: "https://pocket-bank-silk.vercel.app",
      gallery: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Creating a secure, intuitive mobile banking application that simplifies financial management for users on the go.",
      solution:
        "We built a Flutter-based app with biometric authentication, real-time transaction tracking, and personalized financial insights.",
    },
  },
  {
    title: "Employment Platform",
    description: "Connecting job seekers with employers",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Employment",
    details: {
      client: "Codsoft",
      duration: "1 months",
      technologies: ["React", "Node.js", "MySQL"],
      link: "https://board-job-a192.vercel.app",
      gallery: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Building a platform that efficiently matches job seekers with relevant opportunities while providing employers with qualified candidates.",
      solution:
        "We created an AI-powered matching system with custom filters, automated application tracking, and integrated video interviewing capabilities.",
    },
  },
  {
    title: "Tutor Portfolio Website",
    description: "Making learning accessible to everyone",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "Education",
    details: {
      client: "ChivaTutor Hub",
      duration: "2 weeks",
      technologies: ["React", "Next.js"],
      link: "https://www.chivatutorhub.com",
      gallery: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Creating a platform that showcases tutors' expertise while making it easy for students to find and book sessions.",
      solution:
        "We developed a portfolio-style website with integrated scheduling, payment processing, and video conferencing for remote tutoring sessions.",
    },
  },
  {
    title: "Agriculture Web Platform",
    description: "Modern solution for agribusiness funding",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    category: "Agriculture",
    details: {
      client: "Farmers Sacco.",
      duration: "1 months",
      technologies: ["Django", "MySQL", "HTML", "Bootstrap"],
      link: "https://lekakenycollins8.github.io/AgriFund_LandingPage/",
      gallery: [
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Developing a platform to connect farmers with investors and provide access to agricultural funding opportunities.",
      solution:
        "We built a comprehensive platform with project showcasing, secure payment processing, and progress tracking for agricultural ventures.",
    },
  },
  {
    title: "Software Agency Website",
    description: "Empowering businesses with scalable software solutions",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    category: "Social Media",
    details: {
      client: "CreativeDuo Digital Solutions",
      duration: "2 weeks",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      link: "https://creative-duo-digital-solutions.vercel.app/",
      gallery: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      ],
      challenge:
        "Creating a professional website that showcases the agency's expertise and attracts potential clients in a competitive market.",
      solution:
        "We designed a modern, interactive website with case studies, service showcases, and an integrated client portal for project management.",
    },
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedProject, setExpandedProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const expandedRef = useRef(null)
  const projectRefs = useRef({})

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [selectedCategory])

  useEffect(() => {
    // Scroll to expanded project when it changes
    if (expandedProject && expandedRef.current) {
      // Add a small delay to ensure the animation has started
      setTimeout(() => {
        expandedRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }, 100)
    }
  }, [expandedProject])

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const handleProjectClick = (project) => {
    // If clicking the same project that's already expanded, collapse it
    if (expandedProject === project) {
      setExpandedProject(null)
    } else {
      // Otherwise, expand the clicked project
      setExpandedProject(project)
      setActiveImageIndex(0)
    }
  }

  const handleViewDetailsClick = (e, project) => {
    e.stopPropagation() // Prevent the card click event
    setExpandedProject(project)
    setActiveImageIndex(0)

    // Scroll will happen in the useEffect
  }

  return (
    <section id="portfolio" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto font-['Inter']">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex justify-center">
          <Tabs
            defaultValue="All"
            value={selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value)
              setExpandedProject(null)
              setIsLoading(true)
            }}
            className="w-full max-w-xl"
          >
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto p-1 bg-muted/50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-72 loading-shimmer" />
                </div>
              ))}
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    ref={(el) => {projectRefs.current[project.title] = el}}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-scale interactive-element ${
                      expandedProject === project ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm text-white border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                          {project.category}
                        </Badge>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30 w-full"
                          onClick={(e) => handleViewDetailsClick(e, project)}
                        >
                          {expandedProject === project ? "Hide Details" : "View Details"}
                          <Eye className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-6 bg-card">
                      <h3 className="text-xl font-bold mb-2 font-['Inter'] gradient-text">{project.title}</h3>
                      <p className="text-foreground/70 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Expanded Project View */}
              <AnimatePresence>
                {expandedProject && (
                  <motion.div
                    ref={expandedRef}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 w-full overflow-hidden"
                    id="expanded-project-details"
                  >
                    <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                        onClick={() => setExpandedProject(null)}
                      >
                        <X className="h-5 w-5" />
                      </Button>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Image Gallery */}
                        <div className="relative h-[400px] lg:h-full overflow-hidden">
                          <div className="absolute inset-0 custom-gradient opacity-10" />
                          <img
                            src={expandedProject.details.gallery[activeImageIndex] || "/placeholder.svg"}
                            alt={expandedProject.title}
                            className="w-full h-full object-cover"
                          />

                          {expandedProject.details.gallery.length > 1 && (
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                              {expandedProject.details.gallery.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setActiveImageIndex(idx)
                                  }}
                                  className={`w-3 h-3 rounded-full transition-all ${
                                    activeImageIndex === idx ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                                  }`}
                                  aria-label={`View image ${idx + 1}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Project Details */}
                        <div className="p-8">
                          <h2 className="text-3xl font-bold gradient-text font-['Playfair_Display'] mb-2">
                            {expandedProject.title}
                          </h2>
                          <p className="text-foreground/80 mb-6 font-['Inter']">{expandedProject.description}</p>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <h4 className="text-sm text-muted-foreground mb-1 font-['Inter']">CLIENT</h4>
                              <p className="font-medium">{expandedProject.details.client}</p>
                            </div>
                            <div>
                              <h4 className="text-sm text-muted-foreground mb-1 font-['Inter']">DURATION</h4>
                              <p className="font-medium">{expandedProject.details.duration}</p>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-sm text-muted-foreground mb-2 font-['Inter']">TECHNOLOGIES</h4>
                            <div className="flex flex-wrap gap-2">
                              {expandedProject.details.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-primary/10 text-primary hover:bg-primary/20"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4 mb-8">
                            <div>
                              <h4 className="font-bold text-primary mb-2 font-['Inter']">The Challenge</h4>
                              <p className="text-foreground/70">{expandedProject.details.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-primary mb-2 font-['Inter']">Our Solution</h4>
                              <p className="text-foreground/70">{expandedProject.details.solution}</p>
                            </div>
                          </div>

                          <Button
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(expandedProject.details.link, "_blank")
                            }}
                            className="custom-gradient text-white inline-flex items-center"
                          >
                            Visit Project <ArrowUpRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio;