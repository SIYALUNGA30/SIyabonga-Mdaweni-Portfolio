import React from 'react';
import { Button } from "./ui/Button";
import { Github, Linkedin, Mail, MapPin, Phone, Download, ChevronDown } from "./icons/LucideIcons";
import { downloadResume, resumeConfig } from "../config/ResumeConfig";

export function HeroSection() {
  const navigateToProjects = () => {
    window.location.hash = 'projects';
  };

  const scrollToOverview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/40 to-chart-2/40 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-chart-3/40 to-primary/40 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-chart-4/40 to-chart-1/40 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/60 rotate-45 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-chart-2/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-chart-3/60 rotate-12 animate-bounce delay-700"></div>
        <div className="absolute top-60 right-40 w-5 h-5 bg-chart-4/60 rotate-45 animate-pulse delay-1200"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-primary/60 rounded-full animate-bounce delay-800"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-20"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-6">

              
              <div>
                <h1 className="text-4xl md:text-6xl mb-4 animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-[200%_auto]">
                  Siyabonga Mdaweni
                </h1>
                
                <p 
                  className="text-xl md:text-2xl text-muted-foreground mb-6 animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground bg-[200%_auto]"
                  style={{ animationDelay: '0.5s' }}
                >
                  IT Support | Aspiring AI/ML Engineer
                </p>
                
                <p 
                  className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-6 animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground bg-[200%_auto]"
                  style={{ animationDelay: '1s' }}
                >
                  I have always been curious about technology and how it shapes our everyday lives. I enjoy exploring how systems work, solving technical problems, and learning new tools and skills. Helping others with their technical challenges gives me great satisfaction, and I am passionate about growing my knowledge to provide the best IT support possible.
                </p>

                <div 
                  className="space-y-2 text-muted-foreground opacity-0 animate-slideInUp"
                  style={{ animationDelay: '1.2s' }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Johannesburg, Gauteng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>0632472174</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>lungasiyabonga32@gmail.com</span>
                  </div>
                </div>
              </div>

              <div 
                className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slideInUp"
                style={{ animationDelay: '1.4s' }}
              >
                <Button size="lg" onClick={navigateToProjects}>
                  View My Projects
                </Button>
                
                <Button variant="outline" size="lg" onClick={downloadResume}>
                  <Download className="mr-2 w-4 h-4" />
                  {resumeConfig.buttonText}
                </Button>
              </div>

              <div 
                className="flex gap-4 opacity-0 animate-slideInUp"
                style={{ animationDelay: '1.6s' }}
              >
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com/in/siyabonga-mdaweni-25a0b71ab" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/SIYALUNGA30" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:lungasiyabonga32@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Profile picture placeholder - user will upload manually */}
              <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/30 rounded-full flex items-center justify-center overflow-hidden border-4 border-primary/20 shadow-2xl backdrop-blur-sm">
                <img 
                  src="https://image2url.com/images/1764575666412-7cbc0544-83f2-4143-8743-23cc08418914.png" 
                  alt="Siyabonga Mdaweni"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                
                <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-full items-center justify-center text-6xl text-primary-foreground font-bold hidden">
                  SM
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-chart-1 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-chart-2 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-chart-3 rounded-full opacity-70 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a 
          href="#overview" 
          onClick={scrollToOverview}
          aria-label="Scroll to overview" 
          className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors animate-bounce block cursor-pointer"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}