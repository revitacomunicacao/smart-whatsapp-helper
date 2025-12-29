import { Settings2, Link, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings2,
    title: "Configure sua Plataforma",
    description: "Personalize com sua marca, configure equipes, filas de atendimento e treine seus agentes de IA em minutos.",
  },
  {
    number: "02",
    icon: Link,
    title: "Conecte seus Canais",
    description: "Integre WhatsApp, Instagram e Messenger. Conecte com suas ferramentas via API ou n8n.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Escale seu Negócio",
    description: "Com tudo centralizado, sua equipe atende melhor e sua IA trabalha 24h por dia para você.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Comece em{" "}
            <span className="text-gradient">3 passos simples</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem fidelidade, sem cartão e sem burocracia. Teste grátis por 14 dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="relative inline-flex mb-8">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
