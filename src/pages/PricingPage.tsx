import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Our Pricing Plans</h1>
        <p className="text-muted-foreground mb-8">
          Explore our transparent pricing options tailored to fit your business needs.
        </p>
        <Pricing />
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Flexible Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Competitive Rates</h3>
              <p className="text-muted-foreground">
                Our pricing is competitive and offers great value for the quality of service we provide.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
              <p className="text-muted-foreground">
                We believe in transparency, which is why our pricing is straightforward with no hidden costs.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Customizable Packages</h3>
              <p className="text-muted-foreground">
                We offer customizable packages to meet the unique needs of your business.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Our team is dedicated to providing exceptional support and ensuring your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
