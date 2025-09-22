import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { GraduationCap, Calendar, MapPin } from "./icons/LucideIcons";

export function EducationSection() {
  const education = [
    {
      degree: "Diploma in Business Information Technology",
      institution: "University of Johannesburg",
      location: "Auckland Park Bunting Road",
      duration: "2020 - 2022",
      description: "Combines IT and business skills, focusing on systems, data management, and process optimizatio. Prepares students for IT support, business analysis, and systems development through practical projects.  Prepares students for IT support, business analysis, and systems development through practical projects. Equips graduates with problem-solving and technical expertise for modern business challenges.",
      highlights: [
        { name: "Software Development", url: null },
        { name: "Business Analysis", url: null },
        { name: "Information Systems", url: null },
        { name: "Communication Networks", url: null },
        { name: "System Software", url: null }
      ],
      status: "Graduated"
    }
  ];

  return (
    <section id="education" className="py-12 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-chart-2 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center mb-10 animate-slideInUp">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional development in artificial intelligence and Business IT.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="border-l-4 border-l-primary hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>
                      {edu.status}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div>
                  <h4 className="mb-3 text-sm">Key Courses & Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      highlight.url ? (
                        <a key={idx} href={highlight.url} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-all duration-200 hover:-translate-y-1">
                          <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-chart-2 hover:text-primary-foreground shadow-sm hover:shadow-lg transition-all duration-200">
                            {highlight.name}
                          </Badge>
                        </a>
                      ) : (
                        <Badge key={idx} variant="secondary" className="text-xs hover:bg-primary/10 transition-colors">
                          {highlight.name}
                        </Badge>
                      )
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