import { Beer, Truck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos as melhores opções para você curtir um chopp gelado de qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
          <div className="bg-background rounded-lg p-8 shadow-lg hover:shadow-gold transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Delivery de barris</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Entregamos barris de chopp com chopeiras diretamente na sua casa ou evento. 
              Tudo pronto para você servir e aproveitar com amigos e família.
            </p>
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <a href="https://wa.me/5547996574217?text=Olá! Gostaria de pedir um barril de chopp" target="_blank" rel="noopener noreferrer">
                Pedir barril
              </a>
            </Button>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-lg hover:shadow-gold transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Beer className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Delivery de chopp</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Chopp gelado entregue na sua porta. Perfeito para aquele happy hour em casa 
              ou para quem quer curtir um chopp de qualidade sem sair de casa.
            </p>
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <a href="https://wa.me/5547996574217?text=Olá! Gostaria de pedir chopp delivery" target="_blank" rel="noopener noreferrer">
                Pedir delivery
              </a>
            </Button>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-lg hover:shadow-gold transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Store className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Growlers na loja</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Venha até nossa loja física e leve seu chopp fresquinho em growlers. 
              Praticidade e qualidade para você curtir onde quiser.
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full bg-background/80 text-foreground border-primary/60 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
            >
              <a href="#contato">
                Ver endereço
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-background rounded-lg p-8 shadow-lg animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Regiões atendidas
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Levamos nosso chopp de qualidade para você em:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-foreground">Mafra</p>
                <p className="text-sm text-muted-foreground">SC</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-foreground">Itaiópolis</p>
                <p className="text-sm text-muted-foreground">SC</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-foreground">Rio Negro</p>
                <p className="text-sm text-muted-foreground">PR</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-foreground">Campo do Tenente</p>
                <p className="text-sm text-muted-foreground">PR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
