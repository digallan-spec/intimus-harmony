"use client";

export type CtaSection = "header" | "hero" | "final_cta" | "mobile_floating";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const UTM_STORAGE_KEY = "umana_intimus_harmony_utms";
const UTM_KEYS: Array<keyof UtmParams> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

/**
 * Lê os parâmetros UTM da URL atual e persiste na sessão para atribuição
 * em todos os eventos da Landing Page.
 */
export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const detected: UtmParams = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      detected[key] = value;
    }
  }

  if (Object.keys(detected).length > 0) {
    try {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(detected));
    } catch {
      // Ignora falhas de storage em modos privados restritos
    }
    return detected;
  }

  return getStoredUtmParams();
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as UtmParams;
  } catch {
    return {};
  }
}

export function trackEvent(
  eventName: string,
  payload: Record<string, string | number | boolean | undefined> = {}
): void {
  if (typeof window === "undefined") return;

  const utms = getStoredUtmParams();
  const eventData = {
    event: eventName,
    procedure: "Intimus Harmony",
    clinic: "Clínica Umana",
    ...utms,
    ...payload,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }

  if (typeof window.gtag === "function") {
    const { event: _ignored, ...gtagParams } = eventData;
    window.gtag("event", eventName, gtagParams);
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[Umana Analytics]", eventName, eventData);
  }
}

export function trackLandingPageView(): void {
  const utms = captureUtmParams();
  trackEvent("lp_view", {
    page_path: typeof window !== "undefined" ? window.location.pathname : "/",
    ...utms,
  });
}

export function trackScheduleClick(section: CtaSection, whatsappConfigured: boolean): void {
  trackEvent("cta_schedule_click", {
    cta_section: section,
    cta_label: "AGENDAR MINHA AVALIAÇÃO",
    whatsapp_configured: whatsappConfigured,
  });
}

export function trackFaqInteraction(
  questionId: string,
  questionTitle: string,
  expanded: boolean
): void {
  trackEvent("faq_interaction", {
    question_id: questionId,
    question_title: questionTitle,
    action: expanded ? "open" : "close",
  });
}

export function trackGalleryNavigation(caseId: string, direction: "prev" | "next" | "dot"): void {
  trackEvent("gallery_navigation", {
    case_id: caseId,
    direction,
  });
}
