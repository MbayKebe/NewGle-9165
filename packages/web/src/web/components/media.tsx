import { AlertTriangle, Check, Play } from "lucide-react";
import {
  mediaActions,
  mediaIntro,
  mediaStats,
  partnerLogos,
  photoAssets,
  videoAssets,
} from "../lib/report-data";
import { Eyebrow, SectionShell, StatBlock } from "./report-ui";

function VideoCard({ asset }: { asset: (typeof videoAssets)[number] }) {
  const dormant = asset.status === "Jamais diffusée";

  return (
    <figure className="reveal flex flex-col">
      <div
        className={`relative overflow-hidden rounded-[8px] border bg-navy-900 ${
          dormant ? "border-orange" : "border-line"
        }`}
      >
        <video
          src={asset.src}
          poster={asset.poster}
          controls
          preload="none"
          playsInline
          aria-label={asset.title}
          className={`block w-full bg-navy-900 ${
            asset.portrait ? "max-h-[460px] object-contain" : "aspect-video object-cover"
          }`}
        >
          <track kind="captions" src={asset.captions} srcLang="fr" label="Français" default />
        </video>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-500 ${
            dormant ? "bg-orange-700 text-white" : "bg-slate/10 text-slate"
          }`}
        >
          {dormant ? (
            <AlertTriangle className="h-3 w-3" aria-hidden="true" />
          ) : (
            <Play className="h-3 w-3" aria-hidden="true" />
          )}
          {asset.status}
        </span>
      </div>

      <figcaption className="mt-3">
        <h4 className="font-display text-base font-700 text-navy-900">{asset.title}</h4>
        <p className="eyebrow mt-1 text-slate">{asset.meta}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate">{asset.note}</p>
      </figcaption>
    </figure>
  );
}

export function DormantMedia() {
  const flagship = videoAssets[0];
  const others = videoAssets.slice(1);

  return (
    <SectionShell
      id="medias"
      num="05"
      title="Les actifs visuels dormants"
      intro="GLE possède déjà les photos et les vidéos qui manquent à son site. Tous les médias de cette section proviennent du serveur de globalengineering.sn."
      variant="paper"
    >
      <div className="md:pl-[3.75rem]">
        <div className="reading space-y-6">
          {mediaIntro.map((para) => (
            <p key={para.slice(0, 40)} className="reveal text-lg leading-relaxed text-ink">
              {para}
            </p>
          ))}
        </div>

        <div className="reveal mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mediaStats.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} note={stat.note} />
          ))}
        </div>

        {/* Vidéos */}
        <div className="mt-20">
          <Eyebrow tone="orange">Les cinq vidéos existantes</Eyebrow>
          <h3 className="mt-3 font-display text-lg font-700 text-navy-900 md:text-xl">
            Cinq films déjà tournés, zéro sur les pages d'entrée
          </h3>
          <p className="reading mt-4 text-slate">
            Les quatre séquences courtes sont accessibles uniquement depuis des fiches projet
            enfouies dans la pagination. Le film principal, lui, n'est publié nulle part. Les
            lecteurs ci-dessous sont fonctionnels : ce sont les fichiers réels de GLE.
          </p>

          <div className="reveal mt-10 rounded-[8px] border border-orange bg-orange/5 p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
              <div className="overflow-hidden rounded-[8px] border border-orange/40 bg-navy-900">
                <video
                  src={flagship.src}
                  poster={flagship.poster}
                  controls
                  preload="none"
                  playsInline
                  aria-label={flagship.title}
                  className="block aspect-video w-full object-cover"
                >
                  <track
                    kind="captions"
                    src={flagship.captions}
                    srcLang="fr"
                    label="Français"
                    default
                  />
                </video>
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-700 px-3 py-1 text-xs font-500 text-white">
                  <AlertTriangle className="h-3 w-3" aria-hidden="true" />
                  {flagship.status}
                </span>
                <h4 className="mt-4 font-display text-lg font-700 text-navy-900">
                  {flagship.title}
                </h4>
                <p className="eyebrow mt-1 text-slate">{flagship.meta}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink">{flagship.note}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {others.map((asset) => (
              <VideoCard key={asset.src} asset={asset} />
            ))}
          </div>
        </div>

        {/* Photos */}
        <div className="mt-24">
          <Eyebrow tone="orange">Photothèque existante</Eyebrow>
          <h3 className="mt-3 font-display text-lg font-700 text-navy-900 md:text-xl">
            107 photos hébergées, presque aucune sur les pages qui comptent
          </h3>
          <p className="reading mt-4 text-slate">
            Un échantillon récupéré depuis le serveur de GLE. Ces images répondent déjà au besoin
            de preuve terrain identifié au point faible n° 02 — elles sont simplement invisibles
            depuis l'accueil.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photoAssets.map((photo) => (
              <figure
                key={photo.src}
                className={`reveal ${photo.span ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className="overflow-hidden rounded-[8px] border border-line bg-white">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    className="block aspect-[3/2] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-slate">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Logos */}
        <div className="mt-24">
          <Eyebrow tone="orange">Références clients</Eyebrow>
          <h3 className="mt-3 font-display text-lg font-700 text-navy-900 md:text-xl">
            17 logos partenaires, 4 visibles à la fois
          </h3>
          <p className="reading mt-4 text-slate">
            Le carrousel de la page d'accueil fait défiler ses logos quatre par quatre. Un visiteur
            pressé ne verra jamais Senelec, Ageroute, le PUDC ou Vivo Energy — des références qui
            valident à elles seules la capacité de GLE à traiter des marchés publics d'envergure.
            Les logos encadrés en orange sont les quatre visibles au moment de notre capture d'écran.
          </p>

          <ul className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partnerLogos.map((logo) => (
              <li
                key={logo.src}
                className={`flex h-24 items-center justify-center rounded-[8px] border bg-white p-4 ${
                  logo.shown ? "border-orange" : "border-line"
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="reveal mt-24 rounded-[8px] bg-navy-900 p-8 md:p-10">
          <Eyebrow tone="light">Ce qu'il faut en faire</Eyebrow>
          <h3 className="mt-3 font-display text-lg font-700 text-white md:text-xl">
            Six actions sans production de contenu nouveau
          </h3>
          <ul className="mt-8 space-y-4">
            {mediaActions.map((action) => (
              <li key={action.slice(0, 40)} className="flex gap-4">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-orange"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-white/80">{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
