import { Heart, Award, Users, TrendingUp } from "lucide-react";
import aboutCelebration from "@/assets/about-celebration.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa história
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="mb-8 sm:mb-10 md:mb-12 rounded-lg overflow-hidden shadow-lg animate-fade-in">
            <img src={aboutCelebration} alt="Pessoas celebrando com chopp" className="w-full h-auto" />
          </div>

          <div className="prose prose-base sm:prose-lg max-w-none mb-10 sm:mb-12 md:mb-16 text-foreground/90 leading-relaxed animate-fade-in">
            <p className="mb-6">
              A história da Chopp RioMafra começou em 2019, na cidade de Mafra (SC), com um sonho simples 
              e uma grande vontade de levar sabor, alegria e bons momentos para as pessoas.
            </p>
            
            <p className="mb-6">
              Com o passar do tempo, nosso trabalho conquistou novas fronteiras, chegando também a Itaiópolis (SC), 
              Rio Negro (PR), Campo do Tenente (PR) e a todo o interior dessas regiões, unindo cidades, clientes e 
              amigos através de um brinde cheio de significado.
            </p>
            
            <p className="mb-6">
              Desde o início, tivemos um propósito muito claro: distribuir bebidas de qualidade, com confiança e 
              comprometimento, tornando cada entrega parte de uma celebração. Mas o caminho até aqui não foi fácil. 
              Pouco tempo após a fundação, o mundo enfrentou a pandemia, trazendo desafios que testaram nossa coragem 
              e determinação.
            </p>
            
            <p className="mb-6">
              Com esforço, dedicação e fé, seguimos firmes, reinventando formas de atender e mantendo viva a missão 
              de levar alegria em forma de chopp e bebidas.
            </p>
            
            <p className="mb-6">
              Com o tempo, conquistamos a confiança de clientes, parceiros e amigos, fortalecendo nossa presença nas 
              duas regiões e crescendo com responsabilidade e paixão. Hoje, a Chopp RioMafra é reconhecida pela qualidade, 
              agilidade e atendimento próximo, levando sabor e bons momentos a cada brinde.
            </p>
            
            <p className="text-lg font-semibold text-primary">
              E seguimos com o mesmo espírito que nos fez começar: vontade de crescer, expandir para novas cidades 
              vizinhas e continuar levando o nome Chopp RioMafra ainda mais longe — sempre com respeito, compromisso 
              e amor pelo que fazemos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 animate-fade-in">
            <div className="text-center p-4 sm:p-6 bg-muted/50 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">Qualidade e pureza</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Compromisso com o melhor sabor, frescor e padrão de produção
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-muted/50 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">Paixão pelo chopp</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Dedicação e amor em cada barril que leva o nome RioMafra
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-muted/50 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">Respeito e transparência</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Honestidade em cada relação com clientes, parceiros e colaboradores
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-muted/50 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">Tradição regional</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Orgulho em representar nossa terra e suas pessoas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
