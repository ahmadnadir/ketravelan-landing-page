const FeaturesSection = () => {
  const features = [
    {
      title: "Ditch Travel Agents Fees",
      description: "Forget paying expensive travel agent fees or dealing with rigid packages. With Ketravelan, you're in control. Find trips that suit your style and budget, connect with like-minded travelers, and plan your adventures with fees—just pure, hassle-free adventures.",
      illustration: (
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-illustration">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Running person */}
            <circle cx="50" cy="40" r="12" />
            <path d="M50 52 L50 90" />
            <path d="M50 65 Q40 70 45 80" strokeLinecap="round" />
            <path d="M50 65 Q60 60 65 75" strokeLinecap="round" />
            <path d="M50 90 Q45 110 55 125" strokeLinecap="round" />
            <path d="M50 90 Q55 110 45 125" strokeLinecap="round" />
            {/* Luggage */}
            <rect x="75" y="75" width="15" height="20" rx="2" />
            <circle cx="82" cy="80" r="1" fill="currentColor" />
            {/* Money symbols being left behind */}
            <text x="120" y="60" fontSize="16" fill="currentColor">$</text>
            <text x="140" y="80" fontSize="14" fill="currentColor">$</text>
            <text x="160" y="100" fontSize="12" fill="currentColor">$</text>
            {/* Motion lines */}
            <path d="M30 50 L25 50" strokeLinecap="round" />
            <path d="M30 65 L20 65" strokeLinecap="round" />
            <path d="M35 80 L25 80" strokeLinecap="round" />
          </g>
        </svg>
      )
    },
    {
      title: "Share Costs and Save More",
      description: "Traveling in a group doesn't just make trips more fun—it also makes them affordable. Share transportation, accommodations, and other expenses to stretch your budget further while enjoying every footstep.",
      illustration: (
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-illustration">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Multiple people */}
            <circle cx="70" cy="40" r="10" />
            <circle cx="130" cy="40" r="10" />
            <path d="M70 50 L70 80" />
            <path d="M130 50 L130 80" />
            {/* Connection line */}
            <path d="M80 40 Q100 30 120 40" strokeDasharray="3,3" />
            {/* Shared money */}
            <circle cx="100" cy="70" r="15" strokeWidth="1" />
            <text x="95" y="76" fontSize="12" fill="currentColor">$</text>
            {/* Arms reaching for money */}
            <path d="M80 60 Q90 65 85 75" strokeLinecap="round" />
            <path d="M120 60 Q110 65 115 75" strokeLinecap="round" />
          </g>
        </svg>
      )
    },
    {
      title: "Discover DIY-Curated Trips",
      description: "Break free from the typical tourist path. Join DIY-curated trips created by experienced travelers who know how to uncover hidden gems and unique experiences.",
      illustration: (
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-illustration">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Person with map */}
            <circle cx="100" cy="40" r="12" />
            <path d="M100 52 L100 90" />
            <path d="M100 65 Q85 70 90 80" strokeLinecap="round" />
            <path d="M100 65 Q115 70 110 80" strokeLinecap="round" />
            {/* Map/book */}
            <rect x="85" y="100" width="30" height="20" rx="2" />
            <path d="M90 105 L110 105" strokeWidth="1" />
            <path d="M90 110 L105 110" strokeWidth="1" />
            <path d="M90 115 L110 115" strokeWidth="1" />
            {/* Discovery elements */}
            <circle cx="60" cy="60" r="2" fill="currentColor" />
            <circle cx="140" cy="80" r="1.5" fill="currentColor" />
            <circle cx="70" cy="140" r="1" fill="currentColor" />
            <circle cx="130" cy="140" r="2" fill="currentColor" />
            {/* Star */}
            <path d="M150 50 L152 56 L158 56 L153 60 L155 66 L150 62 L145 66 L147 60 L142 56 L148 56 Z" fill="currentColor" strokeWidth="1" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Travel Smarter with Ketravelan
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {feature.illustration}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;