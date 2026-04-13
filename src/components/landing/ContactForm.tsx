import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import nexaBG from "@/assets/nexabg.jpeg"

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

    // Abre o WhatsApp com a mensagem pronta (sem envio por e-mail).
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
      className="relative bg-cover bg-center py-24 max-md:py-16"
      style={{ backgroundImage: `url(${nexaBG})` }}
      id="contato"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-black/20 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="mb-5 mt-2 text-3xl font-bold text-white max-md:text-balance md:text-4xl lg:text-5xl">
            Pronto para <span className="text-primary">transformar</span> seu atendimento?
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-white/85 max-md:mb-8 max-md:text-base max-md:text-balance">
            Preencha o formulário e nossa equipe entrará em contato para mostrar como o DuBrasil Nexa pode ajudar seu
            negócio.
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card max-md:p-5 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Nome completo
                </label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                  WhatsApp
                </label>
                <Input
                  id="phone"
                  placeholder="(11) 99999-9999"
                  {...register("phone")}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                  rows={4}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full min-h-12 shadow-glow max-md:text-base"
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
    </section>
  );
};

export default ContactForm;
