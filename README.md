This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## How to make a component

### Where to make a component

1. Make a component in each feature folder
2. Put the component in `playground/<your name>/page.tsx` (DON’T call the component from page.tsx in each feature folder for now)
3. Make sure every component is working properly
4. Put those components together to make one page

### 🎨 Design 🎨
- Use defined colors (If you find a color which is not defined in tailwind.config, Let’s ask members)

### Changeable Data
- This data will vary depending on a response from outside of a component like server side, so Let’s make this data changeable (NOT use static data)

### Did you find something that doesn’t make sense?
- Let’s discuss before changing!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
