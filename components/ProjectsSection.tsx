import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Terminal, 
  Lock, 
  Sparkles, 
  FileText,
  AlertCircle,
  CheckCircle,
  Users,
  Building2
} from "./icons/LucideIcons";
import { Button } from "./ui/Button";

interface CyberProject {
  id: string;
  title: string;
  client?: string;
  role: string;
  badgeType: string;
  year: string;
  scope?: string;
  overview: string;
  demoUrl?: string;
  codeUrl?: string;
  tools: string[];
  frameworks: string[];
  keyHighlights?: { label: string; value: string }[];
  tasks?: {
    id: number;
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    summary: string;
    details: string;
  }[];
  steps?: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits?: string[];
  challenges?: string[];
  deliverables: string[];
}

interface AIProject {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  deliverables: string[];
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
  videoUrl?: string;
}

export function ProjectsSection() {
  // Minimize/Maximize state for each career section
  const [isCybersecurityExpanded, setIsCybersecurityExpanded] = useState(true);
  const [isAiExpanded, setIsAiExpanded] = useState(true);
  
  // AI grid inner pagination
  const [showAllAiProjects, setShowAllAiProjects] = useState(true);

  // Active task details accordion for Cybersecurity projects
  const [activeCyberTask, setActiveCyberTask] = useState<string | null>(null);

  const cybersecurityProjects: CyberProject[] = [
    {
      id: "abc-financial",
      title: "ABC Financial Services: Cybersecurity Risk and Vulnerability Assessment",
      client: "ABC Financial Services",
      role: "Junior Cybersecurity Analyst (training project)",
      badgeType: "Vulnerability & Risk Assessment",
      year: "2025",
      scope: "Fictional company with 50 employees, office network, customer database, corporate website, email system, and Wi-Fi network.",
      overview: "I completed a practical security assessment for ABC Financial Services, a fictional company with 50 employees, an office network, a customer database, a website, an email system and a Wi-Fi network. The manager was concerned about cyber threats, so my task was to assess the company’s security risks and overall security posture and recommend improvements.",
      tools: ["Nmap", "Zenmap", "Windows Command Prompt"],
      frameworks: ["POPIA", "ISO/IEC 27001", "NIST Cybersecurity Framework (CSF)", "CIS Controls"],
      keyHighlights: [
        { label: "Target Scope", value: "50 Employees, LAN, DB, Web, Email & Wi-Fi" },
        { label: "Open Ports Found", value: "Ports 135, 139, 445 (SMB) & 3306 (MySQL)" },
        { label: "Risks Catalogued", value: "6 Business Risks (Low to Critical)" },
        { label: "Case Study", value: "2025 Paraguay Breach (7.4M Records Analyzed)" }
      ],
      tasks: [
        {
          id: 1,
          title: "Vulnerability Scanning",
          icon: Terminal,
          summary: "Conducted intense Nmap scans via Zenmap and CLI against local PCs and scanme.nmap.org.",
          details: "I ran an intense Nmap scan through Zenmap on an office PC, and found four open ports (135, 139, 445 and 3306), including MySQL and SMB services that should be restricted. I then used Nmap from the command line against Nmap’s official test server, scanme.nmap.org, to practise service detection, OS detection and traceroute, and to analyse the results for outdated software and possible false positives."
        },
        {
          id: 2,
          title: "Risk Identification & Rating",
          icon: AlertCircle,
          summary: "Catalogued 6 business risks evaluating likelihood, impact, financial, and reputational factors.",
          details: "I identified six business risks from weak passwords, unpatched computers, phishing, an open shared folder and exposed services. I built a risk catalogue that rated each risk by likelihood and impact (Low, Medium, High, Critical), and evaluated the business, financial, operational and reputation impact of each."
        },
        {
          id: 3,
          title: "Asset Identification & Analysis",
          icon: Shield,
          summary: "Mapped critical systems and IT infrastructure to threats and quantified risk exposure.",
          details: "I identified critical systems, digital assets and IT infrastructure, then matched vulnerabilities to threats and the risks that could result."
        },
        {
          id: 4,
          title: "Misconfiguration Investigation",
          icon: Lock,
          summary: "Investigated open shared folders, blank admin passwords, disabled firewalls, and weak Wi-Fi.",
          details: "I analysed risky settings, such as a shared folder open to Everyone, an administrator account with no password, a disabled firewall and a weak Wi-Fi password, and explained how each should be configured."
        },
        {
          id: 5,
          title: "Controls & Countermeasures",
          icon: CheckCircle,
          summary: "Recommended prioritized countermeasures including MFA, RBAC, patching, and encryption.",
          details: "I assessed existing and missing controls, then recommended countermeasures in priority order, including multi-factor authentication, patch management, security awareness training, role-based access control, firewall hardening, encrypted data, backups and monitoring."
        },
        {
          id: 6,
          title: "Incident Case Study",
          icon: FileText,
          summary: "Researched the 2025 Paraguay breach (7.4M records) to extract preventative enterprise controls.",
          details: "I researched the 2025 Paraguay government data breach, in which a government employee’s device infected with infostealer malware led to the theft of about 7.4 million citizen records. I explained the lessons learned and how ABC Financial Services could avoid a similar incident."
        }
      ],
      deliverables: [
        "Vulnerability Scan Report (Nmap/Zenmap)",
        "Risk Catalogue (Likelihood & Impact Matrix)",
        "System Misconfiguration Remediation Guide",
        "Prioritized Controls & Countermeasures Plan",
        "Paraguay Breach Threat Analysis & Prevention Study"
      ]
    },
    {
      id: "masakhane-service-desk",
      title: "AI-Powered IT Service Desk Agent",
      client: "Masakhane Insurance",
      role: "Junior Cybersecurity & IT Systems Analyst (training project)",
      badgeType: "IT Security & Service Desk Automation",
      year: "2025",
      demoUrl: "https://it-systems-one.vercel.app/",
      overview: "An AI Service Desk Agent embedded in the employee ticketing system. It gives employees instant, guided troubleshooting and hands off to human technicians when needed. It supports the IT team and does not replace it.",
      tools: ["AI Agent", "Ticketing System API", "Next.js / React", "Vercel", "Incident Diagnostics Engine", "Knowledge Base"],
      frameworks: ["ITIL Incident Management", "POPIA Data Privacy", "Role-Based Access Control (RBAC)", "Principle of Least Privilege"],
      keyHighlights: [
        { label: "Client", value: "Masakhane Insurance" },
        { label: "Deployment", value: "Live on Vercel" },
        { label: "Incident Routing", value: "Automated Impact & Priority Classification" },
        { label: "Escalation", value: "Guaranteed Human Technician Handoff" }
      ],
      steps: [
        {
          step: 1,
          title: "Secure Authentication & Access",
          description: "The employee logs into the corporate ticketing system and opens the AI Service Desk Agent."
        },
        {
          step: 2,
          title: "Issue Intake & Natural Language Parsing",
          description: "The employee selects a common incident category or describes their technical problem in natural language."
        },
        {
          step: 3,
          title: "Interactive Guided Diagnostics",
          description: "The Agent asks targeted diagnostic questions, then delivers sequential troubleshooting steps one at a time, validating whether each action resolved the issue."
        },
        {
          step: 4,
          title: "Automated Ticket & History Generation",
          description: "If the issue persists, the Agent automatically compiles and generates an IT ticket containing the complete diagnostic history and troubleshooting steps attempted."
        },
        {
          step: 5,
          title: "Priority Scoring & Specialist Routing",
          description: "It dynamically evaluates business impact and urgency, sets priority levels, and routes the ticket to the qualified IT specialist or security tier."
        }
      ],
      benefits: [
        "Fewer repetitive support requests and significantly reduced employee wait times",
        "Immediate self-service resolution for common, low-complexity IT issues",
        "Higher-quality tickets with automated capture of diagnostic logs and attempted steps",
        "Accurate priority and impact routing, freeing senior technicians to focus on medium, high, and critical incidents",
        "Seamless scalability as the organization's workforce expands"
      ],
      challenges: [
        "Integration with existing enterprise ticketing systems and user directories",
        "Maintaining an accurate, continuously updated IT knowledge base",
        "Rigorous accuracy testing and validation of AI responses to prevent misconfiguration",
        "Enforcing strict access controls, data privacy (POPIA), and least-privilege standards",
        "Ensuring human escalation remains frictionless and available for complex or sensitive incidents"
      ],
      deliverables: [
        "Live Deployed Service Desk Application (Vercel)",
        "End-to-End Diagnostic & Ticketing Workflow",
        "Incident Priority & Routing Matrix",
        "Security, Access Control & Escalation Architecture"
      ]
    }
  ];

  const aiProjects: AIProject[] = [
    {
      title: "SmartWater SA",
      description: "The AI-Driven Precision Irrigation System is designed to address global water scarcity and agricultural inefficiencies by optimizing irrigation scheduling. Agriculture consumes 70% of global freshwater, with up to 50% wasted due to over-irrigation or poor timing. This solution leverages predictive analytics, IoT soil sensors, and weather APIs to determine optimal irrigation times and amounts.",
      technologies: ["OpenWeatherMap API", "Figma", "Obviously.ai", "Classification AI"],
      features: [
        "AI-Powered Predictive Analytics",
        "Real-Time Data Integration", 
        "Farmer-Centric Dashboard",
        "Basic error handling implementation",
        "Interactive User Touchpoints"
      ],
      deliverables: ["Interactive prototype", "Demo video", "Ethical analysis document"],
      imageUrl: "https://i.imgur.com/GXB9Akf.png",
      demoUrl: "https://start-pastel-91876766.figma.site",
      codeUrl: "https://github.com/Nompil/Smart-Irrigation-Scheduler" 
    },
    {
      title: "Cosmic Quill",
      description: "Cosmic Quill is a creative writing platform prototyped in Figma and implemented as a single-page React application with Tailwind CSS. It leverages Google Gemini 1.5 Flash API for real-time text generation, text-to-speech narration, and image-based prompts, while Supabase handles authentication, storage, and real-time collaboration. Designed for storytellers, students, and creative teams, it offers an accessible, scalable, and immersive experience.",
      technologies: ["OpenAI API", "Prompt Engineering", "Python", "FigmaMake"],
      features: [
        "5+ optimized prompt templates for different scenarios",
        "User interface with 3+ customization parameters",
        "Results saving and export functionality",
        "Performance tracking for generation time and token usage",
        "Input validation and output filtering mechanisms"
      ],
      deliverables: ["Functional generator tool", "Prompt library", "Technical documentation"],
      imageUrl: "https://image2url.com/images/1757509397687-e0ae63ca-22d1-4f8a-8b81-8db4de9df35b.png",
      demoUrl: "https://apron-swarm-24108016.figma.site",
      codeUrl: "https://github.com/SIYALUNGA30/project-2"
    },
    {
      title: "AI Resume Builder",
      description: "Developed an intelligent resume generation system creating customized, ATS-friendly resumes. Features industry-specific keyword optimization, multiple template options, and job description matching analysis.",
      technologies: ["React", "Node.js", "OpenAI API", "Tailwind CSS", "PDF-lib"],
      features: [
        "Content generation based on career information",
        "Industry-specific keyword optimization",
        "ATS compatibility checking and scoring",
        "3+ distinct visual templates with customization",
        "Job description matching analysis",
        "Local storage for user privacy"
      ],
      deliverables: ["Deployed application", "User guide", "Technical report"],
      imageUrl: "https://i.imgur.com/Jgn0VfE.png",
      demoUrl: "https://masikhule-solutions.github.io/ai-resume-builder/",
      codeUrl: "https://github.com/Mphefemulo/Masikhule.git"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "The Sentiment Analysis Dashboard is a modern web application that transforms unstructured text into actionable insights using Google’s Gemini API. It supports sentiment classification, keyword extraction, confidence scoring, and explainability, helping businesses, researchers, and individuals uncover emotional and thematic trends. With interactive visualizations and exportable reports, it delivers a complete end-to-end workflow for qualitative data analysis.",
      technologies: ["Python", "Streamlit", "Hugging Face", "Plotly", "Pandas"],
      features: [
        "Text input via direct entry or file upload",
        "Multi-class sentiment classification",
        "Confidence scoring for all classifications",
        "Keyword extraction highlighting sentiment drivers",
        "Interactive visualization components",
        "Export results in multiple formats"
      ],
      deliverables: ["GitHub repository", "Deployed application", "Accuracy report"],
      imageUrl: "https://image2url.com/images/1757509568863-3aa1f716-66cd-43b9-8a3e-a1b1f4df6f50.png",
      demoUrl: "https://skelletor147.github.io/sentimental-analysis/",
      codeUrl: "https://github.com/skelletor147/sentimental-analysis-dashboard"
    },
    {
      title: "Bias Audit Report",
      description: "The bias audit shows AI hiring models in South Africa may worsen inequality, predicting 16% lower employment for women and 25% for non-Whites (p<0.05). Ethical deployment requires fair data curation, reweighting, and transparent reporting, even at slight accuracy costs. The report calls for compliance with the Employment Equity Act and BEE goals, advocating diverse teams, regular audits, and skills-based features.",
      technologies: ["Python", "IBM AI Fairness 360", "Jupyter", "Statistical Analysis"],
      features: [
        "Bias Findings",
        "Ethical Imperative",
        "Accountability",
        "Transparency",
        "Performance comparison before and after mitigation",
        "Policy Alignment"
      ],
      deliverables: ["Analysis notebook", "Ethics presentation", "Reference framework"],
      imageUrl: "https://image2url.com/images/1757510495701-638eb905-cad4-4fa1-b066-6da33c336cbb.jpg",
      demoUrl: "https://nompil.github.io/Bias-Audit-Report-SA/",
      codeUrl: "https://github.com/Nompil/Bias-Audit-Report-SA.git"
    },
    {
      title: "AI Study Buddy",
      description: "The AI Study Buddy is a lightweight website that act as a personalized tutor. It enhances learning by answering questions, summarizing study materials, generating quizzes, and creating flashcards. The app is easy to deploy, works directly in the browser, and saves all data locally.",
      technologies: ["JavaScript", "HTML", "Gemini API", "CSS", "Google Studio AI"],
      features: [
        "Answers questions based on uploaded study materials or acts as a general AI assistant.",
        "Upload documents (.txt, .pdf) and images (.jpg, .png, .gif) with OCR support.",
        "Generate quizzes, summaries, and digital flashcards saved to local storage.",
        "Cosmic theme, tooltips, and fully responsive design.",
        "API performance monitoring and rate limiting",
        "Voice input and Text-to-Speech for a hands-free learning experience"
      ],
      deliverables: ["Working prototype", "Architecture diagram", "Demonstration video"],
      imageUrl: "https://i.imgur.com/ZFPCLmH.png",
      demoUrl: "https://ai-study-buddy-701021958461.us-west1.run.app/",
      codeUrl: "https://github.com/Nompil/ai-study-buddy"
    }
  ];

  const displayedAiProjects = showAllAiProjects ? aiProjects : aiProjects.slice(0, 2);

  const toggleAll = (expand: boolean) => {
    setIsCybersecurityExpanded(expand);
    setIsAiExpanded(expand);
  };

  return (
    <section id="projects" className="py-12">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        {/* Main Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3 text-xs tracking-wider uppercase border-primary/40 text-primary">
            Course Work Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-chart-4 to-chart-5 bg-clip-text text-transparent font-bold">
            Course Work Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Practical, career-focused coursework projects separated by domain. Explore hands-on security assessments, 
            IT service desk automation, vulnerability scanning, and full-lifecycle AI/ML solutions.
          </p>

          {/* Quick Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleAll(true)}
              className="text-xs hover:border-primary/50"
            >
              Expand All Sections
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleAll(false)}
              className="text-xs hover:border-primary/50"
            >
              Minimize All Sections
            </Button>
            <div className="hidden sm:flex items-center gap-2 pl-2 text-xs text-muted-foreground">
              <span>Quick Jump:</span>
              <a href="#cybersecurity-projects" className="underline hover:text-emerald-500 transition-colors font-medium">
                Cybersecurity (2)
              </a>
              <span>•</span>
              <a href="#ai-projects" className="underline hover:text-primary transition-colors font-medium">
                AI / ML (6)
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 1: CYBERSECURITY COURSE WORK PROJECTS (TOP)           */}
        {/* ============================================================== */}
        <div id="cybersecurity-projects" className="mb-14 scroll-mt-20">
          <Card className="border-2 border-emerald-500/30 dark:border-emerald-500/20 shadow-lg overflow-hidden transition-all duration-300">
            {/* Collapsible Section Header */}
            <div 
              onClick={() => setIsCybersecurityExpanded(!isCybersecurityExpanded)}
              className="p-5 md:p-6 bg-gradient-to-r from-emerald-950/20 via-background to-teal-950/20 border-b border-border/60 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <Shield className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      Cybersecurity Course Work
                    </h3>
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                      2 Projects
                    </Badge>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                    Security risk assessments, vulnerability scanning, IT service desk automation & compliance frameworks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hidden sm:flex items-center gap-1.5 text-xs border-emerald-500/30 hover:bg-emerald-500/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCybersecurityExpanded(!isCybersecurityExpanded);
                  }}
                >
                  {isCybersecurityExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Minimize Section
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Maximize Section
                    </>
                  )}
                </Button>
                <div className="p-2 rounded-lg bg-secondary/60 sm:hidden">
                  {isCybersecurityExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {/* Minimized State Bar */}
            {!isCybersecurityExpanded && (
              <div 
                onClick={() => setIsCybersecurityExpanded(true)}
                className="p-4 bg-muted/20 text-center cursor-pointer hover:bg-muted/40 transition-colors text-sm text-muted-foreground flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Section minimized: <strong>2 Cybersecurity Coursework Projects</strong> (ABC Financial Assessment & AI Service Desk Agent)</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 underline ml-1 font-medium">Click to maximize</span>
              </div>
            )}

            {/* Maximized Content */}
            {isCybersecurityExpanded && (
              <CardContent className="p-5 md:p-8 space-y-10 animate-fadeIn">
                {cybersecurityProjects.map((project, projectIndex) => (
                  <div 
                    key={project.id}
                    className="border border-border/80 rounded-xl p-5 md:p-7 bg-card/60 backdrop-blur-sm shadow-sm space-y-6"
                  >
                    {/* Project Top Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2 flex-1 min-w-[280px]">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                            {project.role}
                          </Badge>
                          <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                            {project.badgeType}
                          </Badge>
                          {project.client && (
                            <Badge variant="secondary" className="text-xs flex items-center gap-1">
                              <Building2 className="w-3 h-3 text-muted-foreground" />
                              Client: {project.client}
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {project.year}
                          </span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                          {project.title}
                        </h4>
                      </div>

                      {/* Demo Link / Code Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.demoUrl && (
                          <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs shadow-sm">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                              View Live Demo
                            </a>
                          </Button>
                        )}
                        {project.codeUrl && (
                          <Button asChild variant="outline" size="sm" className="text-xs">
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5 mr-1.5" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {!project.demoUrl && (
                          <Badge variant="outline" className="text-xs text-muted-foreground py-1.5 px-3">
                            Assessment Report
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Overview Text */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Key Highlights / Metrics */}
                    {project.keyHighlights && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {project.keyHighlights.map((hl, idx) => (
                          <div key={idx} className="bg-secondary/30 p-3 rounded-lg border border-border/50 text-xs">
                            <span className="text-muted-foreground block font-medium mb-1">{hl.label}</span>
                            <span className="font-semibold text-foreground text-xs md:text-sm">{hl.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tools & Frameworks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border/50">
                      <div>
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                          Tools & Technologies:
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tools.map((tool, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-emerald-500" />
                          Frameworks & Standards:
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {project.frameworks.map((fw, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                              {fw}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Specific Project 1 Tasks: "What I Did" Breakdown */}
                    {project.tasks && (
                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h5 className="text-base font-bold text-foreground flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                              What I Did: Assessment Execution Phases
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              Click on any phase to view details on tools, findings, and findings evaluation.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.tasks.map((task) => {
                            const IconComponent = task.icon;
                            const taskId = `${project.id}-task-${task.id}`;
                            const isSelected = activeCyberTask === taskId;
                            return (
                              <div 
                                key={task.id} 
                                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                                  isSelected 
                                    ? "bg-secondary/40 border-emerald-500 shadow-sm ring-1 ring-emerald-500/30" 
                                    : "bg-card/40 border-border/70 hover:border-emerald-500/40 hover:bg-secondary/20"
                                }`}
                                onClick={() => setActiveCyberTask(isSelected ? null : taskId)}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 flex-shrink-0 mt-0.5">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-semibold text-xs md:text-sm text-foreground">
                                        {task.id}. {task.title}
                                      </span>
                                      <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                                        {isSelected ? "Less" : "Details"}
                                      </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                      {task.summary}
                                    </p>
                                    
                                    {isSelected && (
                                      <div className="mt-3 pt-3 border-t border-border/50 text-xs text-foreground/90 bg-background/50 p-3 rounded-lg leading-relaxed animate-fadeIn">
                                        <p>{task.details}</p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Specific Project 2 Steps: "How It Works" Workflow */}
                    {project.steps && (
                      <div className="pt-2">
                        <h5 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-emerald-500" />
                          How It Works: Guided Self-Service & Escalation Workflow
                        </h5>
                        <div className="space-y-2.5">
                          {project.steps.map((step) => (
                            <div key={step.step} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 border border-border/50">
                              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                {step.step}
                              </div>
                              <div className="flex-1 text-xs">
                                <strong className="text-foreground font-semibold block mb-0.5">{step.title}</strong>
                                <span className="text-muted-foreground leading-relaxed">{step.description}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Benefits & Challenges (For Service Desk Agent) */}
                    {(project.benefits || project.challenges) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {project.benefits && (
                          <div className="bg-secondary/20 p-4 rounded-xl border border-border/50">
                            <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                              <CheckCircle className="w-4 h-4" />
                              Key Benefits:
                            </h5>
                            <ul className="space-y-2 text-xs text-muted-foreground">
                              {project.benefits.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.challenges && (
                          <div className="bg-secondary/20 p-4 rounded-xl border border-border/50">
                            <h5 className="text-xs font-semibold uppercase tracking-wider text-chart-4 mb-3 flex items-center gap-1.5">
                              <Lock className="w-4 h-4" />
                              Challenges & Security Controls:
                            </h5>
                            <ul className="space-y-2 text-xs text-muted-foreground">
                              {project.challenges.map((c, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-chart-4 rounded-full mt-1.5 flex-shrink-0" />
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Deliverables */}
                    <div className="p-4 rounded-xl bg-secondary/15 border border-border/60">
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-500" />
                        Deliverables & Documentation:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((del, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs py-1 px-2.5 bg-background border-border/80 text-foreground">
                            ✓ {del}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>
        </div>

        {/* ============================================================== */}
        {/* SECTION 2: AI COURSE WORK PROJECTS (BELOW CYBERSECURITY)       */}
        {/* ============================================================== */}
        <div id="ai-projects" className="scroll-mt-20">
          <Card className="border-2 border-primary/30 shadow-lg overflow-hidden transition-all duration-300">
            {/* Collapsible Section Header */}
            <div 
              onClick={() => setIsAiExpanded(!isAiExpanded)}
              className="p-5 md:p-6 bg-gradient-to-r from-primary/10 via-background to-chart-4/10 border-b border-border/60 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      Artificial Intelligence (AI/ML) Course Work
                    </h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 text-xs font-semibold">
                      6 Projects
                    </Badge>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                    End-to-end generative AI, prompt engineering, predictive modeling, and bias auditing
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hidden sm:flex items-center gap-1.5 text-xs border-primary/30 hover:bg-primary/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAiExpanded(!isAiExpanded);
                  }}
                >
                  {isAiExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Minimize Section
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Maximize Section
                    </>
                  )}
                </Button>
                <div className="p-2 rounded-lg bg-secondary/60 sm:hidden">
                  {isAiExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {/* Minimized State Bar */}
            {!isAiExpanded && (
              <div 
                onClick={() => setIsAiExpanded(true)}
                className="p-4 bg-muted/20 text-center cursor-pointer hover:bg-muted/40 transition-colors text-sm text-muted-foreground flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Section minimized: <strong>6 AI/ML Coursework Projects</strong> (SmartWater SA, Cosmic Quill, AI Resume Builder, etc.)</span>
                <span className="text-xs text-primary underline ml-1 font-medium">Click to maximize</span>
              </div>
            )}

            {/* Maximized Content */}
            {isAiExpanded && (
              <CardContent className="p-5 md:p-8 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {displayedAiProjects.map((project, index) => (
                    <Card key={index} className="h-full flex flex-col animate-slideInUp transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                Week {index + 2}
                              </Badge>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                2024
                              </div>
                            </div>
                            <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col gap-4">
                        {(!project.videoUrl || project.title === "Bias Audit Report") ? (
                          <div className="w-full h-32 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/25 relative overflow-hidden">
                            <img 
                              src={project.imageUrl} 
                              alt={`${project.title} Preview`} 
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        ) : (
                          <div 
                            className="w-full h-32 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/25 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => {
                              window.open(project.videoUrl, '_blank');
                            }}
                          >
                            <img 
                              src={project.imageUrl} 
                              alt={`${project.title} Demo`} 
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white">▶</span>
                              </div>
                            </div>
                          </div>
                        )}

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm mb-2 font-medium">Technologies:</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm mb-2 font-medium">Key Features:</h4>
                            <ul className="space-y-1">
                              {project.features.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                                  <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm mb-2 font-medium">Deliverables:</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.deliverables.map((deliverable, delIndex) => (
                                <Badge key={delIndex} variant="outline" className="text-xs">
                                  {deliverable}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-auto pt-4">
                          <Button asChild variant="outline" size="sm" className="flex-1">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-2" />
                              Demo
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="sm" className="flex-1">
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* AI Section Show More / Less button if toggled */}
                <div className="text-center mt-8">
                  <Button 
                    onClick={() => setShowAllAiProjects(!showAllAiProjects)}
                    variant="outline"
                    size="sm"
                    className="px-6 py-2 hover:scale-105 transition-all duration-300 text-xs"
                  >
                    {showAllAiProjects ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Fewer AI Projects
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        View All 6 AI Projects
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}