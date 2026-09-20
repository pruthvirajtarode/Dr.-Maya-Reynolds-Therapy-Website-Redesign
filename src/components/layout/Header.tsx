"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "APPROACH", href: "#approach" },
    { name: "SERVICES", href: "#services" },
    { name: "OUR OFFICE", href: "#office" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-serif text-[var(--color-brand-primary)] tracking-wide">
          DR. MAYA REYNOLDS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider text-[var(--color-brand-dark)]">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[var(--color-brand-primary)] transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Link href="#contact" className="px-6 py-3 bg-[var(--color-brand-primary)] text-white text-sm font-medium tracking-wider hover:bg-[var(--color-brand-dark)] transition-colors">
            BOOK A CONSULTATION
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[var(--color-brand-dark)]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 md:hidden overflow-hidden",
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <nav className="flex flex-col items-center gap-6 text-sm font-medium tracking-wider text-[var(--color-brand-dark)]">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-[var(--color-brand-primary)] transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-4 px-8 py-3 bg-[var(--color-brand-primary)] text-white text-sm font-medium tracking-wider hover:bg-[var(--color-brand-dark)] transition-colors">
            BOOK A CONSULTATION
          </Link>
        </nav>
      </div>
    </header>
  );
}
