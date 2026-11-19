import React from "react";

export function SectionEyebrow({
  children,
  light = false,
  centered = false,
}: {
  children: React.ReactNode;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 ${
        centered ? "justify-center" : "justify-start"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-5 shrink-0 sm:w-7 ${light ? "bg-umana-gold-soft/80" : "bg-umana-gold"}`}
      />
      <span
        className={`font-sans text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-brand ${
          light ? "text-umana-gold-soft" : "text-umana-gold-deep"
        }`}
      >
        {children}
      </span>
      {centered && (
        <span
          aria-hidden="true"
          className={`h-px w-5 shrink-0 sm:w-7 ${light ? "bg-umana-gold-soft/80" : "bg-umana-gold"}`}
        />
      )}
    </div>
  );
}

/**
 * Linha orgânica dourada inspirada na identidade visual da Clínica Umana.
 */
export function GoldWaveDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-full sm:h-9"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30C240 6 480 42 720 22C960 2 1200 38 1440 16"
          stroke="#CCA648"
          strokeOpacity="0.42"
          strokeWidth="1.2"
        />
        <path
          d="M0 38C280 18 560 46 840 28C1080 12 1280 34 1440 24"
          stroke="#CCA648"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/**
 * Ondas douradas decorativas de baixíssima interferência para fundos editoriais.
 */
export function GoldOrganicWaves({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const strokeOpacityPrimary = variant === "dark" ? "0.28" : "0.26";
  const strokeOpacitySecondary = variant === "dark" ? "0.14" : "0.14";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M-40 240C140 150 320 290 520 180C660 105 740 135 840 70"
        stroke="#CCA648"
        strokeOpacity={strokeOpacityPrimary}
        strokeWidth="1.1"
      />
      <path
        d="M-60 278C160 190 360 315 560 212C700 140 770 168 860 112"
        stroke="#CCA648"
        strokeOpacity={strokeOpacitySecondary}
        strokeWidth="1"
      />
      <path
        d="M120 -20C280 95 490 40 760 140"
        stroke="#CCA648"
        strokeOpacity={strokeOpacitySecondary}
        strokeWidth="0.9"
      />
    </svg>
  );
}
