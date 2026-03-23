This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## CMS

Content is managed with [Prismic](https://guide-6.prismic.io).

---

## Project Structure

```
app/
├── page.tsx              # Home page — fetches and displays a random featured article
├── layout.tsx            # Root layout — global background color, fonts
├── articles/
│   └── page.tsx          # Articles page — lists all articles from Prismic
├── about/
│   └── page.tsx          # About page — fetches about_page document from Prismic
├── components/
│   ├── Sidebar.tsx       # Responsive sidebar nav (fixed on desktop, top bar on mobile)
│   ├── Header.tsx        # Site header
│   └── richTextComponents.tsx  # Custom renderers for Prismic rich text fields
slices/
├── Article/              # Slice for displaying a single article (title, image, body)
├── HeroBanner/           # Hero banner slice used on the home page
└── AboutText/            # Text slice used on the about page
customtypes/
├── home_page/            # Single custom type for the home page
├── articles_page/        # Single custom type for the articles listing page
├── about_page/           # Reusable custom type for the about page
└── article/              # Reusable custom type for individual article documents
```

---

## Tech Stack

- [Next.js 14](https://nextjs.org) — React framework with App Router
- [Prismic](https://prismic.io) — Headless CMS
- [Slice Machine](https://prismic.io/slice-machine) — Local slice and custom type editor
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
