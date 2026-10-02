import { useId, useState } from "react";
import { Loader2, MailCheck, AlertCircle, ArrowRight } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || "";

function validateEmail(value) {
  const email = value.trim();
  if (!email) return "Escribe tu correo electrónico.";
  if (email.length > 120) return "Ese correo es demasiado largo.";
  if (!EMAIL_RE.test(email)) return "Revisa el formato: ejemplo@correo.com.";
  return "";
}

/**
 * Formulario reutilizable de captación de leads.
 * - Valida el email en cliente (vacío / formato / longitud).
 * - Estados: idle | sending | success | error (con aria-live).
 * - Si VITE_LEAD_ENDPOINT está definido hace POST JSON { email, source, created_at };
 *   si no, trabaja en modo demo (guarda en localStorage y simula latencia).
 */
export default function LeadCaptureForm({ source = "hero", layout = "inline", dark = false }) {
  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");
  const inputId = useId();
  const statusId = useId();

  const isInline = layout === "inline";

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    const error = validateEmail(email);
    setFieldError(error);
    setServerError("");
    if (error) return;

    const payload = {
      email: email.trim().toLowerCase(),
      source,
      created_at: new Date().toISOString(),
    };

    setStatus("sending");
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          throw new Error(`El servidor respondió ${res.status}. Inténtalo de nuevo.`);
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900));
        const stored = JSON.parse(localStorage.getItem("vlyo_leads") || "[]");
        if (!stored.some((lead) => lead.email === payload.email)) {
          stored.push(payload);
          localStorage.setItem("vlyo_leads", JSON.stringify(stored));
        }
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "No pudimos registrarte. Inténtalo de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`flex items-start gap-3 rounded-2xl border p-4 ${
          dark ? "border-emerald-400/40 bg-emerald-400/10" : "border-emerald-200 bg-emerald-50"
        }`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            dark ? "bg-emerald-400 text-blue-950" : "bg-emerald-500 text-white"
          }`}
        >
          <MailCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className={`font-bold ${dark ? "text-white" : "text-emerald-900"}`}>¡Listo! Revisa tu correo.</p>
          <p className={`mt-1 text-sm ${dark ? "text-blue-100" : "text-emerald-800"}`}>
            Te enviamos el acceso a tus <strong>14 días gratis</strong> a <strong>{email.trim()}</strong>.
            Si no lo ves, revisa spam.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-describedby={statusId}>
      <div className={isInline ? "flex flex-col gap-3 sm:flex-row" : "flex flex-col gap-3"}>
        <div className="flex-1">
          <label htmlFor={inputId} className="sr-only">
            Correo electrónico
          </label>
          <input
            id={inputId}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="tu@correo.com"
            value={email}
            disabled={status === "sending"}
            onChange={(event) => {
              setEmail(event.target.value);
              if (fieldError) setFieldError("");
              if (serverError) setServerError("");
            }}
            aria-invalid={Boolean(fieldError) || undefined}
            aria-describedby={fieldError ? `${inputId}-error` : undefined}
            className={`w-full rounded-xl border px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 disabled:opacity-60 ${
              fieldError
                ? "border-red-500 focus:ring-red-500"
                : "border-slate-300 focus:border-blue-600 focus:ring-blue-600"
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Enviando…
            </>
          ) : (
            <>
              Probar 14 días gratis <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      <div id={statusId} aria-live="polite" className="mt-2 min-h-[1.5rem] text-sm">
        {fieldError && (
          <p id={`${inputId}-error`} role="alert" className={`flex items-center gap-1.5 font-medium ${dark ? "text-red-300" : "text-red-600"}`}>
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> {fieldError}
          </p>
        )}
        {!fieldError && status === "error" && (
          <p role="alert" className={`flex items-center gap-1.5 font-medium ${dark ? "text-red-300" : "text-red-600"}`}>
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> {serverError}
          </p>
        )}
        {!fieldError && status !== "error" && (
          <p className={dark ? "text-blue-200" : "text-slate-500"}>
            Sin tarjeta · Cancela cuando quieras · Soporte por WhatsApp
          </p>
        )}
      </div>
    </form>
  );
}
