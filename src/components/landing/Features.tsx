import { CheckCircle2, Target, Users, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Empresas que vendem e atendem por WhatsApp e redes sociais",
    bg: "#E5E8EC",
  },
  {
    icon: Users,
    title: "Times com 2+ atendentes e volume crescente",
    bg: "#DADEE4",
  },
  {
    icon: CheckCircle2,
    title: "Operações que precisam de padrão, histórico e gestão",
    bg: "#D0D6DD",
  },
  {
    icon: TrendingUp,
    title: "Negócios que querem reduzir tempo de resposta e melhorar conversão",
    bg: "#C7CDD6",
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

          <p className="text-white mt-5 text-lg leading-relaxed">
            Quando atendimento é parte da operação e precisa funcionar sem depender de “heróis”
            no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden rounded-2xl">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="min-h-[320px] px-8 py-12 flex flex-col items-center justify-start text-center animate-fade-in"
              style={{
                backgroundColor: item.bg,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Ícone centralizado, maior e sem fundo */}
              <item.icon className="w-14 h-14 text-[#002147] mb-8" />

              <p className="text-[#002147] text-xl md:text-2xl leading-tight font-bold max-w-[240px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;