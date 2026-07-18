import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/hooks/use-language";
import { Section, SectionKicker, SectionTitle } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";
import folegandros from "@/assets/folegandros.jpg";

export const Route = createFileRoute("/logistics")({
  head: () => ({
    meta: [
      { title: "Travel & Stay — Mafalda & Thanos" },
      { name: "description", content: "Boat tickets, hotels, on-island transportation and boat tour for the Folegandros wedding." },
      { property: "og:title", content: "Travel & Stay — Mafalda & Thanos" },
      { property: "og:url", content: "/logistics" },
    ],
    links: [{ rel: "canonical", href: "/logistics" }],
  }),
  component: LogisticsPage,
});

function LogisticsPage() {
  const [lang] = useLang();
  const en = lang === "en";

  return (
    <main className="bg-cream text-ink pt-24">
      <Section>
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-6">
            <SectionKicker>{en ? "Getting to Folegandros" : "Πώς φτάνετε στη Φολέγανδρο"}</SectionKicker>
            <SectionTitle>{en ? "Travel & Stay" : "Ταξίδι & Διαμονή"}</SectionTitle>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <img src={folegandros} alt="Folegandros" className="w-full aspect-[3/2] object-cover" loading="lazy" width={1600} height={1000} />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/60">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="kicker">{en ? "Boat tickets" : "Εισιτήρια πλοίων"}</div>
            <h2 className="font-display text-4xl mt-4">{en ? "Ferry options" : "Ακτοπλοϊκά"}</h2>
            <p className="mt-4 text-sm text-terracotta">
              {en ? "20–30% discount via Folegandros Travel" : "20–30% έκπτωση μέσω Folegandros Travel"}
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-border">
              {[
                { n: "Dionisios Solomos", d: en ? "7 hours" : "7 ώρες", p: "€48" },
                { n: "Sea Jet", d: en ? "4.5 hours" : "4,5 ώρες", p: "€88" },
              ].map((r) => (
                <li key={r.n} className="py-5 flex items-baseline justify-between">
                  <div>
                    <div className="font-display text-2xl">{r.n}</div>
                    <div className="text-sm text-muted-foreground">{r.d}</div>
                  </div>
                  <div className="font-display text-2xl text-terracotta">{r.p}</div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              {en ? "Prices range €48–€90 per person depending on the operator." : "Εύρος τιμών €48–€90 ανά άτομο, ανάλογα με την εταιρεία."}
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <SectionKicker>{en ? "Where to stay" : "Πού θα μείνετε"}</SectionKicker>
            <SectionTitle>{en ? "Hotel suggestions" : "Προτάσεις ξενοδοχείων"}</SectionTitle>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-sm text-muted-foreground">
              {en ? "Prices range €90–€400 per night. Anemomilos is our top pick for the bride — walking distance to both churches." : "Τιμές €90–€400 ανά βράδυ. Το Anemomilos είναι η πρώτη μας επιλογή για τη νύφη — πολύ κοντά στις εκκλησίες."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {["Anemomilos", "Chora Resort", "Aria Boutique Hotel", "Marine", "Horizon", "Kifines Suites", "Avaton", "Eygenia Rooms"].map((h, i) => (
            <div key={h} className="border-t border-border pt-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display text-2xl mt-2">{h}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-cream">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="kicker !text-lemon">{en ? "On the island" : "Στο νησί"}</div>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-cream">
              {en ? "Transportation" : "Μετακινήσεις"}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-5">
              {[
                { n: en ? "Scooter" : "Scooter", p: "€30" },
                { n: "ATV", p: "€80" },
                { n: en ? "Car" : "Αυτοκίνητο", p: "€50" },
                { n: "Van", p: "€30–40" },
                { n: en ? "Donkey" : "Γαϊδουράκι", p: "€200" },
                { n: en ? "Violin & Laouto" : "Βιολί & Λαούτο", p: "€400" },
              ].map((r) => (
                <li key={r.n} className="flex items-baseline justify-between border-b border-cream/15 pb-4">
                  <span className="text-cream/90">{r.n}</span>
                  <span className="font-display text-xl text-lemon">{r.p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionKicker>{en ? "Extras" : "Επιπλέον"}</SectionKicker>
            <SectionTitle>{en ? "Boat tour & more" : "Boat tour & άλλα"}</SectionTitle>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="divide-y divide-border">
              <li className="py-4 flex items-baseline justify-between">
                <span>{en ? "Private boat tour (up to 50 guests, weather permitting)" : "Ιδιωτικό boat tour (έως 50 άτομα, βάσει καιρού)"}</span>
                <span className="font-display text-terracotta">—</span>
              </li>
              <li className="py-4 flex items-baseline justify-between gap-4">
                <span>{en ? "Church & priest (all churches)" : "Εκκλησία & ιερέας (όλες οι εκκλησίες)"}</span>
                <span className="font-display text-terracotta whitespace-nowrap">€350</span>
              </li>
              <li className="py-4 flex items-baseline justify-between gap-4">
                <span>{en ? "Transport to St. Mary's church" : "Μεταφορά προς Αγ. Μαρίας"}</span>
                <span className="font-display text-terracotta whitespace-nowrap">€250</span>
              </li>
              <li className="py-4 flex items-baseline justify-between gap-4">
                <span>{en ? "Chora village church — transport" : "Εκκλησία Χώρας — μεταφορικά"}</span>
                <span className="font-display text-terracotta whitespace-nowrap">
                  {en ? "no transport fee" : "χωρίς μεταφορικά"}
                </span>
              </li>
              <li className="py-4 flex items-baseline justify-between gap-4">
                <span>{en ? "Guest ATV transport to church" : "Μεταφορά καλεσμένων στην εκκλησία (ATV)"}</span>
                <span className="font-display text-terracotta whitespace-nowrap">€30 / {en ? "guest" : "άτομο"}</span>
              </li>
              <li className="py-4 flex items-baseline justify-between">
                <span>{en ? "Drinks & pasteli outside the church" : "Ποτά & παστέλι έξω από την εκκλησία"}</span>
                <span className="font-display text-terracotta">€300–1250</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
