import { Button } from "@/components/ui/button";
const CTASection = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Join Our Beta. Help Shape the Future of Travel.
        </h2>
        <p className="text-lg text-text-light mb-8">
          Post your trip. Connect with travelers. Travel better—together.
        </p>
        <Button variant="coral" size="lg" className="text-lg px-12 bg-zinc-950 hover:bg-zinc-800">
          Join the WhatsApp Beta
        </Button>
      </div>
    </section>;
};
export default CTASection;