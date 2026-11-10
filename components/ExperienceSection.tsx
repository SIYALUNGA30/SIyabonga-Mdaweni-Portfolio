import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Briefcase, Calendar, MapPin, CheckCircle, Shield, Terminal } from "./icons/LucideIcons";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Cybersecurity Trainee & Lab Practitioner",
      company: "TryHackMe & Cisco Networking Labs",
      location: "Practical Virtual Security Labs",
      duration: "September 2026 - 27 October 2026",
      type: "Practical Security Training",
      summary: "Completed TryHackMe's Cyber Security 101 learning path (September 2026 - 27 October 2026), gaining foundational knowledge of offensive and defensive cybersecurity, hands-on network scanning, packet analysis, and simulated Cisco network configurations.",
      achievements: [
        "Completed TryHackMe's Cyber Security 101 learning path, gaining foundational knowledge of offensive and defensive cybersecurity.",
        "Practised Linux and Windows fundamentals, command-line operations, networking concepts, and security protocols.",
        "Explored network scanning, reconnaissance, and vulnerability assessment using tools such as Nmap.",
        "Analysed network traffic and packets using Wireshark and tcpdump.",
        "Practised web application security and vulnerability testing using Burp Suite and Gobuster.",
        "Explored penetration testing and exploitation fundamentals using Metasploit.",
        "Developed knowledge of cryptography, authentication, password security, and security principles.",
        "Gained exposure to security monitoring, log analysis, digital forensics, and incident response.",
        "Completed practical, hands-on rooms to strengthen technical problem-solving and cybersecurity investigation skills.",
        "Simulated enterprise network topologies, IP addressing, and routing configurations using Cisco Packet Tracer."
      ],
      tools: [
        "Nmap",
        "Wireshark",
        "tcpdump",
        "Cisco Packet Tracer",
        "John the Ripper",
        "Metasploit",
        "Burp Suite",
        "Hydra",
        "Gobuster",
        "SQLMap",
        "CyberChef",
        "CAPA",
        "REMnux",
        "FlareVM"
      ]
    },
    {
      title: "Data Indexer",
      company: "Department of Home Affairs",
      location: "Silverton, Pretoria",
      duration: "January 2024 - June 2025",
      type: "Contract",
      summary: "Responsible for capturing, indexing, and safeguarding citizen records within departmental data systems while enforcing strict confidentiality and information security standards.",
      achievements: [
        "Captured, indexed, and managed information accurately using organisational data systems.",
        "Verified information and maintained data accuracy, consistency, and integrity.",
        "Handled sensitive information responsibly, following confidentiality requirements and established procedures.",
        "Maintained accurate records and supported efficient information retrieval and processing.",
        "Applied attention to detail and problem-solving skills when identifying and correcting data inconsistencies.",
        "Developed an understanding of information security principles, particularly confidentiality, integrity, and availability (CIA triad).",
        "Followed organizational procedures to support reliable data management and protect sensitive information."
      ],
      tools: [
        "Organizational Data Systems",
        "CIA Triad Principles",
        "Data Integrity Verification",
        "Confidential Records Management"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Work &amp; Practical Training
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Practical Experience &amp; Labs
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Hands-on cybersecurity laboratory practice, network analysis, and professional data indexing with strict adherence to confidentiality and the CIA triad.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
              <CardHeader className="p-6 pb-4 border-b border-slate-100">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700 flex-shrink-0">
                        {index === 0 ? <Shield className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                      </div>
                      <CardTitle className="text-lg md:text-xl font-bold text-navy-900">
                        {exp.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 pl-10.5">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {exp.summary}
                </p>
                
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Hands-on Competencies &amp; Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.tools && (
                  <div className="pt-2 border-t border-slate-100">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-teal-600" />
                      Tools &amp; Frameworks Practiced:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tools.map((tool, idx) => (
                        <span key={idx} className="text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}