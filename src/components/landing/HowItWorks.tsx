import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { MultilineText } from "@/lib/cms/formatText";
import type { HomeDemoItem, HomeHowItWorksContent } from "@/types/homeContent";
import { useState } from "react";

type HowItWorksProps = {
  content: HomeHowItWorksContent;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function ZoomOnHover({
  src,
  alt,
  lensSize = 260,
  zoom = 1.65,
  mobileObjectPosition = "max-lg:object-[52%_center]",
}: {
  src: string;
  alt: string;
  lensSize?: number;
  zoom?: number;
  /** Classes de object-position aplicadas apenas abaixo de lg */
  mobileObjectPosition?: string;
}) {
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
        className={`absolute inset-0 h-full w-full object-cover object-center ${mobileObjectPosition}`}
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

function DemoImageLightbox({
  item,
  open,
  onOpenChange,
}: {
  item: HomeDemoItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-[min(calc(100vw-1.5rem),42rem)] gap-3 overflow-hidden border-white/15 bg-[#06152d] p-3 shadow-2xl [&>button]:text-white [&>button]:hover:opacity-100">
        {item && (
          <>
            <DialogTitle className="text-center text-base font-semibold text-white">
              {item.title}
            </DialogTitle>
            <div className="flex max-h-[calc(92vh-4rem)] items-center justify-center overflow-auto">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[calc(92vh-5rem)] w-full object-contain"
              />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function DemoPrintCard({
  item,
  index,
  onMobileZoom,
}: {
  item: HomeDemoItem;
  index: number;
  onMobileZoom: (item: HomeDemoItem) => void;
}) {
  return (
    <div
      className="group relative h-[320px] overflow-hidden rounded-sm max-md:min-h-[240px] md:h-[320px]"
    >
      <ZoomOnHover
        src={item.image}
        alt={item.title}
        mobileObjectPosition={
          index === 0 ? "max-md:object-left md:object-center" : "max-lg:object-[52%_center]"
        }
      />
      <button
        type="button"
        className="absolute inset-x-0 top-0 bottom-14 z-20 cursor-zoom-in md:hidden"
        onClick={() => onMobileZoom(item)}
        aria-label={`Ampliar imagem: ${item.title}`}
      />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 z-30">
        <div className="h-15 w-full bg-[#7A94A2]/80 px-4 py-3 max-md:py-3 md:px-6 md:py-3">
          <p className="text-xl font-semibold leading-tight text-white max-md:text-balance md:text-2xl">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}

const HowItWorks = ({ content }: HowItWorksProps) => {
  const { demo, implantacao } = content;
  const steps = implantacao.steps;
  const [lightboxItem, setLightboxItem] = useState<HomeDemoItem | null>(null);

  return (
    <section id="implantacao" className="relative overflow-hidden">
      {/* Demo section - dark bg */}
      <div className="relative flex min-h-[850px] flex-col py-20 max-md:py-14 max-lg:min-h-0 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat max-lg:bg-[center_26%]"
          style={{ backgroundImage: `url(${demo.backgroundImage})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "rgba(6, 21, 45, 0.72)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/10 max-lg:block"
          aria-hidden="true"
        />
        <div className="relative z-10 flex w-full flex-1 flex-col justify-center">
          <div id="demo" className="scroll-mt-24 w-full">
            <div className="px-4 md:px-6">
              <h2 className="animate-fade-in text-center text-4xl font-bold leading-tight text-white max-md:px-1 max-md:text-balance max-lg:text-[clamp(1.55rem,4.5vw,2.1rem)] md:text-5xl lg:text-6xl">
                {demo.title}
              </h2>
            </div>

            <div className="mt-10 grid w-full grid-cols-1 gap-2 px-4 max-lg:gap-3 md:grid-cols-2 md:gap-3 md:px-6">
              {demo.items.map((item, index) => (
                <DemoPrintCard
                  key={item.title}
                  item={item}
                  index={index}
                  onMobileZoom={setLightboxItem}
                />
              ))}
            </div>

            <DemoImageLightbox
              item={lightboxItem}
              open={lightboxItem !== null}
              onOpenChange={(open) => {
                if (!open) setLightboxItem(null);
              }}
            />
          </div>
        </div>
      </div>

      {/* Implantação section - dark mesh bg */}
      <div className="relative flex min-h-[850px] flex-col py-20 max-md:py-14 max-lg:min-h-0 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat max-lg:bg-[right_24%]"
          style={{ backgroundImage: `url(${implantacao.backgroundImage})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "rgba(6, 21, 45, 0.72)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden max-md:block bg-black/25"
          aria-hidden="true"
        />

        <div className="relative z-10 flex w-full flex-1 flex-col justify-center">
          <div className="mx-auto w-full max-w-5xl px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <span className="animate-fade-in text-sm font-semibold uppercase tracking-wider text-[#7A94A2]">
                {implantacao.label}
              </span>
              <h3 className="animate-fade-in mt-4 text-4xl font-bold leading-tight text-white max-md:text-balance max-lg:text-[clamp(1.5rem,4.2vw,2rem)] md:text-5xl lg:text-6xl">
                {implantacao.title}
              </h3>
              <p
                className="animate-fade-in mx-auto mt-5 w-full max-w-3xl text-lg leading-relaxed text-[#7A94A2] max-lg:text-base max-lg:leading-relaxed md:text-xl"
                style={{ animationDelay: "0.2s" }}
              >
                <MultilineText text={implantacao.description} />
              </p>            </div>

            <div className="mt-10 grid w-full grid-cols-1 gap-8 max-lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                      <img
                        src={step.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-12 w-12 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white max-lg:text-sm">{step.title}</p>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed max-lg:text-[0.8125rem] max-lg:leading-relaxed">{step.description}</p>
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
