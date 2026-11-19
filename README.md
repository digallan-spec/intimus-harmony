# Landing Page — Intimus Harmony (Clínica Umana)

Landing Page oficial do protocolo **Intimus Harmony**, desenvolvida em **Next.js + TypeScript + Tailwind CSS**, seguindo o Brand Book da **Clínica Umana** (`#091638`, `#CCA648`, `#D4E2E4`), com foco absoluto em performance mobile e conversão de leads vindos do Instagram para o WhatsApp comercial integrado ao Kommo.

## Estrutura do Projeto

```text
src/
├── app/
│   ├── globals.css           # Estilos globais + bloco pronto para fonte licenciada Qafinte
│   ├── layout.tsx            # SEO, Open Graph, fontes e AnalyticsProvider
│   └── page.tsx              # Composição das 7 seções oficiais
├── config/
│   └── site.ts               # Configurações centralizadas (WhatsApp, preços, imagens, registro, analytics)
├── data/
│   └── content.ts            # Textos de todas as seções, FAQ e lista de casos de resultados
├── lib/
│   ├── analytics.ts          # Captura de UTMs e eventos GA4 / GTM
│   └── whatsapp.ts           # Montagem e sanitização do link oficial wa.me para o Kommo
└── components/
    ├── AnalyticsProvider.tsx
    ├── layout/               # Header, Footer e MobileFloatingCta
    ├── sections/             # 7 seções dedicadas da LP
    └── ui/                   # BrandDecorations, UmanaLogo, ScheduleCtaButton
```

## 1. Como executar localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse `http://localhost:3000`.

Para validar tipagem e build de produção:

```bash
npm run typecheck
npm run build
```

## 2. Configuração de Variáveis de Ambiente (`.env.local`)

Crie o arquivo `.env.local` a partir do `.env.example`:

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número oficial do WhatsApp comercial (somente dígitos com DDI e DDD, ex.: `5511999999999`). **Não inventar número.** |
| `NEXT_PUBLIC_SITE_URL` | URL canônica do domínio próprio publicado (para SEO e Open Graph). |
| `NEXT_PUBLIC_SHOW_PUBLIC_PRICE` | `true` ou `false` — controla a exibição pública do valor inicial de tratamento (`R$ 9.000`) no FAQ. |
| `NEXT_PUBLIC_SHOW_EVALUATION_PRICE` | `true` ou `false` — controla a exibição pública do valor da avaliação (`R$ 100`, já salvo no cadastro interno em `src/config/site.ts`, oculto por padrão). |
| `NEXT_PUBLIC_PROFESSIONAL_REGISTRY` | Registro profissional confirmado da responsável técnica Jessyca B. Gallani. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID oficial do Google Analytics 4 (opcional, ex.: `G-XXXXXXXXXX`). |
| `NEXT_PUBLIC_GTM_ID` | ID oficial do Google Tag Manager (opcional, ex.: `GTM-XXXXXXX`). |

## 3. Integração WhatsApp + Kommo

Todos os botões **AGENDAR MINHA AVALIAÇÃO** utilizam `src/lib/whatsapp.ts` e montam automaticamente o link oficial:

```text
https://wa.me/<NEXT_PUBLIC_WHATSAPP_NUMBER>?text=Ol%C3%A1!%20Vim%20do%20Instagram%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20do%20Intimus%20Harmony.
```

- A mensagem preserva exatamente o termo **Intimus Harmony** para roteamento automático no Kommo.
- Enquanto `NEXT_PUBLIC_WHATSAPP_NUMBER` estiver vazio, os botões exibem um aviso informativo de prévia sem redirecionar para nenhum telefone fictício.

## 4. Como inserir os materiais oficiais da Clínica Umana

1. **Fonte oficial Qafinte:**
   - Copie `Qafinte-Regular.woff2` para `public/fonts/`.
   - Descomente o bloco `@font-face` em `src/app/globals.css` e ajuste `--font-qafinte: "Qafinte";`.
2. **Logotipo oficial:**
   - Copie o arquivo oficial (`logo-umana.svg` ou `.png`, e opcionalmente versão clara `logo-umana-claro.svg`) para `public/images/`.
   - Informe os caminhos em `siteConfig.brand.logoSrc` e `siteConfig.brand.logoDarkSrc` no arquivo `src/config/site.ts`.
3. **Fotografia do Hero e da Especialista:**
   - Salve as fotos oficiais em `public/images/` (`hero-umana.jpg` e `jessyca-gallani.jpg`).
   - Atualize `siteConfig.media.heroImageSrc` e `siteConfig.specialist.photoSrc` em `src/config/site.ts`.
4. **Galeria de Resultados Reais (Antes e Depois):**
   - Salve apenas fotografias clínicas reais e autorizadas em `public/images/results/`.
   - Atualize o array `landingContent.results.cases` em `src/data/content.ts` com `beforeSrc`, `afterSrc`, dimensões originais e `authorized: true`.

## 5. Eventos de Conversão e UTMs

Os parâmetros UTM (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) são capturados na entrada e enviados junto aos eventos:

- `lp_view`: visualização da Landing Page.
- `cta_schedule_click`: clique nos botões de agendamento (`header`, `hero`, `final_cta`, `mobile_floating`).
- `faq_interaction`: abertura/fechamento de cada pergunta do FAQ.
- `gallery_navigation`: navegação entre casos na galeria de resultados.

## 6. Publicação na Vercel (com domínio próprio)

1. Faça push deste repositório para o GitHub (`https://github.com/digallan-spec/intimus-harmony.git`).
2. Acesse [vercel.com](https://vercel.com), importe o repositório `intimus-harmony`.
3. Em **Settings → Environment Variables**, adicione as variáveis do `.env.example` (especialmente `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SITE_URL` e flags de preço/registro).
4. Em **Settings → Domains**, conecte o domínio próprio da Clínica Umana seguindo os registros DNS indicados pela Vercel.

## 7. Checklist antes de publicar em produção

- [ ] Inserir logotipo oficial da Clínica Umana.
- [ ] Adicionar arquivo licenciado da fonte Qafinte.
- [ ] Inserir fotografia oficial da clínica/procedimento no Hero.
- [ ] Inserir fotografia profissional de Jessyca B. Gallani.
- [ ] Inserir fotografias reais autorizadas de antes e depois na galeria.
- [ ] Preencher `NEXT_PUBLIC_WHATSAPP_NUMBER` com o número oficial conectado ao Kommo.
- [ ] Preencher `NEXT_PUBLIC_PROFESSIONAL_REGISTRY` com o registro profissional confirmado.
- [ ] Validar com a responsável técnica as descrições clínicas, cuidados posteriores e exibição pública de valores (`NEXT_PUBLIC_SHOW_PUBLIC_PRICE` e `NEXT_PUBLIC_SHOW_EVALUATION_PRICE`).
- [ ] Configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` ou `NEXT_PUBLIC_GTM_ID`, se aplicável.
