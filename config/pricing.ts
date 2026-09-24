/**
 * Single source of truth for everything the storefront charges for.
 *
 * Nothing else in this codebase may hardcode a price, a currency or a Paddle
 * price ID. The pricing section renders exactly the values below.
 *
 * TO GO LIVE: replace the `amount` placeholders with real integers, in the
 * MAJOR currency unit (e.g. 149 means 149 USD, not 1.49). `scripts/check-production.mjs`
 * fails the build if the placeholders survive into a production deploy.
 */

/** Placeholder sentinels. The build gate rejects these outside development. */
export const TIER_1_PRICE = "TIER_1_PRICE" as const;
export const TIER_2_PRICE = "TIER_2_PRICE" as const;

export type PlaceholderAmount = typeof TIER_1_PRICE | typeof TIER_2_PRICE;

export type Tier = {
  /** Stable internal key. Not shown to buyers. */
  id: "single" | "unlimited";
  /** Shown to buyers. Must match the licence tier names in /terms. */
  name: string;
  /** One line under the tier name. */
  summary: string;
  /** Price in the major unit of `currency`, or a placeholder until set. */
  amount: number | PlaceholderAmount;
  /** ISO 4217. Paddle localises the amount the buyer actually pays at checkout. */
  currency: string;
  /**
   * Paddle price ID, from the environment so sandbox and live can differ.
   * Set these in Vercel; never hardcode a price ID here.
   */
  paddlePriceId: string | undefined;
  /** Grounded in LICENSE.md sections 1.1 and 1.2 of the Templ8 repository. */
  includes: string[];
};

export const TIERS: Tier[] = [
  {
    id: "single",
    name: "Single Application",
    summary: "One product, built by you or your team.",
    amount: 79,
    currency: "USD",
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ID_TIER_1,
    includes: [
      "Use Templ8 as the basis for one (1) End Product",
      "That End Product may be commercial, public, and charge its own users",
      "Use by a single developer, or by developers within one organisation working on that End Product",
      "Full source code, via a private GitHub repository invitation",
      "Perpetual licence — the version you receive stays yours",
    ],
  },
  {
    id: "unlimited",
    name: "Unlimited Applications",
    summary: "Unlimited products, including client work.",
    amount: 149,
    currency: "USD",
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ID_TIER_2,
    includes: [
      "Use Templ8 as the basis for an unlimited number of End Products",
      "Includes End Products built for clients",
      "Use by any number of developers within your organisation",
      "Full source code, via a private GitHub repository invitation",
      "Perpetual licence — the version you receive stays yours",
    ],
  },
];

/** Restrictions that apply to both tiers. From LICENSE.md section 2. */
export const LICENCE_RESTRICTIONS = [
  "No reselling, sublicensing, renting or redistributing Templ8 itself",
  "No publishing it to a public repository, package registry or template marketplace",
  "No using it to build a competing starter kit, boilerplate or template",
  "A separate licence is required for each entity",
];

export function isPlaceholderAmount(
  amount: Tier["amount"],
): amount is PlaceholderAmount {
  return amount === TIER_1_PRICE || amount === TIER_2_PRICE;
}

/**
 * Renders the tier price. While an amount is still a placeholder this returns a
 * visible marker, so an unset price is impossible to miss in development — and
 * is caught by the build gate before it can ever reach production.
 */
export function formatAmount(tier: Tier): string {
  if (isPlaceholderAmount(tier.amount)) {
    // todo-check-ignore — generates a marker, is not itself an unresolved one
    return `[TODO: set ${tier.amount} in config/pricing.ts]`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: tier.currency,
    // Whole-unit prices read better without trailing zeros; decimal prices keep them.
    minimumFractionDigits: Number.isInteger(tier.amount) ? 0 : 2,
  }).format(tier.amount);
}
