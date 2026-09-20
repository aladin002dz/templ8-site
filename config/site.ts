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
export const SUPPORT_EMAIL = "[TODO: support email, e.g. support@mahfoudh.dev]";

/** The legal person selling the licence. Appears in /terms and /privacy. */
export const LEGAL_ENTITY = "[TODO: legal entity or trading name]";

/** Governing law for /terms. Mirrors [JURISDICTION] in the Templ8 LICENSE.md. */
export const JURISDICTION = "[TODO: governing law jurisdiction]";

/** Required on invoices/legal pages in many jurisdictions. Confirm your own. */
export const BUSINESS_ADDRESS = "[TODO: business address, if required]";

/** Public demo of the running starter kit. */
export const DEMO_URL = "[TODO: live demo URL]";

/**
 * How long after purchase the GitHub repository invitation is sent.
 * Buyers see this before they pay, so state the realistic worst case.
 */
export const DELIVERY_DELAY = "[TODO: expected delivery delay, e.g. within 24 hours]";

/** Target first-response time, shown on /contact. */
export const SUPPORT_RESPONSE_TIME =
  "[TODO: expected support response time, e.g. 2 business days]";

/**
 * Refund window in days.
 *
 * TODO(owner): verify this against Paddle's current refund requirements before
 * launch — Paddle is the merchant of record and its buyer terms govern what a
 * buyer can claim regardless of what is written here. Paddle may also approve a
 * refund at its own discretion outside this window.
 */
export const REFUND_DAYS = 14;

/** Paddle's own buyer-facing checkout terms. Linked from /terms and /refund. */
export const PADDLE_BUYER_TERMS_URL = "https://www.paddle.com/legal/checkout-buyer-terms";

export const MERCHANT_OF_RECORD =
  "Paddle.com Market Ltd is the merchant of record and processes payments";

export const FOOTER_LINKS = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/refund", label: "Refunds" },
  { href: "/contact", label: "Contact" },
] as const;
