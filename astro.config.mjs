// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://jobinterviews.fyi",
  integrations: [
    sitemap(),
    starlight({
      title: "JobInterviews.fyi",
      description:
        "AI-generated interview question sets for engineering and leadership roles, with practical guides and reusable prompts to help teams run structured, consistent, and higher-signal hiring interviews.",
      favicon: "/favicon.svg",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/eajr/jobinterviews-fyi",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Starter Guide", slug: "guides/starter" },
          ],
        },
        {
          label: "Engineering",
          items: [
            {
              label: "Software Engineers",
              collapsed: true,
              autogenerate: { directory: "eng-software-engineers" },
            },
            {
              label: "Management",
              collapsed: true,
              autogenerate: { directory: "eng-management" },
            },
            {
              label: "Other",
              collapsed: true,
              autogenerate: { directory: "eng-other" },
            },
          ],
        },
      ],
    }),
  ],
});
