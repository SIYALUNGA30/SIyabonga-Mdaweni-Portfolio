import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { GraduationCap, Calendar, MapPin, CheckCircle } from "./icons/LucideIcons";

export function EducationSection() {
  const education = [
    {
      degree: "Diploma in Business Information Technology",
      institution: "University of Johannesburg",
      location: "Auckland Park Bunting Road, Johannesburg",
      duration: "2020 - 2022",
      description: "Combines IT technical systems and business analysis principles. Focuses on network communication, database management, software development, and process optimization to prepare graduates for enterprise IT support and systems analysis.",
      highlights: [
        "Software Development",
        "Business Analysis",
        "Communication Networks",
        "Information Systems",
        "System Software"
      ],
      status: "Graduated"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Education
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Formal tertiary qualification bridging information technology infrastructure with organizational business needs.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
              <CardHeader className="p-6 pb-4 border-b border-slate-100">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700 flex-shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <CardTitle className="text-lg md:text-xl font-bold text-navy-900">
                        {edu.degree}
                      </CardTitle>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 pl-10.5">{edu.institution}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded">
                      {edu.status}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Course Highlights:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {edu.highlights.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 rounded-md bg-slate-50 border border-slate-100 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}