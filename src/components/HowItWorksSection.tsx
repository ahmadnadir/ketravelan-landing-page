const HowItWorksSection = () => {
  const steps = [
    {
      title: "Find or Create Trips",
      description: "Explore curated DIY trips or organize your own.",
      illustration: (
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-illustration">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Person with magnifying glass */}
            <circle cx="80" cy="40" r="12" />
            <path d="M80 52 L80 90" />
            <path d="M80 65 Q65 70 70 80" strokeLinecap="round" />
            <path d="M80 65 Q95 70 90 80" strokeLinecap="round" />
            {/* Magnifying glass */}
            <circle cx="120" cy="60" r="15" />
            <path d="M132 72 L145 85" strokeLinecap="round" strokeWidth="3" />
            {/* Location pin */}
            <path d="M115 55 Q115 45 125 45 Q135 45 135 55 Q135 65 125 70 Q115 65 115 55" fill="currentColor" />
            <circle cx="125" cy="52" r="3" fill="white" />
            {/* Search elements */}
            <circle cx="60" cy="120" r="2" fill="currentColor" />
            <circle cx="140" cy="120" r="1.5" fill="currentColor" />
            <circle cx="40" cy="80" r="1" fill="currentColor" />
          </g>
        </svg>
      )
    },
    {
      title: "Connect & Collaborate",
      description: "Chat, plan, and get to know your group members.",
      illustration: (
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-illustration">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Multiple people in circle */}
            <circle cx="100" cy="100" r="60" strokeDasharray="5,5" strokeWidth="1" />
            <circle cx="100" cy="60" r="8" />
            <circle cx="130" cy="85" r="8" />
            <circle cx="130" cy="115" r="8" />
            <circle cx="100" cy="140" r="8" />
            <circle cx="70" cy="115" r="8" />
            <circle cx="70" cy="85" r="8" />
            {/* Chat bubbles */}
            <ellipse cx="120" cy="40" rx="12" ry="8" />
            <path d="M115 45 L112 50" strokeLinecap="round" />
            <ellipse cx="80" cy="40" rx="10" ry="6" />
            <path d="M85 45 L88 50" strokeLinecap="round" />
            {/* Connection lines */}
            <path d="M100 68 L122 77" strokeWidth="1" strokeDasharray="2,2" />
            <path d="M108 68 L122 107" strokeWidth="1" strokeDasharray="2,2" />
            <path d="M92 68 L78 77" strokeWidth="1" strokeDasharray="2,2" />
          </g>
        </svg>
      )
    },
    {
      title: "Make it happen",
      description: "Enjoy your trip, share experiences and create memories.",
      illustration: (
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-illustration">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Celebrating person */}
            <circle cx="100" cy="40" r="12" />
            <path d="M100 52 L100 90" />
            <path d="M100 65 Q80 55 85 75" strokeLinecap="round" />
            <path d="M100 65 Q120 55 115 75" strokeLinecap="round" />
            <path d="M100 90 Q95 110 105 125" strokeLinecap="round" />
            <path d="M100 90 Q105 110 95 125" strokeLinecap="round" />
            {/* Celebration elements */}
            <path d="M60 30 L65 25 M62 32 L67 27" strokeLinecap="round" />
            <path d="M140 30 L135 25 M138 32 L133 27" strokeLinecap="round" />
            <path d="M60 60 L65 55 M62 62 L67 57" strokeLinecap="round" />
            <path d="M140 60 L135 55 M138 62 L133 57" strokeLinecap="round" />
            {/* Stars */}
            <circle cx="70" cy="140" r="2" fill="currentColor" />
            <circle cx="130" cy="140" r="2" fill="currentColor" />
            <circle cx="50" cy="100" r="1.5" fill="currentColor" />
            <circle cx="150" cy="100" r="1.5" fill="currentColor" />
            {/* Confetti */}
            <rect x="45" y="45" width="3" height="3" fill="currentColor" transform="rotate(45 46.5 46.5)" />
            <rect x="150" y="45" width="3" height="3" fill="currentColor" transform="rotate(45 151.5 46.5)" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          How ketravelan works?
        </h2>
        <p className="text-center text-text-light mb-16">
          Currently in beta—help us build the future of smarter travel.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {step.illustration}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;