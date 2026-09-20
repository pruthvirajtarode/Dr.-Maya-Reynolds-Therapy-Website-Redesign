import { therapist } from "@/data/therapist";

export function Expertise() {
  return (
    <section className="py-24 bg-[var(--color-brand-primary)] text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-sm font-medium tracking-widest uppercase mb-16 text-white/70">
          Areas of Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-8">
          {therapist.specialties.map((specialty, i) => (
            <div key={i} className="flex items-center">
              <span className="text-3xl md:text-5xl font-serif">{specialty}</span>
              {i < therapist.specialties.length - 1 && (
                <span className="hidden md:inline-block ml-16 text-white/30 text-3xl font-light">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
