import { Badge } from "@/components/ui/badge";

const researchAreas = [
  { name: "Software Engineering", featured: true },
  { name: "Developer Productivity", featured: true },
  { name: "Program Comprehension", featured: true },
  { name: "Remote & Distributed Teams", featured: false },
  { name: "Developer Onboarding", featured: false },
  { name: "Neurodiversity in Software Engineering", featured: true },
  { name: "Empirical Methods", featured: false },
  { name: "CS Education", featured: false },
];

const Research = () => {
  return (
    <section id="research" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-primary mb-6 animate-fade-up">
            Research Interests
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            My research focuses on understanding how software developers work — from how they read and comprehend 
            code, to how distributed teams collaborate effectively. I'm also passionate about making software 
            engineering more inclusive for neurodiverse developers.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {researchAreas.map((area, index) => (
              <Badge
                key={area.name}
                variant={area.featured ? "default" : "secondary"}
                className={`text-base px-5 py-2.5 font-medium transition-all hover:scale-105 ${
                  area.featured
                    ? "bg-primary text-primary-foreground shadow-medium hover:shadow-strong"
                    : "bg-card text-foreground border border-border hover:bg-secondary"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {area.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
