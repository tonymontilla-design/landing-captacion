export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 text-lg font-black text-white">
              V
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-wide text-white">VLYO ERP</span>
              <span className="block text-[11px]">By AGESERVICES, SRL · Rep. Dominicana</span>
            </span>
          </div>
          <nav aria-label="Enlaces de pie de página">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium">
              <li><a href="#beneficios" className="transition hover:text-white">Beneficios</a></li>
              <li><a href="#precios" className="transition hover:text-white">Precios</a></li>
              <li><a href="#faq" className="transition hover:text-white">Preguntas</a></li>
              <li><a href="#empezar" className="transition hover:text-white">Empezar gratis</a></li>
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs">
          © 2026 VLYO ERP By AGESERVICES, SRL. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
