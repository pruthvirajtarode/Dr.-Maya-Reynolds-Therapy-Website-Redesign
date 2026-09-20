"use client";

import { useState } from "react";
import { therapist } from "@/data/therapist";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--color-brand-primary)] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-medium tracking-widest text-[var(--color-brand-accent)] uppercase mb-4">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Take the first step toward feeling better.
            </h3>
            <p className="text-white/80 font-light leading-relaxed mb-10 max-w-lg">
              Please fill out the form below to schedule a free 15-minute consultation. We'll discuss what you're looking for and see if we're a good fit to work together.
            </p>
            <div className="space-y-4 text-white/90">
              <p><strong>Office:</strong> {therapist.office.location}</p>
              <p><strong>Available:</strong> {therapist.office.format}</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            {submitted ? (
              <div className="bg-white text-[var(--color-brand-dark)] p-12 text-center rounded-sm h-full flex flex-col justify-center">
                <h4 className="text-2xl font-serif mb-4">Thank you for reaching out.</h4>
                <p className="text-[var(--color-brand-dark)]/70 font-light">
                  I will review your message and get back to you within 48 hours to schedule our consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium tracking-wider text-[var(--color-brand-dark)] mb-2 uppercase">Name</label>
                    <input required type="text" id="name" className="w-full border-b border-[var(--color-brand-secondary)]/50 py-2 focus:outline-none focus:border-[var(--color-brand-primary)] text-[var(--color-brand-dark)] bg-transparent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium tracking-wider text-[var(--color-brand-dark)] mb-2 uppercase">Email</label>
                    <input required type="email" id="email" className="w-full border-b border-[var(--color-brand-secondary)]/50 py-2 focus:outline-none focus:border-[var(--color-brand-primary)] text-[var(--color-brand-dark)] bg-transparent" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-xs font-medium tracking-wider text-[var(--color-brand-dark)] mb-2 uppercase">Phone</label>
                  <input type="tel" id="phone" className="w-full border-b border-[var(--color-brand-secondary)]/50 py-2 focus:outline-none focus:border-[var(--color-brand-primary)] text-[var(--color-brand-dark)] bg-transparent" />
                </div>
                <div className="mb-10">
                  <label htmlFor="message" className="block text-xs font-medium tracking-wider text-[var(--color-brand-dark)] mb-2 uppercase">Reason for reaching out</label>
                  <textarea required id="message" rows={4} className="w-full border-b border-[var(--color-brand-secondary)]/50 py-2 focus:outline-none focus:border-[var(--color-brand-primary)] text-[var(--color-brand-dark)] bg-transparent resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[var(--color-brand-primary)] text-white text-sm font-medium tracking-wider hover:bg-[var(--color-brand-dark)] transition-colors">
                  REQUEST CONSULTATION
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
