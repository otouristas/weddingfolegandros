import { useSyncExternalStore } from "react";

export type Lang = "en" | "el";

const KEY = "wedding-lang";
let current: Lang = "en";
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  const stored = window.localStorage.getItem(KEY) as Lang | null;
  if (stored === "en" || stored === "el") current = stored;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function setLang(lang: Lang) {
  current = lang;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, lang);
    document.documentElement.lang = lang === "el" ? "el" : "en";
  }
  listeners.forEach((l) => l());
}

export function useLang(): [Lang, (l: Lang) => void] {
  const lang = useSyncExternalStore(
    subscribe,
    () => current,
    () => "en" as Lang,
  );
  return [lang, setLang];
}
