import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Shield, 
  Terminal, 
  Sparkles, 
  Building2,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "./icons/LucideIcons";
import { Button } from "./ui/Button";
import { allProjects, ProjectData } from "../data/projectsData";

interface ProjectsSectionProps {
  isSinglePage?: boolean;
}

export function ProjectsSection({ isSinglePage = false }: ProjectsSectionProps) {
  // Minimize/maximize state for career sections on the main page
  const [isCyberExpanded, setIsCyberExpanded] = useState(true);
  const [isAiExpanded, setIsAiExpanded] = useState(false);

  const cyberProjects = allProjects.filter(p => p.category === 'cybersecurity');
  const aiProjects = allProjects.filter(p => p.category === 'ai');

  const navigateToCaseStudy = (projectId: string) => {
    window.location.hash = `/case-study/${projectId}`;
  };

  return (
    <section id="projects" className="py-14 md:py-18 bg-slate-50/70 border-b border-slate-200 scroll-mt-14">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Technical Portfolio
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight mb-2.5">
            Course Work Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Practical coursework and technical assessments separated by discipline. Summaries are presented below; click <span className="font-semibold text-teal-800">"View case study"</span> on any project for full write-ups, workflow diagrams, and technical deliverables.
          </p>

          {/* Quick jump anchor bar */}
          <div className="flex items-center justify-center gap-4 mt-4 text-xs">
            <a 
              href="#cybersecurity-coursework" 
              className="text-teal-800 font-semibold hover:text-navy-900 hover:underline transition-colors flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-teal-600" />
              <span>Cybersecurity Course Work (2)</span>
            </a>
            <span className="text-slate-300">·</span>
            <a 
              href="#ai-coursework" 
              className="text-slate-600 font-semibold hover:text-navy-900 hover:underline transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>AI / ML Course Work (6)</span>
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 1: CYBERSECURITY COURSE WORK PROJECTS (TOP)           */}
        {/* ============================================================== */}
        <div id="cybersecurity-coursework" className="mb-10 scroll-mt-20">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Header Accordion Bar */}
            <div 
              onClick={() => setIsCyberExpanded(!isCyberExpanded)}
              className="p-4 md:p-5 bg-navy-900 border-b border-navy-800 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-navy-800/90 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-400/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Shield className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                      Cybersecurity Course Work
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-400/20 text-teal-300 border border-teal-400/30">
                      2 Projects
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Security assessments, vulnerability scanning, service desk automation &amp; compliance frameworks
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCyberExpanded(!isCyberExpanded);
                }}
              >
                {isCyberExpanded ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>Minimize</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>Maximize</span>
                  </>
                )}
              </button>
            </div>

            {/* Minimized Teaser */}
            {!isCyberExpanded && (
              <div 
                onClick={() => setIsCyberExpanded(true)}
                className="p-3.5 bg-slate-50 text-center cursor-pointer hover:bg-slate-100 transition-colors text-xs text-slate-600 flex items-center justify-center gap-2"
              >
                <Shield className="w-3.5 h-3.5 text-teal-600" />
                <span>Cybersecurity projects minimized (ABC Financial Assessment &amp; Masakhane AI Service Desk Agent)</span>
                <span className="text-teal-700 font-semibold underline ml-1">Click to expand</span>
              </div>
            )}

            {/* Maximized Project Cards */}
            {isCyberExpanded && (
              <div className="p-5 md:p-7 space-y-6 animate-slideIn">
                {cyberProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="border border-slate-200/90 rounded-xl p-5 md:p-6 bg-white shadow-2xs space-y-4 card-hover-lift hover:border-teal-400 transition-all duration-300"
                  >
                    {/* Project Header Info */}
                    <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="space-y-1.5 flex-1 min-w-[280px]">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded text-[11px]">
                            {project.role}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-600 font-medium">
                            {project.badgeType}
                          </span>
                          {project.client && (
                            <>
                              <span className="text-slate-400">·</span>
                              <span className="text-navy-900 font-semibold flex items-center gap-1">
                                <Building2 className="w-3.5 h-3.5 text-teal-600" />
                                {project.client}
                              </span>
                            </>
                          )}
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500">{project.year}</span>
                        </div>

                        <h4 className="text-base md:text-lg font-bold text-navy-900 leading-snug">
                          {project.title}
                        </h4>
                      </div>

                      {/* Primary Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.demoUrl && (
                          <Button asChild size="sm" variant="outline" className="text-xs border-teal-200 text-teal-800 hover:bg-teal-50">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-1 text-teal-600" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          onClick={() => navigateToCaseStudy(project.id)}
                          className="bg-navy-900 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs transition-colors group/cs"
                        >
                          <span>View case study</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-teal-300 group-hover/cs:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    {/* Concise Summary on Main Page */}
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {project.shortSummary}
                    </p>

                    {/* Key Highlights Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {project.keyHighlights.map((hl, idx) => (
                        <div key={idx} className="p-2 rounded bg-slate-50 border border-slate-100 text-[11px]">
                          <span className="text-[10px] text-slate-400 block uppercase font-medium">{hl.label}</span>
                          <span className="font-semibold text-navy-900 block truncate">{hl.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools and Case Study Callout */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="text-[11px] font-bold uppercase text-slate-400 mr-1 flex items-center gap-1">
                          <Terminal className="w-3 h-3 text-teal-600" />
                          Tools:
                        </span>
                        {project.tools.slice(0, 4).map((tool, idx) => (
                          <span key={idx} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="text-[10px] text-slate-400">+{project.tools.length - 4} more</span>
                        )}
                      </div>

                      <button
                        onClick={() => navigateToCaseStudy(project.id)}
                        className="text-xs font-bold text-teal-700 hover:text-navy-900 inline-flex items-center gap-1 cursor-pointer hover:underline"
                      >
                        <span>{project.id === 'masakhane-service-desk' ? 'Inspect full write-up & workflow diagram →' : 'Read full risk assessment write-up →'}</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 2: AI / ML COURSE WORK PROJECTS (BELOW CYBERSECURITY)  */}
        {/* ============================================================== */}
        <div id="ai-coursework" className="scroll-mt-20">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Header Accordion Bar */}
            <div 
              onClick={() => setIsAiExpanded(!isAiExpanded)}
              className="p-4 md:p-5 bg-slate-900 border-b border-slate-800 cursor-pointer flex items-center justify-between gap-4 select-none hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-400/30 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                      Artificial Intelligence (AI/ML) Course Work
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/20">
                      6 Projects
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    End-to-end generative AI, predictive irrigation, bias auditing, and NLP dashboards
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAiExpanded(!isAiExpanded);
                }}
              >
                {isAiExpanded ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>Minimize</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    <span>Maximize</span>
                  </>
                )}
              </button>
            </div>

            {/* Minimized Teaser */}
            {!isAiExpanded && (
              <div 
                onClick={() => setIsAiExpanded(true)}
                className="p-3.5 bg-slate-50 text-center cursor-pointer hover:bg-slate-100 transition-colors text-xs text-slate-600 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>AI/ML projects minimized (SmartWater SA, Cosmic Quill, AI Resume Builder, Bias Audit Report, etc.)</span>
                <span className="text-teal-700 font-semibold underline ml-1">Click to expand</span>
              </div>
            )}

            {/* Maximized Project Cards Grid */}
            {isAiExpanded && (
              <div className="p-5 md:p-7 animate-slideIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {aiProjects.map((project) => (
                    <Card 
                      key={project.id} 
                      className="h-full flex flex-col bg-white border border-slate-200/90 rounded-xl card-hover-lift hover:border-teal-400 overflow-hidden group/aiproj"
                    >
                      <CardHeader className="p-5 pb-2.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                              <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 text-[10px]">
                                {project.badgeType}
                              </span>
                              <span>·</span>
                              <span className="text-slate-400">{project.year}</span>
                            </div>
                            <CardTitle className="text-sm md:text-base font-bold text-navy-900 leading-snug">
                              {project.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-5 pt-0 flex-1 flex flex-col justify-between gap-3">
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {project.shortSummary}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {project.tools.slice(0, 3).map((tool, idx) => (
                            <span key={idx} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                              {tool}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2 pt-3 border-t border-slate-100 mt-auto">
                          {project.demoUrl && (
                            <Button asChild variant="outline" size="sm" className="text-xs flex-1 border-slate-200 text-navy-900 hover:bg-slate-50">
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3 h-3 mr-1 text-teal-600" />
                                Demo
                              </a>
                            </Button>
                          )}
                          <Button 
                            size="sm" 
                            onClick={() => navigateToCaseStudy(project.id)}
                            className="text-xs flex-1 bg-navy-900 hover:bg-teal-700 text-white font-semibold transition-colors"
                          >
                            <span>View case study</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}