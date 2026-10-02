import { Receipt, Percent, Users, BarChart3, Smartphone, Headset } from "lucide-react";

const BENEFITS = [
  {
    icon: Receipt,
    title: "Facturas con NCF en 1 minuto",
    text: "Plantillas con tu logo, numeración automática y envío por WhatsApp o correo sin salir de la app.",
  },
  {
    icon: Percent,
    title: "ITBIS sin calculadora",
    text: "El 18% se calcula solo en cada factura y el reporte mensual sale listo para declarar.",
  },
  {
    icon: Users,
    title: "Clientes que sí pagan",
    text: "Historial por cliente, balances pendientes y recordatorios automáticos de cobro.",
  },
  {
    icon: BarChart3,
    title: "Tus números claros",
    text: "Ventas del día, productos más vendidos y ganancias en un panel simple, sin contabilidad complicada.",
  },
  {
    icon: Smartphone,
    title: "Desde tu celular",
    text: "Factura en el colmado, en la calle o en la casa. Todo sincronizado en la nube.",
  },
  {
    icon: Headset,
    title: "Ayuda en tu idioma",
    text: "Soporte por WhatsApp con gente de aquí, más capacitación incluida para ti y tu equipo.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-titulo" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Beneficios</p>
        <h2 id="beneficios-titulo" className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          Todo lo tedioso, en automático
        </h2>
        <p className="mt-3 text-slate-600">
          Diseñado para quien vende, no para contadores. Tú trabajas, VLYO se encarga del papeleo.
        </p>
      </div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <li
            key={benefit.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
              <benefit.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-extrabold text-slate-900">{benefit.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{benefit.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
