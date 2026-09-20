import { therapist } from "@/data/therapist";

export function Methodology() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-sm font-medium tracking-widest text-[var(--color-brand-primary)] uppercase mb-4">CLINICAL APPROACH</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-dark)] leading-tight mb-8">
                Evidence-based methods with depth.
              </h3>
              <p className="text-[var(--color-brand-dark)]/70 font-light leading-relaxed">
                I integrate several approaches to help you understand both the emotional and physiological sides of what you're experiencing. My approach is paced carefully, with an emphasis on safety and stabilization.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {therapist.modalities.map((modality, i) => (
                <div key={i} className="border-t border-[var(--color-brand-secondary)]/30 pt-8">
                  <h4 className="text-xl font-serif text-[var(--color-brand-primary)] mb-4">{modality.name}</h4>
                  <p className="text-[var(--color-brand-dark)]/70 font-light leading-relaxed">
                    {modality.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
