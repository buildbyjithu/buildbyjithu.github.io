import { useState } from "react";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create mailto link with pre-filled form data
    const mailtoLink = `mailto:guptaa.pavan@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your email client will open with the pre-filled message.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "guptaa.pavan@gmail.com",
      href: "mailto:guptaa.pavan@gmail.com",
      color: "bg-github-green",
      hoverColor: "hover:text-github-green",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "/in/jithendranath",
      href: "https://www.linkedin.com/in/jithendranath",
      color: "bg-github-blue",
      hoverColor: "hover:text-github-blue",
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      value: "/buildbyjithu",
      href: "https://github.com/buildbyjithu",
      color: "bg-gray-600",
      hoverColor: "hover:text-white",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      title: "Phone",
      value: "6562045520",
      href: "tel:6562045520",
      color: "bg-blue-400",
      hoverColor: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="github-muted text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`${contact.color} text-white rounded-lg p-3 flex-shrink-0`}>
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{contact.title}</div>
                    <a 
                      href={contact.href} 
                      className={`github-muted ${contact.hoverColor} transition-colors duration-200`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>


          </div>

          <Card className="bg-github-border/30">
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 border-github-border focus:border-github-blue text-white placeholder:text-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 border-github-border focus:border-github-blue text-white placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 border-github-border focus:border-github-blue text-white placeholder:text-gray-400"
                    placeholder="Project collaboration"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-900 border-github-border focus:border-github-blue resize-none text-white placeholder:text-gray-400"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-github-blue hover:bg-blue-600 text-white"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2" size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
