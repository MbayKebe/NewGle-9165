import { ArrowDown } from "lucide-react";
import { headlineStats, meta } from "../lib/report-data";
import { Eyebrow, StatBlock } from "./report-ui";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-navy-900 px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-20">
      <img
        src="/images/gle/IMG-20241014-WA0059-1536x1023.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/92 to-navy-900/55"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-navy/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-20 h-64 w-64 rounded-full bg-orange/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1100px]">
        <div className="intro-stagger">
          <Eyebrow tone="light">Audit de site web — {meta.date}</Eyebrow>

          <h1 className="mt-6 max-w-4xl text-[2rem] leading-[1.12] font-700 text-white sm:text-[2.75rem] sm:leading-[1.08] md:text-3xl">
            Analyse et recommandations pour{" "}
            <span className="block text-[1.55rem] text-orange sm:inline sm:text-[length:inherit]">
              {meta.site}
            </span>
          </h1>

          <p className="reading mt-8 text-lg text-white/75">
            Un diagnostic des freins qui empêchent le site de {meta.client} de convertir ses
            visiteurs, et un plan d'action en cinq phases pour y remédier.
          </p>

          <dl className="mt-10 grid max-w-3xl gap-x-10 gap-y-5 border-t border-white/15 pt-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow text-white/45">Client</dt>
              <dd className="mt-1 text-sm text-white">{meta.client}</dd>
            </div>
            <div>
              <dt className="eyebrow text-white/45">Secteur</dt>
              <dd className="mt-1 text-sm text-white">{meta.sector}</dd>
            </div>
            <div>
              <dt className="eyebrow text-white/45">Périmètre</dt>
              <dd className="mt-1 text-sm text-white">{meta.scope}</dd>
            </div>
            <div>
              <dt className="eyebrow text-white/45">Date d'analyse</dt>
              <dd className="mt-1 text-sm text-white">{meta.date}</dd>
            </div>
          </dl>

          <a
            href="#synthese"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-500 text-navy-900 transition-colors duration-150 hover:bg-orange-700 hover:text-white"
          >
            Lire la synthèse
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>

          <p className="mt-8 max-w-xl text-xs leading-relaxed text-white/40">
            Photo d'arrière-plan : chantier d'éclairage livré par GLE, fichier récupéré depuis
            globalengineering.sn. Elle n'apparaît nulle part sur le site actuel — voir la
            section&nbsp;05.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              label={stat.label}
              note={stat.note}
              tone="light"
            />
          ))}
        </div>
      </div>
    </header>
  );
}
