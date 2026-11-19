export interface ResultCase {
  id: string;
  label: string;
  caption: string;
  authorized: boolean;
  /** True enquanto exibir imagem editorial provisória antes das fotos clínicas reais */
  isIllustrativePreview?: boolean;
  /** Imagem única já composta lado a lado (Antes e Depois) */
  combinedSrc?: string;
  combinedWidth?: number;
  combinedHeight?: number;
  combinedAlt?: string;
  /** Caminho em /public/images/results/... quando fornecido em arquivos separados */
  beforeSrc?: string;
  /** Caminho em /public/images/results/... quando fornecido em arquivos separados */
  afterSrc?: string;
  /** Dimensões originais da imagem para preservar proporção sem cortes */
  beforeWidth?: number;
  beforeHeight?: number;
  afterWidth?: number;
  afterHeight?: number;
  beforeAlt?: string;
  afterAlt?: string;
}

export interface TestimonialPrint {
  id: string;
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const parseEnvBoolean = (value: string | undefined, fallback: boolean): boolean => {
  if (value === undefined || value === "") return fallback;
  return value.toLowerCase() === "true";
};

export const siteConfig = {
  brand: {
    clinicName: "Clínica Umana",
    procedureName: "Intimus Harmony",
    city: "Jundiaí/SP",
    /**
     * Logotipo oficial da Clínica Umana (PNG transparente dourado).
     */
    logoSrc: "/images/logo-umana.png" as string | undefined,
    logoDarkSrc: "/images/logo-umana.png" as string | undefined,
    logoWidth: 1000,
    logoHeight: 411,
  },

  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://intimus-harmony.clinicaumana.com.br",
    title: "Intimus Harmony | Protocolo Não Cirúrgico para Firmeza das Mamas — Clínica Umana",
    description:
      "Conheça o Intimus Harmony da Clínica Umana em Jundiaí/SP: protocolo exclusivo que combina endolaser e criolipólise para a flacidez da pele das mamas.",
    locale: "pt_BR",
  },

  whatsapp: {
    /**
     * Configurado exclusivamente via variável de ambiente NEXT_PUBLIC_WHATSAPP_NUMBER.
     * Nunca preencher com números fictícios ou de exemplo.
     */
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
    /**
     * ATENÇÃO — ROTEAMENTO KOMMO:
     * A expressão "Intimus Harmony" nesta mensagem é obrigatória para identificação
     * da origem e automação no CRM Kommo.
     */
    prefilledMessage:
      "Olá! Vim do Instagram e quero agendar uma avaliação do Intimus Harmony.",
  },

  pricing: {
    /**
     * Controle centralizado de exibição pública de valores.
     * Pode ser alternado aqui ou via NEXT_PUBLIC_SHOW_PUBLIC_PRICE=false no ambiente.
     */
    showPublicTreatmentPrice: parseEnvBoolean(
      process.env.NEXT_PUBLIC_SHOW_PUBLIC_PRICE,
      true
    ),
    treatmentStartingPrice: "R$ 9.000",

    /**
     * Cadastro interno do valor da avaliação (R$ 100), mantido oculto publicamente
     * por padrão até aprovação formal das regras de publicidade profissional.
     */
    showPublicEvaluationPrice: parseEnvBoolean(
      process.env.NEXT_PUBLIC_SHOW_EVALUATION_PRICE,
      false
    ),
    evaluationPrice: "R$ 100",
  },

  specialist: {
    name: "Jessyca B. Gallani",
    /**
     * Preencher somente após confirmação oficial via NEXT_PUBLIC_PROFESSIONAL_REGISTRY
     * ou diretamente aqui antes da publicação.
     */
    professionalRegistry: process.env.NEXT_PUBLIC_PROFESSIONAL_REGISTRY || "",
    /**
     * Imagem ilustrativa provisória em /public/images/jessyca-gallani.jpg.
     * Substituir pela fotografia profissional oficial de Jessyca B. Gallani antes da publicação.
     */
    photoSrc: "/images/jessyca-gallani.jpg" as string | undefined,
    photoWidth: 900,
    photoHeight: 1200,
  },

  media: {
    /**
     * Imagem principal da primeira dobra: Pós imediato Intimus Harmony.
     */
    heroImageSrc: "/images/results/caso-01-pos-imediato.jpg" as string | undefined,
    heroImageAlt: "Pós imediato Intimus Harmony — Clínica Umana em Jundiaí/SP",
    heroImageCaption: "Pós imediato Intimus Harmony",
    heroImageWidth: 1024,
    heroImageHeight: 676,
  },

  googleReviews: {
    rating: "4,9",
    reviewCount: 122,
    locationLabel: "Av. Antônio Segre, 465 • Jardim Brasil, Jundiaí/SP",
  },

  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  },
} as const;
