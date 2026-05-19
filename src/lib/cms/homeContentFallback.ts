import type { HomePageContent } from "@/types/homeContent";

/** Conteúdo espelhado do CMS para primeiro paint e fallback em caso de falha na API. */
export const homeContentFallback: HomePageContent = {
  hero: {
    badge: "RESPOSTA RÁPIDA • IMPLANTAÇÃO ORIENTADA • TIME NO CONTROLE",
    subtitle: "A Nexa organiza,\r\ncentraliza e aplica\r\ninteligência ao\r\natendimento.",
    description:
      "Plataforma multicanais com foco em WhatsApp, agentes de IA, automações de fluxos e integração entre Atendimento, CRM e ERP, sem abrir mão do humanizado.\r\n\r\nMais do que atender, a Nexa conecta processos, setores e experiência do cliente.",
    button: { text: "Quero centralizar meu atendimento", href: "#contato" },
    backgroundImage:
      "https://revitacomunicacao.com.br/admnexa/uploads/images/img_fd22de1034354c9a249648eb.jpeg",
  },
  about: {
    title: "Pare de perder conversa,\r\ntempo e oportunidades",
    description:
      "Quando o atendimento fica espalhado (celular de atendente, direct, e-mail, web), a empresa perde controle: demora, retrabalho, mensagens sem dono e cliente repetindo tudo de novo.\r\n\r\nA Nexa centraliza e organiza para sua equipe atender com padrão e velocidade sem virar bagunça.",
    button: { text: "Quero transformar meu atendimento", href: "#contato" },
    backgroundImage:
      "https://revitacomunicacao.com.br/admnexa/uploads/images/img_c59c1699bc49fbaa8c3fbe9a.jpeg",
  },
  benefits: {
    title: "Estrutura para atender com padrão, velocidade e visibilidade",
    description: 'Multicanal de verdade, operação no controle e\r\nautomação sem prometer "milagre".',
    backgroundImage:
      "https://revitacomunicacao.com.br/admnexa/uploads/images/img_3bba9fa0110fb1ab9619bb7a.jpeg",
    blocks: [
      {
        id: "multicanal",
        icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_4a2a408d1ef8ef6d8be3469b.png",
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
        icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_24493cbf19cc49e53b359ab8.png",
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
        icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_0664a1c461baca699e68b64c.png",
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
        icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_2063f6e0f7df01dd64e515ec.png",
        title: "WhatsApp em escala com mais segurança",
        description:
          "Para operação profissional, o ideal é trabalhar com estrutura de atendimento escalável e boas práticas incluindo possibilidade de API oficial, multiatendimento no mesmo número e conformidade de uso.",
        bullets: [
          "Vários atendentes no mesmo número",
          "Automação com templates e regras da plataforma",
          "Boas práticas de segurança e LGPD (processo e acesso)",
        ],
      },
    ],
  },
  howItWorks: {
    demo: {
      title: "Como funciona na prática",
      backgroundImage:
        "https://revitacomunicacao.com.br/admnexa/uploads/images/img_4b4b42f20cf78b1b8723b261.jpeg",
      items: [
        {
          image: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_be2cb5d7c3ef8add5f1b54a1.jpeg",
          title: "Inbox centralizada",
        },
        {
          image: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_cc3603fe62a473240eeae51e.jpeg",
          title: "Estatísticas dos atendimentos",
        },
        {
          image: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_704990ed554ef59987241a78.jpeg",
          title: "Dados em tempo real",
        },
        {
          image: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_6ea8e52b482a320829292a7f.png",
          title: "Chatbot",
        },
      ],
    },
    implantacao: {
      label: "Diferencial DuBrasil",
      title: "Nexa funciona porque a implantação é orientada",
      description:
        "A DuBrasil entra para garantir que a plataforma vire rotina real\r\ncom ajuste fino nas primeiras semanas.",
      backgroundImage:
        "https://revitacomunicacao.com.br/admnexa/uploads/images/img_ae1d8e73030db4de363cf53b.jpg",
      steps: [
        {
          number: "01",
          icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_37f0d8365db31457c69b98b0.png",
          title: "Mapeamento do fluxo de atendimento e vendas",
          description:
            "Desenhamos o caminho real do seu time (da primeira mensagem à conclusão) para a Nexa virar rotina.",
        },
        {
          number: "02",
          icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_96152deaa8c1013c6090da3a.png",
          title: "Configuração de canais, filas e padrões",
          description:
            "Organização por setores, regras de distribuição e padronização para reduzir retrabalho e tempo de resposta.",
        },
        {
          number: "03",
          icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_11ef542ce43dac448fa0cafd.png",
          title: "Treinamento do time (atendente + liderança)",
          description:
            'Treinamento objetivo para quem opera e para quem acompanha indicadores sem "depender do mais experiente".',
        },
        {
          number: "04",
          icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_a0c82cc20d7af606c294e1cc.png",
          title: "Ajustes finos nas primeiras semanas",
          description:
            "Acompanhamento inicial para estabilizar e deixar o processo redondo com o volume real de mensagens.",
        },
      ],
    },
  },
  suporte: {
    label: "Suporte humanizado",
    subtitle: "Atendimento\r\nde verdade,\r\nquando você precisar",
    description:
      "Um suporte próximo e eficiente para garantir tranquilidade na rotina: orientação, acompanhamento e respostas claras, sem burocracia.",
    button: { text: "Entender como funciona", href: "#implantacao" },
    backgroundImage:
      "https://revitacomunicacao.com.br/admnexa/uploads/images/img_9ea1e482817809fc5fd9366c.jpg",
    highlights: [
      {
        icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_484f905648a0e93e7bfefe6d.png",
        label: "Suporte dedicado",
      },
      {
        icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_46072aea355740ff164fad0b.png",
        label: "Resposta ágil",
      },
      {
        icon: "https://revitacomunicacao.com.br/admnexa/uploads/images/img_d194d1b7f5bfb1d5d0a3ce45.png",
        label: "Sem burocracia",
      },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    description: "Respostas objetivas para entender como a Nexa ajuda na prática.",
    backgroundImage:
      "https://revitacomunicacao.com.br/admnexa/uploads/images/img_d88568638e5c2d4afb3b6900.jpeg",
    items: [
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
    ],
  },
};
