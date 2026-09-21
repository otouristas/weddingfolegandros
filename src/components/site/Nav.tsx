import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { LangToggle } from "./LangToggle";
import { useT } from "@/lib/i18n";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Nav() {
  const t = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const isGiannis = pathname === "/rafaela-giannis";
  const [open, setOpen] = useState(false);

  const links: Array<{
    to: "/" | "/photography" | "/gallery" | "/vendors" | "/logistics" | "/rafaela-giannis";
    key: Parameters<typeof t>[0];
  }> = [
    { to: "/", key: "navHome" },
    { to: "/photography", key: "navPhoto" },
    { to: "/gallery", key: "navGallery" },
    { to: "/vendors", key: "navVendors" },
    { to: "/logistics", key: "navLogistics" },
  ];

  const lightNav = isHome || isGiannis;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        lightNav ? "bg-transparent" : "bg-cream/90 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to={isGiannis ? "/rafaela-giannis" : "/"} className={`font-display text-lg tracking-tight ${lightNav ? "text-cream" : "text-ink"}`}>
          R <span className="opacity-50">&</span> {isGiannis ? "G" : "P"}
        </Link>
        <nav className={`hidden md:flex items-center gap-8 text-[13px] tracking-wide ${lightNav ? "text-cream/90" : "text-ink/80"}`}>
          {(isGiannis ? [] : links).map((l) => (
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
          <Link
            to={isGiannis ? "/" : "/rafaela-giannis"}
            className="border-b border-current pb-1 hover:opacity-70 transition-opacity"
          >
            {isGiannis ? "R & P" : "R & G"}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className={`md:hidden inline-flex items-center justify-center p-1.5 -mr-1.5 transition-opacity hover:opacity-70 ${
                  lightNav ? "text-cream" : "text-ink"
                }`}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream border-border w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="font-display text-ink text-left text-lg font-medium tracking-tight">
                  R <span className="opacity-50">&</span> {isGiannis ? "G" : "P"}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-6 text-[15px] tracking-wide text-ink/80">
                {(isGiannis ? [] : links).map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="hover:opacity-70 transition-opacity"
                    activeOptions={{ exact: true }}
                    activeProps={{ className: "opacity-100 underline underline-offset-8 decoration-terracotta text-ink" }}
                  >
                    {t(l.key)}
                  </Link>
                ))}
                <Link
                  to={isGiannis ? "/" : "/rafaela-giannis"}
                  onClick={() => setOpen(false)}
                  className="text-terracotta hover:opacity-70 transition-opacity"
                >
                  {isGiannis ? "Rafaela & Paraskevas" : "Rafaela & Giannis"}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
