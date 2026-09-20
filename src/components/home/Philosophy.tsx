import Image from "next/image";
import Link from "next/link";

export function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/philosophy_bg.png" 
          alt="Abstract calming nature" 
          fill 
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[var(--color-brand-dark)]/60 mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-10">
          "You don't have to navigate the next chapter alone."
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
          Therapy works best when you feel respected, understood, and actively involved. My goal is not just symptom relief, but helping you develop resilience and a stronger relationship with yourself.
        </p>
        <Link href="#contact" className="inline-block px-10 py-4 bg-white text-[var(--color-brand-dark)] text-sm font-medium tracking-wider hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors">
          START YOUR JOURNEY
        </Link>
      </div>
    </section>
  );
}
