import type { ReactNode } from "react";

export function SectionKicker({ children }: { children: ReactNode }) {
  return <div className="kicker">{children}</div>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4 text-ink">{children}</h2>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">{children}</div>
    </section>
  );
}
