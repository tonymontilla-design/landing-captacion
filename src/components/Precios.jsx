import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Emprendedor",
    price: "RD$ 1,500",
    period: "/mes",
    tagline: "Para empezar a facturar en orden.",
    features: ["Facturas con NCF ilimitadas", "1 usuario", "Clientes y productos", "Reporte mensual de ITBIS", "Soporte por WhatsApp"],
    highlighted: false,
    cta: "Empezar prueba gratis",
  },
  {
    name: "Negocio",
    price: "RD$ 2,900",
    period: "/mes",
    tagline: "Para el que vende todos los días.",
    features: [
      "Todo lo del Emprendedor",
      "3 usuarios",
      "Punto de venta (POS) + caja",
      "Inventario con kardex",
      "Recordatorios de cobro",
      "Soporte prioritario",
    ],
    highlighted: true,
    badge: "El más elegido",
    cta: "Empezar prueba gratis",
  },
  {
    name: "Profesional",
    price: "RD$ 4,000",
    period: "/mes",
    tagline: "Operación completa sin contador interno.",
    features: [
      "Todo lo del Negocio",
      "10 usuarios",
      "Contabilidad completa",
      "Compras y cuentas por pagar",
      "Múltiples sucursales",
    ],
    highlighted: false,
    cta: "Empezar prueba gratis",
  },
];

export default function Precios() {
  return (
    <section
      id="precios"
      aria-labelledby="precios-titulo"
      className="border-y border-slate-200 bg-slate-50 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Precios en pesos</p>
          <h2 id="precios-titulo" className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Planes simples, sin letras chiquitas
          </h2>
          <p className="mt-3 text-slate-600">
            Los 3 planes incluyen <strong>14 días gratis</strong>. Sin tarjeta, cancela cuando quieras.
          </p>
        </div>
        <ul className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                plan.highlighted
                  ? "border-blue-700 bg-blue-700 text-white shadow-2xl shadow-blue-700/25 lg:scale-[1.04]"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-500 px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className={`text-lg font-extrabold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <p className={`mt-1 text-sm ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>{plan.tagline}</p>
              <p className="mt-4">
                <span className={`text-4xl font-black tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-medium ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>
                  {plan.period}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? "bg-emerald-400 text-blue-950" : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className={plan.highlighted ? "text-blue-50" : "text-slate-700"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#empezar"
                className={`mt-7 inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                  plan.highlighted
                    ? "bg-white text-blue-800 hover:bg-blue-50"
                    : "bg-blue-700 text-white hover:bg-blue-800"
                }`}
              >
                {plan.cta}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-slate-500">
          Precios con ITBIS incluido. Descuento por pago anual escribiendo por WhatsApp.
        </p>
      </div>
    </section>
  );
}
