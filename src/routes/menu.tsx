import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/hooks/use-language";
import { Section, SectionKicker, SectionTitle } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";
import lemons from "@/assets/lemons.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Wedding Menu — Paliomilos Restaurant" },
      { name: "description", content: "Suggested wedding menu at Paliomilos Restaurant — starters, salads, mains, sides and desserts." },
      { property: "og:title", content: "Wedding Menu — Paliomilos Restaurant" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const MENU = {
  starters: [
    "Fava (yellow split pea purée)",
    "Tirokafteri (spicy feta dip)",
    "Tzatziki",
    "Taramosalata",
    "Beetroot salad dip (yogurt, walnuts, garlic)",
    "Zucchini fritters with feta & mint",
    "Chicken croquettes",
    "Folegandrian caper stew",
    "Thick chickpea stew",
    "Kalasouna mini pies (souroto cheese, phyllo)",
    "Grilled octopus",
  ],
  salads: [
    "Greek salad",
    "Paliomilos salad (apaki, graviera, petimezi, walnuts)",
    "Folegandros salad (cherry tomato, caper, souroto)",
    "Mixed greens pie salad with yoghurt & feta cream",
    "Potato salad with smoked mackerel",
  ],
  first: [
    "Folegandros matsata with chicken in tomato sauce",
    "Greek trachanoto with shrimps",
    "Mediterranean pie (feta, onion, Florina pepper, olives)",
    "Potato & cheese soufflé",
  ],
  mains: [
    "Beef kleftiko wrapped in parchment",
    "Slow-roasted goat with rosemary & thyme",
    "Honey-mustard oven-roasted pork",
    "Mixed grill platter (beef, chicken, lamb)",
    "Fresh fish — red snapper or dentex",
  ],
  sides: ["Roast potatoes with thyme", "Grilled vegetables", "Bulgur with fresh herbs", "Pilaf rice"],
  desserts: [
    "Chocolate mosaic cake with moustokouloura",
    "Folegandros yellow pears with mastic ice cream",
    "Traditional portokalopita",
    "Almond florentines with lemon cream",
  ],
  vegan: ["Greek moussaka with soya mince", "Fava bean 'soutzoukakia' in tomato stew"],
};

export function MenuPage() {
  const [lang] = useLang();
  const en = lang === "en";

  const sections: Array<{ key: keyof typeof MENU; en: string; el: string }> = [
    { key: "starters", en: "Starters", el: "Ορεκτικά" },
    { key: "salads", en: "Salads", el: "Σαλάτες" },
    { key: "first", en: "First course", el: "Πρώτο πιάτο" },
    { key: "mains", en: "Main course", el: "Κυρίως πιάτα" },
    { key: "sides", en: "Sides", el: "Συνοδευτικά" },
    { key: "desserts", en: "Dessert", el: "Επιδόρπια" },
    { key: "vegan", en: "Vegetarian / Vegan", el: "Χορτοφαγικά / Vegan" },
  ];

  return (
    <main className="bg-cream text-ink pt-24">
      <Section>
        <div className="max-w-3xl">
          <SectionKicker>Paliomilos Restaurant</SectionKicker>
          <SectionTitle>{en ? "Wedding Menu" : "Γαμήλιο Μενού"}</SectionTitle>
          <p className="mt-6 text-lg text-ink/85 leading-relaxed font-light">
            {en
              ? "Create your own menu by choosing as many dishes as you like. Served family-style, plated for four. Starting at €55 per person for two starters, one salad, and one main with a side."
              : "Δημιουργήστε το δικό σας μενού επιλέγοντας ελεύθερα πιάτα. Σερβίρεται family-style για τέσσερα άτομα. Από €55/άτομο για δύο ορεκτικά, μία σαλάτα και ένα κυρίως με συνοδευτικό."}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            {en ? "Prices exclude VAT (13–24%). Home-made bread freshly baked every day." : "Οι τιμές δεν περιλαμβάνουν ΦΠΑ (13–24%). Ψωμί φτιαγμένο σπιτικό, ψημένο κάθε μέρα."}
          </p>
        </div>
      </Section>

      <Section className="bg-secondary/60 !pt-0">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 pt-12">
          {sections.map((s) => (
            <div key={s.key}>
              <div className="flex items-baseline gap-4 border-b border-border pb-3">
                <div className="kicker">{en ? s.en : s.el}</div>
              </div>
              <ul className="mt-6 space-y-3 text-ink/85 font-light">
                {MENU[s.key].map((d, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-px w-3 bg-terracotta shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <SectionKicker>{en ? "Drinks" : "Ποτά"}</SectionKicker>
            <SectionTitle>{en ? "Wine & beverages" : "Κρασί & αναψυκτικά"}</SectionTitle>
            <p className="mt-4 text-sm text-muted-foreground">
              {en ? "Bottled selections or all-inclusive per-person packages." : "Επιλογές ανά μπουκάλι ή all-inclusive πακέτα ανά άτομο."}
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="divide-y divide-border">
              {[
                { l: "Paliomilos White — Assyrtiko & Malagousia (750ml)", p: "€18" },
                { l: "Paliomilos Rosé — Moschato (750ml)", p: "€17" },
                { l: "Paliomilos Red — Cabernet Sauvignon & Merlot (750ml)", p: "€25" },
                { l: "Greek beer (330ml)", p: "€4.50" },
                { l: en ? "Soft drinks (250ml)" : "Αναψυκτικά (250ml)", p: "€2.50" },
                { l: en ? "Still water (1L)" : "Νερό (1L)", p: "€2" },
                { l: en ? "Sparkling water (750ml)" : "Ανθρακούχο νερό (750ml)", p: "€4" },
                { l: en ? "All-you-can-drink · White menu" : "All-you-can-drink · Λευκό", p: "€16.50 / pp" },
                { l: en ? "All-you-can-drink · Rosé menu" : "All-you-can-drink · Rosé", p: "€15.50 / pp" },
                { l: en ? "All-you-can-drink · Red menu" : "All-you-can-drink · Ερυθρό", p: "€20 / pp" },
              ].map((r, i) => (
                <li key={i} className="py-3 flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-ink/85">{r.l}</span>
                  <span className="font-display text-lg text-terracotta whitespace-nowrap">{r.p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div className="relative h-72 overflow-hidden">
        <img src={lemons} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
      </div>

      <Footer />
    </main>
  );
}
