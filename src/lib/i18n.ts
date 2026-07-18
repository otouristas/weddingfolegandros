import { useLang, type Lang } from "@/hooks/use-language";

type Dict = Record<string, { en: string; el: string }>;

export const t: Dict = {
  navHome: { en: "Overview", el: "Επισκόπηση" },
  navPhoto: { en: "Photography", el: "Φωτογραφία" },
  navGallery: { en: "Gallery", el: "Γκαλερί" },
  navVendors: { en: "Vendors", el: "Συνεργάτες" },
  navLogistics: { en: "Travel & Stay", el: "Ταξίδι & Διαμονή" },
  navMenu: { en: "Menu", el: "Μενού" },

  heroKicker: { en: "Folegandros · 21 August 2027", el: "Φολέγανδρος · 21 Αυγούστου 2027" },
  heroTitle: { en: "Mafalda & Thanos", el: "Mafalda & Thanos" },
  heroSubtitle: {
    en: "A Cycladic wedding — curated, cinematic, unforgettable.",
    el: "Ένας γάμος στις Κυκλάδες — φροντισμένος, κινηματογραφικός, αξέχαστος.",
  },
  scrollHint: { en: "Scroll", el: "Κύλιση" },

  letterKicker: { en: "A note from our team", el: "Ένα σημείωμα" },
  letterTitle: { en: "Your day, in our hands", el: "Η μέρα σας, στα χέρια μας" },
  letterBody: {
    en: "Thank you for considering us for your Folegandros wedding. What follows is a complete proposal for photography, videography and every essential detail of the day — vendors, logistics, hotels and menu — carefully assembled so you can plan with clarity and confidence.",
    el: "Σας ευχαριστούμε που μας εμπιστεύεστε τον γάμο σας στη Φολέγανδρο. Παρακάτω θα βρείτε μια ολοκληρωμένη πρόταση για φωτογραφία, βιντεογράφηση και κάθε λεπτομέρεια της ημέρας — συνεργάτες, ταξίδι, ξενοδοχεία και μενού — με απόλυτη διαφάνεια για να προγραμματίσετε με σιγουριά.",
  },

  packagesKicker: { en: "The investment", el: "Η επένδυση" },
  packagesTitle: { en: "Photography & Videography", el: "Φωτογραφία & Βιντεογράφηση" },
  pkg1Name: { en: "Full Photography", el: "Πλήρης Φωτογραφική Κάλυψη" },
  pkg1Price: { en: "€3,000", el: "3.000€" },
  pkg1Sub: { en: "Two photographers · up to 10 hours", el: "Δύο φωτογράφοι · έως 10 ώρες" },
  pkg2Name: { en: "Photo + Video + Drone", el: "Φωτογραφία + Βίντεο + Drone" },
  pkg2Price: { en: "€4,500", el: "4.500€" },
  pkg2Sub: { en: "Two-person cinema team", el: "Κινηματογραφική ομάδα δύο ατόμων" },

  pkgIncl1: { en: "Bride & Groom preparation — details, portraits, family moments", el: "Προετοιμασία Νύφης & Γαμπρού — λεπτομέρειες, πορτραίτα, οικογένεια" },
  pkgIncl2: { en: "Guest portraits, décor, flowers and every detail", el: "Πορτραίτα καλεσμένων, στολισμός, λουλούδια, λεπτομέρειες" },
  pkgIncl3: { en: "Ceremony coverage and post-ceremony couple portraits", el: "Κάλυψη Μυστηρίου και πορτραίτα του ζευγαριού" },
  pkgIncl4: { en: "Reception & party — discreet, natural, authentic", el: "Δεξίωση & πάρτυ — διακριτικά, αυθεντικά" },
  pkgIncl5: { en: "Online gallery · ~700 edited photos in 4K", el: "Online gallery · ~700 επεξεργασμένες φωτογραφίες 4K" },
  pkgIncl6: { en: "Cinematic 2–5 min clip · 10–20 min film", el: "Cinematic clip 2–5′ · Film 10–20′" },

  portfolio: { en: "See our work →", el: "Δείτε τη δουλειά μας →" },

  islandKicker: { en: "The island", el: "Το νησί" },
  islandTitle: { en: "Folegandros", el: "Φολέγανδρος" },
  islandBody: {
    en: "Whitewashed alleys, cliffs that fall into the Aegean, the scent of caper and thyme. Folegandros is small, quiet and cinematic — the kind of place where a wedding feels like a private festival for the people who matter most.",
    el: "Ασβεστωμένα σοκάκια, βράχια πάνω από το Αιγαίο, η μυρωδιά από κάπαρη και θυμάρι. Η Φολέγανδρος είναι μικρή, ήσυχη και κινηματογραφική — τόπος για έναν γάμο σαν ιδιωτική γιορτή.",
  },

  travelKicker: { en: "Getting there", el: "Πώς έρχεστε" },
  travelTitle: { en: "Boat tickets", el: "Εισιτήρια πλοίων" },
  travelNote: { en: "Folegandros Travel discount 20–30% on all tickets", el: "Έκπτωση 20–30% από Folegandros Travel σε όλα τα εισιτήρια" },

  hotelsKicker: { en: "Where to stay", el: "Πού θα μείνετε" },
  hotelsTitle: { en: "Hotels", el: "Ξενοδοχεία" },
  hotelsNote: { en: "Price range €90–€400 per night", el: "Τιμές €90–€400 ανά διανυκτέρευση" },
  hotelBrideNote: { en: "Recommended for the bride — walking distance to both churches", el: "Προτείνεται για τη νύφη — κοντά στις εκκλησίες" },

  transportKicker: { en: "On the island", el: "Στο νησί" },
  transportTitle: { en: "Transportation", el: "Μετακινήσεις" },

  ceremonyKicker: { en: "The ceremony", el: "Το μυστήριο" },
  ceremonyTitle: { en: "Church & essentials", el: "Εκκλησία & βασικά" },

  vendorsKicker: { en: "The team", el: "Η ομάδα" },
  vendorsTitle: { en: "Vendors", el: "Συνεργάτες" },

  summaryKicker: { en: "At a glance", el: "Με μια ματιά" },
  summaryTitle: { en: "Investment summary", el: "Σύνοψη επένδυσης" },
  summaryNote: {
    en: "Indicative ranges for ~80 guests. Final total depends on the options you choose.",
    el: "Ενδεικτικά εύρη για ~80 καλεσμένους. Το τελικό σύνολο εξαρτάται από τις επιλογές σας.",
  },
  summaryTotal: { en: "Indicative core range", el: "Ενδεικτικό εύρος βασικών" },
  summaryTotalPrice: { en: "€13,000–25,000", el: "13.000–25.000€" },

  planKicker: { en: "Ready when you are", el: "Έτοιμοι όταν είστε" },
  planTitle: { en: "Let's plan your day", el: "Ας σχεδιάσουμε τη μέρα σας" },
  planBody: {
    en: "This document is a starting point. Every element can be tailored to how you imagine the day. Reach out and we'll shape it together.",
    el: "Το έγγραφο αυτό είναι σημείο εκκίνησης. Κάθε στοιχείο προσαρμόζεται στη δική σας εικόνα. Επικοινωνήστε μαζί μας για να το διαμορφώσουμε μαζί.",
  },
  contactBtn: { en: "Portfolio", el: "Portfolio" },
  footerNote: { en: "Prepared with care for Mafalda & Thanos", el: "Με φροντίδα για τους Mafalda & Thanos" },
};

export function useT() {
  const [lang] = useLang();
  return (key: keyof typeof t) => t[key][lang];
}

export function tr(key: keyof typeof t, lang: Lang) {
  return t[key][lang];
}
