import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Users, Phone, Building2 } from "./icons/LucideIcons";

export function ReferencesSection() {
  const references = [
    {
      name: "Dikeledi Sebiloane",
      title: "Team Leader",
      company: "Department of Home Affairs",
      relationship: "Direct Supervisor",
      phone: "+27 83 870 2682",
    },
    {
      name: "Skhulile Dhlamini",
      title: "UI/UX Designer",
      company: "University of Johannesburg",
      relationship: "Academic Project Collaborator",
      phone: "+27 76 722 7814",
    }
  ];

  return (
    <section id="references" className="py-16 md:py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Professional Endorsements
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 tracking-tight mb-2.5">
            References
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Supervisory and collaborative references who can speak to my work ethic, reliability, and technical aptitude.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <Card key={index} className="bg-white border border-slate-200/90 rounded-xl shadow-xs overflow-hidden card-hover-lift hover:border-teal-400 transition-all duration-300">
              <CardHeader className="p-5 pb-3 border-b border-slate-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700 flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm md:text-base font-bold text-navy-900 leading-snug">{ref.name}</CardTitle>
                    <p className="text-xs text-slate-500 mt-0.5">{ref.title}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                    {ref.relationship}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Building2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{ref.company}</span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <Phone className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <a 
                    href={`tel:${ref.phone}`}
                    className="font-medium text-navy-900 hover:text-teal-700 hover:underline transition-colors"
                  >
                    {ref.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note on Additional References */}
        <div className="mt-8 p-5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
          <h3 className="text-sm font-bold text-navy-900 mb-1">Additional Credentials &amp; Referees Available</h3>
          <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
            Full contact information for additional academic lecturers, project mentors, and certified assessment records are available upon request.
          </p>
        </div>

      </div>
    </section>
  );
}