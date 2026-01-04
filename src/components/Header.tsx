import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Admin Portals", href: "#admin-portals" },
  { name: "Why Averix", href: "#why-averix" },
  { name: "How We Work", href: "#process" },
  { name: "About", href: "#about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Get the correct href - if not on home page, prepend "/" to navigate to home first
  const getHref = (href: string) => {
    if (isHomePage) return href;
    return `/${href}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo1.png" alt="AVERIX" className="h-16 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={getHref(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a href={getHref("#contact")}>
            <Button variant="navCta" size="sm">
              Book a Free Consultation
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="section-container py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={getHref(item.href)}
                className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href={getHref("#contact")} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="hero" className="w-full mt-4">
                Book a Free Consultation
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
