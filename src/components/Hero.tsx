import { useReveal } from '@/hooks/use-portfolio';

const tagsEN = ['Fact-checking', 'Data Research', 'Python & Go', 'AI / LLM', 'Tech Markets'];
const tagsPL = ['Fact-checking', 'Analiza danych', 'Python & Go', 'AI / LLM', 'Rynki tech'];

export default function Hero() {
  const ref = useReveal();

  return (
    <section id="top" className="section-rule pt-36 md:pt-[9rem] pb-16" ref={ref}>
      <div className="max-w-[820px] mx-auto px-6 md:px-10">
        {/* EN */}
        <div className="lang-en">
          <p className="reveal eyebrow text-red text-[0.72rem] tracking-[0.2em] mb-6">
            Researcher · Analyst · Fact-Checker
          </p>
          <h1 className="reveal font-display text-cream font-bold text-[2.2rem] md:text-[3.2rem] leading-[1.15] mb-6" style={{ transitionDelay: '0.15s' }}>
            I verify claims, analyse markets and stress-test AI.
          </h1>
          <p className="reveal font-body text-faded-strong text-[1.1rem] leading-[1.75] max-w-[580px] mb-8" style={{ transitionDelay: '0.3s' }}>
            Independent researcher specialising in open-source intelligence, tech-market analysis and the practical evaluation of large language models.
          </p>
          <div className="reveal flex flex-wrap gap-3" style={{ transitionDelay: '0.45s' }}>
            {tagsEN.map((t) => (
              <span key={t} className="text-[0.68rem] uppercase tracking-[0.08em] border border-rule px-[0.65rem] py-[0.25rem] text-faded-strong">
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* PL */}
        <div className="lang-pl">
          <p className="reveal eyebrow text-red text-[0.72rem] tracking-[0.2em] mb-6">
            Badacz · Analityk · Fact-checker
          </p>
          <h1 className="reveal font-display text-cream font-bold text-[2.2rem] md:text-[3.2rem] leading-[1.15] mb-6" style={{ transitionDelay: '0.15s' }}>
            Weryfikuję tezy, analizuję rynki i testuję AI.
          </h1>
          <p className="reveal font-body text-faded-strong text-[1.1rem] leading-[1.75] max-w-[580px] mb-8" style={{ transitionDelay: '0.3s' }}>
            Niezależny badacz specjalizujący się w białym wywiadzie, analizie rynków technologicznych i praktycznej ewaluacji dużych modeli językowych.
          </p>
          <div className="reveal flex flex-wrap gap-3" style={{ transitionDelay: '0.45s' }}>
            {tagsPL.map((t) => (
              <span key={t} className="text-[0.68rem] uppercase tracking-[0.08em] border border-rule px-[0.65rem] py-[0.25rem] text-faded-strong">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
