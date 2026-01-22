// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://ukesjtu.github.io",
    base: import.meta.env.PROD ? "/learn-astro" : "/"
});
