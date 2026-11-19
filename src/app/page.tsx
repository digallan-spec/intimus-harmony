import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileFloatingCta } from "@/components/layout/MobileFloatingCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ResultsGallerySection } from "@/components/sections/ResultsGallerySection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { SpecialistSection } from "@/components/sections/SpecialistSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="conteudo-principal" className="flex-1">
        {/* Seção 1 — Hero / Primeira Dobra */}
        <HeroSection />

        {/* Seção 2 — Inovação Tecnológica */}
        <TechnologySection />

        {/* Seção 3 — Como Funciona */}
        <HowItWorksSection />

        {/* Seção 4 — Resultados Reais */}
        <ResultsGallerySection />

        {/* Prova Social — Avaliações Google 4,9★ e Depoimentos WhatsApp */}
        <SocialProofSection />

        {/* Seção 5 — Responsável pelo Protocolo */}
        <SpecialistSection />

        {/* Seção 6 — FAQ Interativo */}
        <FaqSection />

        {/* Seção 7 — Conversão Final */}
        <FinalCtaSection />
      </main>

      <Footer />
      <MobileFloatingCta />
    </div>
  );
}
