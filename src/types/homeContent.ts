export type CmsButton = {
  text: string;
  href: string;
};

export type HomeHeroContent = {
  badge: string;
  subtitle: string;
  description: string;
  button: CmsButton;
  backgroundImage: string;
};

export type HomeAboutContent = {
  title: string;
  description: string;
  button: CmsButton;
  backgroundImage: string;
};

export type HomeBenefitBlock = {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
};

export type HomeBenefitsContent = {
  title: string;
  description: string;
  backgroundImage: string;
  blocks: HomeBenefitBlock[];
};

export type HomeDemoItem = {
  title: string;
  image: string;
};

export type HomeImplantacaoStep = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

export type HomeHowItWorksContent = {
  demo: {
    title: string;
    backgroundImage: string;
    items: HomeDemoItem[];
  };
  implantacao: {
    label: string;
    title: string;
    description: string;
    backgroundImage: string;
    steps: HomeImplantacaoStep[];
  };
};

export type HomeSuporteHighlight = {
  icon: string;
  label: string;
};

export type HomeSuporteContent = {
  label: string;
  subtitle: string;
  description: string;
  button: CmsButton;
  backgroundImage: string;
  highlights: HomeSuporteHighlight[];
};

export type HomeFaqItem = {
  q: string;
  a: string[];
  microcopy: string;
};

export type HomeFaqContent = {
  title: string;
  description: string;
  backgroundImage: string;
  items: HomeFaqItem[];
};

export type HomePageContent = {
  hero: HomeHeroContent;
  about: HomeAboutContent;
  benefits: HomeBenefitsContent;
  howItWorks: HomeHowItWorksContent;
  suporte: HomeSuporteContent;
  faq: HomeFaqContent;
};
