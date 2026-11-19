import { MapPin } from "lucide-react";
import { landingContent } from "@/data/content";
import { ScheduleCtaButton } from "@/components/ui/ScheduleCtaButton";
import { GoldOrganicWaves, SectionEyebrow } from "@/components/ui/BrandDecorations";

export function FinalCtaSection() {
  const { finalCta } = landingContent;

  return (
    <section
      id="conversao-final"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-umana-navy py-16 text-white sm:py-24"
    >
      <GoldOrganicWaves
        variant="dark"
        className="absolute inset-0 h-full w-full opacity-80"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <SectionEyebrow light centered>
          {finalCta.eyebrow}
        </SectionEyebrow>

        <h2
          id="final-cta-heading"
          className="mt-4 font-display text-[2.1rem] font-medium leading-[1.12] text-white sm:text-5xl"
        >
          {finalCta.title}
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-umana-ice/90 sm:text-base">
          {finalCta.description}
        </p>

        <div className="mt-8 flex justify-center">
          <ScheduleCtaButton
            section="final_cta"
            label={finalCta.ctaLabel}
            variant="gold"
            fullWidthMobile
          />
        </div>

        <p className="mt-5 inline-flex items-center justify-center gap-1.5 font-sans text-xs font-medium tracking-wider text-umana-gold-soft/90">
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
          <span>{finalCta.locationInfo}</span>
        </p>
      </div>
    </section>
  );
}
