const HowItWorksSection = () => {
  const steps = [
    {
      title: "Find or Create Trips",
      description: "Explore curated DIY trips or organize your own.",
      illustration: (
        <div className="w-[200px] h-[200px] flex items-center justify-center">
          <img 
            src="/lovable-uploads/77f197d3-e7b9-44c3-a1aa-9132ff09e5e0.png" 
            alt="Person with location pin finding trips" 
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Connect & Collaborate",
      description: "Chat, plan, and get to know your group members.",
      illustration: (
        <div className="w-[200px] h-[200px] flex items-center justify-center">
          <img 
            src="/lovable-uploads/63be1012-b60d-488f-943f-2d8b2e854060.png" 
            alt="Three people connecting and collaborating" 
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Make it happen",
      description: "Enjoy your trip, share experiences and create memories.",
      illustration: (
        <div className="w-[200px] h-[200px] flex items-center justify-center">
          <img 
            src="/lovable-uploads/89b37a48-7b50-4325-8ae1-25605de72f01.png" 
            alt="Person celebrating on a rocket ship" 
            className="w-full h-full object-contain"
          />
        </div>
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