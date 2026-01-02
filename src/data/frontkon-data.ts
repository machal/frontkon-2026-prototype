import { FrontKonData, LocalizedText } from './types';

const placeholderPhoto = (name: string) =>
  `https://placehold.co/320x320/eeeeee/111111?text=${encodeURIComponent(name)}`;

const ytPlaceholder = 'dQw4w9WgXcQ';

const l = (cs: string, en: string): LocalizedText => ({ cs, en });

export const frontKonData: FrontKonData = {
  years: [
    { id: '2020', year: 2020, location: 'Praha', date: '3. října 2020', claim: l('Zpátky na stage', 'Back on stage') },
    { id: '2021', year: 2021, location: 'Praha', date: '2. října 2021', claim: l('Hybridní konferenční rok', 'Hybrid conference year') },
    { id: '2022', year: 2022, location: 'Praha', date: '1. října 2022', claim: l('Scale-up frontendu', 'Scaling up frontend') },
    { id: '2023', year: 2023, location: 'Praha', date: '7. října 2023', claim: l('Design systémy všude', 'Design systems everywhere') },
    { id: '2024', year: 2024, location: 'Praha, O2 Universum', date: '5. října 2024', claim: l('Frontend v produkci', 'Frontend in production') },
    { id: '2025', year: 2025, location: 'Praha, O2 Universum', date: '4. října 2025', claim: l('AI a DX na maximum', 'AI and DX to the max') },
    { id: '2026', year: 2026, location: 'Praha, O2 Universum', date: '3. října 2026', claim: l('Tvoříme budoucnost UX', 'Shaping the future of UX') },
  ],
  topics: [
    { id: 'react', name: l('React', 'React') },
    { id: 'typescript', name: l('TypeScript', 'TypeScript') },
    { id: 'accessibility', name: l('Přístupnost', 'Accessibility') },
    { id: 'performance', name: l('Výkon', 'Performance') },
    { id: 'testing', name: l('Testování', 'Testing') },
    { id: 'vue', name: l('Vue', 'Vue') },
    { id: 'css', name: l('CSS', 'CSS') },
    { id: 'svelte', name: l('Svelte', 'Svelte') },
    { id: 'designsystems', name: l('Design systémy', 'Design systems') },
    { id: 'webcomponents', name: l('Web Components', 'Web Components') },
  ],
  speakers: [
    { id: 'sp-01', name: 'Jan Novák', company: 'TechCorp', photo_url: placeholderPhoto('Jan'), bio: l('Senior frontend architekt zaměřený na React a RSC. Vede týmy při migraci na server components a performance budżety.', 'Senior frontend architect focused on React and RSC. Leads teams migrating to server components with strict performance budgets.'), links: { twitter: '@jannovak', github: 'jannovak' } },
    { id: 'sp-02', name: 'Marie Svobodová', company: 'DesignStudio', photo_url: placeholderPhoto('Marie'), bio: l('UX designerka prosazující přístupnost od návrhu. Staví design systémy, které obstojí v auditech.', 'UX designer pushing accessibility from design. Builds design systems that pass demanding audits.'), links: { twitter: '@mariesvobodova', web: 'https://mariesvobodova.cz' } },
    { id: 'sp-03', name: 'Tomáš Dvořák', company: 'StartupXYZ', photo_url: placeholderPhoto('Tomáš'), bio: l('Full-stack vývojář a propagátor moderního JavaScriptu. Staví produkty v malých týmech s rychlým cyklem.', 'Full-stack developer and modern JS advocate. Ships products with small teams on fast cycles.'), links: { github: 'tomasdvorak' } },
    { id: 'sp-04', name: 'Petr Novotný', company: 'BigTech', photo_url: placeholderPhoto('Petr'), bio: l('Architekt škálovatelných SPA/MPA řešení. Navrhuje platformy pro stovky vývojářů.', 'Architect of scalable SPA/MPA solutions. Designs platforms serving hundreds of engineers.'), links: { twitter: '@petrnovotny', linkedin: 'petrnovotny' } },
    { id: 'sp-05', name: 'Anna Procházková', company: 'DesignAgency', photo_url: placeholderPhoto('Anna'), bio: l('CSS expertka s citem pro design systémy. Vede audit stylů a zavádí tokeny.', 'CSS expert with a feel for design systems. Leads style audits and token adoption.'), links: { twitter: '@annaprochazkova' } },
    { id: 'sp-06', name: 'Jakub Svoboda', company: 'VueCorp', photo_url: placeholderPhoto('Jakub'), bio: l('Vue evangelista a autor OSS knihoven. Pomáhá firmám s adopcí Vue ve velkém měřítku.', 'Vue evangelist and OSS library author. Helps companies adopt Vue at scale.'), links: { github: 'jakubsvoboda', web: 'https://jakubsvoboda.dev' } },
    { id: 'sp-07', name: 'Lucie Dvořáková', company: 'PerfLab', photo_url: placeholderPhoto('Lucie'), bio: l('Performance engineer pro rychlé weby. Měří a ladí metriky až na úroveň bytecode.', 'Performance engineer for fast web apps. Tunes metrics down to bytecode-level optimizations.'), links: { twitter: '@luciedvorakova' } },
    { id: 'sp-08', name: 'Martin Kratochvíl', company: 'SvelteDev', photo_url: placeholderPhoto('Martin'), bio: l('Svelte enthusiast a tvůrce moderních aplikací. Experimentuje s novými runtimy a signály.', 'Svelte enthusiast building modern apps. Experiments with new runtimes and signals.'), links: { github: 'martinkratochvil' } },
    { id: 'sp-09', name: 'Eva Nováková', company: 'A11yExperts', photo_url: placeholderPhoto('Eva'), bio: l('Konzultantka inkluzivního designu a auditu přístupnosti. Vede týmy k WCAG AA i AAA.', 'Consultant for inclusive design and accessibility audits. Guides teams to WCAG AA/AAA compliance.'), links: { twitter: '@evanovakova', web: 'https://a11yexperts.cz' } },
    { id: 'sp-10', name: 'David Horák', company: 'TSExperts', photo_url: placeholderPhoto('David'), bio: l('TypeScript specialista a mentor. Pomáhá stavět sdílené typované SDKs.', 'TypeScript specialist and mentor. Helps build shared typed SDKs.'), links: { github: 'davidhorak', twitter: '@davidhorak' } },
    { id: 'sp-11', name: 'Tereza Svobodová', company: 'MobileDev', photo_url: placeholderPhoto('Tereza'), bio: l('React Native vývojářka se zaměřením na UX. Spojuje mobil a web do jednoho design systému.', 'React Native developer focused on UX. Bridges mobile and web into one design system.'), links: { twitter: '@terezasvobodova' } },
    { id: 'sp-12', name: 'Ondřej Procházka', company: 'WebComponents', photo_url: placeholderPhoto('Ondřej'), bio: l('Evangelista Web Components a design tokenů. Buduje knihovny pro více frameworků.', 'Web Components and design tokens evangelist. Builds multi-framework component libraries.'), links: { github: 'ondrejprochazka' } },
    { id: 'sp-13', name: 'Kateřina Nová', company: 'DesignSystems', photo_url: placeholderPhoto('Kateřina'), bio: l('Architektka design systémů pro enterprise. Řídí governance a adopci napříč týmy.', 'Design systems architect for enterprise. Manages governance and adoption across teams.'), links: { twitter: '@katerinanova' } },
    { id: 'sp-14', name: 'Filip Dvořák', company: 'NextDev', photo_url: placeholderPhoto('Filip'), bio: l('Next.js expert se zkušeností s produkčním RSC. Vede rollout do high-traffic projektů.', 'Next.js expert with production RSC experience. Leads rollouts to high-traffic products.'), links: { github: 'filipdvorak', web: 'https://nextdev.cz' } },
    { id: 'sp-15', name: 'Barbora Svobodová', company: 'TestLab', photo_url: placeholderPhoto('Barbora'), bio: l('Specialistka na automatizované testování FE. Staví vizuální regresní testy a QA procesy.', 'Specialist in automated frontend testing. Builds visual regression and QA pipelines.'), links: { twitter: '@barborasvobodova' } },
    { id: 'sp-16', name: 'Marek Černý', company: 'EdgeOps', photo_url: placeholderPhoto('Marek'), bio: l('Edge rendering a CDN optimalizace. Doručuje nízkou latenci globálním uživatelům.', 'Edge rendering and CDN optimization. Delivers low-latency experiences globally.'), links: { github: 'marekcerny' } },
    { id: 'sp-17', name: 'Jana Veselá', company: 'DX Studio', photo_url: placeholderPhoto('Jana'), bio: l('Developer experience a nástroje pro týmy. Navrhuje CLI, šablony a scaffoldy.', 'Developer experience and tooling for teams. Designs CLI tools, templates, and scaffolds.'), links: { twitter: '@jana_dxes' } },
    { id: 'sp-18', name: 'Pavel Horský', company: 'AI Frontiers', photo_url: placeholderPhoto('Pavel'), bio: l('AI asistované prototypování UI. Spojuje generativní AI s produktovým discovery.', 'AI-assisted UI prototyping. Blends generative AI with product discovery.'), links: { web: 'https://aifrontiers.dev' } },
    { id: 'sp-19', name: 'Simona Říhová', company: 'CloudNative', photo_url: placeholderPhoto('Simona'), bio: l('Cloud native FE architektury a observabilita. Zavádí tracing a RUM pro FE.', 'Cloud-native FE architectures and observability. Implements tracing and RUM for FE.'), links: { linkedin: 'simonarihova' } },
    { id: 'sp-20', name: 'Roman Jelínek', company: 'SecureWeb', photo_url: placeholderPhoto('Roman'), bio: l('Bezpečnost frontendu a supply chain. Školí týmy v SRI, SBOM a podpisu balíčků.', 'Frontend security and supply chain. Trains teams on SRI, SBOM, and package signing.'), links: { twitter: '@romansecure' } },
    { id: 'sp-21', name: 'Jo Franchetti', company: 'Deno', photo_url: placeholderPhoto('Jo Franchetti'), bio: l('Jo je DevRel inženýrka ve společnosti Deno. S nadšením se věnuje zlepšování developer experience a výuce správného používání JS a TS.', 'Jo is a DevRel engineer at Deno. Passionately focused on improving developer experience and teaching proper use of JS and TS.'), links: { linkedin: 'thisisjofrank', web: 'https://www.instagram.com/thisisjofrank/' } },
    { id: 'sp-22', name: 'Manuel Matuzović', company: 'Independent', photo_url: placeholderPhoto('Manuel Matuzović'), bio: l('Manuel je frontendový vývojář, konzultant, autor a specialista na přístupnost z Vídně, nyní působící v Grazu. Jeho vášní jsou webové standardy, progresivní vylepšování a rozsáhlé CSS.', 'Manuel is a frontend developer, consultant, author and accessibility specialist from Vienna, now based in Graz. His passion is web standards, progressive enhancement and extensive CSS.'), links: { web: 'https://www.matuzo.at/' } },
    { id: 'sp-23', name: 'Riki Fridrich', company: 'Independent', photo_url: placeholderPhoto('Riki Fridrich'), bio: l('Píše v JavaScriptu. Učí ostatní, jak psát v JavaScriptu. Přednáší na konferencích a setkáních. Většinou o JavaScriptu.', 'Writes in JavaScript. Teaches others how to write in JavaScript. Speaks at conferences and meetups. Mostly about JavaScript.'), links: { web: 'https://fczbkk.com/', linkedin: 'fczbkk' } },
    { id: 'sp-24', name: 'Ondřej Žára', company: 'Seznam.cz', photo_url: placeholderPhoto('Ondřej Žára'), bio: l('Ondřej je frontend vývojář z Prahy, který pracuje pro Seznam.cz. Pravidelně přednáší technické témata – na konferencích, meetupech a univerzitách. Ondřej napsal dvě knihy o JavaScriptu a často přispívá k open-source projektům.', 'Ondřej is a frontend developer from Prague working for Seznam.cz. Regularly speaks on technical topics at conferences, meetups and universities. Ondřej wrote two books on JavaScript and often contributes to open-source projects.'), links: { web: 'https://ondras.zarovi.cz/', twitter: '@ondras' } },
    { id: 'sp-25', name: 'Robin Pokorný', company: 'Ataccama', photo_url: placeholderPhoto('Robin Pokorný'), bio: l('Robin je socio-technický softwarový architekt v Berlíně, který pracuje pro Ataccama, globální společnost zabývající se správou dat. Je také spolumoderátorem komunitního podcastu FrontKec.', 'Robin is a socio-technical software architect in Berlin working for Ataccama, a global data management company. He is also co-host of the community podcast FrontKec.'), links: { web: 'https://robinpokorny.com/', linkedin: 'robinpokorny' } },
  ],
  talks: [
    { id: 't-2020-01', title: l('React 17 bez magie', 'React 17 demystified'), description: l('Jak jsme migrovali velkou aplikaci na React 17.', 'How we migrated a large app to React 17.'), speakerId: 'sp-01', topicIds: ['react'], yearId: '2020', stage: 'A', time: '10:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2020-02', title: l('TypeScript utility patterns', 'TypeScript utility patterns'), description: l('Praktické příklady utility typů.', 'Practical examples of utility types.'), speakerId: 'sp-10', topicIds: ['typescript'], yearId: '2020', stage: 'B', time: '11:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2020-03', title: l('Přístupnost není volitelná', 'Accessibility is not optional'), description: l('Dostupnost pro všechny uživatele.', 'Accessibility for every user.'), speakerId: 'sp-09', topicIds: ['accessibility'], yearId: '2020', stage: 'C', time: '13:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2020-04', title: l('Výkon React aplikací', 'React performance playbook'), description: l('Profilování a optimalizace.', 'Profiling and optimization.'), speakerId: 'sp-07', topicIds: ['performance', 'react'], yearId: '2020', stage: 'A', time: '15:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2020-05', title: l('Testování komponent', 'Testing components'), description: l('RTL, Jest a edge případy.', 'RTL, Jest and edge cases.'), speakerId: 'sp-15', topicIds: ['testing'], yearId: '2020', stage: 'B', time: '16:00', language: 'cs', youtubeId: ytPlaceholder },

    { id: 't-2021-01', title: l('Vue 3 Composition API', 'Vue 3 Composition API'), description: l('Jak psát udržitelné composables.', 'How to write sustainable composables.'), speakerId: 'sp-06', topicIds: ['vue'], yearId: '2021', stage: 'A', time: '10:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2021-02', title: l('CSS Grid v produkci', 'CSS Grid in production'), description: l('Grid layouty pro složité UI.', 'Grid layouts for complex UIs.'), speakerId: 'sp-05', topicIds: ['css'], yearId: '2021', stage: 'B', time: '11:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2021-03', title: l('React Performance Patterns', 'React performance patterns'), description: l('Memo, concurrency a suspense.', 'Memo, concurrency and suspense.'), speakerId: 'sp-04', topicIds: ['react', 'performance'], yearId: '2021', stage: 'A', time: '13:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2021-04', title: l('Accessibility first', 'Accessibility first'), description: l('Jak začít inkluzivně.', 'Starting inclusive.'), speakerId: 'sp-02', topicIds: ['accessibility'], yearId: '2021', stage: 'C', time: '14:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2021-05', title: l('TypeScript v týmu', 'TypeScript at scale'), description: l('Dohody, lint a migrační strategie.', 'Conventions, linting and migration strategies.'), speakerId: 'sp-10', topicIds: ['typescript'], yearId: '2021', stage: 'B', time: '15:00', language: 'cs', youtubeId: ytPlaceholder },

    { id: 't-2022-01', title: l('Svelte: jiná reaktivita', 'Svelte: different reactivity'), description: l('Co znamená kompilace do vanilla JS.', 'What compiling to vanilla JS means.'), speakerId: 'sp-08', topicIds: ['svelte'], yearId: '2022', stage: 'B', time: '10:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2022-02', title: l('Next.js 13 App Router', 'Next.js 13 App Router'), description: l('Server Components v praxi.', 'Server Components in practice.'), speakerId: 'sp-14', topicIds: ['react'], yearId: '2022', stage: 'A', time: '11:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2022-03', title: l('Web Components v design systémech', 'Web Components in design systems'), description: l('Hybridní knihovny pro více frameworků.', 'Hybrid libraries for multiple frameworks.'), speakerId: 'sp-12', topicIds: ['webcomponents', 'designsystems'], yearId: '2022', stage: 'C', time: '13:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2022-04', title: l('Container Queries', 'Container Queries'), description: l('Nová éra responzivních layoutů.', 'New era of responsive layouts.'), speakerId: 'sp-05', topicIds: ['css'], yearId: '2022', stage: 'B', time: '14:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2022-05', title: l('Testing strategies', 'Testing strategies'), description: l('Od unitů po E2E na FE.', 'From unit to E2E on FE.'), speakerId: 'sp-15', topicIds: ['testing'], yearId: '2022', stage: 'A', time: '15:00', language: 'cs', youtubeId: ytPlaceholder },

    { id: 't-2023-01', title: l('React Server Components hluboko', 'React Server Components deep dive'), description: l('Server-first mindset pro FE.', 'Server-first mindset for FE.'), speakerId: 'sp-01', topicIds: ['react'], yearId: '2023', stage: 'A', time: '09:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-02', title: l('Architektura design systémů', 'Design systems architecture'), description: l('Tokeny, governance, delivery.', 'Tokens, governance, delivery.'), speakerId: 'sp-13', topicIds: ['designsystems'], yearId: '2023', stage: 'B', time: '11:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-03', title: l('Vue 3 performance', 'Vue 3 performance'), description: l('Ladění reaktivity a renderů.', 'Tuning reactivity and renders.'), speakerId: 'sp-06', topicIds: ['vue', 'performance'], yearId: '2023', stage: 'C', time: '13:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-04', title: l('Mobile first v praxi', 'Mobile first in practice'), description: l('Jak to dělat opravdu mobile-first.', 'How to be truly mobile-first.'), speakerId: 'sp-11', topicIds: ['css', 'performance'], yearId: '2023', stage: 'B', time: '14:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-05', title: l('TypeScript 5.0', 'TypeScript 5.0'), description: l('Novinky a migrace.', 'What is new and migrations.'), speakerId: 'sp-10', topicIds: ['typescript'], yearId: '2023', stage: 'A', time: '15:00', language: 'cs', youtubeId: ytPlaceholder },

    { id: 't-2024-01', title: l('RSC v produkci', 'RSC in production'), description: l('Lessons learned z velkého rolloutu.', 'Lessons learned from a big rollout.'), speakerId: 'sp-14', topicIds: ['react'], yearId: '2024', stage: 'A', time: '10:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-02', title: l('Design Tokens workflow', 'Design tokens workflow'), description: l('Automatizace tokenů napříč platformami.', 'Token automation across platforms.'), speakerId: 'sp-12', topicIds: ['designsystems', 'webcomponents'], yearId: '2024', stage: 'B', time: '11:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-03', title: l('Přístupnost v CI', 'Accessibility in CI'), description: l('Jak hlídat a11y v pipelinech.', 'How to guard a11y in pipelines.'), speakerId: 'sp-09', topicIds: ['accessibility', 'testing'], yearId: '2024', stage: 'C', time: '13:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-04', title: l('Cascade Layers prakticky', 'Cascade Layers in practice'), description: l('Kdy layering pomůže a kdy brzdí.', 'When layering helps and when it hurts.'), speakerId: 'sp-05', topicIds: ['css'], yearId: '2024', stage: 'B', time: '14:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-05', title: l('Vue Patterns 2024', 'Vue patterns 2024'), description: l('Composable architektura pro velké týmy.', 'Composable architecture for big teams.'), speakerId: 'sp-06', topicIds: ['vue'], yearId: '2024', stage: 'A', time: '15:00', language: 'cs', youtubeId: ytPlaceholder },

    { id: 't-2025-01', title: l('React 20 preview', 'React 20 preview'), description: l('Co čekat od další verze.', 'What to expect next.'), speakerId: 'sp-01', topicIds: ['react'], yearId: '2025', stage: 'A', time: '09:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-02', title: l('TypeScript 5.5', 'TypeScript 5.5'), description: l('Novinky a tooling.', 'New features and tooling.'), speakerId: 'sp-10', topicIds: ['typescript'], yearId: '2025', stage: 'B', time: '10:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-03', title: l('Performance budgets', 'Performance budgets'), description: l('Jak je držet v CI.', 'How to enforce them in CI.'), speakerId: 'sp-07', topicIds: ['performance'], yearId: '2025', stage: 'A', time: '12:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-04', title: l('Design tokens v enterprise', 'Design tokens in enterprise'), description: l('Governance ve velkých firmách.', 'Governance in large companies.'), speakerId: 'sp-13', topicIds: ['designsystems'], yearId: '2025', stage: 'B', time: '13:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-05', title: l('Web Components best practices', 'Web Components best practices'), description: l('Od Shadow DOM po bundling.', 'From Shadow DOM to bundling.'), speakerId: 'sp-12', topicIds: ['webcomponents'], yearId: '2025', stage: 'C', time: '14:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-06', title: l('DX jako produkt', 'DX as a product'), description: l('Jak budovat DX týmy.', 'How to build DX teams.'), speakerId: 'sp-17', topicIds: ['performance', 'testing'], yearId: '2025', stage: 'A', time: '15:00', language: 'cs', youtubeId: ytPlaceholder },

    { id: 't-2026-01', title: l('AI pro prototypování UI', 'AI for UI prototyping'), description: l('Jak nám AI zkrátila discovery fázi.', 'How AI shortened the discovery phase.'), speakerId: 'sp-18', topicIds: ['designsystems', 'performance'], yearId: '2026', stage: 'A', time: '09:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2026-02', title: l('Edge rendering v praxi', 'Edge rendering in practice'), description: l('Latency, cache a bezpečnost.', 'Latency, cache and security.'), speakerId: 'sp-16', topicIds: ['performance', 'react'], yearId: '2026', stage: 'B', time: '10:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2026-03', title: l('Cloud-native frontend', 'Cloud-native frontend'), description: l('Micro-frontends, observabilita, tracing.', 'Micro-frontends, observability, tracing.'), speakerId: 'sp-19', topicIds: ['performance'], yearId: '2026', stage: 'C', time: '11:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2026-04', title: l('Bezpečnost supply chain', 'Supply chain security'), description: l('PNPM, SRI a audity.', 'PNPM, SRI and audits.'), speakerId: 'sp-20', topicIds: ['testing'], yearId: '2026', stage: 'B', time: '13:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2026-05', title: l('Rychlé UI bez frameworku', 'Fast UI without a framework'), description: l('Progressive enhancement 2026.', 'Progressive enhancement 2026.'), speakerId: 'sp-03', topicIds: ['performance'], yearId: '2026', stage: 'A', time: '14:00', language: 'en', youtubeId: ytPlaceholder },
    { id: 't-2026-06', title: l('Design systémy a AI', 'Design systems & AI'), description: l('Generování komponent z tokenů.', 'Generating components from tokens.'), speakerId: 'sp-13', topicIds: ['designsystems'], yearId: '2026', stage: 'B', time: '15:00', language: 'en', youtubeId: ytPlaceholder },
    { id: 't-2026-07', title: l('Svelte 5 signály', 'Svelte 5 signals'), description: l('Co přináší nový runtime.', 'What the new runtime brings.'), speakerId: 'sp-08', topicIds: ['svelte'], yearId: '2026', stage: 'C', time: '16:00', language: 'en', youtubeId: ytPlaceholder },

    // extra 2020
    { id: 't-2020-06', title: l('State management bez Reduxu', 'State without Redux'), description: l('Lehčí přístup ke správě stavu v Reactu.', 'Lighter state management approaches.'), speakerId: 'sp-04', topicIds: ['react'], yearId: '2020', stage: 'B', time: '17:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2020-07', title: l('CI/CD pro frontend', 'CI/CD for frontend'), description: l('Pipeline, preview deploys a kvalita.', 'Pipelines, preview deploys and quality gates.'), speakerId: 'sp-17', topicIds: ['testing', 'performance'], yearId: '2020', stage: 'C', time: '17:30', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2021
    { id: 't-2021-06', title: l('Design tokens v praxi', 'Design tokens in practice'), description: l('Jak je zavést do starších projektů.', 'How to roll them into legacy projects.'), speakerId: 'sp-12', topicIds: ['designsystems'], yearId: '2021', stage: 'B', time: '16:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2021-07', title: l('Přístupnost formulářů', 'Form accessibility'), description: l('Validace, ARIA a UX.', 'Validation, ARIA and UX.'), speakerId: 'sp-02', topicIds: ['accessibility'], yearId: '2021', stage: 'C', time: '16:30', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2022
    { id: 't-2022-06', title: l('Testing na hraně', 'Testing at the edge'), description: l('E2E na edge prostředí.', 'E2E on edge environments.'), speakerId: 'sp-15', topicIds: ['testing'], yearId: '2022', stage: 'A', time: '16:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2022-07', title: l('CSS performance', 'CSS performance'), description: l('Kdy CSS zpomaluje a jak to měřit.', 'When CSS slows you down and how to measure.'), speakerId: 'sp-05', topicIds: ['css', 'performance'], yearId: '2022', stage: 'B', time: '16:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2022-08', title: l('Monorepo frontendu', 'Frontend monorepo'), description: l('Nx/Turborepo a hranice mezi týmy.', 'Nx/Turborepo and team boundaries.'), speakerId: 'sp-17', topicIds: ['typescript', 'react'], yearId: '2022', stage: 'C', time: '17:00', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2023
    { id: 't-2023-06', title: l('Storybook na steroidech', 'Storybook on steroids'), description: l('Docs, testy a vizuální regresní testy.', 'Docs, tests and visual regression.'), speakerId: 'sp-15', topicIds: ['testing', 'designsystems'], yearId: '2023', stage: 'B', time: '16:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-07', title: l('Serverless pro frontend', 'Serverless for frontend'), description: l('APIs, edge a náklady.', 'APIs, edge and cost control.'), speakerId: 'sp-16', topicIds: ['performance'], yearId: '2023', stage: 'C', time: '16:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-08', title: l('DX toolchain 2023', 'DX toolchain 2023'), description: l('Jak jsme stavěli interní CLI.', 'Building an internal CLI.'), speakerId: 'sp-17', topicIds: ['typescript'], yearId: '2023', stage: 'A', time: '17:00', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2024
    { id: 't-2024-06', title: l('React Native + Web sdílený kód', 'React Native + Web shared code'), description: l('Monorepo pro mobil i web.', 'Monorepo for mobile and web.'), speakerId: 'sp-11', topicIds: ['react'], yearId: '2024', stage: 'C', time: '16:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-07', title: l('AI pro kontrolu UI', 'AI for UI QA'), description: l('AI snapshoty a regresní testy.', 'AI snapshots and regression.'), speakerId: 'sp-18', topicIds: ['testing', 'performance'], yearId: '2024', stage: 'A', time: '16:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-08', title: l('Design ops v enterprise', 'Design ops in enterprise'), description: l('Governance a procesy.', 'Governance and processes.'), speakerId: 'sp-13', topicIds: ['designsystems'], yearId: '2024', stage: 'B', time: '17:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-09', title: l('Edge cache patterns', 'Edge cache patterns'), description: l('Strategie invalidace a BFF.', 'Invalidation strategies and BFF.'), speakerId: 'sp-16', topicIds: ['performance'], yearId: '2024', stage: 'A', time: '17:30', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2025
    { id: 't-2025-07', title: l('LLM pro frontaře', 'LLM for frontend'), description: l('Prompty pro UI a testy.', 'Prompts for UI and tests.'), speakerId: 'sp-18', topicIds: ['designsystems', 'testing'], yearId: '2025', stage: 'C', time: '16:00', language: 'en', youtubeId: ytPlaceholder },
    { id: 't-2025-08', title: l('Observabilita FE', 'FE observability'), description: l('OpenTelemetry a RUM.', 'OpenTelemetry and RUM.'), speakerId: 'sp-19', topicIds: ['performance'], yearId: '2025', stage: 'B', time: '16:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-09', title: l('Bezpečný supply chain', 'Secure supply chain'), description: l('Signing, SBOM a SRI.', 'Signing, SBOM and SRI.'), speakerId: 'sp-20', topicIds: ['testing'], yearId: '2025', stage: 'A', time: '17:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-10', title: l('Composable Commerce FE', 'Composable commerce FE'), description: l('Integrace headless stacku.', 'Integrating headless stacks.'), speakerId: 'sp-03', topicIds: ['react'], yearId: '2025', stage: 'B', time: '17:30', language: 'en', youtubeId: ytPlaceholder },

    // extra 2026
    { id: 't-2026-08', title: l('AI lint pro UI', 'AI lint for UI'), description: l('Automatická review vizuálních chyb.', 'Automatic review of visual defects.'), speakerId: 'sp-18', topicIds: ['testing'], yearId: '2026', stage: 'A', time: '17:00', language: 'en', youtubeId: ytPlaceholder },
    { id: 't-2026-09', title: l('RSC a CDN', 'RSC and CDN'), description: l('Distribuované renderování a cache.', 'Distributed rendering and cache.'), speakerId: 'sp-14', topicIds: ['react', 'performance'], yearId: '2026', stage: 'B', time: '17:30', language: 'en', youtubeId: ytPlaceholder },
    { id: 't-2026-10', title: l('Design AI pipelines', 'Design AI pipelines'), description: l('Jak kurátorovat výstupy z modelů.', 'Curating outputs from models.'), speakerId: 'sp-13', topicIds: ['designsystems'], yearId: '2026', stage: 'C', time: '18:00', language: 'en', youtubeId: ytPlaceholder },
    { id: 't-2026-11', title: l('Vue + TS v enterprise', 'Vue + TS in enterprise'), description: l('Scale patterns pro Vue 3.', 'Scale patterns for Vue 3.'), speakerId: 'sp-06', topicIds: ['vue', 'typescript'], yearId: '2026', stage: 'A', time: '18:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2026-12', title: l('A11y automatizace 2026', 'A11y automation 2026'), description: l('Nové nástroje a pravidla.', 'New tools and rules.'), speakerId: 'sp-09', topicIds: ['accessibility', 'testing'], yearId: '2026', stage: 'B', time: '19:00', language: 'cs', youtubeId: ytPlaceholder },

    // Starší přednášky pro Riki Fridricha (sp-23)
    { id: 't-2024-riki-01', title: l('JavaScript patterns v praxi', 'JavaScript patterns in practice'), description: l('Moderní přístupy k psaní JavaScriptu v produkci.', 'Modern approaches to writing JavaScript in production.'), speakerId: 'sp-23', topicIds: ['typescript'], yearId: '2024', stage: 'B', time: '14:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-riki-01', title: l('Učím JavaScript', 'Teaching JavaScript'), description: l('Jak efektivně učit JavaScript a co jsem se naučil z výuky.', 'How to effectively teach JavaScript and what I learned from teaching.'), speakerId: 'sp-23', topicIds: ['typescript'], yearId: '2023', stage: 'C', time: '15:00', language: 'cs', youtubeId: ytPlaceholder },

    // Starší přednášky pro Ondřeje Žáru (sp-24)
    { id: 't-2024-ondrej-01', title: l('TypeScript v produkci', 'TypeScript in production'), description: l('Zkušenosti s TypeScriptem ve velkých projektech.', 'Experience with TypeScript in large projects.'), speakerId: 'sp-24', topicIds: ['typescript'], yearId: '2024', stage: 'A', time: '11:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-ondrej-01', title: l('JavaScript knihovny a open source', 'JavaScript libraries and open source'), description: l('Jak přispívat k open source a budovat komunitu kolem knihoven.', 'How to contribute to open source and build community around libraries.'), speakerId: 'sp-24', topicIds: ['typescript'], yearId: '2023', stage: 'B', time: '13:00', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2020 extended
    { id: 't-2020-08', title: l('Refactoring legacy FE', 'Refactoring legacy FE'), description: l('Strategie pro údržbu starých SPA a postupnou modernizaci.', 'Strategies for maintaining legacy SPAs and progressive modernization.'), speakerId: 'sp-04', topicIds: ['react', 'typescript'], yearId: '2020', stage: 'A', time: '18:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2020-09', title: l('Design tokens v CSS preprocesorech', 'Design tokens in preprocessors'), description: l('Jak sladit Sass/Less s tokeny a build pipeline.', 'Aligning Sass/Less with tokens and build pipeline.'), speakerId: 'sp-05', topicIds: ['css', 'designsystems'], yearId: '2020', stage: 'B', time: '18:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2020-10', title: l('Observabilita frontendu', 'Frontend observability'), description: l('Logování, tracing a metriky pro FE aplikace.', 'Logging, tracing and metrics for FE apps.'), speakerId: 'sp-19', topicIds: ['performance'], yearId: '2020', stage: 'C', time: '19:00', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2021 extended
    { id: 't-2021-08', title: l('Serverless obrázky', 'Serverless images'), description: l('Optimalizace obrázků pomocí edge funkcí.', 'Image optimization via edge functions.'), speakerId: 'sp-16', topicIds: ['performance'], yearId: '2021', stage: 'A', time: '18:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2021-09', title: l('Next.js na intranetu', 'Next.js on intranet'), description: l('Distribuce privátních aplikací v enterprise prostředí.', 'Distributing private apps in enterprise.'), speakerId: 'sp-14', topicIds: ['react'], yearId: '2021', stage: 'B', time: '18:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2021-10', title: l('A11y testy v pipeline', 'A11y tests in pipeline'), description: l('Automatizované kontroly s axe a Playwrightem.', 'Automated checks with axe and Playwright.'), speakerId: 'sp-09', topicIds: ['accessibility', 'testing'], yearId: '2021', stage: 'C', time: '19:00', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2022 extended
    { id: 't-2022-09', title: l('Progressive Hydration', 'Progressive Hydration'), description: l('Jak odložit hydrataci a zrychlit first paint.', 'Deferring hydration to speed up first paint.'), speakerId: 'sp-07', topicIds: ['performance', 'react'], yearId: '2022', stage: 'A', time: '18:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2022-10', title: l('Storybook + Figma sync', 'Storybook + Figma sync'), description: l('Jak udržet komponenty a design v souladu.', 'Keeping components and design in sync.'), speakerId: 'sp-13', topicIds: ['designsystems'], yearId: '2022', stage: 'B', time: '18:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2022-11', title: l('API mocking na FE', 'API mocking for FE'), description: l('Contract testing, MSW a stabilní preview.', 'Contract testing, MSW and stable previews.'), speakerId: 'sp-03', topicIds: ['testing'], yearId: '2022', stage: 'C', time: '19:00', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2023 extended
    { id: 't-2023-09', title: l('Micro-frontends bez chaosu', 'Micro-frontends without chaos'), description: l('Jak zkrotit sdílené dependency a versioning.', 'Taming shared dependencies and versioning.'), speakerId: 'sp-04', topicIds: ['react'], yearId: '2023', stage: 'A', time: '18:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-10', title: l('Animations a UX', 'Animations and UX'), description: l('Motion guidelines pro utility-heavy aplikace.', 'Motion guidelines for utility-heavy apps.'), speakerId: 'sp-05', topicIds: ['css'], yearId: '2023', stage: 'B', time: '18:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-11', title: l('Security headers na FE', 'Security headers for FE'), description: l('CSP, COOP/COEP a bezpečné embedování.', 'CSP, COOP/COEP and safe embeds.'), speakerId: 'sp-20', topicIds: ['testing'], yearId: '2023', stage: 'C', time: '19:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2023-12', title: l('Design review ops', 'Design review ops'), description: l('Jak nastavit procesy pro design review ve velkých týmech.', 'Setting design review processes in large teams.'), speakerId: 'sp-13', topicIds: ['designsystems'], yearId: '2023', stage: 'A', time: '19:30', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2024 extended
    { id: 't-2024-10', title: l('Data viz v UI', 'Data viz in UI'), description: l('Jak dělat čitelné grafy pro business uživatele.', 'Readable charts for business users.'), speakerId: 'sp-03', topicIds: ['react'], yearId: '2024', stage: 'A', time: '18:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-11', title: l('Edge SSR latency', 'Edge SSR latency'), description: l('Optimalizace TTFB pro globální publikum.', 'TTFB optimization for global audiences.'), speakerId: 'sp-16', topicIds: ['performance'], yearId: '2024', stage: 'B', time: '18:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-12', title: l('Audit design systému', 'Design system audit'), description: l('Checklist pro konzistenci a adopci.', 'Checklist for consistency and adoption.'), speakerId: 'sp-13', topicIds: ['designsystems'], yearId: '2024', stage: 'C', time: '19:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2024-13', title: l('Mobily, výkon a bundly', 'Mobile, performance and bundles'), description: l('Jak držet bundle pod 150KB na mobilech.', 'Keeping bundles under 150KB on mobile.'), speakerId: 'sp-07', topicIds: ['performance'], yearId: '2024', stage: 'A', time: '19:30', language: 'cs', youtubeId: ytPlaceholder },

    // extra 2025 extended
    { id: 't-2025-11', title: l('Type-safe API vrstvy', 'Type-safe API layers'), description: l('OpenAPI/GraphQL generování typů a kontraktů.', 'OpenAPI/GraphQL type generation and contracts.'), speakerId: 'sp-10', topicIds: ['typescript'], yearId: '2025', stage: 'B', time: '18:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-12', title: l('RUM a UX metriky', 'RUM and UX metrics'), description: l('Jak interpretovat Core Web Vitals v reálném provozu.', 'Interpreting Core Web Vitals in the wild.'), speakerId: 'sp-19', topicIds: ['performance'], yearId: '2025', stage: 'C', time: '18:30', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-13', title: l('Multirepo orchestrace', 'Multirepo orchestration'), description: l('Kdy ne-monorepo dává smysl a jak ho řídit.', 'When multi-repo makes sense and how to run it.'), speakerId: 'sp-17', topicIds: ['react'], yearId: '2025', stage: 'A', time: '19:00', language: 'cs', youtubeId: ytPlaceholder },
    { id: 't-2025-14', title: l('Design pro AI produkty', 'Design for AI products'), description: l('Jak navrhovat UI pro generativní schopnosti.', 'Designing UI for generative capabilities.'), speakerId: 'sp-18', topicIds: ['designsystems'], yearId: '2025', stage: 'B', time: '19:30', language: 'en', youtubeId: ytPlaceholder },

    // extra 2026 extended
    { id: 't-2026-13', title: l('Composable UI infra', 'Composable UI infra'), description: l('Jak skládat UI knihovny pro různé brandy.', 'Composing UI libraries for multiple brands.'), speakerId: 'sp-12', topicIds: ['webcomponents', 'designsystems'], yearId: '2026', stage: 'C', time: '19:30', language: 'en', youtubeId: ytPlaceholder },
    { id: 't-2026-14', title: l('Realtime UX bez bolesti', 'Realtime UX without pain'), description: l('Streaming, SSE a websockety pro produktové týmy.', 'Streaming, SSE and websockets for product teams.'), speakerId: 'sp-03', topicIds: ['react'], yearId: '2026', stage: 'A', time: '20:00', language: 'en', youtubeId: ytPlaceholder },
    { id: 't-2026-15', title: l('A11y a AI testy', 'A11y and AI tests'), description: l('Kombinace manuálních a AI nástrojů pro kontrolu přístupnosti.', 'Combining manual and AI tools for accessibility.'), speakerId: 'sp-09', topicIds: ['accessibility', 'testing'], yearId: '2026', stage: 'B', time: '20:30', language: 'cs', youtubeId: ytPlaceholder },
  ],
  workshops: [
    { id: 'w-2025-01', title: l('TypeScript pro leady', 'TypeScript for leads'), description: l('Jak vést týmy při adopci TS.', 'Leading teams adopting TS.'), audience: l('Tech leady, senior FE', 'Tech leads, senior FE'), program: l('Patterns, utility types, CI checks.', 'Patterns, utility types, CI checks.'), speakerId: 'sp-10', yearId: '2025', capacity: 40, duration: 180, price: '3200 CZK', date: '2025-06-10', time: '09:00' },
    { id: 'w-2025-02', title: l('Výkon v prohlížeči', 'Browser performance'), description: l('Hands-on s profilingem.', 'Hands-on profiling.'), audience: l('FE vývojáři', 'Frontend engineers'), program: l('Profilery, Lighthouse, budgets.', 'Profilers, Lighthouse, budgets.'), speakerId: 'sp-07', yearId: '2025', capacity: 35, duration: 150, price: '2800 CZK', date: '2025-06-10', time: '13:00' },
    { id: 'w-2025-03', title: l('Design tokens end-to-end', 'Design tokens end-to-end'), description: l('Token pipeline s toolingem.', 'Token pipeline with tooling.'), audience: l('Design ops, FE', 'Design ops, FE'), program: l('Token governance, build, distribuce.', 'Token governance, build, distribution.'), speakerId: 'sp-12', yearId: '2025', capacity: 30, duration: 160, price: '3000 CZK', date: '2025-06-11', time: '09:00' },
    { id: 'w-2026-01', title: l('AI prototypování UI', 'AI UI prototyping'), description: l('Propojení promptů, AI nástrojů a Figma pluginů pro rychlejší discovery. Workshop kombinuje praktické příklady s hands-on cvičením na vašich projektech.', 'Connecting prompts, AI tools, and Figma plugins for faster discovery. The workshop combines practical examples with hands-on exercises on your own projects.'), audience: l('Workshop je určený pro product designery, UX designery, frontend vývojáře a všechny, kdo chtějí zrychlit discovery fázi projektu pomocí AI. Očekáváme základní znalost Figmy nebo jiného designového nástroje.', 'The workshop is designed for product designers, UX designers, frontend developers, and anyone looking to accelerate the discovery phase of projects using AI. We expect basic knowledge of Figma or another design tool.'), program: l('Úvod do AI pro prototypování (30 min): Přehled nástrojů, možnosti a limity. Prompt engineering pro UI (45 min): Jak psát efektivní prompty pro generování komponent a layoutů. Figma + AI workflow (45 min): Integrace AI výstupů do Figma, pluginy a automatizace. Hands-on projekt (60 min): Účastníci si vyzkouší celý workflow na vlastním projektu nebo připraveném case study.', 'Introduction to AI for prototyping (30 min): Tool overview, capabilities and limitations. Prompt engineering for UI (45 min): How to write effective prompts for generating components and layouts. Figma + AI workflow (45 min): Integrating AI outputs into Figma, plugins and automation. Hands-on project (60 min): Participants try the entire workflow on their own project or a prepared case study.'), speakerId: 'sp-18', yearId: '2026', capacity: 50, duration: 180, price: '3500 CZK', date: '2026-10-02', time: '09:00' },
    { id: 'w-2026-02', title: l('Edge rendering hands-on', 'Edge rendering hands-on'), description: l('CDN, cache a SSR na okraji sítě pro rychlejší doručení obsahu. Prozkoumáme cache strategie, invalidaci a bezpečnostní aspekty edge renderingu.', 'CDN, cache and SSR at the network edge for faster content delivery. We explore cache strategies, invalidation and security aspects of edge rendering.'), audience: l('FE architekti', 'FE architects'), program: l('Cache strategie, invalidace, bezpečnost.', 'Cache strategies, invalidation, security.'), speakerId: 'sp-16', yearId: '2026', capacity: 40, duration: 170, price: '3400 CZK', date: '2026-10-02', time: '13:00' },
    { id: 'w-2026-03', title: l('Svelte 5 v produkci', 'Svelte 5 in production'), description: l('Migrace z předchozích verzí a produkční patterns pro Svelte 5. Zaměříme se na signals, nový runtime a optimalizaci bundlingu.', 'Migration from previous versions and production patterns for Svelte 5. We focus on signals, the new runtime and bundling optimization.'), audience: l('Svelte/FE vývojáři', 'Svelte/FE engineers'), program: l('Signals, migrace, bundling.', 'Signals, migration, bundling.'), speakerId: 'sp-08', yearId: '2026', capacity: 30, duration: 150, price: '2900 CZK', date: '2026-10-03', time: '09:00' },
    { id: 'w-2026-04', title: l('Security pro FE', 'Security for FE'), description: l('Audit build pipeline a závislostí pro bezpečnější frontend. Projdeme SRI, SBOM, podepisování balíčků a CSP hlavičky.', 'Auditing build pipelines and dependencies for a more secure frontend. We cover SRI, SBOM, package signing and CSP headers.'), audience: l('FE, DevOps, security', 'FE, DevOps, security'), program: l('SRI, SBOM, signing, CSP.', 'SRI, SBOM, signing, CSP.'), speakerId: 'sp-20', yearId: '2026', capacity: 45, duration: 150, price: '3100 CZK', date: '2026-10-03', time: '13:00' },
    { id: 'w-2026-05', title: l('DX Tooling Lab', 'DX Tooling Lab'), description: l('Jak postavit interní CLI a šablony pro lepší developer experience. Prozkoumáme monorepo tooling, generátory a automatizaci pipeline.', 'Building internal CLI and templates for better developer experience. We explore monorepo tooling, generators and pipeline automation.'), audience: l('DX týmy, tech leady', 'DX teams, tech leads'), program: l('Monorepo tooling, generátory, pipeline.', 'Monorepo tooling, generators, pipeline.'), speakerId: 'sp-17', yearId: '2026', capacity: 35, duration: 160, price: '3200 CZK', date: '2026-10-04', time: '09:00' },
    { id: 'w-2026-06', title: l('Type-safe backend for frontend', 'Type-safe backend for frontend'), description: l('BFF vrstvy s TypeScript a runtime validací pro bezpečnější komunikaci. Prozkoumáme OpenAPI, Zod a runtime kontroly typů.', 'BFF layers with TypeScript and runtime validation for safer communication. We explore OpenAPI, Zod and runtime type checks.'), audience: l('FE/BE vývojáři', 'FE/BE engineers'), program: l('OpenAPI, zod, runtime checks.', 'OpenAPI, zod, runtime checks.'), speakerId: 'sp-10', yearId: '2026', capacity: 30, duration: 150, price: '3000 CZK', date: '2026-10-04', time: '13:00' },
    { id: 'w-2026-07', title: l('A11y hands-on', 'A11y hands-on'), description: l('Workshop na praktické audity přístupnosti s reálnými příklady. Projdeme WCAG checklist, nástroje pro automatizaci a uživatelské testování.', 'Workshop on practical accessibility audits with real examples. We cover WCAG checklist, automation tools and user testing.'), audience: l('FE, QA, design', 'FE, QA, design'), program: l('WCAG checklist, tooling, user testing.', 'WCAG checklist, tooling, user testing.'), speakerId: 'sp-09', yearId: '2026', capacity: 40, duration: 150, price: '2800 CZK', date: '2026-10-04', time: '16:00' },
    { id: 'w-2026-08', title: l('Performance bootcamp', 'Performance bootcamp'), description: l('Intenzivní ladění metrik výkonu pro rychlejší weby. Zaměříme se na Core Web Vitals, edge cache strategie a pokročilé profiling techniky.', 'Intensive performance metric tuning for faster websites. We focus on Core Web Vitals, edge cache strategies and advanced profiling techniques.'), audience: l('Perf engineers, FE', 'Perf engineers, FE'), program: l('CWV, edge cache, profiling.', 'CWV, edge cache, profiling.'), speakerId: 'sp-07', yearId: '2026', capacity: 35, duration: 170, price: '3400 CZK', date: '2026-10-05', time: '09:00' },
  ],
  blogPosts: [
    {
      id: 'b-01',
      title: l('Jak jsme stavěli FrontKon', 'How we built FrontKon'),
      perex: l('Architektura a lessons learned.', 'Architecture and lessons learned.'),
      content:
        '## Making of FrontKon\n\nPrvní verzi jsme stavěli za šest týdnů s důrazem na statický export a jednoduché nasazení. Nakonec jsme zvolili Astro MPA a React pro interaktivní části.\n\nZajímá tě víc? Mrkni na [archiv přednášek](/cs/archiv/prednasky/) a porovnej stack z minulých ročníků.\n\nDruhá iterace přinesla lepší data model a i18n vrstvu, abychom mohli doručit EN verzi současně.\n\nV další fázi chceme vylepšit DX, aby kurátoři mohli snadno přidávat obsah.\n\nPokud chceš detailní changelog, sleduj náš blog a přidej se do diskuse na Discordu.',
      authorId: 'sp-04',
      date: '2024-11-01',
    },
    {
      id: 'b-02',
      title: l('Design tokens: náš přístup', 'Design tokens: our approach'),
      perex: l('Jak jsme sjednotili brand.', 'How we unified the brand.'),
      content:
        '## Tokens end-to-end\n\nZačali jsme inventurou všech stylů a vytvořili mapu hodnot pro barvy, typografii a spacing. První iterace vznikla ve Figma, následně jsme exportovali do YAML.\n\nV CI generujeme balíčky pro web i mobil. Používáme i kontrolu proti driftu, aby produktové týmy nezaváděly hodnoty mimo tokeny.\n\nVíce k tématu najdeš v sekci [přednášky](/cs/archiv/prednasky/) nebo v talku o design systems.\n\nOtevřeli jsme i malou interní knihovnu `@frontkon/tokens` a plánujeme ji ukázat komunitě.\n\nPokud chceš detailní pipeline, napiš nám – rádi sdílíme configy.',
      authorId: 'sp-13',
      date: '2025-01-10',
    },
    {
      id: 'b-03',
      title: l('Perf budžety v CI', 'Perf budgets in CI'),
      perex: l('Automatizace výkonu.', 'Automating performance.'),
      content:
        '## Performance jako kontrakt\n\nNastavili jsme rozpočty pro LCP, FID a CLS a hlídáme je na každém PR. Pipeline padá, pokud limit překročíme.\n\nPoužíváme Lighthouse CI a syntetická měření, ale také RUM pro verzi ve výrobě. Spojením dat získáváme realističtější obraz.\n\nPro hlubší vhled doporučujeme talky k tématu výkonu v [archivu](/cs/archiv/prednasky/).\n\nCI reporty sdílíme v týmu na Slacku a při regresi se automaticky zakládá ticket.\n\nVýsledkem je stabilnější UX a menší šum při releasech.',
      authorId: 'sp-07',
      date: '2025-02-15',
    },
    {
      id: 'b-04',
      title: l('Vue i React na jedné konferenci', 'Vue and React together'),
      perex: l('Kurátorský výběr přednášek.', 'Curated talk selection.'),
      content:
        '## Kurátorský mix\n\nFrontend svět je pestrý, proto mixujeme React i Vue track. Každý rok vybíráme témata, která se potkávají v praxi (performance, DX, design systémy).\n\nOdráží se to i v programu 2026, kde React i Vue běží paralelně na různých stage.\n\nV archivu najdeš konkrétní příklady migrací mezi frameworky a lessons learned.\n\nRozcestník k oběma ekosystémům najdeš v sekci [témata](/cs/archiv/temata/).\n\nBudeme rádi za návrhy přednášek do dalšího ročníku – napiš nám.',
      authorId: 'sp-06',
      date: '2025-03-20',
    },
    {
      id: 'b-05',
      title: l('A11y jako standard', 'A11y as standard'),
      perex: l('Pravidla pro naše stage.', 'Rules for our stages.'),
      content:
        '## Přístupnost jako baseline\n\nKaždá stage má požadavky na kontrast, titulky a přístupné slidedecky. Spíkrům posíláme checklist předem.\n\nPři produkci webu využíváme axe a manuální testy čteček. Své postupy sdílíme na workshopech.\n\nPřístupnost se prolíná také do design systému – viz talky v [archivu](/cs/archiv/prednasky/).\n\nPřipravujeme open-source ukázku pipeline, která ověřuje WCAG kritéria na PR.\n\nPokud máš tipy na další nástroje, pošli nám je – rádi je vyzkoušíme.',
      authorId: 'sp-09',
      date: '2025-04-12',
    },
    {
      id: 'b-06',
      title: l('Edge a CDN tipy', 'Edge and CDN tips'),
      perex: l('Snížení latence.', 'Lowering latency.'),
      content:
        '## Edge first\n\nPřesun statického obsahu na edge nám snížil TTFB o desítky ms. Experimentujeme i s edge SSR a cache variantami.\n\nKlíčové je dobré logování a ladění invalidace; sdílíme checklist na workshopu Edge rendering.\n\nK tématu najdeš i talky v [archivu](/cs/archiv/prednasky/) – performance track.\n\nBudoucí plány: měřit dopad na Core Web Vitals a publikovat case study.\n\nPokud máš zkušenost s multi-CDN setupem, ozvi se, rádi uděláme panel.',
      authorId: 'sp-16',
      date: '2025-05-05',
    },
    {
      id: 'b-07',
      title: l('AI v přípravě programu', 'AI for planning the program'),
      perex: l('Jak AI pomáhá kurátorům.', 'How AI helps curators.'),
      content:
        '## AI jako asistent kurátora\n\nPoužíváme AI pro návrhy slotů a kontrolu témat proti duplicitám. Výsledky vždy projde kurátor.\n\nModely nám pomáhají seskupovat podobná témata a hledat mezery v programu.\n\nV talku o AI & DX ukazujeme i praktické workflow – najdeš ho v [archivu](/cs/archiv/prednasky/).\n\nPlánujeme A/B testy agendy podle preferencí účastníků a budeme sdílet výsledky.\n\nAI nám šetří čas, ale finální slovo má stále člověk.',
      authorId: 'sp-18',
      date: '2025-06-01',
    },
    {
      id: 'b-08',
      title: l('Bezpečnost supply chain', 'Supply chain security'),
      perex: l('Na co si dát pozor.', 'What to watch for.'),
      content:
        '## Supply chain pod kontrolou\n\nAuditujeme závislosti, podepisujeme balíčky a hlídáme SRI. V CI běží SBOM kontroly a sken vulnerabilit.\n\nSdílíme checklist i na workshopu Security pro FE a v talku v [archivu](/cs/archiv/prednasky/).\n\nDo příští sezóny chceme přidat automatické blokování riskantních verzí a lepší alerting.\n\nZajímá tě téma? Přihlas se na náš security roundtable.\n\nBezpečnost je týmová disciplína – dělíme odpovědnost mezi FE, DevOps a security.',
      authorId: 'sp-20',
      date: '2025-06-18',
    },
    {
      id: 'b-09',
      title: l('Organizační tým 2026', 'Organizing team 2026'),
      perex: l('Kdo stojí za FrontKonem.', 'Meet the crew behind FrontKon.'),
      content:
        '## Lidé za FrontKonem\n\nTým se rozrostl o nové role pro content, komunitu a DX. Každý z nás má konkrétní fokus.\n\nV zákulisí ladíme produkční procesy, aby stage běžely plynule a stream měl kvalitu.\n\nNa webu jsme aktualizovali sekci tým – podívej se do [tým](/cs/tym/).\n\nMáme otevřenou výzvu pro dobrovolníky – ozvi se, pokud chceš pomoci s dalšími ročníky.\n\nDíky partnerům a komunitě můžeme posouvat konferenci dál.',
      authorId: 'sp-02',
      date: '2025-07-02',
    },
  ],
};

