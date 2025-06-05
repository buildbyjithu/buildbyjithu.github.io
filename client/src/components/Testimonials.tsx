import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rad Pathalam",
      title: "Senior Director, Product Management at Qualys",
      relationship: "Former Manager",
      content: "Jithendranath played a crucial role in building services from the ground up, shaping the company's direction. He led the charge on innovative cloud telemetry features and became the go-to person for prototyping any project. His technical acumen, dedication, and collaborative spirit are qualities that will make him an asset wherever he goes.",
      highlight: "Visionary in cloud telemetry & go-to person for prototyping"
    },
    {
      name: "Amit Malik",
      title: "Cyber Security | AI | Detection Engineering | Leadership",
      relationship: "Former Colleague",
      content: "I've seen him grow from a Software Engineer to an Architect. He played a crucial role in the MITRE ATT&CK Evaluations and was instrumental in laying the foundation for the detection graph within the product. He consistently executed requirements with speed and precision.",
      highlight: "Instrumental in MITRE ATT&CK Evaluations & detection systems"
    },
    {
      name: "Anadi Sharma",
      title: "C++ | Windows | Cybersecurity | Machine Learning",
      relationship: "Former Colleague",
      content: "Jithu is one of the smartest and most hard working full stack engineers I have ever worked with. His biggest superpower is to simplify a problem and help others visualize it before a solution could be reached. He has developed entire cloud security product features singlehandedly from scratch.",
      highlight: "Develops entire cloud security features from scratch"
    },
    {
      name: "Rick Bergfalk",
      title: "Software Engineer at Monte Carlo",
      relationship: "Former Senior Colleague",
      content: "Ever communicate a spec to a colleague, then wake up the next day to see it implemented? This was a common occurrence with Jithu. He quickly became proficient with new technologies and owned the implementation and maintenance of many services at Uptycs.",
      highlight: "Implements specs overnight & masters new technologies rapidly"
    },
    {
      name: "Guillaume Ross",
      title: "Startup CISO and Consultant",
      relationship: "Former Product Manager",
      content: "It is very hard to find people who are great developers but who also easily understand requirements, communicate well, and are able to organize work with multiple stakeholders. Throwing new technologies at him is never an issue either.",
      highlight: "Exceptional at understanding requirements & stakeholder management"
    },
    {
      name: "Bhavesh Parekh",
      title: "Engineering and Customer focused",
      relationship: "Former Teammate",
      content: "His ability to design and develop scalable solutions while maintaining high-quality standards was truly impressive. His proactive approach to identifying and resolving issues helped improve product stability and efficiency.",
      highlight: "Designs scalable solutions with high-quality standards"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Colleagues Say</h2>
          <p className="github-muted text-lg max-w-2xl mx-auto">
            LinkedIn recommendations from managers, teammates, and industry professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-github-border/20 hover:bg-github-border/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Quote className="github-green mr-3 flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="github-green font-semibold text-sm mb-2">
                      "{testimonial.highlight}"
                    </div>
                  </div>
                </div>
                
                <p className="github-muted text-sm mb-4 leading-relaxed">
                  {testimonial.content}
                </p>
                
                <div className="border-t border-github-border pt-4">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="github-muted text-xs mb-1">{testimonial.title}</div>
                  <div className="github-blue text-xs">{testimonial.relationship}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold github-green">9</div>
            <div className="github-muted text-sm">LinkedIn Recommendations</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold github-green">8+</div>
            <div className="github-muted text-sm">Years at Uptycs</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold github-green">100%</div>
            <div className="github-muted text-sm">Positive Feedback</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold github-green">3</div>
            <div className="github-muted text-sm">Management Recommendations</div>
          </div>
        </div>

        {/* Key Themes */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Strengths Highlighted</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="bg-github-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Quote className="github-green" size={24} />
              </div>
              <div className="font-semibold">Technical Excellence</div>
              <div className="github-muted text-sm">
                "Smartest full stack engineer" • "Deep knowledge of backend architecture" • "Masters new technologies rapidly"
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-github-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Quote className="github-blue" size={24} />
              </div>
              <div className="font-semibold">Leadership Impact</div>
              <div className="github-muted text-sm">
                "Go-to person for prototyping" • "Shaped company direction" • "Crucial role in MITRE evaluations"
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Quote className="text-purple-400" size={24} />
              </div>
              <div className="font-semibold">Collaboration</div>
              <div className="github-muted text-sm">
                "Great team player" • "Excellent communication" • "Kind and humble" • "Enthusiastic and thoughtful"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}