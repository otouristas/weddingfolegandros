export type GalleryPhoto = {
  src: string;
  caption: { en: string; el: string };
};

export const GALLERY_CREDIT = {
  name: "Anargyros Dekavallas",
  handle: "anargyros.dekavallas",
  profileUrl: "https://www.instagram.com/anargyros.dekavallas",
} as const;

/** Folegandros island photos (copied from moto-magic-glow gallery + beaches). */
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/media/gallery/folegandros-01.jpg", caption: { en: "Landscape", el: "Τοπίο" } },
  { src: "/media/gallery/folegandros-02.jpg", caption: { en: "Coastline", el: "Ακτογραμμή" } },
  { src: "/media/gallery/folegandros-03.jpg", caption: { en: "Village", el: "Χωριό" } },
  { src: "/media/gallery/folegandros-04.jpg", caption: { en: "Sea view", el: "Θέα στη θάλασσα" } },
  { src: "/media/gallery/folegandros-05.jpg", caption: { en: "Sunset", el: "Ηλιοβασίλεμα" } },
  { src: "/media/gallery/folegandros-06.jpg", caption: { en: "Beach", el: "Παραλία" } },
  { src: "/media/gallery/folegandros-07.jpg", caption: { en: "Island life", el: "Ζωή στο νησί" } },
  { src: "/media/gallery/folegandros-08.jpg", caption: { en: "Moments", el: "Στιγμές" } },
  { src: "/media/gallery/agali.jpg", caption: { en: "Agali", el: "Αγάλι" } },
  { src: "/media/gallery/agios-georgios.jpg", caption: { en: "Agios Georgios", el: "Άγιος Γεώργιος" } },
  { src: "/media/gallery/agios-nikolaos.jpg", caption: { en: "Agios Nikolaos", el: "Άγιος Νικόλαος" } },
  { src: "/media/gallery/ambeli.jpg", caption: { en: "Ambeli", el: "Αμπέλι" } },
  { src: "/media/gallery/fira.jpg", caption: { en: "Fira", el: "Φηρά" } },
  { src: "/media/gallery/galifos.jpg", caption: { en: "Galifos", el: "Γαλίφος" } },
  { src: "/media/gallery/karavostasi.jpg", caption: { en: "Karavostasi", el: "Καραβοστάσι" } },
  { src: "/media/gallery/katergo.jpg", caption: { en: "Katergo", el: "Κατέργο" } },
  { src: "/media/gallery/ligaria.jpg", caption: { en: "Ligaria", el: "Λιγαριά" } },
  { src: "/media/gallery/livadaki.jpg", caption: { en: "Livadaki", el: "Λιβαδάκι" } },
];
