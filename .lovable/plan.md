# Wedding Offer Presentation — Mafalda & Thanos, Folegandros 2027

A bilingual (EN/GR) single-site web presentation styled like an editorial Mediterranean lookbook — lemons, olive, warm terracotta, whitewashed Cycladic feel — inspired by the reference table image and the pricing pages you shared (lighthousephotography / evarendl).

## Structure (single scroll, anchored nav + separate detail routes for SEO)

Routes:
- `/` — Hero + overview + all main sections stacked (Mediterranean editorial, long-scroll)
- `/photography` — Full photo & video packages breakdown
- `/vendors` — Full vendor list with prices (DJ, flowers, catering, hair/makeup, planner)
- `/logistics` — Travel, hotels, transportation, boat tour
- `/menu` — Wedding menu (from Wedding_menu-2026.pdf)

Each route has its own `head()` metadata (title, description, og:title/description). Root has no og:image; leaf routes get one where relevant.

## Sections on `/`

1. **Hero** — Full-bleed image of the table (from IMG_9895.png), overlaid with:
   - Kicker: "FOLEGANDROS · 21 AUGUST 2027"
   - Title (serif display): "Mafalda & Thanos"
   - Subtitle: "A Cycladic wedding — curated, cinematic, unforgettable"
   - EN/GR toggle top-right
2. **Invitation letter** — Warm intro paragraph, personal tone
3. **Photography & Videography packages** — 2 cards:
   - Photography only — €3000 (2 photographers, 10hrs, ~700 photos 4K, online gallery)
   - Photo + Video + Drone — €4500 (adds cinematic 2–5min clip + 10–20min film)
   - Bullets for each: preparation, ceremony, reception, portraits, guests
   - Link to portfolio: alexandrakisphotography.gr
4. **The Island — Folegandros** — Editorial spread with lemon/olive imagery, short poetic copy
5. **Travel & Boat tickets** — Prices (Dionisios Solomos €48/7hr, Sea Jet €88/4.5hr) + Folegandros Travel 20–30% discount note
6. **Hotels** — Grid of suggestions:
   - Anemomilos (bride, near church)
   - Chora Resort, Aria Boutique, Marine, Horizon, Kifines Suites, Avaton, Eygenia Rooms
   - Price range €90–€400
7. **Transportation on the island** — Scooter €30, ATV €80, Car €50, Van €30–40, Donkey €200, Violin/Laouto €400
8. **Ceremony** — Church & priest €350; St. Mary's transport €250; Chora church free; outside-church drinks €300–1250; guest ATV transport €30/pax
9. **Hair & Makeup** — Katerina Sousi (local, no travel fee)
10. **Boat tour** — Private up to 50 people (weather dependent)
11. **Photographers roster** — Dimitris Alexandrakis, Roula Moniaki, Tselina Tselou, Pick a Bliss, Nikos Mulonas, Eva Rendi, Lighthouse Photography
12. **Flowers & Decoration** — €1500–4000, packages: Olive, Lemon, Bougainvillea (+ optional church)
13. **DJ & Music**:
    - Menelaos Koumentakos — €1250 + transport/accommodation + equipment €800
    - Giorgio Messirlis — €1850 + 24% VAT (until 15 Aug 2026)
    - Traditional live music — €1000
14. **Catering** — Paliomilos (menu attached), Piatsa Taverna €55–100/pax (+ €1500 yard rental if Souvlaki Club shared), Kritikos, Chic (May/June/Sept only)
15. **Wedding Planner** — €2000 up to 80 pax; pre-wedding or next-day shoot €500 each, both €1000
16. **Pre-wedding / Next-day options** — Beach, Chora, Ano Meria
17. **Investment summary** — Total ranges pulled together
18. **Contact / CTA** — Static (no form, per your choice), email + phone + link to portfolio

## Design system (Mediterranean editorial)

Palette (added to `src/styles.css` as oklch tokens):
- Background: warm off-white `oklch(0.98 0.008 85)` (paper cream)
- Ink (text): near-black `oklch(0.2 0.02 60)`
- Accent 1 — Lemon: `oklch(0.86 0.16 95)`
- Accent 2 — Olive: `oklch(0.55 0.08 120)`
- Accent 3 — Terracotta: `oklch(0.62 0.14 45)`
- Muted stone: `oklch(0.75 0.02 70)`

Typography (loaded via `<link>` in `__root.tsx`, referenced in `@theme`):
- Display serif: **Cormorant Garamond** (hero, section titles) — luxury, editorial
- Body: **Inter** (clean, readable)
- Kicker: uppercase tracked Inter

Motion: restrained — subtle fade-up on scroll, slow ken-burns on hero. No aggressive parallax.

Imagery:
- Uploaded IMG_9895.png hosted via lovable-assets (hero + one section band)
- 4–6 generated images (lemon still life, olive branch, Cycladic church silhouette, whitewashed alley, table detail, bougainvillea) via `imagegen` at 1600×1000, saved to `src/assets/`

## Bilingual EN/GR

- `src/lib/i18n.ts` — single object with `en` / `el` keys, one entry per copy string
- `src/hooks/use-language.ts` — Zustand-lite: `useSyncExternalStore` with `localStorage` persistence + `?lang=` URL sync
- Toggle: `EN | ΕΛ` pill top-right of every page
- All prices stay numeric; only surrounding labels translate
- `<html lang>` in `__root.tsx` shell reflects current language on client after hydration (server renders `en` default to avoid mismatch)

## Files to create

- `src/styles.css` — add Mediterranean tokens + `@theme` mappings + Cormorant font-family
- `src/routes/__root.tsx` — add Google Fonts `<link>`, EN/GR toggle in nav, proper head metadata
- `src/routes/index.tsx` — replace placeholder with full long-scroll page
- `src/routes/photography.tsx`, `vendors.tsx`, `logistics.tsx`, `menu.tsx`
- `src/components/site/Nav.tsx`, `Footer.tsx`, `LangToggle.tsx`, `SectionKicker.tsx`, `PriceCard.tsx`, `VendorRow.tsx`, `HotelCard.tsx`
- `src/lib/i18n.ts`, `src/hooks/use-language.ts`
- `src/assets/*` — hero photo (from upload) + generated Mediterranean imagery

## Out of scope

- No backend / no inquiry form (per your choice)
- No PDF export (web only)
- No CMS — content is hardcoded in `i18n.ts`

Ready to build when you approve.
