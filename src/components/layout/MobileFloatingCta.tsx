"use client";

import { useEffect, useState } from "react";
import { ScheduleCtaButton } from "@/components/ui/ScheduleCtaButton";

/**
 * Botão flutuante discreto exclusivo para mobile.
 * Aparece apenas após o usuário ultrapassar o CTA principal do Hero
 * e se recolhe automaticamente quando a seção final de conversão está visível.
 */
export function MobileFloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero-cta-anchor");
    const finalEl = document.getElementById("conversao-final");

    if (!heroEl || !finalEl) return;

    let pastHero = false;
    let inFinalSection = false;

    const updateVisibility = () => {
      setVisible(pastHero && !inFinalSection);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        updateVisibility();
      },
      { threshold: 0 }
    );

    const finalObserver = new IntersectionObserver(
      ([entry]) => {
        inFinalSection = entry.isIntersecting;
        updateVisibility();
      },
      { threshold: 0.15 }
    );

    heroObserver.observe(heroEl);
    finalObserver.observe(finalEl);

    return () => {
      heroObserver.disconnect();
      finalObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-300 sm:hidden motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mx-auto flex justify-end">
        <div className="pointer-events-auto">
          <ScheduleCtaButton
            section="mobile_floating"
            label="Agendar avaliação"
            variant="floating"
          />
        </div>
      </div>
    </div>
  );
}
