import { UserPlus, FilePlus2, PartyPopper } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    step: "Paso 1",
    title: "Regístrate gratis",
    text: "Solo tu correo. Sin tarjeta, sin compromiso, en menos de 1 minuto.",
  },
  {
    icon: FilePlus2,
    step: "Paso 2",
    title: "Crea tu primera factura",
    text: "Agrega tu cliente y tus productos. El NCF y el ITBIS salen solos.",
  },
  {
    icon: PartyPopper,
    step: "Paso 3",
    title: "Cobra y declara tranquilo",
    text: "Envía por WhatsApp, controla quién te debe y descarga tu reporte mensual.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="border-y border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Cómo funciona</p>
          <h2 id="como-funciona-titulo" className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            En 3 pasos estás facturando
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((item, index) => (
            <li key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span
                aria-hidden="true"
                className="absolute right-5 top-4 text-5xl font-black text-slate-100"
              >
                {index + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-xs font-extrabold uppercase tracking-widest text-blue-700">{item.step}</p>
              <h3 className="mt-1 text-base font-extrabold text-slate-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
