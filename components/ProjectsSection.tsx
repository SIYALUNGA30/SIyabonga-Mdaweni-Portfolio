import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { ExternalLink, Github, Calendar, ChevronDown, ChevronUp } from "./icons/LucideIcons";
import { Button } from "./ui/Button";

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const projects = [
    {
      title: "SmartWater SA ",
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
      videoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/nompilo_mchunu_capaciti_org_za/EflDHNdxG3pFpXbcGy5HNsUBF1m3waGavsOKiOYIAvEHUA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=l0YgU0",
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
      videoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/siyabonga_mdaweni_capaciti_org_za/EcM5cgiDcABJka6w3p_A-rkBga_lcnFLdvR603YbTSe-hg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=DOkbfA",
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
      videoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/siyabonga_mdaweni_capaciti_org_za/EeQ3jqUjgXFJiJqbBl0u5HUB-GbVeOjoGqGw8Fb7RzaRJQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=SOidsO",
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
      videoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/nompilo_mchunu_capaciti_org_za/ER6MRuRR339IpXuNfkpZ6SsBhCfdUm9HWVTCEbyP5-8isQ?e=LSSZf8",
      demoUrl: "https://skelletor147.github.io/sentimental-analysis/",
      codeUrl: "https://github.com/skelletor147/sentimental-analysis-dashboard"
    },
    {
      title: "Bias Audit Report",
      description: "he bias audit shows AI hiring models in South Africa may worsen inequality, predicting 16% lower employment for women and 25% for non-Whites (p<0.05). Ethical deployment requires fair data curation, reweighting, and transparent reporting, even at slight accuracy costs. The report calls for compliance with the Employment Equity Act and BEE goals, advocating diverse teams, regular audits, and skills-based features.",
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
      videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_6",
      demoUrl: "https://ai-study-buddy-701021958461.us-west1.run.app/",
      codeUrl: "https://github.com/Nompil/ai-study-buddy"
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);
  const remainingCount = projects.length - 2;

  return (
    <section id="projects" className="py-12">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-chart-4 to-chart-5 bg-clip-text text-transparent">Bootcamp Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Progressive skill development through 6 comprehensive projects spanning the full 
            AI/ML development lifecycle, from foundational concepts to advanced implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col animate-slideInUp">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        Week {index + 2}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        2025
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col gap-4">
                {project.title === "Bias Audit Report" ? (
                  <div className="w-full h-32 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/25 relative overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} Report`} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="w-full h-32 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/25 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                       onClick={() => {
                         if (project.videoUrl) {
                           window.open(project.videoUrl, '_blank');
                         }
                       }}>
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
                    <h4 className="text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm mb-2">Key Features:</h4>
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
                    <h4 className="text-sm mb-2">Deliverables:</h4>
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

        <div className="text-center mt-8">
          <Button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            variant="outline"
            size="lg"
            className="px-8 py-3 hover:scale-105 transition-all duration-300"
          >
            {showAllProjects ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less Projects
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View {remainingCount} More Projects
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
