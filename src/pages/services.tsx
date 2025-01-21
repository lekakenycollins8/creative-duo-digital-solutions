import Navbar from '@/components/Navbar';
import Services from '@/components/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Our Services</h1>
        <p className="text-muted-foreground mb-8">
          Explore the wide range of services we offer to help your business grow and succeed.
        </p>
        <Services />
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Customized Solutions</h3>
              <p className="text-muted-foreground">
                We tailor our services to meet your unique business needs, ensuring optimal results.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground">
                Our team of experts brings years of experience and industry knowledge to every project.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground">
                We have a history of delivering successful projects that exceed client expectations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Commitment to Quality</h3>
              <p className="text-muted-foreground">
                Quality is at the heart of everything we do, from planning to execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
