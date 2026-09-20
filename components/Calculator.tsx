"use client";
import { useMemo } from "react";
import { OFFERS, an1Pour, fmtMAD, mensuelPour, type OfferId } from "@/data/offers";

export function Calculator({
  offer,
  setOffer,
  eleves,
  setEleves,
}: {
  offer: OfferId;
  setOffer: (o: OfferId) => void;
  eleves: number;
  setEleves: (n: number) => void;
}) {
  const selected = useMemo(() => OFFERS.find((o) => o.id === offer)!, [offer]);
  const mensuel = mensuelPour(selected, eleves);
  const an1 = an1Pour(selected, eleves);

  return (
    <section id="devis" className="tile bg-parchment" aria-labelledby="devis-title">
      <div className="max-w-prose980 mx-auto px-5 py-20">
        <h2 id="devis-title" className="font-display font-semibold text-dlg text-center">
          Estimation indicative — Année 1
        </h2>
        <p className="text-center text-ink/70 mt-3">Sélectionnez l&apos;offre et l&apos;effectif. Total = installation + 12 mois. Devis formel sur demande.</p>

        <div role="radiogroup" aria-label="Choisir une offre" className="mt-8 flex flex-wrap justify-center gap-2">
          {OFFERS.map((o) => {
            const sel = o.id === offer;
            return (
              <button
                key={o.id}
                role="radio"
                aria-checked={sel}
                onClick={() => setOffer(o.id)}
                className={`rounded-full px-4 py-3 text-[14px] min-h-[44px] border ${
                  sel ? "bg-white dark:bg-[#1C1C1E] border-[2px] border-focus" : "bg-white dark:bg-[#1C1C1E] border-hairline"
                }`}
              >
                {o.id} — {o.nom}
              </button>
            );
          })}
        </div>

        <div className="mt-8 max-w-[560px] mx-auto bg-white dark:bg-[#1C1C1E] border border-hairline rounded-card p-6">
          {selected.surDevis ? (
            <div className="text-center">
              <p className="text-[15px] text-ink/70">
                L&apos;offre <strong>{selected.id} — {selected.nom}</strong> se construit avec vous : modules à la carte, intégrations, design, applications mobiles.
              </p>
              <a href="mailto:officialkeninc@gmail.com" className="btn-primary bg-action text-white rounded-full px-5 py-2.5 text-[15px] min-h-[44px] inline-flex items-center mt-5">
                Contacter KenCo
              </a>
              <p className="text-[14px] text-ink/60 mt-3">
                ou <a href="#contact" className="text-action dark:text-sky">via le formulaire</a> — réponse avec devis formel.
              </p>
            </div>
          ) : (
          <>
          <label htmlFor="eleves" className="text-[14px] font-semibold">
            Nombre d&apos;élèves : <span className="tnum">{eleves}</span>
          </label>
          <input
            id="eleves"
            type="range"
            min={50}
            max={2000}
            step={10}
            value={eleves}
            onChange={(e) => setEleves(Number(e.target.value))}
            className="w-full mt-4 accent-action min-h-[44px]"
          />
          <div className="mt-4 grid grid-cols-2 gap-3 text-[15px]">
            <p className="text-ink/60">Installation</p>
            <p className="tnum text-right font-semibold">{fmtMAD(selected.setup)}</p>
            <p className="text-ink/60">Mensuel estimé</p>
            <p className="tnum text-right font-semibold">{fmtMAD(mensuel)}</p>
          </div>
          <div className="mt-5 pt-5 border-t border-hairline flex items-center justify-between gap-4">
            <div>
              <p className="text-[12px] uppercase tracking-wide text-ink/50">Total Année 1 (indicatif)</p>
              <p className="tnum font-display font-semibold text-[32px] leading-tight" aria-live="polite" aria-atomic="true">
                {fmtMAD(an1)}
              </p>
              <p className="text-[14px] text-ink/60">
                {selected.id} • {eleves} élèves
              </p>
            </div>
            <a href="#contact" className="btn-primary bg-action text-white rounded-full px-5 py-2.5 text-[15px] min-h-[44px] inline-flex items-center">
              Demander ce devis
            </a>
          </div>
          <p className="text-[12px] text-muted mt-4">Exemple : O3 × 200 élèves = 18 000 + 35×200×12 = 102 000 MAD. TVA 20%, conditions (50/50, 12 mois min) précisées dans le devis formel envoyé par email.</p>
          </>
          )}
        </div>
      </div>
    </section>
  );
}
