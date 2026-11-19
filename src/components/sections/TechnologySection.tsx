import { landingContent } from "@/data/content";
import { GoldWaveDivider, SectionEyebrow } from "@/components/ui/BrandDecorations";

export function TechnologySection() {
  const { technology } = landingContent;

  return (
    <section
      id="inovacao"
      aria-labelledby="technology-heading"
      className="relative bg-umana-ice-soft/65 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>{technology.eyebrow}</SectionEyebrow>

          <h2
            id="technology-heading"
            className="mt-3.5 font-display text-[1.95rem] font-medium leading-[1.14] text-umana-navy sm:text-4xl"
          >
            {technology.title}
          </h2>

          <p className="mt-4 font-sans text-[15px] leading-[1.7] text-umana-ink/90 sm:text-base">
            {technology.lead}
          </p>

          <p className="mt-3 font-sans text-[15px] leading-[1.7] text-umana-slate sm:text-base">
            {technology.complement}
          </p>

          <div className="mt-5 rounded-2xl border border-umana-gold/35 bg-white/95 px-5 py-4 shadow-editorial-sm">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-editorial text-umana-gold-deep">
              {technology.procedureTarget.label}
            </p>
            <p className="mt-1.5 font-sans text-sm leading-relaxed text-umana-navy sm:text-[15px]">
              {technology.procedureTarget.description}
            </p>
          </div>
        </div>

        {/* Três situações principais em cards limpos */}
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
          {technology.situations.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-umana-navy/[0.08] bg-white p-6 shadow-editorial-sm transition-colors duration-200 hover:border-umana-gold/55 motion-reduce:transition-none"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-medium text-umana-gold-deep">
                    {item.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-umana-gold/45 transition-all duration-200 group-hover:w-14 group-hover:bg-umana-gold motion-reduce:transition-none"
                  />
                </div>

                <h3 className="mt-4 font-display text-[1.35rem] font-medium leading-snug text-umana-navy">
                  {item.title}
                </h3>

                <p className="mt-2 font-sans text-sm leading-relaxed text-umana-slate">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 font-sans text-xs tracking-wide text-umana-slate/90">
          * {technology.footnote}
        </p>
      </div>

      <GoldWaveDivider className="mt-10 -mb-14 sm:mt-14 sm:-mb-20" />
    </section>
  );
}
