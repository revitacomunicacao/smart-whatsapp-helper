import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5534996367430";

function buildWhatsappLink() {
  const message = "Oi! Quero centralizar meu atendimento com a DuBrasil Nexa.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const ParallaxCTA = () => {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] bg-white/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            Deixe a Nexa cuidar de tudo.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Quer centralizar seu atendimento e ganhar controle sem travar a operação?
            Chame no WhatsApp e a gente direciona o melhor desenho para o seu time.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              asChild
            >
              <a href="#contato">
                Quero centralizar meu atendimento
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-white/10 hover:bg-white/30 font-semibold px-8"
              asChild
            >
              <a href="#contato">Falar com especialista</a>
            </Button>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            Sem compromisso • Direcionamento rápido • Atendimento humano
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
