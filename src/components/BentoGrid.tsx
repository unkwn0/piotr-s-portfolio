import { useReveal } from '@/hooks/use-portfolio';

interface Card {
  label: string;
  value: string;
  valueColor?: string;
  text?: string;
  span2?: boolean;
  accentBg?: boolean;
}

const cardsEN: Card[] = [
  { label: 'Specialisation', value: 'Fact-checking · OSINT · AI evaluation', valueColor: 'text-red', text: 'Cross-referencing claims against primary sources, open databases and model-generated outputs to separate signal from noise.', span2: true },
  { label: 'Approach', value: 'Source → Method → Verdict', valueColor: 'text-forest', text: 'Every analysis follows a transparent, reproducible pipeline.' },
  { label: 'Programming', value: 'Python · Go · SQL · Bash', accentBg: true },
  { label: 'AI Tooling', value: 'DeepSeek · GLM · Llama', valueColor: 'text-ochre', text: 'Local inference via Cherry Studio, TypingMind, Msty.' },
  { label: 'Environment', value: 'macOS · Windows · Linux' },
];

const cardsPL: Card[] = [
  { label: 'Specjalizacja', value: 'Fact-checking · OSINT · Ewaluacja AI', valueColor: 'text-red', text: 'Weryfikacja tez na podstawie źródeł pierwotnych, otwartych baz danych i wyników generowanych przez modele językowe.', span2: true },
  { label: 'Podejście', value: 'Źródło → Metoda → Werdykt', valueColor: 'text-forest', text: 'Każda analiza opiera się na przejrzystym, powtarzalnym procesie.' },
  { label: 'Programowanie', value: 'Python · Go · SQL · Bash', accentBg: true },
  { label: 'Narzędzia AI', value: 'DeepSeek · GLM · Llama', valueColor: 'text-ochre', text: 'Lokalna inferencja przez Cherry Studio, TypingMind, Msty.' },
  { label: 'Środowisko', value: 'macOS · Windows · Linux' },
];

function CardItem({ card }: { card: Card }) {
  return (
    <div
      className={`p-8 border-b border-r border-rule transition-colors duration-200 hover:bg-surface ${card.span2 ? 'md:col-span-2' : ''} ${card.accentBg ? 'bg-accent-bg' : ''}`}
    >
      <p className="eyebrow mb-3">{card.label}</p>
      <p className={`font-display text-[1.05rem] mb-2 ${card.valueColor || 'text-cream'}`}>{card.value}</p>
      {card.text && <p className="font-body text-faded-strong text-[0.88rem] leading-[1.7]">{card.text}</p>}
    </div>
  );
}

export default function BentoGrid() {
  const ref = useReveal();

  return (
    <section id="methodology" className="section-rule" ref={ref}>
      <div className="lang-en">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardsEN.map((c, i) => <CardItem key={i} card={c} />)}
        </div>
      </div>
      <div className="lang-pl">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardsPL.map((c, i) => <CardItem key={i} card={c} />)}
        </div>
      </div>
    </section>
  );
}
