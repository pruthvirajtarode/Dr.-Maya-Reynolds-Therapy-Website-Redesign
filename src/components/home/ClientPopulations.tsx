import { therapist } from "@/data/therapist";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function ClientPopulations() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-brand-soft)] border-y border-[var(--color-brand-secondary)]/20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
          <FadeIn direction="right" className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-brand-dark)] leading-tight">
              Who I work with
            </h2>
            <div className="h-px w-24 bg-[var(--color-brand-primary)] mt-6 mx-auto lg:mx-0" />
          </FadeIn>
          
          <div className="lg:w-2/3">
            <StaggerContainer delay={0.2} className="flex flex-wrap justify-center lg:justify-start gap-4">
              {therapist.populations.map((population, i) => (
                <StaggerItem key={i}>
                  <div className="px-6 py-3 bg-white border border-[var(--color-brand-secondary)]/30 text-[var(--color-brand-primary)] font-medium tracking-wide text-sm rounded-full transition-colors hover:bg-[var(--color-brand-primary)] hover:text-white cursor-default">
                    {population}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <FadeIn delay={0.6} direction="up" className="mt-10">
              <p className="text-[var(--color-brand-dark)]/70 text-lg font-light leading-relaxed text-center lg:text-left max-w-2xl">
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
