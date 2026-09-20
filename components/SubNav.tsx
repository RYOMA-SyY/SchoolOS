"use client";
import { useEffect, useState } from "react";
import { OFFERS, an1Pour, fmtMAD, type OfferId } from "@/data/offers";

export function SubNav({
  offer,
  eleves,
}: {
  offer: OfferId;
  eleves: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const o = OFFERS.find((x) => x.id === offer)!;
  return (
    <div className="frosted sticky top-11 z-30 h-[52px] border-b border-hairline no-print">
      <div className="max-w-grid1440 mx-auto h-full px-5 flex items-center justify-between gap-3">
        <div className="hidden sm:flex items-center gap-4 text-[14px]">
          {OFFERS.map((x) => (
            <a key={x.id} href={`#offre-${x.id.toLowerCase()}`} className="text-ink/70 hover:text-ink">
              {x.id}
            </a>
          ))}
          <a href="#comparatif" className="text-ink/70 hover:text-ink">Comparer</a>
        </div>
        <p className="sm:hidden text-[14px] font-semibold">Offres</p>
        <div className="flex items-center gap-3">
          {visible && (
            <p className="tnum text-[14px] text-ink/80 hidden sm:block" aria-live="polite">
              {offer} • {o.surDevis ? "Sur devis" : `${eleves} élèves • ${fmtMAD(an1Pour(o, eleves))} An1`}
            </p>
          )}
          <a href="#contact" className="btn-primary bg-action text-white rounded-full px-4 py-1.5 text-[13px]">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
