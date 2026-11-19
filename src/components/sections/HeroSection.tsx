import Image from "next/image";
import { MapPin, Camera } from "lucide-react";
import { landingContent } from "@/data/content";
import { siteConfig } from "@/config/site";
import { ScheduleCtaButton } from "@/components/ui/ScheduleCtaButton";
import { GoldOrganicWaves, SectionEyebrow } from "@/components/ui/BrandDecorations";
import { GoogleRatingBadge } from "@/components/ui/GoogleRatingBadge";

export function HeroSection() {
  const { hero } = landingContent;
  const { heroImageSrc, heroImageAlt, heroImageCaption, heroImageWidth, heroImageHeight } =
    siteConfig.media;

  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-umana-porcelain via-white to-white"
    >
      {/* Ondas douradas discretas inspiradas no Brand Book */}
      <GoldOrganicWaves
        variant="light"
        className="absolute -right-24 top-0 h-[340px] w-[540px] opacity-75 sm:-right-12 sm:h-[420px] sm:w-[760px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-12">
          {/* Coluna principal — prioridade total acima da dobra no mobile */}
          <div className="lg:col-span-7">
            <SectionEyebrow>{hero.eyebrow}</SectionEyebrow>

            <h1
              id="hero-heading"
              className="mt-4 font-display text-[2.45rem] font-medium leading-[1.06] tracking-[-0.015em] text-umana-navy sm:text-5xl lg:text-[3.5rem]"
            >
              {hero.title}
            </h1>

            <p className="mt-3 font-display text-[1.45rem] font-medium leading-snug text-umana-gold-deep sm:mt-4 sm:text-[1.85rem]">
              {hero.subtitle}
            </p>

            <p className="mt-4 max-w-xl font-sans text-[15px] leading-[1.68] text-umana-slate sm:mt-5 sm:text-base">
              {hero.description}
            </p>

            <div id="hero-cta-anchor" className="mt-7 sm:mt-8">
              <ScheduleCtaButton
                section="hero"
                label={hero.ctaLabel}
                variant="primary"
                fullWidthMobile
              />

              <p className="mt-3.5 inline-flex items-center gap-1.5 font-sans text-xs font-medium tracking-wide text-umana-slate sm:ml-1 sm:block">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin
                    className="h-3.5 w-3.5 shrink-0 text-umana-gold-deep"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span>{hero.complementaryInfo}</span>
                </span>
              </p>

              <div className="mt-3.5">
                <GoogleRatingBadge variant="compact" />
              </div>
            </div>
          </div>

          {/* Moldura visual editorial — Pós imediato Intimus Harmony */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-[26px] border border-umana-gold/30"
              />

              {heroImageSrc ? (
                <div className="relative overflow-hidden rounded-[20px] border border-umana-navy/10 bg-white shadow-editorial">
                  <Image
                    src={heroImageSrc}
                    alt={heroImageAlt}
                    width={heroImageWidth}
                    height={heroImageHeight}
                    priority
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="h-auto w-full object-contain"
                  />
                  <div className="flex items-center justify-between gap-3 border-t border-umana-navy/10 bg-umana-navy px-4 py-3 text-[11px] font-medium tracking-wide text-white sm:px-5">
                    <span>{heroImageCaption}</span>
                    <span className="shrink-0 text-umana-gold-soft">Clínica Umana</span>
                  </div>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-[20px] border border-umana-ice bg-gradient-to-br from-umana-navy via-[#0D1E4B] to-umana-navy px-6 py-10 text-white shadow-editorial sm:px-8 sm:py-14">
                  <GoldOrganicWaves
                    variant="dark"
                    className="absolute inset-0 h-full w-full opacity-90"
                  />

                  <div className="relative flex min-h-[210px] flex-col justify-between gap-6 sm:min-h-[340px]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-umana-gold/40 bg-white/[0.06] px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-editorial text-umana-gold-soft">
                        <Camera className="h-3 w-3" aria-hidden="true" />
                        Imagem oficial pendente
                      </span>
                      <span className="h-2 w-2 rounded-full bg-umana-gold" aria-hidden="true" />
                    </div>

                    <div className="my-auto space-y-3">
                      <p className="font-display text-2xl font-normal leading-tight text-white sm:text-3xl">
                        Intimus Harmony
                      </p>
                      <div className="h-px w-12 bg-umana-gold/70" aria-hidden="true" />
                      <p className="font-sans text-xs leading-relaxed text-umana-ice/85 sm:text-[13px]">
                        Espaço reservado para fotografia real da Clínica Umana ou imagem
                        oficial do procedimento.
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/15 pt-4 font-sans text-[11px] text-white/70">
                      <span>Endolaser + Criolipólise</span>
                      <span className="text-umana-gold-soft">Clínica Umana</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
