import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-xl text-ink">
          Mafalda <span className="text-terracotta">&</span> Thanos
        </div>
        <div className="text-xs tracking-[0.2em] uppercase">{t("footerNote")}</div>
        <a
          href="https://alexandrakisphotography.gr/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase hover:text-terracotta transition-colors"
        >
          alexandrakisphotography.gr →
        </a>
      </div>
    </footer>
  );
}
