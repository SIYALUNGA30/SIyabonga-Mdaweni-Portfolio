import React from 'react';
import { Button } from "./ui/Button";
import { Github, Linkedin, Mail, MapPin, Phone, Download, ChevronDown, Shield, Terminal } from "./icons/LucideIcons";
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

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadResume();
  };

  const coreSecurityTools = [
    "Nmap", "Wireshark", "tcpdump", "Cisco Packet Tracer", "Burp Suite", "Metasploit", "Linux CLI"
  ];

  return (
    <section id="hero" className="min-h-[88vh] flex items-center justify-center relative bg-gradient-to-b from-slate-50 to-white py-14 md:py-20 border-b border-slate-200">
      {/* Subtle Technical Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Focused on Cybersecurity & IT Support */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              {/* Primary Focus Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50 border border-teal-200/90 text-teal-800 text-xs font-bold tracking-wide">
                <Shield className="w-3.5 h-3.5 text-teal-600" />
                <span>CYBERSECURITY &amp; IT SUPPORT SPECIALIST · CompTIA Network+</span>
              </div>
              
              {/* Candidate Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.1]">
                Siyabonga Mdaweni
              </h1>
              
              {/* Core Security Value Proposition */}
              <p className="text-lg sm:text-xl font-semibold text-slate-700 leading-snug">
                Defending Networks, Troubleshooting Systems &amp; Assessing Security Vulnerabilities
              </p>
            </div>
            
            {/* Focused Narrative */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              CompTIA Network+ certified Cybersecurity and IT Support specialist with practical experience in network vulnerability scanning (Nmap, Zenmap), packet traffic analysis (Wireshark, tcpdump), web security (Burp Suite), network simulation (Cisco Packet Tracer), and enterprise data indexing under strict CIA triad principles.
            </p>

            {/* Core Security Toolkit Strip */}
            <div className="pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-teal-600" />
                Core Security &amp; Network Toolkit:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {coreSecurityTools.map((tool, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-navy-900 border border-slate-200/90"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Contact Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <a href="tel:0632472174" className="hover:text-navy-900 transition-colors font-medium">063 247 2174</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-600" />
                <a href="mailto:lungasiyabonga32@gmail.com" className="hover:text-navy-900 transition-colors font-medium">lungasiyabonga32@gmail.com</a>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button 
                size="lg" 
                onClick={navigateToProjects}
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm px-6 shadow-sm"
              >
                View Cybersecurity Projects
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleDownload}
                className="border-slate-300 text-navy-900 hover:bg-white hover:border-slate-400 font-medium text-xs sm:text-sm px-6 bg-white shadow-2xs"
              >
                <Download className="mr-2 w-4 h-4 text-teal-600" />
                {resumeConfig.buttonText}
              </Button>
            </div>

            {/* Professional Profiles */}
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-600">
              <a 
                href="https://linkedin.com/in/siyabonga-mdaweni-25a0b71ab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-navy-900 hover:underline transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-teal-600" />
                <span>LinkedIn Profile</span>
              </a>
              <span className="text-slate-300">·</span>
              <a 
                href="https://github.com/SIYALUNGA30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-navy-900 hover:underline transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-teal-600" />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Portrait (Location, availability, and certifications REMOVED under picture as requested) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px] bg-white rounded-2xl border border-slate-200/90 shadow-md p-3 relative transition-transform hover:shadow-lg duration-300">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <img 
                  src="https://image2url.com/images/1764575666412-7cbc0544-83f2-4143-8743-23cc08418914.png" 
                  alt="Siyabonga Mdaweni - Cybersecurity &amp; IT Support Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <a 
          href="#overview" 
          onClick={scrollToOverview}
          aria-label="Scroll to overview" 
          className="p-1.5 rounded-full text-slate-400 hover:text-navy-900 hover:bg-slate-200/60 transition-colors block cursor-pointer"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}