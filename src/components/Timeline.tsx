import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2025',
    title: 'Freelancing and Agency Growth',
    description: 'Built a blog website for portfolio development and expanded the agency\'s focus on full-stack applications, API integrations, and website design.',
  },
  {
    year: '2024',
    title: 'Tutoring App Development',
    description: 'Designed and implemented a tutoring web application using React and Node.js, successfully launching it in two weeks.',
  },
  {
    year: '2023',
    title: 'Technical Skills Enhancement',
    description: 'Learned JavaScript, React, and PostgreSQL while working on collaborative end-to-end applications, laying the foundation for future projects.',
  },
  {
    year: '2022',
    title: 'Journey to Software Development',
    description: 'Embarked on the path to becoming a software developer, driven by a passion for solving real-world challenges through technology.',
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our milestones and achievements throughout the years.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-secondary/30 rounded-full md:transform md:-translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className="group relative mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Timeline dot with ripple effect */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-primary/20 md:transform md:-translate-x-1/2 z-10 group-hover:scale-110 transition-all duration-300">
                  <span className="w-2 h-2 bg-primary rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300"></span>
                  <span className="absolute w-12 h-12 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></span>
                </div>

                {/* Year badge - positioned differently on mobile vs desktop */}
                <div className={`ml-16 md:ml-0 md:absolute md:w-32 ${
                  index % 2 === 0 ? 'md:right-1/2 md:mr-20 md:text-right' : 'md:left-1/2 md:ml-20'
                } md:top-0 md:mt-1`}>
                  <div className="flex items-center md:justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">{item.year}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-24' : 'md:ml-auto md:pl-24'
                }`}>
                  <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;