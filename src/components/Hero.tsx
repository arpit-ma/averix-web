import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const heroTitles = [
  "We Design, Build & Scale Digital Systems That Power Business Growth",
  "Strategy-Led Digital Systems Built to Scale Your Business",
  "From Strategy to Execution — We Build Digital Systems That Work",
  "Engineering Scalable Digital Foundations for Modern Businesses",
  "Building Intelligent Digital Systems for Sustainable Growth"
];

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  rotation: number;
  delay: number;
}

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const sparkleIdRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % heroTitles.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Only enable sparkle effect on desktop (not mobile)
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create multiple sparkles for cluster effect
      const sparkleCount = Math.random() * 2 + 2; // 2-4 sparkles
      for (let i = 0; i < sparkleCount; i++) {
        const offsetX = (Math.random() - 0.5) * 80;
        const offsetY = (Math.random() - 0.5) * 80;
        const newSparkle: Sparkle = {
          id: sparkleIdRef.current++,
          x: x + offsetX,
          y: y + offsetY,
          size: Math.random() * 20 + 12, // 12-32px (bigger hexagons)
          opacity: 1,
          duration: Math.random() * 400 + 300, // 300-700ms
          rotation: Math.random() * 360,
          delay: Math.random() * 50,
        };

        setSparkles((prev) => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
        }, newSparkle.duration + newSparkle.delay);
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-primary overflow-hidden">
      {/* Sparkle cursor effect - hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute"
            style={{
              left: `${sparkle.x}px`,
              top: `${sparkle.y}px`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              transform: `translate(-50%, -50%)`,
              animation: `sparkleFade ${sparkle.duration}ms ease-out ${sparkle.delay}ms forwards`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `rotate(${sparkle.rotation}deg)`,
                animation: `sparkleRotate ${sparkle.duration}ms linear ${sparkle.delay}ms forwards`,
              }}
            >
              {/* Hexagon sparkle */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                  background: 'rgba(255, 255, 255, 0.6)',
                  boxShadow: `
                    0 0 ${sparkle.size * 1.5}px rgba(255, 255, 255, 0.4),
                    0 0 ${sparkle.size * 3}px rgba(255, 255, 255, 0.3),
                    0 0 ${sparkle.size * 4.5}px rgba(255, 255, 255, 0.2),
                    0 0 ${sparkle.size * 6}px rgba(255, 255, 255, 0.1)
                  `,
                }}
              />
              {/* Inner hexagon for depth */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(0.6)',
                  filter: `blur(${sparkle.size * 0.1}px)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--gold) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--gold) / 0.2) 0%, transparent 50%)`
        }} />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-24 pb-8 sm:pb-0">
        <div className="max-w-6xl">
          {/* Overline */}
          <p className="label-overline mb-3 sm:mb-6 animate-fade-in text-xs sm:text-xs">
            Consulting & Technology Partner
          </p>

          {/* Main Headline with rotating titles */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-primary-foreground mb-3 sm:mb-6 leading-tight sm:leading-normal animate-fade-in-up">
            <span 
              className={`inline-block transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {heroTitles[currentTitleIndex]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-lg lg:text-xl text-primary-foreground/80 max-w-4xl mb-5 sm:mb-10 leading-relaxed animate-fade-in-delay">
            AVERIX is a consulting-led digital studio that partners with businesses 
            to create custom web applications, admin portals, and growth systems — 
            built for efficiency and scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay mb-6 sm:mb-0">
            <Button 
              variant="gold" 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
              onClick={() => setDialogOpen(true)}
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <a href="#services" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 border-2 border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:border-primary-foreground/60"
              >
                Explore Our Services
              </Button>
            </a>
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

          {/* Trust indicators */}
          <div className="mt-6 sm:mt-16 pt-4 sm:pt-8 border-t border-primary-foreground/10">
            <p className="text-xs sm:text-sm text-primary-foreground/60 mb-2.5 sm:mb-4">Trusted by businesses across</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-8 text-base sm:text-base text-primary-foreground/80 font-medium">
              <span>🇺🇸 United States</span>
              <span>🇦🇪 UAE</span>
              <span>🇪🇺 Europe</span>
              <span>🇮🇳 India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
