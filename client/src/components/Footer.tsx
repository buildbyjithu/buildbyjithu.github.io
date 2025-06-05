import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/buildbyjithu",
      hoverColor: "hover:text-github-blue",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/jithendranath",
      hoverColor: "hover:text-github-blue",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com/jithendranath",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:guptaa.pavan@gmail.com",
      hoverColor: "hover:text-red-400",
    },
  ];

  return (
    <footer className="bg-github-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold github-blue mb-2">
              Jithendranath Gupta Yenduri
            </div>
            <p className="github-muted">Software Architect & Cloud Security Expert</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`github-muted ${link.hoverColor} transition-colors duration-200`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-github-border mt-8 pt-8 text-center">
          <p className="github-muted flex items-center justify-center">
            © 2025 Jithendranath Gupta Yenduri. Built with <Heart className="mx-1 text-red-500" size={16} /> using React and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
