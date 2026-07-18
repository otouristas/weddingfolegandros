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
                "Eva Rendl",
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

      <Section className="bg-secondary/60">
        <div className="max-w-3xl">
          <SectionKicker>Eva Rendl</SectionKicker>
          <SectionTitle>
            {en ? "Elopements & micro-weddings 2026–27" : "Elopements & micro-weddings 2026–27"}
          </SectionTitle>
          <p className="mt-4 text-ink/80 font-light leading-relaxed">
            {en
              ? "Santorini-based · packages for up to 15 guests. Destination travel fees may apply outside Santorini."
              : "Βάση στη Σαντορίνη · πακέτα έως 15 καλεσμένους. Εκτός Σαντορίνης ενδέχεται να ισχύουν έξοδα μετακίνησης."}
          </p>
        </div>
        <ul className="mt-10 divide-y divide-border max-w-3xl">
          {[
            {
              l: en ? "4 hours coverage" : "Κάλυψη 4 ωρών",
              p: "€1,600 + VAT",
            },
            {
              l: en ? "5 hours coverage" : "Κάλυψη 5 ωρών",
              p: "€2,000 + VAT",
            },
            {
              l: en ? "Additional hour" : "Επιπλέον ώρα",
              p: "€250 + VAT",
            },
            {
              l: en ? "Wedding book — Mini / Standard / Luxe" : "Wedding book — Mini / Standard / Luxe",
              p: "€600 / €900 / €1,500",
            },
          ].map((r) => (
            <li key={r.l} className="py-4 flex items-baseline justify-between gap-4">
              <span className="text-ink/85">{r.l}</span>
              <span className="font-display text-xl text-terracotta whitespace-nowrap">{r.p}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink/65 font-light max-w-3xl">
          {en
            ? "Includes preparation, ceremony, couple portraits, reception highlights, teaser within 1 week, private online gallery and printing rights. Album prices include VAT."
            : "Περιλαμβάνει προετοιμασία, τελετή, πορτραίτα ζευγαριού, highlights δεξίωσης, teaser σε 1 εβδομάδα, ιδιωτική online gallery και δικαιώματα εκτύπωσης. Οι τιμές album περιλαμβάνουν ΦΠΑ."}
        </p>
        <a
          href="https://www.evarendl.com/elopementphotographyprices2026-2027"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-8 text-sm tracking-[0.2em] uppercase text-terracotta hover:opacity-70 transition-opacity"
        >
          {en ? "Full pricing →" : "Πλήρης τιμοκατάλογος →"}
        </a>
      </Section>

      <Section className="bg-ink text-cream">
        <div className="max-w-3xl">
          <div className="kicker !text-lemon">Lighthouse Photography</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4 text-cream">
            {en ? "Pricing 2026–27 · Teo & Anna" : "Τιμές 2026–27 · Teo & Anna"}
          </h2>
          <p className="mt-4 text-cream/75 font-light leading-relaxed">
            {en
              ? "Travel inside Greece included · 24% VAT not included."
              : "Μετακινήσεις εντός Ελλάδας συμπεριλαμβάνονται · ΦΠΑ 24% δεν περιλαμβάνεται."}
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Classic",
              price: "€2,900",
              items: en
                ? [
                    "1 photographer — Teo or Anna",
                    "8 hours coverage",
                    "700 high-res digital files",
                    "Online gallery · 6 months",
                    "Preview gallery (30 images) in a week",
                  ]
                : [
                    "1 φωτογράφος — Teo ή Anna",
                    "8 ώρες κάλυψης",
                    "700 high-res ψηφιακά αρχεία",
                    "Online gallery · 6 μήνες",
                    "Preview gallery (30 φωτογραφίες) σε μία εβδομάδα",
                  ],
            },
            {
              name: "Signature",
              price: "€5,300",
              items: en
                ? [
                    "1 photographer + 1 videographer",
                    "9 hours coverage",
                    "900 high-res digital files",
                    "15–20′ wedding film · 1–2′ short",
                    "Drone · gallery 12 months",
                  ]
                : [
                    "1 φωτογράφος + 1 βιντεογράφος",
                    "9 ώρες κάλυψης",
                    "900 high-res ψηφιακά αρχεία",
                    "Wedding film 15–20′ · short 1–2′",
                    "Drone · gallery 12 μήνες",
                  ],
            },
            {
              name: "Grande",
              price: "€6,500",
              items: en
                ? [
                    "Photo + video + drone",
                    "Content creator",
                    "Analog film (80–100 images)",
                    "Fast gallery delivery (4 weeks)",
                    "Consultation & 12-month gallery",
                  ]
                : [
                    "Φωτογραφία + βίντεο + drone",
                    "Content creator",
                    "Analog film (80–100 φωτογραφίες)",
                    "Γρήγορη παράδοση gallery (4 εβδομάδες)",
                    "Consultation & gallery 12 μηνών",
                  ],
            },
          ].map((pkg) => (
            <div key={pkg.name} className="border border-cream/15 p-8">
              <div className="kicker !text-lemon">{pkg.name}</div>
              <div className="font-display text-4xl text-lemon mt-3">{pkg.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-cream/80">
                {pkg.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-3 bg-lemon shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl">
          <div className="kicker !text-lemon">{en ? "Add-ons" : "Πρόσθετα"}</div>
          <ul className="mt-6 divide-y divide-cream/15">
            {[
              { l: en ? "Second photographer / videographer" : "Δεύτερος φωτογράφος / βιντεογράφος", p: "€1,000" },
              { l: en ? "Extra day photoshoot (3 hours)" : "Extra day photoshoot (3 ώρες)", p: "€900" },
              { l: en ? "Additional hour of coverage" : "Επιπλέον ώρα κάλυψης", p: "€200" },
              { l: en ? "Raw files (unedited)" : "Raw αρχεία (χωρίς επεξεργασία)", p: "€700" },
              { l: en ? "Fast gallery delivery (4 weeks)" : "Γρήγορη παράδοση gallery (4 εβδομάδες)", p: "€700" },
              { l: en ? "Content creation" : "Content creation", p: "€900" },
              { l: en ? "Analog film photos (80–100)" : "Analog film (80–100 φωτογραφίες)", p: "€500" },
            ].map((r) => (
              <li key={r.l} className="py-3 flex items-baseline justify-between gap-4">
                <span className="text-cream/85">{r.l}</span>
                <span className="font-display text-xl text-lemon whitespace-nowrap">{r.p}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://lighthousephotography.pic-time.com/-pricing2025/slidesblog/68ffa8f80743d3e2394b8412"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-10 text-sm tracking-[0.2em] uppercase text-lemon hover:opacity-70 transition-opacity"
        >
          {en ? "Full pricing →" : "Πλήρης τιμοκατάλογος →"}
        </a>
      </Section>

      <Footer />
    </main>
  );
}
