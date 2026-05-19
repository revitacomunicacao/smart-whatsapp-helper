export type CmsButtonValue = {
  texto: string;
  link: string;
};

export type CmsField = {
  nome: string;
  identificador: string;
  tipo: string;
  valor: unknown;
};

export type CmsSection = {
  id: number;
  nome: string;
  ordem: number;
  campos: CmsField[];
};

export type CmsPageData = {
  id: number;
  titulo: string;
  slug: string;
  status: string;
  campos: CmsField[];
  secoes: CmsSection[];
};

export type CmsHomeApiResponse = {
  success: boolean;
  data: CmsPageData;
  message: string;
};
