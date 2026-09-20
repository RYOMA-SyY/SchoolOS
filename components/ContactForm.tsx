"use client";
import { useState } from "react";
import { ThinkingOrb } from "thinking-orbs";
import { OFFERS, an1Pour, fmtMAD, type OfferId } from "@/data/offers";

const DEST = "officialkeninc@gmail.com";

export function ContactForm({ offer, setOffer, eleves, setEleves }: { offer: OfferId; setOffer: (o: OfferId) => void; eleves: number; setEleves: (n: number) => void }) {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [ecole, setEcole] = useState("");
  const [email, setEmail] = useState("");

  const selected = OFFERS.find((o) => o.id === offer)!;
  const estimation = selected.surDevis ? "Sur devis" : fmtMAD(an1Pour(selected, eleves));

  const mailto = `mailto:${DEST}?subject=${encodeURIComponent(
    `Devis SchoolOS ${selected.id} — ${ecole || "Nouvelle demande"}`
  )}&body=${encodeURIComponent(
    `École: ${ecole}\nEmail: ${email}\nEffectif: ${eleves}\nOffre estimée: ${selected.id} — ${selected.nom}\nEstimation Année 1: ${estimation}`
  )}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${DEST}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Devis SchoolOS ${selected.id} — ${ecole}`,
          _template: "table",
          _captcha: "false",
          École: ecole,
          Email: email,
          Effectif: String(eleves),
          "Offre estimée": `${selected.id} — ${selected.nom}`,
          "Estimation Année 1": estimation,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="tile bg-parchment" aria-labelledby="contact-title">
      <div className="max-w-prose980 mx-auto px-5 py-20">
        <h2 id="contact-title" className="font-display font-semibold text-dlg text-center">Contact — Demander un devis</h2>
        <p className="text-center text-ink/70 mt-3">
          Écrivez-nous à <a href={`mailto:${DEST}`} className="text-action dark:text-sky font-semibold">{DEST}</a> ou via le formulaire.
        </p>
        <p className="tnum text-center text-[14px] text-ink/60 mt-2" aria-live="polite">
          Votre estimation : {selected.id} • {selected.surDevis ? "Sur devis" : `${eleves} élèves • ${estimation} An1`}
        </p>
        {done ? (
          <p role="status" className="mt-8 max-w-[560px] mx-auto bg-white dark:bg-[#1C1C1E] border border-hairline rounded-card p-6 text-center text-[16px]">
            Merci ! Votre demande a bien été envoyée à KenCo. Réponse avec devis formel par email.
          </p>
        ) : (
          <form onSubmit={submit} className="mt-8 max-w-[560px] mx-auto bg-white dark:bg-[#1C1C1E] border border-hairline rounded-card p-6 grid gap-4">
            <div>
              <p id="form-offre-label" className="text-[14px] font-semibold">Offre souhaitée</p>
              <div role="radiogroup" aria-labelledby="form-offre-label" className="mt-2 flex flex-wrap gap-2">
                {OFFERS.map((o) => {
                  const sel = o.id === offer;
                  return (
                    <button
                      key={o.id}
                      type="button"
                      role="radio"
                      aria-checked={sel}
                      onClick={() => setOffer(o.id)}
                      className={`rounded-full px-3.5 py-2 text-[13px] min-h-[44px] border ${
                        sel ? "border-[2px] border-focus font-semibold" : "border-hairline text-ink/70"
                      }`}
                    >
                      {o.id}
                    </button>
                  );
                })}
              </div>
              <p className="tnum text-[13px] text-ink/60 mt-2">{selected.nom} — {estimation}{selected.surDevis ? "" : " An1"}</p>
            </div>
            <label className="grid gap-1 text-[14px] font-semibold">
              Nom de l&apos;école
              <input required name="ecole" value={ecole} onChange={(e) => setEcole(e.target.value)} autoComplete="organization" className="font-normal border border-hairline rounded-util px-4 min-h-[44px] bg-transparent" placeholder="École Al Manar, Casablanca" />
            </label>
            <label className="grid gap-1 text-[14px] font-semibold">
              Email
              <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className="font-normal border border-hairline rounded-util px-4 min-h-[44px] bg-transparent" placeholder="direction@ecole.ma" />
            </label>
            <label className="grid gap-1 text-[14px] font-semibold">
              Effectif approximatif
              <input type="number" name="effectif" min={0} max={5000} value={eleves} onChange={(e) => setEleves(Math.max(0, Math.min(5000, Number(e.target.value) || 0)))} className="font-normal border border-hairline rounded-util px-4 min-h-[44px] bg-transparent" placeholder="200" />
            </label>
            <button disabled={sending} className="btn-primary bg-action text-white rounded-full px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center gap-2 disabled:opacity-60">
              {sending && <ThinkingOrb state="connecting" size={20} aria-label="Envoi en cours…" />}
              {sending ? "Envoi…" : "Demander un devis"}
            </button>
            {error && (
              <p role="alert" className="text-[14px] text-ink/80">
                Envoi direct impossible pour le moment. <a href={mailto} className="text-action dark:text-sky font-semibold">Cliquez ici pour envoyer via votre messagerie</a>.
              </p>
            )}
            <p className="text-[12px] text-muted">En envoyant, vous acceptez d&apos;être recontacté. Message transmis à KenCo uniquement.</p>
          </form>
        )}
      </div>
    </section>
  );
}
