"use client";
import { useState } from "react";
import { ThinkingOrb } from "thinking-orbs";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setDone(true);
  };
  return (
    <section id="contact" className="tile bg-parchment" aria-labelledby="contact-title">
      <div className="max-w-prose980 mx-auto px-5 py-20">
        <h2 id="contact-title" className="font-display font-semibold text-dlg text-center">Contact — Demander un devis</h2>
        <p className="text-center text-ink/70 mt-3">
          Écrivez-nous à <a href="mailto:officialkeninc@gmail.com" className="text-action dark:text-sky font-semibold">officialkeninc@gmail.com</a> ou via le formulaire.
        </p>
        <form onSubmit={submit} className="mt-8 max-w-[560px] mx-auto bg-white dark:bg-[#1C1C1E] border border-hairline rounded-card p-6 grid gap-4">
          <label className="grid gap-1 text-[14px] font-semibold">
            Nom de l&apos;école
            <input required name="ecole" className="font-normal border border-hairline rounded-util px-4 min-h-[44px]" placeholder="École Al Manar, Casablanca" />
          </label>
          <label className="grid gap-1 text-[14px] font-semibold">
            Email
            <input required type="email" name="email" className="font-normal border border-hairline rounded-util px-4 min-h-[44px]" placeholder="direction@ecole.ma" />
          </label>
          <label className="grid gap-1 text-[14px] font-semibold">
            Effectif approximatif
            <input type="number" name="effectif" min={20} max={5000} className="font-normal border border-hairline rounded-util px-4 min-h-[44px]" placeholder="200" />
          </label>
          <button disabled={sending} className="btn-primary bg-action text-white rounded-full px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center gap-2 disabled:opacity-60">
            {sending && <ThinkingOrb state="connecting" size={20} aria-label="Envoi en cours…" />}
            {sending ? "Envoi…" : "Demander un devis"}
          </button>
          {done && !sending && <p role="status" className="text-[15px] text-ink/70">Merci ! Démo factice — branchez votre email / CRM ici.</p>}
          <p className="text-[12px] text-muted">En envoyant, vous acceptez d&apos;être recontacté. Aucune donnée stockée (vitrine statique).</p>
        </form>
      </div>
    </section>
  );
}
