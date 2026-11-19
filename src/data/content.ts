import { siteConfig, type ResultCase, type TestimonialPrint } from "@/config/site";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
  requiresComplianceReview?: boolean;
}

export const landingContent = {
  hero: {
    eyebrow: "Protocolo Exclusivo • Clínica Umana",
    title: "Seus seios perderam firmeza?",
    subtitle: "Conheça o Intimus Harmony.",
    description:
      "Um protocolo exclusivo da Clínica Umana que combina endolaser e criolipólise em uma abordagem não cirúrgica para a flacidez da pele das mamas.",
    ctaLabel: "AGENDAR MINHA AVALIAÇÃO",
    complementaryInfo: "Jundiaí/SP • Avaliação presencial ou online.",
  },

  technology: {
    eyebrow: "Inovação Tecnológica",
    title: "A estética evoluiu. Suas possibilidades também.",
    lead: "A evolução tecnológica trouxe novas alternativas para quem deseja melhorar a firmeza da pele sem recorrer a uma mastopexia cirúrgica.",
    complement:
      "O Intimus Harmony reúne endolaser e criolipólise em um protocolo exclusivo desenvolvido na Clínica Umana.",
    procedureTarget: {
      label: "Sobre o procedimento",
      description:
        "O alvo do procedimento é exclusivamente a pele na camada da derme papilar (extremamente superficial) e os tecidos de sustentação da mama.",
    },
    situations: [
      {
        id: "amamentacao",
        number: "01",
        title: "Pós-amamentação",
        description: "Flacidez após a amamentação.",
      },
      {
        id: "emagrecimento",
        number: "02",
        title: "Pós-emagrecimento",
        description:
          "Flacidez após emagrecimento significativo, incluindo emagrecimento com medicamentos como Mounjaro.",
      },
      {
        id: "tempo",
        number: "03",
        title: "Passar dos anos",
        description: "Perda de firmeza com o passar dos anos.",
      },
    ],
    footnote: "A indicação depende de avaliação individual.",
  },

  howItWorks: {
    eyebrow: "Como Funciona",
    title: "Tecnologia e cuidado em uma abordagem personalizada.",
    steps: [
      {
        number: "01",
        title: "Sessão principal única",
        description: "O protocolo é planejado para uma sessão principal.",
        icon: "sparkles" as const,
      },
      {
        number: "02",
        title: "Duração de 4 a 7 horas",
        description: "O tempo varia conforme as características da região tratada.",
        icon: "clock" as const,
      },
      {
        number: "03",
        title: "Evolução progressiva",
        description:
          "O acompanhamento dos resultados acontece ao longo de aproximadamente 90 dias.",
        icon: "trending" as const,
      },
      {
        number: "04",
        title: "Sem repouso prolongado",
        description:
          "Em geral, permite o retorno às atividades cotidianas sem o mesmo período de recuperação de uma mastopexia cirúrgica.",
        icon: "shield" as const,
      },
    ],
    postCareNote:
      "São necessários cuidados posteriores, incluindo cinta, tape e restrição temporária de exercícios físicos, conforme orientação profissional.",
  },

  results: {
    eyebrow: "Resultados Reais",
    title: "Conheça nossos resultados.",
    disclaimer:
      "Os resultados variam conforme as características individuais. O procedimento não substitui a mastopexia cirúrgica.",
    /**
     * Fotografias reais fornecidas pela Clínica Umana, preservando proporções originais.
     */
    cases: [
      {
        id: "caso-01",
        label: "Caso 01 — Pós imediato Intimus Harmony",
        caption: "Antes e pós imediato do protocolo Intimus Harmony na Clínica Umana.",
        authorized: true,
        isIllustrativePreview: false,
        combinedSrc: "/images/results/caso-01-pos-imediato.jpg",
        combinedWidth: 1024,
        combinedHeight: 676,
        combinedAlt: "Resultado real de antes e pós imediato do protocolo Intimus Harmony — Caso 01",
      },
      {
        id: "caso-02",
        label: "Caso 02 — Evolução Intimus Harmony",
        caption: "Antes e depois do protocolo Intimus Harmony — acompanhamento clínico na Clínica Umana.",
        authorized: true,
        isIllustrativePreview: false,
        combinedSrc: "/images/results/caso-02-resultado.jpg",
        combinedWidth: 1024,
        combinedHeight: 567,
        combinedAlt: "Resultado real de antes e depois do protocolo Intimus Harmony — Caso 02",
        showBeforeAfterLabels: true,
      },
      {
        id: "caso-03",
        label: "Caso 03 — Comparativo imediato",
        caption: "Comparativo imediato durante a sessão: lado tratado vs. lado ainda não tratado.",
        authorized: true,
        isIllustrativePreview: false,
        combinedSrc: "/images/results/caso-03-comparativo.jpg",
        combinedWidth: 782,
        combinedHeight: 1024,
        combinedAlt: "Comparativo imediato entre lado tratado e lado não tratado — Caso 03",
        showBeforeAfterLabels: false,
        singleLabel: "Comparativo imediato • Lado tratado vs. lado não tratado",
      },
      {
        id: "caso-04",
        label: "Caso 04 — Comparativo imediato",
        caption: "Comparativo imediato durante a sessão: lado tratado vs. lado ainda não tratado.",
        authorized: true,
        isIllustrativePreview: false,
        combinedSrc: "/images/results/caso-04-comparativo.jpg",
        combinedWidth: 1024,
        combinedHeight: 837,
        combinedAlt: "Comparativo imediato entre lado tratado e lado não tratado — Caso 04",
        showBeforeAfterLabels: false,
        singleLabel: "Comparativo imediato • Lado tratado vs. lado não tratado",
      },
      {
        id: "caso-05",
        label: "Caso 05 — Comparativo imediato",
        caption: "Comparativo imediato durante a sessão: lado tratado vs. lado ainda não tratado.",
        authorized: true,
        isIllustrativePreview: false,
        combinedSrc: "/images/results/caso-05-comparativo.jpg",
        combinedWidth: 576,
        combinedHeight: 1024,
        combinedAlt: "Comparativo imediato entre lado tratado e lado não tratado — Caso 05",
        showBeforeAfterLabels: false,
        singleLabel: "Comparativo imediato • Lado tratado vs. lado não tratado",
      },
      {
        id: "caso-06",
        label: "Caso 06 — Antes e pós imediato",
        caption: "Comparativo antes e pós imediato de um lado durante o protocolo Intimus Harmony.",
        authorized: true,
        isIllustrativePreview: false,
        combinedSrc: "/images/results/caso-06-comparativo.jpg",
        combinedWidth: 576,
        combinedHeight: 1024,
        combinedAlt: "Comparativo antes e pós imediato do protocolo Intimus Harmony — Caso 06",
        showBeforeAfterLabels: false,
        singleLabel: "Antes (acima) • Pós imediato de um lado (abaixo)",
      },
    ] as ResultCase[],
  },

  socialProof: {
    eyebrow: "Prova Social",
    title: "O que nossas pacientes dizem.",
    subtitle:
      "Relatos reais enviados por pacientes no WhatsApp e Instagram, além da avaliação 4,9 estrelas no Google.",
    testimonials: [
      {
        id: "dep-01",
        label: "Depoimento real • WhatsApp",
        src: "/images/testimonials/depoimento-01.jpg",
        width: 648,
        height: 1024,
        alt: "Print de conversa real no WhatsApp de paciente relatando satisfação com o resultado e acompanhamento na Clínica Umana",
      },
      {
        id: "dep-02",
        label: "Depoimento real • WhatsApp",
        src: "/images/testimonials/depoimento-02.jpg",
        width: 587,
        height: 1024,
        alt: "Print de conversa real no WhatsApp de paciente celebrando a naturalidade e a confiança recuperada após o procedimento",
      },
      {
        id: "dep-03",
        label: "Depoimento real • WhatsApp",
        src: "/images/testimonials/depoimento-03.jpg",
        width: 692,
        height: 1024,
        alt: "Print de conversa real no WhatsApp de paciente elogiando o resultado e o atendimento da equipe e da Dra. Jessyca",
      },
      {
        id: "dep-04",
        label: "Depoimento real • Instagram",
        src: "/images/testimonials/depoimento-04.jpg",
        width: 709,
        height: 1024,
        alt: "Comentário real no Instagram de paciente elogiando a recuperação sem dor e o resultado do procedimento na Clínica Umana",
      },
    ] as TestimonialPrint[],
  },

  specialist: {
    eyebrow: "Responsável pelo Protocolo",
    title: "Um protocolo desenvolvido por quem entende de estética.",
    name: siteConfig.specialist.name,
    role: "Fisioterapeuta Dermatofuncional • Fundadora da Clínica Umana",
    description:
      "Fisioterapeuta com atuação em dermatofuncional, fundadora da Clínica Umana, com mais de 10 anos de experiência na área estética e criadora do protocolo Intimus Harmony.",
  },

  faq: {
    eyebrow: "Esclarecimentos",
    title: "Dúvidas frequentes",
    items: [
      {
        id: "cirurgia",
        question: "É uma cirurgia?",
        answer:
          "Não é uma mastopexia cirúrgica, mas envolve técnicas que exigem avaliação profissional e cuidados específicos.",
      },
      {
        id: "repouso",
        question: "Preciso ficar de repouso?",
        answer:
          "Em geral, não é necessário repouso prolongado. Existem cuidados posteriores, incluindo uso de cinta, tape e restrição temporária de exercícios físicos.",
      },
      {
        id: "resultados",
        question: "Quando aparecem os resultados?",
        answer:
          "A evolução é gradual, com acompanhamento por volta de 90 dias. Os resultados variam de pessoa para pessoa.",
      },
      {
        id: "pele-enrugada",
        question: "A pele vai ficar enrugada assim?",
        answer:
          "Logo após o laser, ocorre uma retração inicial da pele, que pode ser visível no pós-imediato. A firmeza e o aspecto da pele evoluem ao longo das semanas, e a avaliação do resultado costuma ser mais representativa entre 60 e 90 dias.",
      },
      {
        id: "contraindicacoes",
        question: "Quais são as contraindicações?",
        answer:
          "O procedimento não é indicado nas situações abaixo (a liberação depende sempre da avaliação individual):",
        bullets: [
          "Gestação ou amamentação.",
          "Infecção ou inflamação ativa na mama.",
          "Nódulo, secreção pelo mamilo, retração, dor localizada ou alteração mamária recente.",
          "Histórico pessoal ou familiar de câncer de mama.",
        ],
      },
      {
        id: "investimento",
        question: "Qual é o investimento?",
        answer: buildInvestmentAnswer(),
        requiresComplianceReview: true,
      },
    ] as FaqItem[],
  },

  finalCta: {
    eyebrow: "Avaliação Personalizada",
    title: "Descubra se o Intimus Harmony é para você.",
    description: "Agende sua avaliação presencial ou online com nossa equipe.",
    ctaLabel: "AGENDAR MINHA AVALIAÇÃO",
    locationInfo: "Clínica Umana • Jundiaí/SP",
  },
} as const;

function buildInvestmentAnswer(): string {
  const {
    showPublicTreatmentPrice,
    treatmentStartingPrice,
    showPublicEvaluationPrice,
    evaluationPrice,
  } = siteConfig.pricing;

  if (!showPublicTreatmentPrice) {
    return "O investimento varia conforme o protocolo indicado após avaliação individual. Nossa equipe compartilha todos os detalhes durante o atendimento.";
  }

  const base = `O tratamento tem investimento a partir de ${treatmentStartingPrice}, podendo variar conforme o protocolo indicado após avaliação.`;

  if (showPublicEvaluationPrice) {
    return `${base} A avaliação inicial tem valor de ${evaluationPrice}.`;
  }

  return base;
}
