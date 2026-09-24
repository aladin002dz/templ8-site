/**
 * Site-wide constants.
 *
 * Every marker below is a value the owner must supply before launch.
 * `scripts/check-production.mjs` fails a production build while any remain.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://templ8.mahfoudh.dev";

export const SITE_NAME = "Templ8";

export const SITE_TAGLINE = "Production-ready Next.js SaaS starter kit";

export const SITE_DESCRIPTION =
  "Templ8 is a Next.js SaaS starter kit with authentication, subscription billing, a serverless Postgres database, role-based administration, dark mode, internationalisation and automated tests. One-time licence, full source code.";

/** Shown in the footer on every page, and in the homepage hero. */
export const SUPPORT_EMAIL = "hello@mahfoudh.dev";

/** The legal person selling the licence. Appears in /terms and /privacy. */
export const LEGAL_ENTITY = "Mahfoudh Arous";

/** How the seller is described next to LEGAL_ENTITY in /terms and /privacy. */
export const LEGAL_ENTITY_DESCRIPTION = "an individual based in Algeria";

/** Governing law for /terms. Mirrors [JURISDICTION] in the Templ8 LICENSE.md. */
export const JURISDICTION = "Algeria";

/** Required on invoices/legal pages in many jurisdictions. Confirm your own. */
export const BUSINESS_ADDRESS = "Chlef, Algeria";

/** Public demo of the running starter kit. */
export const DEMO_URL = "https://templ8-two.vercel.app";

/**
 * How long after purchase the GitHub repository invitation is sent.
 * Buyers see this before they pay, so state the realistic worst case.
 */
export const DELIVERY_DELAY = "within 24 hours of receiving your GitHub username";

/** Target first-response time, shown on /contact. */
export const SUPPORT_RESPONSE_TIME = "within 48 hours";

/**
 * Refund window in days.
 *
 * Matches the 14-day window in Paddle's buyer refund policy
 * (https://www.paddle.com/legal/refund-policy). Paddle is the merchant of
 * record and its buyer terms govern what a buyer can claim regardless of what
 * is written here; Paddle may also approve a refund outside this window.
 */
export const REFUND_DAYS = 14;

/** Paddle's own buyer-facing checkout terms. Linked from /terms and /refund. */
export const PADDLE_BUYER_TERMS_URL = "https://www.paddle.com/legal/buyer-terms";

export const MERCHANT_OF_RECORD =
  "Paddle.com Market Ltd is the merchant of record and processes payments";

/**
 * Reseller disclosure, following the wording in Paddle's seller handbook
 * (https://www.paddle.com/seller-guides/seller-handbook). The last sentence is
 * adapted so it does not contradict /contact, where product support is ours.
 */
export const PADDLE_RESELLER_NOTICE =
  "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle handles payment, invoicing, sales tax and refund processing; product support is provided by us.";

export const FOOTER_LINKS = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/refund", label: "Refunds" },
  { href: "/contact", label: "Contact" },
] as const;
