import Link from "next/link";
import { BuyButton } from "@/components/buy-button";
import { LICENCE_RESTRICTIONS, TIERS, formatAmount } from "@/config/pricing";
import {
  DELIVERY_DELAY,
  DEMO_URL,
  MERCHANT_OF_RECORD,
  REFUND_DAYS,
  SITE_NAME,
  SUPPORT_EMAIL,
} from "@/config/site";

/**
 * Every factual claim below is traceable to README.md or LICENSE.md in the
 * Templ8 repository. Do not add features, metrics, testimonials or customer
 * counts that are not stated there.
 */

const INCLUDED = [
  {
    title: "Next.js App Router",
    body: "Next.js 16 with Turbopack-powered dev and build, React 19, Server Components and Server Actions.",
  },
  {
    title: "Authentication",
    body: "Better Auth with email and password (scrypt-hashed), Google and GitHub OAuth, email verification, password reset, and role-based access control across user, moderator and admin roles.",
  },
  {
    title: "Subscription billing",
    body: "Stripe Checkout and the customer billing portal, with pre-configured Free, Pro and Enterprise tiers and an idempotent webhook handler covering trials, dunning and cancellation.",
  },
  {
    title: "Database and ORM",
    body: "PostgreSQL over @neondatabase/serverless, with a type-safe Drizzle schema and automated migrations.",
  },
  {
    title: "Internationalisation",
    body: "next-intl with English, French and Arabic, including native right-to-left layout.",
  },
  {
    title: "UI and dark mode",
    body: "Tailwind CSS v4 and shadcn/ui components in the new-york style, with light, dark and system theme switching via next-themes.",
  },
  {
    title: "Route protection",
    body: "An auth gate in proxy.ts plus requireSession() and requireRole() guards in server layouts, with rate limiting on sign-in, registration, password reset and feedback.",
  },
  {
    title: "Admin portal",
    body: "A protected dashboard for admin and moderator roles with user metrics, directory search, role management and suspension controls.",
  },
  {
    title: "Tests and quality gates",
    body: "Vitest unit and integration tests, Playwright end-to-end specs, and Husky pre-commit and pre-push hooks running tsc, ESLint and the test suites.",
  },
];

const STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Better Auth",
  "Stripe",
  "Drizzle ORM",
  "Neon PostgreSQL",
  "Tailwind CSS v4",
  "shadcn/ui",
  "next-intl",
  "next-themes",
  "Resend + React Email",
  "Vitest",
  "Playwright",
  "Husky",
];

const NOT_INCLUDED = [
  {
    title: "Third-party accounts and hosting",
    body: "You bring your own Neon (or Postgres), Stripe, Resend and OAuth credentials, and your own hosting. Templ8 is the code, not the services it talks to.",
  },
  {
    title: "Guaranteed support or updates",
    body: "Updates are provided at the author's discretion. The licence does not entitle you to support, maintenance, future versions or any particular update schedule unless stated at the point of sale.",
  },
  {
    title: "Exhaustive test coverage",
    body: "The Vitest and Playwright suites cover the critical paths. They are a foundation to build on, not exhaustive coverage.",
  },
  {
    title: "Production-grade rate limiting",
    body: "Rate limiting keeps its counters in process memory. That is fine for a single server, but on serverless each instance counts separately — swap in Upstash Redis or similar before you rely on it.",
  },
  {
    title: "Legal advice",
    body: "The kit ships a commercial licence template as a starting point. Fill in your jurisdiction and support email, and have a lawyer in your jurisdiction review it before you sell anything built on it.",
  },
  {
    title: "Resale rights",
    body: "You cannot resell, republish or redistribute Templ8 itself, or use it to build a competing starter kit or template.",
  },
];

const FAQ = [
  {
    q: "Can I use Templ8 for client work?",
    a: "Yes, on the Unlimited Applications licence. It covers an unlimited number of End Products, including products you build for clients, and use by any number of developers within your organisation. The Single Application licence covers one End Product only.",
  },
  {
    q: "Can I resell or republish the code?",
    a: "No. You may not resell, sublicense, rent, lend or redistribute Templ8 itself, publish it to a public repository or template marketplace, or use it to build a competing starter kit, boilerplate or template. You own the code you write on top of it.",
  },
  {
    q: "Is the licence perpetual?",
    a: "Yes. It is a perpetual, worldwide, non-exclusive, non-transferable licence, limited by the tier you buy. The version you receive stays yours. It is a one-time payment, not a subscription.",
  },
  {
    q: "Do I get updates?",
    a: "Updates, if any, are provided at the author's discretion and are covered by the same licence. There is no guaranteed update schedule.",
  },
  {
    q: "What do I need to run it?",
    a: "Node.js and pnpm, a Postgres database (Neon is pre-configured), and API credentials for the services you switch on — Stripe for billing, Resend for transactional email, and Google or GitHub if you want social sign-in.",
  },
  {
    q: "Who handles the payment?",
    a: `${MERCHANT_OF_RECORD}, including sales tax and VAT where it applies. Your receipt and invoice come from Paddle.`,
  },
  {
    q: "What if I want a refund?",
    a: `You can request a refund within ${REFUND_DAYS} days of purchase, subject to the conditions on the refunds page. Refunds are processed by Paddle, as merchant of record. Please read that page before buying: access is a private GitHub repository sent ${DELIVERY_DELAY}, and once you have cloned it the copy cannot be taken back.`,
  },
];

