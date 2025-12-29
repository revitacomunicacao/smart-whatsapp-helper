import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Agência Marketing Digital",
    role: "Parceiro White Label",
    content: "Revendemos a plataforma com nossa marca e nossos clientes adoram. A escalabilidade e personalização nos permitiram criar um novo fluxo de receita.",
    rating: 5,
  },
  {
    name: "Clínica Odontológica",
    role: "Setor de Saúde",
    content: "O CRM integrado ao WhatsApp revolucionou nossos agendamentos. A IA qualifica os pacientes e agenda automaticamente, nossa taxa de no-show caiu 60%.",
    rating: 5,
  },
  {
    name: "E-commerce de Moda",
    role: "Varejo",
    content: "Com o funil conversacional, acompanhamos cada lead do primeiro contato ao fechamento. Aumentamos conversões em 45% no primeiro trimestre.",
    rating: 5,
  },
  {
    name: "Imobiliária Premium",
    role: "Setor Imobiliário",
    content: "A qualificação automática de leads é fantástica. O agente supervisor identifica a intenção e direciona para o corretor certo. Fechamos muito mais negócios.",
    rating: 5,
  },
  {
    name: "Delivery de Alimentação",
    role: "Food Service",
    content: "Os pedidos pelo WhatsApp triplicaram. A IA pega pedidos corretamente, sugere complementos e integra direto com nosso sistema. Clientes adoram a rapidez.",
    rating: 5,
  },
  {
    name: "Consultoria Empresarial",
    role: "Serviços B2B",
    content: "A estabilidade da plataforma é impressionante. Atendemos milhares de mensagens diárias sem problemas. O suporte 24/7 da IA nos deu tranquilidade.",
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
            Clientes que{" "}
            <span className="text-gradient">confiam em nós</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 4.800 empresas já transformaram seu atendimento com nossa plataforma.
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
