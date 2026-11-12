export interface ProjectTask {
  id: number;
  title: string;
  summary: string;
  details: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  summary: string;
  description: string;
  actor: 'Employee' | 'AI Agent' | 'System Engine' | 'Human Technician';
  technicalDetails?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: 'cybersecurity' | 'ai';
  categoryLabel: string;
  role: string;
  client?: string;
  badgeType: string;
  year: string;
  shortSummary: string;
  fullOverview: string;
  scope?: string;
  tools: string[];
  frameworks?: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
  keyHighlights: { label: string; value: string }[];
  deliverables: string[];
  // For AI Service Desk Agent
  workflowSteps?: WorkflowStep[];
  benefits?: string[];
  challenges?: string[];
  // For ABC Financial Services
  tasks?: ProjectTask[];
  misconfigurations?: { item: string; finding: string; remediation: string }[];
  controlsCountermeasures?: { priority: string; control: string; framework: string }[];
  incidentCaseStudy?: {
    name: string;
    overview: string;
    impact: string;
    lessonsApplied: string[];
  };
  // For AI Projects
  features?: string[];
}

export const allProjects: ProjectData[] = [
  {
    id: "masakhane-service-desk",
    title: "AI-Powered IT Service Desk Agent",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity & IT Support",
    client: "Masakhane Insurance",
    role: "Junior Cybersecurity & IT Systems Analyst (training project)",
    badgeType: "IT Security & Service Desk Automation",
    year: "2025",
    demoUrl: "https://it-systems-one.vercel.app/",
    shortSummary: "An AI Service Desk Agent embedded in the employee ticketing system. It provides employees with instant, guided troubleshooting and hands off to human technicians when needed, capturing the complete diagnostic history automatically.",
    fullOverview: "Commissioned as an enterprise technical initiative for Masakhane Insurance, this AI Service Desk Agent is embedded directly into the employee ticketing workflow. Its mission is to support the internal IT team—not replace it—by handling high-volume, repetitive Tier-1 troubleshooting requests while ensuring zero employee frustration. When an issue cannot be resolved self-service, the Agent compiles a complete diagnostic trail, determines urgency and impact, and routes a pre-triaged ticket directly to qualified IT specialists.",
    tools: ["AI Agent", "Ticketing System API", "Next.js / React", "Vercel", "Incident Diagnostics Engine", "Knowledge Base"],
    frameworks: ["ITIL Incident Management", "POPIA Data Privacy", "Role-Based Access Control (RBAC)", "Principle of Least Privilege"],
    keyHighlights: [
      { label: "Client Organization", value: "Masakhane Insurance" },
      { label: "Deployment", value: "Live on Vercel" },
      { label: "Routing Engine", value: "Automated Priority & Impact Classification" },
      { label: "Escalation Guarantee", value: "Frictionless Human Technician Handoff" }
    ],
    workflowSteps: [
      {
        step: 1,
        title: "Secure Authentication & Access",
        actor: "Employee",
        summary: "Employee logs into corporate ticketing portal with authenticated session.",
        description: "The employee signs in using corporate SSO or organizational credentials. The embedded AI Agent initializes within an authenticated context complying with the Principle of Least Privilege and POPIA employee privacy safeguards.",
        technicalDetails: "Session token verified; user department, hardware profile, and permission level loaded into agent state."
      },
      {
        step: 2,
        title: "Issue Intake & NLP Parsing",
        actor: "Employee",
        summary: "Employee describes symptoms or picks common incident categories.",
        description: "The user describes their issue in everyday natural language or chooses a standard category (e.g. VPN drop, printer spooler, Outlook credential lock). The Agent parses the core problem using natural language processing.",
        technicalDetails: "Intent classification matches user prompt against sanitized ITIL diagnostic ontology."
      },
      {
        step: 3,
        title: "Guided Sequential Diagnostics",
        actor: "AI Agent",
        summary: "Agent asks diagnostic questions and gives one action at a time.",
        description: "Instead of dumping overwhelming instructions, the Agent asks clarifying diagnostic questions and serves troubleshooting actions sequentially. After each step, it verifies whether the action succeeded before continuing.",
        technicalDetails: "Step-by-step state machine with condition validation (e.g., verifying IP config, DNS cache flush, adapter restart)."
      },
      {
        step: 4,
        title: "Self-Service Resolution Check",
        actor: "System Engine",
        summary: "Verifies if the technical problem is resolved without human intervention.",
        description: "If the troubleshooting actions resolve the problem, the ticket is flagged as resolved self-service. The interaction transcript is logged for knowledge base quality metrics with zero technician labor expended.",
        technicalDetails: "Resolution confirmed by user prompt; SLA time recorded; incident marked as Tier-0 closed."
      },
      {
        step: 5,
        title: "Automated Ticket & History Compilation",
        actor: "AI Agent",
        summary: "Compiles full troubleshooting transcript and attempted fixes into a ticket.",
        description: "If the problem persists, the Agent automatically compiles a comprehensive, structured support ticket containing the full diagnostic transcript, attempted commands, error codes, and hardware telemetry.",
        technicalDetails: "Ticket object JSON generated with timestamped chat history, eliminating repetitive user questioning."
      },
      {
        step: 6,
        title: "Impact Assessment & Specialist Routing",
        actor: "System Engine",
        summary: "Dynamically calculates priority and routes to the right tier.",
        description: "The system evaluates business impact and urgency according to ITIL priority matrices (Low, Medium, High, Critical), assigning the ticket directly to the specialized technician (e.g., Network Admin, L2 Desktop Support, or Security Analyst).",
        technicalDetails: "Matrix calculation: Impact × Urgency = Priority (P1–P4); webhook dispatch to technician queue."
      },
      {
        step: 7,
        title: "Human Escalation & SLA Hand-off",
        actor: "Human Technician",
        summary: "Human technician receives pre-triaged incident with complete context.",
        description: "The human technician opens the pre-triaged ticket with full diagnostic history already completed. They can proceed straight into root-cause remediation without having to ask the employee to re-explain the problem.",
        technicalDetails: "Seamless technician takeover; technician notes synchronized; SLA clock actively tracked."
      }
    ],
    benefits: [
      "Fewer repetitive support requests and significantly reduced employee wait times across all departments",
      "Immediate, 24/7 self-service resolution for common low-complexity IT and network issues",
      "Higher-quality tickets with automated capture of diagnostic logs, error codes, and attempted steps",
      "Accurate priority and impact routing, freeing senior technicians to focus on critical incidents",
      "Scales seamlessly as Masakhane Insurance expands without proportional IT headcount inflation"
    ],
    challenges: [
      "Integration with existing enterprise ticketing systems and organizational user directories",
      "Maintaining an accurate, continuously updated IT knowledge base without stale procedures",
      "Rigorous accuracy testing and validation of AI responses to prevent misconfiguration suggestions",
      "Enforcing strict access controls, data privacy (POPIA), and least-privilege standards across internal data",
      "Ensuring human escalation remains frictionless, transparent, and always available for sensitive issues"
    ],
    deliverables: [
      "Live Deployed Service Desk Application (Hosted on Vercel)",
      "End-to-End Diagnostic & Ticketing State Machine",
      "Automated Incident Priority & Routing Matrix",
      "Security, Access Control & Escalation Architecture Documentation"
    ]
  },
  {
    id: "abc-financial",
    title: "ABC Financial Services: Cybersecurity Risk and Vulnerability Assessment",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity & IT Support",
    client: "ABC Financial Services",
    role: "Junior Cybersecurity Analyst (training project)",
    badgeType: "Vulnerability & Risk Assessment",
    year: "2025",
    shortSummary: "A comprehensive practical security assessment for ABC Financial Services (50 employees). Conducted intense Nmap vulnerability scans identifying open ports (135, 139, 445 SMB, 3306 MySQL), catalogued 6 business risks, analyzed misconfigurations, recommended prioritized countermeasures, and examined the 2025 Paraguay breach.",
    fullOverview: "I completed a practical security assessment for ABC Financial Services, a fictional company with 50 employees, an office network, a customer database, a website, an email system and a Wi-Fi network. The manager was concerned about cyber threats, so my task was to assess the company’s security risks and overall security posture and recommend improvements across infrastructure, policies, and employee awareness.",
    scope: "50 Employees, Internal Office Local Area Network (LAN), Workstation Subnet, Customer Financial Database, Corporate Web Server, Email Server, and Corporate Wi-Fi Network.",
    tools: ["Nmap", "Zenmap", "Windows Command Prompt", "Linux CLI", "Wireshark"],
    frameworks: ["POPIA", "ISO/IEC 27001", "NIST Cybersecurity Framework (CSF)", "CIS Controls"],
    keyHighlights: [
      { label: "Target Scope", value: "50 Employees, LAN, DB, Web, Email & Wi-Fi" },
      { label: "Open Ports Identified", value: "Ports 135, 139, 445 (SMB) & 3306 (MySQL)" },
      { label: "Risks Catalogued", value: "6 Business Risks (Low to Critical Impact)" },
      { label: "Incident Research", value: "2025 Paraguay Breach (7.4M Citizen Records)" }
    ],
    tasks: [
      {
        id: 1,
        title: "Vulnerability Scanning",
        summary: "Intense Nmap scans through Zenmap on an office PC found four open ports (135, 139, 445, 3306).",
        details: "I ran an intense Nmap scan through Zenmap on an office PC, and found four open ports (135, 139, 445 and 3306), including MySQL and SMB services that should be restricted. I then used Nmap from the command line against Nmap’s official test server, scanme.nmap.org, to practise service detection, OS detection and traceroute, and to analyse the results for outdated software and possible false positives."
      },
      {
        id: 2,
        title: "Risk Identification & Rating",
        summary: "Identified six business risks and built a structured risk catalogue rating likelihood and impact.",
        details: "I identified six business risks from weak passwords, unpatched computers, phishing, an open shared folder and exposed services. I built a risk catalogue that rated each risk by likelihood and impact (Low, Medium, High, Critical), and evaluated the business, financial, operational and reputation impact of each."
      },
      {
        id: 3,
        title: "Asset Identification & Threat Analysis",
        summary: "Mapped critical systems and IT infrastructure to threats and potential business risks.",
        details: "I identified critical systems, digital assets and IT infrastructure, then matched vulnerabilities to threats and the risks that could result, establishing an asset-threat-vulnerability matrix."
      },
      {
        id: 4,
        title: "Misconfiguration Investigation",
        summary: "Analysed dangerous settings including open shared folders, disabled firewalls, and weak Wi-Fi.",
        details: "I analysed risky settings, such as a shared folder open to Everyone, an administrator account with no password, a disabled firewall and a weak Wi-Fi password, and explained how each should be configured according to CIS benchmarks."
      },
      {
        id: 5,
        title: "Controls & Countermeasures",
        summary: "Assessed missing controls and recommended prioritized defenses across the CIA triad.",
        details: "I assessed existing and missing controls, then recommended countermeasures in priority order, including multi-factor authentication (MFA), patch management, security awareness training, role-based access control (RBAC), firewall hardening, encrypted data, backups and monitoring."
      },
      {
        id: 6,
        title: "Incident Case Study",
        summary: "Researched the 2025 Paraguay government data breach (7.4M records) to extract preventative controls.",
        details: "I researched the 2025 Paraguay government data breach, in which a government employee’s device infected with infostealer malware led to the theft of about 7.4 million citizen records. I explained the lessons learned and how ABC Financial Services could avoid a similar incident."
      }
    ],
    misconfigurations: [
      {
        item: "Open Shared Network Folder",
        finding: "Folder permissions set to 'Everyone: Read/Write' on local subnet.",
        remediation: "Restrict access to authenticated domain security groups; implement Role-Based Access Control (RBAC) and audit logging."
      },
      {
        item: "Local Administrator Account",
        finding: "Default Administrator account enabled with a blank / no password.",
        remediation: "Enforce complex 16+ character passphrase, rename default administrator, and deploy Local Administrator Password Solution (LAPS)."
      },
      {
        item: "Host-Based Windows Firewall",
        finding: "Firewall disabled across Domain and Private profiles on office PC.",
        remediation: "Enforce Windows Defender Firewall via Group Policy (GPO); block inbound ports 135, 139, 445 from untrusted subnets."
      },
      {
        item: "Corporate Wi-Fi Password",
        finding: "Weak shared pre-shared key (PSK) with no rotation or network isolation.",
        remediation: "Transition corporate devices to WPA3-Enterprise (802.1X with RADIUS/EAP-TLS); isolate guest traffic on separate VLAN."
      }
    ],
    controlsCountermeasures: [
      { priority: "Priority 1 (Immediate)", control: "Enforce Multi-Factor Authentication (MFA) across all email and remote access", framework: "ISO 27001 A.9 / NIST CSF PR.AC-7" },
      { priority: "Priority 2 (Immediate)", control: "Close and restrict ports 135, 139, 445 (SMB) and 3306 (MySQL) to authorized IPs only", framework: "CIS Control 4.1 / NIST CSF PR.PT-4" },
      { priority: "Priority 3 (High)", control: "Establish automated patch management cadence for OS and third-party software", framework: "CIS Control 7.1 / ISO 27001 A.12.6" },
      { priority: "Priority 4 (High)", control: "Enforce Role-Based Access Control (RBAC) and remove 'Everyone' share permissions", framework: "POPIA Sec 19 / NIST CSF PR.AC-4" },
      { priority: "Priority 5 (Medium)", control: "Deploy mandatory phishing awareness simulations and employee security hygiene training", framework: "NIST CSF PR.AT-1 / CIS Control 14.1" },
      { priority: "Priority 6 (Medium)", control: "Implement 3-2-1 immutable backup policy with offline encrypted copies and periodic restore drills", framework: "ISO 27001 A.12.3 / NIST CSF PR.IP-4" }
    ],
    incidentCaseStudy: {
      name: "2025 Paraguay Government Breach Threat Analysis",
      overview: "In 2025, an infostealer malware infection on a government employee workstation compromised administrative credentials, facilitating exfiltration of approximately 7.4 million citizen records.",
      impact: "Catastrophic exposure of national citizen PII, credential harvesting across connected government systems, and acute reputational and regulatory fallout.",
      lessonsApplied: [
        "Endpoint Protection: Implement endpoint detection and response (EDR) to block infostealer binaries and unauthorized script execution.",
        "Principle of Least Privilege: Never allow standard daily browsing on workstations with persistent domain admin rights.",
        "Conditional Access: Enforce device health checks and MFA before permitting internal network or database access.",
        "Data Confidentiality: Encrypt database records at rest (AES-256) so stolen database files cannot be decrypted without KMS access."
      ]
    },
    deliverables: [
      "Vulnerability Scan Report (Nmap/Zenmap Raw & Analyzed Outputs)",
      "Risk Catalogue (Likelihood & Impact Matrix with 6 Business Risks)",
      "System Misconfiguration Remediation Guide (CIS Aligned)",
      "Prioritized Controls & Countermeasures Implementation Roadmap",
      "Paraguay Breach Threat Analysis & Preventative Controls Brief"
    ]
  },
  {
    id: "smartwater-sa",
    title: "SmartWater SA: AI-Driven Precision Irrigation",
    category: "ai",
    categoryLabel: "Artificial Intelligence (AI/ML)",
    role: "AI/ML Solutions Developer",
    badgeType: "Predictive Analytics & IoT",
    year: "2024",
    demoUrl: "https://start-pastel-91876766.figma.site",
    codeUrl: "https://github.com/Nompil/Smart-Irrigation-Scheduler",
    imageUrl: "https://i.imgur.com/GXB9Akf.png",
    shortSummary: "An AI-driven precision irrigation system addressing water scarcity by predicting optimal irrigation timing through IoT soil telemetry and weather APIs.",
    fullOverview: "The AI-Driven Precision Irrigation System is designed to address global water scarcity and agricultural inefficiencies by optimizing irrigation scheduling. Agriculture consumes 70% of global freshwater, with up to 50% wasted due to over-irrigation or poor timing. This solution leverages predictive analytics, IoT soil sensors, and weather APIs to determine optimal irrigation times and amounts.",
    tools: ["OpenWeatherMap API", "Figma", "Obviously.ai", "Classification AI", "IoT Telemetry"],
    keyHighlights: [
      { label: "Target Problem", value: "Agricultural Water Waste (Up to 50%)" },
      { label: "Data Inputs", value: "IoT Soil Moisture + OpenWeatherMap API" },
      { label: "Methodology", value: "Machine Learning Classification Model" },
      { label: "Prototype", value: "Interactive Farmer-Centric Dashboard" }
    ],
    features: [
      "AI-Powered Predictive Analytics based on historical weather patterns",
      "Real-Time Data Integration connecting soil sensors with live precipitation forecasts",
      "Farmer-Centric Dashboard with clear visual water conservation metrics",
      "Basic error handling and fallback modes during sensor offline events",
      "Interactive User Touchpoints tailored for low-bandwidth rural connectivity"
    ],
    deliverables: ["Interactive Prototype (Figma)", "Demonstration Video", "Ethical & Environmental Impact Analysis Document"]
  },
  {
    id: "cosmic-quill",
    title: "Cosmic Quill: AI Creative Writing Platform",
    category: "ai",
    categoryLabel: "Artificial Intelligence (AI/ML)",
    role: "Frontend & AI Systems Developer",
    badgeType: "Generative AI & LLM Systems",
    year: "2024",
    demoUrl: "https://apron-swarm-24108016.figma.site",
    codeUrl: "https://github.com/SIYALUNGA30/project-2",
    imageUrl: "https://image2url.com/images/1757509397687-e0ae63ca-22d1-4f8a-8b81-8db4de9df35b.png",
    shortSummary: "A creative writing web application utilizing Google Gemini API for real-time text generation, voice narration, and story ideation.",
    fullOverview: "Cosmic Quill is a creative writing platform prototyped in Figma and implemented as a single-page React application with Tailwind CSS. It leverages Google Gemini 1.5 Flash API for real-time text generation, text-to-speech narration, and image-based prompts, while Supabase handles authentication, storage, and real-time collaboration. Designed for storytellers, students, and creative teams, it offers an accessible, scalable, and immersive experience.",
    tools: ["Google Gemini API", "Prompt Engineering", "Python", "React", "Supabase", "Figma"],
    keyHighlights: [
      { label: "AI Engine", value: "Google Gemini 1.5 Flash API" },
      { label: "Features", value: "Text-to-Speech + Image-based Prompts" },
      { label: "Storage", value: "Supabase Real-time Cloud Database" },
      { label: "Interface", value: "Custom Tailored Single-Page Application" }
    ],
    features: [
      "5+ optimized prompt templates for different literary and editorial scenarios",
      "User interface with 3+ customization parameters (tone, length, genre)",
      "Story versioning, auto-saving, and rich text export functionality",
      "Performance tracking for generation latency and token usage",
      "Input validation and safety filtering mechanisms against harmful prompts"
    ],
    deliverables: ["Functional Generation Web App", "Curated Prompt Library", "System Architecture & Technical Documentation"]
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder: ATS-Optimized Generator",
    category: "ai",
    categoryLabel: "Artificial Intelligence (AI/ML)",
    role: "Full-Stack Developer",
    badgeType: "NLP & Document Engineering",
    year: "2024",
    demoUrl: "https://masikhule-solutions.github.io/ai-resume-builder/",
    codeUrl: "https://github.com/Mphefemulo/Masikhule.git",
    imageUrl: "https://i.imgur.com/Jgn0VfE.png",
    shortSummary: "An intelligent resume generation web application creating ATS-compliant resumes with keyword optimization and PDF generation.",
    fullOverview: "Developed an intelligent resume generation system creating customized, ATS-friendly resumes. Features industry-specific keyword optimization, multiple template options, job description matching analysis, and local browser-based privacy storage.",
    tools: ["React", "Node.js", "OpenAI API", "Tailwind CSS", "PDF-lib"],
    keyHighlights: [
      { label: "ATS Optimization", value: "Automated Keyword & Formatting Parser" },
      { label: "Output", value: "Dynamic Client-Side PDF Generation" },
      { label: "Privacy", value: "Zero-Knowledge Local Storage Option" }
    ],
    features: [
      "Targeted content generation tailored from raw career history",
      "Industry-specific keyword optimization based on target job postings",
      "ATS compatibility scoring and formatting verification",
      "3+ distinct visual templates with typography adjustments",
      "Job description semantic matching score"
    ],
    deliverables: ["Deployed Web Application", "User Guide & Template Manual", "Technical Architecture Report"]
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis Dashboard",
    category: "ai",
    categoryLabel: "Artificial Intelligence (AI/ML)",
    role: "Data & NLP Analyst",
    badgeType: "Text Analytics & NLP",
    year: "2024",
    demoUrl: "https://skelletor147.github.io/sentimental-analysis/",
    codeUrl: "https://github.com/skelletor147/sentimental-analysis-dashboard",
    imageUrl: "https://image2url.com/images/1757509568863-3aa1f716-66cd-43b9-8a3e-a1b1f4df6f50.png",
    shortSummary: "A modern web dashboard transforming unstructured textual feedback into actionable emotional insights using Gemini API and interactive charts.",
    fullOverview: "The Sentiment Analysis Dashboard is a modern web application that transforms unstructured text into actionable insights using Google’s Gemini API. It supports sentiment classification, keyword extraction, confidence scoring, and explainability, helping businesses, researchers, and individuals uncover emotional and thematic trends with exportable data visualizations.",
    tools: ["Python", "Gemini API", "Streamlit", "Plotly", "Pandas"],
    keyHighlights: [
      { label: "NLP Engine", value: "Google Gemini Text Classification" },
      { label: "Visualizations", value: "Interactive Plotly Distribution Charts" },
      { label: "Export", value: "CSV, JSON & PDF Analytical Reports" }
    ],
    features: [
      "Direct entry or multi-file CSV text upload",
      "Multi-class sentiment classification (Positive, Neutral, Negative, Mixed)",
      "Confidence scoring with explainability tags",
      "Semantic keyword extraction highlighting sentiment drivers",
      "Interactive data breakdown visualizations"
    ],
    deliverables: ["GitHub Source Code", "Deployed Cloud Dashboard", "Model Accuracy & Calibration Report"]
  },
  {
    id: "bias-audit-report",
    title: "Algorithmic Bias Audit: South African Hiring Models",
    category: "ai",
    categoryLabel: "Artificial Intelligence (AI/ML)",
    role: "AI Ethics & Fairness Auditor",
    badgeType: "Algorithmic Fairness & Ethics",
    year: "2024",
    demoUrl: "https://nompil.github.io/Bias-Audit-Report-SA/",
    codeUrl: "https://github.com/Nompil/Bias-Audit-Report-SA.git",
    imageUrl: "https://image2url.com/images/1757510495701-638eb905-cad4-4fa1-b066-6da33c336cbb.jpg",
    shortSummary: "An empirical audit evaluating demographic bias in automated recruitment algorithms under the South African Employment Equity Act.",
    fullOverview: "This bias audit evaluates AI hiring models in South Africa, demonstrating how unmitigated training data creates systemic disparities (predicting 16% lower employment for women and 25% for non-Whites). The report establishes ethical deployment protocols, fair reweighting algorithms, and alignment with the Employment Equity Act and Broad-Based Black Economic Empowerment (B-BBEE) policies.",
    tools: ["Python", "IBM AI Fairness 360", "Jupyter", "Statistical Analysis"],
    keyHighlights: [
      { label: "Disparity Uncovered", value: "16% Lower for Women, 25% for Non-Whites (p<0.05)" },
      { label: "Regulatory Lens", value: "SA Employment Equity Act & B-BBEE" },
      { label: "Remediation", value: "Adversarial Debiasing & Reweighting" }
    ],
    features: [
      "Empirical demographic parity and equal opportunity metrics evaluation",
      "Performance comparison before and after algorithmic mitigation",
      "Compliance mapping against national labor legislation",
      "Transparent reporting guidelines and audit protocols for HR tech"
    ],
    deliverables: ["Jupyter Analysis Notebook", "AI Ethics Executive Presentation", "Remediation & Governance Framework"]
  },
  {
    id: "ai-study-buddy",
    title: "AI Study Buddy: Personalized Learning Companion",
    category: "ai",
    categoryLabel: "Artificial Intelligence (AI/ML)",
    role: "Web & AI Developer",
    badgeType: "EdTech & Interactive AI",
    year: "2024",
    shortSummary: "A lightweight browser tutor that summarizes study materials, answers questions, and generates interactive quizzes with local data privacy.",
    fullOverview: "The AI Study Buddy is a lightweight web application that acts as a personalized interactive tutor. It enhances student learning by answering complex questions, summarizing textbook material into key concepts, generating multi-format quizzes, and creating memory flashcards. The app runs directly in the browser and saves all progress locally.",
    tools: ["JavaScript", "HTML", "Gemini API", "CSS", "Local Storage"],
    keyHighlights: [
      { label: "Core Functions", value: "Question Answering, Summaries, Quizzes" },
      { label: "Privacy", value: "100% Client-Side Local Storage" },
      { label: "Accessibility", value: "Lightweight Zero-Install Browser Web App" }
    ],
    features: [
      "Instant concept summarization from pasted notes",
      "Automatic multiple-choice and flashcard generation",
      "Interactive quiz mode with immediate feedback and explanation",
      "Offline-first session saving via browser local storage"
    ],
    deliverables: ["Interactive Web Application", "Curated Study Prompts Guide", "Architecture Specification"]
  }
];
