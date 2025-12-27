import { Bot, Users, Settings, Brain, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "IA + Humanos",
    description: "Combine o melhor dos dois mundos. A IA resolve questões simples e transfere para humanos quando necessário.",
    tag: "Híbrido",
  },
  {
    icon: MessageSquare,
    title: "Multicanal",
    description: "Integre WhatsApp, Instagram, Facebook e seu site em uma única plataforma de atendimento.",
    tag: "Integrações",
  },
  {
    icon: Settings,
    title: "Fácil Configuração",
    description: "Configure sua IA em minutos, sem necessidade de programação ou conhecimento técnico.",
    tag: "Simples",
  },
  {
    icon: Brain,
    title: "Respostas Inteligentes",
    description: "A IA aprende com seu negócio e oferece respostas personalizadas e contextuais.",
    tag: "Machine Learning",
  },
  {
    icon: Users,
    title: "CRM Integrado",
    description: "Gerencie seus clientes, histórico de conversas e dados em um só lugar.",
    tag: "Gestão",
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description: "Acompanhe métricas de atendimento, vendas e satisfação em tempo real.",
    tag: "Analytics",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tudo que você precisa para{" "}
            <span className="text-gradient">automatizar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Recursos poderosos para transformar a forma como você atende seus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
