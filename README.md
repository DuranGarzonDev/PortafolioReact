# Portafolio de Juan David Durán Garzón

Portafolio profesional construido con React, Vite y Framer Motion. El diseño prioriza contenido, accesibilidad, rendimiento y una estética editorial propia.

## Ejecutar en local

Necesitas Node.js 20 o superior.

```bash
pnpm install
pnpm dev
```

Vite mostrará una dirección local, normalmente `http://localhost:5173`.

## Dónde editar

- `src/constants/data.js`: textos, datos personales, enlaces, proyectos, trayectoria y stack. Es el archivo principal para actualizar contenido.
- `src/index.css`: colores, tipografía, espacios, responsive y apariencia visual.
- `src/components/`: estructura e interacción de cada sección.
- `public/images/Hero.png`: fotografía principal. Conserva el nombre o cambia `profile.portrait` en `data.js`.
- `index.html`: título, descripción y metadatos para buscadores y redes sociales.

Cada proyecto tiene una parte compartida (`projects`) y textos por idioma (`content.es.projects.items`). El valor `id` debe coincidir en ambos lugares.

## Comandos

```bash
pnpm dev       # servidor local
pnpm lint      # revisión estática
pnpm build     # build de producción en /dist
pnpm preview   # previsualizar el build
```

## Actualizar el sitio en Vercel

### Opción recomendada: despliegue automático desde GitHub

1. Entra en Vercel y abre el proyecto conectado a `DuranGarzonDev/PortafolioReact`.
2. En **Settings → Git**, confirma que `Production Branch` sea `main`.
3. En **Settings → Build & Development Settings**, usa:
   - Framework Preset: `Vite`
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install --frozen-lockfile`
4. Sube los cambios a GitHub:

```bash
git add .
git commit -m "Rediseñar portafolio y ampliar casos de estudio"
git push origin main
```

Vercel iniciará un deployment automáticamente. Revisa el build y luego abre el dominio de producción.

### Importar el proyecto por primera vez

1. En Vercel selecciona **Add New → Project**.
2. Importa `DuranGarzonDev/PortafolioReact` desde GitHub.
3. Vercel detectará Vite. Confirma `pnpm build` y `dist`.
4. Selecciona **Deploy**.

### Despliegue manual con Vercel CLI

```bash
pnpm dlx vercel login
pnpm dlx vercel
pnpm dlx vercel --prod
```

No guardes tokens ni secretos en el repositorio. Si en el futuro agregas un formulario o servicios externos, configura sus variables en **Settings → Environment Variables**.

## Criterios del diseño

- Sin placeholders externos, emojis decorativos ni ilustraciones genéricas.
- Navegación por teclado, enlace para saltar contenido y soporte para `prefers-reduced-motion`.
- Tema claro/oscuro e idioma persistidos en `localStorage`.
- Casos de estudio en panel lateral para conservar contexto sin perder la posición de lectura.
- Responsive para móvil, tableta y escritorio.
