import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Shield, CheckCircle, Terminal } from "./icons/LucideIcons";

export function AboutSection() {
  const highlights = [
    "Completed TryHackMe's Cyber Security 101 learning path covering offensive and defensive cybersecurity fundamentals",
    "Hands-on network scanning, service discovery, and vulnerability assessment using Nmap and Zenmap",
    "Packet and traffic inspection using Wireshark and tcpdump to diagnose protocols and detect anomalies",
    "Web application vulnerability testing with Burp Suite, Gobuster, and SQLMap",
    "Network topology simulation, IP addressing, and router/switch configuration in Cisco Packet Tracer",
    "Hardware diagnostics, Windows Command Prompt, Linux Bash operations, and systematic IT troubleshooting",
    "Practical enterprise data indexing and records management at the Department of Home Affairs under the CIA Triad (Confidentiality, Integrity, Availability)",
    "CompTIA Network+ certified (Obtained 28 August 2026)",
    "Certificate of Completion for Cyber Security 101 on TryHackMe (Completed 27 October 2026)",
    "Diploma in Business Information Technology graduate from the University of Johannesburg",
    "Google Cybersecurity & Google IT Support Professional Certificates verified on Coursera"
  ];

  const focusAreas = [
    "Vulnerability Assessment",
    "Network Traffic Analysis",
    "Cisco Packet Tracer",
    "IT Systems Troubleshooting",
    "CIA Triad Security",
    "Linux & Windows CLI",
    "Web App Security (Burp)",
    "Hardware Maintenance",
    "Confidential Records Indexing"
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Professional Profile
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight mb-2.5">
            About Me
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Cybersecurity Analyst and IT Support Specialist dedicated to protecting networks, diagnosing systems issues, and maintaining organizational data integrity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Professional Narrative */}
          <div className="md:col-span-7 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base md:text-lg font-bold text-navy-900 flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600" />
                Cybersecurity &amp; IT Support Focus
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                I am a Cybersecurity and IT Support professional based in Johannesburg, South Africa. My technical foundation combines CompTIA Network+ certification (Obtained 28 August 2026), TryHackMe Certificate of Completion in Cyber Security 101 (Completed 27 October 2026), verified credentials in Google Cybersecurity and IT Support, and a tertiary Diploma in Business Information Technology from the University of Johannesburg.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Through my work as a Data Indexer at the Department of Home Affairs, I applied rigorous information security practices, protecting sensitive citizen records and upholding the CIA triad (Confidentiality, Integrity, and Availability). In virtual security labs, I conduct network reconnaissance with Nmap, deep-packet inspections with Wireshark, web application testing with Burp Suite, and simulation of corporate networks with Cisco Packet Tracer.
              </p>
              
              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-sm font-bold text-navy-900 mb-2 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-teal-600" />
                  Career Objectives
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Actively seeking full-time positions in Cybersecurity Analysis, IT Support, or Systems Administration. I am ready to apply my diagnostic skills, threat awareness, and systematic troubleshooting to protect organizational networks and support business users immediately.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right: Key Highlights Card */}
          <div className="md:col-span-5">
            <Card className="bg-white border border-slate-200 shadow-xs rounded-xl">
              <CardContent className="p-6">
                <h4 className="text-base font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Key Highlights &amp; Competencies
                </h4>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-xs text-slate-700 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Core Practice Areas</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {focusAreas.map((area, idx) => (
                      <span key={idx} className="text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}