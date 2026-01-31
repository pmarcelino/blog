import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Pedro Marcelino

I always invite AI to the table. This is the board log of that journey.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- LinkedIn: [@pmarcelino](https://www.linkedin.com/in/pmarcelino/)
- GitHub: [@pmarcelino](https://github.com/pmarcelino)
- Email: hi@howiusellms.blog

---

*This is the markdown-only version of howiusellms.blog. Visit [howiusellms.blog](https://howiusellms.blog) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
