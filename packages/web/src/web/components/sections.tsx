import { Check, Quote } from "lucide-react";
import {
  evidence,
  executiveSummary,
  findings,
  limits,
  methodology,
  phases,
  recommendationHeadline,
  recommendations,
  strengths,
} from "../lib/report-data";
import { Eyebrow, Pill, SectionShell } from "./report-ui";

export function ExecutiveSummary() {
  return (
    <SectionShell id="synthese" num="01" title="Résumé exécutif" variant="paper">
      <div className="md:pl-[3.75rem]">
        <div className="reading space-y-6">
          {executiveSummary.map((para) => (
            <p key={para.slice(0, 40)} className="reveal text-base text-ink">
              {para}
            </p>
          ))}
        </div>

        <figure className="reveal mt-12 max-w-3xl border-l-2 border-orange bg-paper-alt p-8">
          <Quote className="h-5 w-5 text-orange" aria-hidden="true" />
          <blockquote className="mt-4">
            <p className="font-display text-lg leading-snug font-600 text-navy-900">
              {recommendationHeadline}
            </p>
          </blockquote>
          <figcaption className="eyebrow mt-5 text-slate">Recommandation principale</figcaption>
        </figure>
      </div>
    </SectionShell>
  );
}

export function Strengths() {
  return (
    <SectionShell
      id="acquis"
      num="02"
      title="Les acquis du site actuel"
      intro="Le diagnostic ne partirait pas de zéro : six fondations sont déjà en place et méritent d'être conservées dans toute refonte."
      variant="alt"
    >
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 md:pl-[3.75rem]">
        {strengths.map((item) => (
          <div key={item.title} className="reveal flex gap-4">
            <span
              aria-hidden="true"
              className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10"
            >
              <Check className="h-3.5 w-3.5 text-navy" />
            </span>
            <div>
              <h3 className="text-base font-600 text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

const severityTone = {
  Critique: "critique",
  "Élevé": "eleve",
  Moyen: "moyen",
} as const;

export function Findings() {
  return (
    <SectionShell
      id="constats"
      num="03"
      title="Points faibles identifiés"
      intro="Six constats, classés par sévérité. Le portfolio de réalisations est le frein le plus coûteux : c'est l'argument central de l'entreprise, et c'est celui qui manque de preuves."
      variant="paper"
    >
      <div className="space-y-4 md:pl-[3.75rem]">
        {findings.map((finding) => (
          <article
            key={finding.num}
            className="reveal rounded-[8px] border border-line bg-paper p-7 md:p-9"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm font-600 text-orange">{finding.num}</span>
                <h3 className="text-lg font-600 text-navy-900">{finding.title}</h3>
              </div>
              <Pill tone={severityTone[finding.severity]}>{finding.severity}</Pill>
            </div>

            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:gap-10">
              <div className="reading space-y-4">
                {finding.body.map((para) => (
                  <p key={para.slice(0, 40)} className="text-sm text-slate">
                    {para}
                  </p>
                ))}
              </div>

              {finding.stat ? (
                <aside className="shrink-0 border-t border-line pt-4 lg:w-52 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <p className="font-display text-2xl font-700 text-navy">{finding.stat.value}</p>
                  <p className="mt-2 text-xs text-slate">{finding.stat.label}</p>
                </aside>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function Evidence() {
  return (
    <SectionShell
      id="preuves"
      num="04"
      title="Le site aujourd'hui"
      intro="Captures prises pendant l'analyse, en desktop et en mobile."
      variant="alt"
    >
      <div className="space-y-14 md:pl-[3.75rem]">
        {evidence.map((shot) => (
          <figure key={shot.src} className="reveal">
            <Eyebrow tone="slate">{shot.label}</Eyebrow>
            <div
              className={`mt-4 overflow-hidden rounded-[8px] border border-line bg-white ${
                shot.frame === "mobile" ? "w-[300px] max-w-full" : "w-full"
              }`}
            >
              <img
                src={shot.src}
                alt={shot.caption}
                loading="lazy"
                className={`block w-full object-cover object-top ${
                  shot.frame === "mobile" ? "max-h-[560px]" : "h-auto max-h-[480px]"
                }`}
              />
            </div>
            <figcaption className="mt-4 max-w-2xl text-sm text-slate">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}

export function Recommendations() {
  return (
    <SectionShell
      id="recommandations"
      num="07"
      title="Recommandations priorisées"
      intro="Classées par rapport impact / effort. Les trois premières priorités produisent l'essentiel du gain de crédibilité et de conversion ; la présence en ligne de la section 06 vient ensuite alimenter le site en visiteurs."
      variant="paper"
    >
      <div className="md:pl-[3.75rem]">
        <ol className="space-y-px">
          {recommendations.map((rec) => (
            <li key={rec.priority} className="reveal border-t border-line py-9 last:border-b">
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                <div className="lg:w-64 lg:shrink-0">
                  <Eyebrow tone="orange">{rec.priority}</Eyebrow>
                  <h3 className="mt-3 font-display text-lg font-600 text-navy-900">{rec.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Pill tone="impact">{rec.impact}</Pill>
                    <Pill tone="effort">{rec.effort}</Pill>
                  </div>
                </div>

                <ul className="reading space-y-4">
                  {rec.actions.map((action) => (
                    <li key={action.slice(0, 40)} className="flex gap-3 text-sm text-slate">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

export function Plan() {
  return (
    <SectionShell
      id="plan"
      num="08"
      title="Plan d'action par phases"
      intro="Séquencé pour que chaque phase produise un résultat visible avant d'attaquer la suivante."
      variant="dark"
    >
      <div className="md:pl-[3.75rem]">
        {/* Table on desktop */}
        <div className="reveal hidden overflow-hidden rounded-[8px] border border-white/15 md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-white/5">
                <th className="eyebrow px-6 py-4 text-white/60">Phase</th>
                <th className="eyebrow px-6 py-4 text-white/60">Actions</th>
                <th className="eyebrow px-6 py-4 text-white/60">Durée</th>
                <th className="eyebrow px-6 py-4 text-white/60">Impact attendu</th>
              </tr>
            </thead>
            <tbody>
              {phases.map((p) => (
                <tr key={p.phase} className="border-t border-white/10 align-top">
                  <td className="px-6 py-6">
                    <span className="font-display text-sm font-600 text-orange">{p.phase}</span>
                    <span className="mt-1 block text-sm text-white">{p.name}</span>
                  </td>
                  <td className="max-w-sm px-6 py-6 text-sm text-white/70">{p.actions}</td>
                  <td className="px-6 py-6 text-sm whitespace-nowrap text-white/70">
                    {p.duration}
                  </td>
                  <td className="px-6 py-6 text-sm text-white/70">{p.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked cards on mobile */}
        <div className="space-y-4 md:hidden">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="reveal rounded-[8px] border border-white/15 bg-white/5 p-6"
            >
              <Eyebrow tone="light">{p.phase}</Eyebrow>
              <h3 className="mt-2 font-display text-base font-600 text-white">{p.name}</h3>
              <p className="mt-3 text-sm text-white/70">{p.actions}</p>
              <dl className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs">
                <div className="flex gap-2">
                  <dt className="text-white/45">Durée —</dt>
                  <dd className="text-white/80">{p.duration}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-white/45">Impact —</dt>
                  <dd className="text-white/80">{p.impact}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export function Methodology() {
  return (
    <SectionShell id="methodologie" num="09" title="Méthodologie et limites" variant="paper">
      <div className="grid gap-12 md:pl-[3.75rem] lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <Eyebrow tone="slate">Méthodologie</Eyebrow>
          <div className="mt-4 space-y-4">
            {methodology.map((para) => (
              <p key={para.slice(0, 40)} className="text-sm text-slate">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="reveal">
          <Eyebrow tone="slate">Limites de l'analyse</Eyebrow>
          <ul className="mt-4 space-y-4">
            {limits.map((limit) => (
              <li key={limit.slice(0, 40)} className="flex gap-3 text-sm text-slate">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate/40"
                />
                <span>{limit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-alt px-6 py-12 md:px-10">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-sm text-slate">
          Audit de <span className="text-navy-900">globalengineering.sn</span> — 13 septembre 2026
        </p>
        <p className="text-xs text-slate">
          Document d'analyse indépendant. Global Engineering SARL, Dakar, Sénégal.
        </p>
      </div>
    </footer>
  );
}
