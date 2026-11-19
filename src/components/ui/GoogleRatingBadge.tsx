import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

interface GoogleRatingBadgeProps {
  variant?: "compact" | "card";
}

export function GoogleRatingBadge({ variant = "compact" }: GoogleRatingBadgeProps) {
  const { rating, reviewCount, locationLabel } = siteConfig.googleReviews;

  if (variant === "compact") {
    return (
      <div
        className="inline-flex flex-wrap items-center gap-2 rounded-full border border-umana-navy/10 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_16px_-10px_rgba(9,22,56,0.18)]"
        aria-label={`Avaliação ${rating} de 5 estrelas no Google com ${reviewCount} avaliações`}
      >
        <GoogleIcon className="h-3.5 w-3.5 shrink-0" />
        <span className="font-sans text-xs font-semibold text-umana-navy">{rating}</span>
        <div className="flex items-center gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-3 w-3 fill-umana-gold text-umana-gold"
              strokeWidth={1.5}
            />
          ))}
        </div>
        <span className="font-sans text-[11px] text-umana-slate">
          ({reviewCount} avaliações no Google)
        </span>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-umana-gold/30 bg-white p-5 shadow-editorial-sm sm:flex-row sm:items-center sm:px-7 sm:py-5"
      aria-label={`Clínica Umana avaliada com ${rating} estrelas no Google com base em ${reviewCount} avaliações`}
    >
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-umana-ice bg-umana-porcelain">
          <GoogleIcon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-editorial text-umana-gold-deep">
            Avaliações no Google
          </p>
          <p className="mt-0.5 font-display text-xl font-medium text-umana-navy sm:text-2xl">
            {siteConfig.brand.clinicName}
          </p>
          <p className="font-sans text-xs text-umana-slate">{locationLabel}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 self-stretch border-t border-umana-ice/80 pt-3 sm:self-auto sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
        <span className="font-display text-4xl font-medium leading-none text-umana-navy">
          {rating}
        </span>
        <div>
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-umana-gold text-umana-gold"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <p className="mt-1 font-sans text-xs font-medium text-umana-slate">
            {reviewCount} avaliações verificadas
          </p>
        </div>
      </div>
    </div>
  );
}
