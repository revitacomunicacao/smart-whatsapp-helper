import { CheckCircle2, Target, Users, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Empresas que vendem e atendem por WhatsApp e redes sociais",
    bg: "#f0f1f2",
  },
  {
    icon: Users,
    title: "Times com 2+ atendentes e volume crescente",
    bg: "#eaeced",
  },
  {
    icon: CheckCircle2,
    title: "Operações que precisam de padrão, histórico e gestão",
    bg: "#e4e6e8",
  },
  {
    icon: TrendingUp,
    title: "Negócios que querem reduzir tempo de resposta e melhorar conversão",
    bg: "#dee1e2",
  },
];

const Features = () => {
  return (
    <section id="ideal" className="bg-brand-surface py-20 text-white max-md:py-14 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-3xl max-md:mb-10">
          <h2 className="text-3xl font-semibold tracking-tight max-md:text-balance md:text-4xl lg:text-5xl">
            Ideal para
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Quando atendimento é parte da operação e precisa funcionar sem depender de “heróis”
            no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden rounded-2xl">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex min-h-[260px] animate-fade-in flex-col items-center justify-start px-5 py-8 text-center md:min-h-[320px] md:px-8 md:py-12"
              style={{
                backgroundColor: item.bg,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Ícone centralizado, maior e sem fundo */}
              <item.icon className="mb-8 h-14 w-14 text-primary" />

              <p className="max-w-[min(100%,240px)] text-xl font-bold leading-tight text-primary max-md:text-balance md:text-2xl">
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