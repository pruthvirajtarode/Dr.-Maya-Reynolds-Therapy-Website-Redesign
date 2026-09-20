import { therapist } from "@/data/therapist";

export function ClientPopulations() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-brand-soft)] border-y border-[var(--color-brand-secondary)]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-brand-dark)] leading-tight">
              Who I work with
            </h2>
            <div className="h-px w-24 bg-[var(--color-brand-primary)] mt-6 mx-auto lg:mx-0" />
          </div>
          <div className="lg:w-2/3">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {therapist.populations.map((population, i) => (
                <div 
                  key={i} 
                  className="px-6 py-3 bg-white border border-[var(--color-brand-secondary)]/30 text-[var(--color-brand-primary)] font-medium tracking-wide text-sm rounded-full"
                >
                  {population}
                </div>
              ))}
            </div>
            <p className="mt-10 text-[var(--color-brand-dark)]/70 text-lg font-light leading-relaxed text-center lg:text-left max-w-2xl">
              Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
