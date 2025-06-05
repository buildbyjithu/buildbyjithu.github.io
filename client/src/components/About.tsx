import { Code, Server, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.",
      bgColor: "bg-github-green",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development", 
      description: "Building robust APIs and server-side applications using Node.js, Python, and cloud services.",
      bgColor: "bg-github-blue",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native and Flutter.",
      bgColor: "bg-purple-600",
    },
  ];

  return (
    <section id="about" className="py-20 bg-github-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="github-muted text-lg max-w-2xl mx-auto">
            Software Architect with 11+ years of experience building analytics, endpoint and cloud security solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a Software Architect based in Fremont, CA, specializing in full-stack development and cloud security solutions. 
              My journey began with a passion for building scalable systems and has led me to play key roles as an early engineer 
              in multiple startups, setting up end-to-end software development pipelines from coding to deployment.
            </p>
            <p className="text-lg leading-relaxed">
              I focus on designing reusable components and middleware layers that handle millions of requests efficiently. 
              Currently working on AI applications and contributing to open-source projects. When not coding, I'm mentoring 
              developers and exploring the latest in cloud security and graph databases.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="text-center p-4 bg-github-dark hover:bg-github-border/50 transition-colors">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold github-blue">11+</div>
                  <div className="github-muted">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-github-dark hover:bg-github-border/50 transition-colors">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold github-blue">10+</div>
                  <div className="github-muted">People Mentored</div>
                </CardContent>
              </Card>
            </div>
            
            {/* Additional Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <Card className="text-center p-3 bg-github-blue/10 border-github-blue/20">
                <CardContent className="p-0">
                  <div className="text-xl font-bold github-blue">1269+</div>
                  <div className="text-xs github-muted">APIs Built</div>
                </CardContent>
              </Card>
              <Card className="text-center p-3 bg-github-blue/10 border-github-blue/20">
                <CardContent className="p-0">
                  <div className="text-xl font-bold github-blue">5000+</div>
                  <div className="text-xs github-muted">Commits Made</div>
                </CardContent>
              </Card>
              <Card className="text-center p-3 bg-purple-600/10 border-purple-600/20">
                <CardContent className="p-0">
                  <div className="text-xl font-bold text-purple-400">80+</div>
                  <div className="text-xs github-muted">Services Built</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${service.bgColor} text-white rounded-lg p-3 flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="github-muted">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-github-border">
              <h4 className="text-xl font-semibold mb-4 github-blue">Open Source Contributions & Apps</h4>
              <div className="space-y-3">
                <div className="github-muted">
                  • <strong><a href="https://chromewebstore.google.com/detail/exploit-prediction-scorin/ionhidnfpieflplgegiiicmdjmijnajl?hl=en-US" target="_blank" rel="noopener noreferrer" className="hover:text-github-blue transition-colors">EPSS Score Chrome Plugin</a></strong> - Real-time exploit prediction scoring for security decisions
                </div>
                <div className="github-muted">
                  • <strong><a href="https://apps.apple.com/us/app/cultureci/id6740692368" target="_blank" rel="noopener noreferrer" className="hover:text-github-blue transition-colors">CultureCI App</a></strong> - iOS application for cultural intelligence and development
                </div>
                <div className="github-muted">
                  • <strong><a href="https://github.com/node-saml/passport-saml" target="_blank" rel="noopener noreferrer" className="hover:text-github-blue transition-colors">Passport SAML</a></strong> - Enhanced SAML authentication for Node.js applications
                </div>
                <div className="github-muted">
                  • <strong><a href="https://github.com/RhinoSecurityLabs/pacu" target="_blank" rel="noopener noreferrer" className="hover:text-github-blue transition-colors">Pacu AWS Exploitation Framework</a></strong> - Fixed critical security testing issues
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-github-border">
                <h4 className="text-xl font-semibold mb-4 github-blue">Research Publications</h4>
                <div className="space-y-3">
                  <div className="github-muted">
                    • <strong><a href="https://www.sciencedirect.com/science/article/abs/pii/S2214212616303118" target="_blank" rel="noopener noreferrer" className="hover:text-github-blue transition-colors">Identifying phishing websites and its target</a></strong> - ScienceDirect
                  </div>
                  <div className="github-muted">
                    • <strong><a href="https://ieeexplore.ieee.org/document/7050816" target="_blank" rel="noopener noreferrer" className="hover:text-github-blue transition-colors">A study to assess and enhance educational specific search on web for school children</a></strong> - IEEE Xplore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
