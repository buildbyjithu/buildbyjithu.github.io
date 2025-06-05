import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="github-green">[Your Name]</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl github-muted mb-8">
              [Your Role/Title]
            </h2>
            <p className="text-lg github-muted mb-8 max-w-lg">
              [Your personal description - what you do, what you're passionate about, 
              and what makes you unique as a developer]
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-github-green hover:bg-green-600 text-white px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-github-green text-github-green hover:bg-github-green hover:text-white px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a 
                href="[Your GitHub URL]" 
                className="github-muted hover:text-github-green transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={32} />
              </a>
              <a 
                href="[Your LinkedIn URL]" 
                className="github-muted hover:text-github-blue transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="[Your Twitter URL]" 
                className="github-muted hover:text-blue-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={32} />
              </a>
              <a 
                href="mailto:[Your Email]" 
                className="github-muted hover:text-red-400 transition-colors duration-200"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Alex Johnson - Full Stack Developer" 
                className="rounded-full w-80 h-80 object-cover border-4 border-github-green shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-github-green text-white rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
