# Portafolio colaborativo — React + Vite

Portafolio de dos perfiles profesionales. El contenido y la identidad visual se administran por separado del diseño; los datos faltantes se muestran como pendientes y los enlaces vacíos no generan botones.

## Inicio rápido

```bash
npm install
npm run dev
```

## Personalizar perfiles y proyectos

Edita únicamente [`src/data/team.js`](./src/data/team.js) para actualizar:

- La identidad descriptiva y provisional del portafolio (`brand`), sin asumir un nombre de empresa.
- Los perfiles en `team`, incluidos estudios, habilidades, experiencia, certificaciones, enlaces, fotografía y hoja de vida.
- Los proyectos asociados a cada perfil, con su resumen, tecnologías, funcionalidades, estado y enlaces.

La hoja de vida pública de Yojhan está en `public/docs/yojhan-arias-correa-cv.pdf`. Es una copia reconstruida sin número de identificación, fecha de nacimiento, teléfono ni correo personal; reemplaza ese archivo si preparas una versión pública nueva.

Usa `null` para los campos opcionales no disponibles y listas vacías (`[]`) cuando aún no haya elementos. El perfil de Marcela está preparado con todos los campos vacíos; solo se le atribuye el nombre indicado. Los tipos de los objetos están documentados con JSDoc y `validateTeamConfiguration()` comprueba la estructura y los destinos permitidos para los enlaces.

Las descripciones actuales de los proyectos de Yojhan se basan en la información disponible. Los enlaces y los detalles técnicos o estados no confirmados se dejan vacíos o identificados como pendientes de verificación.

## Comprobaciones y producción

```bash
npm run build
npm run preview
```

El formulario de contacto no se simula: cuando se configuren correos en los perfiles, se mostrarán enlaces `mailto:`. Para un formulario con envío real habrá que conectar un servicio o backend y gestionar sus credenciales fuera del frontend.

## Despliegue

Ejecuta `npm run build` y publica el directorio `dist/` en un alojamiento de sitios estáticos, como Vercel, Netlify o GitHub Pages.

## Tecnologías

- React 18
- Vite 5
- CSS con variables y media queries; no se agregan dependencias de UI.
