import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";
import {
  BUSINESS_ADDRESS,
  LEGAL_ENTITY,
  SITE_NAME,
  SUPPORT_EMAIL,
  SUPPORT_RESPONSE_TIME,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `How to reach support for ${SITE_NAME}, and how long a reply takes.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      intro="One inbox, answered by the person who wrote the code. There is no ticket system and no chatbot."
    >
      <LegalSection heading="Email">
        <p>
          <a
            className="text-base font-semibold text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>
          Expected first response: {SUPPORT_RESPONSE_TIME}. This is a target,
          not a guarantee — replies may take longer at weekends and over public
          holidays.
        </p>
      </LegalSection>

      <LegalSection heading="What to include">
        <p>
          To get a useful answer on the first reply, include whichever of these
          apply:
        </p>
        <ul className="space-y-2 pl-5">
          <li className="list-disc">
            Your Paddle order reference, if you have already bought.
          </li>
          <li className="list-disc">
            Your GitHub username, if you are waiting on a repository
            invitation.
          </li>
          <li className="list-disc">
            The exact error message, and what you ran to get it.
          </li>
          <li className="list-disc">
            Your Node version, package manager and operating system, for setup
            problems.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Before you buy">
        <p>
          Pre-sales questions are welcome, and asking one costs you nothing. If
          you are unsure whether {SITE_NAME} fits what you are building, send
          the details and you will get a straight answer — including
          &ldquo;no&rdquo; if the honest answer is no.
        </p>
      </LegalSection>

      <LegalSection heading="What support covers">
        <p>
          Support covers setup, bugs in {SITE_NAME} as delivered, and questions
          about how the code works. It does not cover building your product for
          you, debugging code you have changed, or third-party services. The
          full scope is in the{" "}
          <Link
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href="/terms"
          >
            terms
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Billing and invoices">
        <p>
          Paddle.com Market Ltd is the merchant of record. For invoice
          corrections, VAT numbers and payment queries, reply to the receipt
          Paddle sent you — Paddle can resolve those faster than we can. For
          refunds, see the{" "}
          <Link
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href="/refund"
          >
            refunds page
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Postal address">
        <p>
          {LEGAL_ENTITY}
          <br />
          {BUSINESS_ADDRESS}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
