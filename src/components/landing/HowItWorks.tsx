import { Settings2, Link, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings2,
    title: "Configure sua IA",
    description: "Insira informações do seu negócio, serviços, preços e horários. A IA aprende tudo em minutos.",
  },
  {
    number: "02",
    icon: Link,
    title: "Conecte seu WhatsApp",
    description: "Integração simples e segura. Basta escanear um QR Code e pronto.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Comece a Atender",
    description: "Sua IA já está pronta para atender, agendar e vender 24 horas por dia.",
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
            Configuração rápida e sem complicação. Você não precisa de conhecimento técnico.
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
