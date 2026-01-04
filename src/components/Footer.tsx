import { useLocation } from "react-router-dom";

const navigation = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Admin Portals", href: "#admin-portals" },
    { name: "Growth & Branding", href: "#services" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "How We Work", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Get the correct href - if not on home page, prepend "/" to navigate to home first
  const getHref = (href: string) => {
    if (isHomePage) return href;
    return `/${href}`;
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/logo-2.png" alt="AVERIX" className="h-20 w-auto mb-4 ml-[-20px]" />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Consulting-led digital studio. We help businesses design, build, 
              and scale digital systems that drive growth and operational efficiency.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={getHref(item.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={getHref(item.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} AVERIX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
