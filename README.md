# Pedro Marcelino's Personal Blog

A personal blog built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## About

This is my personal blog where I share thoughts on AI, LLMs, and practical applications.

**Website**: [howiusellms.blog](https://howiusellms.blog)

## Project Structure

```
├── public/               # Static assets (images, fonts, favicon)
│   ├── assets/          # Images for blog posts
│   └── fonts/           # Web fonts
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts in Markdown format
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Project dependencies
```

## Commands

| Command         | Action                                      |
| --------------- | ------------------------------------------- |
| `npm install`   | Install dependencies                        |
| `npm run dev`   | Start local dev server at localhost:4321    |
| `npm run build` | Build the production site to ./dist/        |
| `npm run preview` | Preview the build locally                 |

## Deployment

This site is deployed on Vercel. Push to the `main` branch to trigger automatic deployments.

## Credits

Built with the [AstroPaper](https://astro-paper.pages.dev/) theme.
