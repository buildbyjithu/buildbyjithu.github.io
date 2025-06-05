import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com",
      hoverColor: "hover:text-github-green",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com",
      hoverColor: "hover:text-github-blue",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:alex@example.com",
      hoverColor: "hover:text-red-400",
    },
  ];

  return (
    <footer className="bg-github-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold github-green mb-2 flex items-center">
              <Github className="mr-2" size={24} />
              Alex Johnson
            </div>
            <p className="github-muted">Full Stack Developer & Open Source Enthusiast</p>
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
            © 2024 Alex Johnson. Built with <Heart className="mx-1 text-red-500" size={16} /> using React and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
