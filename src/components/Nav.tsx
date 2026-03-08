import { useEffect, useState, useCallback } from 'react';
import { useLang } from '@/hooks/use-portfolio';

const navLinksEN = [
  { label: 'Methodology', href: '#methodology' },
  { label: 'Case Files', href: '#case-files' },
  { label: 'Contact', href: '#contact' },
];
const navLinksPL = [
  { label: 'Metodologia', href: '#methodology' },
  { label: 'Projekty', href: '#case-files' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Nav() {
  const { setLang, getLang } = useLang();
  const [currentLang, setCurrentLang] = useState<'en' | 'pl'>(getLang());
  const [activeSection, setActiveSection] = useState('');

  const toggle = (lang: 'en' | 'pl') => {
    setLang(lang);
    setCurrentLang(lang);
    // Close all accordions
    document.querySelectorAll('.accordion-body[data-open="true"]').forEach(el => {
      el.setAttribute('data-open', 'false');
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    sections.forEach((s) => obs.observe(s));

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const links = currentLang === 'pl' ? navLinksPL : navLinksEN;
  const sectionIds = ['methodology', 'case-files', 'contact'];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-[100] border-b border-rule"
      style={{ background: 'rgba(14,14,14,0.92)', backdropFilter: 'blur(8px)' }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-14">
        <a
          href="#top"
          className="font-display text-cream uppercase text-[0.85rem] tracking-[0.15em] min-h-[44px] flex items-center"
        >
          Piotr.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => {
            const isActive = activeSection === sectionIds[i];
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-[0.78rem] uppercase tracking-[0.08em] min-h-[44px] flex items-center border-b-2 transition-colors duration-200 ${
                  isActive
                    ? 'text-cream border-red'
                    : 'text-faded-strong border-transparent hover:text-cream hover:border-red'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div role="group" aria-label="Language switcher" className="flex gap-2">
          {(['en', 'pl'] as const).map((l) => (
            <button
              key={l}
              onClick={() => toggle(l)}
              aria-pressed={currentLang === l}
              className={`font-display text-[0.7rem] uppercase tracking-[0.1em] px-3 min-h-[44px] min-w-[44px] border transition-colors duration-200 ${
                currentLang === l
                  ? 'text-cream border-cream'
                  : 'text-faded border-rule hover:text-cream hover:border-cream'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
