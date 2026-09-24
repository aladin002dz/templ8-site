import Link from "next/link";
import {
  FOOTER_LINKS,
  LEGAL_ENTITY,
  PADDLE_RESELLER_NOTICE,
  SITE_NAME,
  SUPPORT_EMAIL,
} from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {SITE_NAME}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Support:{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-100"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>

          <nav aria-label="Footer">
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

        <div className="mt-10 space-y-2 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          <p>{PADDLE_RESELLER_NOTICE}</p>
          <p>
            © {new Date().getFullYear()} {LEGAL_ENTITY}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
