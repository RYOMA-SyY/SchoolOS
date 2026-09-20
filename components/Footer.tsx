export function Footer() {
  return (
    <footer className="bg-parchment text-ink/70 text-[12px] no-print">
      <div className="max-w-grid1440 mx-auto px-5 py-16 grid gap-10 md:grid-cols-4 text-[15px] leading-[2.0]">
        <div>
          <p className="text-[14px] font-semibold text-ink">KenCo — SchoolOS</p>
          <p className="mt-2 text-[14px]">Solutions digitales pour écoles privées au Maroc.</p>
        </div>
        <nav aria-label="Offres">
          <p className="text-[14px] font-semibold text-ink">Offres</p>
          <ul className="mt-2">
            <li><a href="#offre-o1" className="hover:text-ink">O1 Site Web</a></li>
            <li><a href="#offre-o2" className="hover:text-ink">O2 Admin Core</a></li>
            <li><a href="#offre-o3" className="hover:text-ink">O3 + Enseignants</a></li>
            <li><a href="#offre-o4" className="hover:text-ink">O4 Full</a></li>
            <li><a href="#offre-o5" className="hover:text-ink">O5 Sur mesure</a></li>
          </ul>
        </nav>
        <nav aria-label="Ressources">
          <p className="text-[14px] font-semibold text-ink">Ressources</p>
          <ul className="mt-2">
            <li><a href="#comparatif" className="hover:text-ink">Comparatif</a></li>
            <li><a href="#devis" className="hover:text-ink">Estimation</a></li>
            <li><a href="#contact" className="hover:text-ink">Contact</a></li>
          </ul>
        </nav>
        <div>
          <p className="text-[14px] font-semibold text-ink">Contact</p>
          <p className="mt-2">
            <a href="mailto:officialkeninc@gmail.com" className="text-action dark:text-sky">officialkeninc@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="border-t border-hairline">
        <p className="max-w-grid1440 mx-auto px-5 py-4 text-[11px]">© 2026 KenCo — Vitrine UI uniquement, sans backend. Prix indicatifs MAD HT, TVA 20% en sus sur devis final.</p>
      </div>
    </footer>
  );
}
