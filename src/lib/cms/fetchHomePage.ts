import type { CmsHomeApiResponse } from "@/types/cms";
import type { HomePageContent } from "@/types/homeContent";
import { homeContentFallback } from "./homeContentFallback";
import { parseHomePage } from "./parseHomePage";

export const CMS_HOME_API_URL = "https://revitacomunicacao.com.br/admnexa/api/pages/home";

export async function fetchHomePageContent(): Promise<HomePageContent> {
  const response = await fetch(CMS_HOME_API_URL);

  if (!response.ok) {
    throw new Error(`CMS home: HTTP ${response.status}`);
  }

  const json = (await response.json()) as CmsHomeApiResponse;

  if (!json.success || !json.data) {
    throw new Error(json.message ?? "CMS home: resposta inválida");
  }

  return parseHomePage(json.data);
}

export function getHomePageContentWithFallback(error?: unknown): HomePageContent {
  if (error) {
    console.warn("[CMS] Usando conteúdo fallback da home:", error);
  }
  return homeContentFallback;
}
