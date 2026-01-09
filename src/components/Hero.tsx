import paigeImage from "@/assets/paige-rodeghero.jpeg";
import { Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-soft flex items-center">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Content first, then image on the side */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image - positioned on the right */}
            <div className="lg:order-2 flex-shrink-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl" />
                <img
                  src={paigeImage}
                  alt="Dr. Paige Rodeghero"
                  className="relative w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-strong ring-4 ring-background"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:order-1 space-y-6 text-center lg:text-left flex-1">
              <div className="space-y-3 animate-fade-up">
                <p className="text-accent font-medium tracking-wide uppercase text-sm">
                  Associate Professor of Computer Science
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
                  Paige Rodeghero, <span className="font-normal">PhD</span>
                </h1>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Researching how developers understand code, collaborate, and stay productive. Dean's Professor at{" "}
                  <a
                    href="https://www.clemson.edu/cecas/departments/computing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight hover:underline underline-offset-4 transition-colors"
                  >
                    Clemson University
                  </a>
                  , School of Computing. Previously a Visiting Researcher at{" "}
                  <a
                    href="https://www.microsoft.com/en-us/research/group/saintes-group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight hover:underline underline-offset-4 transition-colors"
                  >
                    Microsoft Research
                  </a>
                  .
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="mailto:prodegh@clemson.edu"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-medium hover:shadow-strong"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://scholar.google.com/citations?user=vTZVpdqxruwC&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-lg font-medium border border-border hover:bg-secondary transition-all shadow-soft hover:shadow-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
