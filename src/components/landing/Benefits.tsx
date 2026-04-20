import bgMesh from "@/assets/bgBenefits.jpeg";
import Icon01 from "@/assets/01.png";
import Icon02 from "@/assets/02.png";
import Icon03 from "@/assets/03.png";
import Icon04 from "@/assets/04.png";

const blocks = [
  {
    id: "multicanal",
    icon: Icon01,
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
    icon: Icon02,
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
    icon: Icon03,
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
    icon: Icon04,
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
        <div className="mb-14 mx-auto max-w-4xl text-center max-md:mb-10">
          <h2 className="animate-fade-in text-4xl font-bold leading-tight text-white max-md:text-balance md:text-5xl lg:text-6xl">
            Estrutura para atender com padrão, velocidade e visibilidade
          </h2>
          <p
            className="animate-fade-in mx-auto mt-5 w-full max-w-3xl text-lg leading-relaxed text-[#7A94A2] md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Multicanal de verdade, operação no controle e<br /> automação sem prometer "milagre".
          </p>
        </div>

        {/* Desktop: grid 2x2 */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          {blocks.map((block, index) => (
            <div
              key={block.id}
              id={block.id}
              className="scroll-mt-24 animate-fade-in rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 transition-transform hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center">
                  <img
                    src={block.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-20 w-20 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{block.description}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/60">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
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

        {/* Mobile: simple stack */}
        <div className="lg:hidden grid gap-6">
          {blocks.map((block, index) => (
            <div
              key={block.id}
              id={`${block.id}-mobile`}
              className="scroll-mt-24 animate-fade-in rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center">
                  <img
                    src={block.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-[5.25rem] w-[5.25rem] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white text-balance">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    {block.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/60">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex gap-2 justify-center">
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
