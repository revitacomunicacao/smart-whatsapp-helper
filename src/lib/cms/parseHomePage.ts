import type { CmsButtonValue, CmsPageData, CmsSection } from "@/types/cms";
import type {
  HomeAboutContent,
  HomeBenefitBlock,
  HomeBenefitsContent,
  HomeFaqContent,
  HomeFaqItem,
  HomeHeroContent,
  HomeHowItWorksContent,
  HomePageContent,
  HomeSuporteContent,
} from "@/types/homeContent";
import { normalizeCmsLink, splitListItems, splitParagraphs } from "./normalize";

const BENEFIT_BLOCK_IDS = ["multicanal", "operacao", "automacao", "whatsapp-api"];

function getField<T>(section: CmsSection, identificador: string): T | undefined {
  const field = section.campos.find((c) => c.identificador === identificador);
  return field?.valor as T | undefined;
}

function getButton(section: CmsSection, identificador: string) {
  const value = getField<CmsButtonValue>(section, identificador);
  if (!value?.texto) return { text: "", href: "#" };
  return {
    text: value.texto,
    href: normalizeCmsLink(value.link),
  };
}

function getText(section: CmsSection, identificador: string): string {
  const value = getField<string>(section, identificador);
  return value ?? "";
}

function getPhoto(section: CmsSection, identificador: string): string {
  return getText(section, identificador);
}

function parseFaqItems(
  items: Array<{ pergunta?: string; resposta?: string }> | undefined,
): HomeFaqItem[] {
  if (!items?.length) return [];

  return items.map((item) => {
    const parts = splitParagraphs(item.resposta ?? "");
    const microcopy = parts.length > 1 ? (parts.pop() ?? "") : "";
    return {
      q: item.pergunta ?? "",
      a: parts,
      microcopy,
    };
  });
}

function parseBenefitBlocks(
  items: Array<{ titulo?: string; descricao?: string; itens?: string; icone?: string }> | undefined,
): HomeBenefitBlock[] {
  if (!items?.length) return [];

  return items.map((item, index) => ({
    id: BENEFIT_BLOCK_IDS[index] ?? `block-${index}`,
    icon: item.icone ?? "",
    title: item.titulo ?? "",
    description: item.descricao ?? "",
    bullets: splitListItems(item.itens ?? ""),
  }));
}

export function parseHomePage(data: CmsPageData): HomePageContent {
  const sections = [...data.secoes].sort((a, b) => a.ordem - b.ordem);
  const [heroSec, aboutSec, benefitsSec, demoSec, implantacaoSec, suporteSec, faqSec] = sections;

  if (!heroSec || !aboutSec || !benefitsSec || !demoSec || !implantacaoSec || !suporteSec || !faqSec) {
    throw new Error("Estrutura da página home incompleta no CMS");
  }

  const hero: HomeHeroContent = {
    badge: getText(heroSec, "titulo"),
    subtitle: getText(heroSec, "subtitulo"),
    description: getText(heroSec, "descricao"),
    button: getButton(heroSec, "botao"),
    backgroundImage: getPhoto(heroSec, "imagem-de-fundo"),
  };

  const about: HomeAboutContent = {
    title: getText(aboutSec, "titulo-1"),
    description: getText(aboutSec, "descricao-1"),
    button: getButton(aboutSec, "botao-1"),
    backgroundImage: getPhoto(aboutSec, "imagem-de-fundo-1"),
  };

  const benefits: HomeBenefitsContent = {
    title: getText(benefitsSec, "titulo-2"),
    description: getText(benefitsSec, "descricao-2"),
    backgroundImage: getPhoto(benefitsSec, "imagem-de-fundo-2"),
    blocks: parseBenefitBlocks(getField(benefitsSec, "estrutura")),
  };

  const prints = getField<Array<{ imagem?: string; descricao?: string }>>(demoSec, "prints") ?? [];
  const diferenciais =
    getField<Array<{ icone?: string; titulo?: string; descricao?: string }>>(implantacaoSec, "diferenciais") ??
    [];

  const howItWorks: HomeHowItWorksContent = {
    demo: {
      title: getText(demoSec, "titulo-3"),
      backgroundImage: getPhoto(demoSec, "imagem-de-fundo-3"),
      items: prints.map((item) => ({
        title: item.descricao ?? "",
        image: item.imagem ?? "",
      })),
    },
    implantacao: {
      label: getText(implantacaoSec, "titulo-4"),
      title: getText(implantacaoSec, "subtitulo-1"),
      description: getText(implantacaoSec, "descricao-3"),
      backgroundImage: getPhoto(implantacaoSec, "imagem-de-fundo-4"),
      steps: diferenciais.map((item, index) => ({
        number: String(index + 1).padStart(2, "0"),
        icon: item.icone ?? "",
        title: item.titulo ?? "",
        description: item.descricao ?? "",
      })),
    },
  };

  const etapasSuporte =
    getField<Array<{ icone?: string; titulo?: string }>>(suporteSec, "etapas-suporte") ?? [];

  const suporte: HomeSuporteContent = {
    label: getText(suporteSec, "titulo-5"),
    subtitle: getText(suporteSec, "subtitulo-2"),
    description: getText(suporteSec, "descricao-4"),
    button: getButton(suporteSec, "botao-2"),
    backgroundImage: getPhoto(suporteSec, "imagem-de-fundo-5"),
    highlights: etapasSuporte.map((item) => ({
      icon: item.icone ?? "",
      label: item.titulo ?? "",
    })),
  };

  const faq: HomeFaqContent = {
    title: getText(faqSec, "titulo-6"),
    description: getText(faqSec, "descricao-5"),
    backgroundImage: getPhoto(faqSec, "imagem-de-fundo-6"),
    items: parseFaqItems(getField(faqSec, "perguntas-e-respostas")),
  };

  return { hero, about, benefits, howItWorks, suporte, faq };
}
