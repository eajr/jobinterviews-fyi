# JobInterviews.fyi

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🚀 Project Structure

Inside of this Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

Under the `src/content/docs/` directory we have interview questions broken out by industry. `src/content/docs/tech` is where all tech / engineering related questions should be posted. If you are adding a new industry or department don't forget to add it to the sidebar in `astro.config.mjs`.

## CI/CD

This project deploys from the main branch automagically via [CloudFlare](https://www.cloudflare.com/) so if your PR gets merged you should see it reflected on the website in just a few minutes.

## LICENSE

Check the [License](LICENSE.md) file.
