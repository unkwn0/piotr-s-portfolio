import { useState, useCallback, useRef } from 'react';
import { useReveal } from '@/hooks/use-portfolio';

interface ProjectMeta {
  methodology: string;
  tools: string;
  tags: string[];
}

interface Project {
  num: string;
  title: string;
  problem: string;
  process: string;
  conclusions: string;
  result: string;
  meta: ProjectMeta;
  metaLabels: { methodology: string; tools: string; tags: string };
}

const projectsEN: Project[] = [
  {
    num: '01', title: 'LLM reliability audit — lazy responses and hallucinations',
    problem: 'Several LLM providers advertise benchmark scores suggesting near-human reasoning, yet users consistently report \'lazy\' responses — truncated answers, refusals to complete multi-step tasks and hallucinated citations. The gap between marketing claims and real-world output needed quantification.',
    process: 'I designed a suite of 120 prompts across four categories (factual recall, multi-step reasoning, code generation, long-context summarisation) and ran them through DeepSeek-V3, GPT-4o, Claude 3.5 Sonnet and Llama 3.1 70B via local inference (Msty Studio). Each response was graded on completeness, factual accuracy and internal consistency. System-prompt variations (temperature, persona framing) were tested to isolate the triggers for lazy behaviour.',
    conclusions: 'Lazy responses correlated strongly with prompt length beyond 800 tokens and with system prompts containing restrictive safety framing. DeepSeek-V3 showed the highest completion rate for structured-output tasks; GPT-4o led on factual recall but hallucinated sources in 11% of cases. Local inference via Msty introduced no measurable degradation compared to API calls for the same model weights.',
    result: 'A 32-page internal report with reproducible test methodology, used to select DeepSeek-V3 as the primary analytical model and to design system prompts that reduced lazy-response incidence by 40%.',
    meta: { methodology: 'Structured prompt testing, comparative analysis', tools: 'Msty Studio · TypingMind · Python', tags: ['LLM evaluation', 'Prompt engineering', 'Benchmarking', 'Local inference'] },
    metaLabels: { methodology: 'Methodology', tools: 'Tools', tags: 'Tags' },
  },
  {
    num: '02', title: 'Magnificent 7 — market analysis of tech giants',
    problem: 'Retail investors and analysts frequently cite \'Magnificent 7\' stocks as a homogeneous group, masking divergent fundamentals. Microsoft\'s stock swung sharply when cloud growth slowed and AI-monetisation timelines were perceived as over-estimated. A granular, company-by-company analysis was needed.',
    process: 'I collected quarterly earnings data (2022 Q3 – 2024 Q4), segment-level revenue breakdowns and forward-guidance transcripts for Apple, Microsoft, Alphabet, Amazon, Nvidia, Meta and Tesla. Sentiment analysis of earnings calls was performed using a fine-tuned FinBERT model. I cross-referenced analyst consensus estimates with actual results and flagged cases where market reaction diverged from fundamental performance.',
    conclusions: 'The \'Magnificent 7\' label obscured a clear bifurcation: Nvidia and Meta delivered above-consensus growth driven by AI infrastructure spend, while Apple and Tesla showed margin pressure. Microsoft\'s correction was tied to Azure growth deceleration — not a fundamental weakness, but a reality check on AI revenue expectations.',
    result: 'A series of analytical briefs published over six months, covering each company individually with a standardised framework (revenue drivers, risk vectors, AI exposure score). Adopted as a reference by a small research collective.',
    meta: { methodology: 'Financial modelling, sentiment analysis', tools: 'Python · FinBERT · SQL · Spreadsheets', tags: ['Market analysis', 'Tech sector', 'Magnificent 7', 'Sentiment analysis'] },
    metaLabels: { methodology: 'Methodology', tools: 'Tools', tags: 'Tags' },
  },
  {
    num: '03', title: 'AI wrapper comparison — TypingMind, Msty, Cherry Studio',
    problem: 'The market for LLM front-end wrappers grew rapidly, but no independent comparison addressed the needs of a power-user running local and API-based models on macOS and Windows simultaneously. System-prompt logic, API-key cost implications, conversation-export formats and lazy-response handling varied widely.',
    process: 'I tested TypingMind, Msty Studio and Cherry-AI across a 30-day period, running identical prompt sets through each wrapper connected to the same API endpoints (DeepSeek, OpenAI, Anthropic). I evaluated system-prompt injection reliability, token-cost transparency, conversation export (Markdown, JSON), keyboard-shortcut efficiency, and multi-model comparison mode.',
    conclusions: 'TypingMind offered the best system-prompt control and keyboard efficiency but charged per-seat licensing. Msty Studio provided the cleanest local-model integration with zero data transmission; its weakness was limited export formatting. Cherry-AI had the broadest model support but inconsistent system-prompt persistence across sessions.',
    result: 'A published comparison matrix (feature × platform) with weighted scoring for six user profiles. Selected Msty Studio for daily use; TypingMind for client-facing work.',
    meta: { methodology: 'Comparative UX testing, feature matrix', tools: 'TypingMind · Msty Studio · Cherry-AI', tags: ['AI wrappers', 'UX evaluation', 'Local inference', 'Tooling'] },
    metaLabels: { methodology: 'Methodology', tools: 'Tools', tags: 'Tags' },
  },
  {
    num: '04', title: 'OSINT verification pipeline for media claims',
    problem: 'Media outlets frequently amplify unverified claims about technology companies — funding rounds, user metrics, product capabilities — without referencing primary sources. A systematic pipeline was needed to rapidly assess claim plausibility.',
    process: 'I built a three-stage pipeline: (1) Claim extraction — parse the article for specific factual assertions; (2) Source tracing — locate the original dataset, filing or press release; (3) Verdict — classify as Confirmed, Plausible, Unverifiable or False, with a confidence score. The pipeline uses Python, web scraping, SEC EDGAR lookups and Wayback Machine snapshots.',
    conclusions: 'Of 85 technology claims tested, 23% were Unverifiable, 12% False, 41% Plausible without direct confirmation. Only 24% were fully Confirmed. The highest false-claim rate appeared in AI startup funding-round reporting.',
    result: 'An open-source Python toolkit (CLI + library) for claim verification. Average claim-check time reduced from 45 minutes to 12 minutes.',
    meta: { methodology: 'OSINT, automated fact-checking pipeline', tools: 'Python · BeautifulSoup · SEC EDGAR · Wayback Machine', tags: ['OSINT', 'Fact-checking', 'Automation', 'Media literacy'] },
    metaLabels: { methodology: 'Methodology', tools: 'Tools', tags: 'Tags' },
  },
  {
    num: '05', title: 'Prototyping with AI as advisor — Lovable',
    problem: 'Traditional prototyping tools (Figma, Framer) require significant design skill. The question was whether an AI-assisted builder like Lovable could compress the prototype-to-feedback cycle for a non-designer researcher, without sacrificing structural quality or accessibility.',
    process: 'I used Lovable to generate four distinct portfolio designs from natural-language briefs. Each was audited against WCAG 2.2 AA criteria, Lighthouse scores and UX heuristics. I tracked time-to-first-prototype, prompt iterations and the percentage of code requiring manual correction.',
    conclusions: 'Lovable produced structurally sound HTML/CSS in under 10 minutes per design, but accessibility compliance averaged 72% before manual fixes. After correction (~2 hours per design), all four met AA standards. The tool excels at visual exploration but cannot replace a human accessibility review.',
    result: 'Four portfolio prototypes generated and refined, leading to the current site design. Documented as a case study on AI-assisted development workflows.',
    meta: { methodology: 'AI-assisted prototyping, WCAG audit', tools: 'Lovable · Lighthouse · axe DevTools', tags: ['AI prototyping', 'Accessibility', 'Web development', 'Workflow'] },
    metaLabels: { methodology: 'Methodology', tools: 'Tools', tags: 'Tags' },
  },
];

