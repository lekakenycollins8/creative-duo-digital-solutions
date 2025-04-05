import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Gideon Lemiso",
    role: "Software Developer",
    image: "https://media-hosting.imagekit.io//ed02bd5dbfcb4c7f/giddy.jpg?Expires=1831556093&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yZzLY5rN~NSQaMRCsohy~tBswJrVgMAWJXc~6m9CFuHz7Gp6QIhYoFToleoWlr5WPu-12RyteB4zmjY9dzRsOhLTzp6uX96wsZ2FBP8N0ketouw2lOoVgBqDhP1ezfWh0Tiqabtx9Nj-GtDGHAOvKb-BqscrKLvhQOIMoFNfk~z4eXRV6-FSG2rS573mMZ4QKCfZamjTQVIQF7vegHVSwj2z0oS~JNnpCKqCY8XHXh7lhpG0tlqbuXrsCXFcKM0UpZBiqW9xz3FsliXOfvyw4TLSQzz65-UnqXZSZ-ZZHp3B9iQpmjGbIuNUwA0c~VqVGmyLPTC9c~IKzFB~m8OpOw__",
    expertise: ["React", "Node.js", "Flutter", "NextJs", "Express", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    name: "Collins Lekakeny",
    role: "Software Developer",
    image: "https://media-hosting.imagekit.io//0797c33d2b16404a/pfp.jpg?Expires=1831556185&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZnbGkcI5gkkLJXzXYJJpUYZYqJSy7KqmaYdctpGtHpx89TN6YxkE-qVExJNZvZmyt70-yJJXN3J-YTTRWS627j8wVjsvHjTffTdwLbLkiMD7K0YFJFKyYRfZZEQ14UfkcUHBrlkSNSVdJrgAa~OjQD4OZWawW9GtvoULne04ewonS1lHLPikhoip827AN1MMwbWJqPYyIV1qbS4ygptNnFJl5g6Nx~R8RrpssrruE-KF4BsiaWFKVnjC9f1HfkURgxk9fbNMwNewurHZ4CC2aJYypEjzJzWmD4oWw42fb5DCCXl0G7pVWvYcJlxii317aRoun4UrUeyxPSFZ0QD-lw__",
    expertise: ["Python", "Django", "Node.js", "NextJs", "React", "MongoDB", "MySQL", "PostgreSQL"]
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      <div className="absolute w-full h-full max-w-5xl mx-auto inset-0">
        <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl -top-24 -left-24 animate-pulse" />
        <div className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl -bottom-24 -right-24 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate creators, innovators, and problem solvers dedicated to delivering exceptional digital solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/50 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                        {skill}
                      </span>
                    ))}
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

export default About;