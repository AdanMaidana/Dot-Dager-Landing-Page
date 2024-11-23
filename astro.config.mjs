import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://adanmaidana.github.io/Dot-Dager-Landing-Page/',
  buildOptions: {
    site: 'https://adanmaidana.github.io/Dot-Dager-Landing-Page/', 
    base: '/Dot-Dager-Landing-Page/', 
  },
  integrations: [tailwind()]
});