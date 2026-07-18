import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { useLang } from "@/hooks/use-language";
import { Section, SectionKicker, SectionTitle } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";
import heroAsset from "@/assets/hero-table.png.asset.json";
import lemons from "@/assets/lemons.jpg";
import folegandros from "@/assets/folegandros.jpg";
import olive from "@/assets/olive.jpg";
import ceremony from "@/assets/ceremony.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mafalda & Thanos — Folegandros Wedding, 21 August 2027" },
      {
        name: "description",
        content:
          "A curated wedding proposal for a Cycladic celebration — photography, videography, vendors, travel and menu.",
      },
      { property: "og:title", content: "Mafalda & Thanos — Folegandros Wedding, 21 August 2027" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const t = useT();
  const [lang] = useLang();

  return (
    <main className="bg-cream text-ink">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Folegandros wedding table"
          className="absolute inset-0 h-full w-full object-cover"
          width={1200}
          height={2000}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-14 max-w-[1400px] mx-auto">
          <div className="text-cream">
            <div className="text-[11px] tracking-[0.35em] uppercase text-cream/90 mb-6">
              {t("heroKicker")}
            </div>
            <h1 className="font-display font-light text-6xl md:text-[9rem] leading-[0.95] tracking-tight">
              Mafalda
              <span className="italic font-normal text-lemon"> & </span>
              Thanos
            </h1>
            <div className="mt-6 max-w-xl text-lg md:text-xl text-cream/85 font-light">
              {t("heroSubtitle")}
            </div>
          </div>
        </div>
      </section>

      {/* LETTER */}
      <Section id="letter">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <SectionKicker>{t("letterKicker")}</SectionKicker>
            <SectionTitle>{t("letterTitle")}</SectionTitle>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed text-ink/85 font-light">
              {t("letterBody")}
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm tracking-[0.2em] uppercase text-terracotta">
              <span className="rule-x" />
              Folegandros · 21.08.2027
            </div>
          </div>
        </div>
      </Section>

      {/* PACKAGES */}
      <Section id="packages" className="bg-secondary/60">
        <div className="text-center max-w-2xl mx-auto">
          <SectionKicker>{t("packagesKicker")}</SectionKicker>
          <SectionTitle>{t("packagesTitle")}</SectionTitle>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <PackageCard
            name={t("pkg1Name")}
            price={t("pkg1Price")}
            sub={t("pkg1Sub")}
            items={[t("pkgIncl1"), t("pkgIncl2"), t("pkgIncl3"), t("pkgIncl4"), t("pkgIncl5")]}
          />
          <PackageCard
            featured
            name={t("pkg2Name")}
            price={t("pkg2Price")}
            sub={t("pkg2Sub")}
            items={[t("pkgIncl1"), t("pkgIncl2"), t("pkgIncl3"), t("pkgIncl4"), t("pkgIncl5"), t("pkgIncl6")]}
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://alexandrakisphotography.gr/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-terracotta hover:opacity-70 transition-opacity"
          >
            {t("portfolio")}
          </a>
        </div>
      </Section>

      {/* ISLAND */}
      <Section id="island">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 relative">
            <img
              src={folegandros}
              alt="Folegandros bougainvillea"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
              width={1600}
              height={1000}
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <SectionKicker>{t("islandKicker")}</SectionKicker>
            <SectionTitle>{t("islandTitle")}</SectionTitle>
            <p className="mt-6 text-lg leading-relaxed text-ink/85 font-light">
              {t("islandBody")}
            </p>
            <img
              src={olive}
              alt="Olive branch"
              className="mt-10 w-40 aspect-[4/5] object-cover"
              loading="lazy"
              width={1200}
              height={1500}
            />
          </div>
        </div>
      </Section>

      {/* TRAVEL */}
      <Section id="travel" className="bg-secondary/60">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionKicker>{t("travelKicker")}</SectionKicker>
            <SectionTitle>{t("travelTitle")}</SectionTitle>
            <p className="mt-6 text-sm text-terracotta tracking-wide">{t("travelNote")}</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-border">
              {[
                { name: "Dionisios Solomos", desc: lang === "en" ? "7 hours" : "7 ώρες", price: "€48" },
                { name: "Sea Jet", desc: lang === "en" ? "4.5 hours" : "4,5 ώρες", price: "€88" },
              ].map((r) => (
                <li key={r.name} className="py-5 flex items-baseline justify-between gap-4">
                  <div>
                    <div className="font-display text-2xl text-ink">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.desc}</div>
                  </div>
                  <div className="font-display text-2xl text-terracotta">{r.price}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* HOTELS */}
      <Section id="hotels">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <SectionKicker>{t("hotelsKicker")}</SectionKicker>
            <SectionTitle>{t("hotelsTitle")}</SectionTitle>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-sm text-muted-foreground tracking-wide">{t("hotelsNote")}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {[
            { name: "Anemomilos", note: t("hotelBrideNote") },
            { name: "Chora Resort" },
            { name: "Aria Boutique Hotel" },
            { name: "Marine" },
            { name: "Horizon" },
            { name: "Kifines Suites" },
            { name: "Avaton" },
            { name: "Eygenia Rooms" },
          ].map((h, i) => (
            <div key={h.name} className="border-t border-border pt-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-2xl mt-2 text-ink">{h.name}</div>
              {h.note && <div className="text-xs text-terracotta mt-2 leading-relaxed">{h.note}</div>}
            </div>
          ))}
        </div>
      </Section>

      {/* TRANSPORT */}
      <Section id="transport" className="bg-ink text-cream">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="kicker !text-lemon">{t("transportKicker")}</div>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-cream">{t("transportTitle")}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                { name: lang === "en" ? "Scooter" : "Scooter", price: "€30" },
                { name: "ATV", price: "€80" },
                { name: lang === "en" ? "Car" : "Αυτοκίνητο", price: "€50" },
                { name: "Van", price: "€30–40" },
                { name: lang === "en" ? "Donkey" : "Γαϊδουράκι", price: "€200" },
                { name: lang === "en" ? "Violin & Laouto" : "Βιολί & Λαούτο", price: "€400" },
              ].map((r) => (
                <li key={r.name} className="flex items-baseline justify-between border-b border-cream/15 pb-4">
                  <span className="text-cream/90">{r.name}</span>
                  <span className="font-display text-xl text-lemon">{r.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CEREMONY */}
      <Section id="ceremony">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <SectionKicker>{t("ceremonyKicker")}</SectionKicker>
            <SectionTitle>{t("ceremonyTitle")}</SectionTitle>
            <ul className="mt-8 space-y-4 text-ink/85">
              {[
                { l: lang === "en" ? "Church & priest" : "Εκκλησία & ιερέας", p: "€350" },
                { l: lang === "en" ? "Transport to St. Mary's" : "Μεταφορά προς Αγ. Μαρίας", p: "€250" },
                { l: lang === "en" ? "Chora village church" : "Εκκλησία Χώρας", p: lang === "en" ? "no charge" : "χωρίς χρέωση" },
                { l: lang === "en" ? "Guest transport (ATV)" : "Μεταφορά καλεσμένων (ATV)", p: lang === "en" ? "€30 / guest" : "€30 / άτομο" },
                { l: lang === "en" ? "Wine, water, soft drinks & pasteli" : "Κρασί, νερό, αναψυκτικά & παστέλι", p: "€300–1250" },
              ].map((r) => (
                <li key={r.l} className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <span>{r.l}</span>
                  <span className="font-display text-lg text-terracotta whitespace-nowrap">{r.p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <img
              src={ceremony}
              alt="Ceremony setup"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={1600}
              height={1000}
            />
          </div>
        </div>
      </Section>

      {/* CTA STRIP */}
      <Section className="bg-terracotta text-cream">
        <div className="text-center max-w-2xl mx-auto">
          <div className="kicker !text-cream/70">{t("planKicker")}</div>
          <h2 className="font-display text-4xl md:text-6xl mt-4">{t("planTitle")}</h2>
          <p className="mt-6 text-cream/90 text-lg font-light">{t("planBody")}</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              to="/vendors"
              className="rounded-full bg-cream text-ink px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-lemon transition-colors"
            >
              {t("navVendors")}
            </Link>
            <Link
              to="/menu"
              className="rounded-full border border-cream/60 text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-cream/10 transition-colors"
            >
              {t("navMenu")}
            </Link>
            <Link
              to="/logistics"
              className="rounded-full border border-cream/60 text-cream px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-cream/10 transition-colors"
            >
              {t("navLogistics")}
            </Link>
          </div>
        </div>
      </Section>

      {/* LEMON FOOTER BAND */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={lemons}
          alt="Lemons"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="font-display italic text-cream text-4xl md:text-6xl text-center px-6">
            "καλῶς ἤλθατε"
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function PackageCard({
  name,
  price,
  sub,
  items,
  featured,
}: {
  name: string;
  price: string;
  sub: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`p-8 md:p-12 border ${
        featured ? "bg-ink text-cream border-ink" : "bg-cream text-ink border-border"
      }`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className={`kicker ${featured ? "!text-lemon" : ""}`}>{sub}</div>
          <h3 className={`font-display text-3xl md:text-4xl mt-3 ${featured ? "text-cream" : "text-ink"}`}>
            {name}
          </h3>
        </div>
        <div className={`font-display text-4xl md:text-5xl ${featured ? "text-lemon" : "text-terracotta"}`}>
          {price}
        </div>
      </div>
      <ul className={`mt-8 space-y-3 text-sm ${featured ? "text-cream/85" : "text-ink/85"}`}>
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className={`mt-2 h-px w-4 shrink-0 ${featured ? "bg-lemon" : "bg-terracotta"}`} />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
