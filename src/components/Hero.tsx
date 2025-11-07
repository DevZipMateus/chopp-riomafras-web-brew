import { Button } from "@/components/ui/button";
import { Beer } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <img 
              src={logo} 
              alt="Chopp RioMafra" 
              className="h-48 md:h-64 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Chopp RioMafra
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Distribuindo sabores, conectando pessoas e celebrando histórias
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl">
            Chopp de alta qualidade com delivery em Mafra, Itaiópolis, Rio Negro, Campo do Tenente e região
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground shadow-gold text-lg px-8 py-6"
            >
              <a href="https://wa.me/5547996574217" target="_blank" rel="noopener noreferrer">
                <Beer className="mr-2 h-5 w-5" />
                Fazer pedido
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-background/80 text-foreground border-primary/60 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary text-lg px-8 py-6"
            >
              <a href="#servicos">
                Ver serviços
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Cidades atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Qualidade garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
