import Image from "next/image";
import { UserRound } from "lucide-react";
import { landingContent } from "@/data/content";
import { siteConfig } from "@/config/site";
import { SectionEyebrow } from "@/components/ui/BrandDecorations";

export function SpecialistSection() {
  const { specialist } = landingContent;
  const { photoSrc, photoWidth, photoHeight, professionalRegistry } = siteConfig.specialist;

  return (
    <section
      id="especialista"
      aria-labelledby="specialist-heading"
      className="bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          {/* Fotografia profissional da Jessyca B. Gallani */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-[300px] sm:max-w-[340px] md:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-full w-full rounded-[22px] border border-umana-gold/40"
              />

              {photoSrc ? (
                <div className="relative overflow-hidden rounded-[20px] bg-umana-ice-soft shadow-editorial">
                  <Image
                    src={photoSrc}
                    alt={`Fotografia profissional oficial de ${specialist.name}`}
                    width={photoWidth}
                    height={photoHeight}
                    loading="lazy"
                    sizes="(max-width: 768px) 80vw, 38vw"
                    className="aspect-[3/4] w-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="relative flex aspect-[4/5] flex-col items-center justify-center rounded-[20px] border border-umana-ice bg-gradient-to-b from-umana-ice-soft/85 to-umana-porcelain p-7 text-center shadow-editorial-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-umana-gold/40 bg-white text-umana-navy">
                    <UserRound className="h-7 w-7 text-umana-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <p className="mt-5 font-display text-xl font-medium text-umana-navy">
                    {specialist.name}
                  </p>
                  <p className="mt-2 max-w-[220px] font-sans text-xs leading-relaxed text-umana-slate">
                    Espaço reservado para fotografia profissional oficial da especialista.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Informações objetivas */}
          <div className="md:col-span-7">
            <SectionEyebrow>{specialist.eyebrow}</SectionEyebrow>

            <h2
              id="specialist-heading"
              className="mt-3.5 font-display text-[1.95rem] font-medium leading-[1.14] text-umana-navy sm:text-4xl"
            >
              {specialist.title}
            </h2>

            <div className="mt-6 border-l-2 border-umana-gold pl-5">
              <h3 className="font-display text-2xl font-medium text-umana-navy sm:text-[1.75rem]">
                {specialist.name}
              </h3>

              <p className="mt-2.5 font-sans text-[15px] leading-[1.72] text-umana-slate sm:text-base">
                {specialist.description}
              </p>

              {professionalRegistry.trim() && (
                <p className="mt-3 font-sans text-xs font-medium tracking-wide text-umana-navy/80">
                  Registro profissional: {professionalRegistry.trim()}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
