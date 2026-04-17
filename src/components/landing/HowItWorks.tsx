import demoInbox from "@/assets/demo-inbox.jpeg";
import demoQueue from "@/assets/demo-queue.jpeg";
import demoAutomation from "@/assets/demo-automation.jpeg";
import bgMeshAlt from "@/assets/bg-mesh-dark-alt.jpg";
import bgMeshDemo from "@/assets/bghow.jpeg";
import { ClipboardList, Settings, GraduationCap, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Mapeamento do fluxo de atendimento e vendas",
    description:
      "Desenhamos o caminho real do seu time (da primeira mensagem à conclusão) para a Nexa virar rotina.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configuração de canais, filas e padrões",
    description:
      "Organização por setores, regras de distribuição e padronização para reduzir retrabalho e tempo de resposta.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Treinamento do time (atendente + liderança)",
    description:
      'Treinamento objetivo para quem opera e para quem acompanha indicadores sem "depender do mais experiente".',
  },
  {
    number: "04",
    icon: SlidersHorizontal,
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

function ZoomOnHover({ src, alt, lensSize = 260, zoom = 1.65 }: { src: string; alt: string; lensSize?: number; zoom?: number }) {
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
        const nw = natural.w;
        const nh = natural.h;
        // object-cover: imagem preenche o card (mesma escala do <img>)
        const scale = Math.max(rect.width / nw, rect.height / nh);
        const renderedW = nw * scale;
        const renderedH = nh * scale;
        const offsetX = (rect.width - renderedW) / 2;
        const offsetY = (rect.height - renderedH) / 2;
        const nx = clamp((px - offsetX) / scale, 0, nw);
        const ny = clamp((py - offsetY) / scale, 0, nh);
        setPos({ x: clamp(px, 0, rect.width), y: clamp(py, 0, rect.height) });
        // Inteiros em px evitam suavização borrada no background da lupa
        const bgSizeW = Math.round(nw * zoom);
        const bgSizeH = Math.round(nh * zoom);
        const bgPosX = Math.round(-(nx * zoom - lensSize / 2));
        const bgPosY = Math.round(-(ny * zoom - lensSize / 2));
        setBg({ sizeW: bgSizeW, sizeH: bgSizeH, posX: bgPosX, posY: bgPosY });
      }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
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
          "border border-white/60 shadow-none",
          "pointer-events-none transition-opacity duration-150",
          active ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          left: Math.round(pos.x),
          top: Math.round(pos.y),
          width: lensSize,
          height: lensSize,
          transform: "translate3d(-50%, -50%, 0)",
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
    <section id="implantacao" className="relative overflow-hidden">
      {/* Demo section - dark bg */}
      <div className="relative flex min-h-[850px] flex-col py-20 max-md:py-14 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgMeshDemo})` }}
        />
        <div className="relative z-10 flex w-full flex-1 flex-col justify-center">
          <div id="demo" className="scroll-mt-24 w-full">
            <div className="px-4 md:px-6">
              <h2 className="animate-fade-in text-center text-4xl font-bold leading-tight text-white max-md:px-1 max-md:text-balance md:text-5xl lg:text-6xl">
                Como funciona na prática
              </h2>
            </div>

            <div className="mt-10 grid w-full grid-cols-1 gap-2 px-4 md:grid-cols-3 md:gap-3 md:px-6">
              {demoItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative h-[280px] overflow-hidden rounded-sm max-md:min-h-[220px] md:h-[260px]"
                >
                  <ZoomOnHover src={item.image} alt={item.title} />
                  <div className="absolute left-0 right-0 bottom-0 z-30">
                    <div className="h-15 w-full bg-[#7A94A2]/80 px-4 py-3 max-md:py-3 md:px-6 md:py-3">
                      <p className="text-xl font-semibold leading-tight text-white max-md:text-balance md:text-2xl">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Implantação section - dark mesh bg */}
      <div className="relative flex min-h-[850px] flex-col py-20 max-md:py-14 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgMeshAlt})` }}
        />

        <div className="relative z-10 flex w-full flex-1 flex-col justify-center">
          <div className="mx-auto w-full max-w-5xl px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <span className="animate-fade-in text-sm font-semibold uppercase tracking-wider text-[#7A94A2]">
                Diferencial DuBrasil
              </span>
              <h3 className="animate-fade-in mt-4 text-4xl font-bold leading-tight text-white max-md:text-balance md:text-5xl lg:text-6xl">
                Nexa funciona porque a implantação é orientada
              </h3>
              <p
                className="animate-fade-in mx-auto mt-5 w-full max-w-3xl text-lg leading-relaxed text-[#7A94A2] md:text-xl"
                style={{ animationDelay: "0.2s" }}
              >
                A DuBrasil entra para garantir que a plataforma vire rotina real
                <br />
                com ajuste fino nas primeiras semanas.
              </p>
            </div>

            <div className="mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={[
                    "flex flex-col items-center text-center gap-4",
                    // Sensação de “arco” no desktop: pontas mais altas, meio um pouco mais baixo
                    index === 0 || index === steps.length - 1 ? "lg:-translate-y-6" : "lg:translate-y-4",
                  ].join(" ")}
                >
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7A94A2] border border-white/10 shadow-lg">
                      <step.icon className="h-9 w-9 text-white/80" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{step.title}</p>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
