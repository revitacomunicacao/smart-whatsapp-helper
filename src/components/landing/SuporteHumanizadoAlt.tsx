import { motion } from "framer-motion"
import { ArrowRight, Headphones, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import bgMeshCta from "@/assets/bg-mesh-cta.jpg"

const highlights = [
  { icon: Headphones, label: "Suporte dedicado" },
  { icon: Clock, label: "Resposta ágil" },
  { icon: MessageCircle, label: "Sem burocracia" },
]

const SuporteHumanizadoAlt = () => {
  return (
    <section
      id="suporte"
      className="relative overflow-hidden py-20 max-md:py-14 md:py-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMeshCta})` }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-12 items-center lg:grid-cols-12">
          {/* Left - Text content */}
          <div className="space-y-6 max-md:text-center lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest text-white/60"
            >
              Suporte humanizado
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl font-bold leading-tight text-white max-md:text-balance md:text-5xl"
            >
              <span className="text-[#68767d] md:whitespace-nowrap">Atendimento de verdade,</span>
              <br />
              quando você precisar
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-xl text-base leading-relaxed text-white/75 max-md:text-balance md:text-lg"
            >
              Um suporte próximo e eficiente para garantir tranquilidade na rotina: orientação, acompanhamento e
              respostas claras, sem burocracia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="pt-2"
            >
              <Button
                size="lg"
                className="rounded-full bg-white text-brand-surface hover:bg-white/90 px-8 text-base shadow-glow max-md:mx-auto max-md:min-h-12 max-md:w-full max-md:max-w-sm"
                asChild
              >
                <a href="#implantacao" className="inline-flex items-center justify-center gap-2">
                  Entender como funciona
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 max-md:max-w-sm max-md:mx-auto lg:col-span-5"
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className={[
                  "flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 transition-all hover:bg-white/10 hover:border-white/20",
                  // Sensação de movimento no desktop: cria um “arco” suave na coluna
                  i === 0 ? "lg:-translate-x-2" : i === 1 ? "lg:translate-x-6" : "lg:translate-x-1",
                ].join(" ")}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15">
                  <item.icon className="h-7 w-7 text-white/80" strokeWidth={1.5} />
                </div>
                <span className="text-lg font-medium text-white">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SuporteHumanizadoAlt
