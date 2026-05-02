This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This app lives in the **`whenevr`** folder of the repository (not the repo root).

1. Import the Git repo in [Vercel](https://vercel.com/new).
2. Open **Project → Settings → General → Root Directory** and set it to **`whenevr`** (then save).
3. Use the default **Framework Preset: Next.js**, **Build Command:** `next build`, **Install Command:** `npm install`.
4. Redeploy.

If Root Directory stays at `.`, Vercel will not find `next` in `package.json` and the deployment can show **404 NOT_FOUND** or build errors.

From the monorepo root you can run `npm install` and `npm run dev` / `npm run build` (see root `package.json` workspaces).

More detail: [Next.js on Vercel](https://nextjs.org/docs/app/building-your-application/deploying).
