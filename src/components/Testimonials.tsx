import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Diego Schumacher",
      text: "O melhor chopp e sem dúvida o melhor atendimento de RioMafra.",
      rating: 5
    },
    {
      name: "Marcos Alberto Machado",
      text: "Super recomendo, muito bom, ótimo atendimento, show de bola",
      rating: 5
    },
    {
      name: "Andre Lima",
      text: "Melhor Chopp da cidade 👊👊👊",
      rating: 5
    },
    {
      name: "Valmir Radeck",
      text: "Chopp ótimo e preço bom!",
      rating: 5
    },
    {
      name: "Eliton Vieira",
      text: "Chopp de qualidade e atendimento nota. 💯",
      rating: 5
    },
    {
      name: "Leandro Stoeberl",
      text: "Ótimo chopp recomendo",
      rating: 5
    },
    {
      name: "Willian Tuleski",
      text: "Eu e meus amigos tivemos um ótimo atendimento. O chopp é de ótima qualidade. Recomendo!",
      rating: 5
    },
    {
      name: "Analu Steffen",
      text: "Excelente atendimento e chopp de qualidade! Ficamos muito satisfeitos!",
      rating: 5
    },
    {
      name: "Jeniffer Neumann",
      text: "Ótimo atendimento e chopp muito bom",
      rating: 5
    },
    {
      name: "Guilherme Machado",
      text: "Excelente produto, um dos melhores chopp que já tomei",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto animate-fade-in">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg p-6 shadow-lg hover:shadow-gold transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
