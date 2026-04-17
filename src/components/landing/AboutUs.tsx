import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgMesh from "@/assets/bgabout2.jpeg";

const AboutUs = () => {
  return (
    <section
      id="resolve"
      className="relative scroll-mt-24 overflow-hidden py-20 max-md:py-14 md:py-28 lg:h-[850px] lg:py-0"
    >
      <div
        role="img"
        aria-label="Cenário do atendimento com múltiplos canais e perda de controle"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMesh})` }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-6 text-center lg:ml-auto lg:mr-0 lg:flex lg:h-[850px] lg:max-w-3xl lg:flex-col lg:justify-center lg:text-left">
          <h2
            className="animate-fade-in mx-auto w-full max-w-3xl text-4xl font-bold leading-tight text-white max-md:text-balance md:text-5xl lg:mx-0 lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block lg:translate-x-1 text-[#07244c]">
              Pare de perder conversa,
              <br />
              tempo e oportunidades
            </span>
          </h2>
          <p
            className="animate-fade-in mx-auto w-full max-w-3xl text-lg text-white/80 leading-relaxed md:text-xl lg:mx-0"
            style={{ animationDelay: "0.2s" }}
          >
            Quando o atendimento fica espalhado (celular de atendente, direct, e-mail, web), a empresa
            perde controle: demora, retrabalho, mensagens sem dono e cliente repetindo tudo de novo.
            <br /><br />A Nexa centraliza e organiza para sua equipe atender com padrão e velocidade sem virar bagunça.
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
                <a href="#contato">
                  Quero transformar meu atendimento
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
