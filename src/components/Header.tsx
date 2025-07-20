import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">Ketravelan</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Discover Trips
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Add Trip
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              My Trip
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              More
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="coral">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                Discover Trips
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                Add Trip
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                My Trip
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                More
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button variant="coral" className="w-full">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;