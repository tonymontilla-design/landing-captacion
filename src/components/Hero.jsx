import { BadgeCheck, FileText, Calculator, BellRing } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const POINTS = [
  { icon: FileText, text: "Facturas con NCF en menos de 1 minuto" },
  { icon: Calculator, text: "ITBIS y reportes calculados solos" },
  { icon: BellRing, text: "Recordatorios para que te paguen a tiempo" },
];

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-24 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 sm:px-6 md:grid-cols-2 md:pb-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-800">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Hecho para autónomos en República Dominicana
          </p>
          <h1 id="hero-titulo" className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
            Factura en minutos y olvídate de los impuestos
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            VLYO ERP genera tus facturas con NCF, calcula el ITBIS automáticamente y te deja
            los reportes listos para la DGII. Empieza hoy con <strong>14 días gratis</strong>,
            sin tarjeta.
          </p>

          <div className="mt-7">
            <LeadCaptureForm source="hero" layout="inline" />
          </div>

          <ul className="mt-6 space-y-2.5">
            {POINTS.map((point) => (
              <li key={point.text} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <point.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {point.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-200/60 to-emerald-200/60 blur-2xl"
          />
          <figure className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <p className="text-sm font-extrabold text-slate-900">Factura B02-0000142</p>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                Cobrada
              </span>
            </div>
            <dl className="mt-3 space-y-2.5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Cliente</dt>
                <dd className="font-semibold text-slate-900">Colmado La Esquina</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Subtotal</dt>
                <dd className="font-semibold text-slate-900">RD$ 8,500.00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">ITBIS (18%)</dt>
                <dd className="font-semibold text-slate-900">RD$ 1,530.00</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-dashed border-slate-200 pt-2.5">
                <dt className="font-bold text-slate-900">Total</dt>
                <dd className="font-black text-blue-700">RD$ 10,030.00</dd>
              </div>
            </dl>
            <div className="mt-4 rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-bold text-white">
              Enviada por WhatsApp en 1 clic
            </div>
            <figcaption className="mt-3 text-center text-xs text-slate-400">
              Ejemplo ilustrativo de una factura emitida con VLYO ERP
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
