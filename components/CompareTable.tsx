import { Check, X } from "lucide-react";
import { COMPARISON } from "@/data/offers";

export function CompareTable() {
  return (
    <section id="comparatif" className="tile bg-pearl" aria-labelledby="comparatif-title">
      <div className="max-w-prose980 mx-auto px-5 py-20">
        <h2 id="comparatif-title" className="font-display font-semibold text-dlg text-center">Comparaison des offres</h2>
        <div className="mt-8 hidden md:block overflow-hidden rounded-card border border-hairline bg-white dark:bg-[#1C1C1E]">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="text-left text-[14px] text-ink/60">
                <th scope="col" className="p-4 font-semibold">Fonctionnalité</th>
                {["O1", "O2", "O3", "O4"].map((o) => (
                  <th key={o} scope="col" className="p-4 font-semibold text-center">{o}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((r) => {
                const isIA = r.label === "IA emploi du temps";
                return (
                <tr key={r.label} className={`border-t border-hairline ${isIA ? "bg-[#AF52DE]/10" : ""}`}>
                  <th scope="row" className="p-4 font-normal text-left">
                    {r.label}{" "}
                    {isIA && (
                      <span className="inline-block rounded-full bg-[#AF52DE] px-2 py-0.5 text-[11px] font-semibold text-white align-middle">
                        IA
                      </span>
                    )}
                  </th>
                  {([r.O1, r.O2, r.O3, r.O4] as boolean[]).map((v, i) => (
                    <td key={i} className="p-4 text-center">
                      {v ? <Check className="w-5 h-5 text-action dark:text-sky inline" aria-label="Inclus" /> : <X className="w-5 h-5 text-ink/25 inline" aria-label="Non inclus" />}
                    </td>
                  ))}
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="md:hidden mt-8 grid gap-3">
          {COMPARISON.map((r) => {
            const isIA = r.label === "IA emploi du temps";
            return (
            <details key={r.label} className={`bg-white dark:bg-[#1C1C1E] border ${isIA ? "border-[#AF52DE]" : "border-hairline"} rounded-card p-4`}>
              <summary className="text-[16px] font-semibold cursor-pointer">
                {r.label}{" "}
                {isIA && (
                  <span className="inline-block rounded-full bg-[#AF52DE] px-2 py-0.5 text-[11px] font-semibold text-white align-middle">
                    IA
                  </span>
                )}
              </summary>
              <ul className="mt-3 grid grid-cols-4 gap-2 text-[14px]">
                {(["O1", "O2", "O3", "O4"] as const).map((o) => (
                  <li key={o} className="flex flex-col items-center gap-1">
                    <span className="text-ink/50">{o}</span>
                    {r[o] ? <Check className="w-5 h-5 text-action dark:text-sky" aria-label={`${o} inclus`} /> : <X className="w-5 h-5 text-ink/25" aria-label={`${o} non inclus`} />}
                  </li>
                ))}
              </ul>
            </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
