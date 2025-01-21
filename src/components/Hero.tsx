import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Floating background elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse top-0 -left-48" 
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse bottom-0 -right-48" 
        />
        <div 
          className="absolute w-32 h-32 bg-primary/30 rounded-full blur-xl animate-bounce delay-700 top-1/4 left-1/4" 
        />
        <div 
          className="absolute w-24 h-24 bg-accent/30 rounded-full blur-xl animate-bounce delay-1000 bottom-1/4 right-1/4" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-up">
            Empowering Businesses with Scalable Software Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up [animation-delay:200ms] leading-relaxed">
            We help businesses achieve their goals with full-stack applications, seamless API integrations, and custom-designed websites that drive growth and efficiency.
          </p>
          <p className="text-lg text-gray-500 mb-6 animate-fade-up [animation-delay:300ms] leading-relaxed italic">
            Tailored digital solutions for businesses of all sizes—because your success is our priority.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up [animation-delay:400ms] group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin-slow [animation-duration:15s]" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border-2 border-accent/20 rounded-full animate-spin-slow [animation-duration:20s]" />
      </div>
    </section>
  );
};

export default Hero;