function SectionHeading({
  id,
  children,
  lead,
}: {
  id: string;
  children: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="mb-8">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
      >
        {children}
      </h2>
      {lead && (
        <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400">
          {lead}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl dark:text-slate-100">
          Launch your SaaS in days, not months.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {SITE_NAME} is a production-ready Next.js starter kit with
          authentication, subscription billing, a serverless Postgres database,
          role-based administration, dark mode, multi-language
          internationalisation and automated testing. Buy it once, own the
          source.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            See pricing
          </Link>
          <a
            href={DEMO_URL}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            View the live demo
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">
          Questions before you buy? Email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>

      {/* What's included */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionHeading
          id="included"
          lead="Everything below is in the repository you get access to."
        >
          What&rsquo;s included
        </SectionHeading>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {INCLUDED.map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionHeading
          id="stack"
          lead="No proprietary abstractions. If you know these tools, you already know the codebase."
        >
          The stack
        </SectionHeading>

        <ul className="flex flex-wrap gap-2">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* What's NOT included */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionHeading
          id="not-included"
          lead="Worth knowing before you pay, not after."
        >
          What&rsquo;s <span className="underline decoration-2 underline-offset-4">not</span> included
        </SectionHeading>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {NOT_INCLUDED.map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionHeading
          id="pricing"
          lead="One-time payment. No subscription, no seat counting, no renewal."
        >
          Pricing
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {TIERS.map((tier, index) => {
            const emphasis = tier.id === "unlimited";

            return (
              <div
                key={tier.id}
                className={[
                  "flex flex-col rounded-xl border p-6",
                  emphasis
                    ? "border-slate-900 dark:border-slate-100"
                    : "border-slate-200 dark:border-slate-800",
                ].join(" ")}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {tier.summary}
                </p>

                <p className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  {formatAmount(tier)}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                  {tier.currency} · one-time payment · taxes calculated at
                  checkout
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.includes.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-slate-400">
                        &#8212;
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <BuyButton tier={tier} emphasis={index === 1} />
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Both licences exclude
          </h3>
          <ul className="mt-3 space-y-2">
            {LICENCE_RESTRICTIONS.map((restriction) => (
              <li
                key={restriction}
                className="text-sm text-slate-600 dark:text-slate-400"
              >
                {restriction}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Full detail in the{" "}
            <Link
              href="/terms"
              className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            >
              licence terms
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Delivery */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionHeading
          id="delivery"
          lead="Templ8 is delivered as a private GitHub repository, not a zip file."
        >
          How delivery works
        </SectionHeading>

        <ol className="space-y-6">
          {[
            {
              step: "1",
              title: "You buy through Paddle",
              body: `${MERCHANT_OF_RECORD}. Checkout opens in an overlay on this page and Paddle emails you a receipt.`,
            },
            {
              step: "2",
              title: "You send your GitHub username",
              body: "After payment, reply to your Paddle receipt or email support with the GitHub username that should receive access. The invitation cannot be sent without it.",
            },
            {
              step: "3",
              title: "You get a repository invitation",
              body: `The invitation to the private repository is sent ${DELIVERY_DELAY}. GitHub emails you directly; accept it and clone the repository.`,
            },
            {
              step: "4",
              title: "You keep the code",
              body: "The licence is perpetual. If repository access ever ends, any copy you have already cloned remains licensed to you under the tier you bought.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300"
              >
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">
          Delivery is manual, so it is not instant. If your invitation has not
          arrived in the window above, email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          and it will be sorted out.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionHeading id="faq">Questions</SectionHeading>

        <dl className="divide-y divide-slate-200 dark:divide-slate-800">
          {FAQ.map((item) => (
            <div key={item.q} className="py-5 first:pt-0">
              <dt className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.q}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">
          Anything else, email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
