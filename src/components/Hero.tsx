import { Button } from "@/components/ui/button";
import { Beer } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section id="hero" className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 sm:mb-8">
            <img src={logo} alt="Chopp RioMafra" className="h-32 sm:h-40 md:h-48 lg:h-64 w-auto mx-auto drop-shadow-2xl" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-950 mb-4 sm:mb-6">
            Chopp RioMafra
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl leading-relaxed text-zinc-950 px-4">
            Distribuindo sabores, conectando pessoas e celebrando histórias
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl text-neutral-950 px-4">
            Chopp de alta qualidade com delivery em Mafra, Itaiópolis, Rio Negro, Campo do Tenente e região
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground shadow-gold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              <a href="https://wa.me/5547996574217" target="_blank" rel="noopener noreferrer">
                <Beer className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Fazer pedido
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="bg-background/80 text-foreground border-primary/60 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              <a href="#servicos">
                Ver serviços
              </a>
            </Button>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-3xl px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Cidades atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Qualidade garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;