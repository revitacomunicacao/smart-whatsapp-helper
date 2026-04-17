import bgMesh from "@/assets/bgabout.jpeg";

const AboutUs = () => {
  return (
    <section
      id="resolve"
      className="relative scroll-mt-24 overflow-hidden py-20 max-md:py-14 md:py-28 lg:h-[800px] lg:py-0"
    >
      <div
        role="img"
        aria-label="Cenário do atendimento com múltiplos canais e perda de controle"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMesh})` }}
      />
      <div className="absolute inset-0 bg-brand-surface/50" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 lg:px-2">
        <div className="mx-auto max-w-4xl space-y-6 text-center lg:ml-auto lg:mr-0 lg:flex lg:h-[800px] lg:max-w-3xl lg:flex-col lg:justify-center lg:text-left">
          <h2 className="animate-fade-in mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-[#07244c] max-md:text-balance md:text-4xl lg:mr-0 lg:text-5xl">
            Pare de perder conversa,
            <br />
            tempo e oportunidades
          </h2>
          <p
            className="animate-fade-in mx-auto max-w-3xl text-lg text-white/80 leading-relaxed md:text-xl lg:mr-0"
            style={{ animationDelay: "0.1s" }}
          >
            Quando o atendimento fica espalhado (celular de atendente, direct, e-mail, web), a empresa
            perde controle: demora, retrabalho, mensagens sem dono e cliente repetindo tudo de novo.
            A Nexa centraliza e organiza para sua equipe atender com padrão e velocidade sem virar bagunça.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
