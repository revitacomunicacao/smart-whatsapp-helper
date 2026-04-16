import { MessagesSquare, Users, Bot, Shield } from "lucide-react";
import bgMesh from "@/assets/bg-mesh-dark.jpg";

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
    title: "Distribuição inteligente e fila organizada (sem \u201Cquem responde?\u201D)",
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
      className="relative py-20 max-md:py-14 md:py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMesh})` }}
      />
      <div className="absolute inset-0 bg-brand-surface/50" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-14 max-w-3xl max-md:mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white max-md:text-balance md:text-4xl lg:text-5xl">
            Estrutura para atender com padrão, velocidade e visibilidade
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Multicanal de verdade, operação no controle e automação sem prometer "milagre".
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {blocks.map((block, index) => (
            <div
              key={block.id}
              id={block.id}
              className="scroll-mt-24 animate-fade-in rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 max-md:flex-col max-md:items-center max-md:text-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15">
                  <block.icon className="h-7 w-7 text-white/80" strokeWidth={1.5} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-white max-md:text-balance md:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    {block.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm md:text-base text-white/60">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex gap-2 max-md:justify-center">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
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
