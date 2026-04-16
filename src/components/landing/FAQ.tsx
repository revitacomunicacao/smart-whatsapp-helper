import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import bgMesh from "@/assets/bg-mesh-dark.jpg";

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
    <section id="faq" className="relative py-20 max-md:py-14 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMesh})` }}
      />
      <div className="absolute inset-0 bg-brand-surface/50" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center max-md:mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white max-md:text-balance md:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Respostas objetivas para entender como a Nexa ajuda na prática.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 shadow-card max-md:px-3 md:px-6"
          >
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`faq-${idx}`} className="border-white/10">
                <AccordionTrigger className="text-left text-base text-white max-md:min-h-14 max-md:py-4 max-md:text-[0.95rem] md:text-lg hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  <div className="space-y-3 text-base leading-relaxed">
                    {item.a.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <p className="pt-1 text-sm font-medium text-white/90">{item.microcopy}</p>
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
