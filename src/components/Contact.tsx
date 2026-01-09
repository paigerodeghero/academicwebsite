import { Mail, ExternalLink, GraduationCap, Users } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-6 animate-fade-up">
            Let's Connect
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Interested in collaboration, have questions about my research, or want a copy of a paper? I'd love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="mailto:prodegh@clemson.edu"
              className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/15 transition-all group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
              <span className="text-sm text-primary-foreground/70">prodegh@clemson.edu</span>
            </a>

            <a
              href="https://scholar.google.com/citations?user=vTZVpdqxruwC&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/15 transition-all group"
            >
              <GraduationCap className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Google Scholar</span>
              <span className="text-sm text-primary-foreground/70">View Publications</span>
            </a>

            <a
              href="http://clemsonhfse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/15 transition-all group"
            >
              <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">DevLab</span>
              <span className="text-sm text-primary-foreground/70">Research Group</span>
            </a>

            <a
              href="https://www.clemson.edu/cecas/departments/computing/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/15 transition-all group"
            >
              <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Clemson CS</span>
              <span className="text-sm text-primary-foreground/70">Department</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
