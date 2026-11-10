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
  // Minimize/Maximize state for each career section - always minimized by default per user request
  const [isCybersecurityExpanded, setIsCybersecurityExpanded] = useState(false);
  const [isAiExpanded, setIsAiExpanded] = useState(false);
  
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
      scope: "Fictional enterprise with 50 employees, office network, customer database, corporate website, email system, and Wi-Fi network.",
      overview: "I completed a practical security assessment for ABC Financial Services, a fictional company with 50 employees, an office network, a customer database, a website, an email system and a Wi-Fi network. The manager was concerned about cyber threats, so my task was to assess the company’s security risks and overall security posture and recommend improvements.",
      tools: ["Nmap", "Zenmap", "Windows Command Prompt"],
      frameworks: ["POPIA", "ISO/IEC 27001", "NIST Cybersecurity Framework", "CIS Controls"],
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
    <section id="projects" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Technical Portfolio
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight mb-2.5">
            Course Work Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Practical coursework and technical assessments separated by discipline. Explore verified security vulnerability assessments, service desk automation, and full-lifecycle AI/ML applications.
          </p>

          {/* Quick Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={() => toggleAll(true)}
              className="text-xs font-medium px-3 py-1.5 rounded-md bg-white border border-slate-200 text-navy-900 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-2xs"
            >
              Expand All Sections
            </button>
            <button
              onClick={() => toggleAll(false)}
              className="text-xs font-medium px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-2xs"
            >
              Minimize All Sections
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-3 text-xs text-slate-500">
              <span>Jump to:</span>
              <a href="#cybersecurity-projects" className="font-semibold text-teal-700 hover:text-navy-900 hover:underline transition-colors">
                Cybersecurity (2)
              </a>
              <span>·</span>
              <a href="#ai-projects" className="font-semibold text-navy-900 hover:text-teal-700 hover:underline transition-colors">
                AI / ML (6)
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 1: CYBERSECURITY COURSE WORK PROJECTS (TOP)           */}
        {/* ============================================================== */}
        <div id="cybersecurity-projects" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Section Header */}
            <div 
              onClick={() => setIsCybersecurityExpanded(!isCybersecurityExpanded)}
              className="p-5 md:p-6 bg-navy-900 border-b border-navy-800 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-navy-800/90 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-teal-500/10 border border-teal-400/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Shield className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                      Cybersecurity Course Work
                    </h3>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-teal-400/20 text-teal-300 border border-teal-400/30">
                      2 Projects
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 mt-0.5">
                    Security assessments, vulnerability scanning, service desk automation &amp; compliance frameworks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCybersecurityExpanded(!isCybersecurityExpanded);
                  }}
                >
                  {isCybersecurityExpanded ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      Minimize
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" />
                      Maximize
                    </>
                  )}
                </button>
                <div className="p-1.5 rounded-md text-white sm:hidden">
                  {isCybersecurityExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {/* Minimized State Notice */}
            {!isCybersecurityExpanded && (
              <div 
                onClick={() => setIsCybersecurityExpanded(true)}
                className="p-4 bg-slate-50 text-center cursor-pointer hover:bg-slate-100 transition-colors text-xs md:text-sm text-slate-600 flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4 text-teal-600" />
                <span>Cybersecurity section minimized (2 projects: ABC Financial Risk Assessment &amp; AI Service Desk Agent)</span>
                <span className="text-teal-700 font-semibold underline ml-1">Click to maximize</span>
              </div>
            )}

            {/* Maximized Content */}
            {isCybersecurityExpanded && (
              <div className="p-5 md:p-8 space-y-10 animate-slideIn">
                {cybersecurityProjects.map((project, projectIndex) => (
                  <div 
                    key={project.id}
                    className="border border-slate-200/90 rounded-xl p-5 md:p-7 bg-white shadow-xs space-y-6 card-hover-lift hover:border-teal-400 group/proj transition-all duration-300"
                  >
                    {/* Project Top Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="space-y-2 flex-1 min-w-[280px]">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded">
                            {project.role}
                          </span>
                          <span className="text-slate-500 font-medium">·</span>
                          <span className="text-slate-600 font-medium">
                            {project.badgeType}
                          </span>
                          {project.client && (
                            <>
                              <span className="text-slate-400">·</span>
                              <span className="text-slate-600 flex items-center gap-1">
                                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                                {project.client}
                              </span>
                            </>
                          )}
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500">{project.year}</span>
                        </div>
                        <h4 className="text-base md:text-lg font-bold text-navy-900 leading-snug group-hover/proj:text-teal-900 transition-colors">
                          {project.title}
                        </h4>
                      </div>

                      {/* Demo Link / Code Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.demoUrl && (
                          <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 group/btn">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-1.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                              View Live Demo
                            </a>
                          </Button>
                        )}
                        {project.codeUrl && (
                          <Button asChild variant="outline" size="sm" className="text-xs border-slate-300 text-navy-900 hover:bg-slate-50">
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5 mr-1.5 text-navy-900" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {!project.demoUrl && (
                          <span className="text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded">
                            Assessment Report
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Overview Text */}
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Key Highlights / Metrics */}
                    {project.keyHighlights && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {project.keyHighlights.map((hl, idx) => (
                          <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 text-xs">
                            <span className="text-slate-500 block font-medium mb-1">{hl.label}</span>
                            <span className="font-semibold text-navy-900 text-xs md:text-sm">{hl.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tools & Frameworks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-teal-600" />
                          Tools &amp; Environment:
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tools.map((tool, idx) => (
                            <span key={idx} className="text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-teal-600" />
                          Frameworks &amp; Compliance Standards:
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {project.frameworks.map((fw, idx) => (
                            <span key={idx} className="text-xs font-medium bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded">
                              {fw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Specific Project 1 Tasks: "What I Did" Breakdown */}
                    {project.tasks && (
                      <div className="pt-2">
                        <div className="mb-3">
                          <h5 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-teal-600" />
                            What I Did: Assessment Execution Phases
                          </h5>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Click on any phase to review diagnostic methodology, scan results, and mitigation rationale.
                          </p>
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
                                    ? "bg-teal-50/40 border-teal-500 shadow-xs ring-1 ring-teal-500/20" 
                                    : "bg-slate-50/50 border-slate-200 hover:border-teal-400 hover:bg-slate-50"
                                }`}
                                onClick={() => setActiveCyberTask(isSelected ? null : taskId)}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-7 h-7 rounded-md bg-teal-100/70 border border-teal-200 flex items-center justify-center text-teal-700 flex-shrink-0 mt-0.5">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-semibold text-xs md:text-sm text-navy-900">
                                        {task.id}. {task.title}
                                      </span>
                                      <span className="text-[10px] text-teal-700 font-semibold uppercase tracking-wide">
                                        {isSelected ? "Hide" : "Details"}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                      {task.summary}
                                    </p>
                                    
                                    {isSelected && (
                                      <div className="mt-3 pt-3 border-t border-teal-100 text-xs text-slate-700 bg-white p-3 rounded-lg leading-relaxed shadow-2xs">
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
                        <h5 className="text-sm font-bold text-navy-900 mb-3 flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-teal-600" />
                          How It Works: Guided Self-Service &amp; Escalation Workflow
                        </h5>
                        <div className="space-y-2">
                          {project.steps.map((step) => (
                            <div key={step.step} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                              <div className="w-6 h-6 rounded-md bg-navy-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                {step.step}
                              </div>
                              <div className="flex-1 text-xs">
                                <strong className="text-navy-900 font-semibold block mb-0.5">{step.title}</strong>
                                <span className="text-slate-600 leading-relaxed">{step.description}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Benefits & Challenges (For Service Desk Agent) */}
                    {(project.benefits || project.challenges) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        {project.benefits && (
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 flex items-center gap-1.5">
                              <CheckCircle className="w-4 h-4 text-teal-600" />
                              Key Benefits:
                            </h5>
                            <ul className="space-y-2 text-xs text-slate-600">
                              {project.benefits.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 flex-shrink-0" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.challenges && (
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                              <Lock className="w-4 h-4 text-teal-600" />
                              Challenges &amp; Security Controls:
                            </h5>
                            <ul className="space-y-2 text-xs text-slate-600">
                              {project.challenges.map((c, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-1.5 flex-shrink-0" />
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Deliverables */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-teal-600" />
                        Verified Deliverables &amp; Documentation:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((del, idx) => (
                          <span key={idx} className="text-xs font-medium bg-white text-navy-900 border border-slate-200 py-1 px-2.5 rounded shadow-2xs">
                            ✓ {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 2: AI COURSE WORK PROJECTS (BELOW CYBERSECURITY)       */}
        {/* ============================================================== */}
        <div id="ai-projects" className="scroll-mt-20">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Section Header */}
            <div 
              onClick={() => setIsAiExpanded(!isAiExpanded)}
              className="p-5 md:p-6 bg-slate-900 border-b border-slate-800 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-teal-500/10 border border-teal-400/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                      Artificial Intelligence (AI/ML) Course Work
                    </h3>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/20">
                      6 Projects
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 mt-0.5">
                    End-to-end generative AI, prompt engineering, predictive modeling, and bias auditing
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAiExpanded(!isAiExpanded);
                  }}
                >
                  {isAiExpanded ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      Minimize
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" />
                      Maximize
                    </>
                  )}
                </button>
                <div className="p-1.5 rounded-md text-white sm:hidden">
                  {isAiExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {/* Minimized State Notice */}
            {!isAiExpanded && (
              <div 
                onClick={() => setIsAiExpanded(true)}
                className="p-4 bg-slate-50 text-center cursor-pointer hover:bg-slate-100 transition-colors text-xs md:text-sm text-slate-600 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>AI/ML section minimized (6 projects: SmartWater SA, Cosmic Quill, AI Resume Builder, etc.)</span>
                <span className="text-teal-700 font-semibold underline ml-1">Click to maximize</span>
              </div>
            )}

            {/* Maximized Content */}
            {isAiExpanded && (
              <div className="p-5 md:p-8 animate-slideIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displayedAiProjects.map((project, index) => (
                    <Card key={index} className="h-full flex flex-col bg-white border border-slate-200/90 rounded-xl card-hover-lift hover:border-teal-400 overflow-hidden group/aiproj">
                      <CardHeader className="p-5 pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                              <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
                                Week {index + 2}
                              </span>
                              <span>·</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-slate-400" />
                                2024
                              </span>
                            </div>
                            <CardTitle className="text-sm md:text-base font-bold text-navy-900 leading-snug">{project.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-5 pt-0 flex-1 flex flex-col gap-4">
                        <div className="w-full h-32 bg-slate-100 rounded-lg border border-slate-200 relative overflow-hidden">
                          <img 
                            src={project.imageUrl} 
                            alt={`${project.title} Preview`} 
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="space-y-3 pt-1 border-t border-slate-100">
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Technologies:</span>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Key Features:</span>
                            <ul className="space-y-1">
                              {project.features.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-xs text-slate-600 flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Deliverables:</span>
                            <div className="flex flex-wrap gap-1">
                              {project.deliverables.map((deliverable, delIndex) => (
                                <span key={delIndex} className="text-xs bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded">
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
                          <Button asChild variant="outline" size="sm" className="flex-1 text-xs border-slate-300 text-navy-900 hover:bg-slate-50">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
                              Demo
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="sm" className="flex-1 text-xs border-slate-300 text-navy-900 hover:bg-slate-50">
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5 mr-1.5 text-navy-900" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* AI Section Show More / Less button */}
                <div className="text-center mt-8">
                  <Button 
                    onClick={() => setShowAllAiProjects(!showAllAiProjects)}
                    variant="outline"
                    size="sm"
                    className="px-5 py-2 text-xs border-slate-300 text-navy-900 hover:bg-slate-50"
                  >
                    {showAllAiProjects ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5 mr-1.5" />
                        Show Fewer AI Projects
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5 mr-1.5" />
                        View All 6 AI Projects
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}