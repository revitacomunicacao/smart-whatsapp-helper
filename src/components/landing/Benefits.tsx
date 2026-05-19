import { MultilineText } from "@/lib/cms/formatText";
import type { HomeBenefitBlock, HomeBenefitsContent } from "@/types/homeContent";

type BenefitsProps = {
  content: HomeBenefitsContent;
};

function BenefitCardDesktop({ block, index }: { block: HomeBenefitBlock; index: number }) {
  return (
    <div
      id={block.id}
      className="scroll-mt-24 animate-fade-in rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 transition-transform hover:-translate-y-0.5"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-6">
        <BenefitIcon icon={block.icon} size="desktop" />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-white">{block.title}</h3>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{block.description}</p>
          <BenefitBullets bullets={block.bullets} className="mt-3 space-y-1.5" itemClassName="flex gap-2" />
        </div>
      </div>
    </div>
  );
}

function BenefitCardMobile({ block, index }: { block: HomeBenefitBlock; index: number }) {
  return (
    <div
      id={`${block.id}-mobile`}
      className="scroll-mt-24 animate-fade-in rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 max-lg:p-5"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <BenefitIcon icon={block.icon} size="mobile" />
        <div>
          <h3 className="text-xl font-semibold text-white text-balance max-lg:text-lg">{block.title}</h3>
          <p className="mt-3 text-white/70 leading-relaxed max-lg:text-sm max-lg:leading-relaxed">
            {block.description}
          </p>
          <BenefitBullets
            bullets={block.bullets}
            className="mt-4 space-y-2"
            itemClassName="flex gap-2 justify-center"
          />
        </div>
      </div>
    </div>
  );
}

function BenefitIcon({ icon, size }: { icon: string; size: "desktop" | "mobile" }) {
  const desktop = size === "desktop";
  return (
    <div
      className={
        desktop
          ? "flex h-20 w-20 shrink-0 items-center justify-center"
          : "flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center"
      }
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className={desktop ? "h-20 w-20 object-contain" : "h-[5.25rem] w-[5.25rem] object-contain"}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function BenefitBullets({
  bullets,
  className,
  itemClassName,
}: {
  bullets: string[];
  className: string;
  itemClassName: string;
}) {
  return (
    <ul className={`text-sm text-white/60 ${className}`}>
      {bullets.map((b) => (
        <li key={b} className={itemClassName}>
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

const Benefits = ({ content }: BenefitsProps) => {
  return (
    <section className="relative py-20 max-md:py-14 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat max-lg:bg-[center_22%]"
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-brand-surface/50" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/10 max-lg:block"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-14 mx-auto max-w-4xl text-center max-md:mb-10 max-lg:mb-12">
          <h2 className="animate-fade-in text-4xl font-bold leading-tight text-white max-md:text-balance max-lg:text-[clamp(1.6rem,4.5vw,2.25rem)] md:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p
            className="animate-fade-in mx-auto mt-5 w-full max-w-3xl text-lg leading-relaxed text-[#7A94A2] max-lg:text-base max-lg:leading-relaxed md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            <MultilineText text={content.description} />
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          {content.blocks.map((block, index) => (
            <BenefitCardDesktop key={block.id} block={block} index={index} />
          ))}
        </div>

        <div className="lg:hidden grid gap-6">
          {content.blocks.map((block, index) => (
            <BenefitCardMobile key={block.id} block={block} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