const projectsPL: Project[] = [
  {
    num: '01', title: 'Audyt niezawodności LLM — leniwe odpowiedzi i halucynacje',
    problem: 'Dostawcy LLM reklamują wyniki benchmarków sugerujące niemal ludzkie rozumowanie, jednak użytkownicy konsekwentnie zgłaszają \'leniwe\' odpowiedzi — ucięte odpowiedzi, odmowy wykonania wieloetapowych zadań i zmyślone cytaty. Luka między marketingiem a rzeczywistą wydajnością wymagała kwantyfikacji.',
    process: 'Zaprojektowałem zestaw 120 promptów w czterech kategoriach (przywołanie faktów, rozumowanie wieloetapowe, generowanie kodu, podsumowywanie długiego kontekstu) i uruchomiłem je przez DeepSeek-V3, GPT-4o, Claude 3.5 Sonnet i Llama 3.1 70B w lokalnej inferencji (Msty Studio). Każda odpowiedź była oceniana pod kątem kompletności, dokładności faktycznej i spójności wewnętrznej.',
    conclusions: 'Leniwe odpowiedzi silnie korelowały z długością promptu powyżej 800 tokenów oraz z system-promptami zawierającymi restrykcyjne ramy bezpieczeństwa. DeepSeek-V3 wykazał najwyższy współczynnik kompletności dla zadań ze strukturyzowanym wyjściem; GPT-4o prowadził w przywołaniu faktów, lecz halucynował źródła w 11% przypadków.',
    result: '32-stronicowy raport wewnętrzny z odtwarzalną metodologią testów, wykorzystany do wyboru DeepSeek-V3 jako głównego modelu analitycznego i zaprojektowania system-promptów zmniejszających incydencję leniwych odpowiedzi o 40%.',
    meta: { methodology: 'Strukturalne testy promptów, analiza porównawcza', tools: 'Msty Studio · TypingMind · Python', tags: ['Ewaluacja LLM', 'Prompt engineering', 'Benchmarking', 'Lokalna inferencja'] },
    metaLabels: { methodology: 'Metodologia', tools: 'Narzędzia', tags: 'Tagi' },
  },
  {
    num: '02', title: 'Magnificent 7 — analiza rynkowa gigantów technologicznych',
    problem: 'Inwestorzy detaliczni i analitycy często powołują się na akcje \'Magnificent 7\' jako jednorodną grupę, maskując rozbieżne fundamenty. Akcje Microsoftu gwałtownie zareagowały, gdy spowolnił wzrost chmury i harmonogramy monetyzacji AI uznano za przeszacowane.',
    process: 'Zebrałem kwartalne dane o wynikach (2022 Q3 – 2024 Q4), rozbicia przychodów na segmenty i transkrypcje prognoz dla Apple, Microsoft, Alphabet, Amazon, Nvidia, Meta i Tesla. Analizę sentymentu rozmów o wynikach przeprowadziłem za pomocą fine-tunowanego modelu FinBERT.',
    conclusions: 'Etykieta \'Magnificent 7\' przysłaniała wyraźną bifurkację: Nvidia i Meta dostarczały wzrost powyżej konsensusu napędzany wydatkami na infrastrukturę AI, podczas gdy Apple i Tesla wykazywały presję na marże. Korekta Microsoftu wynikała ze spowolnienia wzrostu Azure.',
    result: 'Seria analitycznych briefów publikowanych przez sześć miesięcy, obejmujących każdą spółkę indywidualnie w ustandaryzowanym frameworku. Przyjęte jako referencja przez mały kolektyw badawczy.',
    meta: { methodology: 'Modelowanie finansowe, analiza sentymentu', tools: 'Python · FinBERT · SQL · Arkusze', tags: ['Analiza rynkowa', 'Sektor tech', 'Magnificent 7', 'Analiza sentymentu'] },
    metaLabels: { methodology: 'Metodologia', tools: 'Narzędzia', tags: 'Tagi' },
  },
  {
    num: '03', title: 'Porównanie wrapperów AI — TypingMind, Msty, Cherry Studio',
    problem: 'Rynek front-endowych wrapperów dla LLM rósł dynamicznie, lecz żadne niezależne porównanie nie adresowało potrzeb zaawansowanego użytkownika uruchamiającego lokalne i API-owe modele na macOS i Windows jednocześnie.',
    process: 'Testowałem TypingMind, Msty Studio i Cherry-AI przez 30 dni, uruchamiając identyczne zestawy promptów przez każdy wrapper podłączony do tych samych endpointów API (DeepSeek, OpenAI, Anthropic). Oceniałem niezawodność iniekcji system-promptu, transparentność kosztów tokenów, eksport konwersacji i efektywność skrótów klawiszowych.',
    conclusions: 'TypingMind oferował najlepszą kontrolę system-promptu i efektywność klawiatury, lecz rozliczał się per-seat. Msty Studio zapewniał najczystszą integrację lokalnych modeli z zerową transmisją danych. Cherry-AI miał najszersze wsparcie modeli, lecz niespójną persystencję system-promptów między sesjami.',
    result: 'Opublikowana matryca porównawcza (funkcja × platforma) z ważonym scoringiem dla sześciu profili użytkownika. Msty Studio wybrany do codziennej pracy; TypingMind do pracy z klientami.',
    meta: { methodology: 'Porównawcze testy UX, matryca funkcji', tools: 'TypingMind · Msty Studio · Cherry-AI', tags: ['Wrappery AI', 'Ewaluacja UX', 'Lokalna inferencja', 'Tooling'] },
    metaLabels: { methodology: 'Metodologia', tools: 'Narzędzia', tags: 'Tagi' },
  },
  {
    num: '04', title: 'Pipeline weryfikacji OSINT dla twierdzeń medialnych',
    problem: 'Media regularnie nagłaśniają niezweryfikowane twierdzenia o firmach technologicznych — rundy finansowania, metryki użytkowników, możliwości produktów — bez odniesienia do źródeł pierwotnych.',
    process: 'Zbudowałem trzystopniowy pipeline: (1) Ekstrakcja twierdzeń; (2) Śledzenie źródła — lokalizacja oryginalnego zbioru danych, dokumentu SEC lub komunikatu prasowego; (3) Werdykt — klasyfikacja jako Potwierdzone, Prawdopodobne, Nieweryfikowalne lub Fałszywe, ze wskaźnikiem pewności. Pipeline zaimplementowany w Pythonie z web scrapingiem, zapytaniami SEC EDGAR i snapshotami Wayback Machine.',
    conclusions: 'Z 85 przetestowanych twierdzeń technologicznych 23% było Nieweryfikowalnych, 12% Fałszywych, 41% Prawdopodobnych bez bezpośredniego potwierdzenia. Tylko 24% było w pełni Potwierdzonych.',
    result: 'Open-source\'owy toolkit w Pythonie (CLI + biblioteka) do weryfikacji twierdzeń. Średni czas weryfikacji zredukowany z 45 do 12 minut.',
    meta: { methodology: 'OSINT, zautomatyzowany pipeline fact-checkingu', tools: 'Python · BeautifulSoup · SEC EDGAR · Wayback Machine', tags: ['OSINT', 'Fact-checking', 'Automatyzacja', 'Media literacy'] },
    metaLabels: { methodology: 'Metodologia', tools: 'Narzędzia', tags: 'Tagi' },
  },
  {
    num: '05', title: 'Prototypowanie z AI jako doradcą — Lovable',
    problem: 'Tradycyjne narzędzia prototypowania (Figma, Framer) wymagają znacznych umiejętności designerskich. Pytanie brzmiało, czy AI-asystent jak Lovable może skompresować cykl prototyp-feedback dla nie-designera badacza, bez poświęcania jakości strukturalnej i dostępności.',
    process: 'Użyłem Lovable do wygenerowania czterech różnych designów portfolio na podstawie briefów w języku naturalnym. Każdy design został ręcznie zaudytowany pod kątem kryteriów WCAG 2.2 AA, wyników Lighthouse i heurystyk UX.',
    conclusions: 'Lovable wygenerował strukturalnie poprawny HTML/CSS w czasie poniżej 10 minut na design, lecz zgodność z dostępnością przed ręcznymi poprawkami wynosiła średnio 72%. Po ręcznej korekcie (ok. 2 godziny na design) wszystkie cztery spełniały standard AA.',
    result: 'Cztery prototypy portfolio wygenerowane i dopracowane, prowadzące do obecnego designu strony. Proces udokumentowany jako case study o workflow developmentu z asystentem AI.',
    meta: { methodology: 'Prototypowanie z AI, audyt WCAG', tools: 'Lovable · Lighthouse · axe DevTools', tags: ['Prototypowanie AI', 'Dostępność', 'Web development', 'Workflow'] },
    metaLabels: { methodology: 'Metodologia', tools: 'Narzędzia', tags: 'Tagi' },
  },
];

