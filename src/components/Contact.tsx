import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para atender você. Fale conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">Endereço</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Rua Antônio Nunes, 773<br />
                  Jardim América<br />
                  Mafra - SC, CEP 89300-670
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">Telefone</h3>
                <a 
                  href="https://wa.me/5547996574217" 
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (47) 99657-4217
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">E-mail</h3>
                <a 
                  href="mailto:cleidenirpirovano@gmail.com"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  cleidenirpirovano@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">Horário de funcionamento</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Terça a sábado: 08:00 às 12:00 e 13:30 às 18:00<br />
                  Domingo: 08:30 às 11:00<br />
                  Segunda: Fechado
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Redes sociais</h3>
              <div className="flex gap-3 sm:gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-background/80 border-primary/60 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <a 
                    href="https://www.facebook.com/ChoppRioMafra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="bg-background/80 border-primary/60 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <a 
                    href="https://www.instagram.com/choppriomafradelivery" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground shadow-gold text-sm sm:text-base"
              >
                <a href="https://wa.me/5547996574217" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Fale conosco pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="bg-muted/30 rounded-lg overflow-hidden h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.0168842394845!2d-49.80741492423767!3d-26.11332567711844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1dbbaeb7555%3A0x8b8b8b8b8b8b8b8b!2sR.%20Ant%C3%B4nio%20Nunes%2C%20773%20-%20Jardim%20Am%C3%A9rica%2C%20Mafra%20-%20SC%2C%2089300-670!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Chopp RioMafra"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
