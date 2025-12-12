import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'Let zkušeností' },
  { icon: Users, value: '500+', label: 'Spokojených klientů' },
  { icon: Award, value: '1000+', label: 'Realizovaných projektů' },
  { icon: ShieldCheck, value: '100%', label: 'Garance kvality' },
];

export const AboutSection = () => {
  return (
    <section id="o-nas" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              O naší firmě
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary-foreground mt-3 mb-6">
              Stavíme na{' '}
              <span className="text-gradient">důvěře a kvalitě</span>
            </h2>
            <div className="space-y-4 text-secondary-foreground/80 text-lg leading-relaxed">
              <p>
                Specializujeme se na profesionální montáž sádrokartonu, fasád, 
                podlahového topení, malování interiérů a jádrového vrtání. 
                S dlouholetými zkušenostmi v oboru zajišťujeme vysokou kvalitu 
                našich služeb a spokojenost našich zákazníků.
              </p>
              <p>
                Vždy se snažíme splnit Vaše požadavky a navrhnout optimální 
                řešení pro každý projekt. Působíme na celé Vysočině, 
                Jižní Moravě a okolí Brna.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {[
                'Individuální přístup ke každému klientovi',
                'Používáme pouze kvalitní certifikované materiály',
                'Dodržování dohodnutých termínů',
                'Záruka na všechny provedené práce',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-secondary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background rounded-xl p-8 text-center card-elevated"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-4xl font-serif font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
