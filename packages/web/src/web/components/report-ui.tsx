import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "orange",
}: {
  children: ReactNode;
  tone?: "orange" | "slate" | "light";
}) {
  const color =
    tone === "orange" ? "text-orange-700" : tone === "light" ? "text-orange" : "text-slate";
  return <p className={`eyebrow ${color}`}>{children}</p>;
}

export function SectionShell({
  id,
  num,
  title,
  intro,
  children,
  variant = "paper",
}: {
  id: string;
  num: string;
  title: string;
  intro?: string;
  children: ReactNode;
  variant?: "paper" | "alt" | "dark";
}) {
  const bg =
    variant === "alt" ? "bg-paper-alt" : variant === "dark" ? "bg-navy-900" : "bg-paper";
  const titleColor = variant === "dark" ? "text-white" : "text-navy-900";
  const introColor = variant === "dark" ? "text-white/70" : "text-slate";

  return (
    <section id={id} className={`${bg} scroll-mt-24 px-6 py-20 md:px-10 md:py-28`}>
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="reveal mb-12 md:mb-16">
          <div className="flex items-baseline gap-4 md:gap-6">
            <span className="font-display text-lg font-700 text-orange md:text-xl">{num}</span>
            <h2 className={`text-xl font-700 md:text-2xl ${titleColor}`}>{title}</h2>
          </div>
          {intro ? (
            <p className={`reading mt-6 text-lg md:pl-[3.75rem] ${introColor}`}>{intro}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Pill({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "impact" | "effort" | "critique" | "eleve" | "moyen";
}) {
  const styles: Record<string, string> = {
    impact: "bg-orange/15 text-orange-700",
    effort: "bg-slate/10 text-slate",
    critique: "bg-orange-700 text-white",
    eleve: "bg-orange/20 text-orange-700",
    moyen: "bg-slate/10 text-slate",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-500 ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

export function StatBlock({
  value,
  label,
  note,
  tone = "dark",
}: {
  value: string;
  label: string;
  note?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`border-t pt-5 ${tone === "light" ? "border-white/15" : "border-line"}`}
    >
      <p
        className={`font-display text-2xl font-700 ${tone === "light" ? "text-orange" : "text-navy"}`}
      >
        {value}
      </p>
      <p
        className={`eyebrow mt-2 ${tone === "light" ? "text-white/85" : "text-ink"}`}
      >
        {label}
      </p>
      {note ? (
        <p className={`mt-1 text-xs ${tone === "light" ? "text-white/50" : "text-slate"}`}>
          {note}
        </p>
      ) : null}
    </div>
  );
}
