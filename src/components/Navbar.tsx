import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#o-nas', label: 'O nás' },
  { href: '#reference', label: 'Reference' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className={cn(
              "text-2xl font-serif font-bold transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              <span className="text-gradient">Laurel</span>
              <span className={isScrolled ? "text-foreground" : "text-primary-foreground"}>stav</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-primary relative group",
                  isScrolled ? "text-foreground" : "text-primary-foreground/90"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+420123456789" className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              <Phone className="w-4 h-4" />
              +420 123 456 789
            </a>
            <Button variant={isScrolled ? "default" : "hero"} size="lg" asChild>
              <a href="#kontakt">Nezávazná poptávka</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          )}
        >
          <div className="bg-card rounded-lg p-4 shadow-lg space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="gold" className="w-full" asChild>
              <a href="#kontakt">Nezávazná poptávka</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
