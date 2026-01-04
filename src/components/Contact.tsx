import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [isFirstCycle, setIsFirstCycle] = useState(true);

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/244756330.js';
    script.defer = true;
    document.body.appendChild(script);

    // Aggressive function to hide HubSpot branding
    const hideHubSpotBranding = () => {
      const formFrame = document.querySelector('.hs-form-frame');
      if (!formFrame) return;

      // Comprehensive list of selectors
      const selectors = [
        '.hs-powered-by',
        '[data-hs-powered-by]',
        '.hs-powered-by-link',
        'a[href*="hubspot"]',
        'a[href*="HubSpot"]',
        '.hs-form-powered-by',
        '.hs-powered-by-wrapper',
        '.hs-powered-by-container',
        '.hs-powered-by-text',
        '.hs-powered-by-logo',
        'iframe[src*="hubspot"]',
        '.hs-powered-by a',
        '.hs-powered-by span',
        '.hs-powered-by div',
        '.hs-powered-by p',
        'footer',
        '.hs-form-footer',
        '.hs-form-powered-by-wrapper',
        '[class*="powered"]',
        '[class*="hubspot"]',
        '[id*="powered"]',
        '[id*="hubspot"]'
      ];

      // Hide elements by selector
      selectors.forEach(selector => {
        try {
          const elements = formFrame.querySelectorAll(selector);
          elements.forEach(el => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.display = 'none';
            htmlEl.style.visibility = 'hidden';
            htmlEl.style.opacity = '0';
            htmlEl.style.height = '0';
            htmlEl.style.width = '0';
            htmlEl.style.margin = '0';
            htmlEl.style.padding = '0';
            htmlEl.style.overflow = 'hidden';
            htmlEl.style.position = 'absolute';
            htmlEl.style.left = '-9999px';
            htmlEl.style.clip = 'rect(0, 0, 0, 0)';
            htmlEl.setAttribute('hidden', 'true');
          });
        } catch (e) {
          // Ignore invalid selectors
        }
      });

      // Hide elements containing HubSpot-related text
      const allElements = formFrame.querySelectorAll('*');
      allElements.forEach(el => {
        const text = el.textContent?.toLowerCase() || '';
        if (text.includes('powered by') || 
            text.includes('hubspot') ||
            text.includes('powered by hubspot')) {
          const htmlEl = el as HTMLElement;
          // Check if it's not a form input or button
          if (htmlEl.tagName !== 'INPUT' && 
              htmlEl.tagName !== 'BUTTON' && 
              htmlEl.tagName !== 'TEXTAREA' &&
              htmlEl.tagName !== 'SELECT' &&
              !htmlEl.closest('form')) {
            htmlEl.style.display = 'none';
            htmlEl.style.visibility = 'hidden';
            htmlEl.style.opacity = '0';
            htmlEl.style.height = '0';
            htmlEl.style.width = '0';
            htmlEl.style.margin = '0';
            htmlEl.style.padding = '0';
            htmlEl.style.overflow = 'hidden';
            htmlEl.setAttribute('hidden', 'true');
          }
        }
      });

      // Remove elements from DOM if they're still visible
      const poweredByElements = formFrame.querySelectorAll('[class*="powered"], [id*="powered"], [class*="hubspot"], [id*="hubspot"]');
      poweredByElements.forEach(el => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.textContent?.toLowerCase().includes('powered by') ||
            htmlEl.textContent?.toLowerCase().includes('hubspot')) {
          htmlEl.remove();
        }
      });
    };

    // Try to hide branding immediately
    hideHubSpotBranding();
    
    // Use MutationObserver to watch for form changes - more aggressive
    const observer = new MutationObserver(() => {
      hideHubSpotBranding();
    });

    // Observe the entire document body for any changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id', 'style']
    });

    // Also observe the form container specifically
    const formContainer = document.querySelector('.hs-form-frame');
    if (formContainer) {
      observer.observe(formContainer, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'id', 'style']
      });
    }

    // Check very frequently after script loads
    const checkInterval = setInterval(() => {
      hideHubSpotBranding();
    }, 100); // Check every 100ms

    // Keep checking for longer
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 30000); // Check for 30 seconds

    // Also check when script loads
    script.onload = () => {
      setTimeout(hideHubSpotBranding, 100);
      setTimeout(hideHubSpotBranding, 500);
      setTimeout(hideHubSpotBranding, 1000);
      setTimeout(hideHubSpotBranding, 2000);
      setTimeout(hideHubSpotBranding, 5000);
    };

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      observer.disconnect();
      clearInterval(checkInterval);
    };
  }, []);

  // Handle animation speed change after first cycle
  useEffect(() => {
    const stripElement = stripRef.current?.querySelector(`.${isFirstCycle ? 'animate-marquee-fast-then-normal' : 'animate-marquee'}`);
    if (!stripElement) return;

    const handleAnimationEnd = () => {
      if (isFirstCycle) {
        setIsFirstCycle(false);
      }
    };

    stripElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      stripElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isFirstCycle]);

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - CTA */}
          <div>
            <p className="label-overline mb-3 sm:mb-4">Get Started</p>
            <h2 className="heading-section text-foreground mb-4 sm:mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="body-large mb-6 sm:mb-8">
              Whether you have a detailed plan or just an idea, we're here to help. 
              Book a free consultation to explore how AVERIX can support your digital goals.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="break-all">hello@averix.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span>Global: US, UAE, EU, India</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span>Response within 24 hours</span>
              </div>
            </div>

            {/* Rotating Strip */}
            <div className="relative overflow-hidden rounded-lg mb-6 sm:mb-8" style={{ backgroundColor: '#1166A2' }} ref={stripRef}>
              <div className="py-4 sm:py-6">
                <div className={`flex whitespace-nowrap ${isFirstCycle ? 'animate-marquee-fast-then-normal' : 'animate-marquee'}`}>
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-xl font-semibold tracking-wider px-4 sm:px-6 md:px-8 uppercase">
                    {(() => {
                      const content = "Strategy • Technology • Execution • Web Development • MERN Applications • Admin Portals • Lead Generation • Branding • Scalable Digital Systems •";
                      const spacedContent = content.replace(/ • /g, " •          ");
                      const duplicatedContent = `${spacedContent} ${spacedContent} ${spacedContent}`;
                      return duplicatedContent;
                    })()}
                  </span>
                </div>
              </div>
              {/* Gradient fade edges */}
              <div className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, #1166A2, transparent)' }} />
              <div className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10" style={{ background: 'linear-gradient(to left, #1166A2, transparent)' }} />
            </div>

            {/* Image */}
            <div className="mt-6">
              <img 
                src="/right-image.png" 
                alt="Digital workspace" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - HubSpot Form */}
          <div className="bg-card rounded-lg border border-border p-4 sm:p-6 md:p-8">
            <div 
              className="hs-form-frame" 
              data-region="na2" 
              data-form-id="a37e5b7e-90dd-449b-85a0-354e049cbcab" 
              data-portal-id="244756330"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
