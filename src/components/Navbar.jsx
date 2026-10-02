import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const LINKS = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "Preguntas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav aria-label="Navegación principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2" aria-label="VLYO ERP - inicio">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-lg font-black text-white">
            V
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide text-slate-900">VLYO ERP</span>
            <span className="block text-[11px] text-slate-500">Facturación fácil RD</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-blue-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#empezar"
            className="hidden items-center gap-1.5 rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800 sm:inline-flex"
          >
            <Zap className="h-4 w-4" aria-hidden="true" /> Empezar gratis
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <nav id="menu-movil" aria-label="Navegación móvil" className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 hover:bg-slate-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#empezar"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-blue-700 px-3 py-3 font-bold text-white"
              >
                <Zap className="h-4 w-4" aria-hidden="true" /> Empezar gratis
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
