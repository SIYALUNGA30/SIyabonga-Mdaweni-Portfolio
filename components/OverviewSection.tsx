import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Button } from "./ui/Button";
import { User, FolderKanban, ListChecks, Briefcase, ArrowRight, GraduationCap, Users } from "./icons/LucideIcons";

const overviewItems = [
  {
    icon: User,
    title: "About Me",
    description: "Enthusiastic IT Support professional and recent AI/ML bootcamp graduate with a passion for solving technical problems.",
    link: "#about",
    linkText: "More About Me"
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description: "A collection of 6+ hands-on projects from my AI/ML bootcamp, showcasing my end-to-end development skills.",
    link: "#projects",
    linkText: "View My Projects"
  },
  {
    icon: ListChecks,
    title: "Skills",
    description: "A diverse skill set covering AI, front-end development, IT support fundamentals, and crucial business analysis.",
    link: "#skills",
    linkText: "See My Skills"
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "Professional journey including hands-on experience as an Indexer and intensive training in AI/ML engineering.",
    link: "#experience",
    linkText: "Explore Experience"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "My academic background in Business IT and specialized training in AI/ML from a professional bootcamp.",
    link: "#education",
    linkText: "View Education"
  },
  {
    icon: Users,
    title: "References",
    description: "Professional and academic contacts who can attest to my skills, work ethic, and collaborative spirit.",
    link: "#references",
    linkText: "See References"
  }
];

export function OverviewSection() {
  const navigateToPage = (path: string) => {
    window.location.hash = path.substring(1);
  };

  return (
    <section id="overview" className="py-20 bg-background border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Portfolio at a Glance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A quick summary of my professional profile. Dive deeper into any section to learn more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {overviewItems.map((item, index) => (
            <Card key={index} className="flex flex-col hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-6 flex-grow">{item.description}</p>
                <Button variant="outline" className="mt-auto w-full group" onClick={() => navigateToPage(item.link)}>
                  {item.linkText}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}