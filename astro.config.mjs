// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://ukesjtu.github.io",
  base: import.meta.env.PROD ? "/learn-astro" : "/",
  integrations: [preact()]
});