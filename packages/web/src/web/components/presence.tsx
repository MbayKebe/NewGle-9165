import { ArrowUpRight, CircleDashed, CircleSlash, Radio, TriangleAlert } from "lucide-react";
import type { Channel } from "../lib/report-data";
import { channels, presenceIntro, presenceStats, presenceTracks } from "../lib/report-data";
import { Eyebrow, Pill, SectionShell, StatBlock } from "./report-ui";

const stateStyles: Record<Channel["state"], { chip: string; icon: typeof Radio }> = {
  Actif: { chip: "bg-navy/10 text-navy", icon: Radio },
  "Sous-exploité": { chip: "bg-orange/20 text-orange-700", icon: ArrowUpRight },
  "Abandonné": { chip: "bg-slate/10 text-slate", icon: CircleDashed },
  Inexistant: { chip: "bg-orange-700 text-white", icon: CircleSlash },
  "Non maîtrisé": { chip: "bg-orange-700 text-white", icon: TriangleAlert },
};

function ChannelRow({ channel }: { channel: Channel }) {
  const { chip, icon: Icon } = stateStyles[channel.state];

  return (
    <li className="reveal border-t border-line py-7 last:border-b">
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-12">
        <div className="lg:w-64 lg:shrink-0">
          <h4 className="font-display text-base font-700 text-navy-900">{channel.name}</h4>
          <p className="mt-1 text-xs break-words text-slate">{channel.handle}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-500 ${chip}`}
            >
              <Icon className="h-3 w-3" aria-hidden="true" />
              {channel.state}
            </span>
          </div>
        </div>

        <div className="reading">
          <p className="eyebrow text-ink">{channel.audience}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate">{channel.note}</p>
        </div>
      </div>
    </li>
  );
}

export function OnlinePresence() {
  return (
    <SectionShell
      id="presence"
      num="06"
      title="Présence en ligne hors du site"
      intro="Dix canaux audités le 13 septembre 2026 : réseaux sociaux, fiche Google, annuaires, marchés publics, blog. Aucun ne ramène aujourd'hui de trafic qualifié vers une page de conversion."
      variant="alt"
    >
      <div className="md:pl-[3.75rem]">
        <div className="reading space-y-6">
          {presenceIntro.map((para) => (
            <p key={para.slice(0, 40)} className="reveal text-lg leading-relaxed text-ink">
              {para}
            </p>
          ))}
        </div>

        <div className="reveal mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {presenceStats.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} note={stat.note} />
          ))}
        </div>

        {/* Audit canal par canal */}
        <div className="mt-20">
          <Eyebrow tone="orange">État des lieux</Eyebrow>
          <h3 className="mt-3 font-display text-lg font-700 text-navy-900 md:text-xl">
            Canal par canal
          </h3>
          <p className="reading mt-4 text-slate">
            Les comptes déclarés dans le code du site — Facebook, LinkedIn, Instagram — ont été
            relevés puis consultés publiquement. Les autres canaux ont été retrouvés par recherche
            sur le nom de l'entreprise, ce qui est exactement la démarche d'un prospect qui vérifie
            un fournisseur avant de l'appeler.
          </p>

          <ul className="mt-10 space-y-px">
            {channels.map((channel) => (
              <ChannelRow key={channel.name} channel={channel} />
            ))}
          </ul>
        </div>

        {/* Chantiers */}
        <div className="mt-24">
          <Eyebrow tone="orange">Plan de présence</Eyebrow>
          <h3 className="mt-3 font-display text-lg font-700 text-navy-900 md:text-xl">
            Cinq chantiers, dans cet ordre
          </h3>
          <p className="reading mt-4 text-slate">
            Séquencés du moins coûteux au plus structurant. Les deux premiers ne demandent aucun
            budget média : ils consistent à activer ce que GLE possède déjà — une fiche Google, une
            audience LinkedIn et une photothèque de chantiers.
          </p>

          <ol className="mt-10 space-y-px">
            {presenceTracks.map((track) => (
              <li key={track.label} className="reveal border-t border-line py-9 last:border-b">
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                  <div className="lg:w-64 lg:shrink-0">
                    <Eyebrow tone="orange">{track.label}</Eyebrow>
                    <h4 className="mt-3 font-display text-lg font-600 text-navy-900">
                      {track.title}
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Pill tone="impact">{track.impact}</Pill>
                      <Pill tone="effort">{track.effort}</Pill>
                    </div>
                  </div>

                  <ul className="reading space-y-4">
                    {track.actions.map((action) => (
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
      </div>
    </SectionShell>
  );
}
