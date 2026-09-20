"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
          <Image 
            src="/images/philosophy_bg.png" 
            alt="Abstract calming nature" 
            fill 
            className="object-cover opacity-90"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[var(--color-brand-dark)]/70 mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-10">
            &quot;You don&apos;t have to navigate the next chapter alone.&quot;
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Therapy works best when you feel respected, understood, and actively involved. My goal is not just symptom relief, but helping you develop resilience and a stronger relationship with yourself.
          </p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <Link href="#contact" className="inline-block px-10 py-4 bg-white text-[var(--color-brand-dark)] text-sm font-medium tracking-wider hover:bg-[var(--color-brand-primary)] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            START YOUR JOURNEY
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
