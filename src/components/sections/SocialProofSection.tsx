"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { landingContent } from "@/data/content";
import { SectionEyebrow } from "@/components/ui/BrandDecorations";
import { GoogleRatingBadge } from "@/components/ui/GoogleRatingBadge";

export function SocialProofSection() {
  const { socialProof } = landingContent;
  const items = socialProof.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (zoomedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomedIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomedIndex]);

  const goTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + items.length) % items.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 42) return;
    if (deltaX < 0) goTo(activeIndex + 1);
    else goTo(activeIndex - 1);
  };

  const activeItem = items[activeIndex];
  const zoomedItem = zoomedIndex !== null ? items[zoomedIndex] : null;

  return (
    <section
      id="depoimentos"
      aria-labelledby="social-proof-heading"
      className="bg-umana-ice-soft/45 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow>{socialProof.eyebrow}</SectionEyebrow>
          <h2
            id="social-proof-heading"
            className="mt-3.5 font-display text-[1.95rem] font-medium leading-[1.14] text-umana-navy sm:text-4xl"
          >
            {socialProof.title}
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-umana-slate sm:text-base">
            {socialProof.subtitle}
          </p>
        </div>

        {/* Selo de avaliações reais do Google (4,9 estrelas • 122 avaliações) */}
        <div className="mt-7 sm:mt-8">
          <GoogleRatingBadge variant="card" />
        </div>

        {/* Desktop: grade elegante sem cortar os prints */}
        <div className="mt-7 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-umana-navy/[0.08] bg-white p-3 shadow-editorial-sm transition-colors hover:border-umana-gold/55"
            >
              <button
                type="button"
                onClick={() => setZoomedIndex(idx)}
                aria-label={`Ampliar ${item.label}`}
                className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-umana-porcelain p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-umana-gold"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  sizes="(max-width: 1200px) 30vw, 340px"
                  className="h-auto max-h-[430px] w-full rounded-lg object-contain"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-umana-navy/85 px-2.5 py-1 font-sans text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-3 w-3 text-umana-gold-soft" aria-hidden="true" />
                  Ampliar
                </span>
              </button>
              <p className="mt-2.5 px-1 text-center font-sans text-xs font-medium text-umana-slate">
                {item.label}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile: carrossel compacto por toque para manter a LP curta e leve */}
        <div className="mt-6 md:hidden">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-sans text-xs font-semibold uppercase tracking-editorial text-umana-navy">
              {activeItem.label}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs text-umana-slate">
                0{activeIndex + 1} / 0{items.length}
              </span>
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Depoimento anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-umana-navy/15 bg-white text-umana-navy"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Próximo depoimento"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-umana-navy/15 bg-white text-umana-navy"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="overflow-hidden rounded-2xl border border-umana-navy/[0.08] bg-white p-3 shadow-editorial-sm"
          >
            <button
              type="button"
              onClick={() => setZoomedIndex(activeIndex)}
              aria-label={`Ampliar ${activeItem.label}`}
              className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-umana-porcelain p-2"
            >
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                loading="lazy"
                sizes="92vw"
                className="h-auto max-h-[440px] w-full rounded-lg object-contain"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-umana-navy/85 px-2.5 py-1 font-sans text-[10px] font-medium text-white">
                <ZoomIn className="h-3 w-3 text-umana-gold-soft" aria-hidden="true" />
                Toque para ampliar
              </span>
            </button>

            <div className="mt-4 flex items-center justify-center gap-2">
              {items.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(idx)}
                  aria-label={`Ver ${item.label}`}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    idx === activeIndex ? "w-7 bg-umana-navy" : "w-2.5 bg-umana-ice"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox discreto para leitura confortável do print */}
      {zoomedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomedItem.label}
          onClick={() => setZoomedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-umana-navy/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-lg overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setZoomedIndex(null)}
              aria-label="Fechar ampliação"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-umana-navy/90 text-white hover:bg-umana-navy"
            >
              <X className="h-4 w-4" />
            </button>
            <Image
              src={zoomedItem.src}
              alt={zoomedItem.alt}
              width={zoomedItem.width}
              height={zoomedItem.height}
              sizes="90vw"
              className="max-h-[84vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
