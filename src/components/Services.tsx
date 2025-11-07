import { Beer, Truck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceDelivery from "@/assets/service-delivery.jpg";
import serviceChopp from "@/assets/service-chopp.jpg";
import serviceGrowler from "@/assets/service-growler.jpg";

const Services = () => {
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Oferecemos as melhores opções para você curtir um chopp gelado de qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto animate-fade-in">
          <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-gold transition-all duration-300">
            <div className="h-40 sm:h-48 overflow-hidden">
              <img src={serviceDelivery} alt="Delivery de barris de chopp" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Delivery de barris</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Entregamos barris de chopp com chopeiras diretamente na sua casa ou evento. 
                Tudo pronto para você servir e aproveitar com amigos e família.
              </p>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-sm sm:text-base"
              >
                <a href="https://wa.me/5547996574217?text=Olá! Gostaria de pedir um barril de chopp" target="_blank" rel="noopener noreferrer">
                  Pedir barril
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-gold transition-all duration-300">
            <div className="h-40 sm:h-48 overflow-hidden">
              <img src={serviceChopp} alt="Chopp gelado sendo servido" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
                <Beer className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Delivery de chopp</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Chopp gelado entregue na sua porta. Perfeito para aquele happy hour em casa 
                ou para quem quer curtir um chopp de qualidade sem sair de casa.
              </p>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-sm sm:text-base"
              >
                <a href="https://wa.me/5547996574217?text=Olá! Gostaria de pedir chopp delivery" target="_blank" rel="noopener noreferrer">
                  Pedir delivery
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-gold transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="h-40 sm:h-48 overflow-hidden">
              <img src={serviceGrowler} alt="Growlers de chopp na loja" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6">
                <Store className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Growlers na loja</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Venha até nossa loja física e leve seu chopp fresquinho em growlers. 
                Praticidade e qualidade para você curtir onde quiser.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full bg-background/80 text-foreground border-primary/60 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary text-sm sm:text-base"
              >
                <a href="#contato">
                  Ver endereço
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 max-w-4xl mx-auto bg-background rounded-lg p-6 sm:p-8 shadow-lg animate-fade-in">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Regiões atendidas
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
              Levamos nosso chopp de qualidade para você em:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-foreground text-sm sm:text-base">Mafra</p>
                <p className="text-xs sm:text-sm text-muted-foreground">SC</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-foreground text-sm sm:text-base">Itaiópolis</p>
                <p className="text-xs sm:text-sm text-muted-foreground">SC</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-foreground text-sm sm:text-base">Rio Negro</p>
                <p className="text-xs sm:text-sm text-muted-foreground">PR</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-foreground text-sm sm:text-base">Campo do Tenente</p>
                <p className="text-xs sm:text-sm text-muted-foreground">PR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
