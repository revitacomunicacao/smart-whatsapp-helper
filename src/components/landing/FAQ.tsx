import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    <section id="faq" className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respostas objetivas para entender como a Nexa ajuda na prática.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full bg-card rounded-2xl border border-border shadow-card px-6"
          >
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-base md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <div className="space-y-3 text-base leading-relaxed">
                    {item.a.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <p className="pt-1 text-sm font-medium text-foreground">{item.microcopy}</p>
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
