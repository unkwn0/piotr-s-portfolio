import { useReveal } from '@/hooks/use-portfolio';

const sidebarEN = [
  { label: 'Profile', value: 'Data Analyst / Fact-checker' },
  { label: 'Location', value: 'Kraków, Poland' },
  { label: 'Languages', value: 'Polish (native), English (C1)' },
  { label: 'Systems', value: 'macOS · Windows · Linux' },
  { label: 'Stack', value: 'Python · Go · SQL · Bash' },
  { label: 'AI Tools', value: 'Cherry Studio, TypingMind, Msty' },
  { label: 'Timezone', value: 'Europe/Warsaw (CET/CEST)' },
];
const sidebarPL = [
  { label: 'Profil', value: 'Analityk danych / Fact-checker' },
  { label: 'Lokalizacja', value: 'Kraków, Polska' },
  { label: 'Języki', value: 'Polski (ojczysty), angielski (C1)' },
  { label: 'Systemy', value: 'macOS · Windows · Linux' },
  { label: 'Stack', value: 'Python · Go · SQL · Bash' },
  { label: 'Narzędzia AI', value: 'Cherry Studio, TypingMind, Msty' },
  { label: 'Strefa czasowa', value: 'Europe/Warsaw (CET/CEST)' },
];

function SidebarItems({ items }: { items: typeof sidebarEN }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.label}>
          <p className="eyebrow mb-1">{item.label}</p>
          <p className="font-body text-cream text-[0.9rem]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const ref = useReveal();

  return (
    <section className="section-rule py-16 md:py-[4rem] px-6 md:px-10" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal eyebrow mb-2">001</p>

        <div className="lang-en">
          <h2 className="reveal font-display text-cream text-[1.8rem] mb-10" style={{ transitionDelay: '0.15s' }}>About me</h2>
          <div className="reveal flex flex-col md:flex-row gap-10" style={{ transitionDelay: '0.3s' }}>
            <div className="flex-1">
              <p className="drop-cap font-body text-ink text-[1rem] leading-[1.85] text-justify">
                I spend most of my working hours at the intersection of data, language models and market logic. My background is in systematic research: I take a claim, trace it to its source, check the methodology and present findings in a format that can be challenged and reproduced. Over the past two years I have concentrated on evaluating the practical reliability of LLMs — not benchmark scores, but how they behave in real analytical workflows, where a hallucinated number or a lazy summary can cost time and credibility. In parallel, I track the financial performance and strategic moves of major technology companies, combining quantitative data with qualitative intelligence. I work across macOS, Windows and Linux, maintaining a hybrid toolchain that lets me test software and models in conditions close to those of actual end-users.
              </p>
            </div>
            <div className="w-full md:w-[300px] md:border-l border-t md:border-t-0 border-rule pt-6 md:pt-0 md:pl-10">
              <SidebarItems items={sidebarEN} />
            </div>
          </div>
        </div>

        <div className="lang-pl">
          <h2 className="reveal font-display text-cream text-[1.8rem] mb-10" style={{ transitionDelay: '0.15s' }}>O mnie</h2>
          <div className="reveal flex flex-col md:flex-row gap-10" style={{ transitionDelay: '0.3s' }}>
            <div className="flex-1">
              <p className="drop-cap font-body text-ink text-[1rem] leading-[1.85] text-justify">
                Większość czasu spędzam na styku danych, modeli językowych i logiki rynkowej. Moje podejście opiera się na systematycznym researchu: biorę tezę, docieram do źródła, sprawdzam metodologię i przedstawiam wyniki w formie, którą można zakwestionować i odtworzyć. Przez ostatnie dwa lata koncentrowałem się na ewaluacji praktycznej niezawodności LLM-ów — nie wyników benchmarkowych, lecz tego, jak modele zachowują się w realnych procesach analitycznych, gdzie zmyślona liczba lub leniwe podsumowanie kosztuje czas i wiarygodność. Równolegle śledzę wyniki finansowe i strategiczne ruchy największych firm technologicznych, łącząc dane ilościowe z wywiadem jakościowym. Pracuję na macOS, Windows i Linux, utrzymując hybrydowy toolchain pozwalający testować oprogramowanie i modele w warunkach zbliżonych do tych, w jakich działają końcowi użytkownicy.
              </p>
            </div>
            <div className="w-full md:w-[300px] md:border-l border-t md:border-t-0 border-rule pt-6 md:pt-0 md:pl-10">
              <SidebarItems items={sidebarPL} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
