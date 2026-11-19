import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { UmanaLogo } from "@/components/ui/UmanaLogo";
import { ScheduleCtaButton } from "@/components/ui/ScheduleCtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-umana-navy/[0.06] bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[74px] sm:px-8">
        <a
          href="#topo"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-umana-gold focus-visible:ring-offset-4"
          aria-label="Clínica Umana — Voltar ao topo"
        >
          <UmanaLogo tone="dark" size="sm" />
        </a>

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-umana-slate sm:hidden">
            <MapPin className="h-3.5 w-3.5 text-umana-gold-deep" strokeWidth={1.8} aria-hidden="true" />
            <span>{siteConfig.brand.city}</span>
          </div>

          <div className="hidden sm:block">
            <ScheduleCtaButton
              section="header"
              label="Agendar Avaliação"
              variant="subtle"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
