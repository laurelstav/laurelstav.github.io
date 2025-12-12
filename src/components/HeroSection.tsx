import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const highlights = [
  'Profesionální přístup',
  'Kvalitní materiály',
  '15+ let zkušeností',
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Stavíme kvalitu od roku 2009
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Profesionální{' '}
            <span className="text-gradient">stavební práce</span>
            {' '}na míru
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializujeme se na montáž sádrokartonu, fasád, podlahové topení, 
            malování interiérů a jádrové vrtání. Působíme na Vysočině, Jižní Moravě a okolí Brna.
          </p>

          {/* Highlights */}
          <div className="animate-fade-up animate-fade-up-delay-2 flex flex-wrap justify-center gap-4 mb-10">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-primary-foreground/90 text-sm"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#kontakt">
                Nezávazná poptávka
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#sluzby">Naše služby</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
