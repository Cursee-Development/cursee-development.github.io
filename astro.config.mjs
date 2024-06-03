import {defineConfig} from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://cursee-development.github.io/",
  base: '/cursee-development',
  integrations: [react()]
});