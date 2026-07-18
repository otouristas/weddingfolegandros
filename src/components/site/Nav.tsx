import { Link, useRouterState } from "@tanstack/react-router";
import { LangToggle } from "./LangToggle";
import { useT } from "@/lib/i18n";

export function Nav() {
  const t = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  const links: Array<{ to: "/" | "/photography" | "/vendors" | "/logistics" | "/menu"; key: Parameters<typeof t>[0] }> = [
    { to: "/", key: "navHome" },
    { to: "/photography", key: "navPhoto" },
    { to: "/vendors", key: "navVendors" },
    { to: "/logistics", key: "navLogistics" },
    { to: "/menu", key: "navMenu" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        isHome ? "bg-transparent" : "bg-cream/90 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className={`font-display text-lg tracking-tight ${isHome ? "text-cream" : "text-ink"}`}>
          M <span className="opacity-50">&</span> T
        </Link>
        <nav className={`hidden md:flex items-center gap-8 text-[13px] tracking-wide ${isHome ? "text-cream/90" : "text-ink/80"}`}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:opacity-70 transition-opacity"
              activeOptions={{ exact: true }}
              activeProps={{ className: "opacity-100 underline underline-offset-8 decoration-terracotta" }}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>
        <LangToggle />
      </div>
    </header>
  );
}
