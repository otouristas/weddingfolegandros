import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useLang } from "@/hooks/use-language";
import { Section, SectionKicker, SectionTitle } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-table.png";
import ceremony from "@/assets/ceremony.jpg";
import folegandros from "@/assets/folegandros.jpg";
import lemons from "@/assets/lemons.jpg";

export const Route = createFileRoute("/rafaela-giannis")({
  head: () => ({
    meta: [
      { title: "Rafaela & Giannis — Folegandros Wedding Offer" },
      {
        name: "description",
        content: "A bilingual wedding proposal for Rafaela and Giannis in Folegandros on 2 October 2027.",
      },
      { property: "og:title", content: "Rafaela & Giannis — Folegandros 2027" },
      {
        property: "og:description",
        content: "A curated wedding offer for 80 guests in Folegandros, with ceremony, reception and celebration details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/rafaela-giannis" }],
  }),
  component: RafaelaGiannisPage,
});

type OfferRow = {
  en: string;
  el: string;
  price: string;
  noteEn?: string;
  noteEl?: string;
};

const reception: OfferRow[] = [
  { en: "Paliomilos wedding menu", el: "Γαμήλιο μενού Παλαιόμυλος", price: "€55–100 / person", noteEn: "Indicative range", noteEl: "Ενδεικτικό εύρος" },
  { en: "Open bar", el: "Open bar", price: "€40 / person", noteEn: "3 cocktails of choice, soft drinks and water; wine excluded", noteEl: "3 κοκτέιλ επιλογής, αναψυκτικά και νερό· χωρίς κρασί" },
  { en: "Wedding cake", el: "Γαμήλια τούρτα", price: "€200–500" },
  { en: "Sweets", el: "Γλυκά", price: "€3–5 / person" },
];

const celebration: OfferRow[] = [
  { en: "DJ", el: "DJ", price: "€1,000" },
  { en: "Sound equipment", el: "Ηχητικός εξοπλισμός", price: "€500" },
  { en: "Lighting", el: "Φωτισμός", price: "from €150", noteEn: "Final setup depends on the venue", noteEl: "Η τελική διαμόρφωση εξαρτάται από τον χώρο" },
  { en: "Church music accompaniment", el: "Μουσική συνοδεία στην εκκλησία", price: "€400" },
];

const planning: OfferRow[] = [
  { en: "Wedding planner", el: "Wedding planner", price: "€2,500" },
  { en: "Photography & videography", el: "Φωτογραφία & βιντεογράφηση", price: "€3,000–4,500", noteEn: "Previous package estimate retained", noteEl: "Διατηρείται η προηγούμενη εκτίμηση πακέτου" },
  { en: "Flowers & decoration", el: "Λουλούδια & στολισμός", price: "€1,500–4,000", noteEn: "Previous estimate retained", noteEl: "Διατηρείται η προηγούμενη εκτίμηση" },
  { en: "Stay for 80 guests", el: "Διαμονή για 80 άτομα", price: "€90–400 / room", noteEn: "Nightly estimate; room mix to be confirmed", noteEl: "Εκτίμηση ανά βράδυ· η κατανομή δωματίων θα οριστικοποιηθεί" },
];

const logistics: OfferRow[] = [
  { en: "Church & priest", el: "Εκκλησία & ιερέας", price: "€350" },
  { en: "Welcome drinks at the church", el: "Welcome drinks στην εκκλησία", price: "€1,200", noteEn: "Aperol and homemade lemonade", noteEl: "Aperol και σπιτική λεμονάδα" },
  { en: "Car rental", el: "Ενοικίαση αυτοκινήτου", price: "€50 / day" },
  { en: "Guest transfer", el: "Μεταφορά καλεσμένων", price: "€30–40 / van" },
];

