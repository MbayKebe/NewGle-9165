import { Link, useParams } from "wouter";
import { Sun, Wind, Leaf, Plug, Package, Check } from "lucide-react";
import { company, services, projects } from "@/lib/site-data";
import { useReveal } from "@/hooks/use-reveal";
import { useSeo } from "@/lib/seo";
import NotFound from "./not-found";
import {
  Breadcrumb,
  Container,
  Cta,
  PageHero,
  Section,
  SectionHead,
  TextLink,
} from "@/components/site/bits";

const serviceIcons = { sun: Sun, wind: Wind, leaf: Leaf, plug: Plug, package: Package };

/* ------------------------------------------------------------------- liste */

export default function Services() {
  useReveal();
  useSeo({
    title: "Nos services — solaire, éolien, biomasse et réseaux MT/BT | GLE",
    description:
      "Global Engineering SARL : installation de centrales solaires photovoltaïques, éolien, biomasse, réseaux électriques MT/BT, éclairage public et fourniture d'équipements solaires au Sénégal.",
    image: "/images/site/villages-2.jpg",
  });

  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Produire, distribuer et éclairer — partout au Sénégal"
        intro="GLE intervient sur toute la chaîne technique : études, fournitures, travaux, mise en service et maintenance. Cinq expertises complémentaires, une même exigence de conformité."
        image="/images/site/villages-2.jpg"
        imageAlt="Rangées de panneaux solaires photovoltaïques installées par GLE"
      />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />

      <Section tone="paper">
        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article
                key={service.slug}
                className={`reveal grid items-stretch gap-0 overflow-hidden rounded-[8px] border border-line md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>figure]:order-last" : ""
                }`}
              >
                <figure className="relative min-h-[240px]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 size-full object-cover"
                  />
                </figure>
                <div className="p-8 sm:p-10">
                  <span className="inline-flex size-11 items-center justify-center rounded-[8px] bg-navy/8 text-navy">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-semibold text-navy-900">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-sm text-slate">{service.short}</p>
                  {service.bullets ? (
                    <ul className="mt-5 space-y-2">
                      {service.bullets.slice(0, 3).map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-sm text-ink">
                          <Check className="mt-1 size-4 shrink-0 text-orange-700" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <TextLink href={`/services/${service.slug}`} className="mt-7">
                    Détail du service
                  </TextLink>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="navy-deep">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            invert
            eyebrow="Passer à l'action"
            title="Décrivez votre besoin, nous chiffrons"
            intro={`Bureau d'études à Dakar — ${company.address}. Réponse aux consultations dans les délais de l'appel d'offres.`}
          />
          <div className="flex flex-wrap gap-3">
            <Cta href="/contact">Demander un devis</Cta>
            <Cta href="/realisations" variant="ghostLight">
              Voir les réalisations
            </Cta>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ détail */

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((item) => item.slug === slug);
  useReveal();
  useSeo({
    title: service
      ? `${service.name} — Global Engineering SARL`
      : "Service introuvable | GLE",
    description: service?.short ?? "Service introuvable",
    image: service?.image,
  });

  if (!service) return <NotFound />;

  const Icon = serviceIcons[service.icon];
  const related = projects.filter((project) =>
    service.slug === "solaire-photovoltaique" || service.slug === "fournitures-solaires"
      ? project.category === "Solaire photovoltaïque"
      : service.slug === "electricite-reseaux"
        ? project.category !== "Solaire photovoltaïque"
        : false,
  );

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.name}
        intro={service.short}
        image={service.image}
        imageAlt={service.name}
      />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <span className="inline-flex size-12 items-center justify-center rounded-[8px] bg-navy/8 text-navy">
              <Icon className="size-6" />
            </span>
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="reading mt-6 text-slate">
                {paragraph}
              </p>
            ))}

            {service.bullets ? (
              <div className="mt-10 rounded-[8px] border border-line bg-paper-alt p-7">
                <p className="eyebrow text-orange-700">Ce que nous réalisons</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-ink">
                      <Check className="mt-1 size-4 shrink-0 text-orange-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {related.length > 0 ? (
              <div className="mt-14">
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  Réalisations liées
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {related.slice(0, 4).map((project) => (
                    <Link
                      key={project.slug}
                      href={`/realisations/${project.slug}`}
                      className="group overflow-hidden rounded-[8px] border border-line"
                    >
                      <img
                        src={project.images[0]?.src}
                        alt={project.images[0]?.alt ?? project.title}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="p-5">
                        <p className="eyebrow text-orange-700">{project.category}</p>
                        <h3 className="mt-2 font-display text-sm font-semibold text-navy-900">
                          {project.shortTitle}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="h-fit rounded-[8px] bg-navy-900 p-7 text-white lg:sticky lg:top-28">
            <p className="eyebrow text-orange">Devis</p>
            <p className="mt-4 text-sm text-white/75">
              Envoyez-nous vos plans, votre cahier des charges ou simplement votre
              besoin : nous revenons avec une proposition technique et financière.
            </p>
            <Cta href="/contact" className="mt-6 w-full">
              Demander un devis
            </Cta>
            <div className="mt-7 space-y-2 border-t border-white/10 pt-6 text-xs text-white/60">
              <p>{company.phone}</p>
              <p>{company.email}</p>
              <p>{company.hours}</p>
            </div>
          </aside>
        </div>
      </Section>

      <div className="border-t border-line bg-paper-alt">
        <Container className="flex flex-wrap gap-3 py-8">
          {services
            .filter((item) => item.slug !== service.slug)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-colors hover:border-navy hover:text-navy"
              >
                {item.name}
              </Link>
            ))}
        </Container>
      </div>
    </>
  );
}
