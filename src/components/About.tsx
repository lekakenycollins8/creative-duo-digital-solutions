
const teamMembers = [
  {
    name: "Gideon Lemiso",
    role: "Full-Stack developer/Mobile app developer",
    image: "https://media-hosting.imagekit.io//ed02bd5dbfcb4c7f/giddy.jpg?Expires=1831556093&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yZzLY5rN~NSQaMRCsohy~tBswJrVgMAWJXc~6m9CFuHz7Gp6QIhYoFToleoWlr5WPu-12RyteB4zmjY9dzRsOhLTzp6uX96wsZ2FBP8N0ketouw2lOoVgBqDhP1ezfWh0Tiqabtx9Nj-GtDGHAOvKb-BqscrKLvhQOIMoFNfk~z4eXRV6-FSG2rS573mMZ4QKCfZamjTQVIQF7vegHVSwj2z0oS~JNnpCKqCY8XHXh7lhpG0tlqbuXrsCXFcKM0UpZBiqW9xz3FsliXOfvyw4TLSQzz65-UnqXZSZ-ZZHp3B9iQpmjGbIuNUwA0c~VqVGmyLPTC9c~IKzFB~m8OpOw__",
  },
  {
    name: "Collins Lekakeny",
    role: "Backend Developer/Full-Stack Developer",
    image: "https://media-hosting.imagekit.io//0797c33d2b16404a/pfp.jpg?Expires=1831556185&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZnbGkcI5gkkLJXzXYJJpUYZYqJSy7KqmaYdctpGtHpx89TN6YxkE-qVExJNZvZmyt70-yJJXN3J-YTTRWS627j8wVjsvHjTffTdwLbLkiMD7K0YFJFKyYRfZZEQ14UfkcUHBrlkSNSVdJrgAa~OjQD4OZWawW9GtvoULne04ewonS1lHLPikhoip827AN1MMwbWJqPYyIV1qbS4ygptNnFJl5g6Nx~R8RrpssrruE-KF4BsiaWFKVnjC9f1HfkURgxk9fbNMwNewurHZ4CC2aJYypEjzJzWmD4oWw42fb5DCCXl0G7pVWvYcJlxii317aRoun4UrUeyxPSFZ0QD-lw__",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate creators, innovators, and problem solvers dedicated to delivering exceptional digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;