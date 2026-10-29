import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-xl text-ink">
          Rafaela <span className="text-terracotta">&</span> Paraskevas
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
    
      <p data-asg-copyright="notice" style={{ maxWidth: "80rem", margin: "1rem auto 0", padding: "0 1rem 1rem", fontSize: "0.75rem", lineHeight: 1.6 }}>
        <a href="/intellectual-property.html" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "0.2em" }}>Code &amp; development: AnotherSEOGuru, a company of Touristas Technologies. Copyright &amp; permitted use.</a>
      </p>
    </footer>
  );
}
