import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Ideal para pequenos negócios começando com automação",
    price: "197",
    period: "/mês",
    features: [
      "1 número de WhatsApp",
      "Até 500 conversas/mês",
      "IA para atendimento básico",
      "Agendamento automático",
      "Suporte por email",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Profissional",
    description: "Para empresas que querem escalar o atendimento",
    price: "397",
    period: "/mês",
    features: [
      "3 números de WhatsApp",
      "Conversas ilimitadas",
      "IA avançada com contexto",
      "Agendamento + lembretes",
      "CRM integrado",
      "Relatórios completos",
      "Suporte prioritário",
    ],
    cta: "Escolher Plano",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Solução completa para grandes operações",
    price: "Sob consulta",
    period: "",
    features: [
      "WhatsApp ilimitado",
      "API personalizada",
      "IA treinada exclusiva",
      "Integrações customizadas",
      "Gestor de conta dedicado",
      "SLA garantido",
      "Onboarding completo",
    ],
    cta: "Fale Conosco",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="precos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Planos e Preços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Escolha o plano{" "}
            <span className="text-gradient">ideal para você</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece gratuitamente e escale conforme seu negócio cresce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 animate-fade-in ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full inline-flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  {plan.price !== "Sob consulta" && (
                    <span className="text-lg text-muted-foreground">R$</span>
                  )}
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${plan.popular ? "gradient-primary shadow-glow" : ""}`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                asChild
              >
                <a href="#contato">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
