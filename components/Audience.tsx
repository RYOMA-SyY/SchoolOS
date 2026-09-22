export function Audience() {
  return (
    <section className="tile bg-tile2 text-white" aria-labelledby="audience-title">
      <div className="max-w-grid1440 mx-auto px-5 py-20">
        <h2 id="audience-title" className="font-display font-semibold text-dlg text-center">Pour qui ? Pourquoi nous ?</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            ["Petites écoles 100–300", "O1→O2 : sortez d'Excel, sécurisez les paiements, sans gros projet."],
            ["Écoles en croissance 10+ profs", "O3 : appel et notes plus rapides que papier, remplacements gérés."],
            ["Groupes 500+", "O4 : transparence parents, portails et IA EDT. Argument d'inscription."],
          ].map(([t, d]) => (
            <article key={t} className="bg-tile1 rounded-card p-6 border border-white/10">
              <h3 className="text-[17px] font-semibold">{t}</h3>
              <p className="text-white/70 mt-2">{d}</p>
            </article>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/70 text-[15px]">
          {["Locale Maroc", "Bilingue AR/FR", "Modulaire", "Support + formation", "Prix adaptés"].map((a) => (
            <li key={a}>✓ {a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
