import { AlertTriangle, Clock3, Wallet, MessagesSquare, Globe, FileWarning } from "lucide-react";

const PAINS = [
  { icon: Wallet, title: "Paiements suivis sur Excel", text: "Relances manuelles, reçus papier, impayés invisibles. La trésorerie en souffre." },
  { icon: Clock3, title: "Emplois du temps conflictuels", text: "Heures de chevauchement, salles double-réservées, vendredi et Ramadan gérés à la main." },
  { icon: MessagesSquare, title: "Parents sans visibilité", text: "Appels quotidiens : notes, absences, devoirs. Zéro portail, zéro notification." },
  { icon: FileWarning, title: "Données dispersées", text: "Fiches élèves, contrats enseignants, documents éparpillés. Erreurs et doublons." },
  { icon: Globe, title: "Image en ligne faible", text: "Pas de site moderne bilingue pour attirer les inscriptions." },
  { icon: AlertTriangle, title: "Charge administrative", text: "L'équipe perd des jours chaque mois sur des tâches automatisables." },
];

export function Pains() {
  return (
    <section id="probleme" className="tile bg-tile3 text-white" aria-labelledby="pains-title">
      <div className="max-w-grid1440 mx-auto px-5 py-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/60">Le problème</p>
        <h2 id="pains-title" className="font-display font-semibold text-dlg mt-3 max-w-[720px]">
          Les défis des écoles privées au Maroc
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAINS.map((p) => (
            <article key={p.title} className="bg-tile1 rounded-card p-6 border border-white/10">
              <p.icon className="w-6 h-6 text-sky" aria-hidden />
              <h3 className="text-[17px] font-semibold mt-3">{p.title}</h3>
              <p className="text-[17px] text-white/70 mt-2 leading-[1.47]">{p.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-8">
          {[
            ["-10%", "de frais mieux collectés = ROI immédiat"],
            ["5", "offres, 1 seule trajectoire"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="tnum font-display font-semibold text-[34px] leading-none">{v}</p>
              <p className="text-white/60 text-[14px] mt-2">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
