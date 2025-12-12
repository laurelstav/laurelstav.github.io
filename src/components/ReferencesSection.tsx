import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jan Novák',
    location: 'Brno',
    rating: 5,
    text: 'Výborná práce! Sádrokartonové příčky v bytě udělali rychle a precizně. Můžu jen doporučit.',
  },
  {
    name: 'Marie Svobodová',
    location: 'Jihlava',
    rating: 5,
    text: 'Profesionální přístup od začátku do konce. Fasáda domu vypadá skvěle a zateplení funguje perfektně.',
  },
  {
    name: 'Petr Horák',
    location: 'Třebíč',
    rating: 5,
    text: 'Instalace podlahového topení proběhla bez problémů. Dodrželi termín a cenu. Spokojenost.',
  },
];

const projects = [
  { title: 'Bytový dům', location: 'Brno-Žabovřesky', type: 'Fasáda + SDK' },
  { title: 'Rodinný dům', location: 'Jihlava', type: 'Kompletní interiér' },
  { title: 'Komerční objekt', location: 'Znojmo', type: 'Podlahové topení' },
  { title: 'Administrativní budova', location: 'Třebíč', type: 'SDK podhledy' },
];

export const ReferencesSection = () => {
  return (
    <section id="reference" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Reference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Co o nás říkají{' '}
            <span className="text-gradient">klienti</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Spokojení zákazníci jsou naší nejlepší reklamou
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-8 card-elevated border border-border/50 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="bg-secondary rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-serif font-semibold text-secondary-foreground mb-8 text-center">
            Nedávné projekty
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-foreground mb-1">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
