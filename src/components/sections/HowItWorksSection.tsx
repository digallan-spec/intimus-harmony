import { Clock, ShieldCheck, Sparkles, TrendingUp, Info } from "lucide-react";
import { landingContent } from "@/data/content";
import { SectionEyebrow } from "@/components/ui/BrandDecorations";

const stepIcons = {
  sparkles: Sparkles,
  clock: Clock,
  trending: TrendingUp,
  shield: ShieldCheck,
};

export function HowItWorksSection() {
  const { howItWorks } = landingContent;

  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-heading"
      className="bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow>{howItWorks.eyebrow}</SectionEyebrow>

          <h2
            id="how-it-works-heading"
            className="mt-3.5 font-display text-[1.95rem] font-medium leading-[1.14] text-umana-navy sm:text-4xl"
          >
            {howItWorks.title}
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {howItWorks.steps.map((step) => {
            const Icon = stepIcons[step.icon];
            return (
              <article
                key={step.number}
                className="flex flex-col rounded-2xl border border-umana-ice bg-umana-porcelain/75 p-5 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-umana-gold/35 bg-white text-umana-navy">
                    <Icon className="h-4 w-4 text-umana-gold-deep" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <span className="font-sans text-[11px] font-semibold tracking-editorial text-umana-gold-deep">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[1.3rem] font-medium leading-snug text-umana-navy">
                  {step.title}
                </h3>

                <p className="mt-2 font-sans text-sm leading-relaxed text-umana-slate">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-umana-ice bg-umana-ice-soft/55 px-4 py-3.5 sm:mt-8 sm:items-center sm:px-5 sm:py-4">
          <Info
            className="mt-0.5 h-4 w-4 shrink-0 text-umana-navy sm:mt-0"
            strokeWidth={1.8}
            aria-hidden="true"
          />
          <p className="font-sans text-xs leading-relaxed text-umana-ink/90 sm:text-[13px]">
            {howItWorks.postCareNote}
          </p>
        </div>
      </div>
    </section>
  );
}
