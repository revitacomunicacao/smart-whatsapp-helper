// src/components/SuporteHumanizadoAlt.tsx
import { motion } from "framer-motion"
import { ArrowRight, Headset, MessageCircle, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import imgatendimento from "@/assets/Atendimento de verdade.jpg.jpeg"

const SuporteHumanizadoAlt = () => {
  return (
    <section id="suporte" className="section-padding bg-[#fbfbfc] py-10 overflow-hidden">
      {/* Background decor leve, seguindo identidade dark premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.20) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />
      </div>

      <div className="relative container mx-auto">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          {/* Coluna texto */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="max-w-xl"
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Suporte humanizado
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                Atendimento de verdade, quando você precisar
              </h2>

              <p className="mt-4 text-primary text-base md:text-lg leading-relaxed">
                Um suporte próximo e eficiente para garantir tranquilidade na rotina: orientação, acompanhamento e
                respostas claras, sem burocracia.
              </p>

              {/* Mini highlights (simples/premium) */}
              <div className="mt-7 grid gap-3">
                {[
                  {
                    icon: Headset,
                    title: "Acompanhamento próximo",
                    desc: "Atendimento com contexto e continuidade, do início ao fim.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Comunicação clara",
                    desc: "Respostas objetivas, sem ruído e com foco em solução.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Mais confiança",
                    desc: "Rotina estável com suporte pronto para ajudar quando necessário.",
                  },
                ].map((x, i) => {
                  const Icon = x.icon
                  return (
                    <motion.div
                      key={x.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.45 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-primary font-semibold">{x.title}</div>
                          <div className="text-primary text-sm leading-relaxed mt-1">{x.desc}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button variant="secondary" className="rounded-full">
                  Falar com suporte <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <button className="text-sm text-primary transition-colors inline-flex items-center gap-2">
                  Entender como funciona <Sparkles className="h-4 w-4 text-primary" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Coluna imagem */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur"
            >
              <div className="relative h-[320px] md:h-[420px] overflow-hidden">
                <img
                  src={imgatendimento}
                  alt="Suporte humanizado"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                {/* badge */}
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Suporte próximo e eficiente
                </div>

                {/* card flutuante */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur p-5">
                    <div className="text-white font-semibold">Tranquilidade na operação</div>
                    <div className="mt-1 text-white/60 text-sm leading-relaxed">
                      Atendimento objetivo, acompanhamento e orientação para sua equipe seguir com confiança.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuporteHumanizadoAlt
