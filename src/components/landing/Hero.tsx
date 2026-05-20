import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroTitle } from "@/lib/cms/formatText";
import { splitParagraphs } from "@/lib/cms/normalize";
import type { HomeHeroContent } from "@/types/homeContent";

type HeroProps = {
  content: HomeHeroContent;
};

const Hero = ({ content }: HeroProps) => {
  const descriptionParagraphs = splitParagraphs(content.description);
  const primaryDescription = descriptionParagraphs[0] ?? "";
  const secondaryDescription = descriptionParagraphs.slice(1).join("\n\n");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-8 pb-12 max-md:px-1 max-lg:pt-24 md:pt-10 md:pb-16">
      <div
        role="img"
        aria-label="Painel da Nexa com inbox centralizada e fila de atendimento"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat max-md:bg-[75%_30%] md:max-lg:bg-[right_30%]"
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/70 max-lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full container mx-auto px-4">
        <div className="max-w-4xl mr-auto text-left space-y-8 max-lg:space-y-6 lg:-translate-x-6 xl:-translate-x-10 2xl:-translate-x-14">
          <div className="animate-fade-in">
            <div className="lg:-translate-y-3">
              <Badge
                variant="secondary"
                className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 text-left text-[0.7rem] font-medium leading-snug max-lg:text-[0.68rem] md:px-4 md:py-2 md:text-sm"
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary md:h-4 md:w-4" />
                <span>{content.badge}</span>
              </Badge>
            </div>
          </div>

          <h1
            className="animate-fade-in text-4xl font-bold leading-tight max-md:text-balance max-lg:text-[clamp(1.65rem,5.2vw,2.15rem)] max-lg:leading-snug md:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            <HeroTitle subtitle={content.subtitle} />
          </h1>

          {primaryDescription && (
            <p
              className="max-w-2xl animate-fade-in text-lg text-white/90 max-md:text-balance max-lg:text-base max-lg:leading-relaxed md:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block lg:translate-y-1">{primaryDescription}</span>
            </p>
          )}

          {secondaryDescription && (
            <p
              className="max-w-2xl animate-fade-in text-base font-semibold text-white/80 max-md:text-balance max-lg:text-sm md:text-lg"
              style={{ animationDelay: "0.25s" }}
            >
              {secondaryDescription}
            </p>
          )}

          <div
            className="flex animate-fade-in flex-col justify-start gap-4 max-md:w-full sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="lg:-translate-y-2">
              <Button
                size="lg"
                className="px-8 text-base shadow-none max-md:min-h-12 max-md:w-full max-md:max-w-sm"
                asChild
              >
                <a href={content.button.href}>
                  {content.button.text}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
