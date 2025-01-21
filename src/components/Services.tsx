import { BugOff, FileCode2, Computer, Codesandbox} from "lucide-react";

const services = [
  {
    icon: Codesandbox,
    title: "Fullstack Application Development",
    description: "We specialize in building robust and scalable applications tailored to your business needs."
  },
  {
    icon: Computer,
    title: "Web Design & Development",
    description: "Crafting websites that are visually appealing, user-friendly, and performance-driven."
  },
  {
    icon: FileCode2,
    title: "API Integration and Development",
    description: "Effortlessly connect your business with the tools and platforms you rely on."
  },
  {
    icon: BugOff,
    title: "Maintenance & Support",
    description: "Ensure your applications and websites remain up-to-date and high-performing"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of services to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 lg:gap-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;