import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Cloud Risk Discovery & Attack Path Analysis",
      description: "Designed attack path analysis mechanism to trace blast radius of risky cloud resources using relationships. Built graph-based visualization with Memgraph, reducing customer evaluation time by 50%.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Redux", "Memgraph", "AWS", "GCP"],
      categories: ["react", "fullstack", "cloud"],
      githubUrl: "https://github.com/jithendranath",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Cloud & Endpoint Detection Engine",
      description: "Developed detection engine to correlate security threats across cloud and on-premise environments. Integrated MITRE ATT&CK framework with Bloom Filters optimization, reducing AWS EC2 costs by 60%.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Node.js", "Python", "AWS", "MITRE ATT&CK"],
      categories: ["nodejs", "cloud"],
      githubUrl: "https://github.com/jithendranath",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Enterprise Authentication & RBAC System",
      description: "Engineered comprehensive authentication system with OKTA, SAML, LDAP integration. Designed Security Zones, Access Levels, and Role Hierarchies, reducing onboarding time by 40%.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Node.js", "OKTA", "SAML", "LDAP", "PostgreSQL"],
      categories: ["nodejs", "fullstack"],
      githubUrl: "https://github.com/jithendranath",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Amazon S3 Data Ingestion System",
      description: "Developed scalable S3 data ingestion with automated extraction using Backbone.js. Integrated Mixpanel, Google Analytics, and Segment IO, eliminating 100% manual effort.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Backbone.js", "Amazon S3", "Node.js", "APIs"],
      categories: ["nodejs", "fullstack"],
      githubUrl: "https://github.com/jithendranath",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "CultureCi - AI Community App",
      description: "Built community-based app with content classification using OpenAI and DeepSeek. Used FlutterFlow for UI and PostgreSQL geography functions for distance correlation.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Flutter", "OpenAI", "PostgreSQL", "DeepSeek"],
      categories: ["ai", "fullstack"],
      githubUrl: "https://github.com/jithendranath",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "ClickStream Analytics Application",
      description: "Developed analytics application to track user interactions and generate insights. Used MongoDB for event tracking and PIG Latin for data processing workflows.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Angular 1.x", "MongoDB", "PIG Latin", "Analytics"],
      categories: ["fullstack", "analytics"],
      githubUrl: "https://github.com/jithendranath",
      liveUrl: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React" },
    { id: "nodejs", label: "Node.js" },
    { id: "fullstack", label: "Full Stack" },
    { id: "cloud", label: "Cloud Security" },
    { id: "ai", label: "AI Applications" },
    { id: "analytics", label: "Analytics" },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.categories.includes(activeFilter)
  );

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-github-green/20 text-github-green",
      "Node.js": "bg-github-blue/20 text-github-blue",
      "MongoDB": "bg-purple-600/20 text-purple-400",
      "TypeScript": "bg-yellow-600/20 text-yellow-400",
      "Socket.io": "bg-red-600/20 text-red-400",
      "Vue.js": "bg-github-green/20 text-github-green",
      "D3.js": "bg-orange-600/20 text-orange-400",
      "React Native": "bg-github-green/20 text-github-green",
      "Express.js": "bg-github-blue/20 text-github-blue",
      "PostgreSQL": "bg-green-600/20 text-green-400",
      "OpenWeather API": "bg-blue-600/20 text-blue-400",
      "Redux": "bg-yellow-600/20 text-yellow-400",
      "Chart.js": "bg-purple-600/20 text-purple-400",
    };
    return colors[tech] || "bg-gray-600/20 text-gray-400";
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="github-muted text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-github-border/20 p-2 rounded-lg">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "ghost"}
                className={`px-6 py-2 ${
                  activeFilter === filter.id 
                    ? "bg-github-green text-white" 
                    : "hover:bg-github-border github-muted"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-github-border/30 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="github-muted">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className={`${getTechColor(tech)} text-sm`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center github-muted hover:text-github-green transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center github-muted hover:text-github-blue transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-github-border/30 hover:bg-github-border text-foreground border-github-border"
            asChild
          >
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
