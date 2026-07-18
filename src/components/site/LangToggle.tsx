import { useLang } from "@/hooks/use-language";

export function LangToggle() {
  const [lang, setLang] = useLang();
  return (
    <div className="inline-flex items-center gap-0 rounded-full border border-border bg-background/70 backdrop-blur-sm text-[11px] tracking-[0.2em] font-medium">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          lang === "en" ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("el")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          lang === "el" ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
        }`}
        aria-pressed={lang === "el"}
      >
        ΕΛ
      </button>
    </div>
  );
}
