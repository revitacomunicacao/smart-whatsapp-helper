import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { HomeFaqContent } from "@/types/homeContent";

type FAQProps = {
  content: HomeFaqContent;
};

const FAQ = ({ content }: FAQProps) => {
  return (
    <section id="faq" className="relative flex min-h-[850px] flex-col overflow-hidden py-20 max-md:py-14 max-lg:min-h-0 max-lg:py-16 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat max-lg:bg-[center_24%]"
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(6, 21, 45, 0.72)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/10 max-lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center max-md:mb-8">
            <h2 className="animate-fade-in text-4xl font-bold leading-tight text-white max-md:text-balance max-lg:text-[clamp(1.55rem,4.5vw,2.1rem)] md:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p
              className="animate-fade-in mx-auto mt-5 w-full max-w-3xl text-lg leading-relaxed text-white/90 max-lg:text-base max-lg:leading-relaxed md:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              {content.description}
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full max-w-4xl rounded-2xl border border-white/25 bg-[#08284f]/40 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-md max-md:px-4 max-lg:px-4 max-lg:py-3 md:px-10"
          >
            {content.items.map((item, idx) => (
              <AccordionItem key={item.q} value={`faq-${idx}`} className="border-white/20">
                <AccordionTrigger className="text-left text-base text-white max-md:min-h-14 max-md:py-4 max-md:text-[0.95rem] max-lg:py-3 max-lg:text-[0.95rem] md:text-lg hover:no-underline hover:text-white [&>svg]:text-white/70">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/85 max-lg:text-sm">
                  <div className="space-y-3 text-base leading-relaxed max-lg:space-y-2 max-lg:text-sm max-lg:leading-relaxed">
                    {item.a.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {item.microcopy && (
                      <p className="pt-1 text-sm font-medium text-white">{item.microcopy}</p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
