import demoInbox from "@/assets/demo-inbox.png";
import demoQueue from "@/assets/demo-queue.png";
import demoAutomation from "@/assets/demo-automation.png";
import stepMapping from "@/assets/step-mapping.png";
import stepConfig from "@/assets/step-config.png";
import stepTraining from "@/assets/step-training.png";
import stepTuning from "@/assets/step-tuning.png";

const steps = [
  {
    number: "01",
    image: stepMapping,
    title: "Mapeamento do fluxo de atendimento e vendas",
    description: "Desenhamos o caminho real do seu time (da primeira mensagem à conclusão) para a Nexa virar rotina.",
  },
  {
    number: "02",
    image: stepConfig,
    title: "Configuração de canais, filas e padrões",
    description: "Organização por setores, regras de distribuição e padronização para reduzir retrabalho e tempo de resposta.",
  },
  {
    number: "03",
    image: stepTraining,
    title: "Treinamento do time (atendente + liderança)",
    description: "Treinamento objetivo para quem opera e para quem acompanha indicadores — sem \"depender do mais experiente\".",
  },
  {
    number: "04",
    image: stepTuning,
    title: "Ajustes finos nas primeiras semanas",
    description: "Acompanhamento inicial para estabilizar e deixar o processo redondo com o volume real de mensagens.",
  },
];

const demoItems = [
  { title: "Inbox centralizada", image: demoInbox },
  { title: "Fila e atribuição", image: demoQueue },
  { title: "Automação / triagem", image: demoAutomation },
];

const HowItWorks = () => {
  return (
    <section id="implantacao" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Demo */}
        <div id="demo" className="scroll-mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center">
            Como funciona na prática
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {demoItems.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-4 shadow-card hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 font-medium text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implantação */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Diferencial DuBrasil
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4">
              Nexa funciona porque a implantação é orientada
            </h3>
            <p className="text-lg text-muted-foreground mt-5">
              A DuBrasil entra para garantir que a plataforma vire rotina real — com ajuste fino nas primeiras semanas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <img src={step.image} alt={step.title} className="w-24 h-24 object-contain" />
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-xs font-semibold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">{step.title}</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
