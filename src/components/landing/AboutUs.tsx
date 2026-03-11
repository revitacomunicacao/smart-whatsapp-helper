import aboutTeam from "@/assets/about-team.jpg";

const AboutUs = () => {
  return (
    <section
      id="resolve"
      className="relative py-20 md:py-28 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Pare de perder conversa, tempo e oportunidades
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Quando o atendimento fica espalhado (celular de atendente, direct, e-mail, web), a empresa
              perde controle: demora, retrabalho, mensagens sem dono e cliente repetindo tudo de novo.
              A Nexa centraliza e organiza para sua equipe atender com padrão e velocidade — sem virar bagunça.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutTeam}
                alt="Equipe colaborando em atendimento centralizado"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -inset-4 -z-10 bg-primary/5 rounded-3xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
