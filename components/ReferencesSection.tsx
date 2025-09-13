import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Users, Phone, Building2 } from "./icons/LucideIcons";

export function ReferencesSection() {
  const references = [
    {
      name: "Dikeledi Sebiloane",
      title: "Team Leader",
      company: "Department of Home Affairs",
      relationship: "Supervisor",
      phone: "+27 83 870 2682",
     
    },
    {
      name: "Skhulile Dhlamini",
      title: "UI/UX Designer",
      company: "University of Johannesburg",
      relationship: "Project Collaborator",
      phone: "+27 76 722 7814",
     
    }
  ];

  return (
    <section id="references" className="py-12 bg-white/10 backdrop-blur-sm">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-chart-5 to-primary bg-clip-text text-transparent">References</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional and academic references who can speak to my technical abilities, 
            work ethic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-lg leading-tight">{ref.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{ref.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  <Building2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{ref.company}</p>
                </div>

                <Badge variant="secondary" className="w-fit text-xs mt-2">
                  {ref.relationship}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <a 
                    href={`tel:${ref.phone}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {ref.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg border">
          <div className="text-center">
            <h3 className="mb-2">Additional References Available</h3>
            <p className="text-muted-foreground text-sm">
              Additional professional and academic references are available upon request. 
              Please feel free to contact me for more detailed reference information or 
              specific testimonials related to particular projects or skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
