const STATS = [
  { value: "+1,200", label: "facturas emitidas cada mes" },
  { value: "1 min", label: "para crear y enviar tu factura" },
  { value: "18%", label: "de ITBIS calculado automático" },
  { value: "14 días", label: "de prueba gratis, sin tarjeta" },
];

export default function TrustBar() {
  return (
    <section aria-label="Datos destacados" className="border-y border-slate-200 bg-slate-50">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="order-2 mt-1 block text-xs font-medium text-slate-500">{stat.label}</dt>
            <dd className="order-1 text-2xl font-black text-blue-700 md:text-3xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
