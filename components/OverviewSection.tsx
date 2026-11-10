import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Button } from "./ui/Button";
import { User, FolderKanban, ListChecks, Briefcase, ArrowRight, GraduationCap, Users } from "./icons/LucideIcons";

const overviewItems = [
  {
    icon: User,
    title: "About Me",
    description: "Cybersecurity Analyst and IT Support Specialist with hands-on experience in vulnerability assessment, packet analysis, and network diagnostics.",
    link: "#about",
    linkText: "More About Me"
  },
  {
    icon: FolderKanban,
    title: "Course Work Projects",
    description: "Separated coursework projects in Cybersecurity (vulnerability assessments & AI service desk) and applied AI/ML systems.",
    link: "#projects",
    linkText: "View Course Work Projects"
  },
  {
    icon: ListChecks,
    title: "Skills & Security Tools",
    description: "Hands-on tools including Nmap, Wireshark, tcpdump, Cisco Packet Tracer, Burp Suite, Metasploit, and hardware troubleshooting.",
    link: "#skills",
    linkText: "See My Skills"
  },
  {
    icon: Briefcase,
    title: "Experience & Labs",
    description: "Practical training in TryHackMe security labs, Cisco Packet Tracer networking, and data indexing at the Department of Home Affairs.",
    link: "#experience",
    linkText: "Explore Experience"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Diploma in Business Information Technology from University of Johannesburg, featuring Software Development and Communication Networks.",
    link: "#education",
    linkText: "View Education"
  },
  {
    icon: Users,
    title: "References",
    description: "Professional and academic supervisory contacts who can attest to my work ethic, integrity, and technical diagnostic skill.",
    link: "#references",
    linkText: "See References"
  }
];

export function OverviewSection() {
  const navigateToPage = (path: string) => {
    window.location.hash = path.substring(1);
  };

  return (
    <section id="overview" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Professional Summary
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight mb-2.5">
            Portfolio at a Glance
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            An overview of my technical disciplines, verified coursework, academic credentials, and professional references.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewItems.map((item, index) => (
            <Card 
              key={index} 
              className="flex flex-col bg-white border border-slate-200/90 rounded-xl card-hover-lift hover:border-teal-400 group overflow-hidden"
            >
              <CardHeader className="p-5 pb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200/70 flex items-center justify-center text-teal-700 flex-shrink-0 group-hover:scale-110 group-hover:bg-teal-100 group-hover:text-teal-800 transition-all duration-300">
                    <item.icon className="w-4 h-4 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-sm md:text-base font-bold text-navy-900 leading-snug group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-2 flex-grow flex flex-col justify-between">
                <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full text-xs font-semibold border-slate-200 text-navy-900 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-900 transition-all duration-200 justify-between group-hover:border-teal-300"
                  onClick={() => navigateToPage(item.link)}
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}