import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DescriptionWithBreaks, MultilineText } from "@/lib/cms/formatText";
import type { HomeAboutContent } from "@/types/homeContent";

type AboutUsProps = {
  content: HomeAboutContent;
};

const AboutUs = ({ content }: AboutUsProps) => {
  return (
    <section
      id="resolve"
      className="relative scroll-mt-24 overflow-hidden py-20 max-md:py-14 md:py-28 lg:h-[900px] lg:py-0"
    >
      <div
        role="img"
        aria-label="Cenário do atendimento com múltiplos canais e perda de controle"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat max-lg:bg-[left_32%]"
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/75 max-lg:block"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 lg:pr-0">
        <div className="mx-auto max-w-4xl space-y-6 text-center lg:ml-auto lg:mr-0 lg:-mr-6 lg:flex lg:h-[850px] lg:max-w-xl lg:flex-col lg:justify-center lg:text-left">
          <h2
            className="animate-fade-in mx-auto w-full max-w-3xl text-4xl font-bold leading-tight text-white max-md:text-balance max-lg:text-[clamp(1.55rem,4.8vw,2rem)] md:text-5xl lg:mx-0 lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            <MultilineText
              text={content.title}
              className="block lg:translate-x-1 text-[#7A94A2] lg:text-[#07244c]"
            />
          </h2>
          <p
            className="animate-fade-in mx-auto w-full max-w-3xl text-lg text-white/80 leading-relaxed max-lg:text-base max-lg:leading-relaxed md:text-xl lg:mx-0 lg:max-w-[43rem]"
            style={{ animationDelay: "0.2s" }}
          >
            <DescriptionWithBreaks text={content.description} />
          </p>

          <div
            className="flex animate-fade-in flex-col items-center justify-center gap-4 max-md:w-full lg:items-start lg:justify-start"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="lg:-translate-y-2">
              <Button
                size="lg"
                className="bg-[#08284f] mt-8 px-8 text-base shadow-none max-md:min-h-12 max-md:w-full max-md:max-w-sm"
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

export default AboutUs;
