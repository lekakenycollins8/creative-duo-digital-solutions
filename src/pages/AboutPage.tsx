import Navbar from '@/components/Navbar';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 gradient-text">About Us</h1>
        <p className="text-muted-foreground mb-8">
          Get to know more about our journey, values, and the team that makes everything possible.
        </p>
        <About />
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Innovation at the Core</h3>
              <p className="text-muted-foreground">
                We are committed to pushing the boundaries of creativity and technology to deliver innovative solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
              <p className="text-muted-foreground">
                Our clients are at the heart of everything we do, and we strive to exceed their expectations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Commitment to Excellence</h3>
              <p className="text-muted-foreground">
                We are dedicated to delivering the highest quality of work and achieving excellence in every project.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Building Lasting Relationships</h3>
              <p className="text-muted-foreground">
                We believe in building strong, long-lasting relationships with our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
