import type { Metadata } from "next";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import {
  BUSINESS_ADDRESS,
  LEGAL_ENTITY,
  PADDLE_BUYER_TERMS_URL,
  SITE_NAME,
  SUPPORT_EMAIL,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `What ${SITE_NAME} collects, what Paddle handles, and how to contact the data controller.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      updated="24 September 2026"
      intro={`This page explains what happens to your data when you visit this site or buy ${SITE_NAME}. It is deliberately short, because this site does very little with data.`}
    >
      <LegalSection heading="What this site collects">
        <p>
          This site has no accounts, no login and no database. It sets no
          cookies of its own, and it runs no analytics, advertising or tracking
          scripts. There is no cookie banner because there is nothing to
          consent to.
        </p>
        <p>
          The site is hosted on Vercel, which processes standard server request
          data — IP address, browser user agent, requested URL and timestamp —
          to serve pages and protect against abuse. We do not use that data to
          build a profile of you.
        </p>
        <p>
          The checkout overlay is loaded from Paddle. When it opens, Paddle sets
          its own cookies and collects the data it needs to process a payment
          and prevent fraud. That is covered by Paddle&rsquo;s privacy notice,
          not this one.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect when you email us">
        <p>
          If you email support or a pre-sales question, we receive your email
          address, your message and anything you attach. We use it only to
          answer you and to keep a record of the conversation, and we keep it in
          our email account for as long as it is useful for support and record
          keeping.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect when you buy">
        <p>
          Paddle.com Market Ltd is the merchant of record. Paddle collects and
          processes your payment details — we never see or store your card
          number. Paddle passes us a limited record of the transaction so we can
          deliver the product and handle support:
        </p>
        <LegalList
          items={[
            "Your name and email address",
            "The tier you bought and the transaction reference",
            "The country and tax information Paddle used to calculate tax",
            "The GitHub username you give us, so we can send the repository invitation",
          ]}
        />
        <p>
          We use that data to deliver the licence, provide support, and keep the
          records we are required to keep. We do not sell it, and we do not use
          it for marketing unless you separately ask us to.
        </p>
        <p>
          Paddle&rsquo;s handling of your data is governed by its own privacy
          notice and its{" "}
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

      <LegalSection heading="Who else processes your data">
        <LegalList
          items={[
            "Paddle.com Market Ltd — payment processing, invoicing and tax, as merchant of record.",
            "Vercel — hosting and delivery of this website.",
            "GitHub — the repository invitation and your access to the source code.",
            "Cloudflare (Email Routing) and Google (Gmail) — receiving and storing email sent to the support inbox.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You can ask us for a copy of the data we hold about you, ask us to
          correct it, or ask us to delete it. Email{" "}
          <a
            className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-100"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          and we will respond.
        </p>
        <p>
          Some data cannot be deleted on request — transaction records that
          Paddle or we must keep for tax and accounting purposes, for example.
          For data Paddle holds as merchant of record, you may need to contact
          Paddle directly.
        </p>
      </LegalSection>

      <LegalSection heading="Data controller">
        <p>
          The data controller for this site and for support correspondence is:
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
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          If this policy changes, the updated version will be posted here with a
          new date at the top.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
