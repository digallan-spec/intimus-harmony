"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { landingContent } from "@/data/content";
import { SectionEyebrow } from "@/components/ui/BrandDecorations";
import { trackFaqInteraction } from "@/lib/analytics";

export function FaqSection() {
  const { faq } = landingContent;
  // Todas as perguntas iniciam recolhidas conforme especificação
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string, question: string) => {
    const nextOpen = openId === id ? null : id;
    setOpenId(nextOpen);
    trackFaqInteraction(id, question, nextOpen === id);
  };

  return (
    <section
      id="duvidas"
      aria-labelledby="faq-heading"
      className="border-t border-umana-navy/[0.06] bg-umana-ice-soft/50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-left sm:text-center">
          <SectionEyebrow centered>{faq.eyebrow}</SectionEyebrow>
          <h2
            id="faq-heading"
            className="mt-3.5 font-display text-[1.95rem] font-medium leading-[1.14] text-umana-navy sm:text-4xl"
          >
            {faq.title}
          </h2>
        </div>

        <div className="mt-8 divide-y divide-umana-navy/10 overflow-hidden rounded-2xl border border-umana-navy/10 bg-white shadow-editorial-sm sm:mt-10">
          {faq.items.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id, item.question)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-umana-porcelain/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-umana-gold sm:px-6"
                  >
                    <span className="font-display text-[1.25rem] font-medium leading-snug text-umana-navy sm:text-[1.35rem]">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 motion-reduce:transition-none ${
                        isOpen
                          ? "border-umana-gold bg-umana-navy text-umana-gold-soft"
                          : "border-umana-navy/15 bg-umana-porcelain text-umana-navy"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 sm:px-6 sm:pb-6"
                >
                  <p className="font-sans text-[14.5px] leading-[1.7] text-umana-slate sm:text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
