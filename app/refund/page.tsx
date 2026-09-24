import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import {
  PADDLE_BUYER_TERMS_URL,
  PADDLE_RESELLER_NOTICE,
  REFUND_DAYS,
  SITE_NAME,
  SUPPORT_EMAIL,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Refunds",
  description: `The refund policy for ${SITE_NAME}: the ${REFUND_DAYS}-day window, why source code delivered as a GitHub repository is different, and how a refund affects repository access.`,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Refunds"
      updated="24 September 2026"
      intro={`${SITE_NAME} is source code, and once you have it you have it. This page is written plainly so you know exactly where you stand before you pay.`}
    >
      <LegalSection heading={`The ${REFUND_DAYS}-day window`}>
        <p>
          You can request a refund within {REFUND_DAYS} days of your purchase.
          Email{" "}
          <a
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          with your Paddle order reference and a sentence about what went wrong.
          You do not need to justify the request at length, but telling us what
          did not work helps us fix it.
        </p>
        <p>
          Refunds are processed by Paddle.com Market Ltd, the merchant of
          record, and are paid back to your original payment method.
        </p>
      </LegalSection>

      <LegalSection heading="Why source code makes this different">
        <p>
          Most products can be sent back. Source code cannot — once you have
          cloned the repository, you keep a working copy whatever happens next,
          and we have no way to retrieve it. That is why the terms below are
          more specific than a normal returns policy.
        </p>
        <p>
          If you are not sure {SITE_NAME} is right for you, look at the live
          demo, read{" "}
          <Link
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href="/#not-included"
          >
            what is not included
          </Link>
          , and email us your questions before buying. We would rather answer
          ten questions than process a refund.
        </p>
      </LegalSection>

      <LegalSection heading="What we will refund">
        <LegalList
          items={[
            "You bought by mistake, or bought twice, and have not accepted the repository invitation.",
            "You never received your repository invitation and we could not get it to you.",
            `${SITE_NAME} does not do something this site says it does, and we cannot fix it for you.`,
            "You bought the wrong tier — tell us and we will refund and reissue, or invoice the difference.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="What we will usually decline">
        <LegalList
          items={[
            "You have cloned the repository and simply changed your mind, outside any right you have under consumer law.",
            "You want a feature that this site never said was included — check the 'what's not included' section before buying.",
            "A third-party service you need (Stripe, Neon, Resend, GitHub, your host) does not suit you, or changed its pricing.",
            "You are asking outside the window above, though we may still consider it.",
            "There are signs the licence has been redistributed or republished, which is a breach of the terms.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="What a refund does to your access">
        <p>When a refund is issued:</p>
        <LegalList
          items={[
            "Your access to the private GitHub repository is removed, and any pending invitation is cancelled.",
            "Your licence ends. You must stop using the code and delete the copies you hold, including clones, forks and branches, and any copy embedded in a project you have not shipped.",
            "Anything you had already deployed to production must be migrated off the code. Get in touch if you need a reasonable window to do that.",
            "You keep the code you wrote yourself. The licence ending applies to our code, not yours.",
          ]}
        />
        <p>
          We cannot technically enforce deletion of a repository you have
          already cloned. Honouring it is your obligation under the licence, and
          asking for a refund while continuing to use the code is a breach of
          the terms.
        </p>
      </LegalSection>

      <LegalSection heading="How the money reaches you">
        <p>{PADDLE_RESELLER_NOTICE}</p>
        <p>
          Paddle.com Market Ltd is the merchant of record, so Paddle issues the
          actual refund to your original payment method. We authorise it; Paddle
          processes it. How long it takes to appear depends on your bank or card
          issuer, and is usually several working days.
        </p>
        <p>
          You can also raise a refund request with Paddle directly under
          its{" "}
          <a
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={PADDLE_BUYER_TERMS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            checkout buyer terms
          </a>
          . Paddle may approve a refund at its own discretion, including outside
          the window on this page.
        </p>
      </LegalSection>

      <LegalSection heading="Your consumer rights">
        <p>
          Nothing on this page removes rights you have under the consumer law
          where you live. Where that law gives you a stronger right to a refund
          than this policy does, that law applies.
        </p>
        <p>
          If you are a consumer in the EU, EEA or UK, you have a statutory right
          to withdraw from your purchase within 14 days without giving a reason.
          For digital content such as {SITE_NAME}, that right ends once you
          start downloading or using it (for example, by accepting the
          repository invitation or cloning the repository), but only if you
          expressly agreed at checkout to receive the content before the 14 days
          are up and acknowledged that you would lose the right. If you did not
          give that agreement, you keep the full 14-day right. How this works
          for your purchase is set out in Paddle&rsquo;s{" "}
          <a
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={PADDLE_BUYER_TERMS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            checkout buyer terms
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
