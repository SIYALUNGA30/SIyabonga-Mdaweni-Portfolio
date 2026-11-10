import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Calendar, Send, CheckCircle, Shield } from "./icons/LucideIcons";
import { toast } from "../lib/sonner";
import { downloadResume, resumeConfig } from "../config/ResumeConfig";

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
      label: "Direct Email",
      value: "lungasiyabonga32@gmail.com",
      href: "mailto:lungasiyabonga32@gmail.com"
    },
    {
      icon: Phone,
      label: "Mobile / WhatsApp",
      value: "063 247 2174",
      href: "tel:0632472174"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Johannesburg, Gauteng, South Africa",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub Repositories",
      value: "github.com/SIYALUNGA30",
      href: "https://github.com/SIYALUNGA30"
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
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
          subject: formData.subject || 'Inquiry from Portfolio Website',
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
        description: "You can reach me directly at lungasiyabonga32@gmail.com",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight mb-2.5">
            Contact &amp; Engagement
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            I am available for employment opportunities, technical assessments, and professional discussions across Cybersecurity, IT Support, and applied AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <Card className="bg-white border border-slate-200 rounded-xl shadow-xs">
              <CardHeader className="p-6 pb-4 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-navy-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-600" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700 flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-navy-900 hover:text-teal-700 hover:underline transition-colors text-xs md:text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-semibold text-navy-900 text-xs md:text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Professional Profiles</h4>
                  <div className="space-y-3">
                    {socialLinks.map((link, index) => (
                      <div key={index} className="flex items-center gap-3 text-xs">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-navy-900 flex-shrink-0">
                          <link.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block">{link.label}</span>
                          <a 
                            href={link.href} 
                            className="font-semibold text-teal-700 hover:text-navy-900 hover:underline transition-colors"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {link.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column: Clean Form */}
          <div className="md:col-span-7">
            <Card className="bg-white border border-slate-200 rounded-xl shadow-xs">
              <CardHeader className="p-6 pb-4 border-b border-slate-100">
                <CardTitle className="text-base font-bold text-navy-900 flex items-center gap-2">
                  <Send className="w-4 h-4 text-teal-600" />
                  Send a Direct Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600">First Name</label>
                      <Input 
                        placeholder="e.g. Sarah" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-slate-200 text-xs focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600">Last Name</label>
                      <Input 
                        placeholder="e.g. Mokoena" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-slate-200 text-xs focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-600">Email Address</label>
                    <Input 
                      placeholder="name@company.co.za" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-slate-200 text-xs focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-600">Subject</label>
                    <Input 
                      placeholder="e.g. Opportunity Discussion / IT Support Role" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white border-slate-200 text-xs focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-600">Message</label>
                    <Textarea 
                      placeholder="Write your message here..." 
                      className="min-h-[110px] bg-white border-slate-200 text-xs focus:ring-teal-500 focus:border-teal-500"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs py-2.5 transition-colors shadow-2xs disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="w-3.5 h-3.5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Current Status Card */}
        <Card className="bg-white border border-slate-200 rounded-xl shadow-xs">
          <CardContent className="p-6 md:p-8 text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-base font-bold text-navy-900">Current Employment Status</h3>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 border border-teal-200/80 px-3 py-1 rounded-full text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                Available for Immediate Placement
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Actively seeking full-time positions in IT Support, Aspiring AI/ML Engineering, Business Analyst, or Cybersecurity roles starting immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 pt-2">
              {["Full-time", "Hybrid", "On-site", "Remote", "Contract"].map((term, i) => (
                <span key={i} className="text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded">
                  {term}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}