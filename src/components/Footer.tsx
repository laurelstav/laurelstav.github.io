import { Phone, Mail, MapPin } from 'lucide-react';

const services = [
  'Sádrokarton',
  'Fasády',
  'Podlahové topení',
  'Malování interiérů',
  'Jádrové vrtání',
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold">
                <span className="text-gradient">Laurel</span>stav
              </span>
            </a>
            <p className="text-primary-foreground/70 leading-relaxed">
              Profesionální stavební práce na Vysočině, Jižní Moravě a okolí Brna. 
              Kvalita a spolehlivost od roku 2009.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Služby</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#sluzby"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Rychlé odkazy</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sluzby" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Služby
                </a>
              </li>
              <li>
                <a href="#o-nas" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#reference" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Reference
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+420123456789" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@laurelstav.eu" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  info@laurelstav.eu
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Vysočina, Jižní Morava, Brno
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Laurelstav. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
              Ochrana osobních údajů
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
