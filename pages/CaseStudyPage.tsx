import React, { useEffect } from 'react';
import { allProjects } from '../data/projectsData';
import { WorkflowDiagram } from '../components/WorkflowDiagram';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Shield, 
  Terminal, 
  CheckCircle, 
  AlertCircle, 
  Calendar, 
  Building2, 
  Lock, 
  FileText,
  Sparkles 
} from '../components/icons/LucideIcons';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

interface CaseStudyPageProps {
  projectId: string;
}

export function CaseStudyPage({ projectId }: CaseStudyPageProps) {
  const project = allProjects.find(p => p.id === projectId) || allProjects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const navigateBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'projects';
  };

  const isMasakhane = project.id === 'masakhane-service-desk';
  const isAbcFinancial = project.id === 'abc-financial';

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 md:py-12 border-b border-slate-200">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={navigateBackToProjects}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-600 hover:text-navy-900 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs hover:border-slate-300 transition-all duration-200 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-teal-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Portfolio</span>
            <span>/</span>
            <span className="text-teal-700 font-medium">{project.categoryLabel}</span>
            <span>/</span>
            <span className="text-navy-900 font-semibold truncate max-w-[200px]">{project.title}</span>
          </div>
        </div>

        {/* Case Study Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded">
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
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                {project.year}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 tracking-tight leading-snug">
              {project.title}
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
              {project.fullOverview}
            </p>
          </div>

          {/* Quick Action Links & External Demos */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
            {project.demoUrl && (
              <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  View Live Deployed Application
                </a>
              </Button>
            )}
            {project.codeUrl && (
              <Button asChild variant="outline" size="sm" className="text-xs border-slate-300 text-navy-900 hover:bg-slate-50">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5 mr-1.5 text-navy-900" />
                  View GitHub Source Code
                </a>
              </Button>
            )}
          </div>

          {/* Key Metrics / Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {project.keyHighlights.map((hl, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-0.5">
                  {hl.label}
                </span>
                <span className="text-xs font-semibold text-navy-900 leading-tight block">
                  {hl.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* CASE STUDY 1: AI SERVICE DESK AGENT (MASAKHANE INSURANCE)       */}
        {/* ============================================================== */}
        {isMasakhane && (
          <div className="space-y-10">
            
            {/* The Visual Workflow Architecture Diagram */}
            {project.workflowSteps && (
              <div id="workflow-diagram">
                <WorkflowDiagram steps={project.workflowSteps} />
              </div>
            )}

            {/* How It Works Detailed Breakdown */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-1">
                  Step-by-Step Architecture
                </span>
                <h3 className="text-xl font-bold text-navy-900 tracking-tight">
                  How The AI Service Desk Agent Operates
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mt-1">
                  Structured self-service diagnostics paired with guaranteed human escalation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div className="text-xs md:text-sm text-slate-700 space-y-1">
                    <h4 className="font-bold text-navy-900">Authentication &amp; Access</h4>
                    <p className="text-slate-600">The employee logs into the corporate ticketing system and opens the AI Agent in an authenticated session.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div className="text-xs md:text-sm text-slate-700 space-y-1">
                    <h4 className="font-bold text-navy-900">Incident Triage &amp; Intake</h4>
                    <p className="text-slate-600">The user picks a common problem category or describes their issue in everyday natural language.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div className="text-xs md:text-sm text-slate-700 space-y-1">
                    <h4 className="font-bold text-navy-900">Interactive Guided Troubleshooting</h4>
                    <p className="text-slate-600">The Agent asks clarifying diagnostic questions, then delivers sequential troubleshooting steps one at a time, checking after each whether the issue has been resolved.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <div className="text-xs md:text-sm text-slate-700 space-y-1">
                    <h4 className="font-bold text-navy-900">Automated Ticket Compilation with Full Transcript</h4>
                    <p className="text-slate-600">If the problem persists, the Agent automatically compiles and creates an IT ticket containing the entire diagnostic history, attempted actions, and system error responses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                  <div className="text-xs md:text-sm text-slate-700 space-y-1">
                    <h4 className="font-bold text-navy-900">Priority Scoring &amp; Specialist Routing</h4>
                    <p className="text-slate-600">The system calculates priority and business impact, routing the ticket directly to the qualified IT specialist or tier so technicians can focus on medium, high, and critical incidents.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits & Business Impact vs Technical Challenges Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Business Benefits */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <h4>Key Business &amp; Operational Benefits</h4>
                </div>
                <ul className="space-y-3">
                  {project.benefits?.map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges & Mitigations */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <h4>Engineering Challenges &amp; Security Controls</h4>
                </div>
                <ul className="space-y-3">
                  {project.challenges?.map((chal, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{chal}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Live Interactive CTA Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-navy-800">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-lg font-bold text-white">Experience The Live Service Desk Agent</h4>
                <p className="text-xs md:text-sm text-slate-300">
                  Test interactive troubleshooting scenarios and simulated ticketing handoffs on Vercel.
                </p>
              </div>
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs sm:text-sm px-6 shadow-md flex-shrink-0">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Launch Application
                </a>
              </Button>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* CASE STUDY 2: ABC FINANCIAL SERVICES CYBERSECURITY ASSESSMENT    */}
        {/* ============================================================== */}
        {isAbcFinancial && (
          <div className="space-y-10">
            
            {/* Scope Overview Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                <Shield className="w-5 h-5 text-teal-600" />
                <h3>Enterprise Assessment Scope &amp; Target Environment</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                {project.scope}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded text-center text-xs">
                  <span className="text-[10px] text-slate-400 block uppercase">Workforce</span>
                  <span className="font-bold text-navy-900">50 Employees</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded text-center text-xs">
                  <span className="text-[10px] text-slate-400 block uppercase">Critical Assets</span>
                  <span className="font-bold text-navy-900">DB, LAN &amp; Email</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded text-center text-xs">
                  <span className="text-[10px] text-slate-400 block uppercase">Regulatory</span>
                  <span className="font-bold text-navy-900">POPIA &amp; ISO 27001</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded text-center text-xs">
                  <span className="text-[10px] text-slate-400 block uppercase">Perimeter</span>
                  <span className="font-bold text-navy-900">Wi-Fi &amp; Web Server</span>
                </div>
              </div>
            </div>

            {/* The 6 Assessment Tasks Detailed Breakdown */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-1">
                  Full Technical Execution
                </span>
                <h3 className="text-xl font-bold text-navy-900 tracking-tight">
                  What I Did: Detailed Assessment Phases (Tasks 1 – 6)
                </h3>
              </div>

              <div className="space-y-5">
                {project.tasks?.map((task) => (
                  <div key={task.id} className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/90 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {task.id}
                      </span>
                      <h4 className="font-bold text-navy-900 text-sm md:text-base">
                        Task {task.id}: {task.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8.5">
                      {task.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Misconfiguration Investigation & Remediation Table */}
            {project.misconfigurations && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <Lock className="w-5 h-5 text-teal-600" />
                  <h3>Misconfiguration Investigation &amp; CIS Remediation</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-semibold bg-slate-50">
                        <th className="p-3">System Setting</th>
                        <th className="p-3">Risky Current Configuration</th>
                        <th className="p-3">Recommended Remediation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {project.misconfigurations.map((m, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-navy-900">{m.item}</td>
                          <td className="p-3 text-red-600 font-mono">{m.finding}</td>
                          <td className="p-3 text-slate-700">{m.remediation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Prioritized Countermeasures Roadmap */}
            {project.controlsCountermeasures && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <h3>Prioritized Controls &amp; Countermeasures Roadmap</h3>
                </div>
                <div className="space-y-2.5">
                  {project.controlsCountermeasures.map((cc, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 gap-2 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded text-[11px] whitespace-nowrap">
                          {cc.priority}
                        </span>
                        <span className="font-medium text-slate-800">{cc.control}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono whitespace-nowrap">{cc.framework}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2025 Paraguay Government Breach Threat Analysis */}
            {project.incidentCaseStudy && (
              <div className="bg-navy-950 text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-base">
                  <FileText className="w-5 h-5 text-teal-400" />
                  <h3>Case Study Research: {project.incidentCaseStudy.name}</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {project.incidentCaseStudy.overview}
                </p>
                <div className="p-3 rounded-lg bg-navy-900 border border-navy-800 text-xs text-amber-300">
                  <span className="font-bold block mb-1">Reported Business &amp; National Impact:</span>
                  {project.incidentCaseStudy.impact}
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block">
                    Applied Lessons for ABC Financial Services:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {project.incidentCaseStudy.lessonsApplied.map((lesson, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-navy-900/80 border border-slate-800 text-xs text-slate-300 leading-normal">
                        ✓ {lesson}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ============================================================== */}
        {/* CASE STUDY 3+: AI / ML PROJECTS DETAILS                         */}
        {/* ============================================================== */}
        {!isMasakhane && !isAbcFinancial && (
          <div className="space-y-8">
            {project.features && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <h3>Core System Features &amp; Capabilities</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Verified Deliverables &amp; Artifacts
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((del, idx) => (
                  <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-md bg-slate-100 text-navy-900 border border-slate-200">
                    ✓ {del}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="pt-4 flex justify-center">
          <Button
            onClick={navigateBackToProjects}
            variant="outline"
            className="border-slate-300 text-navy-900 hover:bg-white text-xs md:text-sm font-semibold px-6 py-2.5"
          >
            <ArrowLeft className="w-4 h-4 mr-2 text-teal-600" />
            Back to All Projects on Main Page
          </Button>
        </div>

      </div>
    </div>
  );
}
