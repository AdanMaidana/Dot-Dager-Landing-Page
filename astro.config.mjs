import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://adanmaidana.github.io/Dot-Dager-Landing-Page/',
  buildOptions: {
    site: 'https://adanmaidana.github.io/Dot-Dager-Landing-Page/', // Asegúrate de poner la URL correcta
    base: '/Dot-Dager-Landing-Page/',  // Añades la ruta del subdirectorio de GitHub Pages
  },
  integrations: [tailwind()]
});