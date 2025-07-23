const FeaturesSection = () => {
  const features = [
    {
      title: "Ditch Travel Agents Fees",
      description: "Forget paying expensive travel agent fees or dealing with rigid packages. With Ketravelan, you're in control. Find trips that suit your style and budget, connect with like-minded travelers, and plan your adventures with fees—just pure, hassle-free adventures.",
      illustration: (
        <div className="w-[200px] h-[200px] flex items-center justify-center">
          <img 
            src="/lovable-uploads/a3ed4bdc-6f25-4ef4-b986-128df8e10e3f.png" 
            alt="Person running away from travel agent fees" 
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Share Costs, Travel More",
      description: "Traveling in a group doesn't just make trips more fun—it also makes them affordable. Share transportation, accommodations, and other expenses to stretch your budget further while enjoying every footstep. It's not just cheaper—it's smarter travel.",
      illustration: (
        <div className="w-[200px] h-[200px] flex items-center justify-center">
          <img 
            src="/lovable-uploads/b22dcb22-4c33-40f3-b912-bd6d5712d59f.png" 
            alt="Person with suitcase surrounded by money savings" 
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Discover DIY-Curated Trips",
      description: "Break free from the typical tourist path. Join DIY-curated trips created by experienced travelers who know how to uncover hidden gems and unique experiences.",
      illustration: (
        <div className="w-[200px] h-[200px] flex items-center justify-center">
          <img 
            src="/lovable-uploads/ef1a12c3-cfee-48c0-8a2c-a383b4947b70.png" 
            alt="Person reading a travel guide or map" 
            className="w-full h-full object-contain"
          />
        </div>
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