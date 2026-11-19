import { siteConfig } from "@/config/site";

export interface WhatsAppLinkInfo {
  isConfigured: boolean;
  sanitizedNumber: string;
  message: string;
  href: string | null;
  previewUrl: string;
}

/**
 * Remove caracteres não numéricos de um telefone para uso no padrão oficial wa.me.
 */
export function sanitizeWhatsAppNumber(raw: string): string {
  return raw.replace(/\D/g, "");
}

/**
 * Retorna os dados estruturados do link oficial wa.me com codificação correta
 * da mensagem de roteamento para o CRM Kommo ("Intimus Harmony").
 */
export function getWhatsAppLinkInfo(): WhatsAppLinkInfo {
  const sanitizedNumber = sanitizeWhatsAppNumber(siteConfig.whatsapp.number);
  const message = siteConfig.whatsapp.prefilledMessage;
  const encodedMessage = encodeURIComponent(message);

  // Número internacional válido no Brasil normalmente possui 12 ou 13 dígitos (55 + DDD + número)
  const isConfigured = sanitizedNumber.length >= 10;

  return {
    isConfigured,
    sanitizedNumber,
    message,
    href: isConfigured ? `https://wa.me/${sanitizedNumber}?text=${encodedMessage}` : null,
    previewUrl: `https://wa.me/<NEXT_PUBLIC_WHATSAPP_NUMBER>?text=${encodedMessage}`,
  };
}
