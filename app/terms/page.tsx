import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import { TIERS } from "@/config/pricing";
import {
  BUSINESS_ADDRESS,
  DELIVERY_DELAY,
  JURISDICTION,
  LEGAL_ENTITY,
  PADDLE_BUYER_TERMS_URL,
  PADDLE_RESELLER_NOTICE,
  REFUND_DAYS,
  SITE_NAME,
  SUPPORT_EMAIL,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `The licence terms for ${SITE_NAME}, including what each tier allows, how the code is delivered, and what support covers.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and licence"
      updated="24 September 2026"
      intro={`These terms cover buying and using ${SITE_NAME}, a Next.js starter kit sold as a one-time licence by ${LEGAL_ENTITY} ("we", "us"). Buying a licence means you accept them.`}
    >
      <LegalSection heading="What you are buying">
        <p>
          You are buying a licence to use the {SITE_NAME} source code. You are
          not buying ownership of it. The licence is perpetual, worldwide,
          non-exclusive and non-transferable, and it is limited by the tier you
          choose. It is a one-time payment, not a subscription, and it does not
          renew.
        </p>
        <p>
          An &ldquo;End Product&rdquo; means an application, website or service
          that is substantially different in purpose and function from{" "}
          {SITE_NAME} itself, and in which {SITE_NAME} is a component rather
          than the thing being offered.
        </p>
      </LegalSection>

      <LegalSection heading="The two tiers">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            {TIERS[0].name}.
          </strong>{" "}
          Use {SITE_NAME} as the basis for one (1) End Product. That End Product
          may be commercial, may be deployed publicly, and may charge its own
          users. It may be worked on by a single developer, or by developers
          within a single organisation working on that End Product.
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            {TIERS[1].name}.
          </strong>{" "}
          Use {SITE_NAME} as the basis for an unlimited number of End Products,
          including End Products built for clients, by any number of developers
          within your organisation.
        </p>
        <p>
          A separate licence is required for each entity. Buying one does not
          grant rights to affiliates, subsidiaries or parent companies unless we
          agree otherwise in writing.
        </p>
      </LegalSection>

      <LegalSection heading="What you may not do">
        <p>Under either tier, you may not:</p>
        <LegalList
          items={[
            "Resell, sublicense, rent, lease, lend or otherwise redistribute the code, or any derivative work whose primary value is the code itself, modified or not.",
            "Publish the code, in whole or in substantial part, to any public repository, package registry, file-sharing service or template marketplace.",
            "Use it to create a product that competes with it — another starter kit, boilerplate, template or scaffolding tool.",
            "Share it with anyone outside your organisation, except contractors working on your End Products, who are bound by these same restrictions.",
            "Remove, obscure or alter any copyright or licence notice in the code.",
          ]}
        />
        <p>
          You own the code you write yourself and the End Products you build,
          subject to our rights in the underlying {SITE_NAME} code.
        </p>
      </LegalSection>

      <LegalSection heading="How the code is delivered">
        <p>
          {SITE_NAME} is delivered as an invitation to a private GitHub
          repository — there is no download link or zip file. After you pay, you
          send us the GitHub username that should receive access, and we send
          the invitation {DELIVERY_DELAY}. Delivery is manual, so it is not
          instant.
        </p>
        <p>
          Because delivery depends on a GitHub account, a purchase without a
          usable GitHub username cannot be fulfilled. If you cannot use GitHub,
          email us at{" "}
          <a
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          before buying.
        </p>
        <p>
          The licence survives repository access. If access to the repository
          ends for any reason other than a refund or a breach of these terms,
          any copy you have already cloned remains licensed to you under the
          tier you bought.
        </p>
      </LegalSection>

      <LegalSection heading="Payment and the merchant of record">
        <p>{PADDLE_RESELLER_NOTICE}</p>
        <p>
          Paddle.com Market Ltd is the merchant of record and processes
          payments. When you buy, your contract for the transaction is with
          Paddle, and Paddle handles billing, sales tax and VAT where they
          apply. Your receipt and invoice come from Paddle, not from us.
        </p>
        <p>
          Paddle&rsquo;s own{" "}
          <a
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={PADDLE_BUYER_TERMS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            checkout buyer terms
          </a>{" "}
          apply to the purchase alongside these terms. The licence terms on this
          page govern what you may do with the code.
        </p>
      </LegalSection>

      <LegalSection heading="What support covers">
        <p>
          Support means help with the code as delivered: setup problems, bugs in{" "}
          {SITE_NAME} itself, and questions about how a part of it works. Email{" "}
          <a
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
        <p>Support does not cover:</p>
        <LegalList
          items={[
            "Writing your End Product, or custom feature work.",
            "Debugging code you have changed or added.",
            "Third-party services — Stripe, Neon, Resend, GitHub, your host — or their pricing and outages.",
            "A guaranteed response time, fix time, or resolution.",
          ]}
        />
        <p>
          Updates, if any, are at our discretion and are covered by the same
          licence. This agreement does not entitle you to support, maintenance,
          future versions or any particular update schedule unless we state
          otherwise at the point of sale.
        </p>
      </LegalSection>

      <LegalSection heading="Refunds">
        <p>
          Refunds are available within {REFUND_DAYS} days of purchase, subject
          to conditions set out on the{" "}
          <Link
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href="/refund"
          >
            refunds page
          </Link>
          . Please read it before buying — the product is source code that is
          delivered immediately, which affects what can be refunded.
        </p>
      </LegalSection>

      <LegalSection heading="No warranty">
        <p>
          The code is provided &ldquo;as is&rdquo;, without warranty of any
          kind, express or implied, including the warranties of
          merchantability, fitness for a particular purpose, title and
          non-infringement.
        </p>
        <p>
          You are solely responsible for the security, legal compliance, data
          protection posture and operation of any End Product you build,
          including how it handles authentication, payments and personal data.
          {" "}
          {SITE_NAME} ships defaults, not guarantees — review them before you go
          to production.
        </p>
      </LegalSection>

      <LegalSection heading="Limit of liability">
        <p>
          To the extent the law allows, we are not liable for any claim, damages
          or other liability arising from the code or its use. Our total
          liability will not exceed the amount you paid for your licence.
        </p>
        <p>
          Nothing here removes rights you have under consumer law that cannot be
          waived by agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Termination">
        <p>
          This licence ends automatically if you breach these terms. If it ends,
          you must stop using the code and destroy your copies. End Products you
          already deployed may keep running, but you may not make further use of
          the code.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law and contact">
        <p>
          These terms are governed by the laws of {JURISDICTION}, without regard
          to conflict of law provisions.
        </p>
        <p>
          {LEGAL_ENTITY}
          <br />
          {BUSINESS_ADDRESS}
          <br />
          <a
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>
          We may update these terms for future purchases. The terms you agreed
          to at the time of your purchase continue to govern your licence.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
