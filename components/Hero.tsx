"use client";
import { motion, MotionConfig } from "motion/react";

export function Hero() {
  return (
    <section className="tile bg-canvas" aria-labelledby="hero-title">
      <div className="max-w-prose980 mx-auto px-5 py-20 text-center">
        <MotionConfig reducedMotion="user">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-ink/60">
              Écoles privées au Maroc
            </p>
            <h1 id="hero-title" className="font-display font-semibold text-hero mt-4">
              L&apos;école gère. SchoolOS s&apos;occupe du reste.
            </h1>
            <p className="text-lead text-ink/80 mt-5 max-w-[640px] mx-auto">
              Une plateforme modulaire : site web, administration, enseignants, parents. Commencez petit, évoluez à votre rythme.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 px-5 sm:px-0">
              <a href="#contact" className="btn-primary bg-action text-white rounded-full px-[22px] py-[11px] text-[17px] min-h-[44px] inline-flex items-center justify-center w-full sm:w-auto">
                Demander un devis
              </a>
              <a href="#comparatif" className="rounded-full px-[22px] py-[11px] text-[17px] text-action dark:text-sky border border-action min-h-[44px] inline-flex items-center justify-center w-full sm:w-auto">
                Comparer
              </a>
            </div>
          </motion.div>
        </MotionConfig>
        <div className="hero-photo mt-14 overflow-hidden rounded-card bg-parchment shadow-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
            alt="Cour d'école lumineuse avec élèves — visuel vitrine SchoolOS"
            className="w-full h-[280px] sm:h-[420px] object-cover"
            loading="eager"
          />
        </div>
        <p className="text-[12px] text-muted mt-3">Visuel d&apos;illustration — remplacez par la photo de votre école.</p>
      </div>
    </section>
  );
}
