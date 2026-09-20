"use client";

import Image from "next/image";
import { therapist } from "@/data/therapist";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function OurOffice() {
  return (
    <section id="office" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-medium tracking-widest text-[var(--color-brand-primary)] uppercase mb-4">OUR OFFICE</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-dark)] leading-tight mb-6">
            A calm space for healing.
          </h3>
          <p className="text-[var(--color-brand-dark)]/70 font-light leading-relaxed">
            {therapist.office.details}
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <StaggerItem>
            <div className="relative aspect-[4/3] w-full overflow-hidden group rounded-sm">
              <Image 
                src="/images/office_main.png" 
                alt="Main therapy room" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="relative aspect-[4/3] w-full hidden md:block overflow-hidden group rounded-sm">
              <Image 
                src="/images/office_consultation.png" 
                alt="Consultation area" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </StaggerItem>
        </StaggerContainer>
        <FadeIn delay={0.4} direction="up">
          <div className="relative aspect-[21/9] w-full overflow-hidden group rounded-sm">
            <Image 
              src="/images/office_detail.png" 
              alt="Office detail" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
