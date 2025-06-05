import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-github-green",
      skills: [
        { name: "React / Next.js", icon: "⚛️" },
        { name: "Vue.js / Nuxt.js", icon: "💚" },
        { name: "JavaScript / TypeScript", icon: "🟨" },
        { name: "CSS / Tailwind CSS", icon: "🎨" },
      ],
    },
    {
      title: "Backend",
      color: "text-github-blue",
      skills: [
        { name: "Node.js / Express", icon: "🟢" },
        { name: "Python / Django", icon: "🐍" },
        { name: "PostgreSQL / MongoDB", icon: "🗄️" },
        { name: "REST / GraphQL APIs", icon: "🔗" },
      ],
    },
    {
      title: "Mobile & Tools",
      color: "text-purple-400",
      skills: [
        { name: "React Native", icon: "📱" },
        { name: "Flutter", icon: "🦋" },
        { name: "Figma / Adobe XD", icon: "🎨" },
        { name: "PWA Development", icon: "📲" },
      ],
    },
    {
      title: "DevOps & Cloud",
      color: "text-orange-400",
      skills: [
        { name: "AWS / Azure", icon: "☁️" },
        { name: "Docker / Kubernetes", icon: "🐳" },
        { name: "Git / GitHub Actions", icon: "🔧" },
        { name: "CI/CD Pipelines", icon: "♾️" },
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
