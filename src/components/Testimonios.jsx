import { Star, Quote } from "lucide-react";

// Testimonios de ejemplo para maquetar. Reemplázalos con clientes reales
// (nombre + negocio + resultado medible) antes de publicar.
const TESTIMONIALS = [
  {
    quote:
      "Antes pasaba los domingos haciendo facturas a mano. Ahora las hago desde el celular en el colmado y el ITBIS sale solo.",
    name: "María",
    detail: "Colmado en Santo Domingo Este",
    initials: "M",
  },
  {
    quote:
      "Lo que más me gusta es que me dice quién me debe y cuánto. Recuperé dos facturas viejas en la primera semana.",
    name: "José",
    detail: "Taller de herrería, Santiago",
    initials: "J",
  },
  {
    quote:
      "Yo no sé de contabilidad y no me hizo falta. El reporte del mes se lo paso a mi contadora tal cual sale del sistema.",
    name: "Carmen",
    detail: "Salón de belleza, La Romana",
    initials: "C",
  },
];

function Stars() {
  return (
    <p className="flex gap-1" role="img" aria-label="Calificación: 5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </p>
  );
}

export default function Testimonios() {
  return (
    <section aria-labelledby="testimonios-titulo" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Testimonios</p>
        <h2 id="testimonios-titulo" className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          Autónomos que ya duermen tranquilos
        </h2>
      </div>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <li key={item.name}>
            <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote className="h-7 w-7 text-blue-200" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-base font-black text-white"
                >
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-slate-900">{item.name}</span>
                  <span className="block text-xs text-slate-500">{item.detail}</span>
                </span>
              </figcaption>
              <div className="mt-3">
                <Stars />
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
