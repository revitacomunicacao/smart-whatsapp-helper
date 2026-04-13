import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ========================================
// TROQUE A IMAGEM AQUI:
// Basta substituir a URL abaixo pela sua imagem
// ========================================
const PARALLAX_BG_IMAGE = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80";

const testimonials = [
  {
    name: "Agência Marketing Digital",
    role: "Parceiro Personalizado",
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
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = (windowHeight - rect.top) / (windowHeight + sectionHeight);
          setScrollY(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 100;

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translateY(${-parallaxOffset * 0.3}px)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('${PARALLAX_BG_IMAGE}')`,
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-brand-surface/75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-primary-foreground">
            Clientes que{" "}
            <span className="text-accent">confiam em nós</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 animate-fade-in"
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
