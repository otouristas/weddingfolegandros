import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/hooks/use-language";
import { Section, SectionKicker, SectionTitle } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "Vendors — Mafalda & Thanos" },
      { name: "description", content: "DJ, flowers, hair & makeup, wedding planner, cake and catering for the Folegandros wedding." },
      { property: "og:title", content: "Vendors — Mafalda & Thanos" },
      { property: "og:url", content: "/vendors" },
    ],
    links: [{ rel: "canonical", href: "/vendors" }],
  }),
  component: VendorsPage,
});

function VendorsPage() {
  const [lang] = useLang();
  const en = lang === "en";

  return (
    <main className="bg-cream text-ink pt-24">
      <Section>
        <div className="max-w-3xl">
          <SectionKicker>{en ? "The team" : "Η ομάδα"}</SectionKicker>
          <SectionTitle>{en ? "Vendors & prices" : "Συνεργάτες & τιμές"}</SectionTitle>
        </div>
      </Section>

      <VendorBlock
        kicker={en ? "01 · Hair & Makeup" : "01 · Μακιγιάζ & Κόμμωση"}
        title="Katerina Sousi"
        rows={[{ l: en ? "Local artist — no travel or accommodation charge" : "Καλλιτέχνις από το νησί — χωρίς εισιτήρια & διαμονή", p: "—" }]}
      />

      <VendorBlock
        dark
        kicker={en ? "02 · DJ & Music" : "02 · DJ & Μουσική"}
        title={en ? "Sound of the night" : "Ο ήχος της νύχτας"}
        rows={[
          { l: "Menelaos Koumentakos", p: "€1,250" },
          { l: en ? "  + transport, accommodation & equipment" : "  + μεταφορά, διαμονή & εξοπλισμός", p: "€800", sub: true },
          { l: en ? "Giorgio Messirlis (until 15 Aug 2026)" : "Giorgio Messirlis (έως 15 Αυγ 2026)", p: "€1,850 + 24% VAT" },
          { l: en ? "Traditional live music" : "Παραδοσιακή ζωντανή μουσική", p: "€1,000" },
        ]}
      />

      <VendorBlock
        kicker={en ? "03 · Flowers & Decoration" : "03 · Λουλούδια & Στολισμός"}
        title={en ? "Olive · Lemon · Bougainvillea" : "Ελιά · Λεμόνι · Μπουκαμβίλια"}
        rows={[
          { l: en ? "Package range (church decoration optional)" : "Εύρος πακέτων (στολισμός εκκλησίας προαιρετικό)", p: "€1,500–4,000" },
        ]}
        note={en ? "Three signature packages inspired by the island — Olive, Lemon, Bougainvillea." : "Τρία πακέτα εμπνευσμένα από το νησί — Ελιά, Λεμόνι, Μπουκαμβίλια."}
      />

      <VendorBlock
        dark
        kicker={en ? "04 · Catering" : "04 · Catering"}
        title={en ? "The table" : "Το τραπέζι"}
        rows={[
          { l: en ? "Paliomilos Restaurant — see menu" : "Paliomilos Restaurant — δείτε μενού", p: en ? "from €55 / person" : "από €55 / άτομο" },
          { l: "Piatsa Taverna", p: "€55–100 / person" },
          { l: en ? "  + shared yard rental (Souvlaki Club)" : "  + ενοικίαση αυλής (Souvlaki Club)", p: "€2,000", sub: true },
          { l: en ? "Kritikos · Chic (May, June, September only)" : "Kritikos · Chic (Μάιος, Ιούνιος, Σεπτέμβριος)", p: "—" },
        ]}
      />

      <VendorBlock
        kicker={en ? "05 · Wedding Planner" : "05 · Wedding Planner"}
        title={en ? "Every detail, handled" : "Κάθε λεπτομέρεια, φροντισμένη"}
        rows={[
          { l: en ? "Up to 80 guests" : "Έως 80 καλεσμένους", p: "€2,000" },
          { l: en ? "Pre-wedding OR next-day shoot" : "Pre-wedding Ή next-day", p: "€500" },
          { l: en ? "Both pre-wedding + next-day" : "Και pre-wedding + next-day", p: "€1,000" },
        ]}
        note={en ? "Pre-wedding / next-day options: beach, Chora, Ano Meria." : "Επιλογές για pre-wedding / next-day: παραλία, Χώρα, Άνω Μεριά."}
      />

      <VendorBlock
        dark
        kicker={en ? "06 · Cake & Sweets" : "06 · Κέικ & Γλυκά"}
        title={en ? "Wedding cake & sweets" : "Γαμήλια τούρτα & γλυκά"}
        rows={[
          {
            l: en ? "Wedding cake" : "Γαμήλια τούρτα",
            p: "€200–500",
          },
          {
            l: en ? "Sweets" : "Γλυκά",
            p: en ? "€3–5 / person" : "€3–5 / άτομο",
          },
          {
            l: "Tolis Sweet and Eats",
            p: "—",
          },
          {
            l: en ? "Η Κανέλα — Folegandros" : "Η Κανέλα — Φολέγανδρος",
            p: "—",
          },
          {
            l: en ? "Παρασάγγας — Folegandros" : "Παρασάγγας — Φολέγανδρος",
            p: "—",
          },
        ]}
        note={
          en
            ? "Local partners on Folegandros. Cake and sweets priced separately depending on design and selection."
            : "Τοπικοί συνεργάτες στη Φολέγανδρο. Τούρτα και γλυκά χρεώνονται ξεχωριστά, ανάλογα με σχέδιο και επιλογές."
        }
      />

      <Footer />
    </main>
  );
}

function VendorBlock({
  kicker,
  title,
  rows,
  note,
  dark,
}: {
  kicker: string;
  title: string;
  rows: Array<{ l: string; p: string; sub?: boolean }>;
  note?: string;
  dark?: boolean;
}) {
  return (
    <Section className={dark ? "bg-ink text-cream" : ""}>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className={`kicker ${dark ? "!text-lemon" : ""}`}>{kicker}</div>
          <h2 className={`font-display text-4xl md:text-5xl mt-4 ${dark ? "text-cream" : "text-ink"}`}>{title}</h2>
          {note && <p className={`mt-4 text-sm font-light ${dark ? "text-cream/70" : "text-ink/70"}`}>{note}</p>}
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <ul className={`divide-y ${dark ? "divide-cream/15" : "divide-border"}`}>
            {rows.map((r, i) => (
              <li key={i} className={`py-4 flex items-baseline justify-between gap-4 ${r.sub ? "opacity-70 text-sm" : ""}`}>
                <span className={dark ? "text-cream/90" : "text-ink/85"}>{r.l}</span>
                <span className={`font-display text-xl whitespace-nowrap ${dark ? "text-lemon" : "text-terracotta"}`}>{r.p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
