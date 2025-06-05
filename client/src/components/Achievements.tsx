import { Code, GitCommit, Server, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Achievements() {
  const achievements = [
    {
      icon: <Code className="w-8 h-8" />,
      number: "1269+",
      label: "APIs Built",
      description: "Robust APIs powering enterprise applications",
      color: "bg-github-green",
      textColor: "github-green",
      bgGradient: "bg-gradient-to-br from-github-green/20 to-github-green/5"
    },
    {
      icon: <GitCommit className="w-8 h-8" />,
      number: "5000+",
      label: "Commits Made",
      description: "Consistent code contributions across projects",
      color: "bg-github-blue",
      textColor: "github-blue",
      bgGradient: "bg-gradient-to-br from-github-blue/20 to-github-blue/5"
    },
    {
      icon: <Server className="w-8 h-8" />,
      number: "80+",
      label: "Services Built",
      description: "Scalable microservices from scratch",
      color: "bg-purple-600",
      textColor: "text-purple-400",
      bgGradient: "bg-gradient-to-br from-purple-600/20 to-purple-600/5"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "10+",
      label: "People Mentored",
      description: "Guiding next-generation developers",
      color: "bg-orange-600",
      textColor: "text-orange-400",
      bgGradient: "bg-gradient-to-br from-orange-600/20 to-orange-600/5"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "40+",
      label: "POCs Delivered",
      description: "Proof of concepts for innovative solutions",
      color: "bg-cyan-600",
      textColor: "text-cyan-400",
      bgGradient: "bg-gradient-to-br from-cyan-600/20 to-cyan-600/5"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "11+",
      label: "Years Experience",
      description: "Expertise across multiple domains",
      color: "bg-yellow-600",
      textColor: "text-yellow-400",
      bgGradient: "bg-gradient-to-br from-yellow-600/20 to-yellow-600/5"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-github-border/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Development Impact</h2>
          <p className="github-muted text-lg max-w-2xl mx-auto">
            Building scalable solutions with measurable impact across enterprise environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`${achievement.bgGradient} border-github-border/50 hover:border-github-border transition-all duration-300 hover:transform hover:scale-105 group`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${achievement.color} text-white rounded-lg p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`text-3xl font-bold ${achievement.textColor} mb-1`}>
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-lg mb-2">
                      {achievement.label}
                    </div>
                    <div className="github-muted text-sm">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 github-blue">Proven Track Record</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-xl font-bold">Early-Stage Startup Expert</div>
                <div className="github-muted">Key engineer role in multiple startups, building end-to-end development pipelines</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-bold">Performance Optimizer</div>
                <div className="github-muted">Reduced customer evaluation time by 50% and AWS costs by 60%</div>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-bold">Architecture Specialist</div>
                <div className="github-muted">Designed middleware handling millions of requests efficiently</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}