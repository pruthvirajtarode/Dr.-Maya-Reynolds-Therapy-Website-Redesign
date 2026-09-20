import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ClientPopulations } from "@/components/home/ClientPopulations";
import { Services } from "@/components/home/Services";
import { Methodology } from "@/components/home/Methodology";
import { Expertise } from "@/components/home/Expertise";
import { OurOffice } from "@/components/home/OurOffice";
import { Philosophy } from "@/components/home/Philosophy";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <IntroSection />
        <ClientPopulations />
        <Services />
        <Expertise />
        <Methodology />
        <Philosophy />
        <OurOffice />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
