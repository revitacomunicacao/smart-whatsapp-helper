import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import bgMeshAlt from "@/assets/bg-mesh-dark-alt.jpg";
import simbolo from "@/assets/simbolo-dubrasil.png";

const WHATSAPP_NUMBER = "5534996367430";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappBaseUrl = useMemo(() => `https://wa.me/${WHATSAPP_NUMBER}?text=`, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const message =
      `Olá! Gostaria de falar com um especialista da DuBrasil Nexa.\n\n` +
      `Nome: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `WhatsApp: ${data.phone}\n\n` +
      `Mensagem:\n${data.message}`;

    const url = `${whatsappBaseUrl}${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    toast({
      title: "Abrindo o WhatsApp…",
      description: "A mensagem foi preparada com os dados do formulário.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <section
      className="relative py-24 max-md:py-16 overflow-hidden"
      style={{ backgroundImage: `url(${bgMeshAlt})`, backgroundSize: "cover", backgroundPosition: "center" }}
      id="contato"
    >
      <div className="absolute inset-0 bg-brand-surface/50" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Textos */}
          <div className="lg:col-span-6">
            <img
              src={simbolo}
              alt="DuBrasil"
              className="w-20 h-20 object-contain opacity-30 mb-6"
            />

            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-white max-md:text-balance md:text-5xl lg:text-6xl">
              Pronto para <span className="text-primary">transformar</span> seu atendimento?
            </h2>

            <p className="mt-5 text-2xl font-medium leading-tight text-white/95 max-md:text-balance md:text-3xl">
              Vamos construir{" "}
              <span className="text-primary drop-shadow-[0_0_22px_hsl(var(--primary)/0.35)]">
                essa história
              </span>
              .
            </p>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 shadow-card max-md:p-5 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                  Nome completo
                </label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  {...register("name")}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                  WhatsApp
                </label>
                <Input
                  id="phone"
                  placeholder="(11) 99999-9999"
                  {...register("phone")}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                  rows={4}
                  {...register("message")}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full min-h-12 bg-white text-brand-surface hover:bg-white/90 font-semibold max-md:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactForm;
