const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business, goals, and challenges. Through structured discovery sessions, we define scope, priorities, and success metrics.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description: "Our team designs the user experience and system architecture. You'll see wireframes and prototypes before any code is written.",
  },
  {
    number: "03",
    title: "Development & Iteration",
    description: "We build in sprints, delivering working features regularly. You stay involved through demos and feedback loops.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We handle deployment, quality assurance, and go-live. Post-launch, we provide ongoing support and enhancements as your business evolves.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-primary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="label-overline mb-4">Our Process</p>
          <h2 className="heading-section text-primary-foreground mb-6">
            How We Work Together
          </h2>
          <p className="text-lg text-primary-foreground/80">
            A clear, collaborative process that keeps you informed 
            and ensures we deliver exactly what your business needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="relative z-10">
                {/* Step number with ripple effect */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                  {/* Ripple circles */}
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-accent animate-ripple"
                    style={{
                      animationDelay: `${index * 2}s`,
                      animationFillMode: 'forwards',
                    }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-accent animate-ripple"
                    style={{
                      animationDelay: `${index * 2 + 0.15}s`,
                      animationFillMode: 'forwards',
                    }}
                  />
                  {/* Icon circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-xl z-10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
