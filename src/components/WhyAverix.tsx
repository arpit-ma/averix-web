import { CheckCircle } from "lucide-react";

const differentiators = [
  {
    title: "Consulting-First Approach",
    description: "We don't just build — we strategize. Every project starts with understanding your business goals, challenges, and growth trajectory.",
  },
  {
    title: "Long-Term Partnership",
    description: "We're not a one-time vendor. We become your technology partner, supporting you through iterations, scaling, and future needs.",
  },
  {
    title: "Business-Focused Solutions",
    description: "We speak your language, not technical jargon. Our solutions are designed around business outcomes, not just features.",
  },
  {
    title: "Global Standards, Competitive Pricing",
    description: "Quality that meets international standards with pricing that makes sense. We work with clients across the US, UAE, EU, and India.",
  },
  {
    title: "End-to-End Ownership",
    description: "From strategy and design to development and deployment — one team handles everything. No handoffs, no miscommunication.",
  },
  {
    title: "Built for Scale",
    description: "We architect systems that grow with you. What works for 100 users today will work for 10,000 tomorrow.",
  },
];

export function WhyAverix() {
  return (
    <section id="why-averix" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32">
            <p className="label-overline mb-4">Why Choose Us</p>
            <h2 className="heading-section text-foreground mb-6">
              Not a Freelancer. Not a Low-Cost Agency. A Strategic Partner.
            </h2>
            <p className="body-large">
              AVERIX combines the strategic thinking of a consulting firm with 
              the execution capabilities of a technology studio. We don't just 
              deliver projects — we deliver results.
            </p>
          </div>

          {/* Right Column - Differentiators */}
          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
