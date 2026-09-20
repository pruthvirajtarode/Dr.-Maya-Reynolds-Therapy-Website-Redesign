import Image from "next/image";
import Link from "next/link";
import { therapist } from "@/data/therapist";

export function IntroSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative w-full max-w-md mx-auto lg:mr-auto">
              <Image 
                src="/images/maya_hero.png" 
                alt="Dr. Maya Reynolds portrait" 
                fill 
                className="object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--color-brand-soft)] -z-10 rounded-sm" />
              <div className="absolute -top-8 -left-8 w-48 h-48 border border-[var(--color-brand-secondary)] -z-10 rounded-sm" />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <h2 className="text-sm font-medium tracking-widest text-[var(--color-brand-primary)] uppercase mb-4">
              MEET {therapist.name.split(',')[0]}
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-dark)] mb-8 leading-tight">
              A warm, collaborative, and grounded approach.
            </h3>
            <div className="space-y-6 text-[var(--color-brand-dark)]/80 text-lg leading-relaxed font-light mb-10">
              <p>{therapist.bio}</p>
              <p>{therapist.approach}</p>
            </div>
            
            <Link href="#contact" className="inline-block border-b border-[var(--color-brand-primary)] pb-1 text-[var(--color-brand-primary)] font-medium tracking-wide hover:text-[var(--color-brand-dark)] hover:border-[var(--color-brand-dark)] transition-colors">
              Read More About Me
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
