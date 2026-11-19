import Image from "next/image";
import { siteConfig } from "@/config/site";

interface UmanaLogoProps {
  tone?: "dark" | "light";
  size?: "sm" | "md";
}

/**
 * Componente institucional para o logotipo oficial da Clínica Umana.
 * Preserva proporções e área de respiro quando o arquivo oficial é informado.
 * Enquanto o arquivo não é fornecido, exibe apenas o espaço tipográfico reservado,
 * sem inventar nenhum símbolo ou ícone fora do Brand Book.
 */
export function UmanaLogo({ tone = "dark", size = "md" }: UmanaLogoProps) {
  const src =
    tone === "light"
      ? siteConfig.brand.logoDarkSrc || siteConfig.brand.logoSrc
      : siteConfig.brand.logoSrc;

  if (src) {
    return (
      <div className="inline-flex items-center py-1">
        <Image
          src={src}
          alt={`${siteConfig.brand.clinicName} — Estética & Saúde`}
          width={siteConfig.brand.logoWidth}
          height={siteConfig.brand.logoHeight}
          className={
            size === "sm"
              ? "h-11 w-auto object-contain sm:h-12"
              : "h-12 w-auto object-contain sm:h-14"
          }
          priority={tone === "dark"}
        />
      </div>
    );
  }

  const isLight = tone === "light";

  return (
    <div
      className={`inline-flex flex-col justify-center py-1 ${
        isLight ? "text-white" : "text-umana-navy"
      }`}
      aria-label="Clínica Umana — Espaço reservado para logotipo oficial"
      title="Espaço reservado para o logotipo oficial da Clínica Umana"
    >
      <span
        className={`font-display font-medium uppercase leading-none tracking-[0.26em] ${
          size === "sm" ? "text-base sm:text-lg" : "text-lg sm:text-[22px]"
        }`}
      >
        UMANA
      </span>
      <span
        className={`mt-1 font-sans text-[8px] font-medium uppercase tracking-[0.34em] ${
          isLight ? "text-umana-gold-soft/90" : "text-umana-gold-deep"
        }`}
      >
        Clínica de Estética
      </span>
    </div>
  );
}
