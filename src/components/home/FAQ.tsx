"use client";

import { useState } from "react";
import { therapist } from "@/data/therapist";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[var(--color-brand-soft)] border-t border-[var(--color-brand-secondary)]/20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-widest text-[var(--color-brand-primary)] uppercase mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-dark)] leading-tight">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {therapist.faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-[var(--color-brand-secondary)]/30 bg-white rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === i}
              >
                <span className="font-serif text-xl text-[var(--color-brand-dark)]">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-[var(--color-brand-primary)] transition-transform duration-300",
                    openIndex === i && "rotate-180"
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-[var(--color-brand-dark)]/70 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
