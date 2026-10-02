# Landing de captación — VLYO ERP (prueba gratis 14 días)

Landing page de alta conversión en **React + Vite + Tailwind CSS + Lucide** para captar
correos de autónomos y pequeñas empresas de RD ofreciendo 14 días gratis del software
de facturación.

## Requisitos

- Node.js 18+ y npm

## Instalación y uso local

```powershell
# 1) Entrar al proyecto
cd landing-captacion

# 2) Instalar dependencias
npm install

# 3) Servidor de desarrollo (recarga en vivo)
npm run dev        # http://localhost:5173

# 4) Compilar para producción
npm run build      # genera dist/

# 5) Previsualizar el build
npm run preview
```

## Dependencias clave

```powershell
npm install -D tailwindcss@3 postcss autoprefixer   # estilos
npm install lucide-react                            # iconos
```

## Captura de leads

El formulario (`src/components/LeadCaptureForm.jsx`) valida el email en cliente y
maneja estados `idle → sending → success/error` (con `aria-live`).

- **Sin configurar nada:** modo demo — guarda en `localStorage` (`vlyo_leads`).
- **En producción:** crea un archivo `.env` (ver `.env.example`) con:
  ```
  VITE_LEAD_ENDPOINT=https://tu-api.com/api/leads
  ```
  Recibe `POST` JSON `{ email, source, created_at }`. Vale cualquier endpoint
  (tu API, Formspree, Make/Zapier webhook, etc.).

## Estructura

```
src/
├── main.jsx
├── index.css            # Tailwind + accesibilidad + reduced-motion
├── App.jsx              # ensambla las secciones
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx                  # CTA principal + formulario inline
    ├── TrustBar.jsx              # 4 datos de confianza
    ├── Beneficios.jsx            # 6 beneficios
    ├── ComoFunciona.jsx          # 3 pasos
    ├── Testimonios.jsx           # 3 testimonios (REEMPLAZAR por reales)
    ├── Precios.jsx               # 3 planes RD$
    ├── FAQ.jsx                   # acordeón accesible (6 preguntas)
    ├── LeadCaptureForm.jsx       # formulario reutilizable
    ├── CapturaFinal.jsx          # CTA de cierre (#empezar)
    └── Footer.jsx
```

## Despliegue (Vercel, gratis)

1. Sube el repo a GitHub.
2. Vercel → Add New → Project → Import (sin Root Directory, el proyecto ya es la raíz).
3. Opcional: Environment Variable `VITE_LEAD_ENDPOINT` con tu endpoint real.
4. Deploy.
