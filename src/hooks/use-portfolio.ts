import { useEffect, useRef, useCallback } from 'react';

export function useLang() {
  const setLang = useCallback((lang: 'en' | 'pl') => {
    document.documentElement.className = `show-${lang}`;
    localStorage.setItem('lang', lang);
  }, []);

  const getLang = useCallback((): 'en' | 'pl' => {
    return document.documentElement.classList.contains('show-pl') ? 'pl' : 'en';
  }, []);

  return { setLang, getLang };
}

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    children.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return ref;
}
