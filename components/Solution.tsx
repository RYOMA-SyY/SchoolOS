export function Solution() {
  return (
    <section id="solution" className="tile bg-parchment" aria-labelledby="solution-title">
      <div className="max-w-prose980 mx-auto px-5 py-20 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink/60">Notre solution</p>
        <h2 id="solution-title" className="font-display font-semibold text-dlg mt-3">
          Une plateforme complète, modulaire et évolutive
        </h2>
        <p className="text-[17px] text-ink/70 mt-4 max-w-[680px] mx-auto">
          Interface bilingue Arabe / Français. Élèves, enseignants, classes, paiements, emplois du temps générés sans conflits, portails parents et enseignants.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="list" aria-label="Les 4 offres">
          {["O1 Site Web", "O2 Admin Core", "O3 + Enseignants", "O4 Écosystème", "O5 Sur mesure"].map((m) => (
            <span key={m} role="listitem" className="bg-pearl border border-hairline rounded-full px-4 py-2 text-[14px] text-ink/80">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
