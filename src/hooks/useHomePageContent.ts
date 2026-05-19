import { useQuery } from "@tanstack/react-query";
import { fetchHomePageContent, getHomePageContentWithFallback } from "@/lib/cms/fetchHomePage";
import { homeContentFallback } from "@/lib/cms/homeContentFallback";

export function useHomePageContent() {
  return useQuery({
    queryKey: ["cms", "home"],
    queryFn: fetchHomePageContent,
    placeholderData: homeContentFallback,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
}

export function useHomePageContentResolved() {
  const query = useHomePageContent();
  const content = query.data ?? getHomePageContentWithFallback(query.error);
  return { ...query, content };
}
