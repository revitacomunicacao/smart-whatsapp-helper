import { MessageCircle, Instagram, Linkedin, Youtube } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produto: [
      { label: "Funcionalidades", href: "#contato" },
      { label: "Como Funciona", href: "#contato" },
      { label: "Preços", href: "#contato" },
      { label: "FAQ", href: "#contato" },
      { label: "Sobre nós", href: "#contato" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#contato" },
      { label: "Blog", href: "#contato" },
      { label: "Carreiras", href: "#contato" },
      { label: "Contato", href: "#contato" },
    ],
    legal: [
      { label: "Termos de Uso", href: "#contato" },
      { label: "Política de Privacidade", href: "#contato" },
      { label: "LGPD", href: "#contato" },
    ],
  };

  const socialLinks = [
    { icon: MessageCircle, href: "#contato", label: "WhatsApp" },
    { icon: Instagram, href: "#contato", label: "Instagram" },
    { icon: Linkedin, href: "#contato", label: "LinkedIn" },
    { icon: Youtube, href: "#contato", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoWhite} alt="DuBrasil Nexa" className="h-12 w-auto" />
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              CRM para WhatsApp que aprende a cada conversa. Combine agentes de IA, 
              atendimento humano e um CRM poderoso para escalar seu negócio.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Solução</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} DuBrasil Nexa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
