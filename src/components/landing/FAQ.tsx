import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import bgMesh from "@/assets/ilustra-faq.jpeg";

const faqs = [
  {
    q: "O que a Nexa resolve dentro da empresa?",
    a: [
      "A Nexa organiza o atendimento e o processo comercial, eliminando perda de informações, falta de acompanhamento e desorganização nos contatos com clientes.",
      "Ela transforma conversas soltas em processos estruturados.",
    ],
    microcopy: "Organização que gera previsibilidade.",
  },
  {
    q: "Como a Nexa melhora a gestão comercial?",
    a: [
      "Por meio de funis estruturados, controle de etapas, acompanhamento de oportunidades e visão clara da carteira de clientes.",
      "A gestão deixa de ser baseada em percepção e passa a ser baseada em dados.",
    ],
    microcopy: "Gestão com clareza e controle.",
  },
  {
    q: "Como a Nexa utiliza inteligência na operação?",
    a: [
      "A Nexa automatiza tarefas, organiza fluxos e gera indicadores que apoiam decisões estratégicas.",
      "Isso permite identificar gargalos, oportunidades e padrões de comportamento da carteira.",
    ],
    microcopy: "Informação organizada se transforma em inteligência.",
  },
  {
    q: "A Nexa integra com outros setores e sistemas?",
    a: [
      "Sim. Ela integra atendimento, comercial, contratos e pós-venda, criando continuidade na jornada do cliente.",
      "A informação não fica isolada, ela circula de forma estruturada.",
    ],
    microcopy: "Integração que conecta setores e fortalece resultados.",
  },
  {
    q: "Qual é o diferencial competitivo da Nexa?",
    a: [
      "O diferencial não está apenas na ferramenta, mas na estrutura que entregamos.",
      "Realizamos diagnóstico, implantação personalizada e acompanhamento estratégico contínuo, garantindo que a empresa utilize a solução com método e direcionamento.",
    ],
    microcopy: "Tecnologia com estratégia. Estrutura com acompanhamento.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative flex min-h-[850px] flex-col overflow-hidden py-20 max-md:py-14 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMesh})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "rgba(6, 21, 45, 0.72)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center max-md:mb-8">
            <h2 className="animate-fade-in text-4xl font-bold leading-tight text-white max-md:text-balance md:text-5xl lg:text-6xl">
              Perguntas frequentes
            </h2>
            <p
              className="animate-fade-in mx-auto mt-5 w-full max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              Respostas objetivas para entender como a Nexa ajuda na prática.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full max-w-4xl rounded-2xl border border-white/25 bg-[#08284f]/40 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-md max-md:px-4 md:px-10"
          >
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`faq-${idx}`} className="border-white/20">
                <AccordionTrigger className="text-left text-base text-white max-md:min-h-14 max-md:py-4 max-md:text-[0.95rem] md:text-lg hover:no-underline hover:text-white [&>svg]:text-white/70">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/85">
                  <div className="space-y-3 text-base leading-relaxed">
                    {item.a.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <p className="pt-1 text-sm font-medium text-white">{item.microcopy}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
