"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { OFFERS, an1Pour, fmtMAD, type OfferId } from "@/data/offers";

export function DevisBar({ offer, eleves }: { offer: OfferId; eleves: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const o = OFFERS.find((x) => x.id === offer)!;
  return (
    <>
      {visible && <div aria-hidden className="h-16 no-print" />}
      <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ type: "spring", stiffness: 210, damping: 28 }}
      className="sticky-bar frosted fixed bottom-0 inset-x-0 z-40 h-16 border-t border-hairline no-print"
      aria-hidden={!visible}
    >
      <div className="max-w-grid1440 mx-auto h-full px-5 flex items-center justify-between gap-3">
        <p className="tnum text-[15px]">
          <bdi>{offer} • {o.surDevis ? "Sur devis" : `${eleves} élèves • ${fmtMAD(an1Pour(o, eleves))} An1`}</bdi>
        </p>
        <a href="#contact" tabIndex={visible ? 0 : -1} className="btn-primary bg-action text-white rounded-full px-5 py-2 text-[14px] min-h-[44px] inline-flex items-center">
          Demander ce devis
        </a>
      </div>
    </motion.div>
    </>
  );
}
