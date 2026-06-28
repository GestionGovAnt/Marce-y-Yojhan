# Portafolio Profesional — React + Vite

Portafolio de alto rendimiento construido con React 18 y Vite. Diseño oscuro con acento lima, totalmente responsive.

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## Estructura de archivos

```
src/
├── components/
│   ├── Navbar.jsx       # Navbar sticky con menú móvil
│   ├── Hero.jsx         # Sección hero con stats y CTAs
│   ├── Projects.jsx     # Galería de proyectos con filtros
│   ├── Services.jsx     # Servicios ofrecidos
│   ├── About.jsx        # Biografía y skills
│   ├── Testimonials.jsx # Testimonios de clientes
│   ├── Contact.jsx      # Formulario de contacto con validación
│   └── Footer.jsx       # Pie de página
├── data.js              # ← EDITA TU INFORMACIÓN AQUÍ
├── App.jsx              # Ensamblaje de secciones
├── index.css            # Tokens de diseño y estilos globales
└── main.jsx             # Entrada React
```

## Personalización rápida

### 1. Cambia tu información personal
Edita `src/data.js` — ahí están tus proyectos, habilidades, testimonios y datos de contacto.

### 2. Cambia los colores
En `src/index.css` edita las variables CSS en `:root`:
- `--accent` → Color de acento principal (actualmente lima #c8f542)
- `--bg` → Fondo principal
- `--text` → Color de texto

### 3. Conecta el formulario de contacto
En `src/components/Contact.jsx`, reemplaza el `setTimeout` con una llamada real:
- **EmailJS** (sin backend): https://www.emailjs.com
- **Resend** (con Vercel Functions): https://resend.com

### 4. Deploy en Vercel
```bash
npm run build
# Sube la carpeta dist/ a Vercel o conecta el repo en vercel.com
```

## Stack tecnológico
- **React 18** + **Vite 5**
- **CSS Variables** para theming (sin dependencias de CSS-in-JS)
- **Google Fonts** — Syne (display) + Inter (body)
- Totalmente responsive (mobile-first)
