import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              IA Disponível 24h por dia
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Seu Agente de IA que{" "}
              <span className="text-gradient">atende, agenda e vende</span>{" "}
              pelo WhatsApp
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Automatize seu atendimento com inteligência artificial. O DuBrasil Nexa 
              responde seus clientes, agenda consultas e fecha vendas 24 horas por dia, 
              7 dias por semana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="gradient-primary shadow-glow text-base px-8" asChild>
                <a href="#contato">
                  Comece Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="#como-funciona">
                  <Play className="mr-2 w-5 h-5" />
                  Veja Como Funciona
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">+500 empresas</span>
                <span className="text-muted-foreground"> já automatizaram seu atendimento</span>
              </div>
            </div>
          </div>

          {/* Right Content - Chat Mockup */}
          <div className="relative lg:pl-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-card rounded-[2.5rem] p-3 shadow-2xl shadow-primary/10 border border-border max-w-sm mx-auto">
                <div className="bg-muted rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-foreground/5 px-6 py-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/40 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/40 rounded-sm" />
                    </div>
                  </div>

                  {/* Chat Header */}
                  <div className="bg-primary/10 px-4 py-3 flex items-center gap-3 border-b border-border">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">DuBrasil Nexa</p>
                      <p className="text-xs text-primary">Online agora</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 min-h-[300px] bg-background">
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Olá! Gostaria de agendar uma consulta para amanhã.</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="gradient-primary rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-primary-foreground">
                          Olá! 😊 Claro, tenho horários disponíveis amanhã às 9h, 14h e 16h. Qual prefere?
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Às 14h seria perfeito!</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="gradient-primary rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-primary-foreground">
                          Perfeito! ✅ Agendado para amanhã às 14h. Enviarei um lembrete!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-3 shadow-lg border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                  <span className="text-xs font-medium">Agendado!</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-lg border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium">IA Ativa 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
