import { ShieldCheck, CreditCard, XCircle } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const GUARANTEES = [
  { icon: CreditCard, text: "Sin tarjeta de crédito" },
  { icon: XCircle, text: "Cancela cuando quieras" },
  { icon: ShieldCheck, text: "Tus datos siempre tuyos" },
];

export default function CapturaFinal() {
  return (
    <section id="empezar" aria-labelledby="empezar-titulo" className="scroll-mt-20 bg-blue-700">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-blue-200">
          Oferta de lanzamiento
        </p>
        <h2 id="empezar-titulo" className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">
          Empieza tus 14 días gratis hoy
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">
          Únete a los autónomos que ya facturan sin estrés. Te toma menos de 1 minuto
          y te acompañamos en cada paso.
        </p>
        <div className="mx-auto mt-8 max-w-xl rounded-3xl bg-white p-5 shadow-2xl sm:p-7">
          <LeadCaptureForm source="cierre" layout="stacked" />
        </div>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {GUARANTEES.map((item) => (
            <li key={item.text} className="flex items-center gap-2 text-sm font-medium text-blue-100">
              <item.icon className="h-4 w-4" aria-hidden="true" /> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
