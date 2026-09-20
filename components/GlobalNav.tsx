import Link from "next/link";

export function GlobalNav() {
  return (
    <nav aria-label="Navigation principale" className="bg-black text-white h-11 text-[12px] sticky top-0 z-40">
      <div className="max-w-grid1440 mx-auto h-full px-5 flex items-center justify-between gap-4">
        <Link href="#top" className="font-semibold tracking-tight text-[13px]">
          KenCo <span className="font-normal text-white/60">• SchoolOS</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-white/80">
          <Link href="#probleme" className="hover:text-white">Problème</Link>
          <Link href="#solution" className="hover:text-white">Solution</Link>
          <Link href="#offres" className="hover:text-white">Offres</Link>
          <Link href="#comparatif" className="hover:text-white">Comparer</Link>
          <Link href="#devis" className="hover:text-white">Devis</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </div>
        <Link
          href="#contact"
          className="btn-primary bg-action text-white rounded-full px-4 py-1.5 text-[12px] min-h-[32px] inline-flex items-center"
        >
          Demander un devis
        </Link>
      </div>
    </nav>
  );
}
