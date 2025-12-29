import { Badge } from "@/components/ui/badge";
import aboutIllustration from "@/assets/logo-white.png";

const AboutUs = () => {
  return (
    <section
      id="sobre"
      className="relative py-20 md:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-70 gradient-primary" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-primary/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="flex justify-center rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20 bg-white/5">
              <img
                src={aboutIllustration}
                alt="Ilustração"
                className="py-10"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">

            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
              Excelência em Soluções para Gestão de Controle Empresarial
            </h2>

            <div className="mt-10 space-y-6 text-white/85">
              <p className="text-base md:text-lg leading-relaxed">
                Somos especialistas em sistemas de ponto e controle de acesso, com
                mais de 25 anos de experiência.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Nosso diferencial é ter suporte humanizado, na implantação
                eficiente e no atendimento personalizado, garantindo que sua
                empresa tenha solução sob medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
