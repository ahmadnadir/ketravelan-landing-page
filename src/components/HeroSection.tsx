import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">Connect. Chat. Roam Freely</h1>
          
          {/* Hero Illustration */}
          <div className="flex justify-center mb-12">
            <div className="w-80 h-80 flex items-center justify-center">
              <img 
                src="/lovable-uploads/7393635a-eac1-42e1-96f0-f883b679f209.png" 
                alt="Happy traveler with backpack waving" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <p className="text-lg text-text-light max-w-2xl mx-auto mb-8">
            Join the next generation of travelers upgrading their adventures through connection and cost sharing with Ketravelan.
          </p>

          <div className="flex justify-center">
            <Button variant="coral" size="lg" className="text-lg px-8 bg-zinc-950 hover:bg-zinc-800">Join as Tester</Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;