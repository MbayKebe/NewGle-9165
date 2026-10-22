import { Link } from "wouter";
import {
  Sun,
  Wind,
  Leaf,
  Plug,
  Package,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import {
  company,
  keyFigures,
  services,
  projects,
  posts,
  partners,
} from "@/lib/site-data";
import { useReveal } from "@/hooks/use-reveal";
import { useSeo } from "@/lib/seo";
import {
  Container,
  Cta,
  Eyebrow,
  Section,
  SectionHead,
  Stat,
  TextLink,
  VideoPlayer,
} from "@/components/site/bits";

const serviceIcons = { sun: Sun, wind: Wind, leaf: Leaf, plug: Plug, package: Package };

const featuredSlugs = [
  "133-villages-mini-centrales-solaires",
  "eclairage-public-bourguiba-front-de-terre",
  "electrification-rurale-reseaux-electriques",
  "eclairage-autopont-diouloulou",
];

const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const pillars = [
  {
    icon: ShieldCheck,
    title: "Agréée et référencée",
    body: "Titulaire de marchés publics pour l'ASER, Senelec, Ageroute et le PUDC, avec les garanties et assurances exigées par les maîtres d'ouvrage.",
  },
  {
    icon: Wrench,
    title: "Du bureau d'études au chantier",
    body: "Études, fournitures, génie civil, pose et mise en service : une seule entreprise responsable de bout en bout de l'ouvrage.",
  },
  {
    icon: Users,
    title: "Équipes mobilisables partout",
    body: "Des brigades formées et équipées, capables d'intervenir de Dakar à Kédougou, y compris sur des sites isolés.",
  },
];

export default function Home() {
  useReveal();
  useSeo({
    title:
      "Global Engineering SARL — Énergie solaire et réseaux électriques MT/BT au Sénégal",
    description:
      "GLE conçoit et réalise au Sénégal des centrales solaires, mini-centrales de village, réseaux électriques MT/BT, éclairage public et signalisation routière. Devis sur demande à Dakar.",
    image: "/images/site/villages-1.jpg",
  });

  return (
    <>
      {/* ------------------------------------------------------------- hero */}
      <header className="relative isolate overflow-hidden bg-navy-900">
        <img
          src="/images/site/villages-1.jpg"
          alt="Centrale solaire photovoltaïque installée par GLE dans un village sénégalais"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/92 to-navy-900/25" />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div className="intro-stagger max-w-2xl">
            <Eyebrow className="text-orange">
              {company.legalName} — Dakar, Sénégal
            </Eyebrow>
            <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
              {company.claim}
            </h1>
            <p className="reading mt-6 text-lg text-white/80">
              Énergies renouvelables, réseaux électriques moyenne et basse tension,
              éclairage public : GLE étudie, construit et entretient les
              infrastructures qui alimentent les villages, les villes et les
              industries du Sénégal.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Cta href="/contact">Demander un devis</Cta>
              <Cta href="/realisations" variant="ghostLight">
                Voir nos réalisations
              </Cta>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
              <MapPin className="size-4 text-orange" />
              {company.address}
            </p>
          </div>

          <div className="relative hidden self-end lg:block">
            <div className="rounded-[8px] border border-white/15 bg-navy-900/70 p-7 backdrop-blur-sm">
              <p className="eyebrow text-orange">Ils nous font confiance</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {partners.slice(0, 6).map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-14 items-center justify-center rounded-[6px] bg-white px-2"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-9 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-white/55">
                ASER · Senelec · Ageroute · PUDC · Plan International · SAR
              </p>
            </div>
          </div>
        </Container>
      </header>

      {/* ---------------------------------------------------------- chiffres */}
      <div className="border-b border-line bg-paper">
        <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5">
          {keyFigures.map((figure) => (
            <Stat key={figure.label} value={figure.value} label={figure.label} />
          ))}
        </Container>
      </div>

      {/* ------------------------------------------------------------ métiers */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Nos métiers"
            title="Cinq expertises, un seul interlocuteur"
            intro="De la production d'énergie renouvelable à la distribution électrique, GLE couvre toute la chaîne technique des projets d'infrastructure."
          />
          <TextLink href="/services">Tous nos services</TextLink>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`reveal group flex flex-col rounded-[8px] border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_20px_40px_-30px_rgba(14,26,51,0.6)] ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <span className="inline-flex size-11 items-center justify-center rounded-[8px] bg-navy/8 text-navy transition-colors group-hover:bg-orange group-hover:text-navy-900">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-base font-semibold text-navy-900">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-sm text-slate">{service.short}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy">
                  En savoir plus
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}

          <div className="reveal flex flex-col justify-between rounded-[8px] bg-navy-900 p-7 text-white">
            <div>
              <p className="eyebrow text-orange">Un projet en tête ?</p>
              <p className="mt-4 font-display text-base font-semibold">
                Envoyez-nous votre cahier des charges, notre bureau d'études vous
                répond avec un chiffrage.
              </p>
            </div>
            <Cta href="/contact" className="mt-7 w-fit">
              Nous écrire
            </Cta>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------ piliers */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal relative">
            <img
              src="/images/site/camberene-3.jpg"
              alt="Techniciens GLE sur un chantier d'éclairage public à Cambérène"
              className="aspect-[4/3] w-full rounded-[8px] object-cover"
            />
            <div className="absolute -bottom-6 -right-4 hidden max-w-[230px] rounded-[8px] bg-orange p-5 sm:block">
              <p className="font-display text-lg font-bold text-navy-900">
                {company.founded}
              </p>
              <p className="mt-1 text-xs font-medium text-navy-900/80">
                Création de GLE à Dakar — capital de {company.capital}
              </p>
            </div>
          </div>

          <div>
            <SectionHead
              eyebrow="Pourquoi GLE"
              title="Une entreprise sénégalaise taillée pour les chantiers d'infrastructure"
              intro="Créée en décembre 2016 et dirigée par son fondateur, GLE réunit ingénieurs, techniciens et équipes de pose pour livrer des ouvrages conformes, dans les délais des marchés publics comme privés."
            />
            <div className="mt-10 space-y-7">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="reveal flex gap-4">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-white text-navy">
                    <pillar.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <TextLink href="/a-propos" className="mt-9">
              Découvrir l'entreprise
            </TextLink>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- réalisations */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Réalisations"
            title="Des chantiers livrés, des chiffres vérifiables"
            intro="Éclairage public, réseaux MT/BT, mini-centrales solaires et signalisation : chaque référence détaille le maître d'ouvrage, le périmètre et les quantités posées."
          />
          <TextLink href="/realisations">Les 8 références</TextLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/realisations/${project.slug}`}
              className="reveal group overflow-hidden rounded-[8px] border border-line bg-paper transition-shadow hover:shadow-[0_24px_50px_-34px_rgba(14,26,51,0.65)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.images[0]?.src}
                  alt={project.images[0]?.alt ?? project.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-navy-900/90 px-3 py-1 text-xs font-medium text-white">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-base font-semibold text-navy-900">
                  {project.shortTitle}
                </h3>
                <p className="mt-1 text-xs text-slate">
                  {project.client ? `${project.client} — ` : ""}
                  {project.location}
                </p>
                <p className="mt-3 text-sm text-slate">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- film vidéo */}
      <Section tone="navy-deep">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <SectionHead
              invert
              eyebrow="En vidéo"
              title="Électrification de Diourbel — le chantier filmé en 2025"
              intro="Tirage de câble, pose des supports, raccordement des abonnés : les équipes GLE au travail sur l'un des lots d'électrification rurale confiés par l'ASER."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href="/realisations/electrification-rurale-reseaux-electriques" variant="primary">
                Voir le chantier
              </Cta>
              <Cta href="/contact" variant="ghostLight">
                Parler de votre projet
              </Cta>
            </div>
          </div>
          <VideoPlayer
            className="reveal"
            src="/videos/diourbel-electrification-2025.mp4"
            poster="/images/posters/diourbel-electrification-2025.jpg"
            captions="/videos/diourbel-electrification-2025.vtt"
            label="Chantier d'électrification rurale — région de Diourbel, 2025"
          />
        </div>
      </Section>

      {/* ------------------------------------------------------- médiathèque */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Médiathèque"
            title="Nos chantiers en images"
            intro="Plus de soixante photos et cinq vidéos tournées sur les chantiers d'éclairage public, de réseaux MT/BT et de mini-centrales solaires."
          />
          <Cta href="/mediatheque" variant="outline">
            Ouvrir la médiathèque
          </Cta>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { src: "/images/site/bourguiba-6.jpg", alt: "Nacelle sous le tablier de l'ouvrage d'art pour la pose des projecteurs LED" },
            { src: "/images/site/villages-10.jpg", alt: "Modules photovoltaïques d'une mini-centrale de village" },
            { src: "/images/site/rural-10.jpg", alt: "Tête de poteau moyenne tension équipée par GLE" },
            { src: "/images/site/soumbedioune-4.jpg", alt: "Techniciens GLE câblant une armoire TGBT" },
            { src: "/images/site/castor-4.jpg", alt: "Feux tricolores du carrefour Castor en service" },
            { src: "/images/site/bourguiba-4.jpg", alt: "Équipe GLE en équipement de protection sur le chantier" },
          ].map((photo) => (
            <Link
              key={photo.src}
              href="/mediatheque"
              className="group block overflow-hidden rounded-[8px] bg-navy-900"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------- partenaires */}
      <Section tone="alt">
        <SectionHead
          eyebrow="Clients & partenaires"
          title="Institutions, concessionnaires et industriels"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-20 items-center justify-center rounded-[8px] border border-line bg-white px-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------------- blog */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Blog"
            title="Comprendre l'énergie et les réseaux"
            intro="Nos ingénieurs partagent leur lecture des technologies, des normes et des pratiques de chantier."
          />
          <TextLink href="/blog">Tous les articles</TextLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="reveal group flex flex-col overflow-hidden rounded-[8px] border border-line"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow text-orange-700">{post.category}</p>
                <h3 className="mt-3 font-display text-base font-semibold text-navy-900">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-slate">{post.excerpt}</p>
                <p className="mt-5 text-xs text-slate">
                  {post.dateLabel} · {post.readingTime} de lecture
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------------- CTA */}
      <section className="bg-orange">
        <Container className="flex flex-col items-start gap-8 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-2xl text-xl font-bold text-navy-900">
              Un devis, un appel d'offres, une offre de fourniture ? Écrivez-nous.
            </h2>
            <p className="mt-3 text-sm font-medium text-navy-900/80">
              {company.hours} · {company.phone}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Cta href="/contact" variant="navy">
              Ouvrir le formulaire
            </Cta>
            <Cta
              href={`https://wa.me/${company.whatsapp}`}
              variant="outline"
              icon={false}
              className="border-navy-900/30 text-navy-900 hover:bg-navy-900/5"
            >
              WhatsApp {company.whatsappDisplay}
            </Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
