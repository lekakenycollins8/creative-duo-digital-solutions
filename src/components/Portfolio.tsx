import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from 'lucide-react';

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
    },
  },
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredProjects = projects.filter(
    project => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Category Filters */}
        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsLoading(true);
                }}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 masonry-grid"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-scale"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-sm font-medium text-primary/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="w-full max-w-4xl mx-auto p-6 sm:p-6 md:p-8">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>{selectedProject.description}</DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  {/* Image Gallery */}
                  <div className="relative aspect-video mb-6">
                    <img
                      src={selectedProject.details.gallery[currentImageIndex]}
                      alt={`${selectedProject.title} gallery image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) =>
                            prev === 0 ? selectedProject.details.gallery.length - 1 : prev - 1
                          );
                        }}
                        className="bg-black/20 hover:bg-black/40 text-white"
                      >
                        ←
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) =>
                            prev === selectedProject.details.gallery.length - 1 ? 0 : prev + 1
                          );
                        }}
                        className="bg-black/20 hover:bg-black/40 text-white"
                      >
                        →
                      </Button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Client</h4>
                      <p className="text-gray-600">{selectedProject.details.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Duration</h4>
                      <p className="text-gray-600">{selectedProject.details.duration}</p>
                    </div>
                    <div className="col-span-2">
                      <h4 className="font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.details.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Button
                      onClick={() => window.open(selectedProject.details.link, '_blank')}
                      className="inline-flex items-center"
                    >
                      Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;