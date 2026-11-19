import { siteConfig } from "@/config/site";
import { UmanaLogo } from "@/components/ui/UmanaLogo";

export function Footer() {
  const registry = siteConfig.specialist.professionalRegistry.trim();

  return (
    <footer className="border-t border-white/10 bg-[#060F28] pb-24 pt-10 text-white/80 sm:pb-12 sm:pt-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <UmanaLogo tone="light" size="md" />
            <p className="mt-3 font-sans text-xs text-white/60">
              {siteConfig.brand.clinicName} • {siteConfig.brand.city}
            </p>
          </div>

          <div className="space-y-1.5 text-left sm:text-right">
            <p className="font-sans text-xs font-medium text-white/90">
              Responsável técnica: {siteConfig.specialist.name}
            </p>
            <p className="font-sans text-xs text-umana-gold-soft/90">
              {registry ? (
                <>Registro profissional: {registry}</>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-umana-gold/30 bg-white/[0.04] px-3 py-1 text-[11px] text-white/75">
                  Registro profissional: [Preencher antes da publicação]
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-[11px] leading-relaxed text-white/50">
          <p>
            © {new Date().getFullYear()} {siteConfig.brand.clinicName}. Todos os direitos
            reservados. As informações desta página têm caráter informativo e não substituem
            avaliação profissional individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
