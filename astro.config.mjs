// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "JobInterviews.fyi",
      social: {
        github: "https://github.com/eajr/jobinterviews-fyi",
      },
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
