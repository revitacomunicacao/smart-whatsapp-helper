import { Calendar, MessageCircle, TrendingUp, Clock, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Agendamento Automático",
    description: "Sua agenda sempre cheia com marcações automáticas. A IA verifica disponibilidade e confirma horários instantaneamente.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento 24/7",
    description: "Nunca perca um cliente. Responda mensagens a qualquer hora do dia ou da noite, todos os dias da semana.",
  },
  {
    icon: TrendingUp,
    title: "Aumente suas Vendas",
    description: "Capture e qualifique leads automaticamente. Converta mais clientes com respostas rápidas e personalizadas.",
  },
  {
    icon: Clock,
    title: "Economize Tempo",
    description: "Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa.",
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Dados protegidos e criptografados. Seu negócio e seus clientes sempre seguros.",
  },
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description: "Tempo de resposta em segundos. Impressione seus clientes com atendimento ágil e eficiente.",
  },
];

const Benefits = () => {
  return (
    <section id="funcionalidades" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher o{" "}
            <span className="text-gradient">DuBrasil Nexa</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforme seu atendimento com inteligência artificial e veja resultados reais no seu negócio.
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
