import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import { PaintBrush, CpuChip, PuzzlePiece, UserGroup } from '@/components/Icons';

const SkillsTimelinePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        {/* Hero Section */}
        <header className="max-w-3xl mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Expertise & Evolution
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the capabilities that fuel our innovation and the pivotal moments that chart our progress.
          </p>
        </header>

        {/* Skills Section */}
        <Skills />

        {/* Timeline Section */}
        <section className="space-y-16">
          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </section>

        {/* Core Skills Grid */}
        <section className="mt-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-6 h-6 bg-accent rounded-full" />
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <PaintBrush className="w-8 h-8 text-primary" />,
                  title: "Creative Design",
                  description: "Crafting visually stunning, user-centric experiences that engage and inspire."
                },
                {
                  icon: <CpuChip className="w-8 h-8 text-primary" />,
                  title: "Technical Excellence",
                  description: "Building scalable solutions with cutting-edge technology architecture."
                },
                {
                  icon: <PuzzlePiece className="w-8 h-8 text-primary" />,
                  title: "Strategic Vision",
                  description: "Aligning digital solutions with business objectives for maximum impact."
                },
                {
                  icon: <UserGroup className="w-8 h-8 text-primary" />,
                  title: "Collaborative Synergy",
                  description: "Co-creating solutions through continuous client partnership."
                }
              ].map((skill, index) => (
                <article 
                  key={index}
                  className="group bg-card p-8 rounded-xl border border-border transition-all 
                           hover:border-primary/20 hover:bg-gradient-to-b from-background via-background to-primary/5
                           hover:-translate-y-2 shadow-sm hover:shadow-lg"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SkillsTimelinePage;