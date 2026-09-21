import { Check } from "lucide-react";
import { fmtMAD, type Offer } from "@/data/offers";

export function OfferTile({ offer, index }: { offer: Offer; index: number }) {
  const dark = offer.tile === "dark-1";
  const bg = dark ? "bg-tile1 text-white" : offer.tile === "parchment" ? "bg-parchment" : "bg-canvas";
  const prix = offer.surDevis
    ? "Sur devis"
    : offer.mensuelFixe != null
      ? `${fmtMAD(offer.setup)} + ${fmtMAD(offer.mensuelFixe)}/mois`
      : `${fmtMAD(offer.setup)} + ${(offer.mensuelParEleve ?? 0).toLocaleString("fr-MA")} MAD/élève/mois`;
  return (
    <section id={`offre-${offer.id.toLowerCase()}`} className={`tile ${bg}`} aria-labelledby={`offre-${offer.id}-title`}>
      <div className="max-w-prose980 mx-auto px-5 py-20 text-center">
        <p className={`text-[12px] font-semibold uppercase tracking-[0.08em] ${dark ? "text-white/60" : "text-ink/60"}`}>
          Offre {index + 1} — {offer.id}
        </p>
        <h2 id={`offre-${offer.id}-title`} className="font-display font-semibold text-dlg mt-3">
          {offer.nom}
        </h2>
        <p className={`text-[21px] font-semibold mt-2 ${dark ? "text-white" : ""}`}>{offer.tagline}</p>
        <p className="tnum font-display font-semibold text-[34px] mt-4">{prix}</p>
        <p className={`text-[14px] mt-2 ${dark ? "text-white/60" : "text-muted"}`}>Cible : {offer.cible}</p>
        <p className={`tnum text-[14px] mt-1 font-semibold ${dark ? "text-white/85" : "text-ink/80"}`}>Mise en route : {offer.delai}</p>
        {(offer.id === "O2" || offer.id === "O3" || offer.id === "O4") && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#AF52DE] px-4 py-1.5 text-[13px] font-semibold text-[#AF52DE]">
            <span aria-hidden>✨</span> IA emploi du temps incluse
          </p>
        )}
        <ul className="mt-8 text-left grid sm:grid-cols-2 gap-3 max-w-[760px] mx-auto">
          {offer.features.map((f) => (
            <li key={f} className={`flex items-start gap-2 text-[17px] ${dark ? "text-white/85" : "text-ink/85"}`}>
              <Check className={`w-5 h-5 mt-[2px] shrink-0 ${dark ? "text-sky" : "text-action dark:text-sky"}`} aria-hidden />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <a href="#contact" className={`btn-primary rounded-full px-[22px] py-[11px] text-[17px] min-h-[44px] inline-flex items-center ${dark ? "bg-action text-white" : "bg-action text-white"}`}>
            {offer.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
