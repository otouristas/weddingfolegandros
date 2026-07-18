import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useLang } from "@/hooks/use-language";
import { Section, SectionKicker, SectionTitle } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";
import { galleryPhotos, GALLERY_CREDIT } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mafalda & Thanos" },
      { name: "description", content: "Folegandros island gallery — landscapes, beaches and village moments." },
      { property: "og:title", content: "Gallery — Mafalda & Thanos" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [lang] = useLang();
  const en = lang === "en";
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % galleryPhotos.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + galleryPhotos.length) % galleryPhotos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <main className="bg-cream text-ink pt-24">
      <Section>
        <div className="max-w-3xl">
          <SectionKicker>{en ? "The island" : "Το νησί"}</SectionKicker>
          <SectionTitle>{en ? "Folegandros gallery" : "Γκαλερί Φολεγάνδρου"}</SectionTitle>
          <p className="mt-6 text-lg text-ink/85 leading-relaxed font-light">
            {en
              ? "Landscapes, beaches and village light — a sense of the island before the day."
              : "Τοπία, παραλίες και φως του χωριού — μια αίσθηση του νησιού πριν την ημέρα."}
          </p>
          <p className="mt-4 text-sm text-ink/60 font-light">
            {en ? "Photos © " : "Φωτογραφίες © "}
            <a
              href={GALLERY_CREDIT.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:opacity-70 transition-opacity"
            >
              {GALLERY_CREDIT.name}
            </a>
            {en ? " · used with permission." : " · χρήση με άδεια."}
          </p>
        </div>

        <div className="mt-16 columns-2 md:columns-3 gap-4">
          {galleryPhotos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setActive(i)}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden text-left"
            >
              <img
                src={p.src}
                alt={p.caption[lang]}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <span className="mt-2 block text-xs tracking-[0.2em] uppercase text-ink/50">
                {p.caption[lang]}
              </span>
            </button>
          ))}
        </div>
      </Section>

      {active !== null && galleryPhotos[active] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 md:p-10"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={en ? "Photo viewer" : "Προβολή φωτογραφίας"}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 md:right-8 md:top-8 text-cream/80 hover:text-cream transition-colors"
            aria-label={en ? "Close" : "Κλείσιμο"}
          >
            <X className="h-7 w-7" />
          </button>
          <figure
            className="max-h-[90vh] max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryPhotos[active].src}
              alt={galleryPhotos[active].caption[lang]}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 text-sm tracking-[0.2em] uppercase text-cream/70">
              {galleryPhotos[active].caption[lang]}
            </figcaption>
          </figure>
        </div>
      )}

      <Footer />
    </main>
  );
}
