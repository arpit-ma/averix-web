import { Code, LayoutDashboard, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web & Product Development",
    description: "Custom-built digital products designed for performance, scalability, and business impact.",
    features: [
      "Business & corporate websites",
      "MERN stack web applications",
      "Performance-optimized static sites",
      "Landing pages & conversion funnels",
      "Custom analytics dashboards",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Admin Portals & Business Systems",
    description: "Secure, powerful internal tools that streamline operations and give you complete control.",
    features: [
      "Role-based admin portals",
      "User & access management",
      "Data dashboards & reporting",
      "CRM & lead management",
      "Workflow automation",
    ],
    highlighted: true,
  },
  {
    icon: TrendingUp,
    title: "Growth & Brand Presence",
    description: "Strategic digital presence and lead generation systems that attract and convert.",
    features: [
      "Lead generation websites",
      "AI-assisted outreach workflows",
      "Social media management",
      "Branding & visual identity",
      "Email & CRM integrations",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="label-overline mb-4">What We Do</p>
          <h2 className="heading-section text-foreground mb-6">
            End-to-End Digital Solutions
          </h2>
          <p className="body-large">
            From strategy to execution, we deliver complete digital systems 
            that solve real business problems and create measurable value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative p-8 rounded-lg border transition-all duration-300 hover:shadow-elevated ${
                service.highlighted
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${
                service.highlighted 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-secondary text-foreground"
              }`}>
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className={`heading-subsection mb-3 ${
                service.highlighted ? "text-primary-foreground" : "text-foreground"
              }`}>
                {service.title}
              </h3>
              <p className={`body-base mb-6 ${
                service.highlighted ? "text-primary-foreground/80" : ""
              }`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center text-sm ${
                      service.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 ${
                      service.highlighted ? "bg-accent" : "bg-accent"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
