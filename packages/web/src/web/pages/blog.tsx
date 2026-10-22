import { Link, useParams } from "wouter";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { posts } from "@/lib/site-data";
import { useReveal } from "@/hooks/use-reveal";
import { useSeo, useJsonLd } from "@/lib/seo";
import NotFound from "./not-found";
import {
  Breadcrumb,
  Container,
  Cta,
  PageHero,
  RichBody,
  Section,
  SectionHead,
} from "@/components/site/bits";

/* ------------------------------------------------------------------- liste */

export default function Blog() {
  useReveal();
  useSeo({
    title: "Blog — énergies renouvelables et réseaux électriques | GLE",
    description:
      "Articles de Global Engineering SARL sur l'énergie solaire photovoltaïque, l'électrification en Afrique, les innovations énergétiques et les techniques d'extension de réseau basse tension.",
    image: posts[0]?.image,
  });

  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Énergie, réseaux et pratiques de chantier"
        intro="Nos ingénieurs décryptent les technologies, les normes et les retours d'expérience des projets menés au Sénégal."
        image="/images/site/blog-innovations.jpg"
        imageAlt="Installation d'équipements énergétiques par les équipes GLE"
      />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog" }]} />

      <Section tone="paper">
        {lead ? (
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid overflow-hidden rounded-[8px] border border-line md:grid-cols-2"
          >
            <div className="relative min-h-[260px]">
              <img
                src={lead.image}
                alt={lead.imageAlt}
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-8 sm:p-10">
              <p className="eyebrow text-orange-700">{lead.category}</p>
              <h2 className="mt-4 font-display text-lg font-semibold text-navy-900 sm:text-xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-sm text-slate">{lead.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-slate">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-orange-700" />
                  {lead.dateLabel}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5 text-orange-700" />
                  {lead.readingTime} de lecture
                </span>
              </div>
            </div>
          </Link>
        ) : null}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="reveal group flex flex-col overflow-hidden rounded-[8px] border border-line"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow text-orange-700">{post.category}</p>
                <h2 className="mt-3 font-display text-base font-semibold text-navy-900">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-slate">{post.excerpt}</p>
                <p className="mt-5 text-xs text-slate">
                  {post.dateLabel} · {post.readingTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Besoin d'un conseil ?"
            title="Nos ingénieurs répondent à vos questions techniques"
          />
          <Cta href="/contact">Poser une question</Cta>
        </div>
      </Section>
    </>
  );
}

/* ------------------------------------------------------------------ détail */

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const index = posts.findIndex((post) => post.slug === slug);
  const post = index >= 0 ? posts[index] : undefined;
  useReveal();
  useSeo({
    title: post ? `${post.title} — Blog GLE` : "Article introuvable | GLE",
    description: post?.excerpt ?? "Article introuvable",
    image: post?.image,
  });
  useJsonLd(
    post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          description: post.excerpt,
          image: post.image,
          author: { "@type": "Organization", name: "Global Engineering SARL" },
          publisher: { "@type": "Organization", name: "Global Engineering SARL" },
        }
      : {},
    "jsonld-post",
  );

  if (!post) return <NotFound />;

  const others = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <article>
        <Container className="max-w-[880px] py-14">
          <p className="eyebrow text-orange-700">{post.category}</p>
          <h1 className="mt-5 text-xl font-bold text-navy-900 sm:text-2xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-slate">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-orange-700" />
              {post.dateLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5 text-orange-700" />
              {post.readingTime} de lecture
            </span>
          </div>
          <img
            src={post.image}
            alt={post.imageAlt}
            className="mt-9 aspect-[16/9] w-full rounded-[8px] object-cover"
          />
          <p className="reading mt-9 text-lg text-ink">{post.excerpt}</p>
          <div className="mt-10">
            <RichBody sections={post.sections} />
          </div>

          {post.gallery?.length ? (
            <figure className="mt-14">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {post.gallery.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-[8px] object-cover"
                  />
                ))}
              </div>
              {post.galleryTitle ? (
                <figcaption className="mt-4 text-xs text-slate">
                  {post.galleryTitle}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className="mt-14 rounded-[8px] bg-navy-900 p-8 text-white">
            <p className="eyebrow text-orange">Global Engineering SARL</p>
            <p className="mt-4 max-w-2xl text-sm text-white/75">
              Vous avez un projet solaire, un réseau à construire ou un éclairage à
              rénover ? Nos équipes étudient votre besoin et vous proposent une
              solution chiffrée.
            </p>
            <Cta href="/contact" className="mt-6 w-fit">
              Demander un devis
            </Cta>
          </div>
        </Container>
      </article>

      <Section tone="alt">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="À lire aussi" title="Autres articles" />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-navy hover:text-orange-700"
          >
            <ArrowLeft className="size-4" />
            Tous les articles
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="group overflow-hidden rounded-[8px] border border-line bg-white"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="p-5">
                <p className="eyebrow text-orange-700">{item.category}</p>
                <h3 className="mt-2 font-display text-sm font-semibold text-navy-900">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
