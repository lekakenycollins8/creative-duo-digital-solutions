import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Our Portfolio</h1>
        <p className="text-muted-foreground mb-8">
          Discover our diverse range of projects that showcase our expertise and creativity.
        </p>
        <Portfolio />
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Innovative Design</h3>
              <p className="text-muted-foreground">
                Our design solutions are tailored to meet the unique needs of each client, ensuring a memorable user experience.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
              <p className="text-muted-foreground">
                We work closely with our clients to understand their goals and deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Seamless Experiences</h3>
              <p className="text-muted-foreground">
                Our projects focus on creating seamless and intuitive experiences for users across all platforms.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
              <p className="text-muted-foreground">
                We leverage the latest technologies to deliver innovative solutions that drive business success.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Award-Winning Projects</h3>
              <p className="text-muted-foreground">
                Our portfolio includes award-winning projects that have been recognized for their creativity and impact.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Sustainable Design</h3>
              <p className="text-muted-foreground">
                We are committed to sustainable design practices that minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
