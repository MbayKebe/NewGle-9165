import { sections } from "../lib/report-data";
import { useActiveSection } from "../hooks/use-active-section";

const ids = sections.map((s) => s.id);

export function SideNav() {
  const active = useActiveSection(ids);

  return (
    <nav
      aria-label="Sommaire du rapport"
      className="pointer-events-none fixed top-0 left-0 z-40 hidden h-screen w-[230px] xl:block"
    >
      <div className="pointer-events-auto flex h-full flex-col justify-center gap-1 pl-8">
        <p className="eyebrow mb-4 text-slate">Sommaire</p>
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group flex items-baseline gap-3 py-1.5 text-sm transition-colors duration-150 ${
                isActive ? "text-navy-900" : "text-slate hover:text-navy"
              }`}
            >
              <span
                className={`font-display text-xs transition-colors duration-150 ${
                  isActive ? "text-orange" : "text-slate/60"
                }`}
              >
                {s.num}
              </span>
              <span className={isActive ? "font-500" : ""}>{s.nav}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export function TopBar() {
  const active = useActiveSection(ids);
  const current = sections.find((s) => s.id === active);

  return (
    <div className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm xl:hidden">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4 px-6 py-3">
        <span className="font-display text-sm font-600 text-navy-900">Audit GLE</span>
        <span className="flex items-center gap-2 truncate text-xs text-slate">
          <span className="font-display text-orange">{current?.num ?? "01"}</span>
          <span className="truncate">{current?.nav ?? "Synthèse"}</span>
        </span>
      </div>
    </div>
  );
}
