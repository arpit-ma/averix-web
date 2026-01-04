import { useEffect, useRef, useState } from "react";

export function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1;
    }
  }, []);

  // Check if video container is already visible on mount (for hash navigation)
  useEffect(() => {
    const checkVisibility = () => {
      if (videoContainerRef.current && videoRef.current) {
        const rect = videoContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        
        if (isInView && videoRef.current.paused) {
          videoRef.current.play().catch((error) => {
            console.log("Video play failed on mount:", error);
          });
        }
      }
    };

    // Check immediately and after a short delay (for hash navigation)
    checkVisibility();
    const timeout = setTimeout(checkVisibility, 500);
    
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Play video when section enters viewport
            if (videoRef.current) {
              // Check if video is not already playing
              if (videoRef.current.paused) {
                videoRef.current.play().catch((error) => {
                  console.log("Video play failed:", error);
                });
              }
            }
          } else {
            // Pause video when section leaves viewport
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold for earlier detection
        rootMargin: "0px 0px -10% 0px", // Trigger when 10% from bottom of viewport
      }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current) return;

      const rect = videoContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate scroll progress (0 to 1) when video is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrollPosition = windowHeight - elementTop;
        const totalScrollable = windowHeight + elementHeight;
        const progress = Math.max(0, Math.min(1, scrollPosition / totalScrollable));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="flex flex-col gap-16">
          {/* Row 1 - Content */}
          <div className="max-w-4xl mx-auto">
            <p className="label-overline mb-4">About AVERIX</p>
            <h2 className="heading-section text-foreground mb-6">
              Your Long-Term Digital Partner
            </h2>
            <div className="space-y-6 body-base">
              <p>
                AVERIX was founded on a simple belief: businesses deserve 
                technology partners who truly understand their goals — not 
                just developers who write code.
              </p>
              <p>
                We combine strategic consulting with hands-on technical 
                execution. Our team has delivered digital solutions for 
                startups, SMBs, and enterprises across multiple industries 
                and geographies.
              </p>
              <p>
                From custom admin portals to lead generation systems, 
                we build digital infrastructure that becomes a competitive 
                advantage for your business.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">4</div>
                <div className="text-sm text-muted-foreground mt-1">Continents Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Row 2 - Video with scroll animation */}
          <div 
            ref={videoContainerRef}
            className={`relative transition-opacity  ease-out bg-white`}
           
          >
            <div 
              className="rounded-lg overflow-hidden transition-all duration-300 ease-out bg-white p-4"
              
            >
              <video 
                ref={videoRef}
                src="/hero-bg.mp4"
                loop
                playsInline
                className="w-full h-auto object-cover transition-transform duration-300 ease-out rounded-lg"
               
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
