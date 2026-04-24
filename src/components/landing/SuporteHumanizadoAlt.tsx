import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import bgMeshCta from "@/assets/bg-mesh-cta.jpg"
import iconSuporte from "@/assets/suporte.png"
import iconRespostaAgil from "@/assets/resposta agil.png"
import iconSemBurocracia from "@/assets/sem burocracia.png"

const highlights = [
  { icon: iconSuporte, label: "Suporte dedicado" },
  { icon: iconRespostaAgil, label: "Resposta ágil" },
  { icon: iconSemBurocracia, label: "Sem burocracia" },
]

const SuporteHumanizadoAlt = () => {
  return (
    <section
      id="suporte"
      className="relative flex min-h-[850px] items-center overflow-hidden py-10 max-md:py-8 md:py-12"
    >
      <div
        className="absolute inset-0 -scale-x-100 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMeshCta})` }}
      />

      <div className="container relative z-10 mx-auto w-full px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left - Text content */}
          <div className="space-y-6 max-md:text-center lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-wider text-[#7A94A2]"
            >
              Suporte humanizado
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl font-bold leading-tight text-white max-md:text-balance md:text-5xl lg:text-6xl"
            >
              <span className="text-[#7A94A2]">
                Atendimento
                <br />
                de verdade,
              </span>
              <br />
              quando você precisar
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl text-lg leading-relaxed text-[#7A94A2] max-md:mx-auto max-md:text-balance md:text-xl lg:mx-0"
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
                className="rounded-full px-8 text-base shadow-none max-md:mx-auto max-md:min-h-12 max-md:w-full max-md:max-w-sm"
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
            className="space-y-8 max-md:max-w-sm max-md:mx-auto lg:col-span-5"
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className={[
                  "flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 transition-all hover:bg-white/10 hover:border-white/20",
                  i === 0 ? "lg:-translate-x-2" : i === 1 ? "lg:translate-x-6" : "lg:translate-x-1",
                ].join(" ")}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#08284f] border border-white/20">
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
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