function RafaelaGiannisPage() {
  const [lang] = useLang();
  const en = lang === "en";

  return (
    <main className="bg-cream text-ink">
      <section className="relative min-h-[680px] h-[92svh] max-h-[980px] overflow-hidden">
        <img src={hero} alt="Wedding table with lemons and olive branches" className="absolute inset-0 h-full w-full scale-125 object-cover object-center md:scale-100" width={883} height={1920} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/10 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.28em] text-cream/90">
            {en ? "Folegandros · 2 October 2027" : "Φολέγανδρος · 2 Οκτωβρίου 2027"}
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-6xl font-light leading-none text-cream md:text-8xl lg:text-9xl">
            Rafaela <span className="italic text-lemon">&</span> Giannis
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-cream/90 md:text-xl">
            {en
              ? "A warm Cycladic celebration, thoughtfully planned from the first welcome drink to the last song."
              : "Μια ζεστή κυκλαδίτικη γιορτή, σχεδιασμένη με φροντίδα από το πρώτο welcome drink μέχρι το τελευταίο τραγούδι."}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionKicker>{en ? "The proposal" : "Η πρόταση"}</SectionKicker>
            <SectionTitle>{en ? "One island, one unforgettable day" : "Ένα νησί, μία αξέχαστη μέρα"}</SectionTitle>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg font-light leading-relaxed text-ink/80">
              {en
                ? "This proposal brings together the essential services for an approximately 80-guest wedding in Folegandros. Confirmed figures from the latest briefing are shown alongside retained estimates, creating a clear starting point for final planning."
                : "Η πρόταση συγκεντρώνει τις βασικές υπηρεσίες για έναν γάμο περίπου 80 ατόμων στη Φολέγανδρο. Οι επιβεβαιωμένες τιμές της τελευταίας ενημέρωσης παρουσιάζονται μαζί με τις προηγούμενες εκτιμήσεις, ως καθαρή βάση για τον τελικό σχεδιασμό."}
            </p>
            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-terracotta">
              <span className="rule-x" /> 80 {en ? "guests" : "καλεσμένοι"}
            </div>
          </div>
        </div>
      </Section>

      <OfferBand
        kicker={en ? "01 · Reception" : "01 · Δεξίωση"}
        title={en ? "Dinner & drinks" : "Δείπνο & ποτά"}
        rows={reception}
        en={en}
      />

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={ceremony} alt="Cycladic wedding ceremony" className="aspect-[4/5] w-full object-cover" loading="lazy" width={1600} height={1000} />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SectionKicker>{en ? "02 · Ceremony" : "02 · Τελετή"}</SectionKicker>
            <SectionTitle>{en ? "A beautiful welcome" : "Ένα όμορφο καλωσόρισμα"}</SectionTitle>
            <div className="mt-10">
              <OfferList rows={logistics.slice(0, 2)} en={en} />
            </div>
          </div>
        </div>
      </Section>

      <OfferBand
        dark
        kicker={en ? "03 · Celebration" : "03 · Γιορτή"}
        title={en ? "Music, sound & light" : "Μουσική, ήχος & φως"}
        rows={celebration}
        en={en}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionKicker>{en ? "04 · Planning" : "04 · Οργάνωση"}</SectionKicker>
            <SectionTitle>{en ? "The team around you" : "Η ομάδα δίπλα σας"}</SectionTitle>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {en ? "Items without a new confirmed quote retain the relevant estimate from the original proposal." : "Όπου δεν υπάρχει νέα επιβεβαιωμένη προσφορά, διατηρείται η σχετική εκτίμηση της αρχικής πρότασης."}
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <OfferList rows={planning} en={en} />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/60">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <img src={folegandros} alt="Folegandros village" className="aspect-[4/3] w-full object-cover" loading="lazy" width={1600} height={1000} />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <SectionKicker>{en ? "05 · Stay & movement" : "05 · Διαμονή & μετακινήσεις"}</SectionKicker>
            <SectionTitle>{en ? "Around Folegandros" : "Στη Φολέγανδρο"}</SectionTitle>
            <div className="mt-10">
              <OfferList rows={[planning[3], ...logistics.slice(2)]} en={en} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-terracotta text-cream">
        <div className="mx-auto max-w-3xl text-center">
          <div className="kicker !text-cream/70">{en ? "Next steps" : "Επόμενα βήματα"}</div>
          <h2 className="mt-4 font-display text-5xl leading-tight md:text-7xl">
            {en ? "Let’s shape every detail" : "Ας σχεδιάσουμε κάθε λεπτομέρεια"}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-cream/90">
            {en ? "Final quotes for flowers, accommodation, transfers and the selected photography package will complete the proposal." : "Οι τελικές προσφορές για λουλούδια, διαμονή, μεταφορές και το επιλεγμένο φωτογραφικό πακέτο θα ολοκληρώσουν την πρόταση."}
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-9">
            <a href="https://alexandrakisphotography.gr/en/" target="_blank" rel="noopener noreferrer">
              {en ? "View photography" : "Δείτε τη φωτογραφία"} <ArrowRight />
            </a>
          </Button>
        </div>
      </Section>

      <div className="relative h-72 overflow-hidden">
        <img src={lemons} alt="Mediterranean lemons" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
      </div>

      <footer className="border-t border-border bg-cream">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 px-6 py-12 text-center md:flex-row md:px-10 md:text-left">
          <div className="font-display text-2xl">Rafaela <span className="text-terracotta">&</span> Giannis</div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Folegandros · 02.10.2027</div>
        </div>
      </footer>
    </main>
  );
}

function OfferBand({ kicker, title, rows, en, dark = false }: { kicker: string; title: string; rows: OfferRow[]; en: boolean; dark?: boolean }) {
  return (
    <Section className={dark ? "bg-ink text-cream" : "bg-secondary/60"}>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className={`kicker ${dark ? "!text-lemon" : ""}`}>{kicker}</div>
          <h2 className={`mt-4 font-display text-4xl leading-tight md:text-6xl ${dark ? "text-cream" : "text-ink"}`}>{title}</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <OfferList rows={rows} en={en} dark={dark} />
        </div>
      </div>
    </Section>
  );
}

function OfferList({ rows, en, dark = false }: { rows: OfferRow[]; en: boolean; dark?: boolean }) {
  return (
    <ul className={`divide-y ${dark ? "divide-cream/15" : "divide-border"}`}>
      {rows.map((row) => (
        <li key={row.en} className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-1 py-5">
          <div className={`flex gap-3 ${dark ? "text-cream/90" : "text-ink/90"}`}>
            <Check className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-lemon" : "text-terracotta"}`} />
            <span>{en ? row.en : row.el}</span>
          </div>
          <span className={`font-display text-xl whitespace-nowrap ${dark ? "text-lemon" : "text-terracotta"}`}>{row.price}</span>
          {(row.noteEn || row.noteEl) && (
            <p className={`col-start-1 pl-7 text-xs leading-relaxed ${dark ? "text-cream/60" : "text-muted-foreground"}`}>
              {en ? row.noteEn : row.noteEl}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}