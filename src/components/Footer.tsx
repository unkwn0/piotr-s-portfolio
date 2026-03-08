export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 md:px-10 py-10">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
        <div className="max-w-[45ch]">
          <p className="lang-en font-body italic text-faded-strong text-[0.88rem] leading-[1.7]">
            "Verification is not a step in the process — it is the process. Everything else is narrative."
          </p>
          <p className="lang-pl font-body italic text-faded-strong text-[0.88rem] leading-[1.7]">
            "Weryfikacja nie jest etapem procesu — jest procesem. Cała reszta to narracja."
          </p>
        </div>
        <p className="font-display text-[0.68rem] uppercase tracking-[0.15em] text-faded whitespace-nowrap">
          © 2026 Piotr · Kraków, Poland
        </p>
      </div>
    </footer>
  );
}
