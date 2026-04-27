// src/components/VideoCarousel.tsx
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import banner from "@/assets/fullbanner04.jpeg"
import fullbanner02 from "@/assets/bgBanner.jpeg"

type CarouselTextPart = {
  text: string
  /** Palavra(s)-chave em cor de destaque */
  emphasize?: boolean
}

interface VideoSlide {
  id: number
  videoUrl: string // VÍDEO ou IMAGEM
  title: CarouselTextPart[]
  subtitle: CarouselTextPart[]
}

const isVideoUrl = (url: string) => {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
}

const slides: VideoSlide[] = [
  {
    id: 1,
    videoUrl: fullbanner02,
    title: [
      { text: "Automatize\n" },
      { text: "seus Processos", emphasize: true },
    ],
    subtitle: [
      { text: "Mais " },
      { text: "produtividade", emphasize: true },
      { text: " e menos " },
      { text: "trabalho manual", emphasize: true },
    ],
  },
  {
    id: 2,
    videoUrl: banner,
    title: [
      { text: "Decisões\n" },
      { text: "Baseadas em Dados", emphasize: true },
    ],
    subtitle: [
      { text: "Relatórios e " },
      { text: "dashboards", emphasize: true },
      { text: " em " },
      { text: "tempo real", emphasize: true },
    ],
  },
]

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const pointerDownX = useRef<number | null>(null)
  const pointerDownY = useRef<number | null>(null)
  const isPointerDown = useRef(false)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrentSlide(index)

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return
      if (index === currentSlide && isPlaying) {
        video.play().catch(() => { })
      } else {
        video.pause()
      }
    })
  }, [currentSlide, isPlaying])

  useEffect(() => {
    if (!isPlaying) return
    const current = slides[currentSlide]
    const durationMs = isVideoUrl(current.videoUrl) ? 8000 : 6000

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, durationMs)

    return () => clearTimeout(timeout)
  }, [isPlaying, currentSlide])

  const togglePlay = () => setIsPlaying((v) => !v)

  function renderCarouselLine(parts: CarouselTextPart[], variant: "title" | "subtitle") {
    return parts.map((part, i) => {
      const isTitle = variant === "title"
      const base =
        isTitle
          ? "text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)]"
          : "text-white/90 [text-shadow:0_1px_18px_rgba(0,0,0,0.45)]"
      const emphasized = isTitle
        ? "font-extrabold tracking-tight text-primary drop-shadow-[0_0_24px_hsl(var(--primary)/0.45)]"
        : "font-semibold text-white not-italic [text-shadow:0_1px_18px_rgba(0,0,0,0.45)]"
      return (
        <span key={i} className={part.emphasize ? emphasized : base}>
          {part.text}
        </span>
      )
    })
  }

  const onPointerDown = (clientX: number, clientY: number) => {
    pointerDownX.current = clientX
    pointerDownY.current = clientY
    isPointerDown.current = true
  }

  const onPointerMove = (clientX: number, clientY: number) => {
    if (!isPointerDown.current || pointerDownX.current == null || pointerDownY.current == null)
      return

    const dx = clientX - pointerDownX.current
    const dy = clientY - pointerDownY.current

    // se o gesto for mais vertical, não interferir (permite scroll)
    if (Math.abs(dy) > Math.abs(dx)) return
  }

  const onPointerUp = (clientX: number, clientY: number) => {
    if (!isPointerDown.current || pointerDownX.current == null || pointerDownY.current == null) {
      isPointerDown.current = false
      return
    }

    const dx = clientX - pointerDownX.current
    const dy = clientY - pointerDownY.current

    isPointerDown.current = false
    pointerDownX.current = null
    pointerDownY.current = null

    if (Math.abs(dy) > Math.abs(dx)) return

    const THRESHOLD = 60
    if (dx <= -THRESHOLD) nextSlide()
    if (dx >= THRESHOLD) prevSlide()
  }

  return (
    <section
      className="mt-12 relative h-[56vh] w-full overflow-hidden max-md:mt-16 max-md:pt-0 md:pt-16 max-md:max-h-[720px] max-md:min-h-[320px] md:h-screen"
      style={{ maxWidth: "100vw" }}
    >
      {/* Swipe layer (evita overflow horizontal) */}
      <div
        className="absolute inset-0 z-20 overflow-hidden"
        style={{
          touchAction: "pan-y",
          maxWidth: "100vw",
        }}
        onTouchStart={(e) => {
          const t = e.touches[0]
          onPointerDown(t.clientX, t.clientY)
        }}
        onTouchMove={(e) => {
          const t = e.touches[0]
          onPointerMove(t.clientX, t.clientY)
        }}
        onTouchEnd={(e) => {
          const t = e.changedTouches[0]
          onPointerUp(t.clientX, t.clientY)
        }}
        onMouseDown={(e) => onPointerDown(e.clientX, e.clientY)}
        onMouseMove={(e) => {
          if (!isPointerDown.current) return
          onPointerMove(e.clientX, e.clientY)
        }}
        onMouseUp={(e) => onPointerUp(e.clientX, e.clientY)}
        onMouseLeave={(e) => {
          if (!isPointerDown.current) return
          onPointerUp(e.clientX, e.clientY)
        }}
        aria-hidden="true"
      />

      {/* Slides */}
      {slides.map((slide, index) => {
        const isVideo = isVideoUrl(slide.videoUrl)

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            style={{ width: "100%", maxWidth: "100vw" }}
          >
            {isVideo ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="absolute inset-0 z-0 w-full h-full object-cover"
                src={slide.videoUrl}
                muted
                loop
                playsInline
              />
            ) : (
              <>
                {(videoRefs.current[index] = null)}
                <img
                  src={slide.videoUrl}
                  alt={slide.title.map((p) => p.text).join("")}
                  className="absolute inset-0 z-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </>
            )}

            {/* Gradiente para legibilidade do texto (escuro na esquerda, some até metade) */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(6,37,76,0.92) 0%, rgba(6,37,76,0.78) 50%, rgba(6,37,76,0.60) 60%, rgba(6,37,76,0.0) 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-30 flex h-full items-center overflow-hidden">
              <div className="container mx-auto max-w-full px-6 max-md:px-4 max-md:pb-16">
                <div className="max-w-3xl text-left pointer-events-auto lg:max-w-5xl 2xl:translate-x-6">
                  <h1
                    className={`whitespace-pre-line font-display text-4xl font-extrabold leading-[1.08] tracking-tight max-md:text-balance md:text-6xl lg:text-8xl mb-4 md:mb-6 transition-all duration-700 ${index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                      }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    {renderCarouselLine(slide.title, "title")}
                  </h1>

                  <p
                    className={`font-display text-xl font-medium leading-relaxed tracking-wide max-md:text-balance md:text-4xl mb-6 md:mb-10 transition-all duration-700 ${index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                      }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    {renderCarouselLine(slide.subtitle, "subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Bottom Controls */}
      <div className="pointer-events-auto absolute bottom-4 left-1/2 z-40 flex max-md:max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center gap-4 max-md:px-1 md:bottom-8 md:gap-6 max-md:pb-[env(safe-area-inset-bottom,0px)]">
        <button
          type="button"
          onClick={prevSlide}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm transition-all hover:bg-primary-foreground/20 md:h-10 md:w-10"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-5 w-5 text-primary-foreground" />
        </button>

        <button
          type="button"
          onClick={togglePlay}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm transition-all hover:bg-primary-foreground/20 md:h-10 md:w-10"
          aria-label={isPlaying ? "Pausar" : "Reproduzir"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-primary-foreground" />
          ) : (
            <Play className="ml-0.5 h-4 w-4 text-primary-foreground" />
          )}
        </button>

        <div className="flex items-center gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full md:min-h-0 md:min-w-0"
              aria-label={`Ir para slide ${index + 1}`}
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "w-8 bg-accent"
                  : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                  }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm transition-all hover:bg-primary-foreground/20 md:h-10 md:w-10"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-5 w-5 text-primary-foreground" />
        </button>
      </div>

    </section>
  )
}

export default VideoCarousel
