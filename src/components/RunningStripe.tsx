export function RunningStripe() {
  const content = "Strategy • Technology • Execution • Web Development • MERN Applications • Admin Portals • Lead Generation • Branding • Scalable Digital Systems •";
  
  // Add even more spacing after each word
  const spacedContent = content.replace(/ • /g, " •          ");
  
  // Duplicate content for seamless loop
  const duplicatedContent = `${spacedContent} ${spacedContent} ${spacedContent}`;

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: '#1166A2' }}>
      <div className="py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-white text-2xl font-semibold tracking-widest px-12 uppercase">
            {duplicatedContent}
          </span>
        </div>
      </div>
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, #1166A2, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10" style={{ background: 'linear-gradient(to left, #1166A2, transparent)' }} />
    </div>
  );
}

