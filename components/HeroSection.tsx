import React, { useState } from 'react';
import { Button } from "./ui/Button";
import { Github, Linkedin, Mail, MapPin, Phone, Download, ChevronDown, Shield, Terminal, CheckCircle } from "./icons/LucideIcons";
import { downloadResume, resumeConfig } from "../config/ResumeConfig";

export function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [diagnosticStep, setDiagnosticStep] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

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

  const handleMouseMovePortrait = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max 10 deg tilt
    const tiltX = -((y - centerY) / centerY) * 8;
    const tiltY = ((x - centerX) / centerX) * 8;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeavePortrait = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const runDiagnosticProbe = () => {
    if (isScanning) return;
    setIsDiagnosticOpen(true);
    setIsScanning(true);
    setDiagnosticStep(1);

    setTimeout(() => {
      setDiagnosticStep(2);
    }, 700);

    setTimeout(() => {
      setDiagnosticStep(3);
    }, 1500);

    setTimeout(() => {
      setDiagnosticStep(4);
      setIsScanning(false);
    }, 2300);
  };

  const coreSecurityTools = [
    "Nmap", "Wireshark", "tcpdump", "Cisco Packet Tracer", "Burp Suite", "Metasploit", "Linux CLI"
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-50 to-white pt-3 pb-10 md:pt-5 md:pb-14 border-b border-slate-200 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Focused on Cybersecurity & IT Support */}
          <div className="lg:col-span-7 space-y-4 animate-fadeIn">
            <div className="space-y-2.5">
              {/* Primary Focus Badge with Live Beacon & Shimmer */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-50 border border-teal-200/90 text-teal-800 text-xs font-bold tracking-wide relative overflow-hidden shadow-2xs group hover:border-teal-400 transition-colors">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-200/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                </span>
                <Shield className="w-3.5 h-3.5 text-teal-600" />
                <span>CYBERSECURITY &amp; IT SUPPORT SPECIALIST · CompTIA Network+</span>
              </div>
              
              {/* Candidate Name - Refined Size */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
                Siyabonga Mdaweni
              </h1>
              
              {/* Core Security Value Proposition - Refined Size */}
              <p className="text-base sm:text-lg font-semibold text-slate-700 leading-snug">
                Defending Networks, Troubleshooting Systems &amp; Assessing Security Vulnerabilities
              </p>
            </div>
            
            {/* Focused Narrative */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              CompTIA Network+ certified Cybersecurity and IT Support specialist with practical experience in network vulnerability scanning (Nmap, Zenmap), packet traffic analysis (Wireshark, tcpdump), web security (Burp Suite), network simulation (Cisco Packet Tracer), and enterprise data indexing under strict CIA triad principles.
            </p>

            {/* Core Security Toolkit Strip with Micro-Interactions */}
            <div className="pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-teal-600" />
                Core Security &amp; Network Toolkit:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {coreSecurityTools.map((tool, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-semibold px-2.5 py-1 rounded bg-white/90 text-navy-900 border border-slate-200 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-800 hover:shadow-xs cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Contact Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 pt-0.5">
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

            {/* Primary Action Buttons + Diagnostic Probe Button */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button 
                size="lg" 
                onClick={navigateToProjects}
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm px-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                View Cybersecurity Projects
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleDownload}
                className="border-slate-300 text-navy-900 hover:bg-white hover:border-slate-400 font-medium text-xs sm:text-sm px-6 bg-white shadow-2xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="mr-2 w-4 h-4 text-teal-600" />
                {resumeConfig.buttonText}
              </Button>

              {/* Interactive Network Diagnostic Trigger */}
              <button
                type="button"
                onClick={runDiagnosticProbe}
                disabled={isScanning}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-teal-50/90 border border-teal-200 text-teal-800 hover:bg-teal-100 hover:border-teal-300 transition-all duration-200 cursor-pointer hover:shadow-xs active:scale-95"
                title="Run live simulated network and port diagnostic probe"
              >
                <Terminal className="w-3.5 h-3.5 text-teal-600" />
                <span>{isScanning ? "Scanning Network..." : "Run Security Probe"}</span>
                {isScanning && <span className="inline-block w-2 h-2 rounded-full bg-teal-600 animate-ping" />}
              </button>
            </div>

            {/* Interactive Live Diagnostic Terminal Drawer */}
            {isDiagnosticOpen && (
              <div className="mt-3 p-3.5 rounded-xl bg-navy-950 border border-teal-500/30 text-teal-300 font-mono text-[11px] space-y-1.5 shadow-lg animate-slideIn">
                <div className="flex items-center justify-between border-b border-navy-800 pb-2 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-teal-400 font-bold">
                    <Shield className="w-3 h-3 text-teal-400" />
                    LIVE NETWORK DIAGNOSTIC PROBE
                  </span>
                  <button 
                    onClick={() => setIsDiagnosticOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
                  >
                    ✕ Close
                  </button>
                </div>
                {diagnosticStep >= 1 && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-teal-400 font-bold">&gt;</span>
                    <span>Probing default gateway &amp; routing tables (192.168.1.1)...</span>
                    <span className="text-emerald-400 ml-auto font-bold">[ONLINE · 1.2ms]</span>
                  </div>
                )}
                {diagnosticStep >= 2 && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-teal-400 font-bold">&gt;</span>
                    <span>Auditing vulnerable ports: 135, 139, 445 (SMB), 3306 (MySQL)...</span>
                    <span className="text-amber-300 ml-auto font-bold">[FILTERED / HARDENED]</span>
                  </div>
                )}
                {diagnosticStep >= 3 && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-teal-400 font-bold">&gt;</span>
                    <span>CompTIA Network+ standard compliance &amp; packet inspection:</span>
                    <span className="text-emerald-400 ml-auto font-bold">[0 ALERTS]</span>
                  </div>
                )}
                {diagnosticStep >= 4 && (
                  <div className="pt-1.5 border-t border-navy-800/80 flex items-center justify-between text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      Assessment complete: Security controls active &amp; boundary protected.
                    </span>
                    <button 
                      onClick={runDiagnosticProbe}
                      className="text-[10px] text-teal-300 hover:underline cursor-pointer"
                    >
                      Re-run probe
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Professional Profiles */}
            <div className="flex items-center gap-3 pt-0.5 text-xs text-slate-600">
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

          {/* Right Column: Clean, Elegant Portrait with 3D Tilt Movement */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              onMouseMove={handleMouseMovePortrait}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeavePortrait}
              style={{
                transform: isHovered
                  ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
                  : 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)',
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out, box-shadow 0.4s ease',
              }}
              className="w-full max-w-[340px] bg-white rounded-2xl border border-slate-200/90 shadow-md p-3 relative cursor-pointer hover:shadow-xl hover:border-teal-400/80 will-change-transform"
            >
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100 relative group">
                <img 
                  src="https://image2url.com/images/1764575666412-7cbc0544-83f2-4143-8743-23cc08418914.png" 
                  alt="Siyabonga Mdaweni - Cybersecurity &amp; IT Support Specialist"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle Glass Corner Security Indicator */}
                <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded-md bg-navy-950/80 backdrop-blur-md text-[10px] text-teal-300 border border-teal-500/30 font-semibold flex items-center gap-1.5 shadow-sm">
                  <Shield className="w-3 h-3 text-teal-400" />
                  <span>Network+ Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator with Smooth Bounce Animation */}
      <div className="flex justify-center pt-5 pb-1 hidden md:flex relative z-10">
        <a 
          href="#overview" 
          onClick={scrollToOverview}
          aria-label="Scroll to overview" 
          className="p-1.5 rounded-full text-slate-400 hover:text-navy-900 hover:bg-slate-200/60 transition-colors block cursor-pointer animate-bounce"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}