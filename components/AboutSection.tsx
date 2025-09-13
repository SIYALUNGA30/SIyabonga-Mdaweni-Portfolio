import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

export function AboutSection() {
  const highlights = [
    "Accurate Data Entry",
    "Data Verification & Auditing",
    "8-week intensive AI/ML bootcamp graduate",
    "Hands-on experience with OpenAI API, Hugging Face, and AWS services",
    "Built 6+ practical AI applications from prototype to deployment",
    "Specialized in generative AI, NLP, and responsible AI development",
    "Strong emphasis on ethical AI, bias auditing, and accessibility"
  ];

  return (
    <section id="about" className="py-12 bg-gradient-to-r from-chart-2/10 via-primary/5 to-chart-3/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-chart-2 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center mb-10 animate-slideInUp">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and a passion for technology, 
            I’m committed to delivering reliable IT support solutions that make technology simple and accessible for everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeInLeft">
          <div>
            <h3 className="text-2xl mb-6">Professional Background</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am an enthusiastic IT Support professional and Indexer based in Johannesburg, South Africa, with experience in data capturing systems and a strong foundation in troubleshooting and technical support. I recently completed an intensive 8-week AI/ML engineering bootcamp, gaining skills in generative AI, prompt engineering, and end-to-end solution development.
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My bootcamp journey demonstrates progressive skill building across multiple projects, and I bring a commitment to accuracy, efficiency, and ethical technology development.
            </p>
            
            <h4 className="mb-4">Career Objectives</h4>
            <p className="text-muted-foreground leading-relaxed">
              Seeking an entry-level IT Support role where I can apply my technical knowledge, problem-solving skills, and passion for helping others. I aim to provide reliable technical assistance while continuing to grow in the IT field. Long-term, I am also interested in leveraging my AI/ML background to contribute to innovative technology solutions that create real-world impact.
            </p>
          </div>
          
          <Card className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h4 className="mb-4">Key Highlights</h4>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h5 className="mb-3">Interests & Values</h5>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">Troubleshooting</Badge>
                  <Badge variant="secondary">Accuracy and Precision</Badge>
                  <Badge variant="secondary">Ethical AI</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Continuous Learning</Badge>
                  <Badge variant="secondary">Team Collaboration</Badge>
                  <Badge variant="secondary">Innovation</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
