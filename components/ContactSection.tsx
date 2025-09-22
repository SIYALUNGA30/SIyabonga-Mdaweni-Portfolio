import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Badge } from "./ui/Badge";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Calendar, Send } from "./icons/LucideIcons";
import { toast } from "../lib/sonner";
import { downloadResume } from "../config/ResumeConfig";
import { resumeConfig } from "../config/ResumeConfig";


export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lungasiyabonga32@gmail.com",
      href: "mailto:lungasiyabonga32@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "063 247 2174",
      href: "tel:0632472174"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Johannesburg, Gauteng",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SIYALUNGA30",
      href: "https://github.com/SIYALUNGA30"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/siyabonga-mdaweni-25a0b71ab",
      href: "https://linkedin.com/in/siyabonga-mdaweni-25a0b71ab"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/myzdoqyw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: formData.subject || 'Contact from Portfolio Website',
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          description: "Thank you for reaching out.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again or contact me directly.", {
        description: "You can also reach me at lungasiyabonga32@gmail.com",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-chart-5/5 to-chart-2/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-chart-2 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-chart-5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center mb-10 animate-slideInUp">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-chart-1 to-chart-5 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking opportunities to contribute to innovative AI/ML projects and IT Support. 
            Let's discuss how we can work together to build the future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fadeInLeft">
          <Card className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-border">
                <h4 className="mb-3">Social & Professional</h4>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{link.label}</div>
                        <a href={link.href} className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                          {link.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input 
                    placeholder="Last Name" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input 
                  placeholder="Email Address" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  placeholder="Subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <Textarea 
                  placeholder="Your message..." 
                  className="min-h-[120px]"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hover:scale-105 hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Button variant="outline" className="h-auto p-4 flex-col" onClick={downloadResume}>
            <Download className="w-5 h-5 mb-2" />
            <span>{resumeConfig.buttonText}</span>
            <span className="text-xs text-muted-foreground">IT Support</span>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex-col" asChild>
            <a href="tel:0632472174">
              <Calendar className="w-5 h-5 mb-2" />
              <span>Schedule Call</span>
              <span className="text-xs text-muted-foreground">30 min discussion</span>
            </a>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex-col" asChild>
            <a href="https://github.com/SIYALUNGA30" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mb-2" />
              <span>View Portfolio</span>
              <span className="text-xs text-muted-foreground">GitHub Projects</span>
            </a>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex-col" asChild>
            <a href="https://linkedin.com/in/siyabonga-mdaweni-25a0b71ab" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mb-2" />
              <span>Connect</span>
              <span className="text-xs text-muted-foreground">LinkedIn Profile</span>
            </a>
          </Button>
        </div>
        
        <Card className="hover:shadow-xl transition-all duration-300 animate-bounceIn">
          <CardContent className="p-6 text-center">
            <h3 className="mb-4">Current Status</h3>
            <div className="flex justify-center mb-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                Available for Opportunities
              </Badge>
            </div>
            <p className="text-muted-foreground mb-4">
              Actively seeking full-time positions in 
              IT Support, Aspiring AI/ML engineering,Business Analyst or Web Developer role starting immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Full-time</Badge>
              <Badge variant="outline">Remote</Badge>
              <Badge variant="outline">On-site</Badge>
              <Badge variant="outline">Hybrid</Badge>
              <Badge variant="outline">Contract</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}