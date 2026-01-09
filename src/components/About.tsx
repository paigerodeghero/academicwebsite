import { GraduationCap, Building2, FlaskConical } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-primary mb-8 animate-fade-up">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p>
              I obtained my PhD in Computer Science and Engineering from the{" "}
              <a
                href="https://www.nd.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight hover:underline underline-offset-4 transition-colors"
              >
                University of Notre Dame
              </a>{" "}
              under the direction of{" "}
              <a
                href="https://www3.nd.edu/~cmc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight hover:underline underline-offset-4 transition-colors"
              >
                Collin McMillan
              </a>
              . I've also worked in industry as a software engineer for a startup company and at multiple medium-sized companies.
            </p>
            
            <p>
              I direct the{" "}
              <a
                href="http://clemsonhfse.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight hover:underline underline-offset-4 transition-colors font-medium"
              >
                DevLab@Clemson
              </a>
              . For my latest work, please check out my Google Scholar profile. If you'd like a copy of any paper, feel free to email me and I'd be glad to send it over.
            </p>
          </div>

          {/* Stats/Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-6 bg-secondary rounded-xl">
              <GraduationCap className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium text-primary mb-2">Education</h3>
              <p className="text-muted-foreground">PhD in Computer Science & Engineering from Notre Dame</p>
            </div>
            
            <div className="p-6 bg-secondary rounded-xl">
              <Building2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium text-primary mb-2">Position</h3>
              <p className="text-muted-foreground">Associate Professor & Dean's Professor at Clemson</p>
            </div>
            
            <div className="p-6 bg-secondary rounded-xl">
              <FlaskConical className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-serif text-xl font-medium text-primary mb-2">Lab</h3>
              <p className="text-muted-foreground">Director of DevLab@Clemson research group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
