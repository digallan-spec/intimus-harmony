"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, MessageCircle, X, CheckCircle2 } from "lucide-react";
import { getWhatsAppLinkInfo } from "@/lib/whatsapp";
import { trackScheduleClick, type CtaSection } from "@/lib/analytics";

interface ScheduleCtaButtonProps {
  section: CtaSection;
  label?: string;
  variant?: "primary" | "gold" | "subtle" | "floating";
  className?: string;
  fullWidthMobile?: boolean;
}

export function ScheduleCtaButton({
  section,
  label = "AGENDAR MINHA AVALIAÇÃO",
  variant = "primary",
  className = "",
  fullWidthMobile = false,
}: ScheduleCtaButtonProps) {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const waInfo = getWhatsAppLinkInfo();

  useEffect(() => {
    if (!showPreviewModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPreviewModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPreviewModal]);

  const variantClasses: Record<NonNullable<ScheduleCtaButtonProps["variant"]>, string> = {
    primary:
      "bg-umana-navy text-white hover:bg-umana-navy-light border border-umana-navy shadow-editorial-sm hover:shadow-editorial px-5 py-4 sm:px-7 text-[11.5px] sm:text-[13px] tracking-[0.1em] sm:tracking-[0.14em] whitespace-nowrap",
    gold:
      "bg-umana-gold text-umana-navy hover:bg-umana-gold-soft border border-umana-gold shadow-gold-glow px-5 py-4 sm:px-7 text-[11.5px] sm:text-[13px] tracking-[0.1em] sm:tracking-[0.14em] whitespace-nowrap",
    subtle:
      "bg-transparent text-umana-navy hover:bg-umana-navy hover:text-white border border-umana-navy/25 hover:border-umana-navy px-4 py-2.5 text-[11px] tracking-[0.12em] whitespace-nowrap",
    floating:
      "bg-umana-navy/95 text-white hover:bg-umana-navy-light border border-umana-gold/50 shadow-[0_14px_34px_-10px_rgba(9,22,56,0.5)] backdrop-blur-sm px-4 py-3 text-[11px] tracking-[0.11em] whitespace-nowrap",
  };

  const baseClasses = `group inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-umana-gold focus-visible:ring-offset-2 active:scale-[0.99] motion-reduce:transition-none motion-reduce:active:scale-100 ${
    fullWidthMobile ? "w-full sm:w-auto" : ""
  } ${variantClasses[variant]} ${className}`;

  const handleClick = () => {
    trackScheduleClick(section, waInfo.isConfigured);
    if (!waInfo.isConfigured) {
      setShowPreviewModal(true);
    }
  };

  const content = (
    <>
      <MessageCircle
        className={`h-4 w-4 shrink-0 ${
          variant === "gold"
            ? "text-umana-navy"
            : variant === "subtle"
              ? "text-umana-gold-deep group-hover:text-umana-gold-soft"
              : "text-umana-gold-soft"
        }`}
        strokeWidth={1.9}
        aria-hidden="true"
      />
      <span>{label}</span>
      {variant !== "floating" && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 opacity-80 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (waInfo.isConfigured && waInfo.href) {
    return (
      <a
        href={waInfo.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackScheduleClick(section, true)}
        className={baseClasses}
        data-cta-section={section}
      >
        {content}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={baseClasses}
        data-cta-section={section}
      >
        {content}
      </button>

      {showPreviewModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-preview-title"
          className="fixed inset-0 z-50 flex items-end justify-center bg-umana-navy/55 p-4 backdrop-blur-[2px] sm:items-center"
          onClick={() => setShowPreviewModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-umana-gold/30 bg-white p-6 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-brand text-umana-gold-deep">
                  Prévia de Integração WhatsApp + Kommo
                </p>
                <h3
                  id="wa-preview-title"
                  className="mt-1.5 font-display text-2xl font-medium text-umana-navy"
                >
                  Número comercial pendente
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                aria-label="Fechar aviso"
                className="rounded-full p-1.5 text-umana-slate transition-colors hover:bg-umana-ice-soft hover:text-umana-navy"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-3 font-sans text-sm leading-relaxed text-umana-slate">
              Este botão já está configurado para abrir o WhatsApp oficial da Clínica Umana no
              padrão <code className="rounded bg-umana-ice-soft px-1.5 py-0.5 text-xs text-umana-navy">wa.me</code>{" "}
              assim que a variável{" "}
              <code className="rounded bg-umana-ice-soft px-1.5 py-0.5 text-xs text-umana-navy">
                NEXT_PUBLIC_WHATSAPP_NUMBER
              </code>{" "}
              for preenchida. Nenhum número fictício foi utilizado.
            </p>

            <div className="mt-4 rounded-xl border border-umana-ice bg-umana-porcelain p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-umana-navy">
                <CheckCircle2 className="h-4 w-4 text-umana-gold-deep" aria-hidden="true" />
                <span>Mensagem pré-preenchida (roteamento Kommo)</span>
              </div>
              <p className="mt-2 font-sans text-sm leading-relaxed text-umana-ink">
                &ldquo;{waInfo.message}&rdquo;
              </p>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="rounded-full bg-umana-navy px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-umana-navy-light"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
