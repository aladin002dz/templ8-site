import Link from "next/link";
import type { Metadata } from "next";
import { FOOTER_LINKS } from "@/config/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24">
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">
        404
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        That page doesn&rsquo;t exist.
      </h1>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
        The link may be out of date, or the address may have a typo in it.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Go to the homepage
      </Link>

      <nav aria-label="Other pages" className="mt-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-600 underline underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
