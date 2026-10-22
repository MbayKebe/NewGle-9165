import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { company, navigation, offices, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Container } from "./bits";

const whatsappHref = `https://wa.me/${company.whatsapp}`;

/* ------------------------------------------------------------------- header */

function TopBar() {
  return (
    <div className="hidden bg-navy-900 text-white lg:block">
      <Container className="flex items-center justify-between py-2.5 text-xs">
        <div className="flex items-center gap-6 text-white/70">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-orange" />
            {company.address}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="size-3.5 text-orange" />
            {company.hours}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 text-white/80 hover:text-orange"
          >
            <Phone className="size-3.5" />
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-orange"
          >
            <Mail className="size-3.5" />
            {company.email}
          </a>
        </div>
      </Container>
    </div>
  );
}

function NavLinks({
  onNavigate,
  className,
  linkClassName,
}: {
  onNavigate?: () => void;
  className?: string;
  linkClassName?: string;
}) {
  const [location] = useLocation();
  return (
    <ul className={className}>
      {navigation.map((item) => {
        const active =
          item.href === "/"
            ? location === "/"
            : location.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "relative whitespace-nowrap font-display text-sm font-semibold transition-colors",
                active ? "text-navy" : "text-ink hover:text-navy",
                linkClassName,
              )}
            >
              {item.label}
              {active ? (
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-orange" />
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-shadow",
          scrolled ? "border-line shadow-[0_6px_24px_-18px_rgba(14,26,51,0.5)]" : "border-transparent",
        )}
      >
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/images/logo-gle.png"
              alt="Global Engineering SARL"
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <NavLinks className="flex items-center gap-5 xl:gap-7" />
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden whitespace-nowrap rounded-full bg-orange px-5 py-2.5 font-display text-sm font-semibold text-navy-900 transition-colors hover:bg-orange-700 hover:text-white sm:inline-flex"
            >
              Demander un devis
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="inline-flex size-10 items-center justify-center rounded-full border border-line text-navy-900 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>

        {open ? (
          <div className="border-t border-line bg-paper lg:hidden">
            <Container className="py-5">
              <nav aria-label="Navigation mobile">
                <NavLinks
                  onNavigate={() => setOpen(false)}
                  className="flex flex-col gap-4"
                  linkClassName="text-base"
                />
              </nav>
              <div className="mt-6 flex flex-col gap-3 border-t border-line pt-5 text-sm">
                <a href={company.phoneHref} className="inline-flex items-center gap-2 text-slate">
                  <Phone className="size-4 text-orange" />
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 text-slate"
                >
                  <Mail className="size-4 text-orange" />
                  {company.email}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex justify-center rounded-full bg-orange px-5 py-3 font-display text-sm font-semibold text-navy-900"
                >
                  Demander un devis
                </Link>
              </div>
            </Container>
          </div>
        ) : null}
      </header>
    </>
  );
}

/* ------------------------------------------------------------------- footer */

function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img
            src="/images/logo-gle.png"
            alt="Global Engineering SARL"
            className="h-14 w-auto rounded-[6px] bg-white px-3 py-2"
          />
          <p className="mt-5 max-w-sm text-sm text-white/65">
            {company.legalName} — {company.tagline}. Entreprise sénégalaise créée en{" "}
            {company.founded.toLowerCase()}, intervenant sur l'ensemble du territoire
            national.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-orange hover:text-orange"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-orange hover:text-orange"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-orange hover:text-orange"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-orange">Navigation</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-orange">Nos métiers</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-orange">Nos implantations</p>
          <ul className="mt-5 space-y-5 text-sm text-white/70">
            {offices.map((office) => (
              <li key={office.id}>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  {office.kind} — {office.country}
                </p>
                <p className="mt-2 flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-orange" />
                  <span>{office.address}</span>
                </p>
                <p className="mt-2 flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-orange" />
                  <a href={office.phoneHref} className="hover:text-white">
                    {office.phone}
                  </a>
                </p>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-8 text-orange">Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-orange" />
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp {company.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-orange" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-orange" />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Tous droits réservés. Capital{" "}
            {company.capital}.
          </p>
          <Link href="/audit" className="hover:text-white/80">
            Audit du site — rapport interne
          </Link>
        </Container>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- whatsapp */

function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Écrire à GLE sur WhatsApp au ${company.whatsappDisplay}`}
      className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-display text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-transform hover:scale-[1.03]"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

/* ------------------------------------------------------------------ layout */

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
