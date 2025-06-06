import { Github, Linkedin, Twitter, Mail, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import resumePdf from "@/assets/Jithendranath_Gupta_Yenduri_Resume.pdf";
import { trackButtonClick, trackExternalLink, trackResumeDownload } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/use-analytics";

export default function Hero() {
  // Track when hero section is viewed
  useSectionTracking('home', 'Hero Section');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      trackButtonClick(`Navigate to ${sectionId}`, 'Hero');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20" itemScope itemType="https://schema.org/Person">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6" itemProp="name">
              Hi, I'm <span className="github-blue" itemProp="givenName">Jithendranath Gupta Yenduri</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl github-muted mb-8" itemProp="jobTitle">
              Software Architect & Full-Stack Developer
            </h2>
            <p className="text-lg github-muted mb-6 max-w-lg" itemProp="description">
              Seasoned Software Architect with 11+ years of full-stack expertise, specializing in scalable 
              enterprise applications and cloud security. Proven 0-1 builder across multiple startups, 
              transforming ideas into production systems with a passion for emerging AI technologies and modern development tools.
            </p>
            
            {/* Key Stats Highlight */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg">
              <div className="text-center bg-github-border/30 rounded-lg p-3">
                <div className="text-2xl font-bold github-blue">1269+</div>
                <div className="text-sm github-muted">APIs Built</div>
              </div>
              <div className="text-center bg-github-border/30 rounded-lg p-3">
                <div className="text-2xl font-bold github-blue">5000+</div>
                <div className="text-sm github-muted">Commits Made</div>
              </div>
              <div className="text-center bg-github-border/30 rounded-lg p-3">
                <div className="text-2xl font-bold github-blue">80+</div>
                <div className="text-sm github-muted">Services Built</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-github-blue hover:bg-blue-600 text-white px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  trackExternalLink('https://calendly.com/guptaa-pavan/30min', 'Schedule Call');
                  window.open('https://calendly.com/guptaa-pavan/30min', '_blank');
                }}
                className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-3"
              >
                <Calendar className="mr-2" size={16} />
                Schedule Call
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-github-blue text-github-blue hover:bg-github-blue hover:text-white px-8 py-3"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumePdf;
                  link.download = 'Jithendranath_Gupta_Yenduri_Resume.pdf';
                  link.click();
                }}
                className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white px-8 py-3"
              >
                <Download className="mr-2" size={16} />
                Resume
              </Button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://github.com/buildbyjithu" 
                className="github-muted hover:text-github-blue transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={32} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jithendranath" 
                className="github-muted hover:text-github-blue transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://twitter.com/jithendranath" 
                className="github-muted hover:text-blue-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={32} />
              </a>
              <a 
                href="mailto:guptaa.pavan@gmail.com" 
                className="github-muted hover:text-red-400 transition-colors duration-200"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative animate-float">
              <img 
                src={profilePhoto} 
                alt="Jithendranath Gupta Yenduri - Software Architect" 
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
