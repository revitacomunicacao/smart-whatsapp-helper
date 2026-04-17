import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoHeader from "@/assets/logo-dubrasil-nexaX.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "O que resolve", href: "#resolve" },
    { label: "Multicanal", href: "#multicanal" },
    { label: "Implantação", href: "#implantacao" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex min-h-[60px] items-center justify-between py-2 md:min-h-20 md:py-0">
          {/* Logo — dimensões nativas do PNG (219×60) */}
          <a href="#" className="flex shrink-0 items-center">
            <img
              src={logoHeader}
              alt="DuBrasil Nexa"
              width={219}
              height={60}
              decoding="async"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="shadow-glow text-base" asChild>
              <a href="#contato">Transforme o meu atendimento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label="Abrir ou fechar menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="max-h-[min(75vh,calc(100dvh-5rem))] overflow-y-auto border-t border-border py-4 animate-fade-in md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 border-t border-border pt-4">
                <Button size="sm" className="h-11 w-full text-base" asChild>
                  <a href="#contato" onClick={() => setIsOpen(false)}>
                    Transforme o meu atendimento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
