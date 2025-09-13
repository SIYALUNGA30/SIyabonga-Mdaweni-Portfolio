import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Briefcase, Calendar, MapPin } from "./icons/LucideIcons";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Advanced Digital Associate",
      company: "Capaciti",
      location: "Braamfontein,Johannesburg",
      duration: "July 2024 - Present",
      type: "Bootcamp",
      description: "Recently completed intensive 7-week AI/ML engineering bootcamp focusing on practical applications of artificial intelligence. Currently seeking opportunities to apply newly acquired skills in generative AI, machine learning, and responsible AI development.",
      achievements: [
        "Built 6+ AI applications from concept to deployment",
        "Developed expertise in OpenAI API integration and prompt engineering",
        "Created sentiment analysis dashboard with 89% accuracy",
        "Implemented ATS-optimized resume builder with multiple templates",
        "Conducted comprehensive bias audit on ML models",
        "Integrated multiple AI technologies in capstone project"
      ],
      technologies: ["Python", "OpenAI API","Gemini", "Figma", "Hugging Face", "React", "Streamlit", "FastAPI", "AWS"]
    },
    {
      title: "Indexer",
      company: "Department of Home Affairs",
      location: "Silverton, Pretoria",
      duration: "January 2024 - June 2024",
      type: "Contract",
      description: "Entry-level software development role focusing on web application development and database management. Gained foundational experience in full-stack development and collaborative software engineering practices.",
      achievements: [
        "Input data from various sources into databases, spreadsheets, or systems.",
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
            My professional journey and hands-on experience in Indexing and AI/ML Engineering.
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
