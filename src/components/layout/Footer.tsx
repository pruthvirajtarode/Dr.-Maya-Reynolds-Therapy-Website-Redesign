import { therapist } from "@/data/therapist";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-dark)] text-white/80 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-serif text-white mb-4">{therapist.name}</h2>
          <p className="text-sm font-medium tracking-wide mb-6 text-white/60">
            {therapist.title}
          </p>
          <p className="text-sm leading-relaxed max-w-sm">
            {therapist.office.location}<br />
            {therapist.office.format}
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium tracking-widest text-white mb-6 uppercase">Navigation</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="#approach" className="hover:text-white transition-colors">Approach</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="#office" className="hover:text-white transition-colors">Our Office</Link></li>
            <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium tracking-widest text-white mb-6 uppercase">Legal</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-xs text-center text-white/40">
        &copy; {new Date().getFullYear()} {therapist.name}. All rights reserved.
      </div>
    </footer>
  );
}
