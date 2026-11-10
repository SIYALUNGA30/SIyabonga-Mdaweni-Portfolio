import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Progress } from "./ui/Progress";
import { ChevronDown, ChevronUp, ExternalLink, Shield, Terminal, Sparkles, FileText, CheckCircle } from "./icons/LucideIcons";
import { Button } from "./ui/Button";

export function SkillsSection() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Top skills MUST be Cybersecurity and IT Support per user instruction
  const skillCategories = [
    {
      title: "1. Cybersecurity & Threat Defense",
      skills: [
        { name: "Vulnerability Assessment & Network Scanning (Nmap, Zenmap)", level: 90, description: "Intense port scans, service detection, OS detection, traceroute, and false positive analysis" },
        { name: "Traffic & Packet Analysis (Wireshark, tcpdump)", level: 88, description: "Deep packet inspection, protocol analysis, and capturing network anomalies" },
        { name: "Web Application Security (Burp Suite, Gobuster, SQLMap)", level: 85, description: "HTTP traffic interception, directory fuzzing, and database injection testing" },
        { name: "Penetration Testing & Password Security (Metasploit, Hydra, John the Ripper)", level: 82, description: "Exploit fundamentals, password cracking, and vulnerability verification" },
        { name: "Security Governance & Principles (CIA Triad, POPIA, ISO 27001, NIST CSF)", level: 90, description: "Risk cataloguing, confidentiality enforcement, and compliance controls" },
        { name: "Forensics & Malware Triage (CyberChef, CAPA, REMnux, FlareVM)", level: 78, description: "Payload decoding, capability detection, and digital forensics fundamentals" }
      ]
    },
    {
      title: "2. IT Support & Network Infrastructure",
      skills: [
        { name: "Network Simulation & Topology Design (Cisco Packet Tracer)", level: 88, description: "Simulating enterprise network topologies, switch/router configs, and IP schemes" },
        { name: "Networking Protocols & Troubleshooting (TCP/IP, DNS, DHCP, VPN)", level: 92, description: "Diagnosing connectivity issues, subnetting, Wi-Fi security, and routing paths" },
        { name: "Hardware Diagnostics & System Maintenance", level: 90, description: "Root-cause problem solving for PCs, peripherals, and workstation environments" },
        { name: "Operating Systems Administration (Windows CLI, Linux Bash)", level: 85, description: "Command-line file operations, permission audits, and service administration" },
        { name: "Service Desk Management & Incident Ticketing", level: 88, description: "Priority/impact triage, diagnostic history logging, and SLA handoffs" }
      ]
    },
    {
      title: "3. Business Analysis & Systems Management",
      skills: [
        { name: "Data Confidentiality & Information Systems Indexing", level: 95, description: "Meticulous verification of identity data and archival integrity" },
        { name: "Requirements Gathering & Elicitation", level: 85, description: "Translating stakeholder business needs into functional technical specifications" },
        { name: "S.W.O.T & Operational Gap Analysis", level: 88, description: "Assessing organizational strengths, vulnerabilities, and technology gaps" },
        { name: "Process Modeling & Workflow Design", level: 84, description: "Documenting automated service desk workflows and security controls" }
      ]
    },
    {
      title: "4. Applied AI & Automation",
      skills: [
        { name: "Python Scripting", level: 88, description: "Automating security checks, data manipulation, and API pipelines" },
        { name: "Prompt Engineering & Evaluation", level: 92, description: "Developing diagnostic workflows and AI service desk integrations" },
        { name: "Algorithmic Bias Auditing", level: 85, description: "Evaluating machine learning models for ethical equity and demographic fairness" }
      ]
    }
  ];

  const certifications = [
    {
      name: "CompTIA Network+",
      issuer: "CompTIA",
      date: "Obtained 28 August 2026",
      badge: "Certified",
      url: ""
    },
    {
      name: "Certificate of Completion: Cyber Security 101",
      issuer: "TryHackMe",
      date: "Completed 27 October 2026",
      badge: "Completed",
      url: "https://tryhackme.com"
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google / Coursera",
      badge: "Verified",
      url: "https://coursera.org/share/dec9561459a53702731c7015229a1f6d"
    },
    {
      name: "Google IT Support Professional Certificate",
      issuer: "Google / Coursera",
      badge: "Verified",
      url: "https://coursera.org/share/be5976b1cc171d4d0c9c607ede1c81cf"
    },
    {
      name: "Foundations of Cybersecurity",
      issuer: "Google / Coursera",
      badge: "Verified",
      url: "https://coursera.org/share/422a2b4b8e954f120cb2faa752bbc16e"
    },
    {
      name: "Cisco Packet Tracer Network Simulation",
      issuer: "Cisco Networking Academy",
      badge: "Completed",
      url: "https://www.netacad.com"
    },
    {
      name: "Python for Data Science, AI & Development",
      issuer: "IBM",
      badge: "Verified",
      url: "https://coursera.org/share/27ef814a3240640017e50fb2cec24df5"
    }
  ];

  const tools = [
    "Nmap", "Wireshark", "tcpdump", "Cisco Packet Tracer", "Burp Suite", "Metasploit", 
    "John the Ripper", "Hydra", "Gobuster", "SQLMap", "CyberChef", "CAPA", "REMnux", 
    "FlareVM", "Linux CLI", "Windows Command Prompt", "Zenmap", "VS Code", "Python"
  ];

  const displayedSkills = showAllSkills ? skillCategories : skillCategories.slice(0, 2);

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Focused on Cybersecurity and IT Support */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Technical Competencies
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Cybersecurity &amp; IT Support Skills
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Practical competencies in vulnerability scanning, packet analysis, penetration testing tools, Cisco network simulation, and hardware troubleshooting.
          </p>
        </div>
        
        {/* Core Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {displayedSkills.map((category, index) => (
            <Card key={index} className="bg-white border border-slate-200 rounded-xl shadow-2xs">
              <CardHeader className="p-5 pb-3 border-b border-slate-100 bg-slate-50/60">
                <CardTitle className="text-base font-bold text-navy-900 flex items-center gap-2">
                  {index === 0 && <Shield className="w-4 h-4 text-teal-600" />}
                  {index === 1 && <Terminal className="w-4 h-4 text-teal-600" />}
                  {index === 2 && <FileText className="w-4 h-4 text-teal-600" />}
                  {index === 3 && <Sparkles className="w-4 h-4 text-teal-600" />}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-navy-900">{skill.name}</span>
                      {skill.level && <span className="text-slate-400 font-mono text-[11px]">{skill.level}%</span>}
                    </div>
                    {skill.level && <Progress value={skill.level} className="h-1.5 bg-slate-100" />}
                    <p className="text-[11px] text-slate-500 leading-normal">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Expand / Minimize Skills Button */}
        <div className="flex justify-center mb-14">
          <Button 
            variant="outline" 
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="text-xs font-medium border-slate-300 text-navy-900 hover:bg-slate-50 gap-2 px-5 py-2"
          >
            {showAllSkills ? (
              <>
                Show Top Skills Only (Cybersecurity &amp; IT Support)
                <ChevronUp className="w-3.5 h-3.5 text-teal-600" />
              </>
            ) : (
              <>
                View All {skillCategories.length} Disciplines (Including Business Systems &amp; AI)
                <ChevronDown className="w-3.5 h-3.5 text-teal-600" />
              </>
            )}
          </Button>
        </div>
        
        {/* Certifications and Tools Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Verified Certifications & Labs */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-2xs">
            <CardHeader className="p-5 pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-bold text-navy-900 flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600" />
                Certifications &amp; Hands-on Learning Paths
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start justify-between gap-3 text-xs pb-2 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-navy-900 block">{cert.name}</span>
                        <span className="text-[11px] text-slate-400">
                          {cert.issuer} {cert.date ? `· ${cert.date}` : ""}
                        </span>
                      </div>
                    </div>
                    {cert.url ? (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-700 hover:text-navy-900 font-medium inline-flex items-center gap-1 flex-shrink-0 text-[11px] hover:underline"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-medium text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/70 flex-shrink-0">
                        {cert.badge || "Certified"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* TryHackMe & Network Tools */}
          <Card className="bg-white border border-slate-200 rounded-xl shadow-2xs">
            <CardHeader className="p-5 pb-3 border-b border-slate-100">
              <CardTitle className="text-base font-bold text-navy-900 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-teal-600" />
                Security, Lab &amp; Diagnostic Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">
                Tools practiced across TryHackMe security labs, Cisco Packet Tracer network simulation, and workstation troubleshooting:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((tool, index) => (
                  <span key={index} className="text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}