import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // Produção será servida em: https://revitacomunicacao.com.br/projetos/nexa/
  // Você pode sobrescrever via variável: VITE_BASE
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE || (mode === "production" ? "/projetos/nexa/" : "/");

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
