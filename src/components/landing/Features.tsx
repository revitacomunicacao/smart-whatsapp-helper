import { CheckCircle2, Target, Users, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Empresas que vendem e atendem por WhatsApp e redes sociais",
  },
  {
    icon: Users,
    title: "Times com 2+ atendentes e volume crescente",
  },
  {
    icon: CheckCircle2,
    title: "Operações que precisam de padrão, histórico e gestão",
  },
  {
    icon: TrendingUp,
    title: "Negócios que querem reduzir tempo de resposta e melhorar conversão",
  },
];

const Features = () => {
  return (
    <section id="ideal" className="py-20 md:py-28 bg-[#002147]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Ideal para
          </h2>
          <p className="text-white mt-5 text-lg text-muted-foreground">
            Quando atendimento é parte da operação e precisa funcionar sem depender de “heróis” no WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-card/90 rounded-2xl p-6 border border-border shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-base md:text-lg font-medium text-foreground">
                  {item.title}
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
