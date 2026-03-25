import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/dubrasil-solucoes.jpg.jpeg";

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
    <section className="relative min-h-screen flex items-center pt-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="flex flex-col md:flex-row gap-10 mx-auto px-4 relative z-10">
        {/* Text Content - Centered */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            RESPOSTA RÁPIDA • IMPLANTAÇÃO ORIENTADA • TIME NO CONTROLE
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            DuBrasil Nexa
            <span className="block mt-3 text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-medium">
              Atendimento multicanal para vender e atender com mais controle e agilidade
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Centralize conversas em um só lugar, distribua atendimentos por equipe e acelere
            respostas com automações mantendo histórico, padrão e visibilidade da operação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gradient-primary shadow-glow text-base px-8" asChild>
              <a href="#contato">
                Quero centralizar meu atendimento
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Hero Image - Apple Style large product shot */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative max-w-xl">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/15 border border-border/50">
              <img
                src={heroDashboard}
                alt="Painel da Nexa inbox centralizada com fila de atendimento"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 -z-10 bg-primary/5 rounded-3xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
