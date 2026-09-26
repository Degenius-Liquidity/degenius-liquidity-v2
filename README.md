# Degenius Liquidity

Public website for a UK futures day trader. The site is a journal and a toolkit, not a payout mill and not a prediction-market product.

Stack: React, Vite, TypeScript, Tailwind CSS v4.

## Local

Install dependencies, then start the Vite dev server from the project folder. Use the production build command to verify TypeScript and the bundle.

## Where the copy lives

- Brand, links, affiliate and risk copy: `src/data/site.ts`
- Toolkit cards: `src/data/toolkitItems.ts`
- Trading snapshot stats: `src/data/stats.ts`
- Journey timeline: `src/components/Journey.tsx`
- Hero: `src/components/Hero.tsx`
- About page: `src/pages/AboutPage.tsx`
- Journal entries: live Google Sheet via `src/content/journal/journalLoader.ts`. Sample markdown files are drafts and are not shown.
- Google Form URL for new entries: `journalFormUrl` in `src/data/site.ts` (leave empty to hide the button)
- Intent / brand rules: `PROJECT.md`

## Affiliate links

PlayBit classroom, PlayBit bots, Lucid and Bulenox are labelled as affiliate links. Lucid and Bulenox codes are `DEGENIUS`. The site does not claim Lucid auto-applies a code or a percent off. PlayBit bots are not described as a path to prop-firm payouts.

## Out of scope

The Dashboard is not part of this website.
