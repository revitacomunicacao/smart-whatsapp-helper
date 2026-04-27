import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/ilustra_bloco04.jpg.jpeg";

const WHATSAPP_NUMBER = "5534996367430";

function buildWhatsappLink() {
  const message =
    "Oi! Quero centralizar meu atendimento com a DuBrasil Nexa.\n" +
    "Canais: ( ) WhatsApp ( ) Instagram ( ) Webchat ( ) E-mail ( ) outros\n" +
    "Nº de atendentes: ___ | Objetivo: ( ) vendas ( ) suporte ( ) ambos";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-8 pb-12 max-md:px-1 md:pt-10 md:pb-16">
      <div
        role="img"
        aria-label="Painel da Nexa com inbox centralizada e fila de atendimento"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      <div className="relative z-10 w-full container mx-auto px-4">
        <div className="max-w-4xl mr-auto text-left space-y-8 lg:-translate-x-6 xl:-translate-x-10 2xl:-translate-x-14">
          <div className="animate-fade-in">
            <div className="lg:-translate-y-3">
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-left text-[0.7rem] font-medium leading-snug md:px-4 md:py-2 md:text-sm"
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary md:h-4 md:w-4" />
                <span>RESPOSTA RÁPIDA • IMPLANTAÇÃO ORIENTADA • TIME NO CONTROLE</span>
              </Badge>
            </div>
          </div>

          <h1
            className="animate-fade-in text-4xl font-bold leading-tight max-md:text-balance md:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block lg:translate-x-1">
              <span className="text-[#7A94A2]">DuBrasil Nexa</span>
              <span className="mt-3 block text-2xl font-medium text-primary max-md:text-balance md:mt-3 md:text-3xl lg:text-3xl">
                <span className="block">
                  Atendimento{" "}
                  <span className="font-extrabold text-white">multicanal para vender e</span>
                </span>
                <span className="block">
                  <span className="font-extrabold text-white">atender</span>
                  <span> com mais controle e agilidade</span>
                </span>
              </span>
            </span>
          </h1>

          <p
            className="max-w-2xl animate-fade-in text-lg text-white max-md:text-balance md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="block lg:translate-y-1">
              Centralize conversas em um só lugar, distribua atendimentos <br />por equipe e acelere
              respostas com automações mantendo <br />histórico, padrão e visibilidade da operação.
            </span>
          </p>

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
                <a href="#contato">
                  Quero centralizar meu atendimento
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
