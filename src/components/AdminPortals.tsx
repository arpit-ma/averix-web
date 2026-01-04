import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  BarChart3, 
  FileText, 
  Settings, 
  Upload, 
  ArrowRight 
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const features = [
  {
    icon: Shield,
    title: "Secure, Role-Based Access",
    description: "Control who sees what. Assign roles like Admin, Manager, or Viewer with granular permissions.",
  },
  {
    icon: Users,
    title: "User & Team Management",
    description: "Easily add, remove, and manage team members. Track activity and maintain accountability.",
  },
  {
    icon: BarChart3,
    title: "Data Dashboards & Reporting",
    description: "Real-time insights and visual reports. Export data, track KPIs, and make informed decisions.",
  },
  {
    icon: FileText,
    title: "Forms, Assessments & Submissions",
    description: "Create custom forms, collect submissions, and manage data workflows — all in one place.",
  },
  {
    icon: Settings,
    title: "CRM & Lead Management",
    description: "Track leads, manage pipelines, and automate follow-ups to convert more prospects.",
  },
  {
    icon: Upload,
    title: "File Uploads & Automation",
    description: "Handle documents, images, and exports. Automate repetitive tasks to save time.",
  },
];

export function AdminPortals() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="admin-portals" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="label-overline mb-4">Core Expertise</p>
          <h2 className="heading-section text-foreground mb-6">
            Custom Admin Portals Built for Your Business
          </h2>
          <p className="body-large mb-8">
            Every business has unique internal processes. Off-the-shelf tools force 
            you to adapt. We build admin systems that adapt to you — giving you 
            complete control over your operations, data, and team.
          </p>
          <p className="body-base">
            Whether you need a client portal, internal dashboard, or a complete 
            business management system, we design and develop solutions that 
            streamline your workflows and scale with your growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-card rounded-lg border border-border hover:border-accent hover:border-2 transition-all duration-300 hover:shadow-card"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent mb-4">
                <feature.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="bg-primary rounded-lg p-8 md:p-12 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/wave.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/70 rounded-lg"></div>
          
          <div className="max-w-2xl relative z-10">
            <h3 className="heading-subsection text-primary-foreground mb-4">
              Need a Custom Admin System?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Tell us about your business operations and we'll design an admin portal 
              that fits your exact requirements — no compromises.
            </p>
            <Button variant="gold" size="lg" onClick={() => setDialogOpen(true)}>
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Get in Touch</DialogTitle>
              <DialogDescription>
                Please send us a message
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Close
              </Button>
              <Button 
                variant="gold" 
                onClick={() => {
                  setDialogOpen(false);
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Go to Contact Form
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
