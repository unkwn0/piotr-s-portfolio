export default function Contact() {
  return (
    <section id="contact" className="section-rule py-16 md:py-[4rem] px-6 md:px-10">
      <div className="max-w-[520px] mx-auto text-center">
        <p className="eyebrow mb-2">003</p>
        <p className="text-red text-[1.4rem] mb-4">✦</p>

        <div className="lang-en">
          <p className="eyebrow mb-2">Inquiry</p>
          <h2 className="font-display text-cream text-[1.8rem] mb-4">Let's work together</h2>
          <p className="font-body text-faded-strong text-[0.95rem] leading-[1.75] mb-10">
            Available for research commissions, fact-checking projects and analytical consulting. Response time: usually within 24 hours.
          </p>
        </div>
        <div className="lang-pl">
          <p className="eyebrow mb-2">Zapytanie</p>
          <h2 className="font-display text-cream text-[1.8rem] mb-4">Współpracujmy</h2>
          <p className="font-body text-faded-strong text-[0.95rem] leading-[1.75] mb-10">
            Dostępny w zakresie zleceń badawczych, projektów fact-checkingowych i konsultingu analitycznego. Czas odpowiedzi: zwykle do 24 godzin.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          <a
            href="mailto:PRAWDZIWY@EMAIL.COM"
            className="block font-body text-cream text-[0.95rem] border-b border-transparent hover:border-red transition-colors duration-200 pb-1 min-h-[44px] leading-[44px]"
          >
            PRAWDZIWY@EMAIL.COM
          </a>
          <span
            aria-disabled="true"
            aria-label="GitHub — Profile available soon"
            className="lang-en block font-body text-faded text-[0.95rem] border-b border-dashed border-rule pb-1 cursor-default min-h-[44px] leading-[44px]"
            title="Profile available soon"
          >
            GitHub
          </span>
          <span
            aria-disabled="true"
            aria-label="GitHub — Profil dostępny wkrótce"
            className="lang-pl block font-body text-faded text-[0.95rem] border-b border-dashed border-rule pb-1 cursor-default min-h-[44px] leading-[44px]"
            title="Profil dostępny wkrótce"
          >
            GitHub
          </span>
          <span
            aria-disabled="true"
            aria-label="LinkedIn — Profile available soon"
            className="lang-en block font-body text-faded text-[0.95rem] border-b border-dashed border-rule pb-1 cursor-default min-h-[44px] leading-[44px]"
            title="Profile available soon"
          >
            LinkedIn
          </span>
          <span
            aria-disabled="true"
            aria-label="LinkedIn — Profil dostępny wkrótce"
            className="lang-pl block font-body text-faded text-[0.95rem] border-b border-dashed border-rule pb-1 cursor-default min-h-[44px] leading-[44px]"
            title="Profil dostępny wkrótce"
          >
            LinkedIn
          </span>
        </div>

        <a href="mailto:PRAWDZIWY@EMAIL.COM" className="lang-en cta-btn inline-block">Send a message</a>
        <a href="mailto:PRAWDZIWY@EMAIL.COM" className="lang-pl cta-btn inline-block">Wyślij wiadomość</a>
      </div>
    </section>
  );
}
