import bgMesh from "@/assets/bg-mesh-dark.jpg";

const AboutUs = () => {
  return (
    <section
      id="resolve"
      className="relative scroll-mt-24 py-20 max-md:py-14 md:py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMesh})` }}
      />
      <div className="absolute inset-0 bg-brand-surface/40" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white max-md:text-balance md:text-4xl lg:text-5xl">
            Pare de perder conversa, tempo e oportunidades
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
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
