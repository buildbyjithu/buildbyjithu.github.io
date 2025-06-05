import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "text-github-blue",
      skills: [
        { name: "Node.js / JavaScript", icon: "🟨" },
        { name: "Python / Golang", icon: "🐍" },
        { name: "Java (Sun Certified)", icon: "☕" },
        { name: "TypeScript", icon: "📘" },
      ],
    },
    {
      title: "Cloud & Security",
      color: "text-github-blue",
      skills: [
        { name: "AWS / GCP / Azure", icon: "☁️" },
        { name: "Cloud Security", icon: "🔒" },
        { name: "MITRE ATT&CK", icon: "🛡️" },
        { name: "Attack Path Analysis", icon: "🔍" },
      ],
    },
    {
      title: "Databases & Graph",
      color: "text-purple-400",
      skills: [
        { name: "PostgreSQL / MongoDB", icon: "🗄️" },
        { name: "Neo4j / Memgraph", icon: "🕸️" },
        { name: "Redis / S3", icon: "💾" },
        { name: "Amazon Redshift", icon: "📊" },
      ],
    },
    {
      title: "Frameworks & AI",
      color: "text-orange-400",
      skills: [
        { name: "React / Angular / Flutter", icon: "⚛️" },
        { name: "MEAN / GraphQL / REST", icon: "🔗" },
        { name: "OpenAI Integration", icon: "🤖" },
        { name: "Docker / Kubernetes", icon: "🐳" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-github-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="github-muted text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card 
                    key={skillIndex}
                    className="bg-github-dark p-4 hover:transform hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <CardContent className="p-0 text-center">
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <div className="font-medium text-sm">{skill.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
