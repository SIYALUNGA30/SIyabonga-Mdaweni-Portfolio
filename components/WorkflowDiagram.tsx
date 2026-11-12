import React, { useState } from 'react';
import { WorkflowStep } from '../data/projectsData';
import { Shield, CheckCircle, AlertCircle, ArrowRight, Terminal, User, Sparkles, Building2 } from './icons/LucideIcons';

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
}

export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  const [selectedStep, setSelectedStep] = useState<number>(3); // Default to guided troubleshooting

  const activeStepData = steps.find(s => s.step === selectedStep) || steps[0];

  const getActorBadge = (actor: string) => {
    switch (actor) {
      case 'Employee':
        return { bg: 'bg-blue-50 text-blue-700 border-blue-200', icon: User };
      case 'AI Agent':
        return { bg: 'bg-teal-50 text-teal-800 border-teal-200', icon: Sparkles };
      case 'System Engine':
        return { bg: 'bg-purple-50 text-purple-700 border-purple-200', icon: Terminal };
      case 'Human Technician':
        return { bg: 'bg-amber-50 text-amber-800 border-amber-200', icon: Shield };
      default:
        return { bg: 'bg-slate-100 text-slate-700 border-slate-200', icon: User };
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
            <Terminal className="w-4 h-4 text-teal-400" />
            <span>Interactive Operational Architecture</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            AI Service Desk Agent: Operational Workflow Diagram
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-0.5">
            Select any node below to inspect its operational logic, actor responsibility, and automated data handoffs.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            Automated AI Tier
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            Human Tier
          </span>
        </div>
      </div>

      {/* Visual Flow Pipeline (Horizontally scrollable on small screens) */}
      <div className="overflow-x-auto pb-3 pt-1">
        <div className="flex items-center gap-2 md:gap-3 min-w-[760px]">
          {steps.map((s, idx) => {
            const isSelected = s.step === selectedStep;
            const actorStyle = getActorBadge(s.actor);
            const isEscalation = s.actor === 'Human Technician';

            return (
              <React.Fragment key={s.step}>
                <button
                  type="button"
                  onClick={() => setSelectedStep(s.step)}
                  className={`flex-1 text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer relative group ${
                    isSelected
                      ? 'bg-navy-800 border-teal-400 ring-2 ring-teal-400/30 shadow-lg scale-102'
                      : 'bg-navy-950/70 border-slate-800 hover:border-slate-700 hover:bg-navy-900/60'
                  }`}
                >
                  {/* Step Number & Actor Pill */}
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-teal-400 text-navy-950' : 'bg-slate-800 text-slate-300'
                    }`}>
                      0{s.step}
                    </span>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border ${
                      isEscalation ? 'bg-amber-500/10 text-amber-300 border-amber-400/30' : 'bg-teal-500/10 text-teal-300 border-teal-400/30'
                    }`}>
                      {s.actor}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {s.title}
                  </h4>

                  {/* Active Indicator Arrow */}
                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-navy-800 border-b border-r border-teal-400 rotate-45" />
                  )}
                </button>

                {/* Pipeline Arrow Connector */}
                {idx < steps.length - 1 && (
                  <div className="flex-shrink-0 text-slate-600">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Step Deep Dive Card */}
      <div className="bg-navy-950 rounded-xl p-5 md:p-6 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-navy-800">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-400/30 flex items-center justify-center font-mono font-bold text-xs">
              {activeStepData.step}
            </span>
            <div>
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider block">
                Workflow Phase {activeStepData.step} of {steps.length} · {activeStepData.actor}
              </span>
              <h4 className="text-base font-bold text-white">
                {activeStepData.title}
              </h4>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Status: <span className="text-emerald-400 font-bold">VERIFIED PRODUCTION LOGIC</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 space-y-3">
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {activeStepData.description}
            </p>
            <div className="p-3 rounded-lg bg-navy-900 border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1">Phase Outcome:</span>
              {activeStepData.summary}
            </div>
          </div>

          <div className="md:col-span-5 bg-navy-900/90 rounded-lg p-3.5 border border-teal-500/20 font-mono text-[11px] space-y-2 text-slate-300">
            <span className="text-[10px] uppercase font-bold text-teal-400 block tracking-wider">
              Technical Implementation Details:
            </span>
            <p className="text-slate-300 leading-normal text-xs">
              {activeStepData.technicalDetails || "Standardized ITIL Tier validation with automated session state persistence."}
            </p>
            <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-[10px] text-slate-400">
              <span>Security: POPIA Compliant</span>
              <span>Handoff: Frictionless</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
