import { useEffect, useState } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <MessageCircle className="h-5 w-5 mr-2" />
        Falar com especialista
      </Button>
    </div>
  );
};

export default ContactFloat;
