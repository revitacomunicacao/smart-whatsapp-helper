import { Inbox, PieChart, Bot, Users, Workflow, Shield } from "lucide-react";

const benefits = [
  {
    icon: Inbox,
    title: "Atendimento Centralizado",
    description:
      "Todas as conversas de WhatsApp, Instagram e Messenger em um só lugar. Filas de atendimento com controle total da distribuição entre equipes.",
  },
  {
    icon: PieChart,
    title: "CRM com Funil de Vendas",
    description:
      "Acompanhe o funil de vendas em tempo real, veja o que está travando o avanço dos leads e tome decisões que aumentam conversões.",
  },
  {
    icon: Bot,
    title: "Agentes de IA Inteligentes",
    description:
      "Atendimento inteligente 24h por dia. Crie agentes que executam rotinas de atendimento, vendas e suporte automaticamente.",
  },
  {
    icon: Users,
    title: "Multiagentes Orquestrados",
    description:
      "Orquestre múltiplos agentes de IA em um único chatbot. O Agente Supervisor identifica a intenção e aciona o agente ideal.",
  },
  {
    icon: Workflow,
    title: "Integrações Poderosas",
    description:
      "Conecte qualquer sistema via API robusta ou integrações nativas via n8n. Consulte boletos, faça agendamentos automáticos e muito mais.",
  },
  {
    icon: Shield,
    title: "Estabilidade Garantida",
    description:
      "Apenas 63 minutos de downtime em 2024. Infraestrutura segura e escalável que acompanha o seu crescimento.",
  },
];

const Benefits = () => {
  return (
    <section id="funcionalidades" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background (cinza com efeito) */}
      <div className="absolute inset-0 bg-[#919191]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-white/10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-black/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Soluções para{" "}
            <span className="text-[#002047]"> evoluir o atendimento do seu negócio</span>
          </h2>
          <p className="text-lg text-white/80">
            Plataforma completa para desenvolver o seu negócio com atendimento, CRM e
            inteligência artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
