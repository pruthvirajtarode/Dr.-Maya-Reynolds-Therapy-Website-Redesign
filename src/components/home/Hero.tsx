"use client";

import Image from "next/image";
import Link from "next/link";
import { therapist } from "@/data/therapist";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/maya_hero.png"
            alt="Dr. Maya Reynolds in her office"
            fill
            className="object-cover object-right md:object-center opacity-80"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-background)] via-[var(--color-brand-background)]/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <StaggerContainer delay={0.2} className="max-w-2xl">
          <StaggerItem>
            <div className="inline-block px-4 py-1.5 border border-[var(--color-brand-primary)]/30 text-xs font-medium tracking-widest text-[var(--color-brand-primary)] uppercase mb-8">
              {therapist.location}
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-brand-dark)] leading-[1.1] mb-6">
              Finding clarity <br />
              <span className="text-[var(--color-brand-primary)] italic">when life feels overwhelming.</span>
            </h1>
          </StaggerItem>
          
          <StaggerItem>
            <p className="text-lg md:text-xl text-[var(--color-brand-dark)]/80 font-light mb-10 max-w-xl leading-relaxed">
              I’m a licensed clinical psychologist offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="px-8 py-4 bg-[var(--color-brand-primary)] text-white text-sm font-medium tracking-wider hover:bg-[var(--color-brand-dark)] transition-colors flex items-center justify-center gap-3 group">
                BOOK A CONSULTATION
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#approach" className="px-8 py-4 border border-[var(--color-brand-dark)] text-[var(--color-brand-dark)] text-sm font-medium tracking-wider hover:bg-[var(--color-brand-dark)] hover:text-white transition-colors flex items-center justify-center">
                LEARN ABOUT MY APPROACH
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
