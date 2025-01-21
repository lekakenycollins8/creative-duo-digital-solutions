import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2024',
    title: 'Digital Innovation Award',
    description: 'Recognized for groundbreaking digital solutions and creative excellence.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Opened new offices in major tech hubs across Europe and Asia.',
  },
  {
    year: '2022',
    title: 'Industry Leadership',
    description: 'Became the leading creative agency in sustainable design practices.',
  },
  {
    year: '2020',
    title: 'Company Foundation',
    description: 'Started our journey with a vision to transform digital experiences.',
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our milestones and achievements throughout the years.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              } md:flex-row-reverse md:justify-center gap-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full custom-gradient" />

              {/* Content */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}>
                <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium custom-gradient text-white mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2 gradient-text">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
