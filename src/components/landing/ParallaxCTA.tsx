import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, Zap } from "lucide-react";

const ParallaxCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / window.innerHeight;
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = Math.min(Math.max(scrollY * 50, -100), 100);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect - using primary blue */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      />

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"
          style={{ transform: `translate(-50%, -50%) translateY(${parallaxOffset * 0.2}px)` }}
        />
      </div>

      {/* Floating icons with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[10%] text-white/20"
          style={{ transform: `translateY(${parallaxOffset * -0.8}px)` }}
        >
          <MessageSquare className="w-16 h-16 animate-float" />
        </div>
        <div
          className="absolute top-[25%] right-[15%] text-white/15"
          style={{ transform: `translateY(${parallaxOffset * -0.6}px)` }}
        >
          <Sparkles className="w-12 h-12 animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div
          className="absolute bottom-[20%] left-[20%] text-white/10"
          style={{ transform: `translateY(${parallaxOffset * -0.4}px)` }}
        >
          <Zap className="w-20 h-20 animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div
          className="absolute bottom-[30%] right-[10%] text-white/20"
          style={{ transform: `translateY(${parallaxOffset * -0.7}px)` }}
        >
          <MessageSquare className="w-10 h-10 animate-float" style={{ animationDelay: "0.5s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className="max-w-4xl mx-auto"
          style={{ transform: `translateY(${parallaxOffset * -0.2}px)` }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Dê adeus às respostas
            <span className="block mt-2 text-white/90">robóticas e engessadas</span>
          </h2>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">Context Driven AI</span>
            <span className="text-white/80">— IA baseada em contextos</span>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa IA adequa as respostas a cada contexto da conversa, conduzindo atendimentos, 
            agendamentos e vendas com total naturalidade — 
            <strong className="text-white"> como se fosse uma pessoa de verdade.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contato">Teste Grátis por 14 dias</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a href="#como-funciona">Veja uma Demo</a>
            </Button>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            ✨ Seus clientes serão melhor atendidos e ficarão muito mais satisfeitos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
