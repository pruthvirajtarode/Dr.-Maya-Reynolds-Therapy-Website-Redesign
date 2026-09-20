import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Anxiety & Panic",
      description: "Quiet the constant worry, release the tension in your body, and develop tools to navigate life without feeling on edge.",
      image: "/images/service_anxiety.png",
    },
    {
      title: "Trauma & PTSD",
      description: "Process past experiences safely, so they no longer dictate your present relationships, confidence, or sense of safety.",
      image: "/images/service_trauma.png",
    },
    {
      title: "Burnout & Perfectionism",
      description: "Reconnect with yourself after years of pushing through stress. Develop sustainable ways of living and working.",
      image: "/images/service_burnout.png",
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[var(--color-brand-background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-sm font-medium tracking-widest text-[var(--color-brand-primary)] uppercase mb-4">AREAS OF FOCUS</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-dark)] leading-tight">
            How I can help you move forward.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm mb-8">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-2xl font-serif text-[var(--color-brand-dark)] mb-4">{service.title}</h4>
              <p className="text-[var(--color-brand-dark)]/70 font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-dark)] transition-colors">
                Explore Approach <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
