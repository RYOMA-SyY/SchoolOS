const STEPS = [
  ["1", "Démonstration 30 min", "On cadre vos besoins et l'offre adaptée."],
  ["2", "Devis + signature", "50% commande, 50% livraison. Validité 30 jours."],
  ["3", "Install 1–2 semaines", "Migration données + formation équipe + lancement."],
];

export function Steps() {
  return (
    <section className="tile bg-canvas" aria-labelledby="steps-title">
      <div className="max-w-prose980 mx-auto px-5 py-20 text-center">
        <h2 id="steps-title" className="font-display font-semibold text-dlg">Comment démarrer ?</h2>
        <ol className="mt-10 grid md:grid-cols-3 gap-5 text-left">
          {STEPS.map(([n, t, d]) => (
            <li key={n} className="border border-hairline rounded-card p-6 bg-white dark:bg-[#1C1C1E]">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-chip text-ink font-semibold" aria-hidden>{n}</span>
              <h3 className="text-[17px] font-semibold mt-4">{t}</h3>
              <p className="text-ink/70 mt-2">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
