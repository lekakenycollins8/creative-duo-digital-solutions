import { BugOff, FileCode2, Computer, Codesandbox } from "lucide-react"

const services = [
  {
    icon: Codesandbox,
    title: "Fullstack Application Development",
    description: "We specialize in building robust and scalable applications tailored to your business needs.",
  },
  {
    icon: Computer,
    title: "Web Design & Development",
    description: "Crafting websites that are visually appealing, user-friendly, and performance-driven.",
  },
  {
    icon: FileCode2,
    title: "API Integration and Development",
    description: "Effortlessly connect your business with the tools and platforms you rely on.",
  },
  {
    icon: BugOff,
    title: "Maintenance & Support",
    description: "Ensure your applications and websites remain up-to-date and high-performing.",
  },
]

const Services = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 custom-gradient opacity-5 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold mb-4 gradient-text">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-['Inter']">
            We offer a comprehensive range of services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border hover-scale interactive-element animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 custom-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 font-['Inter']">
                {service.title}
              </h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;