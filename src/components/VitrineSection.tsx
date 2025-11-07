import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const VitrineSection = () => {
  return (
    <section id="vitrine-section" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça nossa vitrine online
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Explore todos os nossos produtos, preços e opções disponíveis de forma prática e rápida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 animate-fade-in">
            <div className="bg-background rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-gold transition-all duration-300 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
                <ShoppingCart className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                Produtos Disponíveis
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Veja todos os produtos em estoque e suas descrições detalhadas
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-gold transition-all duration-300 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
                <Package className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                Preços Atualizados
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Confira os preços em tempo real e promoções especiais
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-gold transition-all duration-300 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
                <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                Fácil Navegação
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Interface intuitiva para encontrar rapidamente o que procura
              </p>
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 sm:p-10 md:p-12 shadow-xl animate-fade-in text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Pronto para explorar?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Acesse nossa vitrine online e descubra todas as opções de chopps, cervejas e bebidas que temos disponíveis para você. Escolha seus produtos favoritos e faça seu pedido com praticidade!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground shadow-gold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto"
              >
                <Link to="/vitrine">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Acessar Vitrine
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-background/80 text-foreground border-primary/60 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto"
              >
                <a href="https://wa.me/5547996574217" target="_blank" rel="noopener noreferrer">
                  Fazer Pedido pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
