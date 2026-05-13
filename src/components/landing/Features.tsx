import { Monitor, Bot, Zap, BarChart3 } from "lucide-react";
import bgMeshAlt from "@/assets/bg-mesh-dark-alt.jpg";

const items = [
  {
    icon: Monitor,
    title: "Empresas que vendem e atendem por WhatsApp e redes sociais",
  },
  {
    icon: Bot,
    title: "Times com 2+ atendentes e volume crescente",
  },
  {
    icon: Zap,
    title: "Operações que precisam de padrão, histórico e gestão",
  },
  {
    icon: BarChart3,
    title: "Negócios que querem reduzir tempo de resposta e melhorar conversão",
  },
];

const Features = () => {
  return (
    <section
      id="ideal"
      className="relative py-20 max-md:py-14 md:py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat max-lg:bg-[center_18%]"
        style={{ backgroundImage: `url(${bgMeshAlt})` }}
      />
      <div className="absolute inset-0 bg-brand-surface/30" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/15 max-lg:block"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-14 max-w-3xl max-md:mb-10 max-lg:mb-12 max-lg:text-balance">
          <h2 className="text-3xl font-semibold tracking-tight text-white max-md:text-balance max-lg:text-[clamp(1.45rem,4vw,1.85rem)] md:text-4xl lg:text-5xl">
            Ideal para
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80 max-lg:text-base max-lg:leading-relaxed">
            Quando atendimento é parte da operação e precisa funcionar sem depender de "heróis"
            no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex animate-fade-in flex-col items-center text-center gap-5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 shadow-lg">
                <item.icon className="h-9 w-9 text-white/80" strokeWidth={1.5} />
              </div>
              <p className="max-w-[220px] text-base font-medium leading-snug text-white/90 max-lg:max-w-[18rem] max-lg:text-sm max-lg:leading-snug">
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
