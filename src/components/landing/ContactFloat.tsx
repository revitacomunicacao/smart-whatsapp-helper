import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M19.11 17.43c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.35-1.62-1.51-1.89-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8c.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.57.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32ZM16.01 3.2c-7.05 0-12.8 5.74-12.8 12.8 0 2.25.6 4.45 1.74 6.38L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.24 1.62h.01c7.05 0 12.8-5.74 12.8-12.8S23.06 3.2 16.01 3.2Zm0 23.32h-.01c-2.01 0-3.98-.54-5.7-1.57l-.41-.24-3.9 1.02 1.04-3.8-.27-.39A10.6 10.6 0 0 1 5.41 16c0-5.85 4.75-10.6 10.6-10.6S26.6 10.15 26.6 16s-4.75 10.52-10.59 10.52Z" />
    </svg>
  );
}

function scrollToContato() {
  const section = document.getElementById("contato");
  section?.scrollIntoView({ behavior: "smooth", block: "start" });

  // Tenta focar o primeiro campo do formulário para acelerar a ação.
  window.setTimeout(() => {
    const nameInput = document.getElementById("name") as HTMLInputElement | null;
    nameInput?.focus();
  }, 450);
}

const ContactFloat = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Exibe após o usuário sair do topo (evita poluir o hero).
      setShow(window.scrollY > 200);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="h-10 w-10 rounded-full bg-background/80 backdrop-blur border-border shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>

      <Button
        type="button"
        className="rounded-full h-12 px-5 shadow-glow gradient-primary"
        onClick={scrollToContato}
        aria-label="Ir para o formulário de contato"
        title="Falar com especialista"
      >
        <WhatsAppIcon className="h-5 w-5 mr-2" />
        Falar com especialista
      </Button>
    </div>
  );
};

export default ContactFloat;
