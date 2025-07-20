import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">Connect. Chat. Roam Freely</h1>
          
          {/* Hero Illustration */}
          <div className="flex justify-center mb-12">
            <div className="w-80 h-80 flex items-center justify-center">
              {/* Placeholder SVG Illustration */}
              <svg width="320" height="320" viewBox="0 0 320 320" className="text-illustration">
                {/* Backpacker character */}
                <g stroke="currentColor" strokeWidth="2" fill="none">
                  {/* Head */}
                  <circle cx="160" cy="80" r="25" />
                  {/* Body */}
                  <ellipse cx="160" cy="140" rx="30" ry="40" />
                  {/* Backpack */}
                  <rect x="140" y="110" width="40" height="50" rx="5" />
                  <circle cx="150" cy="125" r="3" fill="currentColor" />
                  <circle cx="170" cy="135" r="2" fill="currentColor" />
                  {/* Arms */}
                  <path d="M130 120 Q110 130 120 150" strokeLinecap="round" />
                  <path d="M190 120 Q210 110 205 140" strokeLinecap="round" />
                  {/* Legs */}
                  <path d="M145 180 Q140 200 150 220" strokeLinecap="round" />
                  <path d="M175 180 Q180 200 170 220" strokeLinecap="round" />
                  {/* Shoes */}
                  <ellipse cx="145" cy="225" rx="8" ry="4" fill="currentColor" />
                  <ellipse cx="175" cy="225" rx="8" ry="4" fill="currentColor" />
                  {/* Decorative elements */}
                  <circle cx="80" cy="60" r="2" fill="currentColor" />
                  <circle cx="240" cy="100" r="1.5" fill="currentColor" />
                  <path d="M60 140 Q70 130 80 140" strokeLinecap="round" />
                  <path d="M240 160 Q250 150 260 160" strokeLinecap="round" />
                  {/* Cloud */}
                  <path d="M90 40 Q85 35 95 35 Q100 30 105 35 Q110 30 115 35 Q120 35 115 40 Q110 45 95 45 Q90 45 90 40" />
                </g>
              </svg>
            </div>
          </div>

          <p className="text-lg text-text-light max-w-2xl mx-auto mb-8">
            Join the next generation of travelers upgrading their adventures through connection and cost sharing with Ketravelan.
          </p>

          <div className="flex justify-center">
            <Button variant="coral" size="lg" className="text-lg px-8 bg-zinc-950 hover:bg-zinc-800">
              Join the Beta on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;