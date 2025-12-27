import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Maria Silva",
    role: "Clínica Odontológica",
    content: "O DuBrasil Nexa transformou minha clínica. Antes eu perdia muitos pacientes por não conseguir responder rápido. Agora a IA agenda automaticamente e minha agenda está sempre cheia.",
    rating: 5,
  },
  {
    name: "Carlos Santos",
    role: "E-commerce de Roupas",
    content: "Aumentamos nossas vendas em 40% no primeiro mês. A IA responde dúvidas sobre tamanhos, cores e faz follow-up com clientes que abandonaram o carrinho.",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Salão de Beleza",
    content: "Economizo mais de 4 horas por dia que antes gastava respondendo WhatsApp. A IA é tão natural que os clientes nem percebem que é automático.",
    rating: 5,
  },
  {
    name: "Dr. Pedro Lima",
    role: "Consultório Médico",
    content: "A funcionalidade de agendamento automático é incrível. Pacientes podem marcar consultas mesmo de madrugada. Minha secretária agora foca em tarefas mais importantes.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Restaurante Delivery",
    content: "Nossos pedidos pelo WhatsApp aumentaram 60%. A IA pega os pedidos corretamente e ainda sugere complementos. Os clientes adoram a rapidez.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Imobiliária",
    content: "A qualificação automática de leads é fantástica. A IA faz as perguntas certas e só me passa clientes realmente interessados. Fecho muito mais negócios.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            O que nossos{" "}
            <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de empresas que transformaram seu atendimento com o DuBrasil Nexa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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
