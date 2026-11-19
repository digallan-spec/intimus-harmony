"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { landingContent } from "@/data/content";
import { SectionEyebrow } from "@/components/ui/BrandDecorations";
import { trackGalleryNavigation } from "@/lib/analytics";

export function ResultsGallerySection() {
  const { results } = landingContent;
  const cases = results.cases;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const activeCase = cases[activeIndex];
  const hasCombinedImage = Boolean(activeCase.combinedSrc);
  const hasSplitImages = Boolean(activeCase.beforeSrc && activeCase.afterSrc);
  const isIllustrative = Boolean(activeCase.isIllustrativePreview || !activeCase.authorized);

  const goTo = (nextIndex: number, direction: "prev" | "next" | "dot") => {
    const normalized = (nextIndex + cases.length) % cases.length;
    setActiveIndex(normalized);
    trackGalleryNavigation(cases[normalized].id, direction);
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
    if (deltaX < 0) {
      goTo(activeIndex + 1, "next");
    } else {
      goTo(activeIndex - 1, "prev");
    }
  };

  return (
    <section
      id="resultados"
      aria-labelledby="results-heading"
      className="border-y border-umana-navy/[0.06] bg-umana-porcelain py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <SectionEyebrow>{results.eyebrow}</SectionEyebrow>
            <h2
              id="results-heading"
              className="mt-3.5 font-display text-[1.95rem] font-medium leading-[1.14] text-umana-navy sm:text-4xl"
            >
              {results.title}
            </h2>
          </div>

          {/* Controles de navegação */}
          <div className="flex items-center gap-2.5 self-start sm:self-end">
            <span className="mr-1 font-sans text-xs font-medium tracking-wider text-umana-slate">
              0{activeIndex + 1} / 0{cases.length}
            </span>
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1, "prev")}
              aria-label="Ver resultado anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-umana-navy/15 bg-white text-umana-navy transition-colors hover:border-umana-gold hover:text-umana-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-umana-gold"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1, "next")}
              aria-label="Ver próximo resultado"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-umana-navy/15 bg-white text-umana-navy transition-colors hover:border-umana-gold hover:text-umana-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-umana-gold"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Área interativa com suporte a toque (swipe) */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Galeria de resultados reais de antes e depois"
          className="mt-7 overflow-hidden rounded-3xl border border-umana-navy/[0.08] bg-white p-4 shadow-editorial-sm sm:mt-9 sm:p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-umana-ice/70 pb-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-editorial text-umana-navy">
              {activeCase.label}
            </span>
            <span className="font-sans text-[11px] text-umana-slate">
              Deslize ou use as setas para navegar
            </span>
          </div>

          {hasCombinedImage ? (
            <figure className="flex flex-col items-center rounded-2xl bg-umana-porcelain p-2.5 sm:p-4">
              <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-white">
                <Image
                  src={activeCase.combinedSrc!}
                  alt={activeCase.combinedAlt || activeCase.label}
                  width={activeCase.combinedWidth || 1024}
                  height={activeCase.combinedHeight || 676}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 960px"
                  className="h-auto max-h-[520px] w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 grid w-full grid-cols-2 text-center font-sans text-xs font-semibold uppercase tracking-editorial">
                <span className="text-umana-slate">Antes</span>
                <span className="text-umana-gold-deep">Depois</span>
              </figcaption>
            </figure>
          ) : hasSplitImages ? (
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <figure className="flex flex-col items-center rounded-2xl bg-umana-porcelain p-3">
                <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-white">
                  <Image
                    src={activeCase.beforeSrc!}
                    alt={activeCase.beforeAlt || "Antes"}
                    width={activeCase.beforeWidth || 1200}
                    height={activeCase.beforeHeight || 900}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 45vw"
                    className="h-auto max-h-[380px] w-full object-contain"
                  />
                  {isIllustrative && (
                    <span className="absolute left-3 top-3 rounded-full border border-umana-gold/40 bg-umana-navy/85 px-2.5 py-1 font-sans text-[10px] font-medium tracking-wide text-umana-gold-soft backdrop-blur-sm">
                      Prévia ilustrativa • Foto real pendente
                    </span>
                  )}
                </div>
                <figcaption className="mt-2.5 font-sans text-xs font-semibold uppercase tracking-editorial text-umana-slate">
                  Antes
                </figcaption>
              </figure>

              <figure className="flex flex-col items-center rounded-2xl bg-umana-porcelain p-3">
                <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-white">
                  <Image
                    src={activeCase.afterSrc!}
                    alt={activeCase.afterAlt || "Depois"}
                    width={activeCase.afterWidth || 1200}
                    height={activeCase.afterHeight || 900}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 45vw"
                    className="h-auto max-h-[380px] w-full object-contain"
                  />
                  {isIllustrative && (
                    <span className="absolute left-3 top-3 rounded-full border border-umana-gold/40 bg-umana-navy/85 px-2.5 py-1 font-sans text-[10px] font-medium tracking-wide text-umana-gold-soft backdrop-blur-sm">
                      Prévia ilustrativa • Foto real pendente
                    </span>
                  )}
                </div>
                <figcaption className="mt-2.5 font-sans text-xs font-semibold uppercase tracking-editorial text-umana-gold-deep">
                  Depois
                </figcaption>
              </figure>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {(["Antes", "Depois"] as const).map((stage) => (
                <div
                  key={stage}
                  className="flex min-h-[210px] flex-col items-center justify-center rounded-2xl border border-dashed border-umana-gold/45 bg-umana-ice-soft/45 px-6 py-8 text-center sm:min-h-[280px]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-umana-gold/35 bg-white text-umana-gold-deep">
                    <ImageIcon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-editorial text-umana-navy">
                    {stage} — {activeCase.label}
                  </p>
                  <p className="mt-2 max-w-xs font-sans text-xs leading-relaxed text-umana-slate">
                    Espaço reservado para fotografia real autorizada pela Clínica Umana.
                    Proporção original preservada na publicação.
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Indicadores (dots) + legenda */}
          <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center font-sans text-xs text-umana-slate sm:text-left">
              {activeCase.caption}
            </p>

            <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar caso">
              {cases.map((item, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={`Exibir ${item.label}`}
                    onClick={() => goTo(index, "dot")}
                    className={`h-2.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-umana-gold motion-reduce:transition-none ${
                      selected ? "w-7 bg-umana-navy" : "w-2.5 bg-umana-ice hover:bg-umana-gold/60"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-5 font-sans text-xs leading-relaxed text-umana-slate">
          {results.disclaimer}
        </p>
      </div>
    </section>
  );
}
