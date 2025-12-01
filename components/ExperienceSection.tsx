import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Briefcase, Calendar, MapPin } from "./icons/LucideIcons";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Digital Associate",
      company: "Capaciti",
      location: "Braamfontein, Johannesburg",
      duration: "July 2025 - Present",
      type: "Bootcamp & Certification",
      description: "Engaged in comprehensive training covering AI/ML Engineering and IT Support fundamentals, focusing on practical application and collaborative problem-solving.",
      achievements: [
        "AI/ML Engineering Bootcamp (2 months): Built chatbots and applied AI solutions to simplify tasks.",
        "Collaborated on group projects to design and implement systems.",
        "Google IT Support Professional Certificate: Gained hands-on experience in troubleshooting, IT infrastructure, and ticketing systems.",
        "Developed skills in Bits and Bytes, network fundamentals, and customer support.",
        "Group Projects: Worked with teams to design, implement, and troubleshoot systems.",
        "Applied problem-solving skills to resolve daily technical challenges."
      ],
      technologies: ["Python", "OpenAI API", "IT Support", "Networking", "Troubleshooting", "System Design", "Customer Support"]
    },
    {
      title: "Indexer",
      company: "Department of Home Affairs",
      location: "Silverton, Pretoria",
      duration: "January 2024 - June 2025",
      type: "Contract",
      description: "I contributed to a digitization project where I was responsible for capturing information from physical records and accurately entering it into the company’s indexing system. This work ensured that documents were properly organized, easily searchable, and accessible for future reference, supporting the company’s transition from manual record-keeping to a streamlined digital environment.",
      achievements: [
        "Input data from various sources into systems.",
        "Verify accuracy of data and correct errors or inconsistencies.",
        "Maintain up-to-date and organized records.",
        "Scan and identify relevant information from documents and reports.",
        "Ensure timely and efficient data entry to meet deadlines.",
        "Handle sensitive information with confidentiality and care.",
        "Support other departments with data-related tasks when needed"
      ],
     technologies: []
    },
   
  ];

  return (
    <section id="experience" className="py-12">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text text-transparent">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and hands-on experience in Indexing, IT Support, and AI/ML Engineering.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant="outline">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="mb-3 text-sm">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4 className="mb-3 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}