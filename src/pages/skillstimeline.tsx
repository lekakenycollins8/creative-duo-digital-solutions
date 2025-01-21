import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';

const SkillsTimelinePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Our Expertise & Journey</h1>
        <p className="text-muted-foreground mb-8">
          Learn about the skills that drive our success and the milestones that define our journey.
        </p>
        <Skills />
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Our Timeline</h2>
          <p className="text-muted-foreground mb-4">
            A look back at the achievements and milestones that have shaped our path.
          </p>
          <Timeline />
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Our Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Creative Design</h3>
              <p className="text-muted-foreground">
                Our team excels in creating visually stunning and user-friendly designs that captivate audiences.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Technical Proficiency</h3>
              <p className="text-muted-foreground">
                We leverage the latest technologies to build robust and scalable solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Strategic Thinking</h3>
              <p className="text-muted-foreground">
                Our strategic approach ensures that every project aligns with your business goals.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Collaborative Approach</h3>
              <p className="text-muted-foreground">
                We work closely with clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTimelinePage;
