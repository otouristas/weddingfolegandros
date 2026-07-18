import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/hooks/use-language";
import { Section, SectionKicker, SectionTitle } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";
import ceremony from "@/assets/ceremony.jpg";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography & Videography — Mafalda & Thanos" },
      { name: "description", content: "Full photography and videography packages for the Folegandros wedding." },
      { property: "og:title", content: "Photography & Videography — Mafalda & Thanos" },
      { property: "og:url", content: "/photography" },
    ],
    links: [{ rel: "canonical", href: "/photography" }],
  }),
  component: PhotographyPage,
});

function PhotographyPage() {
  const [lang] = useLang();
  const en = lang === "en";

  const covers = en
    ? [
        { t: "Preparation", d: "Details, garments, watches, jewellery, the wedding dress, invitations, creative portraits, moments with parents, siblings and best men." },
        { t: "Guests, décor & flowers", d: "Portraits of guests, the setting, florals and the small details that make the day yours." },
        { t: "The ceremony", d: "Full coverage of the ceremony, photos with family and friends, couple portraits after the ceremony." },
        { t: "Reception & party", d: "Key moments of the reception captured with a discreet presence and natural style — authentic, unposed." },
      ]
    : [
        { t: "Προετοιμασία", d: "Λεπτομέρειες, ρούχα, ρολόγια, κοσμήματα, νυφικό, προσκλητήριο, δημιουργικά πορτραίτα, στιγμές με γονείς, αδέλφια και κουμπάρους." },
        { t: "Καλεσμένοι, στολισμός & λουλούδια", d: "Πορτραίτα καλεσμένων, στολισμός, λουλούδια και μικρές λεπτομέρειες που κάνουν την ημέρα μοναδική." },
        { t: "Το μυστήριο", d: "Κάλυψη τελετής, φωτογραφίες με συγγενείς και φίλους, πορτραίτα του ζευγαριού μετά την τελετή." },
        { t: "Δεξίωση & πάρτυ", d: "Οι σημαντικές στιγμές με διακριτική παρουσία και φυσικό ύφος — αυθεντικές, αστημάριστες." },
      ];

  return (
    <main className="bg-cream text-ink pt-24">
      <Section>
        <div className="max-w-3xl">
          <SectionKicker>{en ? "The coverage" : "Η κάλυψη"}</SectionKicker>
          <SectionTitle>{en ? "Photography & Videography" : "Φωτογραφία & Βιντεογράφηση"}</SectionTitle>
          <p className="mt-6 text-lg text-ink/85 leading-relaxed font-light">
            {en
              ? "Up to 10 hours of full coverage by two photographers, with artistic editing that draws out the light and mood of the day."
              : "Έως 10 ώρες πλήρους κάλυψης από δύο φωτογράφους, με καλλιτεχνικό editing που αναδεικνύει το φως και την ατμόσφαιρα της ημέρας."}
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {covers.map((c, i) => (
            <div key={c.t} className="border-t border-border pt-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-terracotta">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-3xl mt-3">{c.t}</h3>
              <p className="mt-3 text-ink/80 leading-relaxed font-light">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/60">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-10 md:p-14 bg-cream border border-border">
            <div className="kicker">{en ? "Package 01" : "Πακέτο 01"}</div>
            <h3 className="font-display text-4xl mt-3">{en ? "Photography" : "Φωτογραφία"}</h3>
            <div className="font-display text-6xl text-terracotta mt-4">€3,000</div>
            <ul className="mt-8 space-y-3 text-sm text-ink/85">
              {(en
                ? [
                    "Two photographers",
                    "Up to 10 hours of coverage",
                    "Preparation, ceremony, reception",
                    "Online gallery",
                    "~700 edited photos in 4K",
                  ]
                : [
                    "Δύο φωτογράφοι",
                    "Έως 10 ώρες κάλυψης",
                    "Προετοιμασία, τελετή, δεξίωση",
                    "Online gallery",
                    "~700 επεξεργασμένες φωτογραφίες 4K",
                  ]
              ).map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-px w-4 bg-terracotta shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 md:p-14 bg-ink text-cream">
            <div className="kicker !text-lemon">{en ? "Package 02" : "Πακέτο 02"}</div>
            <h3 className="font-display text-4xl mt-3 text-cream">{en ? "Photo + Video + Drone" : "Φωτογραφία + Βίντεο + Drone"}</h3>
            <div className="font-display text-6xl text-lemon mt-4">€4,500</div>
            <ul className="mt-8 space-y-3 text-sm text-cream/85">
              {(en
                ? [
                    "Everything in Package 01",
                    "Two-person cinema team + drone",
                    "Cinematic clip 2–5 minutes",
                    "Film 10–20 minutes",
                    "Artistic editing throughout",
                  ]
                : [
                    "Ό,τι περιλαμβάνει το Πακέτο 01",
                    "Ομάδα βιντεογράφησης 2 ατόμων + drone",
                    "Cinematic clip 2–5 λεπτά",
                    "Film 10–20 λεπτά",
                    "Καλλιτεχνικό editing",
                  ]
              ).map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-px w-4 bg-lemon shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <img src={ceremony} alt="Ceremony" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1600} height={1000} />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <SectionKicker>{en ? "Other photographers" : "Άλλοι φωτογράφοι"}</SectionKicker>
            <SectionTitle>{en ? "A trusted circle" : "Ένας κύκλος συνεργατών"}</SectionTitle>
            <ul className="mt-8 space-y-3 text-ink/85">
              {[
                "Dimitris Alexandrakis",
                "Roula Moniaki",
                "Tselina Tselou",
                "Pick a Bliss",
                "Nikos Mulonas",
                "Eva Rendi",
                "Lighthouse Photography",
              ].map((n) => (
                <li key={n} className="font-display text-2xl border-b border-border pb-2">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
