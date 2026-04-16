import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import bgMeshCta from "@/assets/bg-mesh-cta.jpg"

const SuporteHumanizadoAlt = () => {
  return (
    <section
      id="suporte"
      className="relative flex min-h-[min(70vh,600px)] max-md:min-h-[50vh] items-center justify-center overflow-hidden py-20 max-md:py-14 md:py-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMeshCta})` }}
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-6 px-4 text-center max-md:space-y-5 md:space-y-8">
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
          Atendimento de verdade, quando você precisar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 max-md:text-balance md:text-lg"
        >
          Um suporte próximo e eficiente para garantir tranquilidade na rotina: orientação, acompanhamento e
          respostas claras, sem burocracia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2 max-md:w-full"
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
    </section>
  )
}

export default SuporteHumanizadoAlt
