import demoInbox from "@/assets/demo-inbox.jpeg";
import demoQueue from "@/assets/demo-queue.jpeg";
import demoAutomation from "@/assets/demo-automation.jpeg";
import stepMapping from "@/assets/step-mapping.png";
import stepConfig from "@/assets/step-config.png";
import stepTraining from "@/assets/step-training.png";
import stepTuning from "@/assets/step-tuning.png";
import { useState } from "react";

const steps = [
  {
    number: "01",
    image: stepMapping,
    title: "Mapeamento do fluxo de atendimento e vendas",
    description:
      "Desenhamos o caminho real do seu time (da primeira mensagem à conclusão) para a Nexa virar rotina.",
  },
  {
    number: "02",
    image: stepConfig,
    title: "Configuração de canais, filas e padrões",
    description:
      "Organização por setores, regras de distribuição e padronização para reduzir retrabalho e tempo de resposta.",
  },
  {
    number: "03",
    image: stepTraining,
    title: "Treinamento do time (atendente + liderança)",
    description:
      'Treinamento objetivo para quem opera e para quem acompanha indicadores sem "depender do mais experiente".',
  },
  {
    number: "04",
    image: stepTuning,
    title: "Ajustes finos nas primeiras semanas",
    description:
      "Acompanhamento inicial para estabilizar e deixar o processo redondo com o volume real de mensagens.",
  },
];

const demoItems = [
  { title: "Inbox centralizada", image: demoInbox },
  { title: "Estatísticas dos atendimentos", image: demoQueue },
  { title: "Dados em tempo real", image: demoAutomation },
];

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function ZoomOnHover({ src, alt, lensSize = 260, zoom = 2.6 }: { src: string; alt: string; lensSize?: number; zoom?: number }) {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [bg, setBg] = useState<{ sizeW: number; sizeH: number; posX: number; posY: number } | null>(null);

  return (
    <div
      className="absolute inset-0 z-0"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={(e) => {
        if (!natural) return;
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;

        // object-contain: calcula o retângulo real da imagem renderizada dentro do container
        const scale = Math.min(rect.width / natural.w, rect.height / natural.h);
        const renderedW = natural.w * scale;
        const renderedH = natural.h * scale;
        const offsetX = (rect.width - renderedW) / 2;
        const offsetY = (rect.height - renderedH) / 2;

        const imgX = clamp(px - offsetX, 0, renderedW);
        const imgY = clamp(py - offsetY, 0, renderedH);

        // Centro da lente: segue o mouse, mas não deixa sair da área da imagem
        const lensCenterX = clamp(px, offsetX, offsetX + renderedW);
        const lensCenterY = clamp(py, offsetY, offsetY + renderedH);

        setPos({
          x: lensCenterX,
          y: lensCenterY,
        });

        // Background da lente (em pixels) para ampliar corretamente os cantos.
        const bgSizeW = renderedW * zoom;
        const bgSizeH = renderedH * zoom;
        const bgPosX = -(imgX * zoom - lensSize / 2);
        const bgPosY = -(imgY * zoom - lensSize / 2);
        setBg({ sizeW: bgSizeW, sizeH: bgSizeH, posX: bgPosX, posY: bgPosY });
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.naturalWidth && img.naturalHeight) {
            setNatural({ w: img.naturalWidth, h: img.naturalHeight });
          }
        }}
      />

      <div
        className={[
          "hidden md:block absolute rounded-full",
          "border border-white/70 shadow-2xl",
          "pointer-events-none transition-opacity duration-150",
          active ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          left: pos.x,
          top: pos.y,
          width: lensSize,
          height: lensSize,
          transform: "translate(-50%, -50%)",
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: bg ? `${bg.sizeW}px ${bg.sizeH}px` : "0px 0px",
          backgroundPosition: bg ? `${bg.posX}px ${bg.posY}px` : "0px 0px",
          zIndex: 20,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

const HowItWorks = () => {
  return (
    <section id="implantacao" className="py-20 md:py-28 bg-[#ededed]">
      <div className="w-full">
        {/* Demo */}
        <div id="demo" className="scroll-mt-24">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center">
              Como funciona na prática
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 w-full px-4 md:px-6">
            {demoItems.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-sm group h-[360px] md:h-[260px]"
              >
                <ZoomOnHover src={item.image} alt={item.title} />

                <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />

                <div className="absolute left-0 right-0 bottom-0 z-30">
                  <div className="h-15 w-full bg-[#002147]/80 px-5 py-4 md:px-6 md:py-3">
                    <p className="text-white text-xl md:text-2xl font-semibold leading-tight">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implantação */}
        <div className="mt-20 max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Diferencial DuBrasil
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4">
              Nexa funciona porque a implantação é orientada
            </h3>
            <p className="text-lg text-muted-foreground mt-5">
              A DuBrasil entra para garantir que a plataforma vire rotina real com ajuste fino nas
              primeiras semanas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-[#002147] border border-border rounded-xl p-6 md:p-8 shadow-card animate-fade-in"
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
                    <p className="text-lg font-semibold text-white">{step.title}</p>
                    <p className="mt-2 text-white/70 leading-relaxed">{step.description}</p>
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