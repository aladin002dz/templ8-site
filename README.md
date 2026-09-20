# templ8-site

Sales storefront for Templ8, deployed to `templ8.mahfoudh.dev`.

Next.js App Router + TypeScript + Tailwind v4. No auth, no database, no API
routes — every page is statically prerendered. Checkout is Paddle.js overlay,
client-side only.

```bash
npm install
cp .env.example .env.local   # then fill in your Paddle sandbox values
npm run dev
```

## Source of facts

Product claims on the homepage are drawn from `README.md` and `LICENSE.md` in
the Templ8 repository itself. **Do not add features, benchmarks, testimonials,
download counts or logos that are not stated there.** The two licence tiers
mirror LICENSE.md sections 1.1 and 1.2, and the terms page mirrors sections 2
through 10.

## The production gate

`scripts/check-production.mjs` runs automatically before every build
(`prebuild`). It fails the build when:

1. A `[TODO: ...]` marker remains anywhere in `app/`, `components/`, `config/`
   or `lib/`.
2. A pricing tier still carries a `TIER_1_PRICE` / `TIER_2_PRICE` placeholder.
3. A required `NEXT_PUBLIC_PADDLE_*` / `NEXT_PUBLIC_SITE_URL` variable is
   missing.
4. `NEXT_PUBLIC_PADDLE_ENV` is `sandbox`.

It is **enforced** when `VERCEL_ENV=production` — i.e. on a real production
deploy. Local builds and Vercel preview deploys print the same report but do
not fail, so the site stays buildable while values are still being filled in.

Check your readiness at any time:

```bash
npm run check:production
```

To exempt a line that legitimately contains the marker token, put
`todo-check-ignore` in a comment on it or on the line above.

## Prices

All prices live in `config/pricing.ts` and nowhere else. Replace each `amount`
placeholder with an integer in the major currency unit (`149` means 149 USD,
not 1.49). Paddle price IDs come from the environment so sandbox and live can
differ; never hardcode one.

## Secrets

Every variable this site reads is `NEXT_PUBLIC_` and therefore visible in the
browser. That is correct — the Paddle client token and price IDs are
publishable values. The Paddle **API key** and **webhook secret** are
server-side secrets; this site has no server-side Paddle calls and no webhook
handler, so they must never be added to this repository.
