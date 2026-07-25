# Dalron J. Robertson

Source code for [dalronjrobertson.com](https://dalronjrobertson.com), the personal website of Dalron J. Robertson.

Dalron is a biomedical researcher, software engineer, PharmD/MBA candidate, pharmacy intern at UChicago Medicine, and founder of NaS. The site presents his work in precision medicine, translational science, clinical pharmacy, writing, and community development.

## Site structure

- `/` presents Dalron's professional identity, selected work, current focus, and contact links.
- `/about` includes a concise biography, key milestones, résumé, and curriculum vitae.
- `/work` covers NaS, research, the Robertson Foundation, creative projects, and video.
- `/writing` collects published books and original scientific work.
- `/creative-studio/*` contains selected photo galleries.

## Development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The photo galleries use public AWS S3 buckets configured through Netlify environment variables. When those variables are unavailable locally, the site uses local preview images and the gallery routes render safely without remote content.

## Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- Netlify
- AWS S3 for photo-gallery assets

## Deployment

The site is deployed through Netlify from its connected GitHub repository.
