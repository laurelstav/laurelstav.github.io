import { 
  Layers, 
  Home, 
  Thermometer, 
  Paintbrush, 
  CircleDot,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Layers,
    title: 'Sádrokarton',
    description: 'Profesionální montáž sádrokartonových konstrukcí, příček, podhledů a obkladů. Realizujeme jak jednoduché úpravy, tak komplexní projekty.',
    features: ['SDK příčky', 'Podhledy', 'Obklady stěn', 'Akustické systémy'],
  },
  {
    icon: Home,
    title: 'Fasády',
    description: 'Zateplení fasád kontaktními i provětrávanými systémy. Kompletní realizace včetně finálních omítek a nátěrů.',
    features: ['ETICS systémy', 'Provětrávané fasády', 'Omítky', 'Nátěry'],
  },
  {
    icon: Thermometer,
    title: 'Podlahové topení',
    description: 'Instalace moderních systémů podlahového vytápění pro maximální komfort a úsporu energie.',
    features: ['Teplovodní systémy', 'Elektro systémy', 'Regulace', 'Servis'],
  },
  {
    icon: Paintbrush,
    title: 'Malování interiérů',
    description: 'Profesionální malířské a natěračské práce. Používáme kvalitní barvy a moderní technologie.',
    features: ['Malování stěn', 'Stříkání', 'Dekorativní techniky', 'Penetrace'],
  },
  {
    icon: CircleDot,
    title: 'Jádrové vrtání',
    description: 'Přesné jádrové vrtání do betonu, železobetonu a zdiva. Bez prašnosti a vibrací.',
    features: ['Vrtání do betonu', 'Železobeton', 'Zdivo', 'Všechny průměry'],
  },
];

export const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Co děláme
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Naše <span className="text-gradient">služby</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nabízíme kompletní stavební služby s důrazem na kvalitu, 
            spolehlivost a dodržení termínů.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 card-elevated border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a 
                href="#kontakt" 
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link hover:gap-3 transition-all"
              >
                Poptat službu
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
