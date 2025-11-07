import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo e Slogan */}
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block bg-background rounded-full p-3 sm:p-4">
              <img 
                src={logo} 
                alt="Chopp RioMafra" 
                className="h-16 sm:h-20 md:h-24 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-secondary-foreground/80 leading-relaxed">
              Distribuindo sabores, conectando pessoas e celebrando histórias
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-primary">Links rápidos</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-primary">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-secondary-foreground/80">
                  Rua Antônio Nunes, 773<br />
                  Mafra - SC, 89300-670
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5547996574217" 
                  className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (47) 99657-4217
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:cleidenirpirovano@gmail.com"
                  className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors break-all"
                >
                  cleidenirpirovano@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horário e Redes */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-primary">Horário</h3>
            <div className="flex items-start gap-2 mb-3 sm:mb-4">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-1" />
              <div className="text-xs sm:text-sm text-secondary-foreground/80">
                <p>Ter-Sáb: 08:00-12:00</p>
                <p className="mb-1">13:30-18:00</p>
                <p>Dom: 08:30-11:00</p>
              </div>
            </div>
            
            <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-primary">Redes sociais</h4>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com/ChoppRioMafra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.instagram.com/choppriomafradelivery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Regiões Atendidas */}
        <div className="border-t border-secondary-foreground/20 pt-4 sm:pt-6 mb-4 sm:mb-6">
          <h3 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-center text-primary">
            Regiões atendidas
          </h3>
          <p className="text-xs sm:text-sm text-secondary-foreground/80 text-center px-4">
            Mafra (SC) • Itaiópolis (SC) • Rio Negro (PR) • Campo do Tenente (PR)
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-4 sm:pt-6">
          <div className="text-center text-xs sm:text-sm text-secondary-foreground/60">
            <p className="mb-1">
              © {new Date().getFullYear()} Chopp RioMafra. Todos os direitos reservados.
            </p>
            <p>
              CNPJ: 39.712.382/0001-11
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
