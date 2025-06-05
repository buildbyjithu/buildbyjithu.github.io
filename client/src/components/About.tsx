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
            [Your professional summary - years of experience, areas of expertise, what drives you]
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              [First paragraph about your background - where you're based, your specialty, 
              how you got started in technology, what drives your passion for development]
            </p>
            <p className="text-lg leading-relaxed">
              [Second paragraph about your current focus - technologies you work with, 
              types of projects you enjoy, what you do outside of coding]
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="text-center p-4 bg-github-dark">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold github-green">[X+]</div>
                  <div className="github-muted">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-github-dark">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold github-green">[X+]</div>
                  <div className="github-muted">Projects Completed</div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
