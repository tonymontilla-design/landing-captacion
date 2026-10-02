import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "¿Necesito saber de contabilidad?",
    a: "No. VLYO está diseñado para quien vende, no para contadores. El sistema calcula el ITBIS, organiza tus facturas y genera el reporte que tu contadora necesita, tal cual.",
  },
  {
    q: "¿Qué pasa cuando terminan los 14 días gratis?",
    a: "Te avisamos antes. Si te gusta, eliges un plan desde RD$ 1,500/mes. Si no, tu cuenta se pausa y tus datos se conservan 30 días por si vuelves.",
  },
  {
    q: "¿Funciona con la DGII y los NCF?",
    a: "Sí. Emite facturas de consumo (B02) y crédito fiscal (B01) con secuencias NCF, e imprime el formato válido con QR.",
  },
  {
    q: "¿Puedo usarlo desde mi celular?",
    a: "Sí. Funciona en celular, tableta y computadora con la misma cuenta y todo sincronizado en la nube.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Respaldos automáticos diarios, conexión cifrada (HTTPS) y cada usuario entra con su propia clave y permisos.",
  },
  {
    q: "¿Me ayudan a empezar?",
    a: "Sí. Te cargamos tus clientes y productos iniciales y te capacitamos por videollamada o WhatsApp, sin costo en todos los planes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-titulo" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-20">
      <div className="text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Dudas frecuentes</p>
        <h2 id="faq-titulo" className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          Preguntas que siempre nos hacen
        </h2>
      </div>
      <div className="mt-8 space-y-3">
        {FAQS.map((item, index) => {
          const open = openIndex === index;
          const buttonId = `faq-boton-${index}`;
          const panelId = `faq-panel-${index}`;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border transition ${
                open ? "border-blue-600 bg-blue-50/50" : "border-slate-200 bg-white"
              }`}
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-extrabold text-slate-900 md:text-base"
                >
                  {item.q}
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      open ? "rotate-45 bg-blue-700 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
              </h3>
              {open && (
                <p id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
