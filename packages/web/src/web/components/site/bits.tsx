import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ layout */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

type Tone = "paper" | "alt" | "navy" | "navy-deep";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  alt: "bg-paper-alt text-ink",
  navy: "bg-navy-700 text-white",
  "navy-deep": "bg-navy-900 text-white",
};

export function Section({
  children,
  tone = "paper",
  id,
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24", toneClass[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

/* -------------------------------------------------------------- typography */

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow text-orange-700", className)}>
      <span className="mr-2 inline-block h-[2px] w-6 translate-y-[-3px] bg-orange" />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <Eyebrow className={invert ? "text-orange" : undefined}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-xl font-semibold sm:text-2xl",
          invert ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "reading mt-5 text-base",
            invert ? "text-white/75" : "text-slate",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* ----------------------------------------------------------------- buttons */

const ctaBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold transition-colors duration-200";

const ctaVariants = {
  primary: "bg-orange text-navy-900 hover:bg-orange-700 hover:text-white",
  navy: "bg-navy text-white hover:bg-navy-900",
  outline: "border border-navy/25 text-navy-900 hover:border-navy hover:bg-navy/5",
  ghostLight: "border border-white/30 text-white hover:border-white hover:bg-white/10",
} as const;

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof ctaVariants;
  icon?: boolean;
  className?: string;
};

export function Cta({
  href,
  children,
  variant = "primary",
  icon = true,
  className,
}: CtaProps) {
  const classes = cn(ctaBase, ctaVariants[variant], className);
  const inner = (
    <>
      {children}
      {icon ? <ArrowRight className="size-4" /> : null}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {inner}
    </a>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy transition-colors hover:text-orange-700",
        className,
      )}
    >
      {children}
      <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

/* ------------------------------------------------------------------- heroes */

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-navy-900">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/40" />
      <Container className="relative py-16 sm:py-24">
        <div className="intro-stagger max-w-3xl">
          <Eyebrow className="text-orange">{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-2xl font-bold text-white sm:text-3xl">{title}</h1>
          {intro ? (
            <p className="reading mt-6 text-lg text-white/75">{intro}</p>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-line bg-paper-alt">
      <Container>
        <ol className="flex flex-wrap items-center gap-2 py-4 text-xs text-slate">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-navy">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink">{item.label}</span>
              )}
              {index < items.length - 1 ? (
                <ChevronRight className="size-3.5 text-slate/60" />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}

/* ------------------------------------------------------------------ content */

export function RichBody({
  sections,
}: {
  sections: { heading?: string; body?: string[]; bullets?: string[] }[];
}) {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <div key={section.heading ?? index}>
          {section.heading ? (
            <h2 className="text-lg font-semibold text-navy-900">
              {section.heading}
            </h2>
          ) : null}
          {section.body?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="reading mt-4 text-slate">
              {paragraph}
            </p>
          ))}
          {section.bullets ? (
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-ink">
                  <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-orange" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function VideoPlayer({
  src,
  poster,
  captions,
  label,
  className,
}: {
  src: string;
  poster: string;
  captions: string;
  label?: string;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-[8px] bg-navy-900", className)}>
      <video
        controls
        preload="metadata"
        poster={poster}
        playsInline
        className="block aspect-video w-full bg-navy-900 object-cover"
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" src={captions} srcLang="fr" label="Français" default />
        Votre navigateur ne prend pas en charge la lecture vidéo.
      </video>
      {label ? (
        <figcaption className="px-5 py-4 text-xs text-white/60">{label}</figcaption>
      ) : null}
    </figure>
  );
}

export function Stat({
  value,
  label,
  invert = false,
}: {
  value: string;
  label: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "border-l-2 pl-5",
        invert ? "border-orange" : "border-orange/70",
      )}
    >
      <p
        className={cn(
          "font-display text-xl font-bold sm:text-2xl",
          invert ? "text-white" : "text-navy-900",
        )}
      >
        {value}
      </p>
      <p className={cn("mt-1 text-sm", invert ? "text-white/65" : "text-slate")}>
        {label}
      </p>
    </div>
  );
}
