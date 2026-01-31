import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid(),
    starlight({
      title: "Aether Lens",
      logo: {
        src: "./src/assets/logo-a-156.png",
      },
      customCss: ["./src/styles/starlight.css"],
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
      },
      social: {
        github: "https://github.com/aether-platform",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/images/og-image.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "/images/og-image.png",
          },
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          translations: { ja: "はじめに" },
          items: [
            {
              label: "Vibecoding Guide",
              translations: { ja: "バイブコーディング・ガイド" },
              link: "/ja/guide/vibecoding/",
            },
            {
              label: "Local DevLoop",
              translations: { ja: "Local DevLoop の加速" },
              link: "/ja/guide/dev-loop/",
            },
          ],
        },
        {
          label: "Technology",
          translations: { ja: "技術仕様" },
          items: [
            {
              label: "AI Agent Architecture",
              translations: { ja: "AIエージェント構成" },
              link: "/ja/technology/ai-vibecoding/",
            },
          ],
        },
      ],
      components: {
        Hero: "./src/components/landing/CustomHero.astro",
      },
    }),
  ],
});