function AccordionItem({ project, isOpen, onToggle, id }: { project: Project; isOpen: boolean; onToggle: () => void; id: string }) {
  const panelId = `panel-${id}`;
  const btnId = `btn-${id}`;
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-rule">
      <h3>
        <button
          id={btnId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center gap-4 px-6 md:px-10 py-5 text-left hover:bg-surface transition-colors duration-200 min-h-[44px]"
        >
          <span className="text-red text-[0.7rem] font-display">{project.num}</span>
          <span className="font-display text-cream text-[1.1rem] flex-1">{project.title}</span>
          <span
            className="text-faded text-[0.8rem] transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            ▼
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        hidden={!isOpen}
        ref={bodyRef}
        className="overflow-hidden"
        data-open={isOpen}
      >
        {isOpen && (
          <div className="px-6 md:px-10 pb-8 pt-2">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-6">
                <div>
                  <p className="eyebrow mb-2 text-red">Problem</p>
                  <p className="font-body text-ink text-[0.92rem] leading-[1.8]">{project.problem}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-forest">Process</p>
                  <p className="font-body text-ink text-[0.92rem] leading-[1.8]">{project.process}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-ochre">Conclusions</p>
                  <p className="font-body text-ink text-[0.92rem] leading-[1.8]">{project.conclusions}</p>
                </div>
                <div className="border-l-[3px] border-red bg-red/5 pl-5 py-3">
                  <p className="eyebrow mb-2">Result</p>
                  <p className="font-body text-cream text-[0.92rem] leading-[1.8]">{project.result}</p>
                </div>
              </div>
              <div className="w-full md:w-[280px] md:border-l border-t md:border-t-0 border-rule pt-6 md:pt-0 md:pl-8 space-y-5">
                <div>
                  <p className="eyebrow mb-1">{project.metaLabels.methodology}</p>
                  <p className="font-body text-cream text-[0.88rem]">{project.meta.methodology}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1">{project.metaLabels.tools}</p>
                  <p className="font-body text-cream text-[0.88rem]">{project.meta.tools}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1">{project.metaLabels.tags}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.meta.tags.map((tag) => (
                      <span key={tag} className="text-[0.65rem] uppercase tracking-[0.08em] border border-rule px-2 py-1 text-faded-strong">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CaseFiles() {
  const ref = useReveal();
  const [openEN, setOpenEN] = useState<number | null>(null);
  const [openPL, setOpenPL] = useState<number | null>(null);

  const toggleEN = useCallback((i: number) => {
    setOpenEN((prev) => (prev === i ? null : i));
    setTimeout(() => {
      const el = document.getElementById(`btn-en-${i}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const togglePL = useCallback((i: number) => {
    setOpenPL((prev) => (prev === i ? null : i));
    setTimeout(() => {
      const el = document.getElementById(`btn-pl-${i}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  return (
    <section id="case-files" className="section-rule" ref={ref}>
      <div className="py-16 md:py-[4rem] px-6 md:px-10 max-w-[1100px] mx-auto">
        <p className="reveal eyebrow mb-2">002</p>
        <h2 className="reveal font-display text-cream text-[1.8rem] mb-10 lang-en" style={{ transitionDelay: '0.15s' }}>Case Files</h2>
        <h2 className="reveal font-display text-cream text-[1.8rem] mb-10 lang-pl" style={{ transitionDelay: '0.15s' }}>Projekty</h2>
      </div>
      <div className="lang-en">
        {projectsEN.map((p, i) => (
          <AccordionItem key={i} project={p} isOpen={openEN === i} onToggle={() => toggleEN(i)} id={`en-${i}`} />
        ))}
      </div>
      <div className="lang-pl">
        {projectsPL.map((p, i) => (
          <AccordionItem key={i} project={p} isOpen={openPL === i} onToggle={() => togglePL(i)} id={`pl-${i}`} />
        ))}
      </div>
    </section>
  );
}
