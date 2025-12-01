
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Progress } from "./ui/Progress";
import { Trophy, ExternalLink, Github, ChevronDown, ChevronUp } from "./icons/LucideIcons";
import { Button } from "./ui/Button";

export function SkillsSection() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // UPDATE THESE LINKS MANUALLY
  const scavengerHuntLinks = {
    deployment: "https://gemini-quiz-challenge-567954893740.us-west1.run.app/", 
    sourceCode: "https://github.com/SIYALUNGA30/SIyabonga-Mdaweni-Portfolio"  
  };

  const skillCategories = [
    {
      title: "AI & Generative Technologies",
      skills: [
        { name: "Python", level: 90, description: "Primary language for AI development" },
        { name: "OpenAI API", level: 92, description: "GPT integration and prompt engineering" },
        { name: "Hugging Face", level: 88, description: "Transformer models and NLP pipelines" },
        { name: "Prompt Engineering", level: 95, description: "Optimizing AI model interactions" },
        { name: "Sentiment Analysis", level: 85, description: "Text classification and emotion detection" }
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Pandas/NumPy", level: 60, description: "Data manipulation and analysis" },
        { name: "SQL", level: 50, description: "Database queries and optimization" },
        { name: "Matplotlib/Seaborn", level: 60, description: "Data visualization" },
        { name: "Jupyter Notebooks", level: 60, description: "Exploratory data analysis" },
        { name: "Statistics", level: 50, description: "Statistical modeling and testing" }
      ]
    },
    {
      title: "Development & Deployment",
      skills: [
        { name: "React/Node.js", level: 60, description: "Full-stack web application development" },
        { name: "Git/GitHub", level: 70, description: "Version control and collaboration" },
        { name: "Figma", level: 90, description: "Rapid prototyping and dashboard creation, Wireframes" },
        { name: "Gemini", level: 88, description: "AI-powered development and automation" },
        { name: "AWS Services", level: 58, description: "Cloud deployment and AI services" }
      ]
    },
    {
      title: "Business Analysis",
      skills: [
        { name: "Agile Methodology", level: 85, description: "Ensure rapid delivery of customer-centric solutions" },
        { name: "S.W.O.T Analysis", level: 90, description: "Evaluate organizational Strengths, Weaknesses, Opportunities, & Threats" },
        { name: "Excel", level: 88, description: "Analyze data, build models, and generate insights" },
        { name: "Process Models", level: 82, description: "Support automation and system design" },
        { name: "JIRA/TRELLO", level: 78, description: "Organize, track, & communicate requirements, tasks, and workflows" }
      ]
    },
    {
      title: "IT Support",
      skills: [
        { name: "Hardware Troubleshooting", level: 85, description: "Diagnosing and resolving hardware, software, and network issues efficiently using systematic problem-solving techniques." },
        { name: "Networking Fundementals", level: 90, description: "Understanding protocols like TCP/IP, DNS, and VPNs to configure and troubleshoot network connectivity issues." },
        { name: "Operating Systems", level: 70, description: "Proficiency in managing and supporting Windows, macOS, and Linux, including updates, configurations, and user account management." },
        { name: "Cybersecurity Basics", level: 80, description: "Applying knowledge of security practices, such as password management and malware prevention, to protect systems and data." }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 90, description: "Effective verbal and written communication skills" },
        { name: "Problem Solving", level: 70, description: "Analytical approach to identifying and resolving issues" },
        { name: "Attention to Details", level: 70, description: "Precision in analysis and quality assurance" },
        { name: "Critical Thinking", level: 80, description: "Logical reasoning and decision-making abilities" },
        { name: "Collaboration", level: 75, description: "Teamwork and cross-functional cooperation" }
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Cybersecurity",
      url: "https://coursera.org/share/dec9561459a53702731c7015229a1f6d"
    },
    {
      name: "Google IT Support",
      url: "https://coursera.org/share/be5976b1cc171d4d0c9c607ede1c81cf"
    },
    {
      name: "AI Foundations: Prompt Engineering with ChatGPT (ASU)",
      url: "https://coursera.org/share/c76537b66a51c43d0e4683ee01885b63"
    },
    {
      name: "Introduction to Generative AI",
      url: "https://coursera.org/share/d0f0903dbf52f9932b0ec095833accfb"
    },
    {
      name: "Python for Data Science, AI & Development (IBM)",
      url: "https://coursera.org/share/27ef814a3240640017e50fb2cec24df5"
    },
    {
      name: "AI on Microsoft Azure",
      url: "https://coursera.org/share/49a10214b60bcca5e9cdc103755541d5"
    },
    {
      name: "Foundations of Cybersecurity",
      url: "https://coursera.org/share/422a2b4b8e954f120cb2faa752bbc16e"
    }
  ];

  const tools = [
    "VS Code", "Jupyter Lab", "Google Colab", "Figma",
    "Gemini.ai", "Obviously AI", "Lovable.ai", "Vercel", "Github"
  ];

  const displayedSkills = showAllSkills ? skillCategories : skillCategories.slice(0, 3);

  return (
    <section id="skills" className="py-12 bg-background">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent">Skills & Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical expertise spanning the entire machine learning lifecycle, 
            from data preprocessing to model deployment and monitoring.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {displayedSkills.map((category, index) => (
            <Card key={index} className="animate-fadeIn">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      {skill.level && <span className="text-sm text-muted-foreground">{skill.level}%</span>}
                    </div>
                    {skill.level && <Progress value={skill.level} className="h-2" />}
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mb-12">
            <Button 
                variant="outline" 
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="gap-2 group hover:border-primary/50"
            >
                {showAllSkills ? (
                    <>
                        Show Less Skills
                        <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                    </>
                ) : (
                    <>
                        View All Skills
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                    </>
                )}
            </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Certifications & Credentials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:underline"
                    >
                      {cert.name}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Development Tools & Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-l-4 border-l-chart-4 shadow-lg">
             <CardHeader>
               <CardTitle className="flex items-center gap-2 text-2xl">
                 <Trophy className="w-6 h-6 text-chart-4" />
                 Key Achievements
               </CardTitle>
             </CardHeader>
             <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-primary">Scavenger Hunt Game: Quiz Challenge</h3>
                    <p className="text-sm text-muted-foreground mb-4 italic">Co-Organizer & Developer</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Together with my colleagues, I was tasked with designing and running a Scavenger Hunt Game over a six-week period. I was also an active part of the game as well. Leveraging the team’s creativity and collaboration, I developed a short quiz challenge that is divided into four timed sections, using <strong>Google Studio</strong> to put the idea into action.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                       <div className="bg-secondary/20 p-5 rounded-lg border border-border/50">
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                            Game Structure
                          </h4>
                          <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                              <span className="font-bold text-chart-4">•</span>
                              <span><strong className="text-foreground">Flag Guessing:</strong> Participants identify different country flags under time pressure.</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="font-bold text-chart-4">•</span>
                              <span><strong className="text-foreground">IT Riddles:</strong> A set of technology-related riddles to test problem-solving and IT knowledge.</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="font-bold text-chart-4">•</span>
                              <span><strong className="text-foreground">Emoji Decoding:</strong> Players interpret sequences of emojis to uncover hidden meanings or phrases.</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="font-bold text-chart-4">•</span>
                              <span><strong className="text-foreground">Pixel Puzzle:</strong> A challenge where participants solve puzzles based on pixelated images.</span>
                            </li>
                          </ul>
                       </div>

                       <div className="bg-secondary/20 p-5 rounded-lg border border-border/50">
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                             Objectives
                          </h4>
                          <ul className="space-y-3 text-sm text-muted-foreground">
                            {[
                              "Keep participants entertained and engaged throughout the activity.",
                              "Encourage teamwork by grouping individuals who may not know each other.",
                              "Promote problem-solving and creative thinking in a fun environment.",
                              "Motivate participants to work towards winning a prize."
                            ].map((obj, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="w-1.5 h-1.5 bg-chart-4 rounded-full mt-2 flex-shrink-0" />
                                <span>{obj}</span>
                              </li>
                            ))}
                          </ul>
                       </div>
                    </div>

                    <div className="pt-4 border-t border-border/40">
                      <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wider">Project Links</h4>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="outline" size="sm" asChild className="hover:border-primary/50 hover:bg-primary/5">
                           <a href={scavengerHuntLinks.deployment} target="_blank" rel="noopener noreferrer">
                             <ExternalLink className="w-4 h-4 mr-2" />
                             View Deployment
                           </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="hover:border-primary/50 hover:bg-primary/5">
                           <a href={scavengerHuntLinks.sourceCode} target="_blank" rel="noopener noreferrer">
                             <Github className="w-4 h-4 mr-2" />
                             View Source Code
                           </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
             </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Areas of Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span role="img" aria-label="IT Support icon">🖥️</span>
                  </div>
                  <h4 className="mb-2 font-medium">IT Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Delivering reliable technical assistance, troubleshooting, and systems maintenance to ensure smooth IT operations.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span role="img" aria-label="AI/ML Engineering icon">🤖</span>
                  </div>
                  <h4 className="mb-2 font-medium">AI/ML Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    Designing and building AI-powered models that solve real-world problems, integrating data-driven insights with practical applications.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span role="img" aria-label="Business Analysis icon">📝</span>
                  </div>
                  <h4 className="mb-2 font-medium">Business Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Bridging the gap between business needs and technical solutions through requirements gathering, process mapping, and solution evaluation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span role="img" aria-label="Web Development icon">📱</span>
                  </div>
                  <h4 className="mb-2 font-medium">Web Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating responsive, user-friendly websites and applications with a focus on functionality, scalability, and modern design.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
