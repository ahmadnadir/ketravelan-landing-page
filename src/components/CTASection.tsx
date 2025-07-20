import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Try ketravelan now
        </h2>
        <p className="text-lg text-text-light mb-8">
          Find a Trip that Matches You
        </p>
        <Button variant="coral" size="lg" className="text-lg px-12">
          Discover trips
        </Button>
      </div>
    </section>
  );
};

export default CTASection;