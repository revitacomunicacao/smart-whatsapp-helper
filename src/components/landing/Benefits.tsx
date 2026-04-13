import { MessagesSquare, Users, Bot, Shield } from "lucide-react";
import benefitsBG from "@/assets/nexa - Atender com padrao.jpeg"

const blocks = [
  {
    id: "multicanal",
    icon: MessagesSquare,
    title: "Atenda seus clientes onde eles estão em um único painel",
    description:
      "Reúna canais como WhatsApp e redes sociais em uma inbox centralizada, com histórico por cliente e visão do que está acontecendo em tempo real.",
    bullets: [
      "Conversas organizadas por cliente e canal",
      "Histórico completo e contexto para o atendente",
      "Atendimento mais rápido, com menos idas e vindas",
    ],
  },
  {
    id: "operacao",
    icon: Users,
    title: "Distribuição inteligente e fila organizada (sem “quem responde?”)",
    description:
      "Estruture departamentos/setores e distribua atendimentos para manter fluidez, padronização e produtividade especialmente quando o volume cresce.",
    bullets: [
      "Organização por times/assuntos",
      "Transferência/assunção/conclusão de atendimentos",
      "Painéis e visão de trabalho (gestão do dia)",
    ],
  },
  {
    id: "automacao",
    icon: Bot,
    title: "Automação para acelerar e humano quando importa",
    description:
      "Use chatbots/automação para perguntas frequentes, triagem e respostas iniciais, mantendo sua equipe focada no que realmente exige decisão humana.",
    bullets: [
      "Respostas rápidas 24/7 para dúvidas comuns",
      "Qualificação e direcionamento por assunto/setor",
      "Integrações e automações via webhooks quando necessário",
    ],
  },
  {
    id: "whatsapp-api",
    icon: Shield,
    title: "WhatsApp em escala com mais segurança",
    description:
      "Para operação profissional, o ideal é trabalhar com estrutura de atendimento escalável e boas práticas incluindo possibilidade de API oficial, multiatendimento no mesmo número e conformidade de uso.",
    bullets: [
      "Vários atendentes no mesmo número",
      "Automação com templates e regras da plataforma",
      "Boas práticas de segurança e LGPD (processo e acesso)",
    ],
  },
];

const Benefits = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 max-md:py-14 md:py-28"
      style={{ backgroundImage: `url(${benefitsBG})` }}
    >

      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-3xl max-md:mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white max-md:text-balance md:text-4xl lg:text-5xl">
            Estrutura para atender com padrão, velocidade e visibilidade
          </h2>
          <p className="mt-5 text-lg text-white">
            Multicanal de verdade, operação no controle e automação sem prometer “milagre”.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {blocks.map((block, index) => (
            <div
              key={block.id}
              id={block.id}
              className="scroll-mt-24 animate-fade-in rounded-2xl border border-border bg-card/70 p-6 shadow-card md:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 max-md:flex-col max-md:items-stretch max-md:gap-3 md:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 max-md:mx-auto">
                  <block.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="min-w-0 flex-1 max-md:text-center">
                  <h3 className="text-xl font-semibold text-foreground max-md:text-balance md:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {block.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm md:text-base text-muted-foreground">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